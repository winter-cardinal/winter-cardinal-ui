[Winter Cardinal UI - v0.442.0](../index.md) / DThemePickerDatetimeLabel

# Interface: DThemePickerDatetimeLabel

[DTextBase](../classes/DTextBase.md) theme.

## Hierarchy

- [`DThemeText`](DThemeText.md)\<`Date`\>

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

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

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

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeText](DThemeText.md).[getBackgroundTexture](DThemeText.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

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

[src/main/typescript/wcardinal/ui/d-base.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L585)

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

[src/main/typescript/wcardinal/ui/d-base.ts:571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L571)

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

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

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

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeText](DThemeText.md).[getBorderTexture](DThemeText.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:597](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L597)

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

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

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

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

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

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getCornerMask](DThemeText.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getCornerRadius](DThemeText.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeText](DThemeText.md).[getFontFamilly](DThemeText.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getFontSize](DThemeText.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeText](DThemeText.md).[getFontStyle](DThemeText.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeText](DThemeText.md).[getFontVariant](DThemeText.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeText](DThemeText.md).[getFontWeight](DThemeText.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeText](DThemeText.md).[getHeight](DThemeText.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getInteractive](DThemeText.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getLineHeight](DThemeText.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

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

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

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

[src/main/typescript/wcardinal/ui/d-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L635)

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

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

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

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

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

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getPaddingBottom](DThemeText.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getPaddingLeft](DThemeText.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getPaddingRight](DThemeText.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeText](DThemeText.md).[getPaddingTop](DThemeText.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

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

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Inherited from

[DThemeText](DThemeText.md).[getTextAlignHorizontal](DThemeText.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L46)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Inherited from

[DThemeText](DThemeText.md).[getTextAlignVertical](DThemeText.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L45)

___

### getTextFormatter

▸ **getTextFormatter**(): [`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`Date`\>

#### Returns

[`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`Date`\>

#### Inherited from

[DThemeText](DThemeText.md).[getTextFormatter](DThemeText.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L29)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeText](DThemeText.md).[getTextStyleClipping](DThemeText.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L47)

___

### getTextStyleFitting

▸ **getTextStyleFitting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeText](DThemeText.md).[getTextStyleFitting](DThemeText.md#gettextstylefitting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L48)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Inherited from

[DThemeText](DThemeText.md).[getTextStyleWordWrap](DThemeText.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L49)

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

[src/main/typescript/wcardinal/ui/d-text-piece.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L43)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeText](DThemeText.md).[getTitle](DThemeText.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L691)

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

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeText](DThemeText.md).[getWidth](DThemeText.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeText](DThemeText.md).[getX](DThemeText.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeText](DThemeText.md).[getY](DThemeText.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeText](DThemeText.md).[isOverflowMaskEnabled](DThemeText.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L50)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeText](DThemeText.md).[newShadow](DThemeText.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeText](DThemeText.md).[newShadowWeak](DThemeText.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:714](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L714)

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

[src/main/typescript/wcardinal/ui/d-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L686)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`Date`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`Date`\>

#### Inherited from

[DThemeText](DThemeText.md).[newTextValue](DThemeText.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L35)
