export const manifestRDF = `<?xml version="1.0" encoding="utf-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about="styles.xml">
    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/odf#StylesFile"/>
  </rdf:Description>
  <rdf:Description rdf:about="">
    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="styles.xml"/>
  </rdf:Description>
  <rdf:Description rdf:about="content.xml">
    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/odf#ContentFile"/>
  </rdf:Description>
  <rdf:Description rdf:about="">
    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="content.xml"/>
  </rdf:Description>
  <rdf:Description rdf:about="">
    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#Document"/>
  </rdf:Description>
</rdf:RDF>`

export const metaXML = `
<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:grddl="http://www.w3.org/2003/g/data-view#" office:version="1.3">
<office:meta>
<meta:editing-duration>P0D</meta:editing-duration>
<meta:editing-cycles>1</meta:editing-cycles>
<meta:generator>LibreOffice/7.4.1.2$Windows_X86_64 LibreOffice_project/3c58a8f3a960df8bc8fd77b461821e42c061c5f0</meta:generator>
<meta:creation-date>2024-03-30T18:30:17.161000000</meta:creation-date>
<meta:document-statistic meta:table-count="0" meta:image-count="0" meta:object-count="0" meta:page-count="2" meta:paragraph-count="15" meta:word-count="82" meta:character-count="385" meta:non-whitespace-character-count="321"/>
</office:meta>
</office:document-meta>`

export const mimetype = 'application/vnd.oasis.opendocument.text'

