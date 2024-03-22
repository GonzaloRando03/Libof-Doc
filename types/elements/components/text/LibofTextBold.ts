import {LibofElement} from "../../libofElement";

class LibofTextBold extends LibofElement{
    getValue(){
        return `<b ${this.getStyles()} >${this.content}</b>`
    }
}

export default LibofTextBold