import { LibofElement } from "../../libofElement";
import { Header } from "./Header";

class Libofh3 extends LibofElement implements Header{
    id:string =  this.generateId()
    indexNumber = 3

    override getValue(){
        return `<h3 id="${this.id}" ${this.getStyles()} >${this.content}</h3>`
    }
}

export default Libofh3