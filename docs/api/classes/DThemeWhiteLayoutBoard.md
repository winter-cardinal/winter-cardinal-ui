[Winter Cardinal UI - v0.442.0](../index.md) / DThemeWhiteLayoutBoard

# Class: DThemeWhiteLayoutBoard

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhiteBase`](DThemeWhiteBase.md)

  ↳ **`DThemeWhiteLayoutBoard`**

## Implements

- [`DThemeLayoutBoard`](../interfaces/DThemeLayoutBoard.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteLayoutBoard.md#constructor)

### Methods

- [getAlpha](DThemeWhiteLayoutBoard.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteLayoutBoard.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteLayoutBoard.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteLayoutBoard.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteLayoutBoard.md#getborderalign)
- [getBorderAlpha](DThemeWhiteLayoutBoard.md#getborderalpha)
- [getBorderColor](DThemeWhiteLayoutBoard.md#getbordercolor)
- [getBorderMask](DThemeWhiteLayoutBoard.md#getbordermask)
- [getBorderTexture](DThemeWhiteLayoutBoard.md#getbordertexture)
- [getBorderWidth](DThemeWhiteLayoutBoard.md#getborderwidth)
- [getClearType](DThemeWhiteLayoutBoard.md#getcleartype)
- [getColor](DThemeWhiteLayoutBoard.md#getcolor)
- [getCornerMask](DThemeWhiteLayoutBoard.md#getcornermask)
- [getCornerRadius](DThemeWhiteLayoutBoard.md#getcornerradius)
- [getCursor](DThemeWhiteLayoutBoard.md#getcursor)
- [getFontFamilly](DThemeWhiteLayoutBoard.md#getfontfamilly)
- [getFontSize](DThemeWhiteLayoutBoard.md#getfontsize)
- [getFontStyle](DThemeWhiteLayoutBoard.md#getfontstyle)
- [getFontVariant](DThemeWhiteLayoutBoard.md#getfontvariant)
- [getFontWeight](DThemeWhiteLayoutBoard.md#getfontweight)
- [getHeight](DThemeWhiteLayoutBoard.md#getheight)
- [getInteractive](DThemeWhiteLayoutBoard.md#getinteractive)
- [getLineHeight](DThemeWhiteLayoutBoard.md#getlineheight)
- [getOutlineAlign](DThemeWhiteLayoutBoard.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteLayoutBoard.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteLayoutBoard.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteLayoutBoard.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteLayoutBoard.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteLayoutBoard.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteLayoutBoard.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteLayoutBoard.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteLayoutBoard.md#getpaddingright)
- [getPaddingTop](DThemeWhiteLayoutBoard.md#getpaddingtop)
- [getShadow](DThemeWhiteLayoutBoard.md#getshadow)
- [getTitle](DThemeWhiteLayoutBoard.md#gettitle)
- [getWeight](DThemeWhiteLayoutBoard.md#getweight)
- [getWidth](DThemeWhiteLayoutBoard.md#getwidth)
- [getX](DThemeWhiteLayoutBoard.md#getx)
- [getY](DThemeWhiteLayoutBoard.md#gety)
- [newShadow](DThemeWhiteLayoutBoard.md#newshadow)
- [newShadowWeak](DThemeWhiteLayoutBoard.md#newshadowweak)
- [newState](DThemeWhiteLayoutBoard.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteLayoutBoard**(): [`DThemeWhiteLayoutBoard`](DThemeWhiteLayoutBoard.md)

#### Returns

[`DThemeWhiteLayoutBoard`](DThemeWhiteLayoutBoard.md)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getAlpha](../interfaces/DThemeLayoutBoard.md#getalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getAlpha](DThemeWhiteBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBackgroundAlpha](../interfaces/DThemeLayoutBoard.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundAlpha](DThemeWhiteBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L84)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBackgroundColor](../interfaces/DThemeLayoutBoard.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundColor](DThemeWhiteBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-board.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-board.ts#L12)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBackgroundTexture](../interfaces/DThemeLayoutBoard.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundTexture](DThemeWhiteBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L88)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBorderAlign](../interfaces/DThemeLayoutBoard.md#getborderalign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlign](DThemeWhiteBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L104)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBorderAlpha](../interfaces/DThemeLayoutBoard.md#getborderalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlpha](DThemeWhiteBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L96)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBorderColor](../interfaces/DThemeLayoutBoard.md#getbordercolor)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderColor](DThemeWhiteBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-board.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-board.ts#L16)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBorderMask](../interfaces/DThemeLayoutBoard.md#getbordermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderMask](DThemeWhiteBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBorderTexture](../interfaces/DThemeLayoutBoard.md#getbordertexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderTexture](DThemeWhiteBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L112)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getBorderWidth](../interfaces/DThemeLayoutBoard.md#getborderwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderWidth](DThemeWhiteBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getClearType](../interfaces/DThemeLayoutBoard.md#getcleartype)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getClearType](DThemeWhiteBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L167)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getColor](../interfaces/DThemeLayoutBoard.md#getcolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getColor](DThemeWhiteBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getCornerMask](../interfaces/DThemeLayoutBoard.md#getcornermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerMask](DThemeWhiteBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getCornerRadius](../interfaces/DThemeLayoutBoard.md#getcornerradius)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerRadius](DThemeWhiteBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L132)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getCursor](../interfaces/DThemeLayoutBoard.md#getcursor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCursor](DThemeWhiteBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getFontFamilly](../interfaces/DThemeLayoutBoard.md#getfontfamilly)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontFamilly](DThemeWhiteBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getFontSize](../interfaces/DThemeLayoutBoard.md#getfontsize)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontSize](DThemeWhiteBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getFontStyle](../interfaces/DThemeLayoutBoard.md#getfontstyle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontStyle](DThemeWhiteBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getFontVariant](../interfaces/DThemeLayoutBoard.md#getfontvariant)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontVariant](DThemeWhiteBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getFontWeight](../interfaces/DThemeLayoutBoard.md#getfontweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontWeight](DThemeWhiteBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getHeight](../interfaces/DThemeLayoutBoard.md#getheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getHeight](DThemeWhiteBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getInteractive](../interfaces/DThemeLayoutBoard.md#getinteractive)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getInteractive](DThemeWhiteBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-board.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-board.ts#L20)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getLineHeight](../interfaces/DThemeLayoutBoard.md#getlineheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getLineHeight](DThemeWhiteBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getOutlineAlign](../interfaces/DThemeLayoutBoard.md#getoutlinealign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlign](DThemeWhiteBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L159)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getOutlineAlpha](../interfaces/DThemeLayoutBoard.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlpha](DThemeWhiteBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L144)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getOutlineColor](../interfaces/DThemeLayoutBoard.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineColor](DThemeWhiteBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L140)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getOutlineMask](../interfaces/DThemeLayoutBoard.md#getoutlinemask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineMask](DThemeWhiteBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L163)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getOutlineOffset](../interfaces/DThemeLayoutBoard.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineOffset](DThemeWhiteBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L155)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getOutlineWidth](../interfaces/DThemeLayoutBoard.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineWidth](DThemeWhiteBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getPaddingBottom](../interfaces/DThemeLayoutBoard.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingBottom](DThemeWhiteBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getPaddingLeft](../interfaces/DThemeLayoutBoard.md#getpaddingleft)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingLeft](DThemeWhiteBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getPaddingRight](../interfaces/DThemeLayoutBoard.md#getpaddingright)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingRight](DThemeWhiteBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getPaddingTop](../interfaces/DThemeLayoutBoard.md#getpaddingtop)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingTop](DThemeWhiteBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getShadow](../interfaces/DThemeLayoutBoard.md#getshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getShadow](DThemeWhiteBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getTitle](../interfaces/DThemeLayoutBoard.md#gettitle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getTitle](DThemeWhiteBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getWeight](../interfaces/DThemeLayoutBoard.md#getweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWeight](DThemeWhiteBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getWidth](../interfaces/DThemeLayoutBoard.md#getwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWidth](DThemeWhiteBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getX](../interfaces/DThemeLayoutBoard.md#getx)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getX](DThemeWhiteBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[getY](../interfaces/DThemeLayoutBoard.md#gety)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getY](DThemeWhiteBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[newShadow](../interfaces/DThemeLayoutBoard.md#newshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadow](DThemeWhiteBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[newShadowWeak](../interfaces/DThemeLayoutBoard.md#newshadowweak)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadowWeak](DThemeWhiteBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L195)

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

[DThemeLayoutBoard](../interfaces/DThemeLayoutBoard.md).[newState](../interfaces/DThemeLayoutBoard.md#newstate)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[newState](DThemeWhiteBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-board.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-board.ts#L24)
