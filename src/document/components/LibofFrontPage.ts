import { lPageBreak } from "../../index";
import { LibofElement } from "../../elements/libofElement";

class LibofFrontPage extends LibofElement{
    elements:LibofElement[] = []

    constructor(color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor, fontSize, font);
    }

    addElement(e: LibofElement){
        this.elements.push(e)
    }

    override getValue(){
        const elements = this.elements.map(e => e.getValue()).join(' ')
        return `<div>
            ${elements}
        </div> ${lPageBreak}`
    }
}

export default LibofFrontPage