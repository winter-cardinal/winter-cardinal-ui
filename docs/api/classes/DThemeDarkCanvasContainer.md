[Winter Cardinal UI - v0.310.1](../index.md) / DThemeDarkCanvasContainer

# Class: DThemeDarkCanvasContainer

[DCanvasContainer](DCanvasContainer.md) theme.

## Hierarchy

- [`DThemeDarkBase`](DThemeDarkBase.md)

  ↳ **`DThemeDarkCanvasContainer`**

  ↳↳ [`DThemeDarkDiagramBase`](DThemeDarkDiagramBase.md)

## Implements

- [`DThemeCanvasContainer`](../interfaces/DThemeCanvasContainer.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkCanvasContainer.md#constructor)

### Methods

- [getAlpha](DThemeDarkCanvasContainer.md#getalpha)
- [getBackgroundAlpha](DThemeDarkCanvasContainer.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkCanvasContainer.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkCanvasContainer.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkCanvasContainer.md#getborderalign)
- [getBorderAlpha](DThemeDarkCanvasContainer.md#getborderalpha)
- [getBorderColor](DThemeDarkCanvasContainer.md#getbordercolor)
- [getBorderMask](DThemeDarkCanvasContainer.md#getbordermask)
- [getBorderTexture](DThemeDarkCanvasContainer.md#getbordertexture)
- [getBorderWidth](DThemeDarkCanvasContainer.md#getborderwidth)
- [getClearType](DThemeDarkCanvasContainer.md#getcleartype)
- [getColor](DThemeDarkCanvasContainer.md#getcolor)
- [getCornerMask](DThemeDarkCanvasContainer.md#getcornermask)
- [getCornerRadius](DThemeDarkCanvasContainer.md#getcornerradius)
- [getCursor](DThemeDarkCanvasContainer.md#getcursor)
- [getFontFamilly](DThemeDarkCanvasContainer.md#getfontfamilly)
- [getFontSize](DThemeDarkCanvasContainer.md#getfontsize)
- [getFontStyle](DThemeDarkCanvasContainer.md#getfontstyle)
- [getFontVariant](DThemeDarkCanvasContainer.md#getfontvariant)
- [getFontWeight](DThemeDarkCanvasContainer.md#getfontweight)
- [getHeight](DThemeDarkCanvasContainer.md#getheight)
- [getInteractive](DThemeDarkCanvasContainer.md#getinteractive)
- [getLineHeight](DThemeDarkCanvasContainer.md#getlineheight)
- [getOutlineAlign](DThemeDarkCanvasContainer.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkCanvasContainer.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkCanvasContainer.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkCanvasContainer.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkCanvasContainer.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkCanvasContainer.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkCanvasContainer.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkCanvasContainer.md#getpaddingleft)
- [getPaddingRight](DThemeDarkCanvasContainer.md#getpaddingright)
- [getPaddingTop](DThemeDarkCanvasContainer.md#getpaddingtop)
- [getShadow](DThemeDarkCanvasContainer.md#getshadow)
- [getTitle](DThemeDarkCanvasContainer.md#gettitle)
- [getWeight](DThemeDarkCanvasContainer.md#getweight)
- [getWidth](DThemeDarkCanvasContainer.md#getwidth)
- [getX](DThemeDarkCanvasContainer.md#getx)
- [getY](DThemeDarkCanvasContainer.md#gety)
- [isOverflowMaskEnabled](DThemeDarkCanvasContainer.md#isoverflowmaskenabled)
- [newShadow](DThemeDarkCanvasContainer.md#newshadow)
- [newShadowWeak](DThemeDarkCanvasContainer.md#newshadowweak)
- [newState](DThemeDarkCanvasContainer.md#newstate)

## Constructors

### constructor

• **new DThemeDarkCanvasContainer**()

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getAlpha](../interfaces/DThemeCanvasContainer.md#getalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getAlpha](DThemeDarkBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBackgroundAlpha](../interfaces/DThemeCanvasContainer.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundAlpha](DThemeDarkBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L84)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBackgroundColor](../interfaces/DThemeCanvasContainer.md#getbackgroundcolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundColor](DThemeDarkBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L12)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBackgroundTexture](../interfaces/DThemeCanvasContainer.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundTexture](DThemeDarkBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L88)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBorderAlign](../interfaces/DThemeCanvasContainer.md#getborderalign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlign](DThemeDarkBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L104)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBorderAlpha](../interfaces/DThemeCanvasContainer.md#getborderalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlpha](DThemeDarkBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L96)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBorderColor](../interfaces/DThemeCanvasContainer.md#getbordercolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBorderColor](DThemeDarkBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L16)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBorderMask](../interfaces/DThemeCanvasContainer.md#getbordermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderMask](DThemeDarkBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBorderTexture](../interfaces/DThemeCanvasContainer.md#getbordertexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderTexture](DThemeDarkBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L112)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getBorderWidth](../interfaces/DThemeCanvasContainer.md#getborderwidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderWidth](DThemeDarkBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getClearType](../interfaces/DThemeCanvasContainer.md#getcleartype)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getClearType](DThemeDarkBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L167)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getColor](../interfaces/DThemeCanvasContainer.md#getcolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getColor](DThemeDarkBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getCornerMask](../interfaces/DThemeCanvasContainer.md#getcornermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerMask](DThemeDarkBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getCornerRadius](../interfaces/DThemeCanvasContainer.md#getcornerradius)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerRadius](DThemeDarkBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L132)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getCursor](../interfaces/DThemeCanvasContainer.md#getcursor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCursor](DThemeDarkBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getFontFamilly](../interfaces/DThemeCanvasContainer.md#getfontfamilly)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontFamilly](DThemeDarkBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getFontSize](../interfaces/DThemeCanvasContainer.md#getfontsize)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontSize](DThemeDarkBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getFontStyle](../interfaces/DThemeCanvasContainer.md#getfontstyle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontStyle](DThemeDarkBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getFontVariant](../interfaces/DThemeCanvasContainer.md#getfontvariant)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontVariant](DThemeDarkBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getFontWeight](../interfaces/DThemeCanvasContainer.md#getfontweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontWeight](DThemeDarkBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getHeight](../interfaces/DThemeCanvasContainer.md#getheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getHeight](DThemeDarkBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getInteractive](../interfaces/DThemeCanvasContainer.md#getinteractive)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getInteractive](DThemeDarkBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L40)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getLineHeight](../interfaces/DThemeCanvasContainer.md#getlineheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getLineHeight](DThemeDarkBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getOutlineAlign](../interfaces/DThemeCanvasContainer.md#getoutlinealign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlign](DThemeDarkBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L159)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getOutlineAlpha](../interfaces/DThemeCanvasContainer.md#getoutlinealpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlpha](DThemeDarkBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L144)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getOutlineColor](../interfaces/DThemeCanvasContainer.md#getoutlinecolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineColor](DThemeDarkBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L140)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getOutlineMask](../interfaces/DThemeCanvasContainer.md#getoutlinemask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineMask](DThemeDarkBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L163)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getOutlineOffset](../interfaces/DThemeCanvasContainer.md#getoutlineoffset)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineOffset](DThemeDarkBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L155)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getOutlineWidth](../interfaces/DThemeCanvasContainer.md#getoutlinewidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineWidth](DThemeDarkBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getPaddingBottom](../interfaces/DThemeCanvasContainer.md#getpaddingbottom)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingBottom](DThemeDarkBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L32)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getPaddingLeft](../interfaces/DThemeCanvasContainer.md#getpaddingleft)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingLeft](DThemeDarkBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L20)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getPaddingRight](../interfaces/DThemeCanvasContainer.md#getpaddingright)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingRight](DThemeDarkBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L28)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getPaddingTop](../interfaces/DThemeCanvasContainer.md#getpaddingtop)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingTop](DThemeDarkBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L24)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getShadow](../interfaces/DThemeCanvasContainer.md#getshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getShadow](DThemeDarkBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getTitle](../interfaces/DThemeCanvasContainer.md#gettitle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getTitle](DThemeDarkBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getWeight](../interfaces/DThemeCanvasContainer.md#getweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWeight](DThemeDarkBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getWidth](../interfaces/DThemeCanvasContainer.md#getwidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWidth](DThemeDarkBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getX](../interfaces/DThemeCanvasContainer.md#getx)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getX](DThemeDarkBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[getY](../interfaces/DThemeCanvasContainer.md#gety)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getY](DThemeDarkBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[isOverflowMaskEnabled](../interfaces/DThemeCanvasContainer.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L36)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[newShadow](../interfaces/DThemeCanvasContainer.md#newshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadow](DThemeDarkBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[newShadowWeak](../interfaces/DThemeCanvasContainer.md#newshadowweak)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadowWeak](DThemeDarkBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L195)

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

[DThemeCanvasContainer](../interfaces/DThemeCanvasContainer.md).[newState](../interfaces/DThemeCanvasContainer.md#newstate)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newState](DThemeDarkBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L179)
