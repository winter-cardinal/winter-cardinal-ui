[Winter Cardinal UI - v0.165.0](../index.md) / DThemeDarkScrollBarThumb

# Class: DThemeDarkScrollBarThumb

## Hierarchy

- [`DThemeDarkBase`](DThemeDarkBase.md)

  ↳ **`DThemeDarkScrollBarThumb`**

## Implements

- [`DThemeScrollBarThumb`](../interfaces/DThemeScrollBarThumb.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkScrollBarThumb.md#constructor)

### Properties

- [BORDER\_COLOR](DThemeDarkScrollBarThumb.md#border_color)

### Methods

- [getAlpha](DThemeDarkScrollBarThumb.md#getalpha)
- [getBackgroundAlpha](DThemeDarkScrollBarThumb.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkScrollBarThumb.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkScrollBarThumb.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkScrollBarThumb.md#getborderalign)
- [getBorderAlpha](DThemeDarkScrollBarThumb.md#getborderalpha)
- [getBorderColor](DThemeDarkScrollBarThumb.md#getbordercolor)
- [getBorderMask](DThemeDarkScrollBarThumb.md#getbordermask)
- [getBorderTexture](DThemeDarkScrollBarThumb.md#getbordertexture)
- [getBorderWidth](DThemeDarkScrollBarThumb.md#getborderwidth)
- [getClearType](DThemeDarkScrollBarThumb.md#getcleartype)
- [getColor](DThemeDarkScrollBarThumb.md#getcolor)
- [getCornerMask](DThemeDarkScrollBarThumb.md#getcornermask)
- [getCornerRadius](DThemeDarkScrollBarThumb.md#getcornerradius)
- [getCursor](DThemeDarkScrollBarThumb.md#getcursor)
- [getFontFamilly](DThemeDarkScrollBarThumb.md#getfontfamilly)
- [getFontSize](DThemeDarkScrollBarThumb.md#getfontsize)
- [getFontStyle](DThemeDarkScrollBarThumb.md#getfontstyle)
- [getFontVariant](DThemeDarkScrollBarThumb.md#getfontvariant)
- [getFontWeight](DThemeDarkScrollBarThumb.md#getfontweight)
- [getHeight](DThemeDarkScrollBarThumb.md#getheight)
- [getInteractive](DThemeDarkScrollBarThumb.md#getinteractive)
- [getLineHeight](DThemeDarkScrollBarThumb.md#getlineheight)
- [getOutlineAlign](DThemeDarkScrollBarThumb.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkScrollBarThumb.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkScrollBarThumb.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkScrollBarThumb.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkScrollBarThumb.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkScrollBarThumb.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkScrollBarThumb.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkScrollBarThumb.md#getpaddingleft)
- [getPaddingRight](DThemeDarkScrollBarThumb.md#getpaddingright)
- [getPaddingTop](DThemeDarkScrollBarThumb.md#getpaddingtop)
- [getShadow](DThemeDarkScrollBarThumb.md#getshadow)
- [getThumbMinimumLength](DThemeDarkScrollBarThumb.md#getthumbminimumlength)
- [getTitle](DThemeDarkScrollBarThumb.md#gettitle)
- [getWeight](DThemeDarkScrollBarThumb.md#getweight)
- [getWidth](DThemeDarkScrollBarThumb.md#getwidth)
- [getX](DThemeDarkScrollBarThumb.md#getx)
- [getY](DThemeDarkScrollBarThumb.md#gety)
- [newShadow](DThemeDarkScrollBarThumb.md#newshadow)
- [newShadowWeak](DThemeDarkScrollBarThumb.md#newshadowweak)
- [newState](DThemeDarkScrollBarThumb.md#newstate)

## Constructors

### constructor

• **new DThemeDarkScrollBarThumb**()

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[constructor](DThemeDarkBase.md#constructor)

## Properties

### BORDER\_COLOR

• **BORDER\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L14)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getAlpha](../interfaces/DThemeScrollBarThumb.md#getalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getAlpha](DThemeDarkBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBackgroundAlpha](../interfaces/DThemeScrollBarThumb.md#getbackgroundalpha)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundAlpha](DThemeDarkBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L20)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBackgroundColor](../interfaces/DThemeScrollBarThumb.md#getbackgroundcolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundColor](DThemeDarkBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L16)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBackgroundTexture](../interfaces/DThemeScrollBarThumb.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundTexture](DThemeDarkBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBorderAlign](../interfaces/DThemeScrollBarThumb.md#getborderalign)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlign](DThemeDarkBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L42)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBorderAlpha](../interfaces/DThemeScrollBarThumb.md#getborderalpha)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlpha](DThemeDarkBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L28)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBorderColor](../interfaces/DThemeScrollBarThumb.md#getbordercolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBorderColor](DThemeDarkBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L24)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBorderMask](../interfaces/DThemeScrollBarThumb.md#getbordermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderMask](DThemeDarkBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBorderTexture](../interfaces/DThemeScrollBarThumb.md#getbordertexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderTexture](DThemeDarkBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBorderWidth](../interfaces/DThemeScrollBarThumb.md#getborderwidth)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBorderWidth](DThemeDarkBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L38)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getClearType](../interfaces/DThemeScrollBarThumb.md#getcleartype)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getClearType](DThemeDarkBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getColor](../interfaces/DThemeScrollBarThumb.md#getcolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getColor](DThemeDarkBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getCornerMask](../interfaces/DThemeScrollBarThumb.md#getcornermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerMask](DThemeDarkBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getCornerRadius](../interfaces/DThemeScrollBarThumb.md#getcornerradius)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerRadius](DThemeDarkBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getCursor](../interfaces/DThemeScrollBarThumb.md#getcursor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCursor](DThemeDarkBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontFamilly](../interfaces/DThemeScrollBarThumb.md#getfontfamilly)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontFamilly](DThemeDarkBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontSize](../interfaces/DThemeScrollBarThumb.md#getfontsize)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontSize](DThemeDarkBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontStyle](../interfaces/DThemeScrollBarThumb.md#getfontstyle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontStyle](DThemeDarkBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontVariant](../interfaces/DThemeScrollBarThumb.md#getfontvariant)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontVariant](DThemeDarkBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontWeight](../interfaces/DThemeScrollBarThumb.md#getfontweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontWeight](DThemeDarkBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getHeight](../interfaces/DThemeScrollBarThumb.md#getheight)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getHeight](DThemeDarkBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L50)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getInteractive](../interfaces/DThemeScrollBarThumb.md#getinteractive)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getInteractive](DThemeDarkBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L165)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getLineHeight](../interfaces/DThemeScrollBarThumb.md#getlineheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getLineHeight](DThemeDarkBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getOutlineAlign](../interfaces/DThemeScrollBarThumb.md#getoutlinealign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlign](DThemeDarkBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getOutlineAlpha](../interfaces/DThemeScrollBarThumb.md#getoutlinealpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlpha](DThemeDarkBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getOutlineColor](../interfaces/DThemeScrollBarThumb.md#getoutlinecolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineColor](DThemeDarkBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getOutlineMask](../interfaces/DThemeScrollBarThumb.md#getoutlinemask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineMask](DThemeDarkBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getOutlineOffset](../interfaces/DThemeScrollBarThumb.md#getoutlineoffset)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineOffset](DThemeDarkBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getOutlineWidth](../interfaces/DThemeScrollBarThumb.md#getoutlinewidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineWidth](DThemeDarkBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getPaddingBottom](../interfaces/DThemeScrollBarThumb.md#getpaddingbottom)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingBottom](DThemeDarkBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getPaddingLeft](../interfaces/DThemeScrollBarThumb.md#getpaddingleft)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingLeft](DThemeDarkBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getPaddingRight](../interfaces/DThemeScrollBarThumb.md#getpaddingright)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingRight](DThemeDarkBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getPaddingTop](../interfaces/DThemeScrollBarThumb.md#getpaddingtop)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingTop](DThemeDarkBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getShadow](../interfaces/DThemeScrollBarThumb.md#getshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getShadow](DThemeDarkBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getThumbMinimumLength

▸ **getThumbMinimumLength**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getThumbMinimumLength](../interfaces/DThemeScrollBarThumb.md#getthumbminimumlength)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L54)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getTitle](../interfaces/DThemeScrollBarThumb.md#gettitle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getTitle](DThemeDarkBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getWeight](../interfaces/DThemeScrollBarThumb.md#getweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWeight](DThemeDarkBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getWidth](../interfaces/DThemeScrollBarThumb.md#getwidth)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getWidth](DThemeDarkBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L46)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getX](../interfaces/DThemeScrollBarThumb.md#getx)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getX](DThemeDarkBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getY](../interfaces/DThemeScrollBarThumb.md#gety)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getY](DThemeDarkBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[newShadow](../interfaces/DThemeScrollBarThumb.md#newshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadow](DThemeDarkBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[newShadowWeak](../interfaces/DThemeScrollBarThumb.md#newshadowweak)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadowWeak](DThemeDarkBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[newState](../interfaces/DThemeScrollBarThumb.md#newstate)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[newState](DThemeDarkBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-scroll-bar-thumb.ts#L58)
