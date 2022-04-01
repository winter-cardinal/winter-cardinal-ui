[Winter Cardinal UI - v0.160.0](../index.md) / DThemePickerColorGradient

# Interface: DThemePickerColorGradient

## Hierarchy

- [`DThemeBase`](DThemeBase.md)

  ↳ **`DThemePickerColorGradient`**

## Implemented by

- [`DThemeDarkPickerColorGradient`](../classes/DThemeDarkPickerColorGradient.md)
- [`DThemeWhitePickerColorGradient`](../classes/DThemeWhitePickerColorGradient.md)

## Table of contents

### Methods

- [getAlpha](DThemePickerColorGradient.md#getalpha)
- [getBackgroundAlpha](DThemePickerColorGradient.md#getbackgroundalpha)
- [getBackgroundColor](DThemePickerColorGradient.md#getbackgroundcolor)
- [getBackgroundTexture](DThemePickerColorGradient.md#getbackgroundtexture)
- [getBorderAlign](DThemePickerColorGradient.md#getborderalign)
- [getBorderAlpha](DThemePickerColorGradient.md#getborderalpha)
- [getBorderColor](DThemePickerColorGradient.md#getbordercolor)
- [getBorderMask](DThemePickerColorGradient.md#getbordermask)
- [getBorderTexture](DThemePickerColorGradient.md#getbordertexture)
- [getBorderWidth](DThemePickerColorGradient.md#getborderwidth)
- [getClearType](DThemePickerColorGradient.md#getcleartype)
- [getColor](DThemePickerColorGradient.md#getcolor)
- [getCornerMask](DThemePickerColorGradient.md#getcornermask)
- [getCornerRadius](DThemePickerColorGradient.md#getcornerradius)
- [getCursor](DThemePickerColorGradient.md#getcursor)
- [getFontFamilly](DThemePickerColorGradient.md#getfontfamilly)
- [getFontSize](DThemePickerColorGradient.md#getfontsize)
- [getFontStyle](DThemePickerColorGradient.md#getfontstyle)
- [getFontVariant](DThemePickerColorGradient.md#getfontvariant)
- [getFontWeight](DThemePickerColorGradient.md#getfontweight)
- [getGradientAnchorOutlineTexture](DThemePickerColorGradient.md#getgradientanchoroutlinetexture)
- [getGradientAnchorOutlinedTexture](DThemePickerColorGradient.md#getgradientanchoroutlinedtexture)
- [getGradientAnchorTexture](DThemePickerColorGradient.md#getgradientanchortexture)
- [getGradientCheckerColors](DThemePickerColorGradient.md#getgradientcheckercolors)
- [getGradientDirectionMargin](DThemePickerColorGradient.md#getgradientdirectionmargin)
- [getGradientDirectionTexture](DThemePickerColorGradient.md#getgradientdirectiontexture)
- [getGradientPointsMargin](DThemePickerColorGradient.md#getgradientpointsmargin)
- [getGradientPointsWidth](DThemePickerColorGradient.md#getgradientpointswidth)
- [getGradientRecentColumn](DThemePickerColorGradient.md#getgradientrecentcolumn)
- [getGradientRecentCount](DThemePickerColorGradient.md#getgradientrecentcount)
- [getGradientRecentMargin](DThemePickerColorGradient.md#getgradientrecentmargin)
- [getGradientRecentWidth](DThemePickerColorGradient.md#getgradientrecentwidth)
- [getGradientRecents](DThemePickerColorGradient.md#getgradientrecents)
- [getHeight](DThemePickerColorGradient.md#getheight)
- [getInteractive](DThemePickerColorGradient.md#getinteractive)
- [getLineHeight](DThemePickerColorGradient.md#getlineheight)
- [getOutlineAlign](DThemePickerColorGradient.md#getoutlinealign)
- [getOutlineAlpha](DThemePickerColorGradient.md#getoutlinealpha)
- [getOutlineColor](DThemePickerColorGradient.md#getoutlinecolor)
- [getOutlineMask](DThemePickerColorGradient.md#getoutlinemask)
- [getOutlineOffset](DThemePickerColorGradient.md#getoutlineoffset)
- [getOutlineWidth](DThemePickerColorGradient.md#getoutlinewidth)
- [getPaddingBottom](DThemePickerColorGradient.md#getpaddingbottom)
- [getPaddingLeft](DThemePickerColorGradient.md#getpaddingleft)
- [getPaddingRight](DThemePickerColorGradient.md#getpaddingright)
- [getPaddingTop](DThemePickerColorGradient.md#getpaddingtop)
- [getShadow](DThemePickerColorGradient.md#getshadow)
- [getTitle](DThemePickerColorGradient.md#gettitle)
- [getWeight](DThemePickerColorGradient.md#getweight)
- [getWidth](DThemePickerColorGradient.md#getwidth)
- [getX](DThemePickerColorGradient.md#getx)
- [getY](DThemePickerColorGradient.md#gety)
- [newShadow](DThemePickerColorGradient.md#newshadow)
- [newShadowWeak](DThemePickerColorGradient.md#newshadowweak)
- [newState](DThemePickerColorGradient.md#newstate)

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

[DThemeBase](DThemeBase.md).[getAlpha](DThemeBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeBase](DThemeBase.md).[getBackgroundAlpha](DThemeBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L503)

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

[DThemeBase](DThemeBase.md).[getBackgroundColor](DThemeBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeBase](DThemeBase.md).[getBackgroundTexture](DThemeBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

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

[DThemeBase](DThemeBase.md).[getBorderAlign](DThemeBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

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

[DThemeBase](DThemeBase.md).[getBorderAlpha](DThemeBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L523)

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

[DThemeBase](DThemeBase.md).[getBorderColor](DThemeBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L516)

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

[DThemeBase](DThemeBase.md).[getBorderMask](DThemeBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeBase](DThemeBase.md).[getBorderTexture](DThemeBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:549](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L549)

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

[DThemeBase](DThemeBase.md).[getBorderWidth](DThemeBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getClearType](DThemeBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

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

[DThemeBase](DThemeBase.md).[getColor](DThemeBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getCornerMask](DThemeBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getCornerRadius](DThemeBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L574)

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

[DThemeBase](DThemeBase.md).[getCursor](DThemeBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeBase](DThemeBase.md).[getFontFamilly](DThemeBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getFontSize](DThemeBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeBase](DThemeBase.md).[getFontStyle](DThemeBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeBase](DThemeBase.md).[getFontVariant](DThemeBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeBase](DThemeBase.md).[getFontWeight](DThemeBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getGradientAnchorOutlineTexture

▸ **getGradientAnchorOutlineTexture**(): `Texture`

#### Returns

`Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L30)

___

### getGradientAnchorOutlinedTexture

▸ **getGradientAnchorOutlinedTexture**(): `Texture`

#### Returns

`Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L29)

___

### getGradientAnchorTexture

▸ **getGradientAnchorTexture**(): `Texture`

#### Returns

`Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L28)

___

### getGradientCheckerColors

▸ **getGradientCheckerColors**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L41)

___

### getGradientDirectionMargin

▸ **getGradientDirectionMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L32)

___

### getGradientDirectionTexture

▸ **getGradientDirectionTexture**(): `Texture`

#### Returns

`Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L33)

___

### getGradientPointsMargin

▸ **getGradientPointsMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L26)

___

### getGradientPointsWidth

▸ **getGradientPointsWidth**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L25)

___

### getGradientRecentColumn

▸ **getGradientRecentColumn**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L35)

___

### getGradientRecentCount

▸ **getGradientRecentCount**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L38)

___

### getGradientRecentMargin

▸ **getGradientRecentMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L37)

___

### getGradientRecentWidth

▸ **getGradientRecentWidth**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L36)

___

### getGradientRecents

▸ **getGradientRecents**(): [`DColorGradient`](DColorGradient.md)[]

#### Returns

[`DColorGradient`](DColorGradient.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient.ts#L39)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeBase](DThemeBase.md).[getHeight](DThemeBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L483)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getInteractive](DThemeBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:633](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L633)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getLineHeight](DThemeBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[DThemeBase](DThemeBase.md).[getOutlineAlign](DThemeBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

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

[DThemeBase](DThemeBase.md).[getOutlineAlpha](DThemeBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L594)

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

[DThemeBase](DThemeBase.md).[getOutlineColor](DThemeBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L587)

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

[DThemeBase](DThemeBase.md).[getOutlineMask](DThemeBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeBase](DThemeBase.md).[getOutlineOffset](DThemeBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

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

[DThemeBase](DThemeBase.md).[getOutlineWidth](DThemeBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getPaddingBottom](DThemeBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L569)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getPaddingLeft](DThemeBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L554)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getPaddingRight](DThemeBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L559)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getPaddingTop](DThemeBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeBase](DThemeBase.md).[getShadow](DThemeBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeBase](DThemeBase.md).[getTitle](DThemeBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeBase](DThemeBase.md).[getWeight](DThemeBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeBase](DThemeBase.md).[getWidth](DThemeBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeBase](DThemeBase.md).[getX](DThemeBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L473)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeBase](DThemeBase.md).[getY](DThemeBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L478)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeBase](DThemeBase.md).[newShadow](DThemeBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L661)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeBase](DThemeBase.md).[newShadowWeak](DThemeBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L666)

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

[DThemeBase](DThemeBase.md).[newState](DThemeBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L638)
