import { lPageBreak } from "../../index";
import { LibofElement } from "../../elements/libofElement";

class LibofFrontPage extends LibofElement{
    elements:LibofElement[] = []

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