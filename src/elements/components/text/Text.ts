export class ParagraphText {
    id:string
    content:string
    color:string
    font:string
    fontSize:number | null
    
    constructor(content:string, color = 'black',fontSize:number | null = null, font = 'Arial'){
        this.content = content
        this.color = color
        this.font = font
        this.fontSize = fontSize
        this.id = this.generateId()
    }

    generateId() :string {
        let numeroAleatorio:any = Math.random();
        numeroAleatorio = String(numeroAleatorio).replace(".", "");
        let numeroAleatorio2:any = Math.random();
        numeroAleatorio2 = String(numeroAleatorio2).replace(".", "");

        numeroAleatorio += numeroAleatorio2
        
        while (numeroAleatorio.length < 10) {
            numeroAleatorio = "385497" + numeroAleatorio;
        }
        
        return numeroAleatorio.slice(0, 10);
    }

    getStyles(){
        const stylesBase = 'style="color:' + this.color + 
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

    getODTStyleList(list:string){
        return ''
    }
}