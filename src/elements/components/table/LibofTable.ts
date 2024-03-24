import {LibofElement} from "../../libofElement";
import LibofTableRow from "./LibofTableRow";

class LibofTable extends LibofElement{
    rows:LibofTableRow[]

    constructor(color?:string, backgroundColor?:string, fontSize?:number, font?:string) {
        super('', color, backgroundColor, fontSize, font);
        
        this.rows = [];
    }

    addRow(tableRow:LibofTableRow){
        this.rows.push(tableRow)
    }

    getStyles(){
        return 'style="width:100%; color:' + this.color + '; background-color:' + this.backgroundColor +'; font-family:' + this.font +'"'
    }

    getValue(){
        const elements = this.rows.map(e => e.getValue()).join(' ')
        return `<table ${this.getStyles()} > ${elements}</table>`
    }
}

export default LibofTable