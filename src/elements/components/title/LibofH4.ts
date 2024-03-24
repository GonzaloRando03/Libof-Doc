import {LibofElement} from "../../libofElement";

class Libofh4 extends LibofElement{
    getValue(){
        return `<h4 ${this.getStyles()} >${this.content}</h4>`
    }
}

export default Libofh4