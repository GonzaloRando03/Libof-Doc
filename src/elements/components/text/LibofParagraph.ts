import {LibofElement} from "../../libofElement";

class LiobfParagraph extends LibofElement{
    override getValue(){
        return `<p ${this.getStyles()} >${this.content}</p>`
    }
}

export default LiobfParagraph