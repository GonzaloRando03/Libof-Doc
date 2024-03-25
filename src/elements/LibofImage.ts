import { LibofElement } from "./libofElement";

export class LibofImage extends LibofElement{
    uri:string
    size:number

    constructor(uri:string, size:number = 100) {
        super('', 'black', 'transparent', 12, 'Arial');
        this.uri = uri;
        this.size = size
    }
    
    override getValue(){
        return `<img style="width:${this.size}%;" src="${this.uri}"></img>`
    }
}
