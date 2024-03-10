[Winter Cardinal UI - v0.414.0](../index.md) / DThemeImageBase

# Interface: DThemeImageBase\<VALUE\>

[DImageBase](../classes/DImageBase.md) theme.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DThemeTextBase`](DThemeTextBase.md)\<`VALUE`\>

- [`DThemeImagePiece`](DThemeImagePiece.md)

- [`DThemeImageBaseSecondary`](DThemeImageBaseSecondary.md)

- [`DThemeImageBaseTertiary`](DThemeImageBaseTertiary.md)

  ↳ **`DThemeImageBase`**

  ↳↳ [`DThemeButtonBase`](DThemeButtonBase.md)

  ↳↳ [`DThemeDialogLayeredHeaderSeparator`](DThemeDialogLayeredHeaderSeparator.md)

  ↳↳ [`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)

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
- [getImageRotation](DThemeImageBase.md#getimagerotation)
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
- [getSecondaryImageRotation](DThemeImageBase.md#getsecondaryimagerotation)
- [getSecondaryImageSource](DThemeImageBase.md#getsecondaryimagesource)
- [getSecondaryImageTintAlpha](DThemeImageBase.md#getsecondaryimagetintalpha)
- [getSecondaryImageTintColor](DThemeImageBase.md#getsecondaryimagetintcolor)
- [getShadow](DThemeImageBase.md#getshadow)
- [getTertiaryImageAlignHorizontal](DThemeImageBase.md#gettertiaryimagealignhorizontal)
- [getTertiaryImageAlignVertical](DThemeImageBase.md#gettertiaryimagealignvertical)
- [getTertiaryImageAlignWith](DThemeImageBase.md#gettertiaryimagealignwith)
- [getTertiaryImageMarginHorizontal](DThemeImageBase.md#gettertiaryimagemarginhorizontal)
- [getTertiaryImageMarginVertial](DThemeImageBase.md#gettertiaryimagemarginvertial)
- [getTertiaryImageRotation](DThemeImageBase.md#gettertiaryimagerotation)
- [getTertiaryImageSource](DThemeImageBase.md#gettertiaryimagesource)
- [getTertiaryImageTintAlpha](DThemeImageBase.md#gettertiaryimagetintalpha)
- [getTertiaryImageTintColor](DThemeImageBase.md#gettertiaryimagetintcolor)
- [getTextAlignHorizontal](DThemeImageBase.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeImageBase.md#gettextalignvertical)
- [getTextFormatter](DThemeImageBase.md#gettextformatter)
- [getTextStyleClipping](DThemeImageBase.md#gettextstyleclipping)
- [getTextStyleFitting](DThemeImageBase.md#gettextstylefitting)
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

[DThemeTextBase](DThemeTextBase.md).[getBackgroundAlpha](DThemeTextBase.md#getbackgroundalpha)

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

[DThemeTextBase](DThemeTextBase.md).[getBackgroundColor](DThemeTextBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getBackgroundTexture](DThemeTextBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderAlpha](DThemeTextBase.md#getborderalpha)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderColor](DThemeTextBase.md#getbordercolor)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderMask](DThemeTextBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getBorderTexture](DThemeTextBase.md#getbordertexture)

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

[DThemeTextBase](DThemeTextBase.md).[getBorderWidth](DThemeTextBase.md#getborderwidth)

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

[DThemeTextBase](DThemeTextBase.md).[getClearType](DThemeTextBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

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

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getCornerMask](DThemeTextBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getCornerRadius](DThemeTextBase.md#getcornerradius)

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

[DThemeTextBase](DThemeTextBase.md).[getCursor](DThemeTextBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontFamilly](DThemeTextBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontSize](DThemeTextBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontStyle](DThemeTextBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontVariant](DThemeTextBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getFontWeight](DThemeTextBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getHeight](DThemeTextBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getImageAlignHorizontal

▸ **getImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageAlignHorizontal](DThemeImagePiece.md#getimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L20)

___

### getImageAlignVertical

▸ **getImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageAlignVertical](DThemeImagePiece.md#getimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L21)

___

### getImageAlignWith

▸ **getImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageAlignWith](DThemeImagePiece.md#getimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L22)

___

### getImageMarginHorizontal

▸ **getImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageMarginHorizontal](DThemeImagePiece.md#getimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L23)

___

### getImageMarginVertial

▸ **getImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeImagePiece](DThemeImagePiece.md).[getImageMarginVertial](DThemeImagePiece.md#getimagemarginvertial)

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

[DThemeImagePiece](DThemeImagePiece.md).[getImageRotation](DThemeImagePiece.md#getimagerotation)

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

[DThemeImagePiece](DThemeImagePiece.md).[getImageSource](DThemeImagePiece.md#getimagesource)

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

[DThemeImagePiece](DThemeImagePiece.md).[getImageTintAlpha](DThemeImagePiece.md#getimagetintalpha)

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

[DThemeImagePiece](DThemeImagePiece.md).[getImageTintColor](DThemeImagePiece.md#getimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L25)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getInteractive](DThemeTextBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getLineHeight](DThemeTextBase.md#getlineheight)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineAlign](DThemeTextBase.md#getoutlinealign)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineAlpha](DThemeTextBase.md#getoutlinealpha)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineColor](DThemeTextBase.md#getoutlinecolor)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineMask](DThemeTextBase.md#getoutlinemask)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineOffset](DThemeTextBase.md#getoutlineoffset)

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

[DThemeTextBase](DThemeTextBase.md).[getOutlineWidth](DThemeTextBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getPaddingBottom](DThemeTextBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getPaddingLeft](DThemeTextBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getPaddingRight](DThemeTextBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getPaddingTop](DThemeTextBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

___

### getSecondaryImageAlignHorizontal

▸ **getSecondaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageAlignHorizontal](DThemeImageBaseSecondary.md#getsecondaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L9)

___

### getSecondaryImageAlignVertical

▸ **getSecondaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageAlignVertical](DThemeImageBaseSecondary.md#getsecondaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L10)

___

### getSecondaryImageAlignWith

▸ **getSecondaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Inherited from

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageAlignWith](DThemeImageBaseSecondary.md#getsecondaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L11)

___

### getSecondaryImageMarginHorizontal

▸ **getSecondaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageMarginHorizontal](DThemeImageBaseSecondary.md#getsecondaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L12)

___

### getSecondaryImageMarginVertial

▸ **getSecondaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageMarginVertial](DThemeImageBaseSecondary.md#getsecondaryimagemarginvertial)

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

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageRotation](DThemeImageBaseSecondary.md#getsecondaryimagerotation)

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

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageSource](DThemeImageBaseSecondary.md#getsecondaryimagesource)

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

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageTintAlpha](DThemeImageBaseSecondary.md#getsecondaryimagetintalpha)

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

[DThemeImageBaseSecondary](DThemeImageBaseSecondary.md).[getSecondaryImageTintColor](DThemeImageBaseSecondary.md#getsecondaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-secondary.ts#L14)

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

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getTertiaryImageAlignHorizontal

▸ **getTertiaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageAlignHorizontal](DThemeImageBaseTertiary.md#gettertiaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L9)

___

### getTertiaryImageAlignVertical

▸ **getTertiaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageAlignVertical](DThemeImageBaseTertiary.md#gettertiaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L10)

___

### getTertiaryImageAlignWith

▸ **getTertiaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Inherited from

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageAlignWith](DThemeImageBaseTertiary.md#gettertiaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L11)

___

### getTertiaryImageMarginHorizontal

▸ **getTertiaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageMarginHorizontal](DThemeImageBaseTertiary.md#gettertiaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L12)

___

### getTertiaryImageMarginVertial

▸ **getTertiaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageMarginVertial](DThemeImageBaseTertiary.md#gettertiaryimagemarginvertial)

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

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageRotation](DThemeImageBaseTertiary.md#gettertiaryimagerotation)

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

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageSource](DThemeImageBaseTertiary.md#gettertiaryimagesource)

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

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageTintAlpha](DThemeImageBaseTertiary.md#gettertiaryimagetintalpha)

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

[DThemeImageBaseTertiary](DThemeImageBaseTertiary.md).[getTertiaryImageTintColor](DThemeImageBaseTertiary.md#gettertiaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base-theme-wrapper-tertiary.ts#L14)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextAlignHorizontal](DThemeTextBase.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L46)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextAlignVertical](DThemeTextBase.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L45)

___

### getTextFormatter

▸ **getTextFormatter**(): [`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Returns

[`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextFormatter](DThemeTextBase.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L29)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextStyleClipping](DThemeTextBase.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L47)

___

### getTextStyleFitting

▸ **getTextStyleFitting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextStyleFitting](DThemeTextBase.md#gettextstylefitting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L48)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTextStyleWordWrap](DThemeTextBase.md#gettextstylewordwrap)

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

[DThemeTextBase](DThemeTextBase.md).[getTextValue](DThemeTextBase.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L43)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getTitle](DThemeTextBase.md#gettitle)

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

[DThemeTextBase](DThemeTextBase.md).[getWeight](DThemeTextBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getWidth](DThemeTextBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getX](DThemeTextBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[getY](DThemeTextBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[isOverflowMaskEnabled](DThemeTextBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L50)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[newShadow](DThemeTextBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeTextBase](DThemeTextBase.md).[newShadowWeak](DThemeTextBase.md#newshadowweak)

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

[DThemeTextBase](DThemeTextBase.md).[newState](DThemeTextBase.md#newstate)

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

[DThemeTextBase](DThemeTextBase.md).[newTextValue](DThemeTextBase.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L35)
