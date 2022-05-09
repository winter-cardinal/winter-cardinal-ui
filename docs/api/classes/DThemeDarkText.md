[Winter Cardinal UI - v0.164.0](../index.md) / DThemeDarkText

# Class: DThemeDarkText<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DThemeDarkTextBase`](DThemeDarkTextBase.md)<`VALUE`\>

  ↳ **`DThemeDarkText`**

  ↳↳ [`DThemeDarkInputLabel`](DThemeDarkInputLabel.md)

  ↳↳ [`DThemeDarkPickerDatetimeLabel`](DThemeDarkPickerDatetimeLabel.md)

  ↳↳ [`DThemeDarkPickerDatetimeLabelDate`](DThemeDarkPickerDatetimeLabelDate.md)

## Implements

- [`DThemeText`](../interfaces/DThemeText.md)<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DThemeDarkText.md#constructor)

### Methods

- [getAlpha](DThemeDarkText.md#getalpha)
- [getBackgroundAlpha](DThemeDarkText.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkText.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkText.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkText.md#getborderalign)
- [getBorderAlpha](DThemeDarkText.md#getborderalpha)
- [getBorderColor](DThemeDarkText.md#getbordercolor)
- [getBorderMask](DThemeDarkText.md#getbordermask)
- [getBorderTexture](DThemeDarkText.md#getbordertexture)
- [getBorderWidth](DThemeDarkText.md#getborderwidth)
- [getClearType](DThemeDarkText.md#getcleartype)
- [getColor](DThemeDarkText.md#getcolor)
- [getCornerMask](DThemeDarkText.md#getcornermask)
- [getCornerRadius](DThemeDarkText.md#getcornerradius)
- [getCursor](DThemeDarkText.md#getcursor)
- [getFontFamilly](DThemeDarkText.md#getfontfamilly)
- [getFontSize](DThemeDarkText.md#getfontsize)
- [getFontStyle](DThemeDarkText.md#getfontstyle)
- [getFontVariant](DThemeDarkText.md#getfontvariant)
- [getFontWeight](DThemeDarkText.md#getfontweight)
- [getHeight](DThemeDarkText.md#getheight)
- [getInteractive](DThemeDarkText.md#getinteractive)
- [getLineHeight](DThemeDarkText.md#getlineheight)
- [getOutlineAlign](DThemeDarkText.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkText.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkText.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkText.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkText.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkText.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkText.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkText.md#getpaddingleft)
- [getPaddingRight](DThemeDarkText.md#getpaddingright)
- [getPaddingTop](DThemeDarkText.md#getpaddingtop)
- [getShadow](DThemeDarkText.md#getshadow)
- [getTextAlignHorizontal](DThemeDarkText.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeDarkText.md#gettextalignvertical)
- [getTextFormatter](DThemeDarkText.md#gettextformatter)
- [getTextStyleClipping](DThemeDarkText.md#gettextstyleclipping)
- [getTextStyleWordWrap](DThemeDarkText.md#gettextstylewordwrap)
- [getTextValue](DThemeDarkText.md#gettextvalue)
- [getTitle](DThemeDarkText.md#gettitle)
- [getWeight](DThemeDarkText.md#getweight)
- [getWidth](DThemeDarkText.md#getwidth)
- [getX](DThemeDarkText.md#getx)
- [getY](DThemeDarkText.md#gety)
- [isOverflowMaskEnabled](DThemeDarkText.md#isoverflowmaskenabled)
- [newShadow](DThemeDarkText.md#newshadow)
- [newShadowWeak](DThemeDarkText.md#newshadowweak)
- [newState](DThemeDarkText.md#newstate)
- [newTextValue](DThemeDarkText.md#newtextvalue)

## Constructors

### constructor

• **new DThemeDarkText**<`VALUE`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[constructor](DThemeDarkTextBase.md#constructor)

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

[DThemeText](../interfaces/DThemeText.md).[getAlpha](../interfaces/DThemeText.md#getalpha)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getAlpha](DThemeDarkTextBase.md#getalpha)

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

[DThemeText](../interfaces/DThemeText.md).[getBackgroundAlpha](../interfaces/DThemeText.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBackgroundAlpha](DThemeDarkTextBase.md#getbackgroundalpha)

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

[DThemeText](../interfaces/DThemeText.md).[getBackgroundColor](../interfaces/DThemeText.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBackgroundColor](DThemeDarkTextBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L70)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getBackgroundTexture](../interfaces/DThemeText.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBackgroundTexture](DThemeDarkTextBase.md#getbackgroundtexture)

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

[DThemeText](../interfaces/DThemeText.md).[getBorderAlign](../interfaces/DThemeText.md#getborderalign)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBorderAlign](DThemeDarkTextBase.md#getborderalign)

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

[DThemeText](../interfaces/DThemeText.md).[getBorderAlpha](../interfaces/DThemeText.md#getborderalpha)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBorderAlpha](DThemeDarkTextBase.md#getborderalpha)

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

[DThemeText](../interfaces/DThemeText.md).[getBorderColor](../interfaces/DThemeText.md#getbordercolor)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBorderColor](DThemeDarkTextBase.md#getbordercolor)

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

[DThemeText](../interfaces/DThemeText.md).[getBorderMask](../interfaces/DThemeText.md#getbordermask)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBorderMask](DThemeDarkTextBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getBorderTexture](../interfaces/DThemeText.md#getbordertexture)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBorderTexture](DThemeDarkTextBase.md#getbordertexture)

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

[DThemeText](../interfaces/DThemeText.md).[getBorderWidth](../interfaces/DThemeText.md#getborderwidth)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getBorderWidth](DThemeDarkTextBase.md#getborderwidth)

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

[DThemeText](../interfaces/DThemeText.md).[getClearType](../interfaces/DThemeText.md#getcleartype)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getClearType](DThemeDarkTextBase.md#getcleartype)

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

[DThemeText](../interfaces/DThemeText.md).[getColor](../interfaces/DThemeText.md#getcolor)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getColor](DThemeDarkTextBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getCornerMask](../interfaces/DThemeText.md#getcornermask)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getCornerMask](DThemeDarkTextBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getCornerRadius](../interfaces/DThemeText.md#getcornerradius)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getCornerRadius](DThemeDarkTextBase.md#getcornerradius)

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

[DThemeText](../interfaces/DThemeText.md).[getCursor](../interfaces/DThemeText.md#getcursor)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getCursor](DThemeDarkTextBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getFontFamilly](../interfaces/DThemeText.md#getfontfamilly)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getFontFamilly](DThemeDarkTextBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getFontSize](../interfaces/DThemeText.md#getfontsize)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getFontSize](DThemeDarkTextBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getFontStyle](../interfaces/DThemeText.md#getfontstyle)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getFontStyle](DThemeDarkTextBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getFontVariant](../interfaces/DThemeText.md#getfontvariant)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getFontVariant](DThemeDarkTextBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getFontWeight](../interfaces/DThemeText.md#getfontweight)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getFontWeight](DThemeDarkTextBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getHeight](../interfaces/DThemeText.md#getheight)

#### Overrides

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getHeight](DThemeDarkTextBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text.ts#L15)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getInteractive](../interfaces/DThemeText.md#getinteractive)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getInteractive](DThemeDarkTextBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L165)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getLineHeight](../interfaces/DThemeText.md#getlineheight)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getLineHeight](DThemeDarkTextBase.md#getlineheight)

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

[DThemeText](../interfaces/DThemeText.md).[getOutlineAlign](../interfaces/DThemeText.md#getoutlinealign)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getOutlineAlign](DThemeDarkTextBase.md#getoutlinealign)

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

[DThemeText](../interfaces/DThemeText.md).[getOutlineAlpha](../interfaces/DThemeText.md#getoutlinealpha)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getOutlineAlpha](DThemeDarkTextBase.md#getoutlinealpha)

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

[DThemeText](../interfaces/DThemeText.md).[getOutlineColor](../interfaces/DThemeText.md#getoutlinecolor)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getOutlineColor](DThemeDarkTextBase.md#getoutlinecolor)

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

[DThemeText](../interfaces/DThemeText.md).[getOutlineMask](../interfaces/DThemeText.md#getoutlinemask)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getOutlineMask](DThemeDarkTextBase.md#getoutlinemask)

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

[DThemeText](../interfaces/DThemeText.md).[getOutlineOffset](../interfaces/DThemeText.md#getoutlineoffset)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getOutlineOffset](DThemeDarkTextBase.md#getoutlineoffset)

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

[DThemeText](../interfaces/DThemeText.md).[getOutlineWidth](../interfaces/DThemeText.md#getoutlinewidth)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getOutlineWidth](DThemeDarkTextBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getPaddingBottom](../interfaces/DThemeText.md#getpaddingbottom)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getPaddingBottom](DThemeDarkTextBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getPaddingLeft](../interfaces/DThemeText.md#getpaddingleft)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getPaddingLeft](DThemeDarkTextBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getPaddingRight](../interfaces/DThemeText.md#getpaddingright)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getPaddingRight](DThemeDarkTextBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getPaddingTop](../interfaces/DThemeText.md#getpaddingtop)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getPaddingTop](DThemeDarkTextBase.md#getpaddingtop)

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

[DThemeText](../interfaces/DThemeText.md).[getShadow](../interfaces/DThemeText.md#getshadow)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getShadow](DThemeDarkTextBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getTextAlignHorizontal](../interfaces/DThemeText.md#gettextalignhorizontal)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getTextAlignHorizontal](DThemeDarkTextBase.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L23)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getTextAlignVertical](../interfaces/DThemeText.md#gettextalignvertical)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getTextAlignVertical](DThemeDarkTextBase.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L19)

___

### getTextFormatter

▸ **getTextFormatter**(): (`value`: `VALUE`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

`string`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getTextFormatter](../interfaces/DThemeText.md#gettextformatter)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getTextFormatter](DThemeDarkTextBase.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L39)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getTextStyleClipping](../interfaces/DThemeText.md#gettextstyleclipping)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getTextStyleClipping](DThemeDarkTextBase.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L31)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getTextStyleWordWrap](../interfaces/DThemeText.md#gettextstylewordwrap)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getTextStyleWordWrap](DThemeDarkTextBase.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L35)

___

### getTextValue

▸ **getTextValue**(`state`): `undefined` \| `VALUE`

Returns a text value.
Called to get a text vale if there is no text value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`undefined` \| `VALUE`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getTextValue](../interfaces/DThemeText.md#gettextvalue)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getTextValue](DThemeDarkTextBase.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L43)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getTitle](../interfaces/DThemeText.md#gettitle)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getTitle](DThemeDarkTextBase.md#gettitle)

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

[DThemeText](../interfaces/DThemeText.md).[getWeight](../interfaces/DThemeText.md#getweight)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getWeight](DThemeDarkTextBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getWidth](../interfaces/DThemeText.md#getwidth)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getWidth](DThemeDarkTextBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getX](../interfaces/DThemeText.md#getx)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getX](DThemeDarkTextBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[getY](../interfaces/DThemeText.md#gety)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[getY](DThemeDarkTextBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[isOverflowMaskEnabled](../interfaces/DThemeText.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[isOverflowMaskEnabled](DThemeDarkTextBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L27)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[newShadow](../interfaces/DThemeText.md#newshadow)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[newShadow](DThemeDarkTextBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[newShadowWeak](../interfaces/DThemeText.md#newshadowweak)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[newShadowWeak](DThemeDarkTextBase.md#newshadowweak)

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

[DThemeText](../interfaces/DThemeText.md).[newState](../interfaces/DThemeText.md#newstate)

#### Overrides

[DThemeDarkTextBase](DThemeDarkTextBase.md).[newState](DThemeDarkTextBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text.ts#L19)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Implementation of

[DThemeText](../interfaces/DThemeText.md).[newTextValue](../interfaces/DThemeText.md#newtextvalue)

#### Inherited from

[DThemeDarkTextBase](DThemeDarkTextBase.md).[newTextValue](DThemeDarkTextBase.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L47)
