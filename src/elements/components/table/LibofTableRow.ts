import {LibofElement} from "../../libofElement";
import LibofTableElement from "./LibofTableElement";

class LibofTableRow extends LibofElement{
    elements:LibofTableElement[]

    constructor(elements:LibofTableElement[], color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor,fontSize, font);
        
        this.elements = elements
       
    }

    override getStyles(){
        return 'style="width:100%; color:' + this.color + '; background-color:' + this.backgroundColor +'; font-family:' + this.font +'"'
    }

    override getValue(){
        const elements = this.elements.map(e => e.getValue()).join(' ')
        return `<tr ${this.getStyles()} > ${elements}</tr>`
    }

    override getODTValue(): string {
        const elements = this.elements.map(e => e.getODTValue()).join(' ')
        return `<table:table-row table:style-name="${this.id}">
            ${elements}
        </table:table-row>`
    }

    override getODTStyle(): string {
        const elements = this.elements.map(e => e.getODTStyle()).join(' ')
        const styles = `<style:style style:name="${this.id}" style:family="table-row">
        <style:table-row-properties style:min-row-height="${this.getElementsData().height}cm"/>
        </style:style>`
        
        return styles + elements
    }

    getElementsData() {
        return {
            height: this.elements[0].height,
            width: this.elements.map(e => e.width)
        }
    }
}

export default LibofTableRow