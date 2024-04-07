import { LibofElement } from "./libofElement";

export class LibofImage extends LibofElement{
    uri: string
    width: number
    height: number
    extension: string
    zipUri: string

    constructor(imageBase64:string, width:number = 100, height = 100) {
        super('', 'black', 'transparent', 12, 'Arial');
        this.uri = imageBase64.split("base64,")[1];
        this.width = width
        this.height = height
        this.extension = imageBase64.substring("data:image/".length, imageBase64.indexOf(";base64")).toLocaleLowerCase();
        this.zipUri = 'Pictures/' + this.id + '.' + this.extension
    }
    
    override getValue(){
        return `<img style="width:${this.width}%; height:${this.height}%;" src="${this.uri}"></img>`
    }

    override getODTValue(): string {
        return `<text:p text:style-name="${this.id}">
            <draw:frame draw:style-name="${this.id}Image" draw:name="${this.id}" text:anchor-type="char" svg:width="${this.width / 10}cm" svg:height="${this.height / 10}cm" draw:z-index="0">
                <draw:image xlink:href="${this.zipUri}" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad" draw:mime-type="image/${this.extension}"/>
            </draw:frame>
        </text:p>`
    }

    override getODTStyle(): string {
        return `<style:style style:name="${this.id}" style:family="paragraph" style:parent-style-name="Standard">
            <style:text-properties style:font-name="Arial" officeooo:rsid="001811ca" officeooo:paragraph-rsid="001811ca"/>
        </style:style>
        <style:style style:name="${this.id}Image" style:family="graphic" style:parent-style-name="Graphics">
            <style:graphic-properties style:horizontal-pos="center" style:horizontal-rel="paragraph" style:mirror="none" fo:clip="rect(0cm, 0cm, 0cm, 0cm)" draw:luminance="0%" draw:contrast="0%" draw:red="0%" draw:green="0%" draw:blue="0%" draw:gamma="100%" draw:color-inversion="false" draw:image-opacity="100%" draw:color-mode="standard"/>
        </style:style>`
    }

    
}
