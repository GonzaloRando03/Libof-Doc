export class LibofElement {
    id:string
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
        this.id = this.generateId()
    }

    generateId() :string {
        let numeroAleatorio:any = Math.random();
        numeroAleatorio = String(numeroAleatorio).replace(".", "");
        
        while (numeroAleatorio.length < 10) {
            numeroAleatorio = "385497" + numeroAleatorio;
        }
        
        return numeroAleatorio.slice(0, 10);
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

    getODTValue(){
        return this.content
    }

    getODTStyle(){
        return ''
    }
}
