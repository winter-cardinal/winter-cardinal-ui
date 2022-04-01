[Winter Cardinal UI - v0.160.0](../index.md) / DThemeWhitePickerTime

# Class: DThemeWhitePickerTime

## Hierarchy

- [`DThemeWhiteBase`](DThemeWhiteBase.md)

  ↳ **`DThemeWhitePickerTime`**

  ↳↳ [`DThemeWhitePickerDatetime`](DThemeWhitePickerDatetime.md)

## Implements

- [`DThemePickerTime`](../interfaces/DThemePickerTime.md)

## Table of contents

### Constructors

- [constructor](DThemeWhitePickerTime.md#constructor)

### Methods

- [getAlpha](DThemeWhitePickerTime.md#getalpha)
- [getBackgroundAlpha](DThemeWhitePickerTime.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhitePickerTime.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhitePickerTime.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhitePickerTime.md#getborderalign)
- [getBorderAlpha](DThemeWhitePickerTime.md#getborderalpha)
- [getBorderColor](DThemeWhitePickerTime.md#getbordercolor)
- [getBorderMask](DThemeWhitePickerTime.md#getbordermask)
- [getBorderTexture](DThemeWhitePickerTime.md#getbordertexture)
- [getBorderWidth](DThemeWhitePickerTime.md#getborderwidth)
- [getClearType](DThemeWhitePickerTime.md#getcleartype)
- [getColor](DThemeWhitePickerTime.md#getcolor)
- [getCornerMask](DThemeWhitePickerTime.md#getcornermask)
- [getCornerRadius](DThemeWhitePickerTime.md#getcornerradius)
- [getCursor](DThemeWhitePickerTime.md#getcursor)
- [getFontFamilly](DThemeWhitePickerTime.md#getfontfamilly)
- [getFontSize](DThemeWhitePickerTime.md#getfontsize)
- [getFontStyle](DThemeWhitePickerTime.md#getfontstyle)
- [getFontVariant](DThemeWhitePickerTime.md#getfontvariant)
- [getFontWeight](DThemeWhitePickerTime.md#getfontweight)
- [getHeight](DThemeWhitePickerTime.md#getheight)
- [getHoursOptions](DThemeWhitePickerTime.md#gethoursoptions)
- [getInteractive](DThemeWhitePickerTime.md#getinteractive)
- [getLineHeight](DThemeWhitePickerTime.md#getlineheight)
- [getLowerBound](DThemeWhitePickerTime.md#getlowerbound)
- [getMargin](DThemeWhitePickerTime.md#getmargin)
- [getMask](DThemeWhitePickerTime.md#getmask)
- [getMinutesOptions](DThemeWhitePickerTime.md#getminutesoptions)
- [getOutlineAlign](DThemeWhitePickerTime.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhitePickerTime.md#getoutlinealpha)
- [getOutlineColor](DThemeWhitePickerTime.md#getoutlinecolor)
- [getOutlineMask](DThemeWhitePickerTime.md#getoutlinemask)
- [getOutlineOffset](DThemeWhitePickerTime.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhitePickerTime.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhitePickerTime.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhitePickerTime.md#getpaddingleft)
- [getPaddingRight](DThemeWhitePickerTime.md#getpaddingright)
- [getPaddingTop](DThemeWhitePickerTime.md#getpaddingtop)
- [getSecondsOptions](DThemeWhitePickerTime.md#getsecondsoptions)
- [getShadow](DThemeWhitePickerTime.md#getshadow)
- [getTitle](DThemeWhitePickerTime.md#gettitle)
- [getUpperBound](DThemeWhitePickerTime.md#getupperbound)
- [getWeight](DThemeWhitePickerTime.md#getweight)
- [getWidth](DThemeWhitePickerTime.md#getwidth)
- [getX](DThemeWhitePickerTime.md#getx)
- [getY](DThemeWhitePickerTime.md#gety)
- [isLowerBoundInclusive](DThemeWhitePickerTime.md#islowerboundinclusive)
- [isUpperBoundInclusive](DThemeWhitePickerTime.md#isupperboundinclusive)
- [newShadow](DThemeWhitePickerTime.md#newshadow)
- [newShadowWeak](DThemeWhitePickerTime.md#newshadowweak)
- [newState](DThemeWhitePickerTime.md#newstate)

## Constructors

### constructor

• **new DThemeWhitePickerTime**()

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getAlpha](../interfaces/DThemePickerTime.md#getalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getAlpha](DThemeWhiteBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBackgroundAlpha](../interfaces/DThemePickerTime.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundAlpha](DThemeWhiteBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBackgroundColor](../interfaces/DThemePickerTime.md#getbackgroundcolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundColor](DThemeWhiteBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L70)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBackgroundTexture](../interfaces/DThemePickerTime.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundTexture](DThemeWhiteBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderAlign](../interfaces/DThemePickerTime.md#getborderalign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlign](DThemeWhiteBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L94)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderAlpha](../interfaces/DThemePickerTime.md#getborderalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlpha](DThemeWhiteBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderColor](../interfaces/DThemePickerTime.md#getbordercolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderColor](DThemeWhiteBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L82)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderMask](../interfaces/DThemePickerTime.md#getbordermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderMask](DThemeWhiteBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderTexture](../interfaces/DThemePickerTime.md#getbordertexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderTexture](DThemeWhiteBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderWidth](../interfaces/DThemePickerTime.md#getborderwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderWidth](DThemeWhiteBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getClearType](../interfaces/DThemePickerTime.md#getcleartype)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getClearType](DThemeWhiteBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getColor](../interfaces/DThemePickerTime.md#getcolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getColor](DThemeWhiteBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getCornerMask](../interfaces/DThemePickerTime.md#getcornermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerMask](DThemeWhiteBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getCornerRadius](../interfaces/DThemePickerTime.md#getcornerradius)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerRadius](DThemeWhiteBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getCursor](../interfaces/DThemePickerTime.md#getcursor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCursor](DThemeWhiteBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontFamilly](../interfaces/DThemePickerTime.md#getfontfamilly)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontFamilly](DThemeWhiteBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontSize](../interfaces/DThemePickerTime.md#getfontsize)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontSize](DThemeWhiteBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontStyle](../interfaces/DThemePickerTime.md#getfontstyle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontStyle](DThemeWhiteBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontVariant](../interfaces/DThemePickerTime.md#getfontvariant)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontVariant](DThemeWhiteBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontWeight](../interfaces/DThemePickerTime.md#getfontweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontWeight](DThemeWhiteBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getHeight](../interfaces/DThemePickerTime.md#getheight)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getHeight](DThemeWhiteBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L57)

___

### getHoursOptions

▸ **getHoursOptions**(): [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getHoursOptions](../interfaces/DThemePickerTime.md#gethoursoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L28)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getInteractive](../interfaces/DThemePickerTime.md#getinteractive)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getInteractive](DThemeWhiteBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L15)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getLineHeight](../interfaces/DThemePickerTime.md#getlineheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getLineHeight](DThemeWhiteBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

___

### getLowerBound

▸ **getLowerBound**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getLowerBound](../interfaces/DThemePickerTime.md#getlowerbound)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L61)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getMargin](../interfaces/DThemePickerTime.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L24)

___

### getMask

▸ **getMask**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getMask](../interfaces/DThemePickerTime.md#getmask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L49)

___

### getMinutesOptions

▸ **getMinutesOptions**(): [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getMinutesOptions](../interfaces/DThemePickerTime.md#getminutesoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L35)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineAlign](../interfaces/DThemePickerTime.md#getoutlinealign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlign](DThemeWhiteBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L149)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineAlpha](../interfaces/DThemePickerTime.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlpha](DThemeWhiteBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineColor](../interfaces/DThemePickerTime.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineColor](DThemeWhiteBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineMask](../interfaces/DThemePickerTime.md#getoutlinemask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineMask](DThemeWhiteBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineOffset](../interfaces/DThemePickerTime.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineOffset](DThemeWhiteBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineWidth](../interfaces/DThemePickerTime.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineWidth](DThemeWhiteBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getPaddingBottom](../interfaces/DThemePickerTime.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingBottom](DThemeWhiteBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getPaddingLeft](../interfaces/DThemePickerTime.md#getpaddingleft)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingLeft](DThemeWhiteBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getPaddingRight](../interfaces/DThemePickerTime.md#getpaddingright)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingRight](DThemeWhiteBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getPaddingTop](../interfaces/DThemePickerTime.md#getpaddingtop)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingTop](DThemeWhiteBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L114)

___

### getSecondsOptions

▸ **getSecondsOptions**(): [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getSecondsOptions](../interfaces/DThemePickerTime.md#getsecondsoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L42)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getShadow](../interfaces/DThemePickerTime.md#getshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getShadow](DThemeWhiteBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getTitle](../interfaces/DThemePickerTime.md#gettitle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getTitle](DThemeWhiteBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getUpperBound

▸ **getUpperBound**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getUpperBound](../interfaces/DThemePickerTime.md#getupperbound)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L69)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getWeight](../interfaces/DThemePickerTime.md#getweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWeight](DThemeWhiteBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getWidth](../interfaces/DThemePickerTime.md#getwidth)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getWidth](DThemeWhiteBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L53)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getX](../interfaces/DThemePickerTime.md#getx)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getX](DThemeWhiteBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getY](../interfaces/DThemePickerTime.md#gety)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getY](DThemeWhiteBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### isLowerBoundInclusive

▸ **isLowerBoundInclusive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[isLowerBoundInclusive](../interfaces/DThemePickerTime.md#islowerboundinclusive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L65)

___

### isUpperBoundInclusive

▸ **isUpperBoundInclusive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[isUpperBoundInclusive](../interfaces/DThemePickerTime.md#isupperboundinclusive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L73)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[newShadow](../interfaces/DThemePickerTime.md#newshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadow](DThemeWhiteBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[newShadowWeak](../interfaces/DThemePickerTime.md#newshadowweak)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadowWeak](DThemeWhiteBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemePickerTime](../interfaces/DThemePickerTime.md).[newState](../interfaces/DThemePickerTime.md#newstate)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[newState](DThemeWhiteBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-picker-time.ts#L19)
