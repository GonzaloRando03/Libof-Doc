import {LibofElement} from "../../libofElement";

class LibofOrderedList extends LibofElement{
    elements:LibofElement[]

    constructor(elements:LibofElement[], color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor,fontSize, font);
        
        this.elements = elements;
    }

    getValue(){
        const elements = this.elements.map(e => "<li>" + e.getValue() + "</li>").join(' ')
        return `<ol ${this.getStyles()} > ${elements}</ol>`
    }
}

export default LibofOrderedList