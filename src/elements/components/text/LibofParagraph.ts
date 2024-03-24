import {LibofElement} from "../../libofElement";

class LiobfParagraph extends LibofElement{
    getValue(){
        return `<p ${this.getStyles()} >${this.content}</p>`
    }
}

export default LiobfParagraph