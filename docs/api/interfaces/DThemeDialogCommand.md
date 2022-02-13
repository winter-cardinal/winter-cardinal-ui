[Winter Cardinal UI - v0.155.0](../index.md) / DThemeDialogCommand

# Interface: DThemeDialogCommand

[DDialogCommand](../classes/DDialogCommand.md) theme.

## Hierarchy

- [`DThemeDialog`](DThemeDialog.md)

  ↳ **`DThemeDialogCommand`**

  ↳↳ [`DThemeDialogColorGradient`](DThemeDialogColorGradient.md)

  ↳↳ [`DThemeDialogColor`](DThemeDialogColor.md)

  ↳↳ [`DThemeDialogConfirm`](DThemeDialogConfirm.md)

  ↳↳ [`DThemeDialogDate`](DThemeDialogDate.md)

  ↳↳ [`DThemeDialogDatetime`](DThemeDialogDatetime.md)

  ↳↳ [`DThemeDialogInput`](DThemeDialogInput.md)

  ↳↳ [`DThemeDialogSelect`](DThemeDialogSelect.md)

  ↳↳ [`DThemeDialogTime`](DThemeDialogTime.md)

## Implemented by

- [`DThemeDarkDialogCommand`](../classes/DThemeDarkDialogCommand.md)
- [`DThemeWhiteDialogCommand`](../classes/DThemeWhiteDialogCommand.md)

## Table of contents

### Methods

