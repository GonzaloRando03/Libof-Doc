import {LibofElement} from "../../libofElement";

class LibofTextItalic extends LibofElement{
    override getValue(){
        return `<i ${this.getStyles()} >${this.content}</i>`
    }
}

export default LibofTextItalic