[Winter Cardinal UI - v0.414.0](../index.md) / DThemeWhiteTableCategory

# Class: DThemeWhiteTableCategory

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhiteTableHeader`](DThemeWhiteTableHeader.md)

  ↳ **`DThemeWhiteTableCategory`**

## Implements

- [`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteTableCategory.md#constructor)

### Properties

- [BACKGROUND\_COLOR](DThemeWhiteTableCategory.md#background_color)
- [BORDER\_COLOR](DThemeWhiteTableCategory.md#border_color)

### Methods

- [getAlpha](DThemeWhiteTableCategory.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteTableCategory.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteTableCategory.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteTableCategory.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteTableCategory.md#getborderalign)
- [getBorderAlpha](DThemeWhiteTableCategory.md#getborderalpha)
- [getBorderColor](DThemeWhiteTableCategory.md#getbordercolor)
- [getBorderMask](DThemeWhiteTableCategory.md#getbordermask)
- [getBorderTexture](DThemeWhiteTableCategory.md#getbordertexture)
- [getBorderWidth](DThemeWhiteTableCategory.md#getborderwidth)
- [getClearType](DThemeWhiteTableCategory.md#getcleartype)
- [getColor](DThemeWhiteTableCategory.md#getcolor)
- [getCornerAdjust](DThemeWhiteTableCategory.md#getcorneradjust)
- [getCornerMask](DThemeWhiteTableCategory.md#getcornermask)
- [getCornerRadius](DThemeWhiteTableCategory.md#getcornerradius)
- [getCursor](DThemeWhiteTableCategory.md#getcursor)
- [getDirection](DThemeWhiteTableCategory.md#getdirection)
- [getFontFamilly](DThemeWhiteTableCategory.md#getfontfamilly)
- [getFontSize](DThemeWhiteTableCategory.md#getfontsize)
- [getFontStyle](DThemeWhiteTableCategory.md#getfontstyle)
- [getFontVariant](DThemeWhiteTableCategory.md#getfontvariant)
- [getFontWeight](DThemeWhiteTableCategory.md#getfontweight)
- [getHeight](DThemeWhiteTableCategory.md#getheight)
- [getInteractive](DThemeWhiteTableCategory.md#getinteractive)
- [getLineHeight](DThemeWhiteTableCategory.md#getlineheight)
- [getMargin](DThemeWhiteTableCategory.md#getmargin)
- [getMultiplicity](DThemeWhiteTableCategory.md#getmultiplicity)
- [getOutlineAlign](DThemeWhiteTableCategory.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteTableCategory.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteTableCategory.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteTableCategory.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteTableCategory.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteTableCategory.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteTableCategory.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteTableCategory.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteTableCategory.md#getpaddingright)
- [getPaddingTop](DThemeWhiteTableCategory.md#getpaddingtop)
- [getReverse](DThemeWhiteTableCategory.md#getreverse)
- [getShadow](DThemeWhiteTableCategory.md#getshadow)
- [getTitle](DThemeWhiteTableCategory.md#gettitle)
- [getWeight](DThemeWhiteTableCategory.md#getweight)
- [getWidth](DThemeWhiteTableCategory.md#getwidth)
- [getX](DThemeWhiteTableCategory.md#getx)
- [getY](DThemeWhiteTableCategory.md#gety)
- [newShadow](DThemeWhiteTableCategory.md#newshadow)
- [newShadowWeak](DThemeWhiteTableCategory.md#newshadowweak)
- [newState](DThemeWhiteTableCategory.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteTableCategory**(): [`DThemeWhiteTableCategory`](DThemeWhiteTableCategory.md)

#### Returns

[`DThemeWhiteTableCategory`](DThemeWhiteTableCategory.md)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[constructor](DThemeWhiteTableHeader.md#constructor)

## Properties

### BACKGROUND\_COLOR

• `Protected` `Readonly` **BACKGROUND\_COLOR**: `number`

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[BACKGROUND_COLOR](DThemeWhiteTableHeader.md#background_color)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L16)

___

### BORDER\_COLOR

• `Protected` `Readonly` **BORDER\_COLOR**: `number`

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[BORDER_COLOR](DThemeWhiteTableHeader.md#border_color)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L20)

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

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getAlpha](../interfaces/DThemeTableCategory.md#getalpha)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getAlpha](DThemeWhiteTableHeader.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBackgroundAlpha](../interfaces/DThemeTableCategory.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBackgroundAlpha](DThemeWhiteTableHeader.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L84)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBackgroundColor](../interfaces/DThemeTableCategory.md#getbackgroundcolor)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBackgroundColor](DThemeWhiteTableHeader.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L25)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBackgroundTexture](../interfaces/DThemeTableCategory.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBackgroundTexture](DThemeWhiteTableHeader.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L88)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBorderAlign](../interfaces/DThemeTableCategory.md#getborderalign)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBorderAlign](DThemeWhiteTableHeader.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L104)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBorderAlpha](../interfaces/DThemeTableCategory.md#getborderalpha)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBorderAlpha](DThemeWhiteTableHeader.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L96)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBorderColor](../interfaces/DThemeTableCategory.md#getbordercolor)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBorderColor](DThemeWhiteTableHeader.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L33)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBorderMask](../interfaces/DThemeTableCategory.md#getbordermask)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBorderMask](DThemeWhiteTableHeader.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L37)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBorderTexture](../interfaces/DThemeTableCategory.md#getbordertexture)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBorderTexture](DThemeWhiteTableHeader.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L112)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getBorderWidth](../interfaces/DThemeTableCategory.md#getborderwidth)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getBorderWidth](DThemeWhiteTableHeader.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getClearType](../interfaces/DThemeTableCategory.md#getcleartype)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getClearType](DThemeWhiteTableHeader.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L167)

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

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getColor](../interfaces/DThemeTableCategory.md#getcolor)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getColor](DThemeWhiteTableHeader.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getCornerAdjust](../interfaces/DThemeTableCategory.md#getcorneradjust)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getCornerAdjust](DThemeWhiteTableHeader.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getCornerMask](../interfaces/DThemeTableCategory.md#getcornermask)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getCornerMask](DThemeWhiteTableHeader.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts#L17)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getCornerRadius](../interfaces/DThemeTableCategory.md#getcornerradius)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getCornerRadius](DThemeWhiteTableHeader.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L132)

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

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getCursor](../interfaces/DThemeTableCategory.md#getcursor)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getCursor](DThemeWhiteTableHeader.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L49)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getDirection](../interfaces/DThemeTableCategory.md#getdirection)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getDirection](DThemeWhiteTableHeader.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-horizontal.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-horizontal.ts#L15)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getFontFamilly](../interfaces/DThemeTableCategory.md#getfontfamilly)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getFontFamilly](DThemeWhiteTableHeader.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getFontSize](../interfaces/DThemeTableCategory.md#getfontsize)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getFontSize](DThemeWhiteTableHeader.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getFontStyle](../interfaces/DThemeTableCategory.md#getfontstyle)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getFontStyle](DThemeWhiteTableHeader.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getFontVariant](../interfaces/DThemeTableCategory.md#getfontvariant)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getFontVariant](DThemeWhiteTableHeader.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getFontWeight](../interfaces/DThemeTableCategory.md#getfontweight)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getFontWeight](DThemeWhiteTableHeader.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getHeight](../interfaces/DThemeTableCategory.md#getheight)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getHeight](DThemeWhiteTableHeader.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L45)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getInteractive](../interfaces/DThemeTableCategory.md#getinteractive)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getInteractive](DThemeWhiteTableHeader.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getLineHeight](../interfaces/DThemeTableCategory.md#getlineheight)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getLineHeight](DThemeWhiteTableHeader.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getMargin](../interfaces/DThemeTableCategory.md#getmargin)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getMargin](DThemeWhiteTableHeader.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts#L21)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getMultiplicity](../interfaces/DThemeTableCategory.md#getmultiplicity)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getMultiplicity](DThemeWhiteTableHeader.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L42)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getOutlineAlign](../interfaces/DThemeTableCategory.md#getoutlinealign)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getOutlineAlign](DThemeWhiteTableHeader.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L159)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getOutlineAlpha](../interfaces/DThemeTableCategory.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getOutlineAlpha](DThemeWhiteTableHeader.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L144)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getOutlineColor](../interfaces/DThemeTableCategory.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getOutlineColor](DThemeWhiteTableHeader.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L140)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getOutlineMask](../interfaces/DThemeTableCategory.md#getoutlinemask)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getOutlineMask](DThemeWhiteTableHeader.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L163)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getOutlineOffset](../interfaces/DThemeTableCategory.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getOutlineOffset](DThemeWhiteTableHeader.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L155)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getOutlineWidth](../interfaces/DThemeTableCategory.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getOutlineWidth](DThemeWhiteTableHeader.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getPaddingBottom](../interfaces/DThemeTableCategory.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getPaddingBottom](DThemeWhiteTableHeader.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getPaddingLeft](../interfaces/DThemeTableCategory.md#getpaddingleft)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getPaddingLeft](DThemeWhiteTableHeader.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getPaddingRight](../interfaces/DThemeTableCategory.md#getpaddingright)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getPaddingRight](DThemeWhiteTableHeader.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getPaddingTop](../interfaces/DThemeTableCategory.md#getpaddingtop)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getPaddingTop](DThemeWhiteTableHeader.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getReverse](../interfaces/DThemeTableCategory.md#getreverse)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getReverse](DThemeWhiteTableHeader.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getShadow](../interfaces/DThemeTableCategory.md#getshadow)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getShadow](DThemeWhiteTableHeader.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getTitle](../interfaces/DThemeTableCategory.md#gettitle)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getTitle](DThemeWhiteTableHeader.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getWeight](../interfaces/DThemeTableCategory.md#getweight)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getWeight](DThemeWhiteTableHeader.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getWidth](../interfaces/DThemeTableCategory.md#getwidth)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getWidth](DThemeWhiteTableHeader.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L41)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getX](../interfaces/DThemeTableCategory.md#getx)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getX](DThemeWhiteTableHeader.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[getY](../interfaces/DThemeTableCategory.md#gety)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[getY](DThemeWhiteTableHeader.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[newShadow](../interfaces/DThemeTableCategory.md#newshadow)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[newShadow](DThemeWhiteTableHeader.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[newShadowWeak](../interfaces/DThemeTableCategory.md#newshadowweak)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[newShadowWeak](DThemeWhiteTableHeader.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L195)

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

[DThemeTableCategory](../interfaces/DThemeTableCategory.md).[newState](../interfaces/DThemeTableCategory.md#newstate)

#### Inherited from

[DThemeWhiteTableHeader](DThemeWhiteTableHeader.md).[newState](DThemeWhiteTableHeader.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts#L29)
