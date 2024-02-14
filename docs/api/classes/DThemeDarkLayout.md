[Winter Cardinal UI - v0.407.0](../index.md) / DThemeDarkLayout

# Class: DThemeDarkLayout

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkBase`](DThemeDarkBase.md)

  ↳ **`DThemeDarkLayout`**

  ↳↳ [`DThemeDarkLayoutHorizontal`](DThemeDarkLayoutHorizontal.md)

  ↳↳ [`DThemeDarkLayoutVertical`](DThemeDarkLayoutVertical.md)

## Implements

- [`DThemeLayout`](../interfaces/DThemeLayout.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkLayout.md#constructor)

### Methods

- [getAlpha](DThemeDarkLayout.md#getalpha)
- [getBackgroundAlpha](DThemeDarkLayout.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkLayout.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkLayout.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkLayout.md#getborderalign)
- [getBorderAlpha](DThemeDarkLayout.md#getborderalpha)
- [getBorderColor](DThemeDarkLayout.md#getbordercolor)
- [getBorderMask](DThemeDarkLayout.md#getbordermask)
- [getBorderTexture](DThemeDarkLayout.md#getbordertexture)
- [getBorderWidth](DThemeDarkLayout.md#getborderwidth)
- [getClearType](DThemeDarkLayout.md#getcleartype)
- [getColor](DThemeDarkLayout.md#getcolor)
- [getCornerAdjust](DThemeDarkLayout.md#getcorneradjust)
- [getCornerMask](DThemeDarkLayout.md#getcornermask)
- [getCornerRadius](DThemeDarkLayout.md#getcornerradius)
- [getCursor](DThemeDarkLayout.md#getcursor)
- [getDirection](DThemeDarkLayout.md#getdirection)
- [getFontFamilly](DThemeDarkLayout.md#getfontfamilly)
- [getFontSize](DThemeDarkLayout.md#getfontsize)
- [getFontStyle](DThemeDarkLayout.md#getfontstyle)
- [getFontVariant](DThemeDarkLayout.md#getfontvariant)
- [getFontWeight](DThemeDarkLayout.md#getfontweight)
- [getHeight](DThemeDarkLayout.md#getheight)
- [getInteractive](DThemeDarkLayout.md#getinteractive)
- [getLineHeight](DThemeDarkLayout.md#getlineheight)
- [getMargin](DThemeDarkLayout.md#getmargin)
- [getMultiplicity](DThemeDarkLayout.md#getmultiplicity)
- [getOutlineAlign](DThemeDarkLayout.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkLayout.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkLayout.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkLayout.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkLayout.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkLayout.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkLayout.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkLayout.md#getpaddingleft)
- [getPaddingRight](DThemeDarkLayout.md#getpaddingright)
- [getPaddingTop](DThemeDarkLayout.md#getpaddingtop)
- [getReverse](DThemeDarkLayout.md#getreverse)
- [getShadow](DThemeDarkLayout.md#getshadow)
- [getTitle](DThemeDarkLayout.md#gettitle)
- [getWeight](DThemeDarkLayout.md#getweight)
- [getWidth](DThemeDarkLayout.md#getwidth)
- [getX](DThemeDarkLayout.md#getx)
- [getY](DThemeDarkLayout.md#gety)
- [newShadow](DThemeDarkLayout.md#newshadow)
- [newShadowWeak](DThemeDarkLayout.md#newshadowweak)
- [newState](DThemeDarkLayout.md#newstate)

## Constructors

### constructor

• **new DThemeDarkLayout**(): [`DThemeDarkLayout`](DThemeDarkLayout.md)

#### Returns

[`DThemeDarkLayout`](DThemeDarkLayout.md)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[constructor](DThemeDarkBase.md#constructor)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getAlpha](../interfaces/DThemeLayout.md#getalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getAlpha](DThemeDarkBase.md#getalpha)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getBackgroundAlpha](../interfaces/DThemeLayout.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundAlpha](DThemeDarkBase.md#getbackgroundalpha)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getBackgroundColor](../interfaces/DThemeLayout.md#getbackgroundcolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundColor](DThemeDarkBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getBackgroundTexture](../interfaces/DThemeLayout.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundTexture](DThemeDarkBase.md#getbackgroundtexture)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getBorderAlign](../interfaces/DThemeLayout.md#getborderalign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlign](DThemeDarkBase.md#getborderalign)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getBorderAlpha](../interfaces/DThemeLayout.md#getborderalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlpha](DThemeDarkBase.md#getborderalpha)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getBorderColor](../interfaces/DThemeLayout.md#getbordercolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBorderColor](DThemeDarkBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L17)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getBorderMask](../interfaces/DThemeLayout.md#getbordermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderMask](DThemeDarkBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getBorderTexture](../interfaces/DThemeLayout.md#getbordertexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderTexture](DThemeDarkBase.md#getbordertexture)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getBorderWidth](../interfaces/DThemeLayout.md#getborderwidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderWidth](DThemeDarkBase.md#getborderwidth)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getClearType](../interfaces/DThemeLayout.md#getcleartype)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getClearType](DThemeDarkBase.md#getcleartype)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getColor](../interfaces/DThemeLayout.md#getcolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getColor](DThemeDarkBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getCornerAdjust](../interfaces/DThemeLayout.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getCornerMask](../interfaces/DThemeLayout.md#getcornermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerMask](DThemeDarkBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getCornerRadius](../interfaces/DThemeLayout.md#getcornerradius)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerRadius](DThemeDarkBase.md#getcornerradius)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getCursor](../interfaces/DThemeLayout.md#getcursor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCursor](DThemeDarkBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getDirection](../interfaces/DThemeLayout.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L34)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getFontFamilly](../interfaces/DThemeLayout.md#getfontfamilly)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontFamilly](DThemeDarkBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getFontSize](../interfaces/DThemeLayout.md#getfontsize)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontSize](DThemeDarkBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getFontStyle](../interfaces/DThemeLayout.md#getfontstyle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontStyle](DThemeDarkBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getFontVariant](../interfaces/DThemeLayout.md#getfontvariant)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontVariant](DThemeDarkBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getFontWeight](../interfaces/DThemeLayout.md#getfontweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontWeight](DThemeDarkBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getHeight](../interfaces/DThemeLayout.md#getheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getHeight](DThemeDarkBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getInteractive](../interfaces/DThemeLayout.md#getinteractive)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getInteractive](DThemeDarkBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getLineHeight](../interfaces/DThemeLayout.md#getlineheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getLineHeight](DThemeDarkBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getMargin](../interfaces/DThemeLayout.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L21)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getMultiplicity](../interfaces/DThemeLayout.md#getmultiplicity)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getOutlineAlign](../interfaces/DThemeLayout.md#getoutlinealign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlign](DThemeDarkBase.md#getoutlinealign)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getOutlineAlpha](../interfaces/DThemeLayout.md#getoutlinealpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlpha](DThemeDarkBase.md#getoutlinealpha)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getOutlineColor](../interfaces/DThemeLayout.md#getoutlinecolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineColor](DThemeDarkBase.md#getoutlinecolor)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getOutlineMask](../interfaces/DThemeLayout.md#getoutlinemask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineMask](DThemeDarkBase.md#getoutlinemask)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getOutlineOffset](../interfaces/DThemeLayout.md#getoutlineoffset)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineOffset](DThemeDarkBase.md#getoutlineoffset)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getOutlineWidth](../interfaces/DThemeLayout.md#getoutlinewidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineWidth](DThemeDarkBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getPaddingBottom](../interfaces/DThemeLayout.md#getpaddingbottom)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingBottom](DThemeDarkBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getPaddingLeft](../interfaces/DThemeLayout.md#getpaddingleft)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingLeft](DThemeDarkBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getPaddingRight](../interfaces/DThemeLayout.md#getpaddingright)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingRight](DThemeDarkBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getPaddingTop](../interfaces/DThemeLayout.md#getpaddingtop)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingTop](DThemeDarkBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L124)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getReverse](../interfaces/DThemeLayout.md#getreverse)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getShadow](../interfaces/DThemeLayout.md#getshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getShadow](DThemeDarkBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getTitle](../interfaces/DThemeLayout.md#gettitle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getTitle](DThemeDarkBase.md#gettitle)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[getWeight](../interfaces/DThemeLayout.md#getweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWeight](DThemeDarkBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getWidth](../interfaces/DThemeLayout.md#getwidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWidth](DThemeDarkBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getX](../interfaces/DThemeLayout.md#getx)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getX](DThemeDarkBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[getY](../interfaces/DThemeLayout.md#gety)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getY](DThemeDarkBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[newShadow](../interfaces/DThemeLayout.md#newshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadow](DThemeDarkBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeLayout](../interfaces/DThemeLayout.md).[newShadowWeak](../interfaces/DThemeLayout.md#newshadowweak)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadowWeak](DThemeDarkBase.md#newshadowweak)

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

[DThemeLayout](../interfaces/DThemeLayout.md).[newState](../interfaces/DThemeLayout.md#newstate)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[newState](DThemeDarkBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L29)
