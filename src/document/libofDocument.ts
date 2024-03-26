import { Header } from "../elements/components/title/Header"
import Libofh1 from "../elements/components/title/LibofH1"
import Libofh2 from "../elements/components/title/LibofH2"
import Libofh3 from "../elements/components/title/LibofH3"
import Libofh4 from "../elements/components/title/LibofH4"
import { LibofElement } from "../elements/libofElement"
import LibofIndex from "./components/LibofIndex"

class LibofBaseDocument {
    private name:string
    private content:string
    private elements:LibofElement[]
    private preHtml:string
    private postHtml:string
    private index:boolean
    
    constructor(name:string){
        this.name = name
        this.content = ''
        this.elements = []
        this.preHtml = "<!DOCTYPE html><html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>" + name +"</title></head><body>"
        this.postHtml = "</body></html>"
        this.index = false
    }


    addElement(element:LibofElement){
        this.elements.push(element)
    }

    generateIndex(){
        this.index = true
    }


    getHtml(){
        let innerHtml = ''
        this.elements.forEach(e => {
            innerHtml += e.getValue()
        })

        if (this.index){
            const elements: any[] = this.elements.filter(e => 
                e instanceof Libofh1 || 
                e instanceof Libofh2 ||
                e instanceof Libofh3 ||
                e instanceof Libofh4
            )

            const index = new LibofIndex(this.name, elements)
            innerHtml = index.getValue() + innerHtml
        }

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