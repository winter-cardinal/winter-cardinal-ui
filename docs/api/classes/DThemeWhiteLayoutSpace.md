[Winter Cardinal UI - v0.205.1](../index.md) / DThemeWhiteLayoutSpace

# Class: DThemeWhiteLayoutSpace

## Hierarchy

- [`DThemeWhiteBase`](DThemeWhiteBase.md)

  ↳ **`DThemeWhiteLayoutSpace`**

  ↳↳ [`DThemeWhiteMenuItemSpace`](DThemeWhiteMenuItemSpace.md)

## Implements

- [`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteLayoutSpace.md#constructor)

### Methods

- [getAlpha](DThemeWhiteLayoutSpace.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteLayoutSpace.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteLayoutSpace.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteLayoutSpace.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteLayoutSpace.md#getborderalign)
- [getBorderAlpha](DThemeWhiteLayoutSpace.md#getborderalpha)
- [getBorderColor](DThemeWhiteLayoutSpace.md#getbordercolor)
- [getBorderMask](DThemeWhiteLayoutSpace.md#getbordermask)
- [getBorderTexture](DThemeWhiteLayoutSpace.md#getbordertexture)
- [getBorderWidth](DThemeWhiteLayoutSpace.md#getborderwidth)
- [getClearType](DThemeWhiteLayoutSpace.md#getcleartype)
- [getColor](DThemeWhiteLayoutSpace.md#getcolor)
- [getCornerMask](DThemeWhiteLayoutSpace.md#getcornermask)
- [getCornerRadius](DThemeWhiteLayoutSpace.md#getcornerradius)
- [getCursor](DThemeWhiteLayoutSpace.md#getcursor)
- [getFontFamilly](DThemeWhiteLayoutSpace.md#getfontfamilly)
- [getFontSize](DThemeWhiteLayoutSpace.md#getfontsize)
- [getFontStyle](DThemeWhiteLayoutSpace.md#getfontstyle)
- [getFontVariant](DThemeWhiteLayoutSpace.md#getfontvariant)
- [getFontWeight](DThemeWhiteLayoutSpace.md#getfontweight)
- [getHeight](DThemeWhiteLayoutSpace.md#getheight)
- [getInteractive](DThemeWhiteLayoutSpace.md#getinteractive)
- [getLineHeight](DThemeWhiteLayoutSpace.md#getlineheight)
- [getOutlineAlign](DThemeWhiteLayoutSpace.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteLayoutSpace.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteLayoutSpace.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteLayoutSpace.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteLayoutSpace.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteLayoutSpace.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteLayoutSpace.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteLayoutSpace.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteLayoutSpace.md#getpaddingright)
- [getPaddingTop](DThemeWhiteLayoutSpace.md#getpaddingtop)
- [getShadow](DThemeWhiteLayoutSpace.md#getshadow)
- [getTitle](DThemeWhiteLayoutSpace.md#gettitle)
- [getWeight](DThemeWhiteLayoutSpace.md#getweight)
- [getWidth](DThemeWhiteLayoutSpace.md#getwidth)
- [getX](DThemeWhiteLayoutSpace.md#getx)
- [getY](DThemeWhiteLayoutSpace.md#gety)
- [newShadow](DThemeWhiteLayoutSpace.md#newshadow)
- [newShadowWeak](DThemeWhiteLayoutSpace.md#newshadowweak)
- [newState](DThemeWhiteLayoutSpace.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteLayoutSpace**()

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getAlpha](../interfaces/DThemeLayoutSpace.md#getalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getAlpha](DThemeWhiteBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBackgroundAlpha](../interfaces/DThemeLayoutSpace.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundAlpha](DThemeWhiteBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBackgroundColor](../interfaces/DThemeLayoutSpace.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundColor](DThemeWhiteBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts#L14)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBackgroundTexture](../interfaces/DThemeLayoutSpace.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundTexture](DThemeWhiteBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBorderAlign](../interfaces/DThemeLayoutSpace.md#getborderalign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlign](DThemeWhiteBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L94)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBorderAlpha](../interfaces/DThemeLayoutSpace.md#getborderalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlpha](DThemeWhiteBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBorderColor](../interfaces/DThemeLayoutSpace.md#getbordercolor)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderColor](DThemeWhiteBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts#L18)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBorderMask](../interfaces/DThemeLayoutSpace.md#getbordermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderMask](DThemeWhiteBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBorderTexture](../interfaces/DThemeLayoutSpace.md#getbordertexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderTexture](DThemeWhiteBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getBorderWidth](../interfaces/DThemeLayoutSpace.md#getborderwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderWidth](DThemeWhiteBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getClearType](../interfaces/DThemeLayoutSpace.md#getcleartype)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getClearType](DThemeWhiteBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts#L30)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getColor](../interfaces/DThemeLayoutSpace.md#getcolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getColor](DThemeWhiteBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getCornerMask](../interfaces/DThemeLayoutSpace.md#getcornermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerMask](DThemeWhiteBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getCornerRadius](../interfaces/DThemeLayoutSpace.md#getcornerradius)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerRadius](DThemeWhiteBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getCursor](../interfaces/DThemeLayoutSpace.md#getcursor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCursor](DThemeWhiteBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getFontFamilly](../interfaces/DThemeLayoutSpace.md#getfontfamilly)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontFamilly](DThemeWhiteBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getFontSize](../interfaces/DThemeLayoutSpace.md#getfontsize)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontSize](DThemeWhiteBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getFontStyle](../interfaces/DThemeLayoutSpace.md#getfontstyle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontStyle](DThemeWhiteBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getFontVariant](../interfaces/DThemeLayoutSpace.md#getfontvariant)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontVariant](DThemeWhiteBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getFontWeight](../interfaces/DThemeLayoutSpace.md#getfontweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontWeight](DThemeWhiteBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getHeight](../interfaces/DThemeLayoutSpace.md#getheight)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getHeight](DThemeWhiteBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts#L26)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getInteractive](../interfaces/DThemeLayoutSpace.md#getinteractive)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getInteractive](DThemeWhiteBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts#L34)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getLineHeight](../interfaces/DThemeLayoutSpace.md#getlineheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getLineHeight](DThemeWhiteBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getOutlineAlign](../interfaces/DThemeLayoutSpace.md#getoutlinealign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlign](DThemeWhiteBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L149)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getOutlineAlpha](../interfaces/DThemeLayoutSpace.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlpha](DThemeWhiteBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getOutlineColor](../interfaces/DThemeLayoutSpace.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineColor](DThemeWhiteBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getOutlineMask](../interfaces/DThemeLayoutSpace.md#getoutlinemask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineMask](DThemeWhiteBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getOutlineOffset](../interfaces/DThemeLayoutSpace.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineOffset](DThemeWhiteBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getOutlineWidth](../interfaces/DThemeLayoutSpace.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineWidth](DThemeWhiteBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getPaddingBottom](../interfaces/DThemeLayoutSpace.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingBottom](DThemeWhiteBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getPaddingLeft](../interfaces/DThemeLayoutSpace.md#getpaddingleft)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingLeft](DThemeWhiteBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getPaddingRight](../interfaces/DThemeLayoutSpace.md#getpaddingright)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingRight](DThemeWhiteBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getPaddingTop](../interfaces/DThemeLayoutSpace.md#getpaddingtop)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingTop](DThemeWhiteBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L114)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getShadow](../interfaces/DThemeLayoutSpace.md#getshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getShadow](DThemeWhiteBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getTitle](../interfaces/DThemeLayoutSpace.md#gettitle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getTitle](DThemeWhiteBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getWeight](../interfaces/DThemeLayoutSpace.md#getweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWeight](DThemeWhiteBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getWidth](../interfaces/DThemeLayoutSpace.md#getwidth)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getWidth](DThemeWhiteBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts#L22)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getX](../interfaces/DThemeLayoutSpace.md#getx)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getX](DThemeWhiteBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[getY](../interfaces/DThemeLayoutSpace.md#gety)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getY](DThemeWhiteBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[newShadow](../interfaces/DThemeLayoutSpace.md#newshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadow](DThemeWhiteBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[newShadowWeak](../interfaces/DThemeLayoutSpace.md#newshadowweak)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadowWeak](DThemeWhiteBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemeLayoutSpace](../interfaces/DThemeLayoutSpace.md).[newState](../interfaces/DThemeLayoutSpace.md#newstate)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[newState](DThemeWhiteBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-space.ts#L38)
