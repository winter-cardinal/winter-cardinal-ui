[Winter Cardinal UI - v0.407.0](../index.md) / DThemeLayoutHorizontal

# Interface: DThemeLayoutHorizontal

[DBase](../classes/DBase.md) theme.

## Hierarchy

- [`DThemeLayout`](DThemeLayout.md)

  ↳ **`DThemeLayoutHorizontal`**

  ↳↳ [`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)

  ↳↳ [`DThemeInputAndLabel`](DThemeInputAndLabel.md)

  ↳↳ [`DThemeInputBoolean`](DThemeInputBoolean.md)

  ↳↳ [`DThemeMenuBar`](DThemeMenuBar.md)

  ↳↳ [`DThemePagination`](DThemePagination.md)

  ↳↳ [`DThemeTableRow`](DThemeTableRow.md)

## Implemented by

- [`DThemeDarkLayoutHorizontal`](../classes/DThemeDarkLayoutHorizontal.md)
- [`DThemeWhiteLayoutHorizontal`](../classes/DThemeWhiteLayoutHorizontal.md)

## Table of contents

### Methods

- [getAlpha](DThemeLayoutHorizontal.md#getalpha)
- [getBackgroundAlpha](DThemeLayoutHorizontal.md#getbackgroundalpha)
- [getBackgroundColor](DThemeLayoutHorizontal.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeLayoutHorizontal.md#getbackgroundtexture)
- [getBorderAlign](DThemeLayoutHorizontal.md#getborderalign)
- [getBorderAlpha](DThemeLayoutHorizontal.md#getborderalpha)
- [getBorderColor](DThemeLayoutHorizontal.md#getbordercolor)
- [getBorderMask](DThemeLayoutHorizontal.md#getbordermask)
- [getBorderTexture](DThemeLayoutHorizontal.md#getbordertexture)
- [getBorderWidth](DThemeLayoutHorizontal.md#getborderwidth)
- [getClearType](DThemeLayoutHorizontal.md#getcleartype)
- [getColor](DThemeLayoutHorizontal.md#getcolor)
- [getCornerAdjust](DThemeLayoutHorizontal.md#getcorneradjust)
- [getCornerMask](DThemeLayoutHorizontal.md#getcornermask)
- [getCornerRadius](DThemeLayoutHorizontal.md#getcornerradius)
- [getCursor](DThemeLayoutHorizontal.md#getcursor)
- [getDirection](DThemeLayoutHorizontal.md#getdirection)
- [getFontFamilly](DThemeLayoutHorizontal.md#getfontfamilly)
- [getFontSize](DThemeLayoutHorizontal.md#getfontsize)
- [getFontStyle](DThemeLayoutHorizontal.md#getfontstyle)
- [getFontVariant](DThemeLayoutHorizontal.md#getfontvariant)
- [getFontWeight](DThemeLayoutHorizontal.md#getfontweight)
- [getHeight](DThemeLayoutHorizontal.md#getheight)
- [getInteractive](DThemeLayoutHorizontal.md#getinteractive)
- [getLineHeight](DThemeLayoutHorizontal.md#getlineheight)
- [getMargin](DThemeLayoutHorizontal.md#getmargin)
- [getMultiplicity](DThemeLayoutHorizontal.md#getmultiplicity)
- [getOutlineAlign](DThemeLayoutHorizontal.md#getoutlinealign)
- [getOutlineAlpha](DThemeLayoutHorizontal.md#getoutlinealpha)
- [getOutlineColor](DThemeLayoutHorizontal.md#getoutlinecolor)
- [getOutlineMask](DThemeLayoutHorizontal.md#getoutlinemask)
- [getOutlineOffset](DThemeLayoutHorizontal.md#getoutlineoffset)
- [getOutlineWidth](DThemeLayoutHorizontal.md#getoutlinewidth)
- [getPaddingBottom](DThemeLayoutHorizontal.md#getpaddingbottom)
- [getPaddingLeft](DThemeLayoutHorizontal.md#getpaddingleft)
- [getPaddingRight](DThemeLayoutHorizontal.md#getpaddingright)
- [getPaddingTop](DThemeLayoutHorizontal.md#getpaddingtop)
- [getReverse](DThemeLayoutHorizontal.md#getreverse)
- [getShadow](DThemeLayoutHorizontal.md#getshadow)
- [getTitle](DThemeLayoutHorizontal.md#gettitle)
- [getWeight](DThemeLayoutHorizontal.md#getweight)
- [getWidth](DThemeLayoutHorizontal.md#getwidth)
- [getX](DThemeLayoutHorizontal.md#getx)
- [getY](DThemeLayoutHorizontal.md#gety)
- [newShadow](DThemeLayoutHorizontal.md#newshadow)
- [newShadowWeak](DThemeLayoutHorizontal.md#newshadowweak)
- [newState](DThemeLayoutHorizontal.md#newstate)

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

[DThemeLayout](DThemeLayout.md).[getAlpha](DThemeLayout.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeLayout](DThemeLayout.md).[getBackgroundAlpha](DThemeLayout.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

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

[DThemeLayout](DThemeLayout.md).[getBackgroundColor](DThemeLayout.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getBackgroundTexture](DThemeLayout.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

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

[DThemeLayout](DThemeLayout.md).[getBorderAlign](DThemeLayout.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L585)

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

[DThemeLayout](DThemeLayout.md).[getBorderAlpha](DThemeLayout.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L571)

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

[DThemeLayout](DThemeLayout.md).[getBorderColor](DThemeLayout.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

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

[DThemeLayout](DThemeLayout.md).[getBorderMask](DThemeLayout.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getBorderTexture](DThemeLayout.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:597](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L597)

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

[DThemeLayout](DThemeLayout.md).[getBorderWidth](DThemeLayout.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getClearType](DThemeLayout.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

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

[DThemeLayout](DThemeLayout.md).[getColor](DThemeLayout.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getCornerAdjust](DThemeLayout.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L42)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getCornerMask](DThemeLayout.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getCornerRadius](DThemeLayout.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeLayout](DThemeLayout.md).[getCursor](DThemeLayout.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getDirection](DThemeLayout.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L41)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getFontFamilly](DThemeLayout.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getFontSize](DThemeLayout.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getFontStyle](DThemeLayout.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getFontVariant](DThemeLayout.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getFontWeight](DThemeLayout.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getHeight](DThemeLayout.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getInteractive](DThemeLayout.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getLineHeight](DThemeLayout.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getMargin](DThemeLayout.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L40)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getMultiplicity](DThemeLayout.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L43)

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

[DThemeLayout](DThemeLayout.md).[getOutlineAlign](DThemeLayout.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

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

[DThemeLayout](DThemeLayout.md).[getOutlineAlpha](DThemeLayout.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

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

[DThemeLayout](DThemeLayout.md).[getOutlineColor](DThemeLayout.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L635)

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

[DThemeLayout](DThemeLayout.md).[getOutlineMask](DThemeLayout.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

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

[DThemeLayout](DThemeLayout.md).[getOutlineOffset](DThemeLayout.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

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

[DThemeLayout](DThemeLayout.md).[getOutlineWidth](DThemeLayout.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getPaddingBottom](DThemeLayout.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getPaddingLeft](DThemeLayout.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getPaddingRight](DThemeLayout.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getPaddingTop](DThemeLayout.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getReverse](DThemeLayout.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L44)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getShadow](DThemeLayout.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getTitle](DThemeLayout.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L691)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getWeight](DThemeLayout.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getWidth](DThemeLayout.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getX](DThemeLayout.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[getY](DThemeLayout.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[newShadow](DThemeLayout.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeLayout](DThemeLayout.md).[newShadowWeak](DThemeLayout.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:714](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L714)

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

[DThemeLayout](DThemeLayout.md).[newState](DThemeLayout.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L686)
