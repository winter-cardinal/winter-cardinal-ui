[Winter Cardinal UI - v0.414.0](../index.md) / DThemeDarkChartLegendItem

# Class: DThemeDarkChartLegendItem

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkBase`](DThemeDarkBase.md)

  ↳ **`DThemeDarkChartLegendItem`**

## Implements

- [`DThemeChartLegendItem`](../interfaces/DThemeChartLegendItem.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkChartLegendItem.md#constructor)

### Methods

- [getAlpha](DThemeDarkChartLegendItem.md#getalpha)
- [getBackgroundAlpha](DThemeDarkChartLegendItem.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkChartLegendItem.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkChartLegendItem.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkChartLegendItem.md#getborderalign)
- [getBorderAlpha](DThemeDarkChartLegendItem.md#getborderalpha)
- [getBorderColor](DThemeDarkChartLegendItem.md#getbordercolor)
- [getBorderMask](DThemeDarkChartLegendItem.md#getbordermask)
- [getBorderTexture](DThemeDarkChartLegendItem.md#getbordertexture)
- [getBorderWidth](DThemeDarkChartLegendItem.md#getborderwidth)
- [getClearType](DThemeDarkChartLegendItem.md#getcleartype)
- [getColor](DThemeDarkChartLegendItem.md#getcolor)
- [getCornerMask](DThemeDarkChartLegendItem.md#getcornermask)
- [getCornerRadius](DThemeDarkChartLegendItem.md#getcornerradius)
- [getCursor](DThemeDarkChartLegendItem.md#getcursor)
- [getFontFamilly](DThemeDarkChartLegendItem.md#getfontfamilly)
- [getFontSize](DThemeDarkChartLegendItem.md#getfontsize)
- [getFontStyle](DThemeDarkChartLegendItem.md#getfontstyle)
- [getFontVariant](DThemeDarkChartLegendItem.md#getfontvariant)
- [getFontWeight](DThemeDarkChartLegendItem.md#getfontweight)
- [getHeight](DThemeDarkChartLegendItem.md#getheight)
- [getInteractive](DThemeDarkChartLegendItem.md#getinteractive)
- [getLineHeight](DThemeDarkChartLegendItem.md#getlineheight)
- [getOutlineAlign](DThemeDarkChartLegendItem.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkChartLegendItem.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkChartLegendItem.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkChartLegendItem.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkChartLegendItem.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkChartLegendItem.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkChartLegendItem.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkChartLegendItem.md#getpaddingleft)
- [getPaddingRight](DThemeDarkChartLegendItem.md#getpaddingright)
- [getPaddingTop](DThemeDarkChartLegendItem.md#getpaddingtop)
- [getShadow](DThemeDarkChartLegendItem.md#getshadow)
- [getTitle](DThemeDarkChartLegendItem.md#gettitle)
- [getWeight](DThemeDarkChartLegendItem.md#getweight)
- [getWidth](DThemeDarkChartLegendItem.md#getwidth)
- [getX](DThemeDarkChartLegendItem.md#getx)
- [getY](DThemeDarkChartLegendItem.md#gety)
- [newShadow](DThemeDarkChartLegendItem.md#newshadow)
- [newShadowWeak](DThemeDarkChartLegendItem.md#newshadowweak)
- [newState](DThemeDarkChartLegendItem.md#newstate)

## Constructors

### constructor

• **new DThemeDarkChartLegendItem**(): [`DThemeDarkChartLegendItem`](DThemeDarkChartLegendItem.md)

#### Returns

[`DThemeDarkChartLegendItem`](DThemeDarkChartLegendItem.md)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getAlpha](../interfaces/DThemeChartLegendItem.md#getalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getAlpha](DThemeDarkBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBackgroundAlpha](../interfaces/DThemeChartLegendItem.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundAlpha](DThemeDarkBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L84)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBackgroundColor](../interfaces/DThemeChartLegendItem.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundColor](DThemeDarkBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L80)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBackgroundTexture](../interfaces/DThemeChartLegendItem.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundTexture](DThemeDarkBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L88)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBorderAlign](../interfaces/DThemeChartLegendItem.md#getborderalign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlign](DThemeDarkBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L104)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBorderAlpha](../interfaces/DThemeChartLegendItem.md#getborderalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlpha](DThemeDarkBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L96)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBorderColor](../interfaces/DThemeChartLegendItem.md#getbordercolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderColor](DThemeDarkBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L92)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBorderMask](../interfaces/DThemeChartLegendItem.md#getbordermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderMask](DThemeDarkBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBorderTexture](../interfaces/DThemeChartLegendItem.md#getbordertexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderTexture](DThemeDarkBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L112)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getBorderWidth](../interfaces/DThemeChartLegendItem.md#getborderwidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderWidth](DThemeDarkBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getClearType](../interfaces/DThemeChartLegendItem.md#getcleartype)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getClearType](DThemeDarkBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L167)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getColor](../interfaces/DThemeChartLegendItem.md#getcolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getColor](DThemeDarkBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getCornerMask](../interfaces/DThemeChartLegendItem.md#getcornermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerMask](DThemeDarkBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getCornerRadius](../interfaces/DThemeChartLegendItem.md#getcornerradius)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerRadius](DThemeDarkBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L132)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getCursor](../interfaces/DThemeChartLegendItem.md#getcursor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCursor](DThemeDarkBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getFontFamilly](../interfaces/DThemeChartLegendItem.md#getfontfamilly)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontFamilly](DThemeDarkBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getFontSize](../interfaces/DThemeChartLegendItem.md#getfontsize)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontSize](DThemeDarkBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getFontStyle](../interfaces/DThemeChartLegendItem.md#getfontstyle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontStyle](DThemeDarkBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getFontVariant](../interfaces/DThemeChartLegendItem.md#getfontvariant)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontVariant](DThemeDarkBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getFontWeight](../interfaces/DThemeChartLegendItem.md#getfontweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontWeight](DThemeDarkBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getHeight](../interfaces/DThemeChartLegendItem.md#getheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getHeight](DThemeDarkBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getInteractive](../interfaces/DThemeChartLegendItem.md#getinteractive)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getInteractive](DThemeDarkBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L175)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getLineHeight](../interfaces/DThemeChartLegendItem.md#getlineheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getLineHeight](DThemeDarkBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getOutlineAlign](../interfaces/DThemeChartLegendItem.md#getoutlinealign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlign](DThemeDarkBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L159)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getOutlineAlpha](../interfaces/DThemeChartLegendItem.md#getoutlinealpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlpha](DThemeDarkBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L144)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getOutlineColor](../interfaces/DThemeChartLegendItem.md#getoutlinecolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineColor](DThemeDarkBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L140)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getOutlineMask](../interfaces/DThemeChartLegendItem.md#getoutlinemask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineMask](DThemeDarkBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L163)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getOutlineOffset](../interfaces/DThemeChartLegendItem.md#getoutlineoffset)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineOffset](DThemeDarkBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L155)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getOutlineWidth](../interfaces/DThemeChartLegendItem.md#getoutlinewidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineWidth](DThemeDarkBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getPaddingBottom](../interfaces/DThemeChartLegendItem.md#getpaddingbottom)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingBottom](DThemeDarkBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getPaddingLeft](../interfaces/DThemeChartLegendItem.md#getpaddingleft)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingLeft](DThemeDarkBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getPaddingRight](../interfaces/DThemeChartLegendItem.md#getpaddingright)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingRight](DThemeDarkBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getPaddingTop](../interfaces/DThemeChartLegendItem.md#getpaddingtop)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingTop](DThemeDarkBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L124)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getShadow](../interfaces/DThemeChartLegendItem.md#getshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getShadow](DThemeDarkBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getTitle](../interfaces/DThemeChartLegendItem.md#gettitle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getTitle](DThemeDarkBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getWeight](../interfaces/DThemeChartLegendItem.md#getweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWeight](DThemeDarkBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getWidth](../interfaces/DThemeChartLegendItem.md#getwidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWidth](DThemeDarkBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getX](../interfaces/DThemeChartLegendItem.md#getx)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getX](DThemeDarkBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[getY](../interfaces/DThemeChartLegendItem.md#gety)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getY](DThemeDarkBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[newShadow](../interfaces/DThemeChartLegendItem.md#newshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadow](DThemeDarkBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[newShadowWeak](../interfaces/DThemeChartLegendItem.md#newshadowweak)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadowWeak](DThemeDarkBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L195)

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

[DThemeChartLegendItem](../interfaces/DThemeChartLegendItem.md).[newState](../interfaces/DThemeChartLegendItem.md#newstate)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newState](DThemeDarkBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L179)
