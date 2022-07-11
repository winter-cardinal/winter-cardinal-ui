[Winter Cardinal UI - v0.199.0](../index.md) / DThemeDarkList

# Class: DThemeDarkList

## Hierarchy

- [`DThemeDarkPane`](DThemeDarkPane.md)

  ↳ **`DThemeDarkList`**

  ↳↳ [`DThemeDarkDialogSelectList`](DThemeDarkDialogSelectList.md)

## Implements

- [`DThemeList`](../interfaces/DThemeList.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkList.md#constructor)

### Methods

- [getAlpha](DThemeDarkList.md#getalpha)
- [getBackgroundAlpha](DThemeDarkList.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkList.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkList.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkList.md#getborderalign)
- [getBorderAlpha](DThemeDarkList.md#getborderalpha)
- [getBorderColor](DThemeDarkList.md#getbordercolor)
- [getBorderMask](DThemeDarkList.md#getbordermask)
- [getBorderTexture](DThemeDarkList.md#getbordertexture)
- [getBorderWidth](DThemeDarkList.md#getborderwidth)
- [getClearType](DThemeDarkList.md#getcleartype)
- [getColor](DThemeDarkList.md#getcolor)
- [getCornerMask](DThemeDarkList.md#getcornermask)
- [getCornerRadius](DThemeDarkList.md#getcornerradius)
- [getCursor](DThemeDarkList.md#getcursor)
- [getFontFamilly](DThemeDarkList.md#getfontfamilly)
- [getFontSize](DThemeDarkList.md#getfontsize)
- [getFontStyle](DThemeDarkList.md#getfontstyle)
- [getFontVariant](DThemeDarkList.md#getfontvariant)
- [getFontWeight](DThemeDarkList.md#getfontweight)
- [getGestureMode](DThemeDarkList.md#getgesturemode)
- [getHeight](DThemeDarkList.md#getheight)
- [getInteractive](DThemeDarkList.md#getinteractive)
- [getLineHeight](DThemeDarkList.md#getlineheight)
- [getOutlineAlign](DThemeDarkList.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkList.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkList.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkList.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkList.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkList.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkList.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkList.md#getpaddingleft)
- [getPaddingRight](DThemeDarkList.md#getpaddingright)
- [getPaddingTop](DThemeDarkList.md#getpaddingtop)
- [getShadow](DThemeDarkList.md#getshadow)
- [getTitle](DThemeDarkList.md#gettitle)
- [getWeight](DThemeDarkList.md#getweight)
- [getWheelSpeed](DThemeDarkList.md#getwheelspeed)
- [getWidth](DThemeDarkList.md#getwidth)
- [getX](DThemeDarkList.md#getx)
- [getY](DThemeDarkList.md#gety)
- [isOverflowMaskEnabled](DThemeDarkList.md#isoverflowmaskenabled)
- [newShadow](DThemeDarkList.md#newshadow)
- [newShadowWeak](DThemeDarkList.md#newshadowweak)
- [newState](DThemeDarkList.md#newstate)

## Constructors

### constructor

• **new DThemeDarkList**()

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

[DThemeList](../interfaces/DThemeList.md).[getAlpha](../interfaces/DThemeList.md#getalpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getAlpha](DThemeDarkPane.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeList](../interfaces/DThemeList.md).[getBackgroundAlpha](../interfaces/DThemeList.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundAlpha](DThemeDarkPane.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

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

[DThemeList](../interfaces/DThemeList.md).[getBackgroundColor](../interfaces/DThemeList.md#getbackgroundcolor)

#### Overrides

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundColor](DThemeDarkPane.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-list.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-list.ts#L12)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getBackgroundTexture](../interfaces/DThemeList.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundTexture](DThemeDarkPane.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderAlign](../interfaces/DThemeList.md#getborderalign)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderAlign](DThemeDarkPane.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L22)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderAlpha](../interfaces/DThemeList.md#getborderalpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderAlpha](DThemeDarkPane.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderColor](../interfaces/DThemeList.md#getbordercolor)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderColor](DThemeDarkPane.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L82)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderMask](../interfaces/DThemeList.md#getbordermask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderMask](DThemeDarkPane.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getBorderTexture](../interfaces/DThemeList.md#getbordertexture)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderTexture](DThemeDarkPane.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeList](../interfaces/DThemeList.md).[getBorderWidth](../interfaces/DThemeList.md#getborderwidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderWidth](DThemeDarkPane.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

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

[DThemeDarkPane](DThemeDarkPane.md).[getClearType](DThemeDarkPane.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeDarkPane](DThemeDarkPane.md).[getColor](DThemeDarkPane.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getCornerMask](../interfaces/DThemeList.md#getcornermask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getCornerMask](DThemeDarkPane.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getCornerRadius](../interfaces/DThemeList.md#getcornerradius)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getCornerRadius](DThemeDarkPane.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeDarkPane](DThemeDarkPane.md).[getCursor](DThemeDarkPane.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontFamilly](../interfaces/DThemeList.md#getfontfamilly)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontFamilly](DThemeDarkPane.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontSize](../interfaces/DThemeList.md#getfontsize)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontSize](DThemeDarkPane.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontStyle](../interfaces/DThemeList.md#getfontstyle)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontStyle](DThemeDarkPane.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontVariant](../interfaces/DThemeList.md#getfontvariant)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontVariant](DThemeDarkPane.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getFontWeight](../interfaces/DThemeList.md#getfontweight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontWeight](DThemeDarkPane.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(): [`UtilGestureMode`](../index.md#utilgesturemode)

#### Returns

[`UtilGestureMode`](../index.md#utilgesturemode)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getGestureMode](../interfaces/DThemeList.md#getgesturemode)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getGestureMode](DThemeDarkPane.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L38)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getHeight](../interfaces/DThemeList.md#getheight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getHeight](DThemeDarkPane.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L62)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getInteractive](../interfaces/DThemeList.md#getinteractive)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getInteractive](DThemeDarkPane.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L30)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getLineHeight](../interfaces/DThemeList.md#getlineheight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getLineHeight](DThemeDarkPane.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineAlign](../interfaces/DThemeList.md#getoutlinealign)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineAlign](DThemeDarkPane.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L26)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineAlpha](../interfaces/DThemeList.md#getoutlinealpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineAlpha](DThemeDarkPane.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineColor](../interfaces/DThemeList.md#getoutlinecolor)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineColor](DThemeDarkPane.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineMask](../interfaces/DThemeList.md#getoutlinemask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineMask](DThemeDarkPane.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineOffset](../interfaces/DThemeList.md#getoutlineoffset)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineOffset](DThemeDarkPane.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeList](../interfaces/DThemeList.md).[getOutlineWidth](../interfaces/DThemeList.md#getoutlinewidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineWidth](DThemeDarkPane.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getPaddingBottom](../interfaces/DThemeList.md#getpaddingbottom)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingBottom](DThemeDarkPane.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getPaddingLeft](../interfaces/DThemeList.md#getpaddingleft)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingLeft](DThemeDarkPane.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getPaddingRight](../interfaces/DThemeList.md#getpaddingright)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingRight](DThemeDarkPane.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getPaddingTop](../interfaces/DThemeList.md#getpaddingtop)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingTop](DThemeDarkPane.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

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

[DThemeDarkPane](DThemeDarkPane.md).[getShadow](DThemeDarkPane.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getTitle](../interfaces/DThemeList.md#gettitle)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getTitle](DThemeDarkPane.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

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

[DThemeDarkPane](DThemeDarkPane.md).[getWeight](DThemeDarkPane.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWheelSpeed

▸ **getWheelSpeed**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getWheelSpeed](../interfaces/DThemeList.md#getwheelspeed)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getWheelSpeed](DThemeDarkPane.md#getwheelspeed)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L34)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getWidth](../interfaces/DThemeList.md#getwidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getWidth](DThemeDarkPane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getX](../interfaces/DThemeList.md#getx)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getX](DThemeDarkPane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[getY](../interfaces/DThemeList.md#gety)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getY](DThemeDarkPane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[isOverflowMaskEnabled](../interfaces/DThemeList.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[isOverflowMaskEnabled](DThemeDarkPane.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[newShadow](../interfaces/DThemeList.md#newshadow)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[newShadow](DThemeDarkPane.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeList](../interfaces/DThemeList.md).[newShadowWeak](../interfaces/DThemeList.md#newshadowweak)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[newShadowWeak](DThemeDarkPane.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeDarkPane](DThemeDarkPane.md).[newState](DThemeDarkPane.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L169)
