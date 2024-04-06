import Libofh1 from "../elements/components/title/LibofH1"
import Libofh2 from "../elements/components/title/LibofH2"
import Libofh3 from "../elements/components/title/LibofH3"
import Libofh4 from "../elements/components/title/LibofH4"
import LibofFrontPage from "./components/LibofFrontPage"
import LibofIndex from "./components/LibofIndex"
import { LibofElement } from "../elements/libofElement"
import { LFrontPage } from "../index"
import { endStylesODT, postODT, preODT } from "../utils/docStaticContent"
import JSZip from "jszip"
import { manifestRDF, manifestXML, metaXML, mimetype, settingsXML, stylesXML } from "../utils/odtFiles"
import { orderedListStyle, unorderedListStyle } from "../elements/components/list/listStyles"

class LibofOdtBaseDocument {
    private name:string
    private margin: number
    private content:string
    private elements:LibofElement[]
    private preXML:string
    private postXML:string
    private styleXML:string
    private index:boolean
    private frontPage: LibofFrontPage | null
    
    constructor(name:string, margin = 1){
        this.name = name
        this.margin = margin
        this.content = ''
        this.elements = []
        this.preXML = preODT
        this.postXML = postODT
        this.styleXML = endStylesODT
        this.index = false
        this.frontPage = null
    }

    addFrontPage(frontPage: LFrontPage){
        this.frontPage = frontPage
    }

    addElement(element:LibofElement){
        this.elements.push(element)
    }

    generateIndex(){
        this.index = true
    }


    getXML(){
        let innerHtml = ''
        let styles = ''
        this.elements.forEach(e => {
            innerHtml += e.getODTValue()
            styles += e.getODTStyle()
        })

        if (this.index){
            const elements: any[] = this.elements.filter(e => 
                e instanceof Libofh1 || 
                e instanceof Libofh2 ||
                e instanceof Libofh3 ||
                e instanceof Libofh4
            )

            const index = new LibofIndex(this.name, elements)
            innerHtml = index.getODTValue() + innerHtml
            styles =  index.getODTStyle() + styles
        }

        if (this.frontPage !== null){
            innerHtml = this.frontPage.getValue() + innerHtml
        }

        return this.preXML + styles + orderedListStyle + unorderedListStyle + this.styleXML + innerHtml + this.postXML
    }

    async documentToBlob(){
        const zip = new JSZip();

        const files = [
            { path: 'META-INF/manifest.xml', content: manifestXML },
            { path: 'content.xml', content: this.getXML() },
            { path: 'manifest.rdf', content: manifestRDF },
            { path: 'meta.xml', content: metaXML },
            { path: 'mimetype', content: mimetype },
            { path: 'settings.xml', content: settingsXML },
            { path: 'styles.xml', content: stylesXML }
        ];

        files.forEach(file => {
            zip.file(file.path, file.content);
        });

        return await zip.generateAsync({ type: 'blob' })
    }

    async download(){
        const blob = await this.documentToBlob()
        const filename = this.name + '.odt';
    
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
    
        link.click();
    }
}

export default LibofOdtBaseDocument