import { LibofElement } from "../../libofElement";
import { Header } from "./Header";

class Libofh2 extends LibofElement implements Header {
    id:string =  this.generateId()
    indexNumber = 2

    override getValue(){
        return `<h2  id="${this.id}" ${this.getStyles()} >${this.content}</h2>`
    }
}

export default Libofh2