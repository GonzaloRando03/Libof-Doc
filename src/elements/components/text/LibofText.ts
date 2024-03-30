import {LibofElement} from "../../libofElement";

class LibofText extends LibofElement{
    override getValue(){
        return `<span ${this.getStyles()} >${this.content}</span>`
    }

    override getODTValue(): string {
        return `
        <text:span text:style-name="${this.id}">
            ${this.content}
        </text:span>`
    }

    override getODTStyle(): string {
        return `
        <style:style style:name="${this.id}" style:family="paragraph" style:parent-style-name="text">
            <style:text-properties fo:color="${this.color}" fo:font-size="${this.fontSize}pt" fo:background-color="${this.backgroundColor}" style:font-name="${this.font}" officeooo:rsid="000e9e2b" officeooo:paragraph-rsid="000e9e2b"/>
        </style:style>`   
    }
}

export default LibofText