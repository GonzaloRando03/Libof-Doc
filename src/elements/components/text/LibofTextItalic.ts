import { ParagraphText } from "./Text";

class LibofTextItalic extends ParagraphText{
    override getValue(){
        return `<i ${this.getStyles()} >${this.content}</i>`
    }

    override getODTValue(): string {
        return `
        <text:span text:style-name="${this.id}">
            ${this.content}
        </text:span>`
    }

    override getODTStyle(): string {
        this.fontSize = this.fontSize === null 
            ? 12
            : this.fontSize
            
        return `
        <style:style style:name="${this.id}" style:family="text" >
            <style:text-properties fo:color="${this.color}" fo:font-size="${this.fontSize}pt" style:font-name="${this.font}" officeooo:rsid="000e9e2b" fo:font-style="italic" style:font-style-asian="italic" style:font-style-complex="italic" officeooo:paragraph-rsid="000e9e2b"/>
        </style:style>`   
    }

    override getODTStyleList(list:string){
        this.fontSize = this.fontSize === null 
            ? 12
            : this.fontSize

        return `
        <style:style style:name="${this.id}" style:family="text" style:parent-style-name="Standard" style:list-style-name="${list}">
        <style:text-properties fo:color="${this.color}" fo:font-size="${this.fontSize}pt" style:font-name="${this.font}" officeooo:rsid="000e9e2b" fo:font-style="italic" style:font-style-asian="italic" style:font-style-complex="italic" officeooo:paragraph-rsid="000e9e2b"/>
        </style:style>`
    }
}

export default LibofTextItalic