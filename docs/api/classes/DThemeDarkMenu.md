[Winter Cardinal UI - v0.179.0](../index.md) / DThemeDarkMenu

# Class: DThemeDarkMenu

## Hierarchy

- [`DThemeDarkLayoutVertical`](DThemeDarkLayoutVertical.md)

  ↳ **`DThemeDarkMenu`**

## Implements

- [`DThemeMenu`](../interfaces/DThemeMenu.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkMenu.md#constructor)

### Methods

- [getAlpha](DThemeDarkMenu.md#getalpha)
- [getBackgroundAlpha](DThemeDarkMenu.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkMenu.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkMenu.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkMenu.md#getborderalign)
- [getBorderAlpha](DThemeDarkMenu.md#getborderalpha)
- [getBorderColor](DThemeDarkMenu.md#getbordercolor)
- [getBorderMask](DThemeDarkMenu.md#getbordermask)
- [getBorderTexture](DThemeDarkMenu.md#getbordertexture)
- [getBorderWidth](DThemeDarkMenu.md#getborderwidth)
- [getClearType](DThemeDarkMenu.md#getcleartype)
- [getColor](DThemeDarkMenu.md#getcolor)
- [getCornerAdjust](DThemeDarkMenu.md#getcorneradjust)
- [getCornerMask](DThemeDarkMenu.md#getcornermask)
- [getCornerRadius](DThemeDarkMenu.md#getcornerradius)
- [getCursor](DThemeDarkMenu.md#getcursor)
- [getDirection](DThemeDarkMenu.md#getdirection)
- [getFontFamilly](DThemeDarkMenu.md#getfontfamilly)
- [getFontSize](DThemeDarkMenu.md#getfontsize)
- [getFontStyle](DThemeDarkMenu.md#getfontstyle)
- [getFontVariant](DThemeDarkMenu.md#getfontvariant)
- [getFontWeight](DThemeDarkMenu.md#getfontweight)
- [getHeight](DThemeDarkMenu.md#getheight)
- [getInteractive](DThemeDarkMenu.md#getinteractive)
- [getLineHeight](DThemeDarkMenu.md#getlineheight)
- [getMargin](DThemeDarkMenu.md#getmargin)
- [getMultiplicity](DThemeDarkMenu.md#getmultiplicity)
- [getOffsetX](DThemeDarkMenu.md#getoffsetx)
- [getOffsetY](DThemeDarkMenu.md#getoffsety)
- [getOutlineAlign](DThemeDarkMenu.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkMenu.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkMenu.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkMenu.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkMenu.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkMenu.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkMenu.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkMenu.md#getpaddingleft)
- [getPaddingRight](DThemeDarkMenu.md#getpaddingright)
- [getPaddingTop](DThemeDarkMenu.md#getpaddingtop)
- [getReverse](DThemeDarkMenu.md#getreverse)
- [getShadow](DThemeDarkMenu.md#getshadow)
- [getTitle](DThemeDarkMenu.md#gettitle)
- [getWeight](DThemeDarkMenu.md#getweight)
- [getWidth](DThemeDarkMenu.md#getwidth)
- [getX](DThemeDarkMenu.md#getx)
- [getY](DThemeDarkMenu.md#gety)
- [newShadow](DThemeDarkMenu.md#newshadow)
- [newShadowWeak](DThemeDarkMenu.md#newshadowweak)
- [newState](DThemeDarkMenu.md#newstate)

## Constructors

### constructor

• **new DThemeDarkMenu**()

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[constructor](DThemeDarkLayoutVertical.md#constructor)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getAlpha](DThemeDarkLayoutVertical.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundAlpha](DThemeDarkLayoutVertical.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundColor](DThemeDarkLayoutVertical.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L15)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBackgroundTexture](../interfaces/DThemeMenu.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundTexture](DThemeDarkLayoutVertical.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderAlign](DThemeDarkLayoutVertical.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderAlpha](DThemeDarkLayoutVertical.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderColor](DThemeDarkLayoutVertical.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L17)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderMask](DThemeDarkLayoutVertical.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getBorderTexture](../interfaces/DThemeMenu.md#getbordertexture)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderTexture](DThemeDarkLayoutVertical.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderWidth](DThemeDarkLayoutVertical.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getClearType](DThemeDarkLayoutVertical.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getColor](DThemeDarkLayoutVertical.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getCornerAdjust](../interfaces/DThemeMenu.md#getcorneradjust)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerAdjust](DThemeDarkLayoutVertical.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getCornerMask](../interfaces/DThemeMenu.md#getcornermask)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerMask](DThemeDarkLayoutVertical.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getCornerRadius](../interfaces/DThemeMenu.md#getcornerradius)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerRadius](DThemeDarkLayoutVertical.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCursor](DThemeDarkLayoutVertical.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getDirection](../interfaces/DThemeMenu.md#getdirection)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getDirection](DThemeDarkLayoutVertical.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-vertical.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-vertical.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontFamilly](../interfaces/DThemeMenu.md#getfontfamilly)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontFamilly](DThemeDarkLayoutVertical.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontSize](../interfaces/DThemeMenu.md#getfontsize)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontSize](DThemeDarkLayoutVertical.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontStyle](../interfaces/DThemeMenu.md#getfontstyle)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontStyle](DThemeDarkLayoutVertical.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontVariant](../interfaces/DThemeMenu.md#getfontvariant)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontVariant](DThemeDarkLayoutVertical.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getFontWeight](../interfaces/DThemeMenu.md#getfontweight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontWeight](DThemeDarkLayoutVertical.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getHeight](../interfaces/DThemeMenu.md#getheight)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getHeight](DThemeDarkLayoutVertical.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L39)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getInteractive](../interfaces/DThemeMenu.md#getinteractive)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getInteractive](DThemeDarkLayoutVertical.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L51)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getLineHeight](../interfaces/DThemeMenu.md#getlineheight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getLineHeight](DThemeDarkLayoutVertical.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getMargin](../interfaces/DThemeMenu.md#getmargin)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getMargin](DThemeDarkLayoutVertical.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L43)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getMultiplicity](../interfaces/DThemeMenu.md#getmultiplicity)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getMultiplicity](DThemeDarkLayoutVertical.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L42)

___

### getOffsetX

▸ **getOffsetX**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOffsetX](../interfaces/DThemeMenu.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L19)

___

### getOffsetY

▸ **getOffsetY**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getOffsetY](../interfaces/DThemeMenu.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L23)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineAlign](DThemeDarkLayoutVertical.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineAlpha](DThemeDarkLayoutVertical.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineColor](DThemeDarkLayoutVertical.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineMask](DThemeDarkLayoutVertical.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineOffset](DThemeDarkLayoutVertical.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineWidth](DThemeDarkLayoutVertical.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getPaddingBottom](../interfaces/DThemeMenu.md#getpaddingbottom)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingBottom](DThemeDarkLayoutVertical.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L31)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getPaddingLeft](../interfaces/DThemeMenu.md#getpaddingleft)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingLeft](DThemeDarkLayoutVertical.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getPaddingRight](../interfaces/DThemeMenu.md#getpaddingright)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingRight](DThemeDarkLayoutVertical.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getPaddingTop](../interfaces/DThemeMenu.md#getpaddingtop)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingTop](DThemeDarkLayoutVertical.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L27)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getReverse](../interfaces/DThemeMenu.md#getreverse)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getReverse](DThemeDarkLayoutVertical.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L46)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getShadow](DThemeDarkLayoutVertical.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L47)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getTitle](../interfaces/DThemeMenu.md#gettitle)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getTitle](DThemeDarkLayoutVertical.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getWeight](DThemeDarkLayoutVertical.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getWidth](../interfaces/DThemeMenu.md#getwidth)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getWidth](DThemeDarkLayoutVertical.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L35)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getX](../interfaces/DThemeMenu.md#getx)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getX](DThemeDarkLayoutVertical.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[getY](../interfaces/DThemeMenu.md#gety)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getY](DThemeDarkLayoutVertical.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[newShadow](../interfaces/DThemeMenu.md#newshadow)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newShadow](DThemeDarkLayoutVertical.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenu](../interfaces/DThemeMenu.md).[newShadowWeak](../interfaces/DThemeMenu.md#newshadowweak)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newShadowWeak](DThemeDarkLayoutVertical.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newState](DThemeDarkLayoutVertical.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu.ts#L55)
