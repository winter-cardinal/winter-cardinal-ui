[Winter Cardinal UI - v0.414.0](../index.md) / DThemeWhiteTable

# Class: DThemeWhiteTable

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhitePane`](DThemeWhitePane.md)

  ↳ **`DThemeWhiteTable`**

## Implements

- [`DThemeTable`](../interfaces/DThemeTable.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteTable.md#constructor)

### Methods

- [getAlpha](DThemeWhiteTable.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteTable.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteTable.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteTable.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteTable.md#getborderalign)
- [getBorderAlpha](DThemeWhiteTable.md#getborderalpha)
- [getBorderColor](DThemeWhiteTable.md#getbordercolor)
- [getBorderMask](DThemeWhiteTable.md#getbordermask)
- [getBorderTexture](DThemeWhiteTable.md#getbordertexture)
- [getBorderWidth](DThemeWhiteTable.md#getborderwidth)
- [getClearType](DThemeWhiteTable.md#getcleartype)
- [getColor](DThemeWhiteTable.md#getcolor)
- [getCornerMask](DThemeWhiteTable.md#getcornermask)
- [getCornerRadius](DThemeWhiteTable.md#getcornerradius)
- [getCursor](DThemeWhiteTable.md#getcursor)
- [getFontFamilly](DThemeWhiteTable.md#getfontfamilly)
- [getFontSize](DThemeWhiteTable.md#getfontsize)
- [getFontStyle](DThemeWhiteTable.md#getfontstyle)
- [getFontVariant](DThemeWhiteTable.md#getfontvariant)
- [getFontWeight](DThemeWhiteTable.md#getfontweight)
- [getGestureMode](DThemeWhiteTable.md#getgesturemode)
- [getHeight](DThemeWhiteTable.md#getheight)
- [getInteractive](DThemeWhiteTable.md#getinteractive)
- [getLineHeight](DThemeWhiteTable.md#getlineheight)
- [getMargin](DThemeWhiteTable.md#getmargin)
- [getOutlineAlign](DThemeWhiteTable.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteTable.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteTable.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteTable.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteTable.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteTable.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteTable.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteTable.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteTable.md#getpaddingright)
- [getPaddingTop](DThemeWhiteTable.md#getpaddingtop)
- [getShadow](DThemeWhiteTable.md#getshadow)
- [getTitle](DThemeWhiteTable.md#gettitle)
- [getWeight](DThemeWhiteTable.md#getweight)
- [getWheelSpeed](DThemeWhiteTable.md#getwheelspeed)
- [getWidth](DThemeWhiteTable.md#getwidth)
- [getX](DThemeWhiteTable.md#getx)
- [getY](DThemeWhiteTable.md#gety)
- [isOverflowMaskEnabled](DThemeWhiteTable.md#isoverflowmaskenabled)
- [newShadow](DThemeWhiteTable.md#newshadow)
- [newShadowWeak](DThemeWhiteTable.md#newshadowweak)
- [newState](DThemeWhiteTable.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteTable**(): [`DThemeWhiteTable`](DThemeWhiteTable.md)

#### Returns

[`DThemeWhiteTable`](DThemeWhiteTable.md)

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

[DThemeTable](../interfaces/DThemeTable.md).[getAlpha](../interfaces/DThemeTable.md#getalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getAlpha](DThemeWhitePane.md#getalpha)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBackgroundAlpha](../interfaces/DThemeTable.md#getbackgroundalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundAlpha](DThemeWhitePane.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L84)

___

### getBackgroundColor

▸ **getBackgroundColor**(): `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getBackgroundColor](../interfaces/DThemeTable.md#getbackgroundcolor)

#### Overrides

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundColor](DThemeWhitePane.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getBackgroundTexture](../interfaces/DThemeTable.md#getbackgroundtexture)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundTexture](DThemeWhitePane.md#getbackgroundtexture)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderAlign](../interfaces/DThemeTable.md#getborderalign)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderAlign](DThemeWhitePane.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L22)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderAlpha](../interfaces/DThemeTable.md#getborderalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderAlpha](DThemeWhitePane.md#getborderalpha)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderColor](../interfaces/DThemeTable.md#getbordercolor)

#### Overrides

[DThemeWhitePane](DThemeWhitePane.md).[getBorderColor](DThemeWhitePane.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table.ts#L17)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderMask](../interfaces/DThemeTable.md#getbordermask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderMask](DThemeWhitePane.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getBorderTexture](../interfaces/DThemeTable.md#getbordertexture)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderTexture](DThemeWhitePane.md#getbordertexture)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderWidth](../interfaces/DThemeTable.md#getborderwidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderWidth](DThemeWhitePane.md#getborderwidth)

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

[DThemeTable](../interfaces/DThemeTable.md).[getClearType](../interfaces/DThemeTable.md#getcleartype)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getClearType](DThemeWhitePane.md#getcleartype)

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

[DThemeTable](../interfaces/DThemeTable.md).[getColor](../interfaces/DThemeTable.md#getcolor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getColor](DThemeWhitePane.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getCornerMask](../interfaces/DThemeTable.md#getcornermask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCornerMask](DThemeWhitePane.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getCornerRadius](../interfaces/DThemeTable.md#getcornerradius)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCornerRadius](DThemeWhitePane.md#getcornerradius)

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

[DThemeTable](../interfaces/DThemeTable.md).[getCursor](../interfaces/DThemeTable.md#getcursor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCursor](DThemeWhitePane.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontFamilly](../interfaces/DThemeTable.md#getfontfamilly)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontFamilly](DThemeWhitePane.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontSize](../interfaces/DThemeTable.md#getfontsize)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontSize](DThemeWhitePane.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontStyle](../interfaces/DThemeTable.md#getfontstyle)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontStyle](DThemeWhitePane.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontVariant](../interfaces/DThemeTable.md#getfontvariant)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontVariant](DThemeWhitePane.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontWeight](../interfaces/DThemeTable.md#getfontweight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontWeight](DThemeWhitePane.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(): [`UtilGestureMode`](../index.md#utilgesturemode)

#### Returns

[`UtilGestureMode`](../index.md#utilgesturemode)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getGestureMode](../interfaces/DThemeTable.md#getgesturemode)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getGestureMode](DThemeWhitePane.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L38)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getHeight](../interfaces/DThemeTable.md#getheight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getHeight](DThemeWhitePane.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getInteractive](../interfaces/DThemeTable.md#getinteractive)

#### Overrides

[DThemeWhitePane](DThemeWhitePane.md).[getInteractive](DThemeWhitePane.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getLineHeight](../interfaces/DThemeTable.md#getlineheight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getLineHeight](DThemeWhitePane.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table.ts#L21)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineAlign](../interfaces/DThemeTable.md#getoutlinealign)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineAlign](DThemeWhitePane.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L26)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineAlpha](../interfaces/DThemeTable.md#getoutlinealpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineAlpha](DThemeWhitePane.md#getoutlinealpha)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineColor](../interfaces/DThemeTable.md#getoutlinecolor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineColor](DThemeWhitePane.md#getoutlinecolor)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineMask](../interfaces/DThemeTable.md#getoutlinemask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineMask](DThemeWhitePane.md#getoutlinemask)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineOffset](../interfaces/DThemeTable.md#getoutlineoffset)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineOffset](DThemeWhitePane.md#getoutlineoffset)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineWidth](../interfaces/DThemeTable.md#getoutlinewidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineWidth](DThemeWhitePane.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getPaddingBottom](../interfaces/DThemeTable.md#getpaddingbottom)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingBottom](DThemeWhitePane.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getPaddingLeft](../interfaces/DThemeTable.md#getpaddingleft)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingLeft](DThemeWhitePane.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getPaddingRight](../interfaces/DThemeTable.md#getpaddingright)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingRight](DThemeWhitePane.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getPaddingTop](../interfaces/DThemeTable.md#getpaddingtop)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingTop](DThemeWhitePane.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getShadow](../interfaces/DThemeTable.md#getshadow)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getShadow](DThemeWhitePane.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getTitle](../interfaces/DThemeTable.md#gettitle)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getTitle](DThemeWhitePane.md#gettitle)

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

[DThemeTable](../interfaces/DThemeTable.md).[getWeight](../interfaces/DThemeTable.md#getweight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWeight](DThemeWhitePane.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWheelSpeed

▸ **getWheelSpeed**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getWheelSpeed](../interfaces/DThemeTable.md#getwheelspeed)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWheelSpeed](DThemeWhitePane.md#getwheelspeed)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L34)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getWidth](../interfaces/DThemeTable.md#getwidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWidth](DThemeWhitePane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getX](../interfaces/DThemeTable.md#getx)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getX](DThemeWhitePane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getY](../interfaces/DThemeTable.md#gety)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getY](DThemeWhitePane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[isOverflowMaskEnabled](../interfaces/DThemeTable.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[isOverflowMaskEnabled](DThemeWhitePane.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[newShadow](../interfaces/DThemeTable.md#newshadow)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newShadow](DThemeWhitePane.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[newShadowWeak](../interfaces/DThemeTable.md#newshadowweak)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newShadowWeak](DThemeWhitePane.md#newshadowweak)

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

[DThemeTable](../interfaces/DThemeTable.md).[newState](../interfaces/DThemeTable.md#newstate)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newState](DThemeWhitePane.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L179)
