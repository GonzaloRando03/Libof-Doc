import { lLineBreak, lTab } from "../..";
import { Header } from "../../elements/components/title/Header";
import { LibofElement } from "../../elements/libofElement";

class LibofIndex extends LibofElement{
    private indexName:string
    private elements:Header[]
    private tabs:string[] = ['', lTab, lTab + lTab, lTab + lTab + lTab]

    constructor(indexName:string, elements:Header[], color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor, fontSize, font);
        
        this.indexName = indexName
        this.elements = elements
    }

    setElements(elements: Header[]){
        this.elements = elements
    }

    override getValue(){
       const indexHeaders = this.elements.map(e => {
            const tabs = this.tabs[e.indexNumber -1]
            return tabs + '<a href="#' + e.id + '">' + e.content + '</a>' + lLineBreak
       }).join(" ")

       const htmlContent = `
       <div>
            <h3>${this.indexName}</h3>
            ${indexHeaders}
       </div>
       <br></br>
       <p style="page-break-before: always"></p>
       `

       return htmlContent
    }
}

export default LibofIndex