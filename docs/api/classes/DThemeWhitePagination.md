[Winter Cardinal UI - v0.414.0](../index.md) / DThemeWhitePagination

# Class: DThemeWhitePagination

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhiteLayoutHorizontal`](DThemeWhiteLayoutHorizontal.md)

  ↳ **`DThemeWhitePagination`**

## Implements

- [`DThemePagination`](../interfaces/DThemePagination.md)

## Table of contents

### Constructors

- [constructor](DThemeWhitePagination.md#constructor)

### Methods

- [getAlpha](DThemeWhitePagination.md#getalpha)
- [getBackgroundAlpha](DThemeWhitePagination.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhitePagination.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhitePagination.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhitePagination.md#getborderalign)
- [getBorderAlpha](DThemeWhitePagination.md#getborderalpha)
- [getBorderColor](DThemeWhitePagination.md#getbordercolor)
- [getBorderMask](DThemeWhitePagination.md#getbordermask)
- [getBorderTexture](DThemeWhitePagination.md#getbordertexture)
- [getBorderWidth](DThemeWhitePagination.md#getborderwidth)
- [getButtonSpace](DThemeWhitePagination.md#getbuttonspace)
- [getClearType](DThemeWhitePagination.md#getcleartype)
- [getColor](DThemeWhitePagination.md#getcolor)
- [getCornerAdjust](DThemeWhitePagination.md#getcorneradjust)
- [getCornerMask](DThemeWhitePagination.md#getcornermask)
- [getCornerRadius](DThemeWhitePagination.md#getcornerradius)
- [getCursor](DThemeWhitePagination.md#getcursor)
- [getDirection](DThemeWhitePagination.md#getdirection)
- [getFontFamilly](DThemeWhitePagination.md#getfontfamilly)
- [getFontSize](DThemeWhitePagination.md#getfontsize)
- [getFontStyle](DThemeWhitePagination.md#getfontstyle)
- [getFontVariant](DThemeWhitePagination.md#getfontvariant)
- [getFontWeight](DThemeWhitePagination.md#getfontweight)
- [getHeight](DThemeWhitePagination.md#getheight)
- [getInteractive](DThemeWhitePagination.md#getinteractive)
- [getLineHeight](DThemeWhitePagination.md#getlineheight)
- [getMargin](DThemeWhitePagination.md#getmargin)
- [getMultiplicity](DThemeWhitePagination.md#getmultiplicity)
- [getOutlineAlign](DThemeWhitePagination.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhitePagination.md#getoutlinealpha)
- [getOutlineColor](DThemeWhitePagination.md#getoutlinecolor)
- [getOutlineMask](DThemeWhitePagination.md#getoutlinemask)
- [getOutlineOffset](DThemeWhitePagination.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhitePagination.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhitePagination.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhitePagination.md#getpaddingleft)
- [getPaddingRight](DThemeWhitePagination.md#getpaddingright)
- [getPaddingTop](DThemeWhitePagination.md#getpaddingtop)
- [getReverse](DThemeWhitePagination.md#getreverse)
- [getShadow](DThemeWhitePagination.md#getshadow)
- [getTitle](DThemeWhitePagination.md#gettitle)
- [getWeight](DThemeWhitePagination.md#getweight)
- [getWidth](DThemeWhitePagination.md#getwidth)
- [getX](DThemeWhitePagination.md#getx)
- [getY](DThemeWhitePagination.md#gety)
- [newShadow](DThemeWhitePagination.md#newshadow)
- [newShadowWeak](DThemeWhitePagination.md#newshadowweak)
- [newState](DThemeWhitePagination.md#newstate)

## Constructors

### constructor

• **new DThemeWhitePagination**(): [`DThemeWhitePagination`](DThemeWhitePagination.md)

#### Returns

[`DThemeWhitePagination`](DThemeWhitePagination.md)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[constructor](DThemeWhiteLayoutHorizontal.md#constructor)

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

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getAlpha](DThemeWhiteLayoutHorizontal.md#getalpha)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBackgroundAlpha](../interfaces/DThemePagination.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBackgroundAlpha](DThemeWhiteLayoutHorizontal.md#getbackgroundalpha)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBackgroundColor](../interfaces/DThemePagination.md#getbackgroundcolor)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBackgroundColor](DThemeWhiteLayoutHorizontal.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getBackgroundTexture](../interfaces/DThemePagination.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBackgroundTexture](DThemeWhiteLayoutHorizontal.md#getbackgroundtexture)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderAlign](../interfaces/DThemePagination.md#getborderalign)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBorderAlign](DThemeWhiteLayoutHorizontal.md#getborderalign)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderAlpha](../interfaces/DThemePagination.md#getborderalpha)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBorderAlpha](DThemeWhiteLayoutHorizontal.md#getborderalpha)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderColor](../interfaces/DThemePagination.md#getbordercolor)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBorderColor](DThemeWhiteLayoutHorizontal.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L17)

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

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBorderMask](DThemeWhiteLayoutHorizontal.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getBorderTexture](../interfaces/DThemePagination.md#getbordertexture)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBorderTexture](DThemeWhiteLayoutHorizontal.md#getbordertexture)

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

[DThemePagination](../interfaces/DThemePagination.md).[getBorderWidth](../interfaces/DThemePagination.md#getborderwidth)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getBorderWidth](DThemeWhiteLayoutHorizontal.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getButtonSpace

▸ **getButtonSpace**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getButtonSpace](../interfaces/DThemePagination.md#getbuttonspace)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pagination.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pagination.ts#L19)

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

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getClearType](DThemeWhiteLayoutHorizontal.md#getcleartype)

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

[DThemePagination](../interfaces/DThemePagination.md).[getColor](../interfaces/DThemePagination.md#getcolor)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getColor](DThemeWhiteLayoutHorizontal.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getCornerAdjust](../interfaces/DThemePagination.md#getcorneradjust)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getCornerAdjust](DThemeWhiteLayoutHorizontal.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getCornerMask](../interfaces/DThemePagination.md#getcornermask)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getCornerMask](DThemeWhiteLayoutHorizontal.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getCornerRadius](../interfaces/DThemePagination.md#getcornerradius)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getCornerRadius](DThemeWhiteLayoutHorizontal.md#getcornerradius)

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

[DThemePagination](../interfaces/DThemePagination.md).[getCursor](../interfaces/DThemePagination.md#getcursor)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getCursor](DThemeWhiteLayoutHorizontal.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getDirection](../interfaces/DThemePagination.md#getdirection)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getDirection](DThemeWhiteLayoutHorizontal.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-horizontal.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-horizontal.ts#L15)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getFontFamilly](../interfaces/DThemePagination.md#getfontfamilly)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getFontFamilly](DThemeWhiteLayoutHorizontal.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getFontSize](../interfaces/DThemePagination.md#getfontsize)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getFontSize](DThemeWhiteLayoutHorizontal.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getFontStyle](../interfaces/DThemePagination.md#getfontstyle)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getFontStyle](DThemeWhiteLayoutHorizontal.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getFontVariant](../interfaces/DThemePagination.md#getfontvariant)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getFontVariant](DThemeWhiteLayoutHorizontal.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getFontWeight](../interfaces/DThemePagination.md#getfontweight)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getFontWeight](DThemeWhiteLayoutHorizontal.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getHeight](../interfaces/DThemePagination.md#getheight)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getHeight](DThemeWhiteLayoutHorizontal.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-horizontal.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-horizontal.ts#L19)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getInteractive](../interfaces/DThemePagination.md#getinteractive)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getInteractive](DThemeWhiteLayoutHorizontal.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getLineHeight](../interfaces/DThemePagination.md#getlineheight)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getLineHeight](DThemeWhiteLayoutHorizontal.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getMargin](../interfaces/DThemePagination.md#getmargin)

#### Overrides

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getMargin](DThemeWhiteLayoutHorizontal.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pagination.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pagination.ts#L15)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getMultiplicity](../interfaces/DThemePagination.md#getmultiplicity)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getMultiplicity](DThemeWhiteLayoutHorizontal.md#getmultiplicity)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineAlign](../interfaces/DThemePagination.md#getoutlinealign)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getOutlineAlign](DThemeWhiteLayoutHorizontal.md#getoutlinealign)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineAlpha](../interfaces/DThemePagination.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getOutlineAlpha](DThemeWhiteLayoutHorizontal.md#getoutlinealpha)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineColor](../interfaces/DThemePagination.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getOutlineColor](DThemeWhiteLayoutHorizontal.md#getoutlinecolor)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineMask](../interfaces/DThemePagination.md#getoutlinemask)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getOutlineMask](DThemeWhiteLayoutHorizontal.md#getoutlinemask)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineOffset](../interfaces/DThemePagination.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getOutlineOffset](DThemeWhiteLayoutHorizontal.md#getoutlineoffset)

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

[DThemePagination](../interfaces/DThemePagination.md).[getOutlineWidth](../interfaces/DThemePagination.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getOutlineWidth](DThemeWhiteLayoutHorizontal.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getPaddingBottom](../interfaces/DThemePagination.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getPaddingBottom](DThemeWhiteLayoutHorizontal.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getPaddingLeft](../interfaces/DThemePagination.md#getpaddingleft)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getPaddingLeft](DThemeWhiteLayoutHorizontal.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getPaddingRight](../interfaces/DThemePagination.md#getpaddingright)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getPaddingRight](DThemeWhiteLayoutHorizontal.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getPaddingTop](../interfaces/DThemePagination.md#getpaddingtop)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getPaddingTop](DThemeWhiteLayoutHorizontal.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getReverse](../interfaces/DThemePagination.md#getreverse)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getReverse](DThemeWhiteLayoutHorizontal.md#getreverse)

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

[DThemePagination](../interfaces/DThemePagination.md).[getShadow](../interfaces/DThemePagination.md#getshadow)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getShadow](DThemeWhiteLayoutHorizontal.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getTitle](../interfaces/DThemePagination.md#gettitle)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getTitle](DThemeWhiteLayoutHorizontal.md#gettitle)

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

[DThemePagination](../interfaces/DThemePagination.md).[getWeight](../interfaces/DThemePagination.md#getweight)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getWeight](DThemeWhiteLayoutHorizontal.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getWidth](../interfaces/DThemePagination.md#getwidth)

#### Overrides

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getWidth](DThemeWhiteLayoutHorizontal.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pagination.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pagination.ts#L11)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getX](../interfaces/DThemePagination.md#getx)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getX](DThemeWhiteLayoutHorizontal.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[getY](../interfaces/DThemePagination.md#gety)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[getY](DThemeWhiteLayoutHorizontal.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[newShadow](../interfaces/DThemePagination.md#newshadow)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[newShadow](DThemeWhiteLayoutHorizontal.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePagination](../interfaces/DThemePagination.md).[newShadowWeak](../interfaces/DThemePagination.md#newshadowweak)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[newShadowWeak](DThemeWhiteLayoutHorizontal.md#newshadowweak)

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

[DThemePagination](../interfaces/DThemePagination.md).[newState](../interfaces/DThemePagination.md#newstate)

#### Inherited from

[DThemeWhiteLayoutHorizontal](DThemeWhiteLayoutHorizontal.md).[newState](DThemeWhiteLayoutHorizontal.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L29)
