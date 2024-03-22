import {LibofElement} from "../../libofElement";

class LibofUnorderedList extends LibofElement{
    elements:LibofElement[]

    constructor(elements:LibofElement[], color?:string, backgroundColor?:string, font?:string) {
        super('', color, backgroundColor, font);
        
        this.elements = elements;
    }

    getValue(){
        const elements = this.elements.map(e => "<li>" + e.getValue() + "</li>").join(' ')
        return `<ul ${this.getStyles()} > ${elements}</ul>`
    }
}

export default LibofUnorderedList