[Winter Cardinal UI - v0.310.1](../index.md) / DThemeMenuItem

# Interface: DThemeMenuItem

[DImageBase](../classes/DImageBase.md) theme.

## Hierarchy

- [`DThemeMenuItemBase`](DThemeMenuItemBase.md)

  ↳ **`DThemeMenuItem`**

  ↳↳ [`DThemeMenuItemMenu`](DThemeMenuItemMenu.md)

  ↳↳ [`DThemeMenuItemText`](DThemeMenuItemText.md)

## Implemented by

- [`DThemeDarkMenuItem`](../classes/DThemeDarkMenuItem.md)
- [`DThemeWhiteMenuItem`](../classes/DThemeWhiteMenuItem.md)

## Table of contents

### Methods

- [getAlpha](DThemeMenuItem.md#getalpha)
- [getBackgroundAlpha](DThemeMenuItem.md#getbackgroundalpha)
- [getBackgroundColor](DThemeMenuItem.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeMenuItem.md#getbackgroundtexture)
- [getBorderAlign](DThemeMenuItem.md#getborderalign)
- [getBorderAlpha](DThemeMenuItem.md#getborderalpha)
- [getBorderColor](DThemeMenuItem.md#getbordercolor)
- [getBorderMask](DThemeMenuItem.md#getbordermask)
- [getBorderTexture](DThemeMenuItem.md#getbordertexture)
- [getBorderWidth](DThemeMenuItem.md#getborderwidth)
- [getClearType](DThemeMenuItem.md#getcleartype)
- [getColor](DThemeMenuItem.md#getcolor)
- [getCornerMask](DThemeMenuItem.md#getcornermask)
- [getCornerRadius](DThemeMenuItem.md#getcornerradius)
- [getCursor](DThemeMenuItem.md#getcursor)
- [getFontFamilly](DThemeMenuItem.md#getfontfamilly)
- [getFontSize](DThemeMenuItem.md#getfontsize)
- [getFontStyle](DThemeMenuItem.md#getfontstyle)
- [getFontVariant](DThemeMenuItem.md#getfontvariant)
- [getFontWeight](DThemeMenuItem.md#getfontweight)
- [getHeight](DThemeMenuItem.md#getheight)
- [getImageAlignHorizontal](DThemeMenuItem.md#getimagealignhorizontal)
- [getImageAlignVertical](DThemeMenuItem.md#getimagealignvertical)
- [getImageAlignWith](DThemeMenuItem.md#getimagealignwith)
- [getImageMarginHorizontal](DThemeMenuItem.md#getimagemarginhorizontal)
- [getImageMarginVertial](DThemeMenuItem.md#getimagemarginvertial)
- [getImageSource](DThemeMenuItem.md#getimagesource)
- [getImageTintAlpha](DThemeMenuItem.md#getimagetintalpha)
- [getImageTintColor](DThemeMenuItem.md#getimagetintcolor)
- [getInteractive](DThemeMenuItem.md#getinteractive)
- [getLineHeight](DThemeMenuItem.md#getlineheight)
- [getOutlineAlign](DThemeMenuItem.md#getoutlinealign)
- [getOutlineAlpha](DThemeMenuItem.md#getoutlinealpha)
- [getOutlineColor](DThemeMenuItem.md#getoutlinecolor)
- [getOutlineMask](DThemeMenuItem.md#getoutlinemask)
- [getOutlineOffset](DThemeMenuItem.md#getoutlineoffset)
- [getOutlineWidth](DThemeMenuItem.md#getoutlinewidth)
- [getPaddingBottom](DThemeMenuItem.md#getpaddingbottom)
- [getPaddingLeft](DThemeMenuItem.md#getpaddingleft)
- [getPaddingRight](DThemeMenuItem.md#getpaddingright)
- [getPaddingTop](DThemeMenuItem.md#getpaddingtop)
- [getSecondaryImageAlignHorizontal](DThemeMenuItem.md#getsecondaryimagealignhorizontal)
- [getSecondaryImageAlignVertical](DThemeMenuItem.md#getsecondaryimagealignvertical)
- [getSecondaryImageAlignWith](DThemeMenuItem.md#getsecondaryimagealignwith)
- [getSecondaryImageMarginHorizontal](DThemeMenuItem.md#getsecondaryimagemarginhorizontal)
- [getSecondaryImageMarginVertial](DThemeMenuItem.md#getsecondaryimagemarginvertial)
- [getSecondaryImageSource](DThemeMenuItem.md#getsecondaryimagesource)
- [getSecondaryImageTintAlpha](DThemeMenuItem.md#getsecondaryimagetintalpha)
- [getSecondaryImageTintColor](DThemeMenuItem.md#getsecondaryimagetintcolor)
- [getShadow](DThemeMenuItem.md#getshadow)
- [getTertiaryImageAlignHorizontal](DThemeMenuItem.md#gettertiaryimagealignhorizontal)
- [getTertiaryImageAlignVertical](DThemeMenuItem.md#gettertiaryimagealignvertical)
- [getTertiaryImageAlignWith](DThemeMenuItem.md#gettertiaryimagealignwith)
- [getTertiaryImageMarginHorizontal](DThemeMenuItem.md#gettertiaryimagemarginhorizontal)
- [getTertiaryImageMarginVertial](DThemeMenuItem.md#gettertiaryimagemarginvertial)
- [getTertiaryImageSource](DThemeMenuItem.md#gettertiaryimagesource)
- [getTertiaryImageTintAlpha](DThemeMenuItem.md#gettertiaryimagetintalpha)
- [getTertiaryImageTintColor](DThemeMenuItem.md#gettertiaryimagetintcolor)
- [getTextAlignHorizontal](DThemeMenuItem.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeMenuItem.md#gettextalignvertical)
- [getTextFormatter](DThemeMenuItem.md#gettextformatter)
- [getTextStyleClipping](DThemeMenuItem.md#gettextstyleclipping)
- [getTextStyleFitting](DThemeMenuItem.md#gettextstylefitting)
- [getTextStyleWordWrap](DThemeMenuItem.md#gettextstylewordwrap)
- [getTextValue](DThemeMenuItem.md#gettextvalue)
- [getTitle](DThemeMenuItem.md#gettitle)
- [getWeight](DThemeMenuItem.md#getweight)
- [getWidth](DThemeMenuItem.md#getwidth)
- [getX](DThemeMenuItem.md#getx)
- [getY](DThemeMenuItem.md#gety)
- [isOverflowMaskEnabled](DThemeMenuItem.md#isoverflowmaskenabled)
- [newShadow](DThemeMenuItem.md#newshadow)
- [newShadowWeak](DThemeMenuItem.md#newshadowweak)
- [newState](DThemeMenuItem.md#newstate)
- [newTextValue](DThemeMenuItem.md#newtextvalue)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getAlpha](DThemeMenuItemBase.md#getalpha)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBackgroundAlpha](DThemeMenuItemBase.md#getbackgroundalpha)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBackgroundColor](DThemeMenuItemBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L545)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBackgroundTexture](DThemeMenuItemBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L557)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBorderAlign](DThemeMenuItemBase.md#getborderalign)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBorderAlpha](DThemeMenuItemBase.md#getborderalpha)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBorderColor](DThemeMenuItemBase.md#getbordercolor)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBorderMask](DThemeMenuItemBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBorderTexture](DThemeMenuItemBase.md#getbordertexture)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getBorderWidth](DThemeMenuItemBase.md#getborderwidth)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getClearType](DThemeMenuItemBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L698)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getColor](DThemeMenuItemBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getCornerMask](DThemeMenuItemBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getCornerRadius](DThemeMenuItemBase.md#getcornerradius)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getCursor](DThemeMenuItemBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L720)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getFontFamilly](DThemeMenuItemBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getFontSize](DThemeMenuItemBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getFontStyle](DThemeMenuItemBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getFontVariant](DThemeMenuItemBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getFontWeight](DThemeMenuItemBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getHeight](DThemeMenuItemBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L532)

___

### getImageAlignHorizontal

▸ **getImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getImageAlignHorizontal](DThemeMenuItemBase.md#getimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L60)

___

### getImageAlignVertical

▸ **getImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getImageAlignVertical](DThemeMenuItemBase.md#getimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L61)

___

### getImageAlignWith

▸ **getImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith-1)

#### Returns

[`DAlignWith`](../index.md#dalignwith-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getImageAlignWith](DThemeMenuItemBase.md#getimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L62)

___

### getImageMarginHorizontal

▸ **getImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getImageMarginHorizontal](DThemeMenuItemBase.md#getimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L63)

___

### getImageMarginVertial

▸ **getImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getImageMarginVertial](DThemeMenuItemBase.md#getimagemarginvertial)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getImageSource](DThemeMenuItemBase.md#getimagesource)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getImageTintAlpha](DThemeMenuItemBase.md#getimagetintalpha)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getImageTintColor](DThemeMenuItemBase.md#getimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-piece.ts#L65)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getInteractive](DThemeMenuItemBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L682)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getLineHeight](DThemeMenuItemBase.md#getlineheight)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getOutlineAlign](DThemeMenuItemBase.md#getoutlinealign)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getOutlineAlpha](DThemeMenuItemBase.md#getoutlinealpha)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getOutlineColor](DThemeMenuItemBase.md#getoutlinecolor)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getOutlineMask](DThemeMenuItemBase.md#getoutlinemask)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getOutlineOffset](DThemeMenuItemBase.md#getoutlineoffset)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getOutlineWidth](DThemeMenuItemBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L650)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getPaddingBottom](DThemeMenuItemBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L618)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getPaddingLeft](DThemeMenuItemBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:603](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L603)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getPaddingRight](DThemeMenuItemBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getPaddingTop](DThemeMenuItemBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:613](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L613)

___

### getSecondaryImageAlignHorizontal

▸ **getSecondaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getSecondaryImageAlignHorizontal](DThemeMenuItemBase.md#getsecondaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L54)

___

### getSecondaryImageAlignVertical

▸ **getSecondaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getSecondaryImageAlignVertical](DThemeMenuItemBase.md#getsecondaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L55)

___

### getSecondaryImageAlignWith

▸ **getSecondaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith-1)

#### Returns

[`DAlignWith`](../index.md#dalignwith-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getSecondaryImageAlignWith](DThemeMenuItemBase.md#getsecondaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L56)

___

### getSecondaryImageMarginHorizontal

▸ **getSecondaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getSecondaryImageMarginHorizontal](DThemeMenuItemBase.md#getsecondaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L57)

___

### getSecondaryImageMarginVertial

▸ **getSecondaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getSecondaryImageMarginVertial](DThemeMenuItemBase.md#getsecondaryimagemarginvertial)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getSecondaryImageSource](DThemeMenuItemBase.md#getsecondaryimagesource)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getSecondaryImageTintAlpha](DThemeMenuItemBase.md#getsecondaryimagetintalpha)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getSecondaryImageTintColor](DThemeMenuItemBase.md#getsecondaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L59)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getShadow](DThemeMenuItemBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L677)

___

### getTertiaryImageAlignHorizontal

▸ **getTertiaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTertiaryImageAlignHorizontal](DThemeMenuItemBase.md#gettertiaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L63)

___

### getTertiaryImageAlignVertical

▸ **getTertiaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTertiaryImageAlignVertical](DThemeMenuItemBase.md#gettertiaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L64)

___

### getTertiaryImageAlignWith

▸ **getTertiaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith-1)

#### Returns

[`DAlignWith`](../index.md#dalignwith-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTertiaryImageAlignWith](DThemeMenuItemBase.md#gettertiaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L65)

___

### getTertiaryImageMarginHorizontal

▸ **getTertiaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTertiaryImageMarginHorizontal](DThemeMenuItemBase.md#gettertiaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L66)

___

### getTertiaryImageMarginVertial

▸ **getTertiaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTertiaryImageMarginVertial](DThemeMenuItemBase.md#gettertiaryimagemarginvertial)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTertiaryImageSource](DThemeMenuItemBase.md#gettertiaryimagesource)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTertiaryImageTintAlpha](DThemeMenuItemBase.md#gettertiaryimagetintalpha)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTertiaryImageTintColor](DThemeMenuItemBase.md#gettertiaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L68)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTextAlignHorizontal](DThemeMenuItemBase.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L87)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTextAlignVertical](DThemeMenuItemBase.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L86)

___

### getTextFormatter

▸ **getTextFormatter**(): (`value`: `string`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTextFormatter](DThemeMenuItemBase.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L70)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTextStyleClipping](DThemeMenuItemBase.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getTextStyleFitting

▸ **getTextStyleFitting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTextStyleFitting](DThemeMenuItemBase.md#gettextstylefitting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L89)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTextStyleWordWrap](DThemeMenuItemBase.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L90)

___

### getTextValue

▸ **getTextValue**(`state`): `undefined` \| `string`

Returns a text value.
Called to get a text vale if there is no text value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`undefined` \| `string`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTextValue](DThemeMenuItemBase.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getTitle](DThemeMenuItemBase.md#gettitle)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getWeight](DThemeMenuItemBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L705)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getWidth](DThemeMenuItemBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getX](DThemeMenuItemBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L522)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[getY](DThemeMenuItemBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L527)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[isOverflowMaskEnabled](DThemeMenuItemBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L91)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[newShadow](DThemeMenuItemBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:710](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L710)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[newShadowWeak](DThemeMenuItemBase.md#newshadowweak)

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

[DThemeMenuItemBase](DThemeMenuItemBase.md).[newState](DThemeMenuItemBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L687)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DThemeMenuItemBase](DThemeMenuItemBase.md).[newTextValue](DThemeMenuItemBase.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L76)
