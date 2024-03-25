import { LibofElement } from "./libofElement";

export class LibofHtml extends LibofElement{
    override getValue(){
        return this.content
    }
}
