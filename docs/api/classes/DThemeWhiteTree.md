[Winter Cardinal UI - v0.179.0](../index.md) / DThemeWhiteTree

# Class: DThemeWhiteTree

## Hierarchy

- [`DThemeWhitePane`](DThemeWhitePane.md)

  ↳ **`DThemeWhiteTree`**

## Implements

- [`DThemeTree`](../interfaces/DThemeTree.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteTree.md#constructor)

### Properties

- [\_style](DThemeWhiteTree.md#_style)

### Methods

- [getAlpha](DThemeWhiteTree.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteTree.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteTree.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteTree.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteTree.md#getborderalign)
- [getBorderAlpha](DThemeWhiteTree.md#getborderalpha)
- [getBorderColor](DThemeWhiteTree.md#getbordercolor)
- [getBorderMask](DThemeWhiteTree.md#getbordermask)
- [getBorderTexture](DThemeWhiteTree.md#getbordertexture)
- [getBorderWidth](DThemeWhiteTree.md#getborderwidth)
- [getClearType](DThemeWhiteTree.md#getcleartype)
- [getColor](DThemeWhiteTree.md#getcolor)
- [getCornerMask](DThemeWhiteTree.md#getcornermask)
- [getCornerRadius](DThemeWhiteTree.md#getcornerradius)
- [getCursor](DThemeWhiteTree.md#getcursor)
- [getFontFamilly](DThemeWhiteTree.md#getfontfamilly)
- [getFontSize](DThemeWhiteTree.md#getfontsize)
- [getFontStyle](DThemeWhiteTree.md#getfontstyle)
- [getFontVariant](DThemeWhiteTree.md#getfontvariant)
- [getFontWeight](DThemeWhiteTree.md#getfontweight)
- [getGestureMode](DThemeWhiteTree.md#getgesturemode)
- [getHeight](DThemeWhiteTree.md#getheight)
- [getInteractive](DThemeWhiteTree.md#getinteractive)
- [getLineHeight](DThemeWhiteTree.md#getlineheight)
- [getOutlineAlign](DThemeWhiteTree.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteTree.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteTree.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteTree.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteTree.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteTree.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteTree.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteTree.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteTree.md#getpaddingright)
- [getPaddingTop](DThemeWhiteTree.md#getpaddingtop)
- [getShadow](DThemeWhiteTree.md#getshadow)
- [getTitle](DThemeWhiteTree.md#gettitle)
- [getWeight](DThemeWhiteTree.md#getweight)
- [getWheelSpeed](DThemeWhiteTree.md#getwheelspeed)
- [getWidth](DThemeWhiteTree.md#getwidth)
- [getX](DThemeWhiteTree.md#getx)
- [getY](DThemeWhiteTree.md#gety)
- [isOverflowMaskEnabled](DThemeWhiteTree.md#isoverflowmaskenabled)
- [newShadow](DThemeWhiteTree.md#newshadow)
- [newShadowWeak](DThemeWhiteTree.md#newshadowweak)
- [newState](DThemeWhiteTree.md#newstate)
- [newStyle](DThemeWhiteTree.md#newstyle)

## Constructors

### constructor

• **new DThemeWhiteTree**()

#### Overrides

[DThemeWhitePane](DThemeWhitePane.md).[constructor](DThemeWhitePane.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-tree.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-tree.ts#L15)

## Properties

### \_style

• `Protected` **\_style**: [`DThemeWhiteTreeItems`](DThemeWhiteTreeItems.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-tree.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-tree.ts#L13)

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

[DThemeTree](../interfaces/DThemeTree.md).[getAlpha](../interfaces/DThemeTree.md#getalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getAlpha](DThemeWhitePane.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeTree](../interfaces/DThemeTree.md).[getBackgroundAlpha](../interfaces/DThemeTree.md#getbackgroundalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundAlpha](DThemeWhitePane.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemeTree](../interfaces/DThemeTree.md).[getBackgroundColor](../interfaces/DThemeTree.md#getbackgroundcolor)

#### Overrides

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundColor](DThemeWhitePane.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-tree.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-tree.ts#L24)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBackgroundTexture](../interfaces/DThemeTree.md#getbackgroundtexture)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBackgroundTexture](DThemeWhitePane.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemeTree](../interfaces/DThemeTree.md).[getBorderAlign](../interfaces/DThemeTree.md#getborderalign)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderAlign](DThemeWhitePane.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L22)

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

[DThemeTree](../interfaces/DThemeTree.md).[getBorderAlpha](../interfaces/DThemeTree.md#getborderalpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderAlpha](DThemeWhitePane.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemeTree](../interfaces/DThemeTree.md).[getBorderColor](../interfaces/DThemeTree.md#getbordercolor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderColor](DThemeWhitePane.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L82)

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

[DThemeTree](../interfaces/DThemeTree.md).[getBorderMask](../interfaces/DThemeTree.md#getbordermask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderMask](DThemeWhitePane.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBorderTexture](../interfaces/DThemeTree.md#getbordertexture)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderTexture](DThemeWhitePane.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemeTree](../interfaces/DThemeTree.md).[getBorderWidth](../interfaces/DThemeTree.md#getborderwidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getBorderWidth](DThemeWhitePane.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getClearType](../interfaces/DThemeTree.md#getcleartype)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getClearType](DThemeWhitePane.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemeTree](../interfaces/DThemeTree.md).[getColor](../interfaces/DThemeTree.md#getcolor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getColor](DThemeWhitePane.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getCornerMask](../interfaces/DThemeTree.md#getcornermask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCornerMask](DThemeWhitePane.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getCornerRadius](../interfaces/DThemeTree.md#getcornerradius)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCornerRadius](DThemeWhitePane.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemeTree](../interfaces/DThemeTree.md).[getCursor](../interfaces/DThemeTree.md#getcursor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getCursor](DThemeWhitePane.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontFamilly](../interfaces/DThemeTree.md#getfontfamilly)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontFamilly](DThemeWhitePane.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontSize](../interfaces/DThemeTree.md#getfontsize)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontSize](DThemeWhitePane.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontStyle](../interfaces/DThemeTree.md#getfontstyle)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontStyle](DThemeWhitePane.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontVariant](../interfaces/DThemeTree.md#getfontvariant)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontVariant](DThemeWhitePane.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontWeight](../interfaces/DThemeTree.md#getfontweight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getFontWeight](DThemeWhitePane.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(): [`UtilGestureMode`](../index.md#utilgesturemode)

#### Returns

[`UtilGestureMode`](../index.md#utilgesturemode)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getGestureMode](../interfaces/DThemeTree.md#getgesturemode)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getGestureMode](DThemeWhitePane.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L38)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getHeight](../interfaces/DThemeTree.md#getheight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getHeight](DThemeWhitePane.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L62)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getInteractive](../interfaces/DThemeTree.md#getinteractive)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getInteractive](DThemeWhitePane.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L30)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getLineHeight](../interfaces/DThemeTree.md#getlineheight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getLineHeight](DThemeWhitePane.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineAlign](../interfaces/DThemeTree.md#getoutlinealign)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineAlign](DThemeWhitePane.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L26)

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

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineAlpha](../interfaces/DThemeTree.md#getoutlinealpha)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineAlpha](DThemeWhitePane.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineColor](../interfaces/DThemeTree.md#getoutlinecolor)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineColor](DThemeWhitePane.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineMask](../interfaces/DThemeTree.md#getoutlinemask)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineMask](DThemeWhitePane.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineOffset](../interfaces/DThemeTree.md#getoutlineoffset)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineOffset](DThemeWhitePane.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineWidth](../interfaces/DThemeTree.md#getoutlinewidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getOutlineWidth](DThemeWhitePane.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getPaddingBottom](../interfaces/DThemeTree.md#getpaddingbottom)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingBottom](DThemeWhitePane.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getPaddingLeft](../interfaces/DThemeTree.md#getpaddingleft)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingLeft](DThemeWhitePane.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getPaddingRight](../interfaces/DThemeTree.md#getpaddingright)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingRight](DThemeWhitePane.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getPaddingTop](../interfaces/DThemeTree.md#getpaddingtop)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getPaddingTop](DThemeWhitePane.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L114)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getShadow](../interfaces/DThemeTree.md#getshadow)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getShadow](DThemeWhitePane.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getTitle](../interfaces/DThemeTree.md#gettitle)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getTitle](DThemeWhitePane.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getWeight](../interfaces/DThemeTree.md#getweight)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWeight](DThemeWhitePane.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWheelSpeed

▸ **getWheelSpeed**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getWheelSpeed](../interfaces/DThemeTree.md#getwheelspeed)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWheelSpeed](DThemeWhitePane.md#getwheelspeed)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L34)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getWidth](../interfaces/DThemeTree.md#getwidth)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getWidth](DThemeWhitePane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getX](../interfaces/DThemeTree.md#getx)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getX](DThemeWhitePane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getY](../interfaces/DThemeTree.md#gety)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[getY](DThemeWhitePane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[isOverflowMaskEnabled](../interfaces/DThemeTree.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[isOverflowMaskEnabled](DThemeWhitePane.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-pane.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[newShadow](../interfaces/DThemeTree.md#newshadow)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newShadow](DThemeWhitePane.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[newShadowWeak](../interfaces/DThemeTree.md#newshadowweak)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newShadowWeak](DThemeWhitePane.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemeTree](../interfaces/DThemeTree.md).[newState](../interfaces/DThemeTree.md#newstate)

#### Inherited from

[DThemeWhitePane](DThemeWhitePane.md).[newState](DThemeWhitePane.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L169)

___

### newStyle

▸ `Protected` **newStyle**(): [`DThemeWhiteTreeItems`](DThemeWhiteTreeItems.md)

#### Returns

[`DThemeWhiteTreeItems`](DThemeWhiteTreeItems.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-tree.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-tree.ts#L20)
