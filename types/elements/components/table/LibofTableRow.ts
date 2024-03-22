import {LibofElement} from "../../libofElement";
import LibofTableElement from "./LibofTableElement";

class LibofTableRow extends LibofElement{
    elements:LibofTableElement[]

    constructor(elements:LibofTableElement[], color?:string, backgroundColor?:string, font?:string) {
        super('', color, backgroundColor, font);
        
        this.elements = elements
       
    }

    getStyles(){
        return 'style="width:100%; color:' + this.color + '; background-color:' + this.backgroundColor +'; font-family:' + this.font +'"'
    }

    getValue(){
        const elements = this.elements.map(e => e.getValue()).join(' ')
        return `<tr ${this.getStyles()} > ${elements}</tr>`
    }
}

export default LibofTableRow