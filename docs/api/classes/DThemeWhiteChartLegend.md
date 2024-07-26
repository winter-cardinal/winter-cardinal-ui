[Winter Cardinal UI - v0.442.0](../index.md) / DThemeWhiteChartLegend

# Class: DThemeWhiteChartLegend

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhiteBase`](DThemeWhiteBase.md)

  ↳ **`DThemeWhiteChartLegend`**

## Implements

- [`DThemeChartLegend`](../interfaces/DThemeChartLegend.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteChartLegend.md#constructor)

### Methods

- [getAlpha](DThemeWhiteChartLegend.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteChartLegend.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteChartLegend.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteChartLegend.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteChartLegend.md#getborderalign)
- [getBorderAlpha](DThemeWhiteChartLegend.md#getborderalpha)
- [getBorderColor](DThemeWhiteChartLegend.md#getbordercolor)
- [getBorderMask](DThemeWhiteChartLegend.md#getbordermask)
- [getBorderTexture](DThemeWhiteChartLegend.md#getbordertexture)
- [getBorderWidth](DThemeWhiteChartLegend.md#getborderwidth)
- [getClearType](DThemeWhiteChartLegend.md#getcleartype)
- [getColor](DThemeWhiteChartLegend.md#getcolor)
- [getCornerMask](DThemeWhiteChartLegend.md#getcornermask)
- [getCornerRadius](DThemeWhiteChartLegend.md#getcornerradius)
- [getCursor](DThemeWhiteChartLegend.md#getcursor)
- [getFontFamilly](DThemeWhiteChartLegend.md#getfontfamilly)
- [getFontSize](DThemeWhiteChartLegend.md#getfontsize)
- [getFontStyle](DThemeWhiteChartLegend.md#getfontstyle)
- [getFontVariant](DThemeWhiteChartLegend.md#getfontvariant)
- [getFontWeight](DThemeWhiteChartLegend.md#getfontweight)
- [getHeight](DThemeWhiteChartLegend.md#getheight)
- [getInteractive](DThemeWhiteChartLegend.md#getinteractive)
- [getLineHeight](DThemeWhiteChartLegend.md#getlineheight)
- [getOutlineAlign](DThemeWhiteChartLegend.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteChartLegend.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteChartLegend.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteChartLegend.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteChartLegend.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteChartLegend.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteChartLegend.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteChartLegend.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteChartLegend.md#getpaddingright)
- [getPaddingTop](DThemeWhiteChartLegend.md#getpaddingtop)
- [getShadow](DThemeWhiteChartLegend.md#getshadow)
- [getTitle](DThemeWhiteChartLegend.md#gettitle)
- [getWeight](DThemeWhiteChartLegend.md#getweight)
- [getWidth](DThemeWhiteChartLegend.md#getwidth)
- [getX](DThemeWhiteChartLegend.md#getx)
- [getY](DThemeWhiteChartLegend.md#gety)
- [newShadow](DThemeWhiteChartLegend.md#newshadow)
- [newShadowWeak](DThemeWhiteChartLegend.md#newshadowweak)
- [newState](DThemeWhiteChartLegend.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteChartLegend**(): [`DThemeWhiteChartLegend`](DThemeWhiteChartLegend.md)

#### Returns

[`DThemeWhiteChartLegend`](DThemeWhiteChartLegend.md)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[constructor](DThemeWhiteBase.md#constructor)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getAlpha](../interfaces/DThemeChartLegend.md#getalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getAlpha](DThemeWhiteBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBackgroundAlpha](../interfaces/DThemeChartLegend.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundAlpha](DThemeWhiteBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L84)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBackgroundColor](../interfaces/DThemeChartLegend.md#getbackgroundcolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundColor](DThemeWhiteBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L80)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBackgroundTexture](../interfaces/DThemeChartLegend.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundTexture](DThemeWhiteBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L88)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBorderAlign](../interfaces/DThemeChartLegend.md#getborderalign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlign](DThemeWhiteBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L104)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBorderAlpha](../interfaces/DThemeChartLegend.md#getborderalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlpha](DThemeWhiteBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L96)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBorderColor](../interfaces/DThemeChartLegend.md#getbordercolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderColor](DThemeWhiteBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L92)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBorderMask](../interfaces/DThemeChartLegend.md#getbordermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderMask](DThemeWhiteBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBorderTexture](../interfaces/DThemeChartLegend.md#getbordertexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderTexture](DThemeWhiteBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L112)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getBorderWidth](../interfaces/DThemeChartLegend.md#getborderwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderWidth](DThemeWhiteBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getClearType](../interfaces/DThemeChartLegend.md#getcleartype)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getClearType](DThemeWhiteBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L167)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getColor](../interfaces/DThemeChartLegend.md#getcolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getColor](DThemeWhiteBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getCornerMask](../interfaces/DThemeChartLegend.md#getcornermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerMask](DThemeWhiteBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getCornerRadius](../interfaces/DThemeChartLegend.md#getcornerradius)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerRadius](DThemeWhiteBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L132)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getCursor](../interfaces/DThemeChartLegend.md#getcursor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCursor](DThemeWhiteBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getFontFamilly](../interfaces/DThemeChartLegend.md#getfontfamilly)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontFamilly](DThemeWhiteBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getFontSize](../interfaces/DThemeChartLegend.md#getfontsize)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontSize](DThemeWhiteBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getFontStyle](../interfaces/DThemeChartLegend.md#getfontstyle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontStyle](DThemeWhiteBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getFontVariant](../interfaces/DThemeChartLegend.md#getfontvariant)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontVariant](DThemeWhiteBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getFontWeight](../interfaces/DThemeChartLegend.md#getfontweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontWeight](DThemeWhiteBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getHeight](../interfaces/DThemeChartLegend.md#getheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getHeight](DThemeWhiteBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getInteractive](../interfaces/DThemeChartLegend.md#getinteractive)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getInteractive](DThemeWhiteBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L175)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getLineHeight](../interfaces/DThemeChartLegend.md#getlineheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getLineHeight](DThemeWhiteBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getOutlineAlign](../interfaces/DThemeChartLegend.md#getoutlinealign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlign](DThemeWhiteBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L159)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getOutlineAlpha](../interfaces/DThemeChartLegend.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlpha](DThemeWhiteBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L144)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getOutlineColor](../interfaces/DThemeChartLegend.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineColor](DThemeWhiteBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L140)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getOutlineMask](../interfaces/DThemeChartLegend.md#getoutlinemask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineMask](DThemeWhiteBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L163)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getOutlineOffset](../interfaces/DThemeChartLegend.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineOffset](DThemeWhiteBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L155)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getOutlineWidth](../interfaces/DThemeChartLegend.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineWidth](DThemeWhiteBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getPaddingBottom](../interfaces/DThemeChartLegend.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingBottom](DThemeWhiteBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getPaddingLeft](../interfaces/DThemeChartLegend.md#getpaddingleft)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingLeft](DThemeWhiteBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getPaddingRight](../interfaces/DThemeChartLegend.md#getpaddingright)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingRight](DThemeWhiteBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getPaddingTop](../interfaces/DThemeChartLegend.md#getpaddingtop)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingTop](DThemeWhiteBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getShadow](../interfaces/DThemeChartLegend.md#getshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getShadow](DThemeWhiteBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getTitle](../interfaces/DThemeChartLegend.md#gettitle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getTitle](DThemeWhiteBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getWeight](../interfaces/DThemeChartLegend.md#getweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWeight](DThemeWhiteBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getWidth](../interfaces/DThemeChartLegend.md#getwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWidth](DThemeWhiteBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getX](../interfaces/DThemeChartLegend.md#getx)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getX](DThemeWhiteBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[getY](../interfaces/DThemeChartLegend.md#gety)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getY](DThemeWhiteBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[newShadow](../interfaces/DThemeChartLegend.md#newshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadow](DThemeWhiteBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[newShadowWeak](../interfaces/DThemeChartLegend.md#newshadowweak)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadowWeak](DThemeWhiteBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L195)

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

[DThemeChartLegend](../interfaces/DThemeChartLegend.md).[newState](../interfaces/DThemeChartLegend.md#newstate)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newState](DThemeWhiteBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L179)
