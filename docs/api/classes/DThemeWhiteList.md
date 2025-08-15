[Winter Cardinal UI - v0.457.0](../index.md) / DThemeWhiteList

# Class: DThemeWhiteList

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhitePane`](DThemeWhitePane.md)

  ↳ **`DThemeWhiteList`**

  ↳↳ [`DThemeWhiteDialogSelectList`](DThemeWhiteDialogSelectList.md)

## Implements

- [`DThemeList`](../interfaces/DThemeList.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteList.md#constructor)

### Methods

- [getAlpha](DThemeWhiteList.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteList.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteList.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteList.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteList.md#getborderalign)
- [getBorderAlpha](DThemeWhiteList.md#getborderalpha)
- [getBorderColor](DThemeWhiteList.md#getbordercolor)
- [getBorderMask](DThemeWhiteList.md#getbordermask)
- [getBorderTexture](DThemeWhiteList.md#getbordertexture)
- [getBorderWidth](DThemeWhiteList.md#getborderwidth)
- [getClearType](DThemeWhiteList.md#getcleartype)
- [getColor](DThemeWhiteList.md#getcolor)
- [getCornerMask](DThemeWhiteList.md#getcornermask)
- [getCornerRadius](DThemeWhiteList.md#getcornerradius)
- [getCursor](DThemeWhiteList.md#getcursor)
- [getFontFamilly](DThemeWhiteList.md#getfontfamilly)
- [getFontSize](DThemeWhiteList.md#getfontsize)
- [getFontStyle](DThemeWhiteList.md#getfontstyle)
- [getFontVariant](DThemeWhiteList.md#getfontvariant)
- [getFontWeight](DThemeWhiteList.md#getfontweight)
- [getGestureMode](DThemeWhiteList.md#getgesturemode)
- [getHeight](DThemeWhiteList.md#getheight)
- [getInteractive](DThemeWhiteList.md#getinteractive)
- [getLineHeight](DThemeWhiteList.md#getlineheight)
- [getOutlineAlign](DThemeWhiteList.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteList.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteList.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteList.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteList.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteList.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteList.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteList.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteList.md#getpaddingright)
- [getPaddingTop](DThemeWhiteList.md#getpaddingtop)
- [getShadow](DThemeWhiteList.md#getshadow)
- [getTitle](DThemeWhiteList.md#gettitle)
- [getWeight](DThemeWhiteList.md#getweight)
- [getWheelSpeed](DThemeWhiteList.md#getwheelspeed)
- [getWidth](DThemeWhiteList.md#getwidth)
- [getX](DThemeWhiteList.md#getx)
- [getY](DThemeWhiteList.md#gety)
- [isOverflowMaskEnabled](DThemeWhiteList.md#isoverflowmaskenabled)
- [newShadow](DThemeWhiteList.md#newshadow)
- [newShadowWeak](DThemeWhiteList.md#newshadowweak)
- [newState](DThemeWhiteList.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteList**(): [`DThemeWhiteList`](DThemeWhiteList.md)

#### Returns

[`DThemeWhiteList`](DThemeWhiteList.md)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[constructor](DThemeWhitePane.md#constructor)

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

[DThemeList](../interfaces/DThemeList.md).[getAlpha](../interfaces/DThemeList.md#getalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getAlpha](DThemeWhitePane.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeList](../interfaces/DThemeList.md).[getBackgroundAlpha](../interfaces/DThemeList.md#getbackgroundalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundAlpha](DThemeWhitePane.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L84)

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

[DThemeList](../interfaces/DThemeList.md).[getBackgroundColor](../interfaces/DThemeList.md#getbackgroundcolor)

#### Overrides

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundColor](DThemeWhitePane.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-list.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-list.ts#L12)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getBackgroundTexture](../interfaces/DThemeList.md#getbackgroundtexture)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundTexture](DThemeWhitePane.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L88)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderAlign](../interfaces/DThemeList.md#getborderalign)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderAlign](DThemeWhitePane.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L22)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderAlpha](../interfaces/DThemeList.md#getborderalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderAlpha](DThemeWhitePane.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L96)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderColor](../interfaces/DThemeList.md#getbordercolor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderColor](DThemeWhitePane.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L92)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderMask](../interfaces/DThemeList.md#getbordermask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderMask](DThemeWhitePane.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getBorderTexture](../interfaces/DThemeList.md#getbordertexture)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderTexture](DThemeWhitePane.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L112)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderWidth](../interfaces/DThemeList.md#getborderwidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderWidth](DThemeWhitePane.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getClearType](../interfaces/DThemeList.md#getcleartype)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getClearType](DThemeWhitePane.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L167)

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

[DThemeList](../interfaces/DThemeList.md).[getColor](../interfaces/DThemeList.md#getcolor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getColor](DThemeWhitePane.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getCornerMask](../interfaces/DThemeList.md#getcornermask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCornerMask](DThemeWhitePane.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getCornerRadius](../interfaces/DThemeList.md#getcornerradius)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCornerRadius](DThemeWhitePane.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L132)

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

[DThemeList](../interfaces/DThemeList.md).[getCursor](../interfaces/DThemeList.md#getcursor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCursor](DThemeWhitePane.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontFamilly](../interfaces/DThemeList.md#getfontfamilly)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontFamilly](DThemeWhitePane.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontSize](../interfaces/DThemeList.md#getfontsize)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontSize](DThemeWhitePane.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontStyle](../interfaces/DThemeList.md#getfontstyle)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontStyle](DThemeWhitePane.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontVariant](../interfaces/DThemeList.md#getfontvariant)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontVariant](DThemeWhitePane.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontWeight](../interfaces/DThemeList.md#getfontweight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontWeight](DThemeWhitePane.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(): [`UtilGestureMode`](../index.md#utilgesturemode)

#### Returns

[`UtilGestureMode`](../index.md#utilgesturemode)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getGestureMode](../interfaces/DThemeList.md#getgesturemode)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getGestureMode](DThemeWhitePane.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L38)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getHeight](../interfaces/DThemeList.md#getheight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getHeight](DThemeWhitePane.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getInteractive](../interfaces/DThemeList.md#getinteractive)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getInteractive](DThemeWhitePane.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L30)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getLineHeight](../interfaces/DThemeList.md#getlineheight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getLineHeight](DThemeWhitePane.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineAlign](../interfaces/DThemeList.md#getoutlinealign)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineAlign](DThemeWhitePane.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L26)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineAlpha](../interfaces/DThemeList.md#getoutlinealpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineAlpha](DThemeWhitePane.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L144)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineColor](../interfaces/DThemeList.md#getoutlinecolor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineColor](DThemeWhitePane.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L140)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineMask](../interfaces/DThemeList.md#getoutlinemask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineMask](DThemeWhitePane.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L163)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineOffset](../interfaces/DThemeList.md#getoutlineoffset)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineOffset](DThemeWhitePane.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L155)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineWidth](../interfaces/DThemeList.md#getoutlinewidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineWidth](DThemeWhitePane.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getPaddingBottom](../interfaces/DThemeList.md#getpaddingbottom)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingBottom](DThemeWhitePane.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getPaddingLeft](../interfaces/DThemeList.md#getpaddingleft)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingLeft](DThemeWhitePane.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getPaddingRight](../interfaces/DThemeList.md#getpaddingright)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingRight](DThemeWhitePane.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getPaddingTop](../interfaces/DThemeList.md#getpaddingtop)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingTop](DThemeWhitePane.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getShadow](../interfaces/DThemeList.md#getshadow)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getShadow](DThemeWhitePane.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getTitle](../interfaces/DThemeList.md#gettitle)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getTitle](DThemeWhitePane.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getWeight](../interfaces/DThemeList.md#getweight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWeight](DThemeWhitePane.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWheelSpeed

▸ **getWheelSpeed**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getWheelSpeed](../interfaces/DThemeList.md#getwheelspeed)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWheelSpeed](DThemeWhitePane.md#getwheelspeed)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L34)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getWidth](../interfaces/DThemeList.md#getwidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWidth](DThemeWhitePane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getX](../interfaces/DThemeList.md#getx)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getX](DThemeWhitePane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getY](../interfaces/DThemeList.md#gety)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getY](DThemeWhitePane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[isOverflowMaskEnabled](../interfaces/DThemeList.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[isOverflowMaskEnabled](DThemeWhitePane.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[newShadow](../interfaces/DThemeList.md#newshadow)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newShadow](DThemeWhitePane.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[newShadowWeak](../interfaces/DThemeList.md#newshadowweak)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newShadowWeak](DThemeWhitePane.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L195)

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

[DThemeList](../interfaces/DThemeList.md).[newState](../interfaces/DThemeList.md#newstate)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newState](DThemeWhitePane.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L179)
