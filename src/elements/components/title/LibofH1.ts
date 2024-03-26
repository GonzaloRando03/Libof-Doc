import { LibofElement } from "../../libofElement";
import { Header } from "./Header";

class Libofh1 extends LibofElement implements Header{
    id:string = this.generateId()
    indexNumber = 1
    
    override getValue(){
        return `<h1 id="${this.id}" ${this.getStyles()} >${this.content}</h1>`
    }
}

export default Libofh1