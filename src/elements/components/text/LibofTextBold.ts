import {LibofElement} from "../../libofElement";

class LibofTextBold extends LibofElement{
    override getValue(){
        return `<b ${this.getStyles()} >${this.content}</b>`
    }
}

export default LibofTextBold