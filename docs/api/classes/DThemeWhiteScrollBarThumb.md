[Winter Cardinal UI](../README.md) / DThemeWhiteScrollBarThumb

# Class: DThemeWhiteScrollBarThumb

## Hierarchy

- [`DThemeWhiteBase`](DThemeWhiteBase.md)

  ↳ **`DThemeWhiteScrollBarThumb`**

## Implements

- [`DThemeScrollBarThumb`](../interfaces/DThemeScrollBarThumb.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteScrollBarThumb.md#constructor)

### Properties

- [BORDER\_COLOR](DThemeWhiteScrollBarThumb.md#border_color)

### Methods

- [getAlpha](DThemeWhiteScrollBarThumb.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteScrollBarThumb.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteScrollBarThumb.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteScrollBarThumb.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteScrollBarThumb.md#getborderalign)
- [getBorderAlpha](DThemeWhiteScrollBarThumb.md#getborderalpha)
- [getBorderColor](DThemeWhiteScrollBarThumb.md#getbordercolor)
- [getBorderMask](DThemeWhiteScrollBarThumb.md#getbordermask)
- [getBorderTexture](DThemeWhiteScrollBarThumb.md#getbordertexture)
- [getBorderWidth](DThemeWhiteScrollBarThumb.md#getborderwidth)
- [getClearType](DThemeWhiteScrollBarThumb.md#getcleartype)
- [getColor](DThemeWhiteScrollBarThumb.md#getcolor)
- [getCornerMask](DThemeWhiteScrollBarThumb.md#getcornermask)
- [getCornerRadius](DThemeWhiteScrollBarThumb.md#getcornerradius)
- [getCursor](DThemeWhiteScrollBarThumb.md#getcursor)
- [getFontFamilly](DThemeWhiteScrollBarThumb.md#getfontfamilly)
- [getFontSize](DThemeWhiteScrollBarThumb.md#getfontsize)
- [getFontStyle](DThemeWhiteScrollBarThumb.md#getfontstyle)
- [getFontVariant](DThemeWhiteScrollBarThumb.md#getfontvariant)
- [getFontWeight](DThemeWhiteScrollBarThumb.md#getfontweight)
- [getHeight](DThemeWhiteScrollBarThumb.md#getheight)
- [getInteractive](DThemeWhiteScrollBarThumb.md#getinteractive)
- [getLineHeight](DThemeWhiteScrollBarThumb.md#getlineheight)
- [getOutlineAlign](DThemeWhiteScrollBarThumb.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteScrollBarThumb.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteScrollBarThumb.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteScrollBarThumb.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteScrollBarThumb.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteScrollBarThumb.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteScrollBarThumb.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteScrollBarThumb.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteScrollBarThumb.md#getpaddingright)
- [getPaddingTop](DThemeWhiteScrollBarThumb.md#getpaddingtop)
- [getShadow](DThemeWhiteScrollBarThumb.md#getshadow)
- [getThumbMinimumLength](DThemeWhiteScrollBarThumb.md#getthumbminimumlength)
- [getTitle](DThemeWhiteScrollBarThumb.md#gettitle)
- [getWeight](DThemeWhiteScrollBarThumb.md#getweight)
- [getWidth](DThemeWhiteScrollBarThumb.md#getwidth)
- [getX](DThemeWhiteScrollBarThumb.md#getx)
- [getY](DThemeWhiteScrollBarThumb.md#gety)
- [newShadow](DThemeWhiteScrollBarThumb.md#newshadow)
- [newShadowWeak](DThemeWhiteScrollBarThumb.md#newshadowweak)
- [newState](DThemeWhiteScrollBarThumb.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteScrollBarThumb**()

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[constructor](DThemeWhiteBase.md#constructor)

## Properties

### BORDER\_COLOR

• **BORDER\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L14)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getAlpha](DThemeWhiteBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundAlpha](DThemeWhiteBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L20)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundColor](DThemeWhiteBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L16)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBackgroundTexture](../interfaces/DThemeScrollBarThumb.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundTexture](DThemeWhiteBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlign](DThemeWhiteBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L42)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlpha](DThemeWhiteBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L28)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderColor](DThemeWhiteBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L24)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderMask](DThemeWhiteBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getBorderTexture](../interfaces/DThemeScrollBarThumb.md#getbordertexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderTexture](DThemeWhiteBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderWidth](DThemeWhiteBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L38)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getClearType](DThemeWhiteBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getColor](DThemeWhiteBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getCornerMask](../interfaces/DThemeScrollBarThumb.md#getcornermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerMask](DThemeWhiteBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getCornerRadius](../interfaces/DThemeScrollBarThumb.md#getcornerradius)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerRadius](DThemeWhiteBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getCursor](DThemeWhiteBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontFamilly](../interfaces/DThemeScrollBarThumb.md#getfontfamilly)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontFamilly](DThemeWhiteBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontSize](../interfaces/DThemeScrollBarThumb.md#getfontsize)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontSize](DThemeWhiteBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../README.md#dfontstyle)

#### Returns

[`DFontStyle`](../README.md#dfontstyle)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontStyle](../interfaces/DThemeScrollBarThumb.md#getfontstyle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontStyle](DThemeWhiteBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../README.md#dfontvariant)

#### Returns

[`DFontVariant`](../README.md#dfontvariant)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontVariant](../interfaces/DThemeScrollBarThumb.md#getfontvariant)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontVariant](DThemeWhiteBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../README.md#dfontweight)

#### Returns

[`DFontWeight`](../README.md#dfontweight)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getFontWeight](../interfaces/DThemeScrollBarThumb.md#getfontweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontWeight](DThemeWhiteBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getHeight](../interfaces/DThemeScrollBarThumb.md#getheight)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getHeight](DThemeWhiteBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L50)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getInteractive](../interfaces/DThemeScrollBarThumb.md#getinteractive)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getInteractive](DThemeWhiteBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L165)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getLineHeight](../interfaces/DThemeScrollBarThumb.md#getlineheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getLineHeight](DThemeWhiteBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlign](DThemeWhiteBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L149)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlpha](DThemeWhiteBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineColor](DThemeWhiteBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineMask](DThemeWhiteBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineOffset](DThemeWhiteBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineWidth](DThemeWhiteBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getPaddingBottom](../interfaces/DThemeScrollBarThumb.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingBottom](DThemeWhiteBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getPaddingLeft](../interfaces/DThemeScrollBarThumb.md#getpaddingleft)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingLeft](DThemeWhiteBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getPaddingRight](../interfaces/DThemeScrollBarThumb.md#getpaddingright)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingRight](DThemeWhiteBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getPaddingTop](../interfaces/DThemeScrollBarThumb.md#getpaddingtop)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingTop](DThemeWhiteBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L114)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getShadow](DThemeWhiteBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getThumbMinimumLength

▸ **getThumbMinimumLength**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getThumbMinimumLength](../interfaces/DThemeScrollBarThumb.md#getthumbminimumlength)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L54)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getTitle](../interfaces/DThemeScrollBarThumb.md#gettitle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getTitle](DThemeWhiteBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[getWeight](DThemeWhiteBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getWidth](../interfaces/DThemeScrollBarThumb.md#getwidth)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getWidth](DThemeWhiteBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L46)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getX](../interfaces/DThemeScrollBarThumb.md#getx)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getX](DThemeWhiteBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[getY](../interfaces/DThemeScrollBarThumb.md#gety)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getY](DThemeWhiteBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[newShadow](../interfaces/DThemeScrollBarThumb.md#newshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadow](DThemeWhiteBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeScrollBarThumb](../interfaces/DThemeScrollBarThumb.md).[newShadowWeak](../interfaces/DThemeScrollBarThumb.md#newshadowweak)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadowWeak](DThemeWhiteBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemeWhiteBase](DThemeWhiteBase.md).[newState](DThemeWhiteBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-scroll-bar-thumb.ts#L58)
