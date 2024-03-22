import {LibofElement} from "../../libofElement";

class LibofTextItalic extends LibofElement{
    getValue(){
        return `<i ${this.getStyles()} >${this.content}</i>`
    }
}

export default LibofTextItalic