import { LibofElement } from "../../libofElement";
import { ParagraphText } from "./Text";

class LiobfParagraph extends LibofElement{
    private elements:ParagraphText[] = []

    constructor(color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor, fontSize, font);
    }

    addText(text:ParagraphText){
        this.elements.push(text)
    }

    private getChildStyles(type:DocType){
        switch (type) {
            case DocType.ODT:
                return this.elements.map(e => e.getODTStyle()).join(' ')
                break;
        
            default:
                return ''
                break;
        }
    }

    private getChildValue(type:DocType){
        switch (type) {
            case DocType.HTML:
                return this.elements.map(e => e.getValue()).join(' ')
                break;
            
            case DocType.ODT:
                return this.elements.map(e => e.getODTValue()).join(' ')
                break;
        
            default:
                return ''
                break;
        }
    }

    override getValue(){
        return `<p ${this.getStyles()} >${this.getChildValue(DocType.HTML)}</p>`
    }

    override getODTValue(): string {
        return `
        <text:p text:style-name="${this.id}">
            ${this.getChildValue(DocType.ODT)}
        </text:p>`
    }

    override getODTStyle(): string {
        this.fontSize = this.fontSize === null 
            ? 12
            : this.fontSize

        const parentStyles = `
        <style:style style:name="${this.id}" style:family="paragraph" style:parent-style-name="Text_20_body">
            <style:text-properties fo:color="${this.color}" fo:font-size="${this.fontSize}pt" fo:background-color="${this.backgroundColor}" style:font-name="${this.font}" officeooo:rsid="000e9e2b" officeooo:paragraph-rsid="000e9e2b"/>
        </style:style>`   

        return this.getChildStyles(DocType.ODT) + parentStyles
    }

    getODTStyleList(list:string){
        this.fontSize = this.fontSize === null 
            ? 12
            : this.fontSize

        const parentStyles = `
        <style:style style:name="${this.id}" style:family="paragraph" style:parent-style-name="Standard" style:list-style-name="${list}">
            <style:text-properties fo:color="${this.color}" fo:font-size="${this.fontSize}pt" fo:background-color="${this.backgroundColor}" style:font-name="${this.font}" officeooo:rsid="000e9e2b" officeooo:paragraph-rsid="000e9e2b"/>
        </style:style>`

        return this.getChildStyles(DocType.ODT) + parentStyles
    }
}

enum DocType {
    HTML = 1,
    ODT = 2
}

export default LiobfParagraph