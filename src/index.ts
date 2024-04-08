//Imports
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
import LibofFrontPage from "./document/components/LibofFrontPage"
import LibofMixDocument from "./document/LibofMixDocument";
import { LibofHtml } from "./elements/LibofHtml";
import { LibofImage } from "./elements/LibofImage";


//Exports
const lTab = ' &ensp; '
const lODTTab = ' <text:tab/> '
const lLineBreak = ' <br> '
const lWhiteSpace = ' &nbsp; '
const lPageBreak = ' <p style="page-break-before: always"></p> '

export {
    LibofMixDocument as LibofDocument,
    LibofFrontPage as LFrontPage,
    LibofHtml as LHtml,
    LibofImage as LImage,
    LibofOrderedList as LOrderedList,
    LibofUnorderedList as LUnorderedList,
    LibofTable as LTable,
    LibofTableElement as LTableElement,
    LibofTableRow as LTableRow,
    LiobfParagraph as LParagraph,
    LibofText as LText,
    LibofTextBold as LTextBold,
    LibofTextItalic as LTextItalic,
    LibofH1 as Lh1, 
    LibofH2 as Lh2,
    LibofH3 as Lh3,
    LibofH4 as Lh4,
    lTab,
    lLineBreak,
    lWhiteSpace,
    lPageBreak,
    lODTTab
  };