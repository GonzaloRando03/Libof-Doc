import {LibofElement} from "../../libofElement";

class Libofh2 extends LibofElement{
    getValue(){
        return `<h2 ${this.getStyles()} >${this.content}</h2>`
    }
}

export default Libofh2