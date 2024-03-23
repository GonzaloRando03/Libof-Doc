# Libof Doc

Library for generating odt and doc documents for JavaScript

## Use with TypeScript
```
import LibofDocument from 'libof-doc/types/document/libofDocument';

const document = new LibofDocument("testDocument");
```

## Use with Node Environments
```
import LibofDocument from 'libof-doc/dist-node/document/libofDocument';

const document = new LibofDocument("testDocument");
```

## Use with ES6
```
import LibofDocument from 'libof-doc/dist-browser/document/libofDocument';

const document = new LibofDocument("testDocument");
```

## Titles
```
import {Lh1, Lh2, Lh3, Lh4} from 'libof-doc/dist-node/elements/components/title'

document.addElement(new Lh1("Title 1", 'blue', 'red', 'Serif'))
document.addElement(new Lh2("Title 2"))
document.addElement(new Lh3("Title 3"))
document.addElement(new Lh4("Title 4"))

// blue => text color
// red => background color
// Serif => font
```

<b>IMPORTANT: </b> All components have the color, background color and font properties.


## Text
```
import {LParagraph, LTextItalic, LTextBold, LText} from 'libof-doc/dist-node/elements/components/text'
import {lWhiteSpace, lLineBreak} from 'libof-doc/dist-node'

document.addElement(new LParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"))

document.addElement(new LTextBold('Text bold'))

document.addElement(new LText(lWhiteSpace))

document.addElement(new LTextItalic('Text italic'))

document.addElement(new LText(lLineBreak))

```

## Lists
```
import {LOrderedList, LUnorderedList} from 'libof-doc/dist-node/elements/components/list'

//Simple list
const elementList = [
    new LText("Element 1"),
    new LText("Element 2"),
    new LText("Element 3"),
    new LText("Element 4")
]
document.addElement(new LOrderedList(elementList))
document.addElement(new LUnorderedList(elementList))

//Concatenated lists
const concatList = [
    new LText("Element 1"),
    new LText("Element 2"),
    new LText("Element 3"),
    new LUnorderedList(elementList)
]
document.addElement(new LUnorderedList(concatList))
```

## Tables
```
import {LTable, LTableElement, LTableRow} from 'libof-doc/dist-node/elements/components/table'

const table = new LTable()
  
const tableRow1 = new LTableRow([
    new LTableElement(new LTextBold('Table Element').getValue(), 25, 5),
    new LTableElement(new LTextBold('Table Element').getValue(), 25, 5),
    new LTableElement(new LTextBold('Table Element').getValue(), 25, 5),
    new LTableElement(new LTextBold('Table Element').getValue(), 25, 5),
], 'black', 'orange')

const tableRow2 = new LTableRow([
    new LTableElement("Table Element", 25, 5),
    new LTableElement("Table Element", 25, 5),
    new LTableElement("Table Element", 25, 5),
    //This element has rowspan
    new LTableElement("Table Element", 25, 5, null, 2),
])

const tableRow3 = new LTableRow([
    //This element has colspan
    new LTableElement("Table Element", 25, 5, 2),
    new LTableElement("Table Element", 25, 5),
])

table.addRow(tableRow1)
table.addRow(tableRow2)
table.addRow(tableRow3)

document.addElement(table)
```

## Images
```
import {LibofImage} from 'libof-doc/dist-node/elements/LibofImage'

const image = new LibofImage('https://midu.dev/images/tags/node.png')
document.addElement(image)
```

## HTML
You can insert HTML in your document :)

```
import {LibofHtml} from 'libof-doc/dist-node/elements/LibofHtml'

const html = new LibofHtml('<p>this text is written in html using <b>Libof doc</b></p>')
document.addElement(html)
```

## Download Document
```
//you can transform the document into a blob
const blob = document.documentToBlob()

//or you cat download the document
document.download()
```


  