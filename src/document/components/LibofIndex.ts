import { lLineBreak, lODTTab, lTab } from "../../index";
import { Header } from "../../elements/components/title/Header";
import { LibofElement } from "../../elements/libofElement";
import Libofh2 from "../../elements/components/title/LibofH2";
import LibofPageBreak from "./LibofPageBreak";

class LibofIndex extends LibofElement{
    private indexName:string
    private elements:Header[]
    private tabs:string[] = ['', lTab, lTab + lTab, lTab + lTab + lTab]
    private odtTabls: string[] = ['', lODTTab, lODTTab + lODTTab, lODTTab + lODTTab + lODTTab]
    private pageBreak = new LibofPageBreak()
    private title:Libofh2

    constructor(indexName:string, elements:Header[], color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor, fontSize, font);
        
        this.indexName = indexName
        this.elements = elements
        this.title = new Libofh2(indexName)
    }

    setElements(elements: Header[]){
        this.elements = elements
    }

    override getValue(){
       const indexHeaders = this.elements.map(e => {
            const tabs = this.tabs[e.indexNumber -1]
            return tabs + '<a href="#' + e.id + '" style="text-decoration: none;">' + e.content + '</a>' + lLineBreak
       }).join(" ")

       const htmlContent = `
       <div style="font-family: ${this.font}; color: ${this.color};">
            <h2>${this.indexName}</h2>
            ${indexHeaders}
       </div>
       <br></br>
       <p style="page-break-before: always"></p>
       `

       return htmlContent
    }

    override getODTStyle(): string {
        return this.title.getODTStyle() +  ` <style:style style:name="P1" style:family="paragraph" >
            <style:paragraph-properties>
    
            </style:paragraph-properties>
        </style:style>` + this.pageBreak.getODTStyle()
    }

    override getODTValue(){
        const indexHeaders = this.elements.map(e => {
             const tabs = this.odtTabls[e.indexNumber -1]
             return `<text:p text:style-name="P1">
             ${tabs}
             <text:a xlink:type="simple" xlink:href="#${e.id}" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
                 ${e.content}
             </text:a>
         </text:p>`
        }).join(" ")

        return this.title.getODTValue() + ' ' + indexHeaders + ' ' + this.pageBreak.getODTValue()
     }


     
}

export default LibofIndex