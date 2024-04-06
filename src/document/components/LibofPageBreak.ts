import { lPageBreak } from "../..";
import { LibofElement } from "../../elements/libofElement";

class LibofPageBreak extends LibofElement{
    elements:LibofElement[] = []

    constructor() {
        super('');
    }

    override getValue(){
        return lPageBreak
    }

    override getODTStyle(): string {
        return `<style:style style:name="LibofPageBreak${this.id}" style:family="paragraph" style:parent-style-name="Text_20_body" style:list-style-name="">
            <style:paragraph-properties fo:break-before="page"/>
            <style:text-properties officeooo:rsid="001aa2ec" officeooo:paragraph-rsid="001aa2ec"/>
        </style:style>`
    }

    override getODTValue(): string {
        return `<text:p text:style-name="LibofPageBreak${this.id}"></text:p>`
    }
}

export default LibofPageBreak