[Winter Cardinal UI - v0.179.0](../index.md) / DThemeWhiteMenu

# Class: DThemeWhiteMenu

## Hierarchy

- [`DThemeWhiteLayoutVertical`](DThemeWhiteLayoutVertical.md)

  ↳ **`DThemeWhiteMenu`**

## Implements

- [`DThemeMenu`](../interfaces/DThemeMenu.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteMenu.md#constructor)

### Methods

- [getAlpha](DThemeWhiteMenu.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteMenu.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteMenu.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteMenu.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteMenu.md#getborderalign)
- [getBorderAlpha](DThemeWhiteMenu.md#getborderalpha)
- [getBorderColor](DThemeWhiteMenu.md#getbordercolor)
- [getBorderMask](DThemeWhiteMenu.md#getbordermask)
- [getBorderTexture](DThemeWhiteMenu.md#getbordertexture)
- [getBorderWidth](DThemeWhiteMenu.md#getborderwidth)
- [getClearType](DThemeWhiteMenu.md#getcleartype)
- [getColor](DThemeWhiteMenu.md#getcolor)
- [getCornerAdjust](DThemeWhiteMenu.md#getcorneradjust)
- [getCornerMask](DThemeWhiteMenu.md#getcornermask)
- [getCornerRadius](DThemeWhiteMenu.md#getcornerradius)
- [getCursor](DThemeWhiteMenu.md#getcursor)
- [getDirection](DThemeWhiteMenu.md#getdirection)
- [getFontFamilly](DThemeWhiteMenu.md#getfontfamilly)
- [getFontSize](DThemeWhiteMenu.md#getfontsize)
- [getFontStyle](DThemeWhiteMenu.md#getfontstyle)
- [getFontVariant](DThemeWhiteMenu.md#getfontvariant)
- [getFontWeight](DThemeWhiteMenu.md#getfontweight)
- [getHeight](DThemeWhiteMenu.md#getheight)
- [getInteractive](DThemeWhiteMenu.md#getinteractive)
- [getLineHeight](DThemeWhiteMenu.md#getlineheight)
- [getMargin](DThemeWhiteMenu.md#getmargin)
- [getMultiplicity](DThemeWhiteMenu.md#getmultiplicity)
- [getOffsetX](DThemeWhiteMenu.md#getoffsetx)
- [getOffsetY](DThemeWhiteMenu.md#getoffsety)
- [getOutlineAlign](DThemeWhiteMenu.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteMenu.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteMenu.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteMenu.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteMenu.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteMenu.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteMenu.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteMenu.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteMenu.md#getpaddingright)
- [getPaddingTop](DThemeWhiteMenu.md#getpaddingtop)
- [getReverse](DThemeWhiteMenu.md#getreverse)
- [getShadow](DThemeWhiteMenu.md#getshadow)
- [getTitle](DThemeWhiteMenu.md#gettitle)
- [getWeight](DThemeWhiteMenu.md#getweight)
- [getWidth](DThemeWhiteMenu.md#getwidth)
- [getX](DThemeWhiteMenu.md#getx)
- [getY](DThemeWhiteMenu.md#gety)
- [newShadow](DThemeWhiteMenu.md#newshadow)
- [newShadowWeak](DThemeWhiteMenu.md#newshadowweak)
- [newState](DThemeWhiteMenu.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteMenu**()

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[constructor](DThemeWhiteLayoutVertical.md#constructor)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getAlpha](../interfaces/DThemeMenu.md#getalpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getAlpha](DThemeWhiteLayoutVertical.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBackgroundAlpha](../interfaces/DThemeMenu.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundAlpha](DThemeWhiteLayoutVertical.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBackgroundColor](../interfaces/DThemeMenu.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundColor](DThemeWhiteLayoutVertical.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L15)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBackgroundTexture](../interfaces/DThemeMenu.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundTexture](DThemeWhiteLayoutVertical.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBorderAlign](../interfaces/DThemeMenu.md#getborderalign)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderAlign](DThemeWhiteLayoutVertical.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L94)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBorderAlpha](../interfaces/DThemeMenu.md#getborderalpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderAlpha](DThemeWhiteLayoutVertical.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBorderColor](../interfaces/DThemeMenu.md#getbordercolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderColor](DThemeWhiteLayoutVertical.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L17)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBorderMask](../interfaces/DThemeMenu.md#getbordermask)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderMask](DThemeWhiteLayoutVertical.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBorderTexture](../interfaces/DThemeMenu.md#getbordertexture)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderTexture](DThemeWhiteLayoutVertical.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBorderWidth](../interfaces/DThemeMenu.md#getborderwidth)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderWidth](DThemeWhiteLayoutVertical.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getClearType](../interfaces/DThemeMenu.md#getcleartype)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getClearType](DThemeWhiteLayoutVertical.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getColor](../interfaces/DThemeMenu.md#getcolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getColor](DThemeWhiteLayoutVertical.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getCornerAdjust](../interfaces/DThemeMenu.md#getcorneradjust)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerAdjust](DThemeWhiteLayoutVertical.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getCornerMask](../interfaces/DThemeMenu.md#getcornermask)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerMask](DThemeWhiteLayoutVertical.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getCornerRadius](../interfaces/DThemeMenu.md#getcornerradius)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerRadius](DThemeWhiteLayoutVertical.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getCursor](../interfaces/DThemeMenu.md#getcursor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCursor](DThemeWhiteLayoutVertical.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getDirection](../interfaces/DThemeMenu.md#getdirection)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getDirection](DThemeWhiteLayoutVertical.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-vertical.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-vertical.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontFamilly](../interfaces/DThemeMenu.md#getfontfamilly)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontFamilly](DThemeWhiteLayoutVertical.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontSize](../interfaces/DThemeMenu.md#getfontsize)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontSize](DThemeWhiteLayoutVertical.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontStyle](../interfaces/DThemeMenu.md#getfontstyle)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontStyle](DThemeWhiteLayoutVertical.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontVariant](../interfaces/DThemeMenu.md#getfontvariant)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontVariant](DThemeWhiteLayoutVertical.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontWeight](../interfaces/DThemeMenu.md#getfontweight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontWeight](DThemeWhiteLayoutVertical.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getHeight](../interfaces/DThemeMenu.md#getheight)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getHeight](DThemeWhiteLayoutVertical.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L39)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getInteractive](../interfaces/DThemeMenu.md#getinteractive)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getInteractive](DThemeWhiteLayoutVertical.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L51)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getLineHeight](../interfaces/DThemeMenu.md#getlineheight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getLineHeight](DThemeWhiteLayoutVertical.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getMargin](../interfaces/DThemeMenu.md#getmargin)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getMargin](DThemeWhiteLayoutVertical.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L43)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getMultiplicity](../interfaces/DThemeMenu.md#getmultiplicity)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getMultiplicity](DThemeWhiteLayoutVertical.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L42)

___

### getOffsetX

▸ **getOffsetX**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOffsetX](../interfaces/DThemeMenu.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L19)

___

### getOffsetY

▸ **getOffsetY**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOffsetY](../interfaces/DThemeMenu.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L23)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOutlineAlign](../interfaces/DThemeMenu.md#getoutlinealign)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineAlign](DThemeWhiteLayoutVertical.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L149)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOutlineAlpha](../interfaces/DThemeMenu.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineAlpha](DThemeWhiteLayoutVertical.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOutlineColor](../interfaces/DThemeMenu.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineColor](DThemeWhiteLayoutVertical.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOutlineMask](../interfaces/DThemeMenu.md#getoutlinemask)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineMask](DThemeWhiteLayoutVertical.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOutlineOffset](../interfaces/DThemeMenu.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineOffset](DThemeWhiteLayoutVertical.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOutlineWidth](../interfaces/DThemeMenu.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineWidth](DThemeWhiteLayoutVertical.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getPaddingBottom](../interfaces/DThemeMenu.md#getpaddingbottom)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingBottom](DThemeWhiteLayoutVertical.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L31)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getPaddingLeft](../interfaces/DThemeMenu.md#getpaddingleft)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingLeft](DThemeWhiteLayoutVertical.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getPaddingRight](../interfaces/DThemeMenu.md#getpaddingright)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingRight](DThemeWhiteLayoutVertical.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getPaddingTop](../interfaces/DThemeMenu.md#getpaddingtop)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingTop](DThemeWhiteLayoutVertical.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L27)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getReverse](../interfaces/DThemeMenu.md#getreverse)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getReverse](DThemeWhiteLayoutVertical.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getShadow](../interfaces/DThemeMenu.md#getshadow)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getShadow](DThemeWhiteLayoutVertical.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L47)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getTitle](../interfaces/DThemeMenu.md#gettitle)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getTitle](DThemeWhiteLayoutVertical.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getWeight](../interfaces/DThemeMenu.md#getweight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getWeight](DThemeWhiteLayoutVertical.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getWidth](../interfaces/DThemeMenu.md#getwidth)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getWidth](DThemeWhiteLayoutVertical.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L35)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getX](../interfaces/DThemeMenu.md#getx)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getX](DThemeWhiteLayoutVertical.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getY](../interfaces/DThemeMenu.md#gety)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getY](DThemeWhiteLayoutVertical.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[newShadow](../interfaces/DThemeMenu.md#newshadow)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newShadow](DThemeWhiteLayoutVertical.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[newShadowWeak](../interfaces/DThemeMenu.md#newshadowweak)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newShadowWeak](DThemeWhiteLayoutVertical.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[newState](../interfaces/DThemeMenu.md#newstate)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newState](DThemeWhiteLayoutVertical.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu.ts#L55)
