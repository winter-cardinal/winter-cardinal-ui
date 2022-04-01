[Winter Cardinal UI - v0.160.0](../index.md) / DThemeDarkInputLabel

# Class: DThemeDarkInputLabel<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DThemeDarkText`](DThemeDarkText.md)<`VALUE`\>

  ↳ **`DThemeDarkInputLabel`**

## Implements

- [`DThemeInputLabel`](../interfaces/DThemeInputLabel.md)<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DThemeDarkInputLabel.md#constructor)

### Methods

- [getAlpha](DThemeDarkInputLabel.md#getalpha)
- [getBackgroundAlpha](DThemeDarkInputLabel.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkInputLabel.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkInputLabel.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkInputLabel.md#getborderalign)
- [getBorderAlpha](DThemeDarkInputLabel.md#getborderalpha)
- [getBorderColor](DThemeDarkInputLabel.md#getbordercolor)
- [getBorderMask](DThemeDarkInputLabel.md#getbordermask)
- [getBorderTexture](DThemeDarkInputLabel.md#getbordertexture)
- [getBorderWidth](DThemeDarkInputLabel.md#getborderwidth)
- [getClearType](DThemeDarkInputLabel.md#getcleartype)
- [getColor](DThemeDarkInputLabel.md#getcolor)
- [getCornerMask](DThemeDarkInputLabel.md#getcornermask)
- [getCornerRadius](DThemeDarkInputLabel.md#getcornerradius)
- [getCursor](DThemeDarkInputLabel.md#getcursor)
- [getFontFamilly](DThemeDarkInputLabel.md#getfontfamilly)
- [getFontSize](DThemeDarkInputLabel.md#getfontsize)
- [getFontStyle](DThemeDarkInputLabel.md#getfontstyle)
- [getFontVariant](DThemeDarkInputLabel.md#getfontvariant)
- [getFontWeight](DThemeDarkInputLabel.md#getfontweight)
- [getHeight](DThemeDarkInputLabel.md#getheight)
- [getInteractive](DThemeDarkInputLabel.md#getinteractive)
- [getLineHeight](DThemeDarkInputLabel.md#getlineheight)
- [getOutlineAlign](DThemeDarkInputLabel.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkInputLabel.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkInputLabel.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkInputLabel.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkInputLabel.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkInputLabel.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkInputLabel.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkInputLabel.md#getpaddingleft)
- [getPaddingRight](DThemeDarkInputLabel.md#getpaddingright)
- [getPaddingTop](DThemeDarkInputLabel.md#getpaddingtop)
- [getShadow](DThemeDarkInputLabel.md#getshadow)
- [getTextAlignHorizontal](DThemeDarkInputLabel.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeDarkInputLabel.md#gettextalignvertical)
- [getTextFormatter](DThemeDarkInputLabel.md#gettextformatter)
- [getTextStyleClipping](DThemeDarkInputLabel.md#gettextstyleclipping)
- [getTextStyleWordWrap](DThemeDarkInputLabel.md#gettextstylewordwrap)
- [getTextValue](DThemeDarkInputLabel.md#gettextvalue)
- [getTitle](DThemeDarkInputLabel.md#gettitle)
- [getWeight](DThemeDarkInputLabel.md#getweight)
- [getWidth](DThemeDarkInputLabel.md#getwidth)
- [getX](DThemeDarkInputLabel.md#getx)
- [getY](DThemeDarkInputLabel.md#gety)
- [isOverflowMaskEnabled](DThemeDarkInputLabel.md#isoverflowmaskenabled)
- [newShadow](DThemeDarkInputLabel.md#newshadow)
- [newShadowWeak](DThemeDarkInputLabel.md#newshadowweak)
- [newState](DThemeDarkInputLabel.md#newstate)
- [newTextValue](DThemeDarkInputLabel.md#newtextvalue)

## Constructors

### constructor

• **new DThemeDarkInputLabel**<`VALUE`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[constructor](DThemeDarkText.md#constructor)

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

[DThemeDarkText](DThemeDarkText.md).[getAlpha](DThemeDarkText.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDarkText](DThemeDarkText.md).[getBackgroundAlpha](DThemeDarkText.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

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

[DThemeDarkText](DThemeDarkText.md).[getBackgroundColor](DThemeDarkText.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L70)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBackgroundTexture](../interfaces/DThemeInputLabel.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getBackgroundTexture](DThemeDarkText.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeDarkText](DThemeDarkText.md).[getBorderAlign](DThemeDarkText.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

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

[DThemeDarkText](DThemeDarkText.md).[getBorderAlpha](DThemeDarkText.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeDarkText](DThemeDarkText.md).[getBorderColor](DThemeDarkText.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L82)

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

[DThemeDarkText](DThemeDarkText.md).[getBorderMask](DThemeDarkText.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getBorderTexture](../interfaces/DThemeInputLabel.md#getbordertexture)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getBorderTexture](DThemeDarkText.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeDarkText](DThemeDarkText.md).[getBorderWidth](DThemeDarkText.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

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

[DThemeDarkText](DThemeDarkText.md).[getClearType](DThemeDarkText.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeDarkText](DThemeDarkText.md).[getColor](DThemeDarkText.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getCornerMask](../interfaces/DThemeInputLabel.md#getcornermask)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getCornerMask](DThemeDarkText.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getCornerRadius](../interfaces/DThemeInputLabel.md#getcornerradius)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getCornerRadius](DThemeDarkText.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeDarkText](DThemeDarkText.md).[getCursor](DThemeDarkText.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontFamilly](../interfaces/DThemeInputLabel.md#getfontfamilly)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getFontFamilly](DThemeDarkText.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontSize](../interfaces/DThemeInputLabel.md#getfontsize)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getFontSize](DThemeDarkText.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontStyle](../interfaces/DThemeInputLabel.md#getfontstyle)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getFontStyle](DThemeDarkText.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontVariant](../interfaces/DThemeInputLabel.md#getfontvariant)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getFontVariant](DThemeDarkText.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getFontWeight](../interfaces/DThemeInputLabel.md#getfontweight)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getFontWeight](DThemeDarkText.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getHeight](../interfaces/DThemeInputLabel.md#getheight)

#### Overrides

[DThemeDarkText](DThemeDarkText.md).[getHeight](DThemeDarkText.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-input-label.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-input-label.ts#L23)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getInteractive](../interfaces/DThemeInputLabel.md#getinteractive)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getInteractive](DThemeDarkText.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L165)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getLineHeight](../interfaces/DThemeInputLabel.md#getlineheight)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getLineHeight](DThemeDarkText.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeDarkText](DThemeDarkText.md).[getOutlineAlign](DThemeDarkText.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeDarkText](DThemeDarkText.md).[getOutlineAlpha](DThemeDarkText.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeDarkText](DThemeDarkText.md).[getOutlineColor](DThemeDarkText.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeDarkText](DThemeDarkText.md).[getOutlineMask](DThemeDarkText.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeDarkText](DThemeDarkText.md).[getOutlineOffset](DThemeDarkText.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeDarkText](DThemeDarkText.md).[getOutlineWidth](DThemeDarkText.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getPaddingBottom](../interfaces/DThemeInputLabel.md#getpaddingbottom)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getPaddingBottom](DThemeDarkText.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getPaddingLeft](../interfaces/DThemeInputLabel.md#getpaddingleft)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getPaddingLeft](DThemeDarkText.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getPaddingRight](../interfaces/DThemeInputLabel.md#getpaddingright)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getPaddingRight](DThemeDarkText.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getPaddingTop](../interfaces/DThemeInputLabel.md#getpaddingtop)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getPaddingTop](DThemeDarkText.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

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

[DThemeDarkText](DThemeDarkText.md).[getShadow](DThemeDarkText.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextAlignHorizontal](../interfaces/DThemeInputLabel.md#gettextalignhorizontal)

#### Overrides

[DThemeDarkText](DThemeDarkText.md).[getTextAlignHorizontal](DThemeDarkText.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-input-label.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-input-label.ts#L15)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextAlignVertical](../interfaces/DThemeInputLabel.md#gettextalignvertical)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getTextAlignVertical](DThemeDarkText.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L19)

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

[DThemeDarkText](DThemeDarkText.md).[getTextFormatter](DThemeDarkText.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L39)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextStyleClipping](../interfaces/DThemeInputLabel.md#gettextstyleclipping)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getTextStyleClipping](DThemeDarkText.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L31)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTextStyleWordWrap](../interfaces/DThemeInputLabel.md#gettextstylewordwrap)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getTextStyleWordWrap](DThemeDarkText.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L35)

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

[DThemeDarkText](DThemeDarkText.md).[getTextValue](DThemeDarkText.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L43)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getTitle](../interfaces/DThemeInputLabel.md#gettitle)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getTitle](DThemeDarkText.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

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

[DThemeDarkText](DThemeDarkText.md).[getWeight](DThemeDarkText.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getWidth](../interfaces/DThemeInputLabel.md#getwidth)

#### Overrides

[DThemeDarkText](DThemeDarkText.md).[getWidth](DThemeDarkText.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-input-label.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-input-label.ts#L19)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getX](../interfaces/DThemeInputLabel.md#getx)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getX](DThemeDarkText.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[getY](../interfaces/DThemeInputLabel.md#gety)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[getY](DThemeDarkText.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[isOverflowMaskEnabled](../interfaces/DThemeInputLabel.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[isOverflowMaskEnabled](DThemeDarkText.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L27)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[newShadow](../interfaces/DThemeInputLabel.md#newshadow)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[newShadow](DThemeDarkText.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeInputLabel](../interfaces/DThemeInputLabel.md).[newShadowWeak](../interfaces/DThemeInputLabel.md#newshadowweak)

#### Inherited from

[DThemeDarkText](DThemeDarkText.md).[newShadowWeak](DThemeDarkText.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeDarkText](DThemeDarkText.md).[newState](DThemeDarkText.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text.ts#L19)

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

[DThemeDarkText](DThemeDarkText.md).[newTextValue](DThemeDarkText.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L47)
