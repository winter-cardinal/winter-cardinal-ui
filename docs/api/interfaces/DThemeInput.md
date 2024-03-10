[Winter Cardinal UI - v0.414.0](../index.md) / DThemeInput

# Interface: DThemeInput\<VALUE, ELEMENT\>

[DImageBase](../classes/DImageBase.md) theme.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |

## Hierarchy

- [`DThemeHtmlElement`](DThemeHtmlElement.md)\<`VALUE`, `ELEMENT`\>

- [`UtilThemeInput`](UtilThemeInput.md)\<`VALUE`, `ELEMENT`\>

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
- [getImageRotation](DThemeInput.md#getimagerotation)
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
- [getSecondaryImageRotation](DThemeInput.md#getsecondaryimagerotation)
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
- [getTertiaryImageRotation](DThemeInput.md#gettertiaryimagerotation)
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

▸ **getAfterCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getAfterCreator](UtilThemeInput.md#getaftercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L106)

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

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

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

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBackgroundTexture](DThemeHtmlElement.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

___

### getBeforeCreator

▸ **getBeforeCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getBeforeCreator](UtilThemeInput.md#getbeforecreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L104)

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

[src/main/typescript/wcardinal/ui/d-base.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L585)

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

[src/main/typescript/wcardinal/ui/d-base.ts:571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L571)

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

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

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

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getBorderTexture](DThemeHtmlElement.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:597](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L597)

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

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

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

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

___

### getClipperCreator

▸ **getClipperCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getClipperCreator](UtilThemeInput.md#getclippercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L93)

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

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getCornerMask](DThemeHtmlElement.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getCornerRadius](DThemeHtmlElement.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

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

[src/main/typescript/wcardinal/ui/util/util-input.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L43)

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

[src/main/typescript/wcardinal/ui/util/util-input.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L44)

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

[src/main/typescript/wcardinal/ui/util/util-input.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L45)

___

### getElementCreator

▸ **getElementCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`ELEMENT`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`ELEMENT`\>

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getElementCreator](UtilThemeInput.md#getelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L83)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontFamilly](DThemeHtmlElement.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontSize](DThemeHtmlElement.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontStyle](DThemeHtmlElement.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontVariant](DThemeHtmlElement.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getFontWeight](DThemeHtmlElement.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getHeight](DThemeHtmlElement.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getImageAlignHorizontal

▸ **getImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageAlignHorizontal](DThemeHtmlElement.md#getimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L20)

___

### getImageAlignVertical

▸ **getImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageAlignVertical](DThemeHtmlElement.md#getimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L21)

___

### getImageAlignWith

▸ **getImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageAlignWith](DThemeHtmlElement.md#getimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L22)

___

### getImageMarginHorizontal

▸ **getImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageMarginHorizontal](DThemeHtmlElement.md#getimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L23)

___

### getImageMarginVertial

▸ **getImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageMarginVertial](DThemeHtmlElement.md#getimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L24)

___

### getImageRotation

▸ **getImageRotation**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getImageRotation](DThemeHtmlElement.md#getimagerotation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L28)

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

[src/main/typescript/wcardinal/ui/d-image-piece.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L27)

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

[src/main/typescript/wcardinal/ui/d-image-piece.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L26)

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

[src/main/typescript/wcardinal/ui/d-image-piece.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L25)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getInteractive](DThemeHtmlElement.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getLineHeight](DThemeHtmlElement.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

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

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

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

[src/main/typescript/wcardinal/ui/d-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L635)

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

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

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

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

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

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getPaddingBottom](DThemeHtmlElement.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getPaddingLeft](DThemeHtmlElement.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getPaddingRight](DThemeHtmlElement.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getPaddingTop](DThemeHtmlElement.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

___

### getSecondaryImageAlignHorizontal

▸ **getSecondaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageAlignHorizontal](DThemeHtmlElement.md#getsecondaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L9)

___

### getSecondaryImageAlignVertical

▸ **getSecondaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageAlignVertical](DThemeHtmlElement.md#getsecondaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L10)

___

### getSecondaryImageAlignWith

▸ **getSecondaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageAlignWith](DThemeHtmlElement.md#getsecondaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L11)

___

### getSecondaryImageMarginHorizontal

▸ **getSecondaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageMarginHorizontal](DThemeHtmlElement.md#getsecondaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L12)

___

### getSecondaryImageMarginVertial

▸ **getSecondaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageMarginVertial](DThemeHtmlElement.md#getsecondaryimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L13)

___

### getSecondaryImageRotation

▸ **getSecondaryImageRotation**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageRotation](DThemeHtmlElement.md#getsecondaryimagerotation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L16)

___

### getSecondaryImageSource

▸ **getSecondaryImageSource**(`state`): ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getSecondaryImageSource](DThemeHtmlElement.md#getsecondaryimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L17)

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

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L15)

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

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L14)

___

### getSelect

▸ **getSelect**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getSelect](UtilThemeInput.md#getselect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L109)

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

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getTertiaryImageAlignHorizontal

▸ **getTertiaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageAlignHorizontal](DThemeHtmlElement.md#gettertiaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L9)

___

### getTertiaryImageAlignVertical

▸ **getTertiaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageAlignVertical](DThemeHtmlElement.md#gettertiaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L10)

___

### getTertiaryImageAlignWith

▸ **getTertiaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageAlignWith](DThemeHtmlElement.md#gettertiaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L11)

___

### getTertiaryImageMarginHorizontal

▸ **getTertiaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageMarginHorizontal](DThemeHtmlElement.md#gettertiaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L12)

___

### getTertiaryImageMarginVertial

▸ **getTertiaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageMarginVertial](DThemeHtmlElement.md#gettertiaryimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L13)

___

### getTertiaryImageRotation

▸ **getTertiaryImageRotation**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageRotation](DThemeHtmlElement.md#gettertiaryimagerotation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L16)

___

### getTertiaryImageSource

▸ **getTertiaryImageSource**(`state`): ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTertiaryImageSource](DThemeHtmlElement.md#gettertiaryimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L17)

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

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L15)

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

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L14)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextAlignHorizontal](DThemeHtmlElement.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L46)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextAlignVertical](DThemeHtmlElement.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L45)

___

### getTextFormatter

▸ **getTextFormatter**(): [`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Returns

[`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextFormatter](DThemeHtmlElement.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L29)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextStyleClipping](DThemeHtmlElement.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L47)

___

### getTextStyleFitting

▸ **getTextStyleFitting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextStyleFitting](DThemeHtmlElement.md#gettextstylefitting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L48)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTextStyleWordWrap](DThemeHtmlElement.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L49)

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

[src/main/typescript/wcardinal/ui/d-text-piece.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L43)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getTitle](DThemeHtmlElement.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L691)

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

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWhen

▸ **getWhen**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[getWhen](UtilThemeInput.md#getwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L108)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getWidth](DThemeHtmlElement.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getX](DThemeHtmlElement.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[getY](DThemeHtmlElement.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### isClipperExEnabled

▸ **isClipperExEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeInput](UtilThemeInput.md).[isClipperExEnabled](UtilThemeInput.md#isclipperexenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L103)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[isOverflowMaskEnabled](DThemeHtmlElement.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L50)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[newShadow](DThemeHtmlElement.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[newShadowWeak](DThemeHtmlElement.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:714](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L714)

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

[src/main/typescript/wcardinal/ui/d-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L686)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Inherited from

[DThemeHtmlElement](DThemeHtmlElement.md).[newTextValue](DThemeHtmlElement.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L35)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L107)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L105)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L94)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L84)
