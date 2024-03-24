//Imports
import LibofBaseDocument from "./document/libofDocument";
import { LibofHtml } from "./elements/LibofHtml";
import { LibofImage } from "./elements/LibofImage";
import LibofOrderedList from "./elements/components/list/LibofOrderedList";
import LibofUnorderedList from "./elements/components/list/LibofUnorderedList";
import LibofTable from "./elements/components/table/LibofTable";
import LibofTableElement from "./elements/components/table/LibofTableElement";
import LibofTableRow from "./elements/components/table/LibofTableRow";
import LiobfParagraph from "./elements/components/text/LibofParagraph";
import LibofText from "./elements/components/text/LibofText";
import LibofTextBold from "./elements/components/text/LibofTextBold";
import LibofTextItalic from "./elements/components/text/LibofTextItalic";
import LibofH1 from "./elements/components/title/LibofH1";
import LibofH2 from "./elements/components/title/LibofH2";
import LibofH3 from "./elements/components/title/LibofH3";
import LibofH4 from "./elements/components/title/LibofH4";



//Exports
export const LibofDocument = LibofBaseDocument
export const Lh1 = LibofH1
export const Lh2 = LibofH2
export const Lh3 = LibofH3
export const Lh4 = LibofH4
export const LParagraph = LiobfParagraph
export const LTextBold = LibofTextBold
export const LTextItalic = LibofTextItalic
export const LText = LibofText
export const LTable = LibofTable
export const LTableElement = LibofTableElement
export const LTableRow = LibofTableRow
export const LUnorderedList = LibofUnorderedList
export const LOrderedList = LibofOrderedList
export const LHtml = LibofHtml
export const LImage = LibofImage

export const lTab = ' &ensp; '
export const lLineBreak = ' <br> '
export const lWhiteSpace = ' &nbsp; '