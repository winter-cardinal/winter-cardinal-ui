[Winter Cardinal UI - v0.167.0](../index.md) / DThemeWhiteDialogSelectList

# Class: DThemeWhiteDialogSelectList

## Hierarchy

- [`DThemeWhiteList`](DThemeWhiteList.md)

  ↳ **`DThemeWhiteDialogSelectList`**

## Implements

- [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteDialogSelectList.md#constructor)

### Methods

- [getAlpha](DThemeWhiteDialogSelectList.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteDialogSelectList.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteDialogSelectList.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteDialogSelectList.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteDialogSelectList.md#getborderalign)
- [getBorderAlpha](DThemeWhiteDialogSelectList.md#getborderalpha)
- [getBorderColor](DThemeWhiteDialogSelectList.md#getbordercolor)
- [getBorderMask](DThemeWhiteDialogSelectList.md#getbordermask)
- [getBorderTexture](DThemeWhiteDialogSelectList.md#getbordertexture)
- [getBorderWidth](DThemeWhiteDialogSelectList.md#getborderwidth)
- [getClearType](DThemeWhiteDialogSelectList.md#getcleartype)
- [getColor](DThemeWhiteDialogSelectList.md#getcolor)
- [getCornerMask](DThemeWhiteDialogSelectList.md#getcornermask)
- [getCornerRadius](DThemeWhiteDialogSelectList.md#getcornerradius)
- [getCursor](DThemeWhiteDialogSelectList.md#getcursor)
- [getFontFamilly](DThemeWhiteDialogSelectList.md#getfontfamilly)
- [getFontSize](DThemeWhiteDialogSelectList.md#getfontsize)
- [getFontStyle](DThemeWhiteDialogSelectList.md#getfontstyle)
- [getFontVariant](DThemeWhiteDialogSelectList.md#getfontvariant)
- [getFontWeight](DThemeWhiteDialogSelectList.md#getfontweight)
- [getGestureMode](DThemeWhiteDialogSelectList.md#getgesturemode)
- [getHeight](DThemeWhiteDialogSelectList.md#getheight)
- [getInteractive](DThemeWhiteDialogSelectList.md#getinteractive)
- [getLineHeight](DThemeWhiteDialogSelectList.md#getlineheight)
- [getOutlineAlign](DThemeWhiteDialogSelectList.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteDialogSelectList.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteDialogSelectList.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteDialogSelectList.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteDialogSelectList.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteDialogSelectList.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteDialogSelectList.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteDialogSelectList.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteDialogSelectList.md#getpaddingright)
- [getPaddingTop](DThemeWhiteDialogSelectList.md#getpaddingtop)
- [getShadow](DThemeWhiteDialogSelectList.md#getshadow)
- [getTitle](DThemeWhiteDialogSelectList.md#gettitle)
- [getWeight](DThemeWhiteDialogSelectList.md#getweight)
- [getWheelSpeed](DThemeWhiteDialogSelectList.md#getwheelspeed)
- [getWidth](DThemeWhiteDialogSelectList.md#getwidth)
- [getX](DThemeWhiteDialogSelectList.md#getx)
- [getY](DThemeWhiteDialogSelectList.md#gety)
- [isOverflowMaskEnabled](DThemeWhiteDialogSelectList.md#isoverflowmaskenabled)
- [newShadow](DThemeWhiteDialogSelectList.md#newshadow)
- [newShadowWeak](DThemeWhiteDialogSelectList.md#newshadowweak)
- [newState](DThemeWhiteDialogSelectList.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteDialogSelectList**()

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[constructor](DThemeWhiteList.md#constructor)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getAlpha](../interfaces/DThemeDialogSelecList.md#getalpha)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getAlpha](DThemeWhiteList.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBackgroundAlpha](../interfaces/DThemeDialogSelecList.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getBackgroundAlpha](DThemeWhiteList.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBackgroundColor](../interfaces/DThemeDialogSelecList.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteList](DThemeWhiteList.md).[getBackgroundColor](DThemeWhiteList.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBackgroundTexture](../interfaces/DThemeDialogSelecList.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getBackgroundTexture](DThemeWhiteList.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBorderAlign](../interfaces/DThemeDialogSelecList.md#getborderalign)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getBorderAlign](DThemeWhiteList.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L22)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBorderAlpha](../interfaces/DThemeDialogSelecList.md#getborderalpha)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getBorderAlpha](DThemeWhiteList.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBorderColor](../interfaces/DThemeDialogSelecList.md#getbordercolor)

#### Overrides

[DThemeWhiteList](DThemeWhiteList.md).[getBorderColor](DThemeWhiteList.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts#L17)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBorderMask](../interfaces/DThemeDialogSelecList.md#getbordermask)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getBorderMask](DThemeWhiteList.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBorderTexture](../interfaces/DThemeDialogSelecList.md#getbordertexture)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getBorderTexture](DThemeWhiteList.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getBorderWidth](../interfaces/DThemeDialogSelecList.md#getborderwidth)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getBorderWidth](DThemeWhiteList.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getClearType](../interfaces/DThemeDialogSelecList.md#getcleartype)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getClearType](DThemeWhiteList.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getColor](../interfaces/DThemeDialogSelecList.md#getcolor)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getColor](DThemeWhiteList.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getCornerMask](../interfaces/DThemeDialogSelecList.md#getcornermask)

#### Overrides

[DThemeWhiteList](DThemeWhiteList.md).[getCornerMask](DThemeWhiteList.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts#L25)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getCornerRadius](../interfaces/DThemeDialogSelecList.md#getcornerradius)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getCornerRadius](DThemeWhiteList.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getCursor](../interfaces/DThemeDialogSelecList.md#getcursor)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getCursor](DThemeWhiteList.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getFontFamilly](../interfaces/DThemeDialogSelecList.md#getfontfamilly)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getFontFamilly](DThemeWhiteList.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getFontSize](../interfaces/DThemeDialogSelecList.md#getfontsize)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getFontSize](DThemeWhiteList.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getFontStyle](../interfaces/DThemeDialogSelecList.md#getfontstyle)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getFontStyle](DThemeWhiteList.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getFontVariant](../interfaces/DThemeDialogSelecList.md#getfontvariant)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getFontVariant](DThemeWhiteList.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getFontWeight](../interfaces/DThemeDialogSelecList.md#getfontweight)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getFontWeight](DThemeWhiteList.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(): [`UtilGestureMode`](../index.md#utilgesturemode)

#### Returns

[`UtilGestureMode`](../index.md#utilgesturemode)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getGestureMode](../interfaces/DThemeDialogSelecList.md#getgesturemode)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getGestureMode](DThemeWhiteList.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L38)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getHeight](../interfaces/DThemeDialogSelecList.md#getheight)

#### Overrides

[DThemeWhiteList](DThemeWhiteList.md).[getHeight](DThemeWhiteList.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts#L21)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getInteractive](../interfaces/DThemeDialogSelecList.md#getinteractive)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getInteractive](DThemeWhiteList.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L30)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getLineHeight](../interfaces/DThemeDialogSelecList.md#getlineheight)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getLineHeight](DThemeWhiteList.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getOutlineAlign](../interfaces/DThemeDialogSelecList.md#getoutlinealign)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getOutlineAlign](DThemeWhiteList.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L26)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getOutlineAlpha](../interfaces/DThemeDialogSelecList.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getOutlineAlpha](DThemeWhiteList.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getOutlineColor](../interfaces/DThemeDialogSelecList.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getOutlineColor](DThemeWhiteList.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getOutlineMask](../interfaces/DThemeDialogSelecList.md#getoutlinemask)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getOutlineMask](DThemeWhiteList.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getOutlineOffset](../interfaces/DThemeDialogSelecList.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getOutlineOffset](DThemeWhiteList.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getOutlineWidth](../interfaces/DThemeDialogSelecList.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getOutlineWidth](DThemeWhiteList.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getPaddingBottom](../interfaces/DThemeDialogSelecList.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getPaddingBottom](DThemeWhiteList.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getPaddingLeft](../interfaces/DThemeDialogSelecList.md#getpaddingleft)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getPaddingLeft](DThemeWhiteList.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getPaddingRight](../interfaces/DThemeDialogSelecList.md#getpaddingright)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getPaddingRight](DThemeWhiteList.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getPaddingTop](../interfaces/DThemeDialogSelecList.md#getpaddingtop)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getPaddingTop](DThemeWhiteList.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L114)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getShadow](../interfaces/DThemeDialogSelecList.md#getshadow)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getShadow](DThemeWhiteList.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getTitle](../interfaces/DThemeDialogSelecList.md#gettitle)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getTitle](DThemeWhiteList.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getWeight](../interfaces/DThemeDialogSelecList.md#getweight)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getWeight](DThemeWhiteList.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWheelSpeed

▸ **getWheelSpeed**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getWheelSpeed](../interfaces/DThemeDialogSelecList.md#getwheelspeed)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getWheelSpeed](DThemeWhiteList.md#getwheelspeed)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L34)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getWidth](../interfaces/DThemeDialogSelecList.md#getwidth)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getWidth](DThemeWhiteList.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getX](../interfaces/DThemeDialogSelecList.md#getx)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getX](DThemeWhiteList.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[getY](../interfaces/DThemeDialogSelecList.md#gety)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[getY](DThemeWhiteList.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[isOverflowMaskEnabled](../interfaces/DThemeDialogSelecList.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[isOverflowMaskEnabled](DThemeWhiteList.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[newShadow](../interfaces/DThemeDialogSelecList.md#newshadow)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[newShadow](DThemeWhiteList.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[newShadowWeak](../interfaces/DThemeDialogSelecList.md#newshadowweak)

#### Inherited from

[DThemeWhiteList](DThemeWhiteList.md).[newShadowWeak](DThemeWhiteList.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemeDialogSelecList](../interfaces/DThemeDialogSelecList.md).[newState](../interfaces/DThemeDialogSelecList.md#newstate)

#### Overrides

[DThemeWhiteList](DThemeWhiteList.md).[newState](DThemeWhiteList.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-dialog-select-list.ts#L29)
