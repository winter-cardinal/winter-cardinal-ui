[Winter Cardinal UI - v0.164.0](../index.md) / DThemeWhitePane

# Class: DThemeWhitePane

## Hierarchy

- [`DThemeWhiteBase`](DThemeWhiteBase.md)

  ↳ **`DThemeWhitePane`**

  ↳↳ [`DThemeWhiteList`](DThemeWhiteList.md)

  ↳↳ [`DThemeWhiteMenuSided`](DThemeWhiteMenuSided.md)

  ↳↳ [`DThemeWhiteTable`](DThemeWhiteTable.md)

  ↳↳ [`DThemeWhiteTree`](DThemeWhiteTree.md)

## Implements

- [`DThemePane`](../interfaces/DThemePane.md)

## Table of contents

### Constructors

- [constructor](DThemeWhitePane.md#constructor)

### Methods

- [getAlpha](DThemeWhitePane.md#getalpha)
- [getBackgroundAlpha](DThemeWhitePane.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhitePane.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhitePane.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhitePane.md#getborderalign)
- [getBorderAlpha](DThemeWhitePane.md#getborderalpha)
- [getBorderColor](DThemeWhitePane.md#getbordercolor)
- [getBorderMask](DThemeWhitePane.md#getbordermask)
- [getBorderTexture](DThemeWhitePane.md#getbordertexture)
- [getBorderWidth](DThemeWhitePane.md#getborderwidth)
- [getClearType](DThemeWhitePane.md#getcleartype)
- [getColor](DThemeWhitePane.md#getcolor)
- [getCornerMask](DThemeWhitePane.md#getcornermask)
- [getCornerRadius](DThemeWhitePane.md#getcornerradius)
- [getCursor](DThemeWhitePane.md#getcursor)
- [getFontFamilly](DThemeWhitePane.md#getfontfamilly)
- [getFontSize](DThemeWhitePane.md#getfontsize)
- [getFontStyle](DThemeWhitePane.md#getfontstyle)
- [getFontVariant](DThemeWhitePane.md#getfontvariant)
- [getFontWeight](DThemeWhitePane.md#getfontweight)
- [getGestureMode](DThemeWhitePane.md#getgesturemode)
- [getHeight](DThemeWhitePane.md#getheight)
- [getInteractive](DThemeWhitePane.md#getinteractive)
- [getLineHeight](DThemeWhitePane.md#getlineheight)
- [getOutlineAlign](DThemeWhitePane.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhitePane.md#getoutlinealpha)
- [getOutlineColor](DThemeWhitePane.md#getoutlinecolor)
- [getOutlineMask](DThemeWhitePane.md#getoutlinemask)
- [getOutlineOffset](DThemeWhitePane.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhitePane.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhitePane.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhitePane.md#getpaddingleft)
- [getPaddingRight](DThemeWhitePane.md#getpaddingright)
- [getPaddingTop](DThemeWhitePane.md#getpaddingtop)
- [getShadow](DThemeWhitePane.md#getshadow)
- [getTitle](DThemeWhitePane.md#gettitle)
- [getWeight](DThemeWhitePane.md#getweight)
- [getWheelSpeed](DThemeWhitePane.md#getwheelspeed)
- [getWidth](DThemeWhitePane.md#getwidth)
- [getX](DThemeWhitePane.md#getx)
- [getY](DThemeWhitePane.md#gety)
- [isOverflowMaskEnabled](DThemeWhitePane.md#isoverflowmaskenabled)
- [newShadow](DThemeWhitePane.md#newshadow)
- [newShadowWeak](DThemeWhitePane.md#newshadowweak)
- [newState](DThemeWhitePane.md#newstate)

## Constructors

### constructor

• **new DThemeWhitePane**()

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

[DThemePane](../interfaces/DThemePane.md).[getAlpha](../interfaces/DThemePane.md#getalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getAlpha](DThemeWhiteBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemePane](../interfaces/DThemePane.md).[getBackgroundAlpha](../interfaces/DThemePane.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundAlpha](DThemeWhiteBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemePane](../interfaces/DThemePane.md).[getBackgroundColor](../interfaces/DThemePane.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundColor](DThemeWhiteBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L18)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getBackgroundTexture](../interfaces/DThemePane.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundTexture](DThemeWhiteBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemePane](../interfaces/DThemePane.md).[getBorderAlign](../interfaces/DThemePane.md#getborderalign)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlign](DThemeWhiteBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L22)

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

[DThemePane](../interfaces/DThemePane.md).[getBorderAlpha](../interfaces/DThemePane.md#getborderalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlpha](DThemeWhiteBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemePane](../interfaces/DThemePane.md).[getBorderColor](../interfaces/DThemePane.md#getbordercolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderColor](DThemeWhiteBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L82)

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

[DThemePane](../interfaces/DThemePane.md).[getBorderMask](../interfaces/DThemePane.md#getbordermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderMask](DThemeWhiteBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getBorderTexture](../interfaces/DThemePane.md#getbordertexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderTexture](DThemeWhiteBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemePane](../interfaces/DThemePane.md).[getBorderWidth](../interfaces/DThemePane.md#getborderwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderWidth](DThemeWhiteBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getClearType](../interfaces/DThemePane.md#getcleartype)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getClearType](DThemeWhiteBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemePane](../interfaces/DThemePane.md).[getColor](../interfaces/DThemePane.md#getcolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getColor](DThemeWhiteBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getCornerMask](../interfaces/DThemePane.md#getcornermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerMask](DThemeWhiteBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getCornerRadius](../interfaces/DThemePane.md#getcornerradius)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerRadius](DThemeWhiteBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemePane](../interfaces/DThemePane.md).[getCursor](../interfaces/DThemePane.md#getcursor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCursor](DThemeWhiteBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getFontFamilly](../interfaces/DThemePane.md#getfontfamilly)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontFamilly](DThemeWhiteBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getFontSize](../interfaces/DThemePane.md#getfontsize)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontSize](DThemeWhiteBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getFontStyle](../interfaces/DThemePane.md#getfontstyle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontStyle](DThemeWhiteBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getFontVariant](../interfaces/DThemePane.md#getfontvariant)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontVariant](DThemeWhiteBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getFontWeight](../interfaces/DThemePane.md#getfontweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontWeight](DThemeWhiteBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(): [`UtilGestureMode`](../index.md#utilgesturemode)

#### Returns

[`UtilGestureMode`](../index.md#utilgesturemode)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getGestureMode](../interfaces/DThemePane.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L38)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getHeight](../interfaces/DThemePane.md#getheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getHeight](DThemeWhiteBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L62)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getInteractive](../interfaces/DThemePane.md#getinteractive)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getInteractive](DThemeWhiteBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L30)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getLineHeight](../interfaces/DThemePane.md#getlineheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getLineHeight](DThemeWhiteBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemePane](../interfaces/DThemePane.md).[getOutlineAlign](../interfaces/DThemePane.md#getoutlinealign)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlign](DThemeWhiteBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L26)

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

[DThemePane](../interfaces/DThemePane.md).[getOutlineAlpha](../interfaces/DThemePane.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlpha](DThemeWhiteBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemePane](../interfaces/DThemePane.md).[getOutlineColor](../interfaces/DThemePane.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineColor](DThemeWhiteBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemePane](../interfaces/DThemePane.md).[getOutlineMask](../interfaces/DThemePane.md#getoutlinemask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineMask](DThemeWhiteBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemePane](../interfaces/DThemePane.md).[getOutlineOffset](../interfaces/DThemePane.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineOffset](DThemeWhiteBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemePane](../interfaces/DThemePane.md).[getOutlineWidth](../interfaces/DThemePane.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineWidth](DThemeWhiteBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getPaddingBottom](../interfaces/DThemePane.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingBottom](DThemeWhiteBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getPaddingLeft](../interfaces/DThemePane.md#getpaddingleft)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingLeft](DThemeWhiteBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getPaddingRight](../interfaces/DThemePane.md#getpaddingright)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingRight](DThemeWhiteBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getPaddingTop](../interfaces/DThemePane.md#getpaddingtop)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingTop](DThemeWhiteBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L114)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getShadow](../interfaces/DThemePane.md#getshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getShadow](DThemeWhiteBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getTitle](../interfaces/DThemePane.md#gettitle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getTitle](DThemeWhiteBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getWeight](../interfaces/DThemePane.md#getweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWeight](DThemeWhiteBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWheelSpeed

▸ **getWheelSpeed**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getWheelSpeed](../interfaces/DThemePane.md#getwheelspeed)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L34)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getWidth](../interfaces/DThemePane.md#getwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWidth](DThemeWhiteBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getX](../interfaces/DThemePane.md#getx)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getX](DThemeWhiteBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[getY](../interfaces/DThemePane.md#gety)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getY](DThemeWhiteBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[isOverflowMaskEnabled](../interfaces/DThemePane.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[newShadow](../interfaces/DThemePane.md#newshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadow](DThemeWhiteBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePane](../interfaces/DThemePane.md).[newShadowWeak](../interfaces/DThemePane.md#newshadowweak)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadowWeak](DThemeWhiteBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemePane](../interfaces/DThemePane.md).[newState](../interfaces/DThemePane.md#newstate)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newState](DThemeWhiteBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L169)
