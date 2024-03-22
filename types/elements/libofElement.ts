export class LibofElement {
    content:string
    color:string
    backgroundColor:string
    font:string
    
    constructor(content:string, color = 'black', backgroundColor = 'transparent', font = 'Arial'){
        this.content = content
        this.color = color
        this.backgroundColor = backgroundColor
        this.font = font
    }

    getStyles(){
        return 'style="color:' + this.color + '; background-color:' + this.backgroundColor +'; font-family:' + this.font +'"'
    }

    getValue(){
        return this.content
    }
}
