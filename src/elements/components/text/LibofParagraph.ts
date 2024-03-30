import {LibofElement} from "../../libofElement";

class LiobfParagraph extends LibofElement{
    override getValue(){
        return `<p ${this.getStyles()} >${this.content}</p>`
    }

    override getODTValue(): string {
        return `
        <text:p text:style-name="${this.id}">
            <text:span>
                ${this.content}
            <text:span/>
        </text:p>`
    }

    override getODTStyle(): string {
        return `
        <style:style style:name="${this.id}" style:family="paragraph" style:parent-style-name="Text_20_body">
            <style:text-properties fo:color="${this.color}" fo:font-size="${this.fontSize}pt" fo:background-color="${this.backgroundColor}" style:font-name="${this.font}" officeooo:rsid="000e9e2b" officeooo:paragraph-rsid="000e9e2b"/>
        </style:style>`   
    }
}

export default LiobfParagraph