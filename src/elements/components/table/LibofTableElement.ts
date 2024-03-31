import { LibofElement } from "../../libofElement";

class LibofTableElement extends LibofElement{
    innerElement:LibofElement
    width:number
    height:number
    colspan:number|null = null
    rowspan:number|null = null

    constructor(
        text:LibofElement, 
        width:number, 
        height:number, 
        colspan:number|null = null, 
        rowspan:number|null = null, 
        color?:string, 
        backgroundColor?:string, 
        fontSize?:number,
        font?:string
    ) {
        super('', color, backgroundColor, fontSize, font);
        
        this.innerElement = text;
        this.width = width
        this.height = height
        this.colspan = colspan
        this.rowspan = rowspan
    }

    override getStyles(){
        return 'style="width:' + this.width + '%; height:' + this.height + '0px; color:' + this.color + '; background-color:' + this.backgroundColor +'; font-family:' + this.font +'"'
    }

    override getValue(){
        const colspan = this.colspan !== null 
            ? 'colspan="' + this.colspan + '"'
            : ''
        
        const rowspan = this.rowspan !== null 
            ? 'rowspan="' + this.rowspan + '"'
            : ''
    
        return '<td ' + colspan + ' ' + rowspan + ` ${this.getStyles()} > ${this.innerElement.getValue()}</td>`
    }

    override getODTStyle(): string {
        return `<style:style style:name="${this.id}" style:family="table-cell">
            <style:table-cell-properties fo:background-color="${this.backgroundColor}" fo:padding="0.097cm" fo:border="0.5pt solid #000000" style:writing-mode="page">
            <style:background-image/>
            </style:table-cell-properties>
        </style:style>` + this.innerElement.getODTStyle()
    }

    override getODTValue(): string {
        const colspan = this.colspan !== null 
            ? 'table:number-columns-spanned="' + this.colspan + '"'
            : ''
        
        const rowspan = this.rowspan !== null 
            ? 'table:number-rows-spanned="' + this.rowspan + '"'
            : ''
    
        return '<table:table-cell table:style-name="' + this.id + '" ' + colspan + ' ' + rowspan + ` office:value-type="string" > ${this.innerElement.getODTValue()} </table:table-cell>`
    }
}

export default LibofTableElement