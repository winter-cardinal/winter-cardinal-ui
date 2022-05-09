[Winter Cardinal UI - v0.164.0](../index.md) / DThemeDarkBase

# Class: DThemeDarkBase

## Hierarchy

- [`DThemeDarkFont`](DThemeDarkFont.md)

  ↳ **`DThemeDarkBase`**

  ↳↳ [`DThemeDarkBoard`](DThemeDarkBoard.md)

  ↳↳ [`DThemeDarkCanvas`](DThemeDarkCanvas.md)

  ↳↳ [`DThemeDarkCanvasContainer`](DThemeDarkCanvasContainer.md)

  ↳↳ [`DThemeDarkChart`](DThemeDarkChart.md)

  ↳↳ [`DThemeDarkChartLegend`](DThemeDarkChartLegend.md)

  ↳↳ [`DThemeDarkChartLegendItem`](DThemeDarkChartLegendItem.md)

  ↳↳ [`DThemeDarkChartOverview`](DThemeDarkChartOverview.md)

  ↳↳ [`DThemeDarkChartPlotArea`](DThemeDarkChartPlotArea.md)

  ↳↳ [`DThemeDarkContent`](DThemeDarkContent.md)

  ↳↳ [`DThemeDarkDialog`](DThemeDarkDialog.md)

  ↳↳ [`DThemeDarkLayoutSpace`](DThemeDarkLayoutSpace.md)

  ↳↳ [`DThemeDarkLayout`](DThemeDarkLayout.md)

  ↳↳ [`DThemeDarkPane`](DThemeDarkPane.md)

  ↳↳ [`DThemeDarkPickerColor`](DThemeDarkPickerColor.md)

  ↳↳ [`DThemeDarkPickerColorGradient`](DThemeDarkPickerColorGradient.md)

  ↳↳ [`DThemeDarkPickerDatetimeSpace`](DThemeDarkPickerDatetimeSpace.md)

  ↳↳ [`DThemeDarkPickerTime`](DThemeDarkPickerTime.md)

  ↳↳ [`DThemeDarkScrollBar`](DThemeDarkScrollBar.md)

  ↳↳ [`DThemeDarkScrollBarThumb`](DThemeDarkScrollBarThumb.md)

  ↳↳ [`DThemeDarkSlider`](DThemeDarkSlider.md)

  ↳↳ [`DThemeDarkTableBody`](DThemeDarkTableBody.md)

  ↳↳ [`DThemeDarkTextBase`](DThemeDarkTextBase.md)

## Implements

