[Winter Cardinal UI - v0.310.1](../index.md) / DThemePickerDatetimeLabel

# Interface: DThemePickerDatetimeLabel

[DTextBase](../classes/DTextBase.md) theme.

## Hierarchy

- [`DThemeText`](DThemeText.md)<`Date`\>

  ↳ **`DThemePickerDatetimeLabel`**

## Implemented by

- [`DThemeDarkPickerDatetimeLabel`](../classes/DThemeDarkPickerDatetimeLabel.md)
- [`DThemeWhitePickerDatetimeLabel`](../classes/DThemeWhitePickerDatetimeLabel.md)

## Table of contents

### Methods

- [getAlpha](DThemePickerDatetimeLabel.md#getalpha)
- [getBackgroundAlpha](DThemePickerDatetimeLabel.md#getbackgroundalpha)
- [getBackgroundColor](DThemePickerDatetimeLabel.md#getbackgroundcolor)
- [getBackgroundTexture](DThemePickerDatetimeLabel.md#getbackgroundtexture)
- [getBorderAlign](DThemePickerDatetimeLabel.md#getborderalign)
- [getBorderAlpha](DThemePickerDatetimeLabel.md#getborderalpha)
- [getBorderColor](DThemePickerDatetimeLabel.md#getbordercolor)
- [getBorderMask](DThemePickerDatetimeLabel.md#getbordermask)
- [getBorderTexture](DThemePickerDatetimeLabel.md#getbordertexture)
- [getBorderWidth](DThemePickerDatetimeLabel.md#getborderwidth)
- [getClearType](DThemePickerDatetimeLabel.md#getcleartype)
- [getColor](DThemePickerDatetimeLabel.md#getcolor)
- [getCornerMask](DThemePickerDatetimeLabel.md#getcornermask)
- [getCornerRadius](DThemePickerDatetimeLabel.md#getcornerradius)
- [getCursor](DThemePickerDatetimeLabel.md#getcursor)
- [getFontFamilly](DThemePickerDatetimeLabel.md#getfontfamilly)
- [getFontSize](DThemePickerDatetimeLabel.md#getfontsize)
- [getFontStyle](DThemePickerDatetimeLabel.md#getfontstyle)
- [getFontVariant](DThemePickerDatetimeLabel.md#getfontvariant)
- [getFontWeight](DThemePickerDatetimeLabel.md#getfontweight)
- [getHeight](DThemePickerDatetimeLabel.md#getheight)
- [getInteractive](DThemePickerDatetimeLabel.md#getinteractive)
- [getLineHeight](DThemePickerDatetimeLabel.md#getlineheight)
- [getOutlineAlign](DThemePickerDatetimeLabel.md#getoutlinealign)
- [getOutlineAlpha](DThemePickerDatetimeLabel.md#getoutlinealpha)
- [getOutlineColor](DThemePickerDatetimeLabel.md#getoutlinecolor)
- [getOutlineMask](DThemePickerDatetimeLabel.md#getoutlinemask)
- [getOutlineOffset](DThemePickerDatetimeLabel.md#getoutlineoffset)
- [getOutlineWidth](DThemePickerDatetimeLabel.md#getoutlinewidth)
- [getPaddingBottom](DThemePickerDatetimeLabel.md#getpaddingbottom)
- [getPaddingLeft](DThemePickerDatetimeLabel.md#getpaddingleft)
- [getPaddingRight](DThemePickerDatetimeLabel.md#getpaddingright)
- [getPaddingTop](DThemePickerDatetimeLabel.md#getpaddingtop)
- [getShadow](DThemePickerDatetimeLabel.md#getshadow)
- [getTextAlignHorizontal](DThemePickerDatetimeLabel.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemePickerDatetimeLabel.md#gettextalignvertical)
- [getTextFormatter](DThemePickerDatetimeLabel.md#gettextformatter)
- [getTextStyleClipping](DThemePickerDatetimeLabel.md#gettextstyleclipping)
- [getTextStyleFitting](DThemePickerDatetimeLabel.md#gettextstylefitting)
- [getTextStyleWordWrap](DThemePickerDatetimeLabel.md#gettextstylewordwrap)
- [getTextValue](DThemePickerDatetimeLabel.md#gettextvalue)
- [getTitle](DThemePickerDatetimeLabel.md#gettitle)
- [getWeight](DThemePickerDatetimeLabel.md#getweight)
- [getWidth](DThemePickerDatetimeLabel.md#getwidth)
- [getX](DThemePickerDatetimeLabel.md#getx)
- [getY](DThemePickerDatetimeLabel.md#gety)
- [isOverflowMaskEnabled](DThemePickerDatetimeLabel.md#isoverflowmaskenabled)
- [newShadow](DThemePickerDatetimeLabel.md#newshadow)
- [newShadowWeak](DThemePickerDatetimeLabel.md#newshadowweak)
- [newState](DThemePickerDatetimeLabel.md#newstate)
- [newTextValue](DThemePickerDatetimeLabel.md#newtextvalue)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getAlpha](DThemeText.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getBackgroundAlpha](DThemeText.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L552)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeText](DThemeText.md).[getBackgroundColor](DThemeText.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L545)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeText](DThemeText.md).[getBackgroundTexture](DThemeText.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L557)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getBorderAlign](DThemeText.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L586)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getBorderAlpha](DThemeText.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L572)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeText](DThemeText.md).[getBorderColor](DThemeText.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L565)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getBorderMask](DThemeText.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeText](DThemeText.md).[getBorderTexture](DThemeText.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L598)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getBorderWidth](DThemeText.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getClearType](DThemeText.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L698)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getColor](DThemeText.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getCornerMask](DThemeText.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getCornerRadius](DThemeText.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L623)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DThemeText](DThemeText.md).[getCursor](DThemeText.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L720)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeText](DThemeText.md).[getFontFamilly](DThemeText.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getFontSize](DThemeText.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeText](DThemeText.md).[getFontStyle](DThemeText.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeText](DThemeText.md).[getFontVariant](DThemeText.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeText](DThemeText.md).[getFontWeight](DThemeText.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeText](DThemeText.md).[getHeight](DThemeText.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L532)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getInteractive](DThemeText.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L682)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getLineHeight](DThemeText.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getOutlineAlign](DThemeText.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L664)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getOutlineAlpha](DThemeText.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeText](DThemeText.md).[getOutlineColor](DThemeText.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L636)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getOutlineMask](DThemeText.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getOutlineOffset](DThemeText.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L657)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getOutlineWidth](DThemeText.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L650)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getPaddingBottom](DThemeText.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L618)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getPaddingLeft](DThemeText.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:603](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L603)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getPaddingRight](DThemeText.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getPaddingTop](DThemeText.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:613](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L613)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeText](DThemeText.md).[getShadow](DThemeText.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L677)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Inherited from

[DThemeText](DThemeText.md).[getTextAlignHorizontal](DThemeText.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L87)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Inherited from

[DThemeText](DThemeText.md).[getTextAlignVertical](DThemeText.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L86)

___

### getTextFormatter

▸ **getTextFormatter**(): (`value`: `Date`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[DThemeText](DThemeText.md).[getTextFormatter](DThemeText.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L70)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeText](DThemeText.md).[getTextStyleClipping](DThemeText.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getTextStyleFitting

▸ **getTextStyleFitting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeText](DThemeText.md).[getTextStyleFitting](DThemeText.md#gettextstylefitting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L89)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Inherited from

[DThemeText](DThemeText.md).[getTextStyleWordWrap](DThemeText.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L90)

___

### getTextValue

▸ **getTextValue**(`state`): `undefined` \| `Date`

Returns a text value.
Called to get a text vale if there is no text value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`undefined` \| `Date`

#### Inherited from

[DThemeText](DThemeText.md).[getTextValue](DThemeText.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeText](DThemeText.md).[getTitle](DThemeText.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L692)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getWeight](DThemeText.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L705)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeText](DThemeText.md).[getWidth](DThemeText.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeText](DThemeText.md).[getX](DThemeText.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L522)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeText](DThemeText.md).[getY](DThemeText.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L527)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeText](DThemeText.md).[isOverflowMaskEnabled](DThemeText.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L91)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeText](DThemeText.md).[newShadow](DThemeText.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:710](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L710)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeText](DThemeText.md).[newShadowWeak](DThemeText.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:715](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L715)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DThemeText](DThemeText.md).[newState](DThemeText.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L687)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`Date`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`Date`\>

#### Inherited from

[DThemeText](DThemeText.md).[newTextValue](DThemeText.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L76)