export const settingsXML = `<office:document-settings xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:config="urn:oasis:names:tc:opendocument:xmlns:config:1.0" office:version="1.3">
<office:settings>
<config:config-item-set config:name="ooo:view-settings">
<config:config-item config:name="ViewAreaTop" config:type="long">38523</config:config-item>
<config:config-item config:name="ViewAreaLeft" config:type="long">0</config:config-item>
<config:config-item config:name="ViewAreaWidth" config:type="long">49056</config:config-item>
<config:config-item config:name="ViewAreaHeight" config:type="long">22200</config:config-item>
<config:config-item config:name="ShowRedlineChanges" config:type="boolean">true</config:config-item>
<config:config-item config:name="InBrowseMode" config:type="boolean">false</config:config-item>
<config:config-item-map-indexed config:name="Views">
<config:config-item-map-entry>
<config:config-item config:name="ViewId" config:type="string">view2</config:config-item>
<config:config-item config:name="ViewLeft" config:type="long">16027</config:config-item>
<config:config-item config:name="ViewTop" config:type="long">2925</config:config-item>
<config:config-item config:name="VisibleLeft" config:type="long">0</config:config-item>
<config:config-item config:name="VisibleTop" config:type="long">38523</config:config-item>
<config:config-item config:name="VisibleRight" config:type="long">49054</config:config-item>
<config:config-item config:name="VisibleBottom" config:type="long">60722</config:config-item>
<config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
<config:config-item config:name="ViewLayoutColumns" config:type="short">1</config:config-item>
<config:config-item config:name="ViewLayoutBookMode" config:type="boolean">false</config:config-item>
<config:config-item config:name="ZoomFactor" config:type="short">100</config:config-item>
<config:config-item config:name="IsSelectedFrame" config:type="boolean">false</config:config-item>
<config:config-item config:name="KeepRatio" config:type="boolean">false</config:config-item>
<config:config-item config:name="HideWhitespace" config:type="boolean">false</config:config-item>
<config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">true</config:config-item>
</config:config-item-map-entry>
</config:config-item-map-indexed>
</config:config-item-set>
<config:config-item-set config:name="ooo:configuration-settings">
<config:config-item config:name="ProtectForm" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrinterName" config:type="string"/>
<config:config-item config:name="EmbeddedDatabaseName" config:type="string"/>
<config:config-item config:name="CurrentDatabaseDataSource" config:type="string"/>
<config:config-item config:name="LinkUpdateMode" config:type="short">1</config:config-item>
<config:config-item config:name="AddParaTableSpacingAtStart" config:type="boolean">true</config:config-item>
<config:config-item config:name="FloattableNomargins" config:type="boolean">false</config:config-item>
<config:config-item config:name="UnbreakableNumberings" config:type="boolean">false</config:config-item>
<config:config-item config:name="FieldAutoUpdate" config:type="boolean">true</config:config-item>
<config:config-item config:name="AddVerticalFrameOffsets" config:type="boolean">false</config:config-item>
<config:config-item config:name="BackgroundParaOverDrawings" config:type="boolean">false</config:config-item>
<config:config-item config:name="AddParaTableSpacing" config:type="boolean">true</config:config-item>
<config:config-item config:name="ChartAutoUpdate" config:type="boolean">true</config:config-item>
<config:config-item config:name="CurrentDatabaseCommand" config:type="string"/>
<config:config-item config:name="PrinterSetup" config:type="base64Binary"/>
<config:config-item config:name="AlignTabStopPosition" config:type="boolean">true</config:config-item>
<config:config-item config:name="PrinterPaperFromSetup" config:type="boolean">false</config:config-item>
<config:config-item config:name="IsKernAsianPunctuation" config:type="boolean">false</config:config-item>
<config:config-item config:name="CharacterCompressionType" config:type="short">0</config:config-item>
<config:config-item config:name="ApplyUserData" config:type="boolean">true</config:config-item>
<config:config-item config:name="DoNotJustifyLinesWithManualBreak" config:type="boolean">false</config:config-item>
<config:config-item config:name="SaveThumbnail" config:type="boolean">true</config:config-item>
<config:config-item config:name="SaveGlobalDocumentLinks" config:type="boolean">false</config:config-item>
<config:config-item config:name="SmallCapsPercentage66" config:type="boolean">false</config:config-item>
<config:config-item config:name="CurrentDatabaseCommandType" config:type="int">0</config:config-item>
<config:config-item config:name="SaveVersionOnClose" config:type="boolean">false</config:config-item>
<config:config-item config:name="UpdateFromTemplate" config:type="boolean">true</config:config-item>
<config:config-item config:name="DoNotCaptureDrawObjsOnPage" config:type="boolean">false</config:config-item>
<config:config-item config:name="UseFormerObjectPositioning" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintSingleJobs" config:type="boolean">false</config:config-item>
<config:config-item config:name="EmbedSystemFonts" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrinterIndependentLayout" config:type="string">high-resolution</config:config-item>
<config:config-item config:name="IsLabelDocument" config:type="boolean">false</config:config-item>
<config:config-item config:name="AddFrameOffsets" config:type="boolean">false</config:config-item>
<config:config-item config:name="AddExternalLeading" config:type="boolean">true</config:config-item>
<config:config-item config:name="MsWordCompMinLineHeightByFly" config:type="boolean">false</config:config-item>
<config:config-item config:name="UseOldNumbering" config:type="boolean">false</config:config-item>
<config:config-item config:name="OutlineLevelYieldsNumbering" config:type="boolean">false</config:config-item>
<config:config-item config:name="DoNotResetParaAttrsForNumFont" config:type="boolean">false</config:config-item>
<config:config-item config:name="IgnoreFirstLineIndentInNumbering" config:type="boolean">false</config:config-item>
<config:config-item config:name="AllowPrintJobCancel" config:type="boolean">true</config:config-item>
<config:config-item config:name="UseFormerLineSpacing" config:type="boolean">false</config:config-item>
<config:config-item config:name="AddParaSpacingToTableCells" config:type="boolean">true</config:config-item>
<config:config-item config:name="AddParaLineSpacingToTableCells" config:type="boolean">true</config:config-item>
<config:config-item config:name="UseFormerTextWrapping" config:type="boolean">false</config:config-item>
<config:config-item config:name="RedlineProtectionKey" config:type="base64Binary"/>
<config:config-item config:name="ConsiderTextWrapOnObjPos" config:type="boolean">false</config:config-item>
<config:config-item config:name="TableRowKeep" config:type="boolean">false</config:config-item>
<config:config-item config:name="TabsRelativeToIndent" config:type="boolean">true</config:config-item>
<config:config-item config:name="IgnoreTabsAndBlanksForLineCalculation" config:type="boolean">false</config:config-item>
<config:config-item config:name="RsidRoot" config:type="int">811893</config:config-item>
<config:config-item config:name="LoadReadonly" config:type="boolean">false</config:config-item>
<config:config-item config:name="ClipAsCharacterAnchoredWriterFlyFrames" config:type="boolean">false</config:config-item>
<config:config-item config:name="UnxForceZeroExtLeading" config:type="boolean">false</config:config-item>
<config:config-item config:name="UseOldPrinterMetrics" config:type="boolean">false</config:config-item>
<config:config-item config:name="TabAtLeftIndentForParagraphsInList" config:type="boolean">false</config:config-item>
<config:config-item config:name="Rsid" config:type="int">1603545</config:config-item>
<config:config-item config:name="MsWordCompTrailingBlanks" config:type="boolean">false</config:config-item>
<config:config-item config:name="MathBaselineAlignment" config:type="boolean">false</config:config-item>
<config:config-item config:name="InvertBorderSpacing" config:type="boolean">false</config:config-item>
<config:config-item config:name="CollapseEmptyCellPara" config:type="boolean">true</config:config-item>
<config:config-item config:name="TabOverflow" config:type="boolean">true</config:config-item>
<config:config-item config:name="StylesNoDefault" config:type="boolean">false</config:config-item>
<config:config-item config:name="ClippedPictures" config:type="boolean">false</config:config-item>
<config:config-item config:name="EmbedFonts" config:type="boolean">false</config:config-item>
<config:config-item config:name="EmbedOnlyUsedFonts" config:type="boolean">false</config:config-item>
<config:config-item config:name="EmbedLatinScriptFonts" config:type="boolean">true</config:config-item>
<config:config-item config:name="EmbedAsianScriptFonts" config:type="boolean">true</config:config-item>
<config:config-item config:name="EmptyDbFieldHidesPara" config:type="boolean">true</config:config-item>
<config:config-item config:name="EmbedComplexScriptFonts" config:type="boolean">true</config:config-item>
<config:config-item config:name="TabOverMargin" config:type="boolean">false</config:config-item>
<config:config-item config:name="TabOverSpacing" config:type="boolean">false</config:config-item>
<config:config-item config:name="TreatSingleColumnBreakAsPageBreak" config:type="boolean">false</config:config-item>
<config:config-item config:name="SurroundTextWrapSmall" config:type="boolean">false</config:config-item>
<config:config-item config:name="ApplyParagraphMarkFormatToNumbering" config:type="boolean">false</config:config-item>
<config:config-item config:name="PropLineSpacingShrinksFirstLine" config:type="boolean">true</config:config-item>
<config:config-item config:name="SubtractFlysAnchoredAtFlys" config:type="boolean">false</config:config-item>
<config:config-item config:name="DisableOffPagePositioning" config:type="boolean">false</config:config-item>
<config:config-item config:name="ContinuousEndnotes" config:type="boolean">false</config:config-item>
<config:config-item config:name="ProtectBookmarks" config:type="boolean">false</config:config-item>
<config:config-item config:name="ProtectFields" config:type="boolean">false</config:config-item>
<config:config-item config:name="HeaderSpacingBelowLastPara" config:type="boolean">false</config:config-item>
<config:config-item config:name="FrameAutowidthWithMorePara" config:type="boolean">false</config:config-item>
<config:config-item config:name="GutterAtTop" config:type="boolean">false</config:config-item>
<config:config-item config:name="FootnoteInColumnToPageEnd" config:type="boolean">false</config:config-item>
<config:config-item config:name="ImagePreferredDPI" config:type="int">0</config:config-item>
<config:config-item config:name="AutoFirstLineIndentDisregardLineSpace" config:type="boolean">true</config:config-item>
<config:config-item config:name="WordLikeWrapForAsCharFlys" config:type="boolean">false</config:config-item>
<config:config-item config:name="NoNumberingShowFollowBy" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintAnnotationMode" config:type="short">0</config:config-item>
<config:config-item config:name="PrintGraphics" config:type="boolean">true</config:config-item>
<config:config-item config:name="PrintBlackFonts" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintLeftPages" config:type="boolean">true</config:config-item>
<config:config-item config:name="PrintControls" config:type="boolean">true</config:config-item>
<config:config-item config:name="PrintPageBackground" config:type="boolean">true</config:config-item>
<config:config-item config:name="PrintTextPlaceholder" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintDrawings" config:type="boolean">true</config:config-item>
<config:config-item config:name="PrintHiddenText" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintProspect" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintTables" config:type="boolean">true</config:config-item>
<config:config-item config:name="PrintProspectRTL" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintReversed" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintRightPages" config:type="boolean">true</config:config-item>
<config:config-item config:name="PrintFaxName" config:type="string"/>
<config:config-item config:name="PrintPaperFromSetup" config:type="boolean">false</config:config-item>
<config:config-item config:name="PrintEmptyPages" config:type="boolean">true</config:config-item>
</config:config-item-set>
</office:settings>
</office:document-settings>`

