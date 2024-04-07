import { lPageBreak } from "../../index";
import { LibofElement } from "../../elements/libofElement";
import LibofPageBreak from "./LibofPageBreak";

class LibofFrontPage extends LibofElement{
    elements:LibofElement[] = []
    private pageBreak = new LibofPageBreak()

    constructor(color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor, fontSize, font);
    }

    addElement(e: LibofElement){
        this.elements.push(e)
    }

    override getValue(){
        const elements = this.elements.map(e => e.getValue()).join(' ')
        return `<div style="font-family: ${this.font}; color: ${this.color};">
            ${elements}
        </div> ${lPageBreak}`
    }

    override  getODTStyle(): string {
        const elements = this.elements.map(e => e.getODTStyle()).join(' ')
        return elements + this.pageBreak.getODTStyle()
    }

    override  getODTValue(): string {
        const elements = this.elements.map(e => e.getODTValue()).join(' ')
        return elements + this.pageBreak.getODTValue()
    }
}

export default LibofFrontPage