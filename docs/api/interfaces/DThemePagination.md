[Winter Cardinal UI - v0.414.0](../index.md) / DThemePagination

# Interface: DThemePagination

[DBase](../classes/DBase.md) theme.

## Hierarchy

- [`DThemeLayoutHorizontal`](DThemeLayoutHorizontal.md)

  ↳ **`DThemePagination`**

## Implemented by

- [`DThemeDarkPagination`](../classes/DThemeDarkPagination.md)
- [`DThemeWhitePagination`](../classes/DThemeWhitePagination.md)

## Table of contents

### Methods

- [getAlpha](DThemePagination.md#getalpha)
- [getBackgroundAlpha](DThemePagination.md#getbackgroundalpha)
- [getBackgroundColor](DThemePagination.md#getbackgroundcolor)
- [getBackgroundTexture](DThemePagination.md#getbackgroundtexture)
- [getBorderAlign](DThemePagination.md#getborderalign)
- [getBorderAlpha](DThemePagination.md#getborderalpha)
- [getBorderColor](DThemePagination.md#getbordercolor)
- [getBorderMask](DThemePagination.md#getbordermask)
- [getBorderTexture](DThemePagination.md#getbordertexture)
- [getBorderWidth](DThemePagination.md#getborderwidth)
- [getButtonSpace](DThemePagination.md#getbuttonspace)
- [getClearType](DThemePagination.md#getcleartype)
- [getColor](DThemePagination.md#getcolor)
- [getCornerAdjust](DThemePagination.md#getcorneradjust)
- [getCornerMask](DThemePagination.md#getcornermask)
- [getCornerRadius](DThemePagination.md#getcornerradius)
- [getCursor](DThemePagination.md#getcursor)
- [getDirection](DThemePagination.md#getdirection)
- [getFontFamilly](DThemePagination.md#getfontfamilly)
- [getFontSize](DThemePagination.md#getfontsize)
- [getFontStyle](DThemePagination.md#getfontstyle)
- [getFontVariant](DThemePagination.md#getfontvariant)
- [getFontWeight](DThemePagination.md#getfontweight)
- [getHeight](DThemePagination.md#getheight)
- [getInteractive](DThemePagination.md#getinteractive)
- [getLineHeight](DThemePagination.md#getlineheight)
- [getMargin](DThemePagination.md#getmargin)
- [getMultiplicity](DThemePagination.md#getmultiplicity)
- [getOutlineAlign](DThemePagination.md#getoutlinealign)
- [getOutlineAlpha](DThemePagination.md#getoutlinealpha)
- [getOutlineColor](DThemePagination.md#getoutlinecolor)
- [getOutlineMask](DThemePagination.md#getoutlinemask)
- [getOutlineOffset](DThemePagination.md#getoutlineoffset)
- [getOutlineWidth](DThemePagination.md#getoutlinewidth)
- [getPaddingBottom](DThemePagination.md#getpaddingbottom)
- [getPaddingLeft](DThemePagination.md#getpaddingleft)
- [getPaddingRight](DThemePagination.md#getpaddingright)
- [getPaddingTop](DThemePagination.md#getpaddingtop)
- [getReverse](DThemePagination.md#getreverse)
- [getShadow](DThemePagination.md#getshadow)
- [getTitle](DThemePagination.md#gettitle)
- [getWeight](DThemePagination.md#getweight)
- [getWidth](DThemePagination.md#getwidth)
- [getX](DThemePagination.md#getx)
- [getY](DThemePagination.md#gety)
- [newShadow](DThemePagination.md#newshadow)
- [newShadowWeak](DThemePagination.md#newshadowweak)
- [newState](DThemePagination.md#newstate)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getAlpha](DThemeLayoutHorizontal.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBackgroundAlpha](DThemeLayoutHorizontal.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBackgroundColor](DThemeLayoutHorizontal.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBackgroundTexture](DThemeLayoutHorizontal.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBorderAlign](DThemeLayoutHorizontal.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L585)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBorderAlpha](DThemeLayoutHorizontal.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L571)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBorderColor](DThemeLayoutHorizontal.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBorderMask](DThemeLayoutHorizontal.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBorderTexture](DThemeLayoutHorizontal.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:597](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L597)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getBorderWidth](DThemeLayoutHorizontal.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getButtonSpace

▸ **getButtonSpace**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L97)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getClearType](DThemeLayoutHorizontal.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getColor](DThemeLayoutHorizontal.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getCornerAdjust](DThemeLayoutHorizontal.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-layout.ts#L42)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getCornerMask](DThemeLayoutHorizontal.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getCornerRadius](DThemeLayoutHorizontal.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getCursor](DThemeLayoutHorizontal.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getDirection](DThemeLayoutHorizontal.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-layout.ts#L41)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getFontFamilly](DThemeLayoutHorizontal.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getFontSize](DThemeLayoutHorizontal.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getFontStyle](DThemeLayoutHorizontal.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getFontVariant](DThemeLayoutHorizontal.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getFontWeight](DThemeLayoutHorizontal.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getHeight](DThemeLayoutHorizontal.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getInteractive](DThemeLayoutHorizontal.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getLineHeight](DThemeLayoutHorizontal.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getMargin](DThemeLayoutHorizontal.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-layout.ts#L40)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getMultiplicity](DThemeLayoutHorizontal.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-layout.ts#L43)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getOutlineAlign](DThemeLayoutHorizontal.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getOutlineAlpha](DThemeLayoutHorizontal.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getOutlineColor](DThemeLayoutHorizontal.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L635)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getOutlineMask](DThemeLayoutHorizontal.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getOutlineOffset](DThemeLayoutHorizontal.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getOutlineWidth](DThemeLayoutHorizontal.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getPaddingBottom](DThemeLayoutHorizontal.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getPaddingLeft](DThemeLayoutHorizontal.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getPaddingRight](DThemeLayoutHorizontal.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getPaddingTop](DThemeLayoutHorizontal.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getReverse](DThemeLayoutHorizontal.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-layout.ts#L44)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getShadow](DThemeLayoutHorizontal.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getTitle](DThemeLayoutHorizontal.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L691)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getWeight](DThemeLayoutHorizontal.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getWidth](DThemeLayoutHorizontal.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getX](DThemeLayoutHorizontal.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[getY](DThemeLayoutHorizontal.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[newShadow](DThemeLayoutHorizontal.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[newShadowWeak](DThemeLayoutHorizontal.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:714](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L714)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DThemeLayoutHorizontal](DThemeLayoutHorizontal.md).[newState](DThemeLayoutHorizontal.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L686)
