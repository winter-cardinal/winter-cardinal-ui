[Winter Cardinal UI - v0.164.0](../index.md) / DThemeImageBase

# Interface: DThemeImageBase<VALUE\>

[DImageBase](../classes/DImageBase.md) theme.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DThemeTextBase`](DThemeTextBase.md)<`VALUE`\>

- [`DThemeImagePiece`](DThemeImagePiece.md)

  ↳ **`DThemeImageBase`**

  ↳↳ [`DThemeButtonBase`](DThemeButtonBase.md)

  ↳↳ [`DThemeHtmlElement`](DThemeHtmlElement.md)

  ↳↳ [`DThemeImage`](DThemeImage.md)

  ↳↳ [`DThemeListItem`](DThemeListItem.md)

  ↳↳ [`DThemeNote`](DThemeNote.md)

  ↳↳ [`DThemePaginationDots`](DThemePaginationDots.md)

  ↳↳ [`DThemePaginationPage`](DThemePaginationPage.md)

  ↳↳ [`DThemeTableBodyCellIndex`](DThemeTableBodyCellIndex.md)

  ↳↳ [`DThemeTableBodyCellText`](DThemeTableBodyCellText.md)

  ↳↳ [`DThemeTreeItemText`](DThemeTreeItemText.md)

## Implemented by

- [`DThemeDarkImageBase`](../classes/DThemeDarkImageBase.md)
- [`DThemeWhiteImageBase`](../classes/DThemeWhiteImageBase.md)

## Table of contents

### Methods

- [getAlpha](DThemeImageBase.md#getalpha)
- [getBackgroundAlpha](DThemeImageBase.md#getbackgroundalpha)
- [getBackgroundColor](DThemeImageBase.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeImageBase.md#getbackgroundtexture)
- [getBorderAlign](DThemeImageBase.md#getborderalign)
- [getBorderAlpha](DThemeImageBase.md#getborderalpha)
- [getBorderColor](DThemeImageBase.md#getbordercolor)
- [getBorderMask](DThemeImageBase.md#getbordermask)
- [getBorderTexture](DThemeImageBase.md#getbordertexture)
- [getBorderWidth](DThemeImageBase.md#getborderwidth)
- [getClearType](DThemeImageBase.md#getcleartype)
- [getColor](DThemeImageBase.md#getcolor)
- [getCornerMask](DThemeImageBase.md#getcornermask)
- [getCornerRadius](DThemeImageBase.md#getcornerradius)
- [getCursor](DThemeImageBase.md#getcursor)
- [getFontFamilly](DThemeImageBase.md#getfontfamilly)
- [getFontSize](DThemeImageBase.md#getfontsize)
- [getFontStyle](DThemeImageBase.md#getfontstyle)
- [getFontVariant](DThemeImageBase.md#getfontvariant)
- [getFontWeight](DThemeImageBase.md#getfontweight)
- [getHeight](DThemeImageBase.md#getheight)
- [getImageAlignHorizontal](DThemeImageBase.md#getimagealignhorizontal)
- [getImageAlignVertical](DThemeImageBase.md#getimagealignvertical)
- [getImageAlignWith](DThemeImageBase.md#getimagealignwith)
- [getImageMarginHorizontal](DThemeImageBase.md#getimagemarginhorizontal)
- [getImageMarginVertial](DThemeImageBase.md#getimagemarginvertial)
- [getImageSource](DThemeImageBase.md#getimagesource)
- [getImageTintAlpha](DThemeImageBase.md#getimagetintalpha)
- [getImageTintColor](DThemeImageBase.md#getimagetintcolor)
- [getInteractive](DThemeImageBase.md#getinteractive)
- [getLineHeight](DThemeImageBase.md#getlineheight)
- [getOutlineAlign](DThemeImageBase.md#getoutlinealign)
- [getOutlineAlpha](DThemeImageBase.md#getoutlinealpha)
- [getOutlineColor](DThemeImageBase.md#getoutlinecolor)
- [getOutlineMask](DThemeImageBase.md#getoutlinemask)
- [getOutlineOffset](DThemeImageBase.md#getoutlineoffset)
- [getOutlineWidth](DThemeImageBase.md#getoutlinewidth)
- [getPaddingBottom](DThemeImageBase.md#getpaddingbottom)
- [getPaddingLeft](DThemeImageBase.md#getpaddingleft)
- [getPaddingRight](DThemeImageBase.md#getpaddingright)
- [getPaddingTop](DThemeImageBase.md#getpaddingtop)
- [getSecondaryImageAlignHorizontal](DThemeImageBase.md#getsecondaryimagealignhorizontal)
- [getSecondaryImageAlignVertical](DThemeImageBase.md#getsecondaryimagealignvertical)
- [getSecondaryImageAlignWith](DThemeImageBase.md#getsecondaryimagealignwith)
- [getSecondaryImageMarginHorizontal](DThemeImageBase.md#getsecondaryimagemarginhorizontal)
- [getSecondaryImageMarginVertial](DThemeImageBase.md#getsecondaryimagemarginvertial)
- [getSecondaryImageSource](DThemeImageBase.md#getsecondaryimagesource)
- [getSecondaryImageTintAlpha](DThemeImageBase.md#getsecondaryimagetintalpha)
- [getSecondaryImageTintColor](DThemeImageBase.md#getsecondaryimagetintcolor)
- [getShadow](DThemeImageBase.md#getshadow)
- [getTertiaryImageAlignHorizontal](DThemeImageBase.md#gettertiaryimagealignhorizontal)
- [getTertiaryImageAlignVertical](DThemeImageBase.md#gettertiaryimagealignvertical)
- [getTertiaryImageAlignWith](DThemeImageBase.md#gettertiaryimagealignwith)
- [getTertiaryImageMarginHorizontal](DThemeImageBase.md#gettertiaryimagemarginhorizontal)
- [getTertiaryImageMarginVertial](DThemeImageBase.md#gettertiaryimagemarginvertial)
- [getTertiaryImageSource](DThemeImageBase.md#gettertiaryimagesource)
- [getTertiaryImageTintAlpha](DThemeImageBase.md#gettertiaryimagetintalpha)
- [getTertiaryImageTintColor](DThemeImageBase.md#gettertiaryimagetintcolor)
- [getTextAlignHorizontal](DThemeImageBase.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeImageBase.md#gettextalignvertical)
- [getTextFormatter](DThemeImageBase.md#gettextformatter)
- [getTextStyleClipping](DThemeImageBase.md#gettextstyleclipping)
- [getTextStyleWordWrap](DThemeImageBase.md#gettextstylewordwrap)
- [getTextValue](DThemeImageBase.md#gettextvalue)
- [getTitle](DThemeImageBase.md#gettitle)
- [getWeight](DThemeImageBase.md#getweight)
- [getWidth](DThemeImageBase.md#getwidth)
- [getX](DThemeImageBase.md#getx)
- [getY](DThemeImageBase.md#gety)
- [isOverflowMaskEnabled](DThemeImageBase.md#isoverflowmaskenabled)
- [newShadow](DThemeImageBase.md#newshadow)
- [newShadowWeak](DThemeImageBase.md#newshadowweak)
- [newState](DThemeImageBase.md#newstate)
- [newTextValue](DThemeImageBase.md#newtextvalue)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getAlpha](DThemeTextBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeTextBase](DThemeTextBase.md).[getBackgroundAlpha](DThemeTextBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L503)

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

[DThemeTextBase](DThemeTextBase.md).[getBackgroundColor](DThemeTextBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getBackgroundTexture](DThemeTextBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderAlign](DThemeTextBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderAlpha](DThemeTextBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L523)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderColor](DThemeTextBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L516)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderMask](DThemeTextBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getBorderTexture](DThemeTextBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:549](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L549)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderWidth](DThemeTextBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getClearType](DThemeTextBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

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

[DThemeTextBase](DThemeTextBase.md).[getColor](DThemeTextBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getCornerMask](DThemeTextBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getCornerRadius](DThemeTextBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L574)

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

[DThemeTextBase](DThemeTextBase.md).[getCursor](DThemeTextBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontFamilly](DThemeTextBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontSize](DThemeTextBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontStyle](DThemeTextBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontVariant](DThemeTextBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontWeight](DThemeTextBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getHeight](DThemeTextBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L483)

___

### getImageAlignHorizontal

▸ **getImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageAlignHorizontal](DThemeImagePiece.md#getimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L60)

___

### getImageAlignVertical

▸ **getImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageAlignVertical](DThemeImagePiece.md#getimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L61)

___

### getImageAlignWith

▸ **getImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageAlignWith](DThemeImagePiece.md#getimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L62)

___

### getImageMarginHorizontal

▸ **getImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageMarginHorizontal](DThemeImagePiece.md#getimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L63)

___

### getImageMarginVertial

▸ **getImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageMarginVertial](DThemeImagePiece.md#getimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L64)

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

[DThemeImagePiece](DThemeImagePiece.md).[getImageSource](DThemeImagePiece.md#getimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L67)

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

[DThemeImagePiece](DThemeImagePiece.md).[getImageTintAlpha](DThemeImagePiece.md#getimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L66)

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

[DThemeImagePiece](DThemeImagePiece.md).[getImageTintColor](DThemeImagePiece.md#getimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L65)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getInteractive](DThemeTextBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:633](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L633)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getLineHeight](DThemeTextBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineAlign](DThemeTextBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineAlpha](DThemeTextBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L594)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineColor](DThemeTextBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L587)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineMask](DThemeTextBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineOffset](DThemeTextBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineWidth](DThemeTextBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getPaddingBottom](DThemeTextBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L569)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getPaddingLeft](DThemeTextBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L554)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getPaddingRight](DThemeTextBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L559)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getPaddingTop](DThemeTextBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getSecondaryImageAlignHorizontal

▸ **getSecondaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L54)

___

### getSecondaryImageAlignVertical

▸ **getSecondaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L55)

___

### getSecondaryImageAlignWith

▸ **getSecondaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L56)

___

### getSecondaryImageMarginHorizontal

▸ **getSecondaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L57)

___

### getSecondaryImageMarginVertial

▸ **getSecondaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L58)

___

### getSecondaryImageSource

▸ `Optional` **getSecondaryImageSource**(`state`): ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L61)

___

### getSecondaryImageTintAlpha

▸ **getSecondaryImageTintAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L60)

___

### getSecondaryImageTintColor

▸ **getSecondaryImageTintColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L59)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getShadow](DThemeTextBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getTertiaryImageAlignHorizontal

▸ **getTertiaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L63)

___

### getTertiaryImageAlignVertical

▸ **getTertiaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L64)

___

### getTertiaryImageAlignWith

▸ **getTertiaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L65)

___

### getTertiaryImageMarginHorizontal

▸ **getTertiaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L66)

___

### getTertiaryImageMarginVertial

▸ **getTertiaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L67)

___

### getTertiaryImageSource

▸ `Optional` **getTertiaryImageSource**(`state`): ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L70)

___

### getTertiaryImageTintAlpha

▸ **getTertiaryImageTintAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L69)

___

### getTertiaryImageTintColor

▸ **getTertiaryImageTintColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L68)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextAlignHorizontal](DThemeTextBase.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L87)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextAlignVertical](DThemeTextBase.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L86)

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

[DThemeTextBase](DThemeTextBase.md).[getTextFormatter](DThemeTextBase.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L70)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextStyleClipping](DThemeTextBase.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextStyleWordWrap](DThemeTextBase.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L89)

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

[DThemeTextBase](DThemeTextBase.md).[getTextValue](DThemeTextBase.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTitle](DThemeTextBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getWeight](DThemeTextBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getWidth](DThemeTextBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getX](DThemeTextBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L473)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getY](DThemeTextBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L478)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[isOverflowMaskEnabled](DThemeTextBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L90)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[newShadow](DThemeTextBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L661)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[newShadowWeak](DThemeTextBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L666)

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

[DThemeTextBase](DThemeTextBase.md).[newState](DThemeTextBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L638)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[newTextValue](DThemeTextBase.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L76)