export const stylesXML = `<office:document-styles xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:rpt="http://openoffice.org/2005/report" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0" xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:ooow="http://openoffice.org/2004/writer" xmlns:oooc="http://openoffice.org/2004/calc" xmlns:css3t="http://www.w3.org/TR/css3-text/" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" xmlns:tableooo="http://openoffice.org/2009/table" xmlns:calcext="urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0" xmlns:drawooo="http://openoffice.org/2010/draw" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" xmlns:grddl="http://www.w3.org/2003/g/data-view#" xmlns:field="urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0" xmlns:math="http://www.w3.org/1998/Math/MathML" xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0" xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0" xmlns:dom="http://www.w3.org/2001/xml-events" xmlns:officeooo="http://openoffice.org/2009/office" office:version="1.3">
<office:font-face-decls>
<style:font-face style:name="Arial" svg:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable"/>
<style:font-face style:name="Arial1" svg:font-family="Arial" style:font-family-generic="system" style:font-pitch="variable"/>
<style:font-face style:name="Liberation Sans" svg:font-family="'Liberation Sans'" style:font-family-generic="swiss" style:font-pitch="variable"/>
<style:font-face style:name="Liberation Serif" svg:font-family="'Liberation Serif'" style:font-family-generic="roman" style:font-pitch="variable"/>
<style:font-face style:name="Microsoft YaHei" svg:font-family="'Microsoft YaHei'" style:font-family-generic="system" style:font-pitch="variable"/>
<style:font-face style:name="OpenSymbol" svg:font-family="OpenSymbol" style:font-charset="x-symbol"/>
<style:font-face style:name="Segoe UI" svg:font-family="'Segoe UI'" style:font-family-generic="system" style:font-pitch="variable"/>
<style:font-face style:name="Tahoma" svg:font-family="Tahoma" style:font-family-generic="system" style:font-pitch="variable"/>
</office:font-face-decls>
<office:styles>
<style:default-style style:family="graphic">
<style:graphic-properties svg:stroke-color="#3465a4" draw:fill-color="#729fcf" fo:wrap-option="no-wrap" draw:shadow-offset-x="0.3cm" draw:shadow-offset-y="0.3cm" draw:start-line-spacing-horizontal="0.283cm" draw:start-line-spacing-vertical="0.283cm" draw:end-line-spacing-horizontal="0.283cm" draw:end-line-spacing-vertical="0.283cm" style:flow-with-text="false"/>
<style:paragraph-properties style:text-autospace="ideograph-alpha" style:line-break="strict" style:writing-mode="lr-tb" style:font-independent-line-spacing="false">
<style:tab-stops/>
</style:paragraph-properties>
<style:text-properties fo:color="#000000" loext:opacity="100%" loext:color-lum-mod="100%" loext:color-lum-off="0%" style:font-name="Liberation Serif" fo:font-size="12pt" fo:language="es" fo:country="ES" style:font-name-asian="Segoe UI" style:font-size-asian="12pt" style:language-asian="zh" style:country-asian="CN" style:font-name-complex="Tahoma" style:font-size-complex="12pt" style:language-complex="hi" style:country-complex="IN"/>
</style:default-style>
<style:default-style style:family="paragraph">
<style:paragraph-properties style:text-autospace="ideograph-alpha" style:punctuation-wrap="hanging" style:line-break="strict" style:writing-mode="page"/>
<style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Liberation Serif" fo:font-size="12pt" fo:language="es" fo:country="ES" style:font-name-asian="Segoe UI" style:font-size-asian="12pt" style:language-asian="zh" style:country-asian="CN" style:font-name-complex="Tahoma" style:font-size-complex="12pt" style:language-complex="hi" style:country-complex="IN"/>
</style:default-style>
<style:default-style style:family="table">
<style:table-properties table:border-model="separating"/>
</style:default-style>
<style:default-style style:family="table-row">
<style:table-row-properties fo:keep-together="auto"/>
</style:default-style>
<style:style style:name="Standard" style:family="paragraph" style:class="text"/>
<style:style style:name="Heading" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Text_20_body" style:class="text">
<style:paragraph-properties fo:margin-top="0.423cm" fo:margin-bottom="0.212cm" style:contextual-spacing="false" fo:keep-with-next="always"/>
<style:text-properties style:font-name="Liberation Sans" fo:font-family="'Liberation Sans'" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="14pt" style:font-name-asian="Microsoft YaHei" style:font-family-asian="'Microsoft YaHei'" style:font-family-generic-asian="system" style:font-pitch-asian="variable" style:font-size-asian="14pt" style:font-name-complex="Arial1" style:font-family-complex="Arial" style:font-family-generic-complex="system" style:font-pitch-complex="variable" style:font-size-complex="14pt"/>
</style:style>
<style:style style:name="Text_20_body" style:display-name="Text body" style:family="paragraph" style:parent-style-name="Standard" style:class="text">
<style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.247cm" style:contextual-spacing="false" fo:line-height="115%"/>
</style:style>
<style:style style:name="Heading_20_1" style:display-name="Heading 1" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:default-outline-level="1" style:class="text">
<style:paragraph-properties fo:margin-top="0.423cm" fo:margin-bottom="0.212cm" style:contextual-spacing="false"/>
<style:text-properties fo:font-size="18pt" fo:font-weight="bold" style:font-size-asian="18pt" style:font-weight-asian="bold" style:font-size-complex="18pt" style:font-weight-complex="bold"/>
</style:style>
<style:style style:name="Heading_20_2" style:display-name="Heading 2" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:default-outline-level="2" style:class="text">
<style:paragraph-properties fo:margin-top="0.353cm" fo:margin-bottom="0.212cm" style:contextual-spacing="false"/>
<style:text-properties fo:font-size="16pt" fo:font-weight="bold" style:font-size-asian="16pt" style:font-weight-asian="bold" style:font-size-complex="16pt" style:font-weight-complex="bold"/>
</style:style>
<style:style style:name="Heading_20_3" style:display-name="Heading 3" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:default-outline-level="3" style:class="text">
<style:paragraph-properties fo:margin-top="0.247cm" fo:margin-bottom="0.212cm" style:contextual-spacing="false"/>
<style:text-properties fo:font-size="14pt" fo:font-weight="bold" style:font-size-asian="14pt" style:font-weight-asian="bold" style:font-size-complex="14pt" style:font-weight-complex="bold"/>
</style:style>
<style:style style:name="Heading_20_4" style:display-name="Heading 4" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:default-outline-level="4" style:class="text">
<style:paragraph-properties fo:margin-top="0.212cm" fo:margin-bottom="0.212cm" style:contextual-spacing="false"/>
<style:text-properties fo:font-size="13pt" fo:font-style="italic" fo:font-weight="bold" style:font-size-asian="13pt" style:font-style-asian="italic" style:font-weight-asian="bold" style:font-size-complex="13pt" style:font-style-complex="italic" style:font-weight-complex="bold"/>
</style:style>
<style:style style:name="Index_20_Heading" style:display-name="Index Heading" style:family="paragraph" style:parent-style-name="Heading" style:class="index">
<style:paragraph-properties fo:margin-left="0cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false" text:number-lines="false" text:line-number="0"/>
<style:text-properties fo:font-size="16pt" fo:font-weight="bold" style:font-size-asian="16pt" style:font-weight-asian="bold" style:font-size-complex="16pt" style:font-weight-complex="bold"/>
</style:style>
<style:style style:name="Contents_20_Heading" style:display-name="Contents Heading" style:family="paragraph" style:parent-style-name="Index_20_Heading" style:class="index">
<style:paragraph-properties fo:margin-left="0cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false" text:number-lines="false" text:line-number="0"/>
<style:text-properties fo:font-size="16pt" fo:font-weight="bold" style:font-size-asian="16pt" style:font-weight-asian="bold" style:font-size-complex="16pt" style:font-weight-complex="bold"/>
</style:style>
<style:style style:name="Index" style:family="paragraph" style:parent-style-name="Standard" style:class="index">
<style:paragraph-properties text:number-lines="false" text:line-number="0"/>
<style:text-properties fo:language="zxx" fo:country="none" style:language-asian="zxx" style:country-asian="none" style:language-complex="zxx" style:country-complex="none"/>
</style:style>
<style:style style:name="Contents_20_1" style:display-name="Contents 1" style:family="paragraph" style:parent-style-name="Index" style:class="index">
<style:paragraph-properties fo:margin-left="0cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false">
<style:tab-stops>
<style:tab-stop style:position="17cm" style:type="right" style:leader-style="dotted" style:leader-text="."/>
</style:tab-stops>
</style:paragraph-properties>
</style:style>
<style:style style:name="Contents_20_2" style:display-name="Contents 2" style:family="paragraph" style:parent-style-name="Index" style:class="index">
<style:paragraph-properties fo:margin-left="0.499cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false">
<style:tab-stops>
<style:tab-stop style:position="16.501cm" style:type="right" style:leader-style="dotted" style:leader-text="."/>
</style:tab-stops>
</style:paragraph-properties>
</style:style>
<style:style style:name="Contents_20_3" style:display-name="Contents 3" style:family="paragraph" style:parent-style-name="Index" style:class="index">
<style:paragraph-properties fo:margin-left="1cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false">
<style:tab-stops>
<style:tab-stop style:position="16cm" style:type="right" style:leader-style="dotted" style:leader-text="."/>
</style:tab-stops>
</style:paragraph-properties>
</style:style>
<style:style style:name="Contents_20_4" style:display-name="Contents 4" style:family="paragraph" style:parent-style-name="Index" style:class="index">
<style:paragraph-properties fo:margin-left="1.499cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false">
<style:tab-stops>
<style:tab-stop style:position="15.501cm" style:type="right" style:leader-style="dotted" style:leader-text="."/>
</style:tab-stops>
</style:paragraph-properties>
</style:style>
<style:style style:name="Internet_20_link" style:display-name="Internet link" style:family="text">
<style:text-properties fo:color="#000080" loext:opacity="100%" fo:language="zxx" fo:country="none" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color" style:language-asian="zxx" style:country-asian="none" style:language-complex="zxx" style:country-complex="none"/>
</style:style>
<style:style style:name="Index_20_Link" style:display-name="Index Link" style:family="text"/>
<style:style style:name="Bullet_20_Symbols" style:display-name="Bullet Symbols" style:family="text">
<style:text-properties style:font-name="OpenSymbol" fo:font-family="OpenSymbol" style:font-charset="x-symbol" style:font-name-asian="OpenSymbol" style:font-family-asian="OpenSymbol" style:font-charset-asian="x-symbol" style:font-name-complex="OpenSymbol" style:font-family-complex="OpenSymbol" style:font-charset-complex="x-symbol"/>
</style:style>
<style:style style:name="Numbering_20_Symbols" style:display-name="Numbering Symbols" style:family="text"/>
<text:outline-style style:name="Outline">
<text:outline-level-style text:level="1" loext:num-list-format="%1%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="2" loext:num-list-format="%2%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="3" loext:num-list-format="%3%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="4" loext:num-list-format="%4%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="5" loext:num-list-format="%5%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="6" loext:num-list-format="%6%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="7" loext:num-list-format="%7%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="8" loext:num-list-format="%8%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="9" loext:num-list-format="%9%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
<text:outline-level-style text:level="10" loext:num-list-format="%10%" style:num-format="">
<style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
<style:list-level-label-alignment text:label-followed-by="listtab"/>
</style:list-level-properties>
</text:outline-level-style>
</text:outline-style>
<text:notes-configuration text:note-class="footnote" style:num-format="1" text:start-value="0" text:footnotes-position="page" text:start-numbering-at="document"/>
<text:notes-configuration text:note-class="endnote" style:num-format="i" text:start-value="0"/>
<text:linenumbering-configuration text:number-lines="false" text:offset="0.499cm" style:num-format="1" text:number-position="left" text:increment="5"/>
</office:styles>
<office:automatic-styles>
<style:page-layout style:name="Mpm1">
<style:page-layout-properties fo:page-width="21.001cm" fo:page-height="29.7cm" style:num-format="1" style:print-orientation="portrait" fo:margin-top="2cm" fo:margin-bottom="2cm" fo:margin-left="2cm" fo:margin-right="2cm" style:writing-mode="lr-tb" style:layout-grid-color="#c0c0c0" style:layout-grid-lines="20" style:layout-grid-base-height="0.706cm" style:layout-grid-ruby-height="0.353cm" style:layout-grid-mode="none" style:layout-grid-ruby-below="false" style:layout-grid-print="false" style:layout-grid-display="false" style:footnote-max-height="0cm" loext:margin-gutter="0cm">
<style:footnote-sep style:width="0.018cm" style:distance-before-sep="0.101cm" style:distance-after-sep="0.101cm" style:line-style="solid" style:adjustment="left" style:rel-width="25%" style:color="#000000"/>
</style:page-layout-properties>
<style:header-style/>
<style:footer-style/>
</style:page-layout>
<style:style style:name="Mdp1" style:family="drawing-page">
<style:drawing-page-properties draw:background-size="full"/>
</style:style>
</office:automatic-styles>
<office:master-styles>
<style:master-page style:name="Standard" style:page-layout-name="Mpm1" draw:style-name="Mdp1"/>
</office:master-styles>
</office:document-styles>`

export const manifestXML = `<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" manifest:version="1.3">
<manifest:file-entry manifest:full-path="/" manifest:version="1.3" manifest:media-type="application/vnd.oasis.opendocument.text"/>
<manifest:file-entry manifest:full-path="Configurations2/" manifest:media-type="application/vnd.sun.xml.ui.configuration"/>
<manifest:file-entry manifest:full-path="manifest.rdf" manifest:media-type="application/rdf+xml"/>
<manifest:file-entry manifest:full-path="styles.xml" manifest:media-type="text/xml"/>
<manifest:file-entry manifest:full-path="meta.xml" manifest:media-type="text/xml"/>
<manifest:file-entry manifest:full-path="settings.xml" manifest:media-type="text/xml"/>
<manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>
<manifest:file-entry manifest:full-path="Thumbnails/thumbnail.png" manifest:media-type="image/png"/>
`