[Winter Cardinal UI - v0.407.0](../index.md) / DThemeDarkTableHeader

# Class: DThemeDarkTableHeader

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkTableRow`](DThemeDarkTableRow.md)

  ↳ **`DThemeDarkTableHeader`**

  ↳↳ [`DThemeDarkTableCategory`](DThemeDarkTableCategory.md)

## Implements

- [`DThemeTableHeader`](../interfaces/DThemeTableHeader.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkTableHeader.md#constructor)

### Properties

- [BACKGROUND\_COLOR](DThemeDarkTableHeader.md#background_color)
- [BORDER\_COLOR](DThemeDarkTableHeader.md#border_color)

### Methods

- [getAlpha](DThemeDarkTableHeader.md#getalpha)
- [getBackgroundAlpha](DThemeDarkTableHeader.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkTableHeader.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkTableHeader.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkTableHeader.md#getborderalign)
- [getBorderAlpha](DThemeDarkTableHeader.md#getborderalpha)
- [getBorderColor](DThemeDarkTableHeader.md#getbordercolor)
- [getBorderMask](DThemeDarkTableHeader.md#getbordermask)
- [getBorderTexture](DThemeDarkTableHeader.md#getbordertexture)
- [getBorderWidth](DThemeDarkTableHeader.md#getborderwidth)
- [getClearType](DThemeDarkTableHeader.md#getcleartype)
- [getColor](DThemeDarkTableHeader.md#getcolor)
- [getCornerAdjust](DThemeDarkTableHeader.md#getcorneradjust)
- [getCornerMask](DThemeDarkTableHeader.md#getcornermask)
- [getCornerRadius](DThemeDarkTableHeader.md#getcornerradius)
- [getCursor](DThemeDarkTableHeader.md#getcursor)
- [getDirection](DThemeDarkTableHeader.md#getdirection)
- [getFontFamilly](DThemeDarkTableHeader.md#getfontfamilly)
- [getFontSize](DThemeDarkTableHeader.md#getfontsize)
- [getFontStyle](DThemeDarkTableHeader.md#getfontstyle)
- [getFontVariant](DThemeDarkTableHeader.md#getfontvariant)
- [getFontWeight](DThemeDarkTableHeader.md#getfontweight)
- [getHeight](DThemeDarkTableHeader.md#getheight)
- [getInteractive](DThemeDarkTableHeader.md#getinteractive)
- [getLineHeight](DThemeDarkTableHeader.md#getlineheight)
- [getMargin](DThemeDarkTableHeader.md#getmargin)
- [getMultiplicity](DThemeDarkTableHeader.md#getmultiplicity)
- [getOutlineAlign](DThemeDarkTableHeader.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkTableHeader.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkTableHeader.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkTableHeader.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkTableHeader.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkTableHeader.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkTableHeader.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkTableHeader.md#getpaddingleft)
- [getPaddingRight](DThemeDarkTableHeader.md#getpaddingright)
- [getPaddingTop](DThemeDarkTableHeader.md#getpaddingtop)
- [getReverse](DThemeDarkTableHeader.md#getreverse)
- [getShadow](DThemeDarkTableHeader.md#getshadow)
- [getTitle](DThemeDarkTableHeader.md#gettitle)
- [getWeight](DThemeDarkTableHeader.md#getweight)
- [getWidth](DThemeDarkTableHeader.md#getwidth)
- [getX](DThemeDarkTableHeader.md#getx)
- [getY](DThemeDarkTableHeader.md#gety)
- [newShadow](DThemeDarkTableHeader.md#newshadow)
- [newShadowWeak](DThemeDarkTableHeader.md#newshadowweak)
- [newState](DThemeDarkTableHeader.md#newstate)

## Constructors

### constructor

• **new DThemeDarkTableHeader**(): [`DThemeDarkTableHeader`](DThemeDarkTableHeader.md)

#### Returns

[`DThemeDarkTableHeader`](DThemeDarkTableHeader.md)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[constructor](DThemeDarkTableRow.md#constructor)

## Properties

### BACKGROUND\_COLOR

• `Protected` `Readonly` **BACKGROUND\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts#L15)

___

### BORDER\_COLOR

• `Protected` `Readonly` **BORDER\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts#L19)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getAlpha](DThemeDarkTableRow.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBackgroundAlpha](DThemeDarkTableRow.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L84)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBackgroundColor](DThemeDarkTableRow.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts#L24)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBackgroundTexture](../interfaces/DThemeTableHeader.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBackgroundTexture](DThemeDarkTableRow.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L88)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderAlign](DThemeDarkTableRow.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L104)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderAlpha](DThemeDarkTableRow.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L96)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderColor](DThemeDarkTableRow.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts#L32)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderMask](DThemeDarkTableRow.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts#L36)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getBorderTexture](../interfaces/DThemeTableHeader.md#getbordertexture)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderTexture](DThemeDarkTableRow.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L112)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderWidth](DThemeDarkTableRow.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getClearType](DThemeDarkTableRow.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L167)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getColor](DThemeDarkTableRow.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getCornerAdjust](../interfaces/DThemeTableHeader.md#getcorneradjust)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getCornerAdjust](DThemeDarkTableRow.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getCornerMask](../interfaces/DThemeTableHeader.md#getcornermask)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getCornerMask](DThemeDarkTableRow.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L17)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getCornerRadius](../interfaces/DThemeTableHeader.md#getcornerradius)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getCornerRadius](DThemeDarkTableRow.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L132)

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

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getCursor](DThemeDarkTableRow.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getDirection](../interfaces/DThemeTableHeader.md#getdirection)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getDirection](DThemeDarkTableRow.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontFamilly](../interfaces/DThemeTableHeader.md#getfontfamilly)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontFamilly](DThemeDarkTableRow.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontSize](../interfaces/DThemeTableHeader.md#getfontsize)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontSize](DThemeDarkTableRow.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontStyle](../interfaces/DThemeTableHeader.md#getfontstyle)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontStyle](DThemeDarkTableRow.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontVariant](../interfaces/DThemeTableHeader.md#getfontvariant)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontVariant](DThemeDarkTableRow.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getFontWeight](../interfaces/DThemeTableHeader.md#getfontweight)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontWeight](DThemeDarkTableRow.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getHeight](../interfaces/DThemeTableHeader.md#getheight)

#### Overrides

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getHeight](DThemeDarkTableRow.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts#L44)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getInteractive](../interfaces/DThemeTableHeader.md#getinteractive)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getInteractive](DThemeDarkTableRow.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getLineHeight](../interfaces/DThemeTableHeader.md#getlineheight)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getLineHeight](DThemeDarkTableRow.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getMargin](../interfaces/DThemeTableHeader.md#getmargin)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getMargin](DThemeDarkTableRow.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L21)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getMultiplicity](../interfaces/DThemeTableHeader.md#getmultiplicity)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getMultiplicity](DThemeDarkTableRow.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L42)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineAlign](DThemeDarkTableRow.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L159)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineAlpha](DThemeDarkTableRow.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L144)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineColor](DThemeDarkTableRow.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L140)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineMask](DThemeDarkTableRow.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L163)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineOffset](DThemeDarkTableRow.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L155)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineWidth](DThemeDarkTableRow.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getPaddingBottom](../interfaces/DThemeTableHeader.md#getpaddingbottom)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getPaddingBottom](DThemeDarkTableRow.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getPaddingLeft](../interfaces/DThemeTableHeader.md#getpaddingleft)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getPaddingLeft](DThemeDarkTableRow.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getPaddingRight](../interfaces/DThemeTableHeader.md#getpaddingright)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getPaddingRight](DThemeDarkTableRow.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getPaddingTop](../interfaces/DThemeTableHeader.md#getpaddingtop)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getPaddingTop](DThemeDarkTableRow.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L124)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getReverse](../interfaces/DThemeTableHeader.md#getreverse)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getReverse](DThemeDarkTableRow.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L46)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getShadow](DThemeDarkTableRow.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getTitle](../interfaces/DThemeTableHeader.md#gettitle)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getTitle](DThemeDarkTableRow.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L183)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getWeight](DThemeDarkTableRow.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getWidth](../interfaces/DThemeTableHeader.md#getwidth)

#### Overrides

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getWidth](DThemeDarkTableRow.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-header.ts#L40)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getX](../interfaces/DThemeTableHeader.md#getx)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getX](DThemeDarkTableRow.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[getY](../interfaces/DThemeTableHeader.md#gety)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getY](DThemeDarkTableRow.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[newShadow](../interfaces/DThemeTableHeader.md#newshadow)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[newShadow](DThemeDarkTableRow.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableHeader](../interfaces/DThemeTableHeader.md).[newShadowWeak](../interfaces/DThemeTableHeader.md#newshadowweak)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[newShadowWeak](DThemeDarkTableRow.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L195)

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

[DThemeDarkTableRow](DThemeDarkTableRow.md).[newState](DThemeDarkTableRow.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L29)
