[Winter Cardinal UI - v0.442.0](../index.md) / DThemeDarkTableRow

# Class: DThemeDarkTableRow

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkLayoutHorizontal`](DThemeDarkLayoutHorizontal.md)

  ↳ **`DThemeDarkTableRow`**

  ↳↳ [`DThemeDarkTableBodyRow`](DThemeDarkTableBodyRow.md)

  ↳↳ [`DThemeDarkTableHeader`](DThemeDarkTableHeader.md)

## Implements

- [`DThemeTableRow`](../interfaces/DThemeTableRow.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkTableRow.md#constructor)

### Methods

- [getAlpha](DThemeDarkTableRow.md#getalpha)
- [getBackgroundAlpha](DThemeDarkTableRow.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkTableRow.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkTableRow.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkTableRow.md#getborderalign)
- [getBorderAlpha](DThemeDarkTableRow.md#getborderalpha)
- [getBorderColor](DThemeDarkTableRow.md#getbordercolor)
- [getBorderMask](DThemeDarkTableRow.md#getbordermask)
- [getBorderTexture](DThemeDarkTableRow.md#getbordertexture)
- [getBorderWidth](DThemeDarkTableRow.md#getborderwidth)
- [getClearType](DThemeDarkTableRow.md#getcleartype)
- [getColor](DThemeDarkTableRow.md#getcolor)
- [getCornerAdjust](DThemeDarkTableRow.md#getcorneradjust)
- [getCornerMask](DThemeDarkTableRow.md#getcornermask)
- [getCornerRadius](DThemeDarkTableRow.md#getcornerradius)
- [getCursor](DThemeDarkTableRow.md#getcursor)
- [getDirection](DThemeDarkTableRow.md#getdirection)
- [getFontFamilly](DThemeDarkTableRow.md#getfontfamilly)
- [getFontSize](DThemeDarkTableRow.md#getfontsize)
- [getFontStyle](DThemeDarkTableRow.md#getfontstyle)
- [getFontVariant](DThemeDarkTableRow.md#getfontvariant)
- [getFontWeight](DThemeDarkTableRow.md#getfontweight)
- [getHeight](DThemeDarkTableRow.md#getheight)
- [getInteractive](DThemeDarkTableRow.md#getinteractive)
- [getLineHeight](DThemeDarkTableRow.md#getlineheight)
- [getMargin](DThemeDarkTableRow.md#getmargin)
- [getMultiplicity](DThemeDarkTableRow.md#getmultiplicity)
- [getOutlineAlign](DThemeDarkTableRow.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkTableRow.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkTableRow.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkTableRow.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkTableRow.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkTableRow.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkTableRow.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkTableRow.md#getpaddingleft)
- [getPaddingRight](DThemeDarkTableRow.md#getpaddingright)
- [getPaddingTop](DThemeDarkTableRow.md#getpaddingtop)
- [getReverse](DThemeDarkTableRow.md#getreverse)
- [getShadow](DThemeDarkTableRow.md#getshadow)
- [getTitle](DThemeDarkTableRow.md#gettitle)
- [getWeight](DThemeDarkTableRow.md#getweight)
- [getWidth](DThemeDarkTableRow.md#getwidth)
- [getX](DThemeDarkTableRow.md#getx)
- [getY](DThemeDarkTableRow.md#gety)
- [newShadow](DThemeDarkTableRow.md#newshadow)
- [newShadowWeak](DThemeDarkTableRow.md#newshadowweak)
- [newState](DThemeDarkTableRow.md#newstate)

## Constructors

### constructor

• **new DThemeDarkTableRow**(): [`DThemeDarkTableRow`](DThemeDarkTableRow.md)

#### Returns

[`DThemeDarkTableRow`](DThemeDarkTableRow.md)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[constructor](DThemeDarkLayoutHorizontal.md#constructor)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getAlpha](../interfaces/DThemeTableRow.md#getalpha)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getAlpha](DThemeDarkLayoutHorizontal.md#getalpha)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBackgroundAlpha](../interfaces/DThemeTableRow.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBackgroundAlpha](DThemeDarkLayoutHorizontal.md#getbackgroundalpha)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBackgroundColor](../interfaces/DThemeTableRow.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBackgroundColor](DThemeDarkLayoutHorizontal.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBackgroundTexture](../interfaces/DThemeTableRow.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBackgroundTexture](DThemeDarkLayoutHorizontal.md#getbackgroundtexture)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBorderAlign](../interfaces/DThemeTableRow.md#getborderalign)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBorderAlign](DThemeDarkLayoutHorizontal.md#getborderalign)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBorderAlpha](../interfaces/DThemeTableRow.md#getborderalpha)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBorderAlpha](DThemeDarkLayoutHorizontal.md#getborderalpha)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBorderColor](../interfaces/DThemeTableRow.md#getbordercolor)

#### Overrides

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBorderColor](DThemeDarkLayoutHorizontal.md#getbordercolor)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBorderMask](../interfaces/DThemeTableRow.md#getbordermask)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBorderMask](DThemeDarkLayoutHorizontal.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBorderTexture](../interfaces/DThemeTableRow.md#getbordertexture)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBorderTexture](DThemeDarkLayoutHorizontal.md#getbordertexture)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getBorderWidth](../interfaces/DThemeTableRow.md#getborderwidth)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBorderWidth](DThemeDarkLayoutHorizontal.md#getborderwidth)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getClearType](../interfaces/DThemeTableRow.md#getcleartype)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getClearType](DThemeDarkLayoutHorizontal.md#getcleartype)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getColor](../interfaces/DThemeTableRow.md#getcolor)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getColor](DThemeDarkLayoutHorizontal.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getCornerAdjust](../interfaces/DThemeTableRow.md#getcorneradjust)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getCornerAdjust](DThemeDarkLayoutHorizontal.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getCornerMask](../interfaces/DThemeTableRow.md#getcornermask)

#### Overrides

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getCornerMask](DThemeDarkLayoutHorizontal.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L17)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getCornerRadius](../interfaces/DThemeTableRow.md#getcornerradius)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getCornerRadius](DThemeDarkLayoutHorizontal.md#getcornerradius)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getCursor](../interfaces/DThemeTableRow.md#getcursor)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getCursor](DThemeDarkLayoutHorizontal.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getDirection](../interfaces/DThemeTableRow.md#getdirection)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getDirection](DThemeDarkLayoutHorizontal.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getFontFamilly](../interfaces/DThemeTableRow.md#getfontfamilly)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getFontFamilly](DThemeDarkLayoutHorizontal.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getFontSize](../interfaces/DThemeTableRow.md#getfontsize)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getFontSize](DThemeDarkLayoutHorizontal.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getFontStyle](../interfaces/DThemeTableRow.md#getfontstyle)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getFontStyle](DThemeDarkLayoutHorizontal.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getFontVariant](../interfaces/DThemeTableRow.md#getfontvariant)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getFontVariant](DThemeDarkLayoutHorizontal.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getFontWeight](../interfaces/DThemeTableRow.md#getfontweight)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getFontWeight](DThemeDarkLayoutHorizontal.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getHeight](../interfaces/DThemeTableRow.md#getheight)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getHeight](DThemeDarkLayoutHorizontal.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-horizontal.ts#L16)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getInteractive](../interfaces/DThemeTableRow.md#getinteractive)

#### Overrides

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getInteractive](DThemeDarkLayoutHorizontal.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getLineHeight](../interfaces/DThemeTableRow.md#getlineheight)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getLineHeight](DThemeDarkLayoutHorizontal.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getMargin](../interfaces/DThemeTableRow.md#getmargin)

#### Overrides

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getMargin](DThemeDarkLayoutHorizontal.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L21)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getMultiplicity](../interfaces/DThemeTableRow.md#getmultiplicity)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getMultiplicity](DThemeDarkLayoutHorizontal.md#getmultiplicity)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getOutlineAlign](../interfaces/DThemeTableRow.md#getoutlinealign)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getOutlineAlign](DThemeDarkLayoutHorizontal.md#getoutlinealign)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getOutlineAlpha](../interfaces/DThemeTableRow.md#getoutlinealpha)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getOutlineAlpha](DThemeDarkLayoutHorizontal.md#getoutlinealpha)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getOutlineColor](../interfaces/DThemeTableRow.md#getoutlinecolor)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getOutlineColor](DThemeDarkLayoutHorizontal.md#getoutlinecolor)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getOutlineMask](../interfaces/DThemeTableRow.md#getoutlinemask)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getOutlineMask](DThemeDarkLayoutHorizontal.md#getoutlinemask)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getOutlineOffset](../interfaces/DThemeTableRow.md#getoutlineoffset)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getOutlineOffset](DThemeDarkLayoutHorizontal.md#getoutlineoffset)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getOutlineWidth](../interfaces/DThemeTableRow.md#getoutlinewidth)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getOutlineWidth](DThemeDarkLayoutHorizontal.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getPaddingBottom](../interfaces/DThemeTableRow.md#getpaddingbottom)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getPaddingBottom](DThemeDarkLayoutHorizontal.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getPaddingLeft](../interfaces/DThemeTableRow.md#getpaddingleft)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getPaddingLeft](DThemeDarkLayoutHorizontal.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getPaddingRight](../interfaces/DThemeTableRow.md#getpaddingright)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getPaddingRight](DThemeDarkLayoutHorizontal.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getPaddingTop](../interfaces/DThemeTableRow.md#getpaddingtop)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getPaddingTop](DThemeDarkLayoutHorizontal.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L124)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getReverse](../interfaces/DThemeTableRow.md#getreverse)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getReverse](DThemeDarkLayoutHorizontal.md#getreverse)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getShadow](../interfaces/DThemeTableRow.md#getshadow)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getShadow](DThemeDarkLayoutHorizontal.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getTitle](../interfaces/DThemeTableRow.md#gettitle)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getTitle](DThemeDarkLayoutHorizontal.md#gettitle)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getWeight](../interfaces/DThemeTableRow.md#getweight)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getWeight](DThemeDarkLayoutHorizontal.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getWidth](../interfaces/DThemeTableRow.md#getwidth)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getWidth](DThemeDarkLayoutHorizontal.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getX](../interfaces/DThemeTableRow.md#getx)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getX](DThemeDarkLayoutHorizontal.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[getY](../interfaces/DThemeTableRow.md#gety)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getY](DThemeDarkLayoutHorizontal.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[newShadow](../interfaces/DThemeTableRow.md#newshadow)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[newShadow](DThemeDarkLayoutHorizontal.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableRow](../interfaces/DThemeTableRow.md).[newShadowWeak](../interfaces/DThemeTableRow.md#newshadowweak)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[newShadowWeak](DThemeDarkLayoutHorizontal.md#newshadowweak)

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

[DThemeTableRow](../interfaces/DThemeTableRow.md).[newState](../interfaces/DThemeTableRow.md#newstate)

#### Overrides

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[newState](DThemeDarkLayoutHorizontal.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table-row.ts#L29)
