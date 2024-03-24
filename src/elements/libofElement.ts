export class LibofElement {
    content:string
    color:string
    backgroundColor:string
    font:string
    fontSize:number
    
    constructor(content:string, color = 'black', backgroundColor = 'transparent',fontSize = 12, font = 'Arial'){
        this.content = content
        this.color = color
        this.backgroundColor = backgroundColor
        this.font = font
        this.fontSize = fontSize
    }

    getStyles(){
        return 'style="color:' + this.color + 
        '; background-color:' + this.backgroundColor +
        '; font-family:' + this.font +'; font-size:' + 
        this.fontSize + 'px;"'
    }

    getValue(){
        return this.content
    }
}