- [closeOn](DThemeDialogCommand.md#closeon)
- [getAlpha](DThemeDialogCommand.md#getalpha)
- [getBackgroundAlpha](DThemeDialogCommand.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDialogCommand.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDialogCommand.md#getbackgroundtexture)
- [getBorderAlign](DThemeDialogCommand.md#getborderalign)
- [getBorderAlpha](DThemeDialogCommand.md#getborderalpha)
- [getBorderColor](DThemeDialogCommand.md#getbordercolor)
- [getBorderMask](DThemeDialogCommand.md#getbordermask)
- [getBorderTexture](DThemeDialogCommand.md#getbordertexture)
- [getBorderWidth](DThemeDialogCommand.md#getborderwidth)
- [getCancel](DThemeDialogCommand.md#getcancel)
- [getClearType](DThemeDialogCommand.md#getcleartype)
- [getColor](DThemeDialogCommand.md#getcolor)
- [getCornerMask](DThemeDialogCommand.md#getcornermask)
- [getCornerRadius](DThemeDialogCommand.md#getcornerradius)
- [getCursor](DThemeDialogCommand.md#getcursor)
- [getFontFamilly](DThemeDialogCommand.md#getfontfamilly)
- [getFontSize](DThemeDialogCommand.md#getfontsize)
- [getFontStyle](DThemeDialogCommand.md#getfontstyle)
- [getFontVariant](DThemeDialogCommand.md#getfontvariant)
- [getFontWeight](DThemeDialogCommand.md#getfontweight)
- [getHeight](DThemeDialogCommand.md#getheight)
- [getInteractive](DThemeDialogCommand.md#getinteractive)
- [getLayoutHeight](DThemeDialogCommand.md#getlayoutheight)
- [getLayoutMargin](DThemeDialogCommand.md#getlayoutmargin)
- [getLayoutWidth](DThemeDialogCommand.md#getlayoutwidth)
- [getLayoutX](DThemeDialogCommand.md#getlayoutx)
- [getLayoutY](DThemeDialogCommand.md#getlayouty)
- [getLineHeight](DThemeDialogCommand.md#getlineheight)
- [getMode](DThemeDialogCommand.md#getmode)
- [getOffsetX](DThemeDialogCommand.md#getoffsetx)
- [getOffsetY](DThemeDialogCommand.md#getoffsety)
- [getOk](DThemeDialogCommand.md#getok)
- [getOutlineAlign](DThemeDialogCommand.md#getoutlinealign)
- [getOutlineAlpha](DThemeDialogCommand.md#getoutlinealpha)
- [getOutlineColor](DThemeDialogCommand.md#getoutlinecolor)
- [getOutlineMask](DThemeDialogCommand.md#getoutlinemask)
- [getOutlineOffset](DThemeDialogCommand.md#getoutlineoffset)
- [getOutlineWidth](DThemeDialogCommand.md#getoutlinewidth)
- [getPaddingBottom](DThemeDialogCommand.md#getpaddingbottom)
- [getPaddingLeft](DThemeDialogCommand.md#getpaddingleft)
- [getPaddingRight](DThemeDialogCommand.md#getpaddingright)
- [getPaddingTop](DThemeDialogCommand.md#getpaddingtop)
- [getShadow](DThemeDialogCommand.md#getshadow)
- [getTitle](DThemeDialogCommand.md#gettitle)
- [getWeight](DThemeDialogCommand.md#getweight)
- [getWidth](DThemeDialogCommand.md#getwidth)
- [getX](DThemeDialogCommand.md#getx)
- [getY](DThemeDialogCommand.md#gety)
- [isSticky](DThemeDialogCommand.md#issticky)
- [newShadow](DThemeDialogCommand.md#newshadow)
- [newShadowWeak](DThemeDialogCommand.md#newshadowweak)
- [newState](DThemeDialogCommand.md#newstate)

## Methods

### closeOn

▸ **closeOn**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[closeOn](DThemeDialog.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L75)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getAlpha](DThemeDialog.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeDialog](DThemeDialog.md).[getBackgroundAlpha](DThemeDialog.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L503)

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

[DThemeDialog](DThemeDialog.md).[getBackgroundColor](DThemeDialog.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBackgroundTexture](DThemeDialog.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

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

[DThemeDialog](DThemeDialog.md).[getBorderAlign](DThemeDialog.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

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

[DThemeDialog](DThemeDialog.md).[getBorderAlpha](DThemeDialog.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L523)

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

[DThemeDialog](DThemeDialog.md).[getBorderColor](DThemeDialog.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L516)

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

[DThemeDialog](DThemeDialog.md).[getBorderMask](DThemeDialog.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBorderTexture](DThemeDialog.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:549](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L549)

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

[DThemeDialog](DThemeDialog.md).[getBorderWidth](DThemeDialog.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getCancel

▸ **getCancel**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L78)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getClearType](DThemeDialog.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

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

[DThemeDialog](DThemeDialog.md).[getColor](DThemeDialog.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getCornerMask](DThemeDialog.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getCornerRadius](DThemeDialog.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L574)

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

[DThemeDialog](DThemeDialog.md).[getCursor](DThemeDialog.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontFamilly](DThemeDialog.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontSize](DThemeDialog.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontStyle](DThemeDialog.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontVariant](DThemeDialog.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontWeight](DThemeDialog.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getHeight](DThemeDialog.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L483)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getInteractive](DThemeDialog.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:633](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L633)

___

### getLayoutHeight

▸ **getLayoutHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L82)

___

### getLayoutMargin

▸ **getLayoutMargin**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L83)

___

### getLayoutWidth

▸ **getLayoutWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L81)

___

### getLayoutX

▸ **getLayoutX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L79)

___

### getLayoutY

▸ **getLayoutY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L80)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getLineHeight](DThemeDialog.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMode

▸ **getMode**(): [`DDialogMode`](../index.md#ddialogmode)

#### Returns

[`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getMode](DThemeDialog.md#getmode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L74)

___

### getOffsetX

▸ **getOffsetX**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOffsetX](DThemeDialog.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L77)

___

### getOffsetY

▸ **getOffsetY**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOffsetY](DThemeDialog.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L78)

___

### getOk

▸ **getOk**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L77)

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

[DThemeDialog](DThemeDialog.md).[getOutlineAlign](DThemeDialog.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

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

[DThemeDialog](DThemeDialog.md).[getOutlineAlpha](DThemeDialog.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L594)

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

[DThemeDialog](DThemeDialog.md).[getOutlineColor](DThemeDialog.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L587)

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

[DThemeDialog](DThemeDialog.md).[getOutlineMask](DThemeDialog.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeDialog](DThemeDialog.md).[getOutlineOffset](DThemeDialog.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

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

[DThemeDialog](DThemeDialog.md).[getOutlineWidth](DThemeDialog.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getPaddingBottom](DThemeDialog.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L569)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getPaddingLeft](DThemeDialog.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L554)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getPaddingRight](DThemeDialog.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L559)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getPaddingTop](DThemeDialog.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getShadow](DThemeDialog.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getTitle](DThemeDialog.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getWeight](DThemeDialog.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getWidth](DThemeDialog.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getX](DThemeDialog.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L473)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getY](DThemeDialog.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L478)

___

### isSticky

▸ **isSticky**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[isSticky](DThemeDialog.md#issticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L76)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[newShadow](DThemeDialog.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L661)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[newShadowWeak](DThemeDialog.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L666)

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

[DThemeDialog](DThemeDialog.md).[newState](DThemeDialog.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L638)
