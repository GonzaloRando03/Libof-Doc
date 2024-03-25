import {LibofElement} from "../../libofElement";

class Libofh1 extends LibofElement{
    override getValue(){
        return `<h1 ${this.getStyles()} >${this.content}</h1>`
    }
}

export default Libofh1