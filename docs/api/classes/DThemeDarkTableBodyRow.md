[Winter Cardinal UI - v0.442.0](../index.md) / DThemeDarkTableBodyRow

# Class: DThemeDarkTableBodyRow

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkTableRow`](DThemeDarkTableRow.md)

  ↳ **`DThemeDarkTableBodyRow`**

## Implements

- [`DThemeTableBodyRow`](../interfaces/DThemeTableBodyRow.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkTableBodyRow.md#constructor)

### Properties

- [BACKGROUND\_COLOR\_EVEN](DThemeDarkTableBodyRow.md#background_color_even)
- [BACKGROUND\_COLOR\_ODD](DThemeDarkTableBodyRow.md#background_color_odd)

### Methods

- [getAlpha](DThemeDarkTableBodyRow.md#getalpha)
- [getBackgroundAlpha](DThemeDarkTableBodyRow.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkTableBodyRow.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkTableBodyRow.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkTableBodyRow.md#getborderalign)
- [getBorderAlpha](DThemeDarkTableBodyRow.md#getborderalpha)
- [getBorderColor](DThemeDarkTableBodyRow.md#getbordercolor)
- [getBorderMask](DThemeDarkTableBodyRow.md#getbordermask)
- [getBorderTexture](DThemeDarkTableBodyRow.md#getbordertexture)
- [getBorderWidth](DThemeDarkTableBodyRow.md#getborderwidth)
- [getClearType](DThemeDarkTableBodyRow.md#getcleartype)
- [getColor](DThemeDarkTableBodyRow.md#getcolor)
- [getCornerAdjust](DThemeDarkTableBodyRow.md#getcorneradjust)
- [getCornerMask](DThemeDarkTableBodyRow.md#getcornermask)
- [getCornerRadius](DThemeDarkTableBodyRow.md#getcornerradius)
- [getCursor](DThemeDarkTableBodyRow.md#getcursor)
- [getDirection](DThemeDarkTableBodyRow.md#getdirection)
- [getFontFamilly](DThemeDarkTableBodyRow.md#getfontfamilly)
- [getFontSize](DThemeDarkTableBodyRow.md#getfontsize)
- [getFontStyle](DThemeDarkTableBodyRow.md#getfontstyle)
- [getFontVariant](DThemeDarkTableBodyRow.md#getfontvariant)
- [getFontWeight](DThemeDarkTableBodyRow.md#getfontweight)
- [getHeight](DThemeDarkTableBodyRow.md#getheight)
- [getInteractive](DThemeDarkTableBodyRow.md#getinteractive)
- [getLineHeight](DThemeDarkTableBodyRow.md#getlineheight)
- [getMargin](DThemeDarkTableBodyRow.md#getmargin)
- [getMultiplicity](DThemeDarkTableBodyRow.md#getmultiplicity)
- [getOutlineAlign](DThemeDarkTableBodyRow.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkTableBodyRow.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkTableBodyRow.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkTableBodyRow.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkTableBodyRow.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkTableBodyRow.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkTableBodyRow.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkTableBodyRow.md#getpaddingleft)
- [getPaddingRight](DThemeDarkTableBodyRow.md#getpaddingright)
- [getPaddingTop](DThemeDarkTableBodyRow.md#getpaddingtop)
- [getReverse](DThemeDarkTableBodyRow.md#getreverse)
- [getShadow](DThemeDarkTableBodyRow.md#getshadow)
- [getTitle](DThemeDarkTableBodyRow.md#gettitle)
- [getWeight](DThemeDarkTableBodyRow.md#getweight)
- [getWidth](DThemeDarkTableBodyRow.md#getwidth)
- [getX](DThemeDarkTableBodyRow.md#getx)
- [getY](DThemeDarkTableBodyRow.md#gety)
- [newShadow](DThemeDarkTableBodyRow.md#newshadow)
- [newShadowWeak](DThemeDarkTableBodyRow.md#newshadowweak)
- [newState](DThemeDarkTableBodyRow.md#newstate)

## Constructors

### constructor

• **new DThemeDarkTableBodyRow**(): [`DThemeDarkTableBodyRow`](DThemeDarkTableBodyRow.md)

#### Returns

[`DThemeDarkTableBodyRow`](DThemeDarkTableBodyRow.md)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[constructor](DThemeDarkTableRow.md#constructor)

## Properties

### BACKGROUND\_COLOR\_EVEN

• `Protected` `Readonly` **BACKGROUND\_COLOR\_EVEN**: `number` = `DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-body-row.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-body-row.ts#L14)

___

### BACKGROUND\_COLOR\_ODD

• `Protected` `Readonly` **BACKGROUND\_COLOR\_ODD**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-body-row.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-body-row.ts#L15)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getAlpha](../interfaces/DThemeTableBodyRow.md#getalpha)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getAlpha](DThemeDarkTableRow.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBackgroundAlpha](../interfaces/DThemeTableBodyRow.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBackgroundAlpha](DThemeDarkTableRow.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L84)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBackgroundColor](../interfaces/DThemeTableBodyRow.md#getbackgroundcolor)

#### Overrides

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBackgroundColor](DThemeDarkTableRow.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-body-row.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-body-row.ts#L20)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBackgroundTexture](../interfaces/DThemeTableBodyRow.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBackgroundTexture](DThemeDarkTableRow.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L88)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBorderAlign](../interfaces/DThemeTableBodyRow.md#getborderalign)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderAlign](DThemeDarkTableRow.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L104)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBorderAlpha](../interfaces/DThemeTableBodyRow.md#getborderalpha)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderAlpha](DThemeDarkTableRow.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L96)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBorderColor](../interfaces/DThemeTableBodyRow.md#getbordercolor)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderColor](DThemeDarkTableRow.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L13)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBorderMask](../interfaces/DThemeTableBodyRow.md#getbordermask)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderMask](DThemeDarkTableRow.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBorderTexture](../interfaces/DThemeTableBodyRow.md#getbordertexture)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderTexture](DThemeDarkTableRow.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L112)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getBorderWidth](../interfaces/DThemeTableBodyRow.md#getborderwidth)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getBorderWidth](DThemeDarkTableRow.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getClearType](../interfaces/DThemeTableBodyRow.md#getcleartype)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getClearType](DThemeDarkTableRow.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L167)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getColor](../interfaces/DThemeTableBodyRow.md#getcolor)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getColor](DThemeDarkTableRow.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getCornerAdjust](../interfaces/DThemeTableBodyRow.md#getcorneradjust)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getCornerAdjust](DThemeDarkTableRow.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getCornerMask](../interfaces/DThemeTableBodyRow.md#getcornermask)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getCornerMask](DThemeDarkTableRow.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L17)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getCornerRadius](../interfaces/DThemeTableBodyRow.md#getcornerradius)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getCornerRadius](DThemeDarkTableRow.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L132)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getCursor](../interfaces/DThemeTableBodyRow.md#getcursor)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getCursor](DThemeDarkTableRow.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getDirection](../interfaces/DThemeTableBodyRow.md#getdirection)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getDirection](DThemeDarkTableRow.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getFontFamilly](../interfaces/DThemeTableBodyRow.md#getfontfamilly)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontFamilly](DThemeDarkTableRow.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getFontSize](../interfaces/DThemeTableBodyRow.md#getfontsize)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontSize](DThemeDarkTableRow.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getFontStyle](../interfaces/DThemeTableBodyRow.md#getfontstyle)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontStyle](DThemeDarkTableRow.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getFontVariant](../interfaces/DThemeTableBodyRow.md#getfontvariant)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontVariant](DThemeDarkTableRow.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getFontWeight](../interfaces/DThemeTableBodyRow.md#getfontweight)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getFontWeight](DThemeDarkTableRow.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getHeight](../interfaces/DThemeTableBodyRow.md#getheight)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getHeight](DThemeDarkTableRow.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts#L16)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getInteractive](../interfaces/DThemeTableBodyRow.md#getinteractive)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getInteractive](DThemeDarkTableRow.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getLineHeight](../interfaces/DThemeTableBodyRow.md#getlineheight)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getLineHeight](DThemeDarkTableRow.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getMargin](../interfaces/DThemeTableBodyRow.md#getmargin)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getMargin](DThemeDarkTableRow.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L21)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getMultiplicity](../interfaces/DThemeTableBodyRow.md#getmultiplicity)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getMultiplicity](DThemeDarkTableRow.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L42)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getOutlineAlign](../interfaces/DThemeTableBodyRow.md#getoutlinealign)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineAlign](DThemeDarkTableRow.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L159)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getOutlineAlpha](../interfaces/DThemeTableBodyRow.md#getoutlinealpha)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineAlpha](DThemeDarkTableRow.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L144)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getOutlineColor](../interfaces/DThemeTableBodyRow.md#getoutlinecolor)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineColor](DThemeDarkTableRow.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L140)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getOutlineMask](../interfaces/DThemeTableBodyRow.md#getoutlinemask)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineMask](DThemeDarkTableRow.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L163)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getOutlineOffset](../interfaces/DThemeTableBodyRow.md#getoutlineoffset)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineOffset](DThemeDarkTableRow.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L155)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getOutlineWidth](../interfaces/DThemeTableBodyRow.md#getoutlinewidth)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getOutlineWidth](DThemeDarkTableRow.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getPaddingBottom](../interfaces/DThemeTableBodyRow.md#getpaddingbottom)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getPaddingBottom](DThemeDarkTableRow.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getPaddingLeft](../interfaces/DThemeTableBodyRow.md#getpaddingleft)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getPaddingLeft](DThemeDarkTableRow.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getPaddingRight](../interfaces/DThemeTableBodyRow.md#getpaddingright)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getPaddingRight](DThemeDarkTableRow.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getPaddingTop](../interfaces/DThemeTableBodyRow.md#getpaddingtop)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getPaddingTop](DThemeDarkTableRow.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L124)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getReverse](../interfaces/DThemeTableBodyRow.md#getreverse)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getReverse](DThemeDarkTableRow.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getShadow](../interfaces/DThemeTableBodyRow.md#getshadow)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getShadow](DThemeDarkTableRow.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getTitle](../interfaces/DThemeTableBodyRow.md#gettitle)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getTitle](DThemeDarkTableRow.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getWeight](../interfaces/DThemeTableBodyRow.md#getweight)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getWeight](DThemeDarkTableRow.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getWidth](../interfaces/DThemeTableBodyRow.md#getwidth)

#### Overrides

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getWidth](DThemeDarkTableRow.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-body-row.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-body-row.ts#L32)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getX](../interfaces/DThemeTableBodyRow.md#getx)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getX](DThemeDarkTableRow.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[getY](../interfaces/DThemeTableBodyRow.md#gety)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[getY](DThemeDarkTableRow.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[newShadow](../interfaces/DThemeTableBodyRow.md#newshadow)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[newShadow](DThemeDarkTableRow.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[newShadowWeak](../interfaces/DThemeTableBodyRow.md#newshadowweak)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[newShadowWeak](DThemeDarkTableRow.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L195)

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

[DThemeTableBodyRow](../interfaces/DThemeTableBodyRow.md).[newState](../interfaces/DThemeTableBodyRow.md#newstate)

#### Inherited from

[DThemeDarkTableRow](DThemeDarkTableRow.md).[newState](DThemeDarkTableRow.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L29)
