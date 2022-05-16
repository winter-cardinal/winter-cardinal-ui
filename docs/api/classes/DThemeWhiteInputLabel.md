[Winter Cardinal UI - v0.167.0](../index.md) / DThemeWhiteInputLabel

# Class: DThemeWhiteInputLabel<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DThemeWhiteText`](DThemeWhiteText.md)<`VALUE`\>

  ↳ **`DThemeWhiteInputLabel`**

## Implements

- [`DThemeInputLabel`](../interfaces/DThemeInputLabel.md)<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DThemeWhiteInputLabel.md#constructor)

### Methods

- [getAlpha](DThemeWhiteInputLabel.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteInputLabel.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteInputLabel.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteInputLabel.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteInputLabel.md#getborderalign)
- [getBorderAlpha](DThemeWhiteInputLabel.md#getborderalpha)
- [getBorderColor](DThemeWhiteInputLabel.md#getbordercolor)
- [getBorderMask](DThemeWhiteInputLabel.md#getbordermask)
- [getBorderTexture](DThemeWhiteInputLabel.md#getbordertexture)
- [getBorderWidth](DThemeWhiteInputLabel.md#getborderwidth)
- [getClearType](DThemeWhiteInputLabel.md#getcleartype)
- [getColor](DThemeWhiteInputLabel.md#getcolor)
- [getCornerMask](DThemeWhiteInputLabel.md#getcornermask)
- [getCornerRadius](DThemeWhiteInputLabel.md#getcornerradius)
- [getCursor](DThemeWhiteInputLabel.md#getcursor)
- [getFontFamilly](DThemeWhiteInputLabel.md#getfontfamilly)
- [getFontSize](DThemeWhiteInputLabel.md#getfontsize)
- [getFontStyle](DThemeWhiteInputLabel.md#getfontstyle)
- [getFontVariant](DThemeWhiteInputLabel.md#getfontvariant)
- [getFontWeight](DThemeWhiteInputLabel.md#getfontweight)
- [getHeight](DThemeWhiteInputLabel.md#getheight)
- [getInteractive](DThemeWhiteInputLabel.md#getinteractive)
- [getLineHeight](DThemeWhiteInputLabel.md#getlineheight)
- [getOutlineAlign](DThemeWhiteInputLabel.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteInputLabel.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteInputLabel.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteInputLabel.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteInputLabel.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteInputLabel.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteInputLabel.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteInputLabel.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteInputLabel.md#getpaddingright)
- [getPaddingTop](DThemeWhiteInputLabel.md#getpaddingtop)
- [getShadow](DThemeWhiteInputLabel.md#getshadow)
- [getTextAlignHorizontal](DThemeWhiteInputLabel.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeWhiteInputLabel.md#gettextalignvertical)
- [getTextFormatter](DThemeWhiteInputLabel.md#gettextformatter)
- [getTextStyleClipping](DThemeWhiteInputLabel.md#gettextstyleclipping)
- [getTextStyleWordWrap](DThemeWhiteInputLabel.md#gettextstylewordwrap)
- [getTextValue](DThemeWhiteInputLabel.md#gettextvalue)
- [getTitle](DThemeWhiteInputLabel.md#gettitle)
- [getWeight](DThemeWhiteInputLabel.md#getweight)
- [getWidth](DThemeWhiteInputLabel.md#getwidth)
- [getX](DThemeWhiteInputLabel.md#getx)
- [getY](DThemeWhiteInputLabel.md#gety)
- [isOverflowMaskEnabled](DThemeWhiteInputLabel.md#isoverflowmaskenabled)
- [newShadow](DThemeWhiteInputLabel.md#newshadow)
- [newShadowWeak](DThemeWhiteInputLabel.md#newshadowweak)
- [newState](DThemeWhiteInputLabel.md#newstate)
- [newTextValue](DThemeWhiteInputLabel.md#newtextvalue)

## Constructors

### constructor

• **new DThemeWhiteInputLabel**<`VALUE`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[constructor](DThemeWhiteText.md#constructor)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getAlpha](../interfaces/DThemeInputLabel.md#getalpha)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getAlpha](DThemeWhiteText.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBackgroundAlpha](../interfaces/DThemeInputLabel.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBackgroundAlpha](DThemeWhiteText.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBackgroundColor](../interfaces/DThemeInputLabel.md#getbackgroundcolor)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBackgroundColor](DThemeWhiteText.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L70)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBackgroundTexture](../interfaces/DThemeInputLabel.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBackgroundTexture](DThemeWhiteText.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBorderAlign](../interfaces/DThemeInputLabel.md#getborderalign)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBorderAlign](DThemeWhiteText.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L94)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBorderAlpha](../interfaces/DThemeInputLabel.md#getborderalpha)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBorderAlpha](DThemeWhiteText.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBorderColor](../interfaces/DThemeInputLabel.md#getbordercolor)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBorderColor](DThemeWhiteText.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L82)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBorderMask](../interfaces/DThemeInputLabel.md#getbordermask)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBorderMask](DThemeWhiteText.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBorderTexture](../interfaces/DThemeInputLabel.md#getbordertexture)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBorderTexture](DThemeWhiteText.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBorderWidth](../interfaces/DThemeInputLabel.md#getborderwidth)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getBorderWidth](DThemeWhiteText.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getClearType](../interfaces/DThemeInputLabel.md#getcleartype)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getClearType](DThemeWhiteText.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getColor](../interfaces/DThemeInputLabel.md#getcolor)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getColor](DThemeWhiteText.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getCornerMask](../interfaces/DThemeInputLabel.md#getcornermask)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getCornerMask](DThemeWhiteText.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getCornerRadius](../interfaces/DThemeInputLabel.md#getcornerradius)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getCornerRadius](DThemeWhiteText.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getCursor](../interfaces/DThemeInputLabel.md#getcursor)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getCursor](DThemeWhiteText.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontFamilly](../interfaces/DThemeInputLabel.md#getfontfamilly)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getFontFamilly](DThemeWhiteText.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontSize](../interfaces/DThemeInputLabel.md#getfontsize)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getFontSize](DThemeWhiteText.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontStyle](../interfaces/DThemeInputLabel.md#getfontstyle)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getFontStyle](DThemeWhiteText.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontVariant](../interfaces/DThemeInputLabel.md#getfontvariant)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getFontVariant](DThemeWhiteText.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontWeight](../interfaces/DThemeInputLabel.md#getfontweight)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getFontWeight](DThemeWhiteText.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getHeight](../interfaces/DThemeInputLabel.md#getheight)

#### Overrides

[DThemeWhiteText](DThemeWhiteText.md).[getHeight](DThemeWhiteText.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-input-label.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-input-label.ts#L23)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getInteractive](../interfaces/DThemeInputLabel.md#getinteractive)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getInteractive](DThemeWhiteText.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L165)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getLineHeight](../interfaces/DThemeInputLabel.md#getlineheight)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getLineHeight](DThemeWhiteText.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getOutlineAlign](../interfaces/DThemeInputLabel.md#getoutlinealign)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getOutlineAlign](DThemeWhiteText.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L149)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getOutlineAlpha](../interfaces/DThemeInputLabel.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getOutlineAlpha](DThemeWhiteText.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getOutlineColor](../interfaces/DThemeInputLabel.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getOutlineColor](DThemeWhiteText.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getOutlineMask](../interfaces/DThemeInputLabel.md#getoutlinemask)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getOutlineMask](DThemeWhiteText.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getOutlineOffset](../interfaces/DThemeInputLabel.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getOutlineOffset](DThemeWhiteText.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getOutlineWidth](../interfaces/DThemeInputLabel.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getOutlineWidth](DThemeWhiteText.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getPaddingBottom](../interfaces/DThemeInputLabel.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getPaddingBottom](DThemeWhiteText.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getPaddingLeft](../interfaces/DThemeInputLabel.md#getpaddingleft)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getPaddingLeft](DThemeWhiteText.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getPaddingRight](../interfaces/DThemeInputLabel.md#getpaddingright)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getPaddingRight](DThemeWhiteText.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getPaddingTop](../interfaces/DThemeInputLabel.md#getpaddingtop)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getPaddingTop](DThemeWhiteText.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L114)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getShadow](../interfaces/DThemeInputLabel.md#getshadow)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getShadow](DThemeWhiteText.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextAlignHorizontal](../interfaces/DThemeInputLabel.md#gettextalignhorizontal)

#### Overrides

[DThemeWhiteText](DThemeWhiteText.md).[getTextAlignHorizontal](DThemeWhiteText.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-input-label.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-input-label.ts#L15)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextAlignVertical](../interfaces/DThemeInputLabel.md#gettextalignvertical)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getTextAlignVertical](DThemeWhiteText.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L19)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextFormatter](../interfaces/DThemeInputLabel.md#gettextformatter)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getTextFormatter](DThemeWhiteText.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L39)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextStyleClipping](../interfaces/DThemeInputLabel.md#gettextstyleclipping)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getTextStyleClipping](DThemeWhiteText.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L31)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextStyleWordWrap](../interfaces/DThemeInputLabel.md#gettextstylewordwrap)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getTextStyleWordWrap](DThemeWhiteText.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L35)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextValue](../interfaces/DThemeInputLabel.md#gettextvalue)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getTextValue](DThemeWhiteText.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L43)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTitle](../interfaces/DThemeInputLabel.md#gettitle)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getTitle](DThemeWhiteText.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getWeight](../interfaces/DThemeInputLabel.md#getweight)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getWeight](DThemeWhiteText.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getWidth](../interfaces/DThemeInputLabel.md#getwidth)

#### Overrides

[DThemeWhiteText](DThemeWhiteText.md).[getWidth](DThemeWhiteText.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-input-label.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-input-label.ts#L19)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getX](../interfaces/DThemeInputLabel.md#getx)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getX](DThemeWhiteText.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getY](../interfaces/DThemeInputLabel.md#gety)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[getY](DThemeWhiteText.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[isOverflowMaskEnabled](../interfaces/DThemeInputLabel.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[isOverflowMaskEnabled](DThemeWhiteText.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L27)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[newShadow](../interfaces/DThemeInputLabel.md#newshadow)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[newShadow](DThemeWhiteText.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[newShadowWeak](../interfaces/DThemeInputLabel.md#newshadowweak)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[newShadowWeak](DThemeWhiteText.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[newState](../interfaces/DThemeInputLabel.md#newstate)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[newState](DThemeWhiteText.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text.ts#L19)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[newTextValue](../interfaces/DThemeInputLabel.md#newtextvalue)

#### Inherited from

[DThemeWhiteText](DThemeWhiteText.md).[newTextValue](DThemeWhiteText.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L47)
