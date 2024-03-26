import { LibofElement } from "../../libofElement";
import { Header } from "./Header";

class Libofh4 extends LibofElement implements Header{
    id:string =  this.generateId()
    indexNumber = 4

    override getValue(){
        return `<h4 id="${this.id}" ${this.getStyles()} >${this.content}</h4>`
    }
}

export default Libofh4