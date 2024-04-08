import { LFrontPage } from ".."
import { LibofElement } from "../elements/libofElement"
import LibofFrontPage from "./components/LibofFrontPage"
import LibofPageBreak from "./components/LibofPageBreak"
import LibofHTMLBaseDocument from "./libofHTMLDocument"
import LibofOdtBaseDocument from "./libofOdtDocument"

class LibofMixDocument {
    private name:string
    private margin:number
    private elements:LibofElement[]
    private index:boolean
    private frontPage: LibofFrontPage | null

    constructor(name:string, margin = 1){
        this.name = name
        this.margin = margin
        this.elements = []
        this.index = false
        this.frontPage = null
    }

    addFrontPage(frontPage: LFrontPage){
        this.frontPage = frontPage
    }

    addElement(element:LibofElement){
        this.elements.push(element)
    }

    generateIndex(){
        this.index = true
    }

    addPageBreak(){
        this.elements.push(new LibofPageBreak())
    }

    private getODTDocument(){
        const document = new LibofOdtBaseDocument(this.name, this.margin)
        document.setFullElements(this.elements)

        if (this.index){
            document.generateIndex()
        }

        if (this.frontPage){
            document.addFrontPage(this.frontPage)
        }

        return document
    }

    private getDOCXDocument(){
        const document = new LibofHTMLBaseDocument(this.name, this.margin)
        document.setFullElements(this.elements)

        if (this.index){
            document.generateIndex()
        }

        if (this.frontPage){
            document.addFrontPage(this.frontPage)
        }

        return document
    }

    async documentToBlob(){
        const document = this.getODTDocument()
        return await document.documentToBlob()
    }

    async download(){
        const document = this.getODTDocument()
        await document.download()
    }

    documentToDocxBlob(){
        const document = this.getDOCXDocument()
        return document.documentToBlob()
    }

    downloadAsDOCX(){
        const document = this.getDOCXDocument()
        document.download()
    }

}

export default LibofMixDocument