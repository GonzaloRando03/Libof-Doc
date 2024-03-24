export class LibofElement {
    content:string
    color:string
    backgroundColor:string
    font:string
    fontSize:number | null
    
    constructor(content:string, color = 'black', backgroundColor = 'transparent',fontSize:number | null = null, font = 'Arial'){
        this.content = content
        this.color = color
        this.backgroundColor = backgroundColor
        this.font = font
        this.fontSize = fontSize
    }

    getStyles(){
        const stylesBase = 'style="color:' + this.color + 
        '; background-color:' + this.backgroundColor +
        '; font-family:' + this.font +';'

        const endStyles = this.fontSize === null
            ? '"'
            : ' font-size:' + this.fontSize + 'pt;"'

        return stylesBase + endStyles
    }

    getValue(){
        return this.content
    }
}
