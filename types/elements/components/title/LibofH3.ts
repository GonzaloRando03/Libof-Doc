import {LibofElement} from "../../libofElement";

class Libofh3 extends LibofElement{
    getValue(){
        return `<h3 ${this.getStyles()} >${this.content}</h3>`
    }
}

export default Libofh3