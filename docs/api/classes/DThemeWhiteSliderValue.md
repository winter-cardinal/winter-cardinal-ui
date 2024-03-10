[Winter Cardinal UI - v0.414.0](../index.md) / DThemeWhiteSliderValue

# Class: DThemeWhiteSliderValue\<VALUE\>

[DTextBase](DTextBase.md) theme.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DThemeWhiteTextBase`](DThemeWhiteTextBase.md)\<`VALUE`\>

  ↳ **`DThemeWhiteSliderValue`**

## Implements

- [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)\<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DThemeWhiteSliderValue.md#constructor)

### Methods

- [getAlpha](DThemeWhiteSliderValue.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteSliderValue.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteSliderValue.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteSliderValue.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteSliderValue.md#getborderalign)
- [getBorderAlpha](DThemeWhiteSliderValue.md#getborderalpha)
- [getBorderColor](DThemeWhiteSliderValue.md#getbordercolor)
- [getBorderMask](DThemeWhiteSliderValue.md#getbordermask)
- [getBorderTexture](DThemeWhiteSliderValue.md#getbordertexture)
- [getBorderWidth](DThemeWhiteSliderValue.md#getborderwidth)
- [getClearType](DThemeWhiteSliderValue.md#getcleartype)
- [getColor](DThemeWhiteSliderValue.md#getcolor)
- [getCornerMask](DThemeWhiteSliderValue.md#getcornermask)
- [getCornerRadius](DThemeWhiteSliderValue.md#getcornerradius)
- [getCursor](DThemeWhiteSliderValue.md#getcursor)
- [getFontFamilly](DThemeWhiteSliderValue.md#getfontfamilly)
- [getFontSize](DThemeWhiteSliderValue.md#getfontsize)
- [getFontStyle](DThemeWhiteSliderValue.md#getfontstyle)
- [getFontVariant](DThemeWhiteSliderValue.md#getfontvariant)
- [getFontWeight](DThemeWhiteSliderValue.md#getfontweight)
- [getHeight](DThemeWhiteSliderValue.md#getheight)
- [getInteractive](DThemeWhiteSliderValue.md#getinteractive)
- [getLineHeight](DThemeWhiteSliderValue.md#getlineheight)
- [getOutlineAlign](DThemeWhiteSliderValue.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteSliderValue.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteSliderValue.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteSliderValue.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteSliderValue.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteSliderValue.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteSliderValue.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteSliderValue.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteSliderValue.md#getpaddingright)
- [getPaddingTop](DThemeWhiteSliderValue.md#getpaddingtop)
- [getPrecision](DThemeWhiteSliderValue.md#getprecision)
- [getShadow](DThemeWhiteSliderValue.md#getshadow)
- [getTextAlignHorizontal](DThemeWhiteSliderValue.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeWhiteSliderValue.md#gettextalignvertical)
- [getTextFormatter](DThemeWhiteSliderValue.md#gettextformatter)
- [getTextStyleClipping](DThemeWhiteSliderValue.md#gettextstyleclipping)
- [getTextStyleFitting](DThemeWhiteSliderValue.md#gettextstylefitting)
- [getTextStyleWordWrap](DThemeWhiteSliderValue.md#gettextstylewordwrap)
- [getTextValue](DThemeWhiteSliderValue.md#gettextvalue)
- [getTitle](DThemeWhiteSliderValue.md#gettitle)
- [getWeight](DThemeWhiteSliderValue.md#getweight)
- [getWidth](DThemeWhiteSliderValue.md#getwidth)
- [getX](DThemeWhiteSliderValue.md#getx)
- [getY](DThemeWhiteSliderValue.md#gety)
- [isOverflowMaskEnabled](DThemeWhiteSliderValue.md#isoverflowmaskenabled)
- [newShadow](DThemeWhiteSliderValue.md#newshadow)
- [newShadowWeak](DThemeWhiteSliderValue.md#newshadowweak)
- [newState](DThemeWhiteSliderValue.md#newstate)
- [newTextValue](DThemeWhiteSliderValue.md#newtextvalue)

## Constructors

### constructor

• **new DThemeWhiteSliderValue**\<`VALUE`\>(): [`DThemeWhiteSliderValue`](DThemeWhiteSliderValue.md)\<`VALUE`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

#### Returns

[`DThemeWhiteSliderValue`](DThemeWhiteSliderValue.md)\<`VALUE`\>

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[constructor](DThemeWhiteTextBase.md#constructor)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getAlpha](../interfaces/DThemeSliderValue.md#getalpha)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getAlpha](DThemeWhiteTextBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBackgroundAlpha](../interfaces/DThemeSliderValue.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBackgroundAlpha](DThemeWhiteTextBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L84)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBackgroundColor](../interfaces/DThemeSliderValue.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBackgroundColor](DThemeWhiteTextBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L34)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBackgroundTexture](../interfaces/DThemeSliderValue.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBackgroundTexture](DThemeWhiteTextBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L88)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBorderAlign](../interfaces/DThemeSliderValue.md#getborderalign)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBorderAlign](DThemeWhiteTextBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L104)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBorderAlpha](../interfaces/DThemeSliderValue.md#getborderalpha)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBorderAlpha](DThemeWhiteTextBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L96)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBorderColor](../interfaces/DThemeSliderValue.md#getbordercolor)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBorderColor](DThemeWhiteTextBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L41)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBorderMask](../interfaces/DThemeSliderValue.md#getbordermask)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBorderMask](DThemeWhiteTextBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBorderTexture](../interfaces/DThemeSliderValue.md#getbordertexture)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBorderTexture](DThemeWhiteTextBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L112)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getBorderWidth](../interfaces/DThemeSliderValue.md#getborderwidth)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getBorderWidth](DThemeWhiteTextBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getClearType](../interfaces/DThemeSliderValue.md#getcleartype)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getClearType](DThemeWhiteTextBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L167)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getColor](../interfaces/DThemeSliderValue.md#getcolor)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getColor](DThemeWhiteTextBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L45)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getCornerMask](../interfaces/DThemeSliderValue.md#getcornermask)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getCornerMask](DThemeWhiteTextBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getCornerRadius](../interfaces/DThemeSliderValue.md#getcornerradius)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getCornerRadius](DThemeWhiteTextBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L132)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getCursor](../interfaces/DThemeSliderValue.md#getcursor)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getCursor](DThemeWhiteTextBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getFontFamilly](../interfaces/DThemeSliderValue.md#getfontfamilly)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getFontFamilly](DThemeWhiteTextBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getFontSize](../interfaces/DThemeSliderValue.md#getfontsize)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getFontSize](DThemeWhiteTextBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getFontStyle](../interfaces/DThemeSliderValue.md#getfontstyle)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getFontStyle](DThemeWhiteTextBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getFontVariant](../interfaces/DThemeSliderValue.md#getfontvariant)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getFontVariant](DThemeWhiteTextBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getFontWeight](../interfaces/DThemeSliderValue.md#getfontweight)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getFontWeight](DThemeWhiteTextBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getHeight](../interfaces/DThemeSliderValue.md#getheight)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getHeight](DThemeWhiteTextBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L30)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getInteractive](../interfaces/DThemeSliderValue.md#getinteractive)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getInteractive](DThemeWhiteTextBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L175)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getLineHeight](../interfaces/DThemeSliderValue.md#getlineheight)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getLineHeight](DThemeWhiteTextBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getOutlineAlign](../interfaces/DThemeSliderValue.md#getoutlinealign)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getOutlineAlign](DThemeWhiteTextBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L159)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getOutlineAlpha](../interfaces/DThemeSliderValue.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getOutlineAlpha](DThemeWhiteTextBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L144)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getOutlineColor](../interfaces/DThemeSliderValue.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getOutlineColor](DThemeWhiteTextBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L140)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getOutlineMask](../interfaces/DThemeSliderValue.md#getoutlinemask)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getOutlineMask](DThemeWhiteTextBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L163)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getOutlineOffset](../interfaces/DThemeSliderValue.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getOutlineOffset](DThemeWhiteTextBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L155)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getOutlineWidth](../interfaces/DThemeSliderValue.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getOutlineWidth](DThemeWhiteTextBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getPaddingBottom](../interfaces/DThemeSliderValue.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getPaddingBottom](DThemeWhiteTextBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getPaddingLeft](../interfaces/DThemeSliderValue.md#getpaddingleft)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getPaddingLeft](DThemeWhiteTextBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getPaddingRight](../interfaces/DThemeSliderValue.md#getpaddingright)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getPaddingRight](DThemeWhiteTextBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getPaddingTop](../interfaces/DThemeSliderValue.md#getpaddingtop)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getPaddingTop](DThemeWhiteTextBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getPrecision

▸ **getPrecision**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getPrecision](../interfaces/DThemeSliderValue.md#getprecision)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L57)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getShadow](../interfaces/DThemeSliderValue.md#getshadow)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getShadow](DThemeWhiteTextBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getTextAlignHorizontal](../interfaces/DThemeSliderValue.md#gettextalignhorizontal)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getTextAlignHorizontal](DThemeWhiteTextBase.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L49)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getTextAlignVertical](../interfaces/DThemeSliderValue.md#gettextalignvertical)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getTextAlignVertical](DThemeWhiteTextBase.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L53)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getTextFormatter](../interfaces/DThemeSliderValue.md#gettextformatter)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getTextFormatter](DThemeWhiteTextBase.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L43)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getTextStyleClipping](../interfaces/DThemeSliderValue.md#gettextstyleclipping)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getTextStyleClipping](DThemeWhiteTextBase.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L31)

___

### getTextStyleFitting

▸ **getTextStyleFitting**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getTextStyleFitting](../interfaces/DThemeSliderValue.md#gettextstylefitting)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getTextStyleFitting](DThemeWhiteTextBase.md#gettextstylefitting)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L35)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getTextStyleWordWrap](../interfaces/DThemeSliderValue.md#gettextstylewordwrap)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getTextStyleWordWrap](DThemeWhiteTextBase.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L39)

___

### getTextValue

▸ **getTextValue**(`state`): `undefined` \| `VALUE`

Returns a text value.
Called to get a text vale if there is no text value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`undefined` \| `VALUE`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getTextValue](../interfaces/DThemeSliderValue.md#gettextvalue)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getTextValue](DThemeWhiteTextBase.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L47)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getTitle](../interfaces/DThemeSliderValue.md#gettitle)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getTitle](DThemeWhiteTextBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getWeight](../interfaces/DThemeSliderValue.md#getweight)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getWeight](DThemeWhiteTextBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getWidth](../interfaces/DThemeSliderValue.md#getwidth)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getWidth](DThemeWhiteTextBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L26)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getX](../interfaces/DThemeSliderValue.md#getx)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getX](DThemeWhiteTextBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L18)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[getY](../interfaces/DThemeSliderValue.md#gety)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[getY](DThemeWhiteTextBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L22)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[isOverflowMaskEnabled](../interfaces/DThemeSliderValue.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[isOverflowMaskEnabled](DThemeWhiteTextBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L27)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[newShadow](../interfaces/DThemeSliderValue.md#newshadow)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[newShadow](DThemeWhiteTextBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[newShadowWeak](../interfaces/DThemeSliderValue.md#newshadowweak)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[newShadowWeak](DThemeWhiteTextBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L195)

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

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[newState](../interfaces/DThemeSliderValue.md#newstate)

#### Overrides

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[newState](DThemeWhiteTextBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-slider-value.ts#L61)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Implementation of

[DThemeSliderValue](../interfaces/DThemeSliderValue.md).[newTextValue](../interfaces/DThemeSliderValue.md#newtextvalue)

#### Inherited from

[DThemeWhiteTextBase](DThemeWhiteTextBase.md).[newTextValue](DThemeWhiteTextBase.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L51)
