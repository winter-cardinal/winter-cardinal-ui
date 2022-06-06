[Winter Cardinal UI - v0.179.0](../index.md) / DThemeDarkDialog

# Class: DThemeDarkDialog

## Hierarchy

- [`DThemeDarkBase`](DThemeDarkBase.md)

  ↳ **`DThemeDarkDialog`**

  ↳↳ [`DThemeDarkDialogCommand`](DThemeDarkDialogCommand.md)

## Implements

- [`DThemeDialog`](../interfaces/DThemeDialog.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkDialog.md#constructor)

### Methods

- [closeOn](DThemeDarkDialog.md#closeon)
- [getAlign](DThemeDarkDialog.md#getalign)
- [getAlpha](DThemeDarkDialog.md#getalpha)
- [getBackgroundAlpha](DThemeDarkDialog.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkDialog.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkDialog.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkDialog.md#getborderalign)
- [getBorderAlpha](DThemeDarkDialog.md#getborderalpha)
- [getBorderColor](DThemeDarkDialog.md#getbordercolor)
- [getBorderMask](DThemeDarkDialog.md#getbordermask)
- [getBorderTexture](DThemeDarkDialog.md#getbordertexture)
- [getBorderWidth](DThemeDarkDialog.md#getborderwidth)
- [getClearType](DThemeDarkDialog.md#getcleartype)
- [getColor](DThemeDarkDialog.md#getcolor)
- [getCornerMask](DThemeDarkDialog.md#getcornermask)
- [getCornerRadius](DThemeDarkDialog.md#getcornerradius)
- [getCursor](DThemeDarkDialog.md#getcursor)
- [getFontFamilly](DThemeDarkDialog.md#getfontfamilly)
- [getFontSize](DThemeDarkDialog.md#getfontsize)
- [getFontStyle](DThemeDarkDialog.md#getfontstyle)
- [getFontVariant](DThemeDarkDialog.md#getfontvariant)
- [getFontWeight](DThemeDarkDialog.md#getfontweight)
- [getGestureMode](DThemeDarkDialog.md#getgesturemode)
- [getHeight](DThemeDarkDialog.md#getheight)
- [getInteractive](DThemeDarkDialog.md#getinteractive)
- [getLineHeight](DThemeDarkDialog.md#getlineheight)
- [getMode](DThemeDarkDialog.md#getmode)
- [getOffsetX](DThemeDarkDialog.md#getoffsetx)
- [getOffsetY](DThemeDarkDialog.md#getoffsety)
- [getOutlineAlign](DThemeDarkDialog.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkDialog.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkDialog.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkDialog.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkDialog.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkDialog.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkDialog.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkDialog.md#getpaddingleft)
- [getPaddingRight](DThemeDarkDialog.md#getpaddingright)
- [getPaddingTop](DThemeDarkDialog.md#getpaddingtop)
- [getShadow](DThemeDarkDialog.md#getshadow)
- [getTitle](DThemeDarkDialog.md#gettitle)
- [getWeight](DThemeDarkDialog.md#getweight)
- [getWidth](DThemeDarkDialog.md#getwidth)
- [getX](DThemeDarkDialog.md#getx)
- [getY](DThemeDarkDialog.md#gety)
- [isGestureEnabled](DThemeDarkDialog.md#isgestureenabled)
- [isSticky](DThemeDarkDialog.md#issticky)
- [newAnimation](DThemeDarkDialog.md#newanimation)
- [newShadow](DThemeDarkDialog.md#newshadow)
- [newShadowWeak](DThemeDarkDialog.md#newshadowweak)
- [newState](DThemeDarkDialog.md#newstate)

## Constructors

### constructor

• **new DThemeDarkDialog**()

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[constructor](DThemeDarkBase.md#constructor)

## Methods

### closeOn

▸ **closeOn**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[closeOn](../interfaces/DThemeDialog.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L27)

___

### getAlign

▸ **getAlign**(`mode`): [`UtilAttachAlign`](../index.md#utilattachalign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

[`UtilAttachAlign`](../index.md#utilattachalign)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getAlign](../interfaces/DThemeDialog.md#getalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L64)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getAlpha](../interfaces/DThemeDialog.md#getalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getAlpha](DThemeDarkBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getBackgroundAlpha](../interfaces/DThemeDialog.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundAlpha](DThemeDarkBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getBackgroundColor](../interfaces/DThemeDialog.md#getbackgroundcolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundColor](DThemeDarkBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L79)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getBackgroundTexture](../interfaces/DThemeDialog.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundTexture](DThemeDarkBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getBorderAlign](../interfaces/DThemeDialog.md#getborderalign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlign](DThemeDarkBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getBorderAlpha](../interfaces/DThemeDialog.md#getborderalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlpha](DThemeDarkBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getBorderColor](../interfaces/DThemeDialog.md#getbordercolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBorderColor](DThemeDarkBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L87)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getBorderMask](../interfaces/DThemeDialog.md#getbordermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderMask](DThemeDarkBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getBorderTexture](../interfaces/DThemeDialog.md#getbordertexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderTexture](DThemeDarkBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getBorderWidth](../interfaces/DThemeDialog.md#getborderwidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderWidth](DThemeDarkBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getClearType](../interfaces/DThemeDialog.md#getcleartype)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getClearType](DThemeDarkBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getColor](../interfaces/DThemeDialog.md#getcolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getColor](DThemeDarkBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getCornerMask](../interfaces/DThemeDialog.md#getcornermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerMask](DThemeDarkBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getCornerRadius](../interfaces/DThemeDialog.md#getcornerradius)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerRadius](DThemeDarkBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getCursor](../interfaces/DThemeDialog.md#getcursor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCursor](DThemeDarkBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getFontFamilly](../interfaces/DThemeDialog.md#getfontfamilly)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontFamilly](DThemeDarkBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getFontSize](../interfaces/DThemeDialog.md#getfontsize)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontSize](DThemeDarkBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getFontStyle](../interfaces/DThemeDialog.md#getfontstyle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontStyle](DThemeDarkBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getFontVariant](../interfaces/DThemeDialog.md#getfontvariant)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontVariant](DThemeDarkBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getFontWeight](../interfaces/DThemeDialog.md#getfontweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontWeight](DThemeDarkBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(`mode`): [`DDialogGestureMode`](../index.md#ddialoggesturemode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

[`DDialogGestureMode`](../index.md#ddialoggesturemode)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getGestureMode](../interfaces/DThemeDialog.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L52)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getHeight](../interfaces/DThemeDialog.md#getheight)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getHeight](DThemeDarkBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L127)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getInteractive](../interfaces/DThemeDialog.md#getinteractive)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getInteractive](DThemeDarkBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L135)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getLineHeight](../interfaces/DThemeDialog.md#getlineheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getLineHeight](DThemeDarkBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMode

▸ **getMode**(): [`DDialogMode`](../index.md#ddialogmode)

#### Returns

[`DDialogMode`](../index.md#ddialogmode)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getMode](../interfaces/DThemeDialog.md#getmode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L23)

___

### getOffsetX

▸ **getOffsetX**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getOffsetX](../interfaces/DThemeDialog.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L56)

___

### getOffsetY

▸ **getOffsetY**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getOffsetY](../interfaces/DThemeDialog.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L60)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getOutlineAlign](../interfaces/DThemeDialog.md#getoutlinealign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlign](DThemeDarkBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getOutlineAlpha](../interfaces/DThemeDialog.md#getoutlinealpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlpha](DThemeDarkBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getOutlineColor](../interfaces/DThemeDialog.md#getoutlinecolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineColor](DThemeDarkBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L95)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getOutlineMask](../interfaces/DThemeDialog.md#getoutlinemask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineMask](DThemeDarkBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getOutlineOffset](../interfaces/DThemeDialog.md#getoutlineoffset)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineOffset](DThemeDarkBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[getOutlineWidth](../interfaces/DThemeDialog.md#getoutlinewidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineWidth](DThemeDarkBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getPaddingBottom](../interfaces/DThemeDialog.md#getpaddingbottom)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingBottom](DThemeDarkBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L111)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getPaddingLeft](../interfaces/DThemeDialog.md#getpaddingleft)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingLeft](DThemeDarkBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L99)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getPaddingRight](../interfaces/DThemeDialog.md#getpaddingright)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingRight](DThemeDarkBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L107)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getPaddingTop](../interfaces/DThemeDialog.md#getpaddingtop)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingTop](DThemeDarkBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L103)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getShadow](../interfaces/DThemeDialog.md#getshadow)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getShadow](DThemeDarkBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L131)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getTitle](../interfaces/DThemeDialog.md#gettitle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getTitle](DThemeDarkBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getWeight](../interfaces/DThemeDialog.md#getweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWeight](DThemeDarkBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getWidth](../interfaces/DThemeDialog.md#getwidth)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getWidth](DThemeDarkBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L123)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getX](../interfaces/DThemeDialog.md#getx)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getX](DThemeDarkBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L115)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[getY](../interfaces/DThemeDialog.md#gety)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getY](DThemeDarkBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L119)

___

### isGestureEnabled

▸ **isGestureEnabled**(`mode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`boolean`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[isGestureEnabled](../interfaces/DThemeDialog.md#isgestureenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L42)

___

### isSticky

▸ **isSticky**(`mode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`boolean`

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[isSticky](../interfaces/DThemeDialog.md#issticky)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L38)

___

### newAnimation

▸ **newAnimation**(`mode`): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[newAnimation](../interfaces/DThemeDialog.md#newanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[newShadow](../interfaces/DThemeDialog.md#newshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadow](DThemeDarkBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialog](../interfaces/DThemeDialog.md).[newShadowWeak](../interfaces/DThemeDialog.md#newshadowweak)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadowWeak](DThemeDarkBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeDialog](../interfaces/DThemeDialog.md).[newState](../interfaces/DThemeDialog.md#newstate)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newState](DThemeDarkBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L169)
