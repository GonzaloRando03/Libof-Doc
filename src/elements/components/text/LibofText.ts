import {LibofElement} from "../../libofElement";

class LibofText extends LibofElement{
    getValue(){
        return `<span ${this.getStyles()} >${this.content}</span>`
    }
}

export default LibofText