- [`DThemeBase`](../interfaces/DThemeBase.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkBase.md#constructor)

### Methods

- [getAlpha](DThemeDarkBase.md#getalpha)
- [getBackgroundAlpha](DThemeDarkBase.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkBase.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkBase.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkBase.md#getborderalign)
- [getBorderAlpha](DThemeDarkBase.md#getborderalpha)
- [getBorderColor](DThemeDarkBase.md#getbordercolor)
- [getBorderMask](DThemeDarkBase.md#getbordermask)
- [getBorderTexture](DThemeDarkBase.md#getbordertexture)
- [getBorderWidth](DThemeDarkBase.md#getborderwidth)
- [getClearType](DThemeDarkBase.md#getcleartype)
- [getColor](DThemeDarkBase.md#getcolor)
- [getCornerMask](DThemeDarkBase.md#getcornermask)
- [getCornerRadius](DThemeDarkBase.md#getcornerradius)
- [getCursor](DThemeDarkBase.md#getcursor)
- [getFontFamilly](DThemeDarkBase.md#getfontfamilly)
- [getFontSize](DThemeDarkBase.md#getfontsize)
- [getFontStyle](DThemeDarkBase.md#getfontstyle)
- [getFontVariant](DThemeDarkBase.md#getfontvariant)
- [getFontWeight](DThemeDarkBase.md#getfontweight)
- [getHeight](DThemeDarkBase.md#getheight)
- [getInteractive](DThemeDarkBase.md#getinteractive)
- [getLineHeight](DThemeDarkBase.md#getlineheight)
- [getOutlineAlign](DThemeDarkBase.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkBase.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkBase.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkBase.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkBase.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkBase.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkBase.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkBase.md#getpaddingleft)
- [getPaddingRight](DThemeDarkBase.md#getpaddingright)
- [getPaddingTop](DThemeDarkBase.md#getpaddingtop)
- [getShadow](DThemeDarkBase.md#getshadow)
- [getTitle](DThemeDarkBase.md#gettitle)
- [getWeight](DThemeDarkBase.md#getweight)
- [getWidth](DThemeDarkBase.md#getwidth)
- [getX](DThemeDarkBase.md#getx)
- [getY](DThemeDarkBase.md#gety)
- [newShadow](DThemeDarkBase.md#newshadow)
- [newShadowWeak](DThemeDarkBase.md#newshadowweak)
- [newState](DThemeDarkBase.md#newstate)

## Constructors

### constructor

• **new DThemeDarkBase**()

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[constructor](DThemeDarkFont.md#constructor)

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

[DThemeBase](../interfaces/DThemeBase.md).[getAlpha](../interfaces/DThemeBase.md#getalpha)

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[getAlpha](DThemeDarkFont.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBackgroundAlpha](../interfaces/DThemeBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBackgroundColor](../interfaces/DThemeBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L70)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBackgroundTexture](../interfaces/DThemeBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBorderAlign](../interfaces/DThemeBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBorderAlpha](../interfaces/DThemeBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBorderColor](../interfaces/DThemeBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L82)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBorderMask](../interfaces/DThemeBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBorderTexture](../interfaces/DThemeBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getBorderWidth](../interfaces/DThemeBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getClearType](../interfaces/DThemeBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeBase](../interfaces/DThemeBase.md).[getColor](../interfaces/DThemeBase.md#getcolor)

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[getColor](DThemeDarkFont.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getCornerMask](../interfaces/DThemeBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getCornerRadius](../interfaces/DThemeBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeBase](../interfaces/DThemeBase.md).[getCursor](../interfaces/DThemeBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getFontFamilly](../interfaces/DThemeBase.md#getfontfamilly)

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[getFontFamilly](DThemeDarkFont.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getFontSize](../interfaces/DThemeBase.md#getfontsize)

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[getFontSize](DThemeDarkFont.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getFontStyle](../interfaces/DThemeBase.md#getfontstyle)

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[getFontStyle](DThemeDarkFont.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getFontVariant](../interfaces/DThemeBase.md#getfontvariant)

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[getFontVariant](DThemeDarkFont.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getFontWeight](../interfaces/DThemeBase.md#getfontweight)

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[getFontWeight](DThemeDarkFont.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getHeight](../interfaces/DThemeBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L62)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getInteractive](../interfaces/DThemeBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L165)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getLineHeight](../interfaces/DThemeBase.md#getlineheight)

#### Inherited from

[DThemeDarkFont](DThemeDarkFont.md).[getLineHeight](DThemeDarkFont.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getOutlineAlign](../interfaces/DThemeBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getOutlineAlpha](../interfaces/DThemeBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getOutlineColor](../interfaces/DThemeBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getOutlineMask](../interfaces/DThemeBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getOutlineOffset](../interfaces/DThemeBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getOutlineWidth](../interfaces/DThemeBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getPaddingBottom](../interfaces/DThemeBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getPaddingLeft](../interfaces/DThemeBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getPaddingRight](../interfaces/DThemeBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getPaddingTop](../interfaces/DThemeBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getShadow](../interfaces/DThemeBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getTitle](../interfaces/DThemeBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getWeight](../interfaces/DThemeBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getWidth](../interfaces/DThemeBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getX](../interfaces/DThemeBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[getY](../interfaces/DThemeBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[newShadow](../interfaces/DThemeBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeBase](../interfaces/DThemeBase.md).[newShadowWeak](../interfaces/DThemeBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeBase](../interfaces/DThemeBase.md).[newState](../interfaces/DThemeBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L169)
