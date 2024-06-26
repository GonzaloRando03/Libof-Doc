import Libofh1 from "../elements/components/title/LibofH1"
import Libofh2 from "../elements/components/title/LibofH2"
import Libofh3 from "../elements/components/title/LibofH3"
import Libofh4 from "../elements/components/title/LibofH4"
import LibofFrontPage from "./components/LibofFrontPage"
import LibofIndex from "./components/LibofIndex"
import { LibofElement } from "../elements/libofElement"
import { LFrontPage } from "../index"
import { postHtml, preHtml } from "../utils/docStaticContent"
import LibofPageBreak from "./components/LibofPageBreak"

class LibofHTMLBaseDocument {
    private name:string
    private margin: number
    private content:string
    private elements:LibofElement[]
    private preHtml:string
    private postHtml:string
    private index:boolean
    private frontPage: LibofFrontPage | null
    
    constructor(name:string, margin = 1){
        this.name = name
        this.margin = margin
        this.content = ''
        this.elements = []
        this.preHtml = preHtml
        this.postHtml = postHtml
        this.index = false
        this.frontPage = null
    }

    addFrontPage(frontPage: LFrontPage){
        this.frontPage = frontPage
    }

    addElement(element:LibofElement){
        this.elements.push(element)
    }

    setFullElements(elements: LibofElement[]){
        this.elements = elements
    }

    generateIndex(){
        this.index = true
    }

    addPageBreak(){
        this.elements.push(new LibofPageBreak())
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

        if (this.frontPage !== null){
            innerHtml = this.frontPage.getValue() + innerHtml
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

export default LibofHTMLBaseDocument