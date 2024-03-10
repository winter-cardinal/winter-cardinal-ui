[Winter Cardinal UI - v0.414.0](../index.md) / DThemeWhiteTableHeader

# Class: DThemeWhiteTableHeader

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhiteTableRow`](DThemeWhiteTableRow.md)

  ↳ **`DThemeWhiteTableHeader`**

  ↳↳ [`DThemeWhiteTableCategory`](DThemeWhiteTableCategory.md)

## Implements

- [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteTableHeader.md#constructor)

### Properties

- [BACKGROUND\_COLOR](DThemeWhiteTableHeader.md#background_color)
- [BORDER\_COLOR](DThemeWhiteTableHeader.md#border_color)

### Methods

- [getAlpha](DThemeWhiteTableHeader.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteTableHeader.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteTableHeader.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteTableHeader.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteTableHeader.md#getborderalign)
- [getBorderAlpha](DThemeWhiteTableHeader.md#getborderalpha)
- [getBorderColor](DThemeWhiteTableHeader.md#getbordercolor)
- [getBorderMask](DThemeWhiteTableHeader.md#getbordermask)
- [getBorderTexture](DThemeWhiteTableHeader.md#getbordertexture)
- [getBorderWidth](DThemeWhiteTableHeader.md#getborderwidth)
- [getClearType](DThemeWhiteTableHeader.md#getcleartype)
- [getColor](DThemeWhiteTableHeader.md#getcolor)
- [getCornerAdjust](DThemeWhiteTableHeader.md#getcorneradjust)
- [getCornerMask](DThemeWhiteTableHeader.md#getcornermask)
- [getCornerRadius](DThemeWhiteTableHeader.md#getcornerradius)
- [getCursor](DThemeWhiteTableHeader.md#getcursor)
- [getDirection](DThemeWhiteTableHeader.md#getdirection)
- [getFontFamilly](DThemeWhiteTableHeader.md#getfontfamilly)
- [getFontSize](DThemeWhiteTableHeader.md#getfontsize)
- [getFontStyle](DThemeWhiteTableHeader.md#getfontstyle)
- [getFontVariant](DThemeWhiteTableHeader.md#getfontvariant)
- [getFontWeight](DThemeWhiteTableHeader.md#getfontweight)
- [getHeight](DThemeWhiteTableHeader.md#getheight)
- [getInteractive](DThemeWhiteTableHeader.md#getinteractive)
- [getLineHeight](DThemeWhiteTableHeader.md#getlineheight)
- [getMargin](DThemeWhiteTableHeader.md#getmargin)
- [getMultiplicity](DThemeWhiteTableHeader.md#getmultiplicity)
- [getOutlineAlign](DThemeWhiteTableHeader.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteTableHeader.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteTableHeader.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteTableHeader.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteTableHeader.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteTableHeader.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteTableHeader.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteTableHeader.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteTableHeader.md#getpaddingright)
- [getPaddingTop](DThemeWhiteTableHeader.md#getpaddingtop)
- [getReverse](DThemeWhiteTableHeader.md#getreverse)
- [getShadow](DThemeWhiteTableHeader.md#getshadow)
- [getTitle](DThemeWhiteTableHeader.md#gettitle)
- [getWeight](DThemeWhiteTableHeader.md#getweight)
- [getWidth](DThemeWhiteTableHeader.md#getwidth)
- [getX](DThemeWhiteTableHeader.md#getx)
- [getY](DThemeWhiteTableHeader.md#gety)
- [newShadow](DThemeWhiteTableHeader.md#newshadow)
- [newShadowWeak](DThemeWhiteTableHeader.md#newshadowweak)
- [newState](DThemeWhiteTableHeader.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteTableHeader**(): [`DThemeWhiteTableHeader`](DThemeWhiteTableHeader.md)

#### Returns

[`DThemeWhiteTableHeader`](DThemeWhiteTableHeader.md)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[constructor](DThemeWhiteTableRow.md#constructor)

## Properties

### BACKGROUND\_COLOR

• `Protected` `Readonly` **BACKGROUND\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L16)

___

### BORDER\_COLOR

• `Protected` `Readonly` **BORDER\_COLOR**: `number`

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getAlpha](../interfaces/DThemeTableHeader.md#getalpha)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getAlpha](DThemeWhiteTableRow.md#getalpha)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBackgroundAlpha](../interfaces/DThemeTableHeader.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBackgroundAlpha](DThemeWhiteTableRow.md#getbackgroundalpha)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBackgroundColor](../interfaces/DThemeTableHeader.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBackgroundColor](DThemeWhiteTableRow.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L25)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBackgroundTexture](../interfaces/DThemeTableHeader.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBackgroundTexture](DThemeWhiteTableRow.md#getbackgroundtexture)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBorderAlign](../interfaces/DThemeTableHeader.md#getborderalign)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBorderAlign](DThemeWhiteTableRow.md#getborderalign)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBorderAlpha](../interfaces/DThemeTableHeader.md#getborderalpha)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBorderAlpha](DThemeWhiteTableRow.md#getborderalpha)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBorderColor](../interfaces/DThemeTableHeader.md#getbordercolor)

#### Overrides

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBorderColor](DThemeWhiteTableRow.md#getbordercolor)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBorderMask](../interfaces/DThemeTableHeader.md#getbordermask)

#### Overrides

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBorderMask](DThemeWhiteTableRow.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L37)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBorderTexture](../interfaces/DThemeTableHeader.md#getbordertexture)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBorderTexture](DThemeWhiteTableRow.md#getbordertexture)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBorderWidth](../interfaces/DThemeTableHeader.md#getborderwidth)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getBorderWidth](DThemeWhiteTableRow.md#getborderwidth)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getClearType](../interfaces/DThemeTableHeader.md#getcleartype)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getClearType](DThemeWhiteTableRow.md#getcleartype)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getColor](../interfaces/DThemeTableHeader.md#getcolor)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getColor](DThemeWhiteTableRow.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getCornerAdjust](../interfaces/DThemeTableHeader.md#getcorneradjust)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getCornerAdjust](DThemeWhiteTableRow.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getCornerMask](../interfaces/DThemeTableHeader.md#getcornermask)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getCornerMask](DThemeWhiteTableRow.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts#L17)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getCornerRadius](../interfaces/DThemeTableHeader.md#getcornerradius)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getCornerRadius](DThemeWhiteTableRow.md#getcornerradius)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getCursor](../interfaces/DThemeTableHeader.md#getcursor)

#### Overrides

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getCursor](DThemeWhiteTableRow.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L49)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getDirection](../interfaces/DThemeTableHeader.md#getdirection)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getDirection](DThemeWhiteTableRow.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-horizontal.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-horizontal.ts#L15)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontFamilly](../interfaces/DThemeTableHeader.md#getfontfamilly)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getFontFamilly](DThemeWhiteTableRow.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontSize](../interfaces/DThemeTableHeader.md#getfontsize)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getFontSize](DThemeWhiteTableRow.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontStyle](../interfaces/DThemeTableHeader.md#getfontstyle)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getFontStyle](DThemeWhiteTableRow.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontVariant](../interfaces/DThemeTableHeader.md#getfontvariant)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getFontVariant](DThemeWhiteTableRow.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontWeight](../interfaces/DThemeTableHeader.md#getfontweight)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getFontWeight](DThemeWhiteTableRow.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getHeight](../interfaces/DThemeTableHeader.md#getheight)

#### Overrides

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getHeight](DThemeWhiteTableRow.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L45)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getInteractive](../interfaces/DThemeTableHeader.md#getinteractive)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getInteractive](DThemeWhiteTableRow.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getLineHeight](../interfaces/DThemeTableHeader.md#getlineheight)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getLineHeight](DThemeWhiteTableRow.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getMargin](../interfaces/DThemeTableHeader.md#getmargin)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getMargin](DThemeWhiteTableRow.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts#L21)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getMultiplicity](../interfaces/DThemeTableHeader.md#getmultiplicity)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getMultiplicity](DThemeWhiteTableRow.md#getmultiplicity)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getOutlineAlign](../interfaces/DThemeTableHeader.md#getoutlinealign)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getOutlineAlign](DThemeWhiteTableRow.md#getoutlinealign)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getOutlineAlpha](../interfaces/DThemeTableHeader.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getOutlineAlpha](DThemeWhiteTableRow.md#getoutlinealpha)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getOutlineColor](../interfaces/DThemeTableHeader.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getOutlineColor](DThemeWhiteTableRow.md#getoutlinecolor)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getOutlineMask](../interfaces/DThemeTableHeader.md#getoutlinemask)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getOutlineMask](DThemeWhiteTableRow.md#getoutlinemask)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getOutlineOffset](../interfaces/DThemeTableHeader.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getOutlineOffset](DThemeWhiteTableRow.md#getoutlineoffset)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getOutlineWidth](../interfaces/DThemeTableHeader.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getOutlineWidth](DThemeWhiteTableRow.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getPaddingBottom](../interfaces/DThemeTableHeader.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getPaddingBottom](DThemeWhiteTableRow.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getPaddingLeft](../interfaces/DThemeTableHeader.md#getpaddingleft)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getPaddingLeft](DThemeWhiteTableRow.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getPaddingRight](../interfaces/DThemeTableHeader.md#getpaddingright)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getPaddingRight](DThemeWhiteTableRow.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getPaddingTop](../interfaces/DThemeTableHeader.md#getpaddingtop)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getPaddingTop](DThemeWhiteTableRow.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getReverse](../interfaces/DThemeTableHeader.md#getreverse)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getReverse](DThemeWhiteTableRow.md#getreverse)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getShadow](../interfaces/DThemeTableHeader.md#getshadow)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getShadow](DThemeWhiteTableRow.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getTitle](../interfaces/DThemeTableHeader.md#gettitle)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getTitle](DThemeWhiteTableRow.md#gettitle)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getWeight](../interfaces/DThemeTableHeader.md#getweight)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getWeight](DThemeWhiteTableRow.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getWidth](../interfaces/DThemeTableHeader.md#getwidth)

#### Overrides

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getWidth](DThemeWhiteTableRow.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-header.ts#L41)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getX](../interfaces/DThemeTableHeader.md#getx)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getX](DThemeWhiteTableRow.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getY](../interfaces/DThemeTableHeader.md#gety)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[getY](DThemeWhiteTableRow.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[newShadow](../interfaces/DThemeTableHeader.md#newshadow)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[newShadow](DThemeWhiteTableRow.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[newShadowWeak](../interfaces/DThemeTableHeader.md#newshadowweak)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[newShadowWeak](DThemeWhiteTableRow.md#newshadowweak)

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

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[newState](../interfaces/DThemeTableHeader.md#newstate)

#### Inherited from

[DThemeWhiteTableRow](DThemeWhiteTableRow.md).[newState](DThemeWhiteTableRow.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-row.ts#L29)
