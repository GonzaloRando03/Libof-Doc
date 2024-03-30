import { LibofElement } from "../../libofElement";
import { Header } from "./Header";

class Libofh3 extends LibofElement implements Header{
    id:string =  this.generateId()
    indexNumber = 3

    override getValue(){
        return `<h3 id="${this.id}" ${this.getStyles()} >${this.content}</h3>`
    }

    override getODTValue(): string {
        return `
        <text:h text:style-name="${this.id}" text:outline-level="3">
            <text:bookmark-start text:name="${this.id}"/>
                ${this.content}
            <text:bookmark-end text:name="${this.id}"/>
        </text:h>`
    }

    override getODTStyle(): string {
        return `
        <style:style style:name="${this.id}" style:family="paragraph" style:parent-style-name="Heading_20_3" style:list-style-name="">
            <style:text-properties fo:color="${this.color}" fo:background-color="${this.backgroundColor}" style:font-name="${this.font}" officeooo:rsid="000e9e2b" officeooo:paragraph-rsid="000e9e2b"/>
        </style:style>`   
    }
}

export default Libofh3