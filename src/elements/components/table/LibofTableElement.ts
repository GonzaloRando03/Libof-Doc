import {LibofElement} from "../../libofElement";

class LibofTableElement extends LibofElement{
    width:number
    height:number
    colspan:number|null = null
    rowspan:number|null = null

    constructor(
        content:string, 
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
        
        this.content = content;
        this.width = width
        this.height = height
        this.colspan = colspan
        this.rowspan = rowspan
    }

    getStyles(){
        return 'style="width:' + this.width + '%; height:' + this.height + '0px; color:' + this.color + '; background-color:' + this.backgroundColor +'; font-family:' + this.font +'"'
    }

    getValue(){
        const colspan = this.colspan !== null 
            ? 'colspan="' + this.colspan + '"'
            : ''
        
        const rowspan = this.rowspan !== null 
            ? 'rowspan="' + this.rowspan + '"'
            : ''
    
        return '<td ' + colspan + ' ' + rowspan + ` ${this.getStyles()} > ${this.content}</td>`
    }
}

export default LibofTableElement