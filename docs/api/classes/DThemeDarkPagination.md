[Winter Cardinal UI - v0.442.0](../index.md) / DThemeDarkPagination

# Class: DThemeDarkPagination

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkLayoutHorizontal`](DThemeDarkLayoutHorizontal.md)

  ↳ **`DThemeDarkPagination`**

## Implements

- [`DThemePagination`](../interfaces/DThemePagination.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkPagination.md#constructor)

### Methods

- [getAlpha](DThemeDarkPagination.md#getalpha)
- [getBackgroundAlpha](DThemeDarkPagination.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkPagination.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkPagination.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkPagination.md#getborderalign)
- [getBorderAlpha](DThemeDarkPagination.md#getborderalpha)
- [getBorderColor](DThemeDarkPagination.md#getbordercolor)
- [getBorderMask](DThemeDarkPagination.md#getbordermask)
- [getBorderTexture](DThemeDarkPagination.md#getbordertexture)
- [getBorderWidth](DThemeDarkPagination.md#getborderwidth)
- [getButtonSpace](DThemeDarkPagination.md#getbuttonspace)
- [getClearType](DThemeDarkPagination.md#getcleartype)
- [getColor](DThemeDarkPagination.md#getcolor)
- [getCornerAdjust](DThemeDarkPagination.md#getcorneradjust)
- [getCornerMask](DThemeDarkPagination.md#getcornermask)
- [getCornerRadius](DThemeDarkPagination.md#getcornerradius)
- [getCursor](DThemeDarkPagination.md#getcursor)
- [getDirection](DThemeDarkPagination.md#getdirection)
- [getFontFamilly](DThemeDarkPagination.md#getfontfamilly)
- [getFontSize](DThemeDarkPagination.md#getfontsize)
- [getFontStyle](DThemeDarkPagination.md#getfontstyle)
- [getFontVariant](DThemeDarkPagination.md#getfontvariant)
- [getFontWeight](DThemeDarkPagination.md#getfontweight)
- [getHeight](DThemeDarkPagination.md#getheight)
- [getInteractive](DThemeDarkPagination.md#getinteractive)
- [getLineHeight](DThemeDarkPagination.md#getlineheight)
- [getMargin](DThemeDarkPagination.md#getmargin)
- [getMultiplicity](DThemeDarkPagination.md#getmultiplicity)
- [getOutlineAlign](DThemeDarkPagination.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkPagination.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkPagination.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkPagination.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkPagination.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkPagination.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkPagination.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkPagination.md#getpaddingleft)
- [getPaddingRight](DThemeDarkPagination.md#getpaddingright)
- [getPaddingTop](DThemeDarkPagination.md#getpaddingtop)
- [getReverse](DThemeDarkPagination.md#getreverse)
- [getShadow](DThemeDarkPagination.md#getshadow)
- [getTitle](DThemeDarkPagination.md#gettitle)
- [getWeight](DThemeDarkPagination.md#getweight)
- [getWidth](DThemeDarkPagination.md#getwidth)
- [getX](DThemeDarkPagination.md#getx)
- [getY](DThemeDarkPagination.md#gety)
- [newShadow](DThemeDarkPagination.md#newshadow)
- [newShadowWeak](DThemeDarkPagination.md#newshadowweak)
- [newState](DThemeDarkPagination.md#newstate)

## Constructors

### constructor

• **new DThemeDarkPagination**(): [`DThemeDarkPagination`](DThemeDarkPagination.md)

#### Returns

[`DThemeDarkPagination`](DThemeDarkPagination.md)

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

[DThemePagination](../interfaces/DThemePagination.md).[getAlpha](../interfaces/DThemePagination.md#getalpha)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBackgroundAlpha](../interfaces/DThemePagination.md#getbackgroundalpha)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBackgroundColor](../interfaces/DThemePagination.md#getbackgroundcolor)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBackgroundTexture](../interfaces/DThemePagination.md#getbackgroundtexture)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderAlign](../interfaces/DThemePagination.md#getborderalign)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderAlpha](../interfaces/DThemePagination.md#getborderalpha)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderColor](../interfaces/DThemePagination.md#getbordercolor)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBorderColor](DThemeDarkLayoutHorizontal.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L17)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderMask](../interfaces/DThemePagination.md#getbordermask)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderTexture](../interfaces/DThemePagination.md#getbordertexture)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderWidth](../interfaces/DThemePagination.md#getborderwidth)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getBorderWidth](DThemeDarkLayoutHorizontal.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

___

### getButtonSpace

▸ **getButtonSpace**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getButtonSpace](../interfaces/DThemePagination.md#getbuttonspace)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pagination.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pagination.ts#L19)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getClearType](../interfaces/DThemePagination.md#getcleartype)

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

[DThemePagination](../interfaces/DThemePagination.md).[getColor](../interfaces/DThemePagination.md#getcolor)

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

[DThemePagination](../interfaces/DThemePagination.md).[getCornerAdjust](../interfaces/DThemePagination.md#getcorneradjust)

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

[DThemePagination](../interfaces/DThemePagination.md).[getCornerMask](../interfaces/DThemePagination.md#getcornermask)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getCornerMask](DThemeDarkLayoutHorizontal.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getCornerRadius](../interfaces/DThemePagination.md#getcornerradius)

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

[DThemePagination](../interfaces/DThemePagination.md).[getCursor](../interfaces/DThemePagination.md#getcursor)

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

[DThemePagination](../interfaces/DThemePagination.md).[getDirection](../interfaces/DThemePagination.md#getdirection)

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

[DThemePagination](../interfaces/DThemePagination.md).[getFontFamilly](../interfaces/DThemePagination.md#getfontfamilly)

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

[DThemePagination](../interfaces/DThemePagination.md).[getFontSize](../interfaces/DThemePagination.md#getfontsize)

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

[DThemePagination](../interfaces/DThemePagination.md).[getFontStyle](../interfaces/DThemePagination.md#getfontstyle)

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

[DThemePagination](../interfaces/DThemePagination.md).[getFontVariant](../interfaces/DThemePagination.md#getfontvariant)

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

[DThemePagination](../interfaces/DThemePagination.md).[getFontWeight](../interfaces/DThemePagination.md#getfontweight)

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

[DThemePagination](../interfaces/DThemePagination.md).[getHeight](../interfaces/DThemePagination.md#getheight)

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

[DThemePagination](../interfaces/DThemePagination.md).[getInteractive](../interfaces/DThemePagination.md#getinteractive)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getInteractive](DThemeDarkLayoutHorizontal.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getLineHeight](../interfaces/DThemePagination.md#getlineheight)

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

[DThemePagination](../interfaces/DThemePagination.md).[getMargin](../interfaces/DThemePagination.md#getmargin)

#### Overrides

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getMargin](DThemeDarkLayoutHorizontal.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pagination.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pagination.ts#L15)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getMultiplicity](../interfaces/DThemePagination.md#getmultiplicity)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineAlign](../interfaces/DThemePagination.md#getoutlinealign)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineAlpha](../interfaces/DThemePagination.md#getoutlinealpha)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineColor](../interfaces/DThemePagination.md#getoutlinecolor)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineMask](../interfaces/DThemePagination.md#getoutlinemask)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineOffset](../interfaces/DThemePagination.md#getoutlineoffset)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineWidth](../interfaces/DThemePagination.md#getoutlinewidth)

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

[DThemePagination](../interfaces/DThemePagination.md).[getPaddingBottom](../interfaces/DThemePagination.md#getpaddingbottom)

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

[DThemePagination](../interfaces/DThemePagination.md).[getPaddingLeft](../interfaces/DThemePagination.md#getpaddingleft)

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

[DThemePagination](../interfaces/DThemePagination.md).[getPaddingRight](../interfaces/DThemePagination.md#getpaddingright)

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

[DThemePagination](../interfaces/DThemePagination.md).[getPaddingTop](../interfaces/DThemePagination.md#getpaddingtop)

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

[DThemePagination](../interfaces/DThemePagination.md).[getReverse](../interfaces/DThemePagination.md#getreverse)

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

[DThemePagination](../interfaces/DThemePagination.md).[getShadow](../interfaces/DThemePagination.md#getshadow)

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

[DThemePagination](../interfaces/DThemePagination.md).[getTitle](../interfaces/DThemePagination.md#gettitle)

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

[DThemePagination](../interfaces/DThemePagination.md).[getWeight](../interfaces/DThemePagination.md#getweight)

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

[DThemePagination](../interfaces/DThemePagination.md).[getWidth](../interfaces/DThemePagination.md#getwidth)

#### Overrides

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[getWidth](DThemeDarkLayoutHorizontal.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pagination.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pagination.ts#L11)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getX](../interfaces/DThemePagination.md#getx)

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

[DThemePagination](../interfaces/DThemePagination.md).[getY](../interfaces/DThemePagination.md#gety)

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

[DThemePagination](../interfaces/DThemePagination.md).[newShadow](../interfaces/DThemePagination.md#newshadow)

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

[DThemePagination](../interfaces/DThemePagination.md).[newShadowWeak](../interfaces/DThemePagination.md#newshadowweak)

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

[DThemePagination](../interfaces/DThemePagination.md).[newState](../interfaces/DThemePagination.md#newstate)

#### Inherited from

[DThemeDarkLayoutHorizontal](DThemeDarkLayoutHorizontal.md).[newState](DThemeDarkLayoutHorizontal.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L29)
