import {LibofElement} from "../../libofElement";
import { orderedListStyle } from "./listStyles";

class LibofOrderedList extends LibofElement{
    elements:LibofElement[]

    constructor(elements:LibofElement[], color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor,fontSize, font);
        
        this.elements = elements;
    }

    override getValue(){
        const elements = this.elements.map(e => "<li>" + e.getValue() + "</li>").join(' ')
        return `<ol ${this.getStyles()} > ${elements}</ol>`
    }

    override getODTValue(): string {
        const elements = this.elements.map(e => "<text:list-item>" + e.getODTValue() + "</text:list-item>").join(' ')
        return `
        <text:list xml:id="${this.id}" text:style-name="${this.id}">
            ${elements}
        </text:list>`
    }

    override getODTStyle(): string {
        const elements = this.elements.map(e => e.getODTStyle()).join(' ')
        return elements + orderedListStyle
    }
}

export default LibofOrderedList