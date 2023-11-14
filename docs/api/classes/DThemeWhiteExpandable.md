[Winter Cardinal UI - v0.374.0](../index.md) / DThemeWhiteExpandable

# Class: DThemeWhiteExpandable

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhiteLayoutVertical`](DThemeWhiteLayoutVertical.md)

  ↳ **`DThemeWhiteExpandable`**

## Implements

- [`DThemeExpandable`](../interfaces/DThemeExpandable.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteExpandable.md#constructor)

### Methods

- [getAlpha](DThemeWhiteExpandable.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteExpandable.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteExpandable.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteExpandable.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteExpandable.md#getborderalign)
- [getBorderAlpha](DThemeWhiteExpandable.md#getborderalpha)
- [getBorderColor](DThemeWhiteExpandable.md#getbordercolor)
- [getBorderMask](DThemeWhiteExpandable.md#getbordermask)
- [getBorderTexture](DThemeWhiteExpandable.md#getbordertexture)
- [getBorderWidth](DThemeWhiteExpandable.md#getborderwidth)
- [getClearType](DThemeWhiteExpandable.md#getcleartype)
- [getColor](DThemeWhiteExpandable.md#getcolor)
- [getCornerAdjust](DThemeWhiteExpandable.md#getcorneradjust)
- [getCornerMask](DThemeWhiteExpandable.md#getcornermask)
- [getCornerRadius](DThemeWhiteExpandable.md#getcornerradius)
- [getCursor](DThemeWhiteExpandable.md#getcursor)
- [getDirection](DThemeWhiteExpandable.md#getdirection)
- [getFontFamilly](DThemeWhiteExpandable.md#getfontfamilly)
- [getFontSize](DThemeWhiteExpandable.md#getfontsize)
- [getFontStyle](DThemeWhiteExpandable.md#getfontstyle)
- [getFontVariant](DThemeWhiteExpandable.md#getfontvariant)
- [getFontWeight](DThemeWhiteExpandable.md#getfontweight)
- [getHeight](DThemeWhiteExpandable.md#getheight)
- [getInteractive](DThemeWhiteExpandable.md#getinteractive)
- [getLineHeight](DThemeWhiteExpandable.md#getlineheight)
- [getMargin](DThemeWhiteExpandable.md#getmargin)
- [getMultiplicity](DThemeWhiteExpandable.md#getmultiplicity)
- [getOutlineAlign](DThemeWhiteExpandable.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteExpandable.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteExpandable.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteExpandable.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteExpandable.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteExpandable.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteExpandable.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteExpandable.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteExpandable.md#getpaddingright)
- [getPaddingTop](DThemeWhiteExpandable.md#getpaddingtop)
- [getReverse](DThemeWhiteExpandable.md#getreverse)
- [getShadow](DThemeWhiteExpandable.md#getshadow)
- [getTitle](DThemeWhiteExpandable.md#gettitle)
- [getWeight](DThemeWhiteExpandable.md#getweight)
- [getWidth](DThemeWhiteExpandable.md#getwidth)
- [getX](DThemeWhiteExpandable.md#getx)
- [getY](DThemeWhiteExpandable.md#gety)
- [newShadow](DThemeWhiteExpandable.md#newshadow)
- [newShadowWeak](DThemeWhiteExpandable.md#newshadowweak)
- [newState](DThemeWhiteExpandable.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteExpandable**(): [`DThemeWhiteExpandable`](DThemeWhiteExpandable.md)

#### Returns

[`DThemeWhiteExpandable`](DThemeWhiteExpandable.md)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[constructor](DThemeWhiteLayoutVertical.md#constructor)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getAlpha](../interfaces/DThemeExpandable.md#getalpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getAlpha](DThemeWhiteLayoutVertical.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBackgroundAlpha](../interfaces/DThemeExpandable.md#getbackgroundalpha)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundAlpha](DThemeWhiteLayoutVertical.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-expandable.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-expandable.ts#L19)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBackgroundColor](../interfaces/DThemeExpandable.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundColor](DThemeWhiteLayoutVertical.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-expandable.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-expandable.ts#L12)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBackgroundTexture](../interfaces/DThemeExpandable.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBackgroundTexture](DThemeWhiteLayoutVertical.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L88)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBorderAlign](../interfaces/DThemeExpandable.md#getborderalign)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderAlign](DThemeWhiteLayoutVertical.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L104)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBorderAlpha](../interfaces/DThemeExpandable.md#getborderalpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderAlpha](DThemeWhiteLayoutVertical.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L96)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBorderColor](../interfaces/DThemeExpandable.md#getbordercolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderColor](DThemeWhiteLayoutVertical.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L17)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBorderMask](../interfaces/DThemeExpandable.md#getbordermask)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderMask](DThemeWhiteLayoutVertical.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBorderTexture](../interfaces/DThemeExpandable.md#getbordertexture)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderTexture](DThemeWhiteLayoutVertical.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L112)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getBorderWidth](../interfaces/DThemeExpandable.md#getborderwidth)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getBorderWidth](DThemeWhiteLayoutVertical.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getClearType](../interfaces/DThemeExpandable.md#getcleartype)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getClearType](DThemeWhiteLayoutVertical.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L167)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getColor](../interfaces/DThemeExpandable.md#getcolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getColor](DThemeWhiteLayoutVertical.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getCornerAdjust](../interfaces/DThemeExpandable.md#getcorneradjust)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerAdjust](DThemeWhiteLayoutVertical.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getCornerMask](../interfaces/DThemeExpandable.md#getcornermask)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerMask](DThemeWhiteLayoutVertical.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-expandable.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-expandable.ts#L30)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getCornerRadius](../interfaces/DThemeExpandable.md#getcornerradius)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCornerRadius](DThemeWhiteLayoutVertical.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L132)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getCursor](../interfaces/DThemeExpandable.md#getcursor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getCursor](DThemeWhiteLayoutVertical.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getDirection](../interfaces/DThemeExpandable.md#getdirection)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getDirection](DThemeWhiteLayoutVertical.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-vertical.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-vertical.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getFontFamilly](../interfaces/DThemeExpandable.md#getfontfamilly)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontFamilly](DThemeWhiteLayoutVertical.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getFontSize](../interfaces/DThemeExpandable.md#getfontsize)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontSize](DThemeWhiteLayoutVertical.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getFontStyle](../interfaces/DThemeExpandable.md#getfontstyle)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontStyle](DThemeWhiteLayoutVertical.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getFontVariant](../interfaces/DThemeExpandable.md#getfontvariant)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontVariant](DThemeWhiteLayoutVertical.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getFontWeight](../interfaces/DThemeExpandable.md#getfontweight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getFontWeight](DThemeWhiteLayoutVertical.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getHeight](../interfaces/DThemeExpandable.md#getheight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getHeight](DThemeWhiteLayoutVertical.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getInteractive](../interfaces/DThemeExpandable.md#getinteractive)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getInteractive](DThemeWhiteLayoutVertical.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getLineHeight](../interfaces/DThemeExpandable.md#getlineheight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getLineHeight](DThemeWhiteLayoutVertical.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getMargin](../interfaces/DThemeExpandable.md#getmargin)

#### Overrides

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getMargin](DThemeWhiteLayoutVertical.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-expandable.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-expandable.ts#L26)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getMultiplicity](../interfaces/DThemeExpandable.md#getmultiplicity)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getMultiplicity](DThemeWhiteLayoutVertical.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L42)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getOutlineAlign](../interfaces/DThemeExpandable.md#getoutlinealign)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineAlign](DThemeWhiteLayoutVertical.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L159)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getOutlineAlpha](../interfaces/DThemeExpandable.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineAlpha](DThemeWhiteLayoutVertical.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L144)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getOutlineColor](../interfaces/DThemeExpandable.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineColor](DThemeWhiteLayoutVertical.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L140)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getOutlineMask](../interfaces/DThemeExpandable.md#getoutlinemask)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineMask](DThemeWhiteLayoutVertical.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L163)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getOutlineOffset](../interfaces/DThemeExpandable.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineOffset](DThemeWhiteLayoutVertical.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L155)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getOutlineWidth](../interfaces/DThemeExpandable.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getOutlineWidth](DThemeWhiteLayoutVertical.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getPaddingBottom](../interfaces/DThemeExpandable.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingBottom](DThemeWhiteLayoutVertical.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getPaddingLeft](../interfaces/DThemeExpandable.md#getpaddingleft)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingLeft](DThemeWhiteLayoutVertical.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getPaddingRight](../interfaces/DThemeExpandable.md#getpaddingright)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingRight](DThemeWhiteLayoutVertical.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getPaddingTop](../interfaces/DThemeExpandable.md#getpaddingtop)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getPaddingTop](DThemeWhiteLayoutVertical.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getReverse](../interfaces/DThemeExpandable.md#getreverse)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getReverse](DThemeWhiteLayoutVertical.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getShadow](../interfaces/DThemeExpandable.md#getshadow)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getShadow](DThemeWhiteLayoutVertical.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getTitle](../interfaces/DThemeExpandable.md#gettitle)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getTitle](DThemeWhiteLayoutVertical.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getWeight](../interfaces/DThemeExpandable.md#getweight)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getWeight](DThemeWhiteLayoutVertical.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getWidth](../interfaces/DThemeExpandable.md#getwidth)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getWidth](DThemeWhiteLayoutVertical.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-vertical.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout-vertical.ts#L16)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getX](../interfaces/DThemeExpandable.md#getx)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getX](DThemeWhiteLayoutVertical.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[getY](../interfaces/DThemeExpandable.md#gety)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[getY](DThemeWhiteLayoutVertical.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[newShadow](../interfaces/DThemeExpandable.md#newshadow)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newShadow](DThemeWhiteLayoutVertical.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeExpandable](../interfaces/DThemeExpandable.md).[newShadowWeak](../interfaces/DThemeExpandable.md#newshadowweak)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newShadowWeak](DThemeWhiteLayoutVertical.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L195)

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

[DThemeExpandable](../interfaces/DThemeExpandable.md).[newState](../interfaces/DThemeExpandable.md#newstate)

#### Inherited from

[DThemeWhiteLayoutVertical](DThemeWhiteLayoutVertical.md).[newState](DThemeWhiteLayoutVertical.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-layout.ts#L29)
