import { LibofElement } from "../elements/libofElement"

class LibofBaseDocument {
    name:string
    content:string
    elements:LibofElement[]
    preHtml:string
    postHtml:string
    
    constructor(name:string){
        this.name = name
        this.content = ''
        this.elements = []
        this.preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>" + name +"</title></head><body>"
        this.postHtml = "</body></html>"
    }


    addElement(element:LibofElement){
        this.elements.push(element)
    }

    getHtml(){
        let innerHtml = ''
        this.elements.forEach(e => {
            innerHtml += e.getValue()
        })
        return this.preHtml + innerHtml + this.postHtml
    }

    documentToBlob(){
        const html = this.getHtml()
        return new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
    }

    download(){
        const blob = this.documentToBlob()
        const filename = this.name + '.docx';
    
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
    
        link.click();
    }
}

export default LibofBaseDocument