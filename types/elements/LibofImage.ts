import { LibofElement } from "./libofElement";

export class LibofImage extends LibofElement{
    uri:string

    constructor(uri:string) {
        super('', 'black', 'transparent', 'Arial');
        this.uri = uri;
    }
    
    getValue(){
        return `<img style="width:100%;" src="${this.uri}"></img>`
    }
}
