import {LibofElement} from "../../libofElement";
import { unorderedListStyle } from "./listStyles";

class LibofUnorderedList extends LibofElement{
    elements:LibofElement[]

    constructor(elements:LibofElement[], color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor, fontSize, font);
        
        this.elements = elements;
    }

    override getValue(){
        const elements = this.elements.map(e => "<li>" + e.getValue() + "</li>").join(' ')
        return `<ul ${this.getStyles()} > ${elements}</ul>`
    }

    override getODTValue(): string {
        const elements = this.elements.map(e => "<text:list-item>" + e.getODTValue() + "</text:list-item>").join(' ')
        return `
        <text:list text:style-name="${this.id}">
            ${elements}
        </text:list>`
    }

    override getODTStyle(): string {
        const elements = this.elements.map(e => e.getODTStyle()).join(' ')
        return elements + unorderedListStyle
    }
}

export default LibofUnorderedList