import { LibofElement } from "../../libofElement";
import { LTableRow } from "../../../index"

class LibofTable extends LibofElement{
    rows:LTableRow[]
    columId = this.id + '.Column'

    constructor(color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor, fontSize, font);
        
        this.rows = [];
    }

    addRow(tableRow:LTableRow){
        this.rows.push(tableRow)
    }

    override getStyles(){
        return 'style="width:100%; color:' + this.color + '; background-color:' + this.backgroundColor +'; font-family:' + this.font +'"'
    }

    override getValue(){
        const elements = this.rows.map(e => e.getValue()).join(' ')
        return `<table ${this.getStyles()} > ${elements}</table>`
    }

    override getODTStyle(): string {
        const columns = this.getColumnData().width.map((c,i) => `<style:style style:name="${this.id + '.' + i}" style:family="table-column">
            <style:table-column-properties style:column-width="${c}cm"/>
        </style:style>`).join(' ')

        const elements = this.rows.map(e => e.getODTStyle()).join(' ')
        
        const tableStyles = `<style:style style:name="${this.id}" style:family="table">
            <style:table-properties style:width="100%" table:align="margins"/>
        </style:style>`

        return tableStyles + columns + elements
    }

    override getODTValue(): string {
        const elements = this.rows.map(e => e.getODTValue()).join(' ')
        const columns = this.getColumnData().width.map((c,i) => '<table:table-column table:style-name="' + this.id + '.' + i + '"/>').join(' ')

        return `<table:table table:name="${this.id}" table:style-name="${this.id}" table:template-name="Default Style">
            ${columns}
            ${elements}
        </table:table>`
    }

    getColumnData(){
        const elemento = this.rows.reduce((max, obj) => 
            obj.getElementsData().width.length > max.getElementsData().width.length 
                ? obj 
                : max, 
            this.rows[0])
        
       return elemento.getElementsData()
    }
}

export default LibofTable