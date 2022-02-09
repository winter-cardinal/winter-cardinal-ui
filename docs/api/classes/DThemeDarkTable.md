[Winter Cardinal UI](../README.md) / DThemeDarkTable

# Class: DThemeDarkTable

## Hierarchy

- [`DThemeDarkPane`](DThemeDarkPane.md)

  ↳ **`DThemeDarkTable`**

## Implements

- [`DThemeTable`](../interfaces/DThemeTable.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkTable.md#constructor)

### Methods

- [getAlpha](DThemeDarkTable.md#getalpha)
- [getBackgroundAlpha](DThemeDarkTable.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkTable.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkTable.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkTable.md#getborderalign)
- [getBorderAlpha](DThemeDarkTable.md#getborderalpha)
- [getBorderColor](DThemeDarkTable.md#getbordercolor)
- [getBorderMask](DThemeDarkTable.md#getbordermask)
- [getBorderTexture](DThemeDarkTable.md#getbordertexture)
- [getBorderWidth](DThemeDarkTable.md#getborderwidth)
- [getClearType](DThemeDarkTable.md#getcleartype)
- [getColor](DThemeDarkTable.md#getcolor)
- [getCornerMask](DThemeDarkTable.md#getcornermask)
- [getCornerRadius](DThemeDarkTable.md#getcornerradius)
- [getCursor](DThemeDarkTable.md#getcursor)
- [getFontFamilly](DThemeDarkTable.md#getfontfamilly)
- [getFontSize](DThemeDarkTable.md#getfontsize)
- [getFontStyle](DThemeDarkTable.md#getfontstyle)
- [getFontVariant](DThemeDarkTable.md#getfontvariant)
- [getFontWeight](DThemeDarkTable.md#getfontweight)
- [getGestureMode](DThemeDarkTable.md#getgesturemode)
- [getHeight](DThemeDarkTable.md#getheight)
- [getInteractive](DThemeDarkTable.md#getinteractive)
- [getLineHeight](DThemeDarkTable.md#getlineheight)
- [getMargin](DThemeDarkTable.md#getmargin)
- [getOutlineAlign](DThemeDarkTable.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkTable.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkTable.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkTable.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkTable.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkTable.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkTable.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkTable.md#getpaddingleft)
- [getPaddingRight](DThemeDarkTable.md#getpaddingright)
- [getPaddingTop](DThemeDarkTable.md#getpaddingtop)
- [getShadow](DThemeDarkTable.md#getshadow)
- [getTitle](DThemeDarkTable.md#gettitle)
- [getWeight](DThemeDarkTable.md#getweight)
- [getWheelSpeed](DThemeDarkTable.md#getwheelspeed)
- [getWidth](DThemeDarkTable.md#getwidth)
- [getX](DThemeDarkTable.md#getx)
- [getY](DThemeDarkTable.md#gety)
- [isOverflowMaskEnabled](DThemeDarkTable.md#isoverflowmaskenabled)
- [newShadow](DThemeDarkTable.md#newshadow)
- [newShadowWeak](DThemeDarkTable.md#newshadowweak)
- [newState](DThemeDarkTable.md#newstate)

## Constructors

### constructor

• **new DThemeDarkTable**()

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[constructor](DThemeDarkPane.md#constructor)

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

[DThemeDarkPane](DThemeDarkPane.md).[getAlpha](DThemeDarkPane.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBackgroundAlpha](../interfaces/DThemeTable.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundAlpha](DThemeDarkPane.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

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

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundColor](DThemeDarkPane.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getBackgroundTexture](../interfaces/DThemeTable.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundTexture](DThemeDarkPane.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderAlign](../interfaces/DThemeTable.md#getborderalign)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderAlign](DThemeDarkPane.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L22)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderAlpha](../interfaces/DThemeTable.md#getborderalpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderAlpha](DThemeDarkPane.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderColor](../interfaces/DThemeTable.md#getbordercolor)

#### Overrides

[DThemeDarkPane](DThemeDarkPane.md).[getBorderColor](DThemeDarkPane.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table.ts#L17)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderMask](../interfaces/DThemeTable.md#getbordermask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderMask](DThemeDarkPane.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getBorderTexture](../interfaces/DThemeTable.md#getbordertexture)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderTexture](DThemeDarkPane.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeTable](../interfaces/DThemeTable.md).[getBorderWidth](../interfaces/DThemeTable.md#getborderwidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderWidth](DThemeDarkPane.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

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

[DThemeDarkPane](DThemeDarkPane.md).[getClearType](DThemeDarkPane.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeDarkPane](DThemeDarkPane.md).[getColor](DThemeDarkPane.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getCornerMask](../interfaces/DThemeTable.md#getcornermask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getCornerMask](DThemeDarkPane.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getCornerRadius](../interfaces/DThemeTable.md#getcornerradius)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getCornerRadius](DThemeDarkPane.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeDarkPane](DThemeDarkPane.md).[getCursor](DThemeDarkPane.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontFamilly](../interfaces/DThemeTable.md#getfontfamilly)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontFamilly](DThemeDarkPane.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontSize](../interfaces/DThemeTable.md#getfontsize)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontSize](DThemeDarkPane.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../README.md#dfontstyle)

#### Returns

[`DFontStyle`](../README.md#dfontstyle)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontStyle](../interfaces/DThemeTable.md#getfontstyle)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontStyle](DThemeDarkPane.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../README.md#dfontvariant)

#### Returns

[`DFontVariant`](../README.md#dfontvariant)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontVariant](../interfaces/DThemeTable.md#getfontvariant)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontVariant](DThemeDarkPane.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../README.md#dfontweight)

#### Returns

[`DFontWeight`](../README.md#dfontweight)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getFontWeight](../interfaces/DThemeTable.md#getfontweight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontWeight](DThemeDarkPane.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(): [`UtilGestureMode`](../README.md#utilgesturemode)

#### Returns

[`UtilGestureMode`](../README.md#utilgesturemode)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getGestureMode](../interfaces/DThemeTable.md#getgesturemode)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getGestureMode](DThemeDarkPane.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L38)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getHeight](../interfaces/DThemeTable.md#getheight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getHeight](DThemeDarkPane.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L62)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getInteractive](../interfaces/DThemeTable.md#getinteractive)

#### Overrides

[DThemeDarkPane](DThemeDarkPane.md).[getInteractive](DThemeDarkPane.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getLineHeight](../interfaces/DThemeTable.md#getlineheight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getLineHeight](DThemeDarkPane.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-table.ts#L21)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineAlign](../interfaces/DThemeTable.md#getoutlinealign)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineAlign](DThemeDarkPane.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L26)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineAlpha](../interfaces/DThemeTable.md#getoutlinealpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineAlpha](DThemeDarkPane.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineColor](../interfaces/DThemeTable.md#getoutlinecolor)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineColor](DThemeDarkPane.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineMask](../interfaces/DThemeTable.md#getoutlinemask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineMask](DThemeDarkPane.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineOffset](../interfaces/DThemeTable.md#getoutlineoffset)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineOffset](DThemeDarkPane.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeTable](../interfaces/DThemeTable.md).[getOutlineWidth](../interfaces/DThemeTable.md#getoutlinewidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineWidth](DThemeDarkPane.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getPaddingBottom](../interfaces/DThemeTable.md#getpaddingbottom)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingBottom](DThemeDarkPane.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getPaddingLeft](../interfaces/DThemeTable.md#getpaddingleft)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingLeft](DThemeDarkPane.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getPaddingRight](../interfaces/DThemeTable.md#getpaddingright)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingRight](DThemeDarkPane.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getPaddingTop](../interfaces/DThemeTable.md#getpaddingtop)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingTop](DThemeDarkPane.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

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

[DThemeDarkPane](DThemeDarkPane.md).[getShadow](DThemeDarkPane.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getTitle](../interfaces/DThemeTable.md#gettitle)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getTitle](DThemeDarkPane.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

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

[DThemeDarkPane](DThemeDarkPane.md).[getWeight](DThemeDarkPane.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWheelSpeed

▸ **getWheelSpeed**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getWheelSpeed](../interfaces/DThemeTable.md#getwheelspeed)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getWheelSpeed](DThemeDarkPane.md#getwheelspeed)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L34)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getWidth](../interfaces/DThemeTable.md#getwidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getWidth](DThemeDarkPane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getX](../interfaces/DThemeTable.md#getx)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getX](DThemeDarkPane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[getY](../interfaces/DThemeTable.md#gety)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getY](DThemeDarkPane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[isOverflowMaskEnabled](../interfaces/DThemeTable.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[isOverflowMaskEnabled](DThemeDarkPane.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[newShadow](../interfaces/DThemeTable.md#newshadow)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[newShadow](DThemeDarkPane.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTable](../interfaces/DThemeTable.md).[newShadowWeak](../interfaces/DThemeTable.md#newshadowweak)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[newShadowWeak](DThemeDarkPane.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeDarkPane](DThemeDarkPane.md).[newState](DThemeDarkPane.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L169)
