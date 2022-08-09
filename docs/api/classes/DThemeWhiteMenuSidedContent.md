[Winter Cardinal UI - v0.205.1](../index.md) / DThemeWhiteMenuSidedContent

# Class: DThemeWhiteMenuSidedContent

## Hierarchy

- [`DThemeWhiteLayoutVertical`](DThemeWhiteLayoutVertical.md)

  ↳ **`DThemeWhiteMenuSidedContent`**

## Implements

- [`DThemeMenuSidedContent`](../interfaces/DThemeMenuSidedContent.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteMenuSidedContent.md#constructor)

### Methods

- [getAlpha](DThemeWhiteMenuSidedContent.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteMenuSidedContent.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteMenuSidedContent.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteMenuSidedContent.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteMenuSidedContent.md#getborderalign)
- [getBorderAlpha](DThemeWhiteMenuSidedContent.md#getborderalpha)
- [getBorderColor](DThemeWhiteMenuSidedContent.md#getbordercolor)
- [getBorderMask](DThemeWhiteMenuSidedContent.md#getbordermask)
- [getBorderTexture](DThemeWhiteMenuSidedContent.md#getbordertexture)
- [getBorderWidth](DThemeWhiteMenuSidedContent.md#getborderwidth)
- [getClearType](DThemeWhiteMenuSidedContent.md#getcleartype)
- [getColor](DThemeWhiteMenuSidedContent.md#getcolor)
- [getCornerAdjust](DThemeWhiteMenuSidedContent.md#getcorneradjust)
- [getCornerMask](DThemeWhiteMenuSidedContent.md#getcornermask)
- [getCornerRadius](DThemeWhiteMenuSidedContent.md#getcornerradius)
- [getCursor](DThemeWhiteMenuSidedContent.md#getcursor)
- [getDirection](DThemeWhiteMenuSidedContent.md#getdirection)
- [getFontFamilly](DThemeWhiteMenuSidedContent.md#getfontfamilly)
- [getFontSize](DThemeWhiteMenuSidedContent.md#getfontsize)
- [getFontStyle](DThemeWhiteMenuSidedContent.md#getfontstyle)
- [getFontVariant](DThemeWhiteMenuSidedContent.md#getfontvariant)
- [getFontWeight](DThemeWhiteMenuSidedContent.md#getfontweight)
- [getHeight](DThemeWhiteMenuSidedContent.md#getheight)
- [getInteractive](DThemeWhiteMenuSidedContent.md#getinteractive)
- [getLineHeight](DThemeWhiteMenuSidedContent.md#getlineheight)
- [getMargin](DThemeWhiteMenuSidedContent.md#getmargin)
- [getMultiplicity](DThemeWhiteMenuSidedContent.md#getmultiplicity)
- [getOutlineAlign](DThemeWhiteMenuSidedContent.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteMenuSidedContent.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteMenuSidedContent.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteMenuSidedContent.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteMenuSidedContent.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteMenuSidedContent.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteMenuSidedContent.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteMenuSidedContent.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteMenuSidedContent.md#getpaddingright)
- [getPaddingTop](DThemeWhiteMenuSidedContent.md#getpaddingtop)
- [getReverse](DThemeWhiteMenuSidedContent.md#getreverse)
- [getShadow](DThemeWhiteMenuSidedContent.md#getshadow)
- [getTitle](DThemeWhiteMenuSidedContent.md#gettitle)
- [getWeight](DThemeWhiteMenuSidedContent.md#getweight)
- [getWidth](DThemeWhiteMenuSidedContent.md#getwidth)
- [getX](DThemeWhiteMenuSidedContent.md#getx)
- [getY](DThemeWhiteMenuSidedContent.md#gety)
- [newShadow](DThemeWhiteMenuSidedContent.md#newshadow)
- [newShadowWeak](DThemeWhiteMenuSidedContent.md#newshadowweak)
- [newState](DThemeWhiteMenuSidedContent.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteMenuSidedContent**()

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getAlpha](../interfaces/DThemeMenuSidedContent.md#getalpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getAlpha](DThemeWhiteLayoutVertical.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBackgroundAlpha](../interfaces/DThemeMenuSidedContent.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundAlpha](DThemeWhiteLayoutVertical.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBackgroundColor](../interfaces/DThemeMenuSidedContent.md#getbackgroundcolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundColor](DThemeWhiteLayoutVertical.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBackgroundTexture](../interfaces/DThemeMenuSidedContent.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundTexture](DThemeWhiteLayoutVertical.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBorderAlign](../interfaces/DThemeMenuSidedContent.md#getborderalign)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderAlign](DThemeWhiteLayoutVertical.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L94)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBorderAlpha](../interfaces/DThemeMenuSidedContent.md#getborderalpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderAlpha](DThemeWhiteLayoutVertical.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBorderColor](../interfaces/DThemeMenuSidedContent.md#getbordercolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderColor](DThemeWhiteLayoutVertical.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L17)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBorderMask](../interfaces/DThemeMenuSidedContent.md#getbordermask)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderMask](DThemeWhiteLayoutVertical.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBorderTexture](../interfaces/DThemeMenuSidedContent.md#getbordertexture)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderTexture](DThemeWhiteLayoutVertical.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getBorderWidth](../interfaces/DThemeMenuSidedContent.md#getborderwidth)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderWidth](DThemeWhiteLayoutVertical.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getClearType](../interfaces/DThemeMenuSidedContent.md#getcleartype)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getClearType](DThemeWhiteLayoutVertical.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getColor](../interfaces/DThemeMenuSidedContent.md#getcolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getColor](DThemeWhiteLayoutVertical.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getCornerAdjust](../interfaces/DThemeMenuSidedContent.md#getcorneradjust)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerAdjust](DThemeWhiteLayoutVertical.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getCornerMask](../interfaces/DThemeMenuSidedContent.md#getcornermask)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerMask](DThemeWhiteLayoutVertical.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getCornerRadius](../interfaces/DThemeMenuSidedContent.md#getcornerradius)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerRadius](DThemeWhiteLayoutVertical.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getCursor](../interfaces/DThemeMenuSidedContent.md#getcursor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCursor](DThemeWhiteLayoutVertical.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getDirection](../interfaces/DThemeMenuSidedContent.md#getdirection)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getDirection](DThemeWhiteLayoutVertical.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-vertical.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-vertical.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getFontFamilly](../interfaces/DThemeMenuSidedContent.md#getfontfamilly)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontFamilly](DThemeWhiteLayoutVertical.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getFontSize](../interfaces/DThemeMenuSidedContent.md#getfontsize)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontSize](DThemeWhiteLayoutVertical.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getFontStyle](../interfaces/DThemeMenuSidedContent.md#getfontstyle)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontStyle](DThemeWhiteLayoutVertical.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getFontVariant](../interfaces/DThemeMenuSidedContent.md#getfontvariant)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontVariant](DThemeWhiteLayoutVertical.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getFontWeight](../interfaces/DThemeMenuSidedContent.md#getfontweight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontWeight](DThemeWhiteLayoutVertical.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getHeight](../interfaces/DThemeMenuSidedContent.md#getheight)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getHeight](DThemeWhiteLayoutVertical.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts#L19)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getInteractive](../interfaces/DThemeMenuSidedContent.md#getinteractive)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getInteractive](DThemeWhiteLayoutVertical.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getLineHeight](../interfaces/DThemeMenuSidedContent.md#getlineheight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getLineHeight](DThemeWhiteLayoutVertical.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getMargin](../interfaces/DThemeMenuSidedContent.md#getmargin)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getMargin](DThemeWhiteLayoutVertical.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts#L31)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getMultiplicity](../interfaces/DThemeMenuSidedContent.md#getmultiplicity)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getMultiplicity](DThemeWhiteLayoutVertical.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L42)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getOutlineAlign](../interfaces/DThemeMenuSidedContent.md#getoutlinealign)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineAlign](DThemeWhiteLayoutVertical.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L149)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getOutlineAlpha](../interfaces/DThemeMenuSidedContent.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineAlpha](DThemeWhiteLayoutVertical.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getOutlineColor](../interfaces/DThemeMenuSidedContent.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineColor](DThemeWhiteLayoutVertical.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getOutlineMask](../interfaces/DThemeMenuSidedContent.md#getoutlinemask)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineMask](DThemeWhiteLayoutVertical.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getOutlineOffset](../interfaces/DThemeMenuSidedContent.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineOffset](DThemeWhiteLayoutVertical.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getOutlineWidth](../interfaces/DThemeMenuSidedContent.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineWidth](DThemeWhiteLayoutVertical.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getPaddingBottom](../interfaces/DThemeMenuSidedContent.md#getpaddingbottom)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingBottom](DThemeWhiteLayoutVertical.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts#L27)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getPaddingLeft](../interfaces/DThemeMenuSidedContent.md#getpaddingleft)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingLeft](DThemeWhiteLayoutVertical.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getPaddingRight](../interfaces/DThemeMenuSidedContent.md#getpaddingright)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingRight](DThemeWhiteLayoutVertical.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getPaddingTop](../interfaces/DThemeMenuSidedContent.md#getpaddingtop)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingTop](DThemeWhiteLayoutVertical.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts#L23)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getReverse](../interfaces/DThemeMenuSidedContent.md#getreverse)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getReverse](DThemeWhiteLayoutVertical.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getShadow](../interfaces/DThemeMenuSidedContent.md#getshadow)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getShadow](DThemeWhiteLayoutVertical.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getTitle](../interfaces/DThemeMenuSidedContent.md#gettitle)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getTitle](DThemeWhiteLayoutVertical.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getWeight](../interfaces/DThemeMenuSidedContent.md#getweight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getWeight](DThemeWhiteLayoutVertical.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getWidth](../interfaces/DThemeMenuSidedContent.md#getwidth)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getWidth](DThemeWhiteLayoutVertical.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts#L15)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getX](../interfaces/DThemeMenuSidedContent.md#getx)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getX](DThemeWhiteLayoutVertical.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[getY](../interfaces/DThemeMenuSidedContent.md#gety)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getY](DThemeWhiteLayoutVertical.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[newShadow](../interfaces/DThemeMenuSidedContent.md#newshadow)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newShadow](DThemeWhiteLayoutVertical.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[newShadowWeak](../interfaces/DThemeMenuSidedContent.md#newshadowweak)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newShadowWeak](DThemeWhiteLayoutVertical.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemeMenuSidedContent](../interfaces/DThemeMenuSidedContent.md).[newState](../interfaces/DThemeMenuSidedContent.md#newstate)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newState](DThemeWhiteLayoutVertical.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-menu-sided-content.ts#L35)
