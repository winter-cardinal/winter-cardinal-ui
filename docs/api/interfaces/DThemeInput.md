[Winter Cardinal UI - v0.310.1](../index.md) / DThemeInput

# Interface: DThemeInput<VALUE, ELEMENT\>

[DImageBase](../classes/DImageBase.md) theme.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |

## Hierarchy

- [`DThemeHtmlElement`](DThemeHtmlElement.md)<`VALUE`, `ELEMENT`\>

- [`UtilThemeInput`](UtilThemeInput.md)<`VALUE`, `ELEMENT`\>

  ↳ **`DThemeInput`**

  ↳↳ [`DThemeInputInput`](DThemeInputInput.md)

  ↳↳ [`DThemeInputTextArea`](DThemeInputTextArea.md)

## Implemented by

- [`DThemeDarkInput`](../classes/DThemeDarkInput.md)
- [`DThemeWhiteInput`](../classes/DThemeWhiteInput.md)

## Table of contents

### Methods

- [getAfterCreator](DThemeInput.md#getaftercreator)
- [getAlpha](DThemeInput.md#getalpha)
- [getBackgroundAlpha](DThemeInput.md#getbackgroundalpha)
- [getBackgroundColor](DThemeInput.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeInput.md#getbackgroundtexture)
- [getBeforeCreator](DThemeInput.md#getbeforecreator)
- [getBorderAlign](DThemeInput.md#getborderalign)
- [getBorderAlpha](DThemeInput.md#getborderalpha)
- [getBorderColor](DThemeInput.md#getbordercolor)
- [getBorderMask](DThemeInput.md#getbordermask)
- [getBorderTexture](DThemeInput.md#getbordertexture)
- [getBorderWidth](DThemeInput.md#getborderwidth)
- [getClearType](DThemeInput.md#getcleartype)
- [getClipperCreator](DThemeInput.md#getclippercreator)
- [getColor](DThemeInput.md#getcolor)
- [getCornerMask](DThemeInput.md#getcornermask)
- [getCornerRadius](DThemeInput.md#getcornerradius)
- [getCursor](DThemeInput.md#getcursor)
- [getEditingFormatter](DThemeInput.md#geteditingformatter)
- [getEditingUnformatter](DThemeInput.md#geteditingunformatter)
- [getEditingValidator](DThemeInput.md#geteditingvalidator)
- [getElementCreator](DThemeInput.md#getelementcreator)
- [getFontFamilly](DThemeInput.md#getfontfamilly)
- [getFontSize](DThemeInput.md#getfontsize)
- [getFontStyle](DThemeInput.md#getfontstyle)
- [getFontVariant](DThemeInput.md#getfontvariant)
- [getFontWeight](DThemeInput.md#getfontweight)
- [getHeight](DThemeInput.md#getheight)
- [getImageAlignHorizontal](DThemeInput.md#getimagealignhorizontal)
- [getImageAlignVertical](DThemeInput.md#getimagealignvertical)
- [getImageAlignWith](DThemeInput.md#getimagealignwith)
- [getImageMarginHorizontal](DThemeInput.md#getimagemarginhorizontal)
- [getImageMarginVertial](DThemeInput.md#getimagemarginvertial)
- [getImageSource](DThemeInput.md#getimagesource)
- [getImageTintAlpha](DThemeInput.md#getimagetintalpha)
- [getImageTintColor](DThemeInput.md#getimagetintcolor)
- [getInteractive](DThemeInput.md#getinteractive)
- [getLineHeight](DThemeInput.md#getlineheight)
- [getOutlineAlign](DThemeInput.md#getoutlinealign)
- [getOutlineAlpha](DThemeInput.md#getoutlinealpha)
- [getOutlineColor](DThemeInput.md#getoutlinecolor)
- [getOutlineMask](DThemeInput.md#getoutlinemask)
- [getOutlineOffset](DThemeInput.md#getoutlineoffset)
- [getOutlineWidth](DThemeInput.md#getoutlinewidth)
- [getPaddingBottom](DThemeInput.md#getpaddingbottom)
- [getPaddingLeft](DThemeInput.md#getpaddingleft)
- [getPaddingRight](DThemeInput.md#getpaddingright)
- [getPaddingTop](DThemeInput.md#getpaddingtop)
- [getSecondaryImageAlignHorizontal](DThemeInput.md#getsecondaryimagealignhorizontal)
- [getSecondaryImageAlignVertical](DThemeInput.md#getsecondaryimagealignvertical)
- [getSecondaryImageAlignWith](DThemeInput.md#getsecondaryimagealignwith)
- [getSecondaryImageMarginHorizontal](DThemeInput.md#getsecondaryimagemarginhorizontal)
- [getSecondaryImageMarginVertial](DThemeInput.md#getsecondaryimagemarginvertial)
- [getSecondaryImageSource](DThemeInput.md#getsecondaryimagesource)
- [getSecondaryImageTintAlpha](DThemeInput.md#getsecondaryimagetintalpha)
- [getSecondaryImageTintColor](DThemeInput.md#getsecondaryimagetintcolor)
- [getSelect](DThemeInput.md#getselect)
- [getShadow](DThemeInput.md#getshadow)
- [getTertiaryImageAlignHorizontal](DThemeInput.md#gettertiaryimagealignhorizontal)
- [getTertiaryImageAlignVertical](DThemeInput.md#gettertiaryimagealignvertical)
- [getTertiaryImageAlignWith](DThemeInput.md#gettertiaryimagealignwith)
- [getTertiaryImageMarginHorizontal](DThemeInput.md#gettertiaryimagemarginhorizontal)
- [getTertiaryImageMarginVertial](DThemeInput.md#gettertiaryimagemarginvertial)
- [getTertiaryImageSource](DThemeInput.md#gettertiaryimagesource)
- [getTertiaryImageTintAlpha](DThemeInput.md#gettertiaryimagetintalpha)
- [getTertiaryImageTintColor](DThemeInput.md#gettertiaryimagetintcolor)
- [getTextAlignHorizontal](DThemeInput.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeInput.md#gettextalignvertical)
- [getTextFormatter](DThemeInput.md#gettextformatter)
- [getTextStyleClipping](DThemeInput.md#gettextstyleclipping)
- [getTextStyleFitting](DThemeInput.md#gettextstylefitting)
- [getTextStyleWordWrap](DThemeInput.md#gettextstylewordwrap)
- [getTextValue](DThemeInput.md#gettextvalue)
- [getTitle](DThemeInput.md#gettitle)
- [getWeight](DThemeInput.md#getweight)
- [getWhen](DThemeInput.md#getwhen)
- [getWidth](DThemeInput.md#getwidth)
- [getX](DThemeInput.md#getx)
- [getY](DThemeInput.md#gety)
- [isClipperExEnabled](DThemeInput.md#isclipperexenabled)
- [isOverflowMaskEnabled](DThemeInput.md#isoverflowmaskenabled)
- [newShadow](DThemeInput.md#newshadow)
- [newShadowWeak](DThemeInput.md#newshadowweak)
- [newState](DThemeInput.md#newstate)
- [newTextValue](DThemeInput.md#newtextvalue)
- [setAfterStyle](DThemeInput.md#setafterstyle)
- [setBeforeStyle](DThemeInput.md#setbeforestyle)
- [setClipperStyle](DThemeInput.md#setclipperstyle)
- [setElementStyle](DThemeInput.md#setelementstyle)

## Methods

### getAfterCreator

▸ **getAfterCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getAfterCreator](UtilThemeInput.md#getaftercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L106)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getAlpha](DThemeHtmlElement.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBackgroundAlpha](DThemeHtmlElement.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L552)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBackgroundColor](DThemeHtmlElement.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L545)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBackgroundTexture](DThemeHtmlElement.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L557)

___

### getBeforeCreator

▸ **getBeforeCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getBeforeCreator](UtilThemeInput.md#getbeforecreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L104)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBorderAlign](DThemeHtmlElement.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L586)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBorderAlpha](DThemeHtmlElement.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L572)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBorderColor](DThemeHtmlElement.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L565)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBorderMask](DThemeHtmlElement.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBorderTexture](DThemeHtmlElement.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L598)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBorderWidth](DThemeHtmlElement.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getClearType](DThemeHtmlElement.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L698)

___

### getClipperCreator

▸ **getClipperCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getClipperCreator](UtilThemeInput.md#getclippercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L93)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getColor](DThemeHtmlElement.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getCornerMask](DThemeHtmlElement.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getCornerRadius](DThemeHtmlElement.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L623)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getCursor](DThemeHtmlElement.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L720)

___

### getEditingFormatter

▸ **getEditingFormatter**(): (`value`: `VALUE`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getEditingFormatter](UtilThemeInput.md#geteditingformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L43)

___

### getEditingUnformatter

▸ **getEditingUnformatter**(): (`text`: `string`, `caller`: `any`) => `VALUE`

#### Returns

`fn`

▸ (`text`, `caller`): `VALUE`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `caller` | `any` |

##### Returns

`VALUE`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getEditingUnformatter](UtilThemeInput.md#geteditingunformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L44)

___

### getEditingValidator

▸ **getEditingValidator**(): (`value`: `VALUE`, `caller`: `any`) => ``null`` \| `string`

#### Returns

`fn`

▸ (`value`, `caller`): ``null`` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

``null`` \| `string`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getEditingValidator](UtilThemeInput.md#geteditingvalidator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L45)

___

### getElementCreator

▸ **getElementCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`ELEMENT`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`ELEMENT`\>

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getElementCreator](UtilThemeInput.md#getelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L83)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontFamilly](DThemeHtmlElement.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontSize](DThemeHtmlElement.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontStyle](DThemeHtmlElement.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontVariant](DThemeHtmlElement.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontWeight](DThemeHtmlElement.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getHeight](DThemeHtmlElement.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L532)

___

### getImageAlignHorizontal

▸ **getImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageAlignHorizontal](DThemeHtmlElement.md#getimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L60)

___

### getImageAlignVertical

▸ **getImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageAlignVertical](DThemeHtmlElement.md#getimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L61)

___

### getImageAlignWith

▸ **getImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith-1)

#### Returns

[`DAlignWith`](../index.md#dalignwith-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageAlignWith](DThemeHtmlElement.md#getimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L62)

___

### getImageMarginHorizontal

▸ **getImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageMarginHorizontal](DThemeHtmlElement.md#getimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L63)

___

### getImageMarginVertial

▸ **getImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageMarginVertial](DThemeHtmlElement.md#getimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L64)

___

### getImageSource

▸ **getImageSource**(`state`): ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageSource](DThemeHtmlElement.md#getimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L67)

___

### getImageTintAlpha

▸ **getImageTintAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageTintAlpha](DThemeHtmlElement.md#getimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L66)

___

### getImageTintColor

▸ **getImageTintColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageTintColor](DThemeHtmlElement.md#getimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L65)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getInteractive](DThemeHtmlElement.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L682)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getLineHeight](DThemeHtmlElement.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getOutlineAlign](DThemeHtmlElement.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L664)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getOutlineAlpha](DThemeHtmlElement.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getOutlineColor](DThemeHtmlElement.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L636)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getOutlineMask](DThemeHtmlElement.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getOutlineOffset](DThemeHtmlElement.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L657)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getOutlineWidth](DThemeHtmlElement.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L650)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getPaddingBottom](DThemeHtmlElement.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L618)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getPaddingLeft](DThemeHtmlElement.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:603](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L603)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getPaddingRight](DThemeHtmlElement.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getPaddingTop](DThemeHtmlElement.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:613](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L613)

___

### getSecondaryImageAlignHorizontal

▸ **getSecondaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageAlignHorizontal](DThemeHtmlElement.md#getsecondaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L54)

___

### getSecondaryImageAlignVertical

▸ **getSecondaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageAlignVertical](DThemeHtmlElement.md#getsecondaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L55)

___

### getSecondaryImageAlignWith

▸ **getSecondaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith-1)

#### Returns

[`DAlignWith`](../index.md#dalignwith-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageAlignWith](DThemeHtmlElement.md#getsecondaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L56)

___

### getSecondaryImageMarginHorizontal

▸ **getSecondaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageMarginHorizontal](DThemeHtmlElement.md#getsecondaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L57)

___

### getSecondaryImageMarginVertial

▸ **getSecondaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageMarginVertial](DThemeHtmlElement.md#getsecondaryimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L58)

___

### getSecondaryImageSource

▸ `Optional` **getSecondaryImageSource**(`state`): ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageSource](DThemeHtmlElement.md#getsecondaryimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L61)

___

### getSecondaryImageTintAlpha

▸ **getSecondaryImageTintAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageTintAlpha](DThemeHtmlElement.md#getsecondaryimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L60)

___

### getSecondaryImageTintColor

▸ **getSecondaryImageTintColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageTintColor](DThemeHtmlElement.md#getsecondaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L59)

___

### getSelect

▸ **getSelect**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getSelect](UtilThemeInput.md#getselect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L109)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getShadow](DThemeHtmlElement.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L677)

___

### getTertiaryImageAlignHorizontal

▸ **getTertiaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageAlignHorizontal](DThemeHtmlElement.md#gettertiaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L63)

___

### getTertiaryImageAlignVertical

▸ **getTertiaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageAlignVertical](DThemeHtmlElement.md#gettertiaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L64)

___

### getTertiaryImageAlignWith

▸ **getTertiaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith-1)

#### Returns

[`DAlignWith`](../index.md#dalignwith-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageAlignWith](DThemeHtmlElement.md#gettertiaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L65)

___

### getTertiaryImageMarginHorizontal

▸ **getTertiaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageMarginHorizontal](DThemeHtmlElement.md#gettertiaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L66)

___

### getTertiaryImageMarginVertial

▸ **getTertiaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageMarginVertial](DThemeHtmlElement.md#gettertiaryimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L67)

___

### getTertiaryImageSource

▸ `Optional` **getTertiaryImageSource**(`state`): ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageSource](DThemeHtmlElement.md#gettertiaryimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L70)

___

### getTertiaryImageTintAlpha

▸ **getTertiaryImageTintAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageTintAlpha](DThemeHtmlElement.md#gettertiaryimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L69)

___

### getTertiaryImageTintColor

▸ **getTertiaryImageTintColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageTintColor](DThemeHtmlElement.md#gettertiaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L68)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextAlignHorizontal](DThemeHtmlElement.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L87)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextAlignVertical](DThemeHtmlElement.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L86)

___

### getTextFormatter

▸ **getTextFormatter**(): (`value`: `VALUE`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextFormatter](DThemeHtmlElement.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L70)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextStyleClipping](DThemeHtmlElement.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getTextStyleFitting

▸ **getTextStyleFitting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextStyleFitting](DThemeHtmlElement.md#gettextstylefitting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L89)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextStyleWordWrap](DThemeHtmlElement.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L90)

___

### getTextValue

▸ **getTextValue**(`state`): `undefined` \| `VALUE`

Returns a text value.
Called to get a text vale if there is no text value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`undefined` \| `VALUE`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextValue](DThemeHtmlElement.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTitle](DThemeHtmlElement.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L692)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getWeight](DThemeHtmlElement.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L705)

___

### getWhen

▸ **getWhen**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getWhen](UtilThemeInput.md#getwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L108)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getWidth](DThemeHtmlElement.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getX](DThemeHtmlElement.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L522)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getY](DThemeHtmlElement.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L527)

___

### isClipperExEnabled

▸ **isClipperExEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[isClipperExEnabled](UtilThemeInput.md#isclipperexenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L103)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[isOverflowMaskEnabled](DThemeHtmlElement.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L91)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[newShadow](DThemeHtmlElement.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:710](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L710)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[newShadowWeak](DThemeHtmlElement.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:715](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L715)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[newState](DThemeHtmlElement.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L687)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[newTextValue](DThemeHtmlElement.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L76)

___

### setAfterStyle

▸ **setAfterStyle**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |

#### Returns

`void`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[setAfterStyle](UtilThemeInput.md#setafterstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L107)

___

### setBeforeStyle

▸ **setBeforeStyle**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |

#### Returns

`void`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[setBeforeStyle](UtilThemeInput.md#setbeforestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L105)

___

### setClipperStyle

▸ **setClipperStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`, `clipperEx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |
| `clipperEx` | `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](UtilHtmlElementClipperEx.md) |

#### Returns

`void`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[setClipperStyle](UtilThemeInput.md#setclipperstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L94)

___

### setElementStyle

▸ **setElementStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`, `clipperEx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ELEMENT` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |
| `clipperEx` | `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](UtilHtmlElementClipperEx.md) |

#### Returns

`void`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[setElementStyle](UtilThemeInput.md#setelementstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L84)
