[Winter Cardinal UI - v0.167.0](../index.md) / DThemeDialogTime

# Interface: DThemeDialogTime

## Hierarchy

- [`DThemeDialogCommand`](DThemeDialogCommand.md)

  ↳ **`DThemeDialogTime`**

## Implemented by

- [`DThemeDarkDialogTime`](../classes/DThemeDarkDialogTime.md)
- [`DThemeWhiteDialogTime`](../classes/DThemeWhiteDialogTime.md)

## Table of contents

### Methods

- [closeOn](DThemeDialogTime.md#closeon)
- [getAlign](DThemeDialogTime.md#getalign)
- [getAlpha](DThemeDialogTime.md#getalpha)
- [getBackgroundAlpha](DThemeDialogTime.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDialogTime.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDialogTime.md#getbackgroundtexture)
- [getBorderAlign](DThemeDialogTime.md#getborderalign)
- [getBorderAlpha](DThemeDialogTime.md#getborderalpha)
- [getBorderColor](DThemeDialogTime.md#getbordercolor)
- [getBorderMask](DThemeDialogTime.md#getbordermask)
- [getBorderTexture](DThemeDialogTime.md#getbordertexture)
- [getBorderWidth](DThemeDialogTime.md#getborderwidth)
- [getCancel](DThemeDialogTime.md#getcancel)
- [getClearType](DThemeDialogTime.md#getcleartype)
- [getColor](DThemeDialogTime.md#getcolor)
- [getCornerMask](DThemeDialogTime.md#getcornermask)
- [getCornerRadius](DThemeDialogTime.md#getcornerradius)
- [getCursor](DThemeDialogTime.md#getcursor)
- [getFontFamilly](DThemeDialogTime.md#getfontfamilly)
- [getFontSize](DThemeDialogTime.md#getfontsize)
- [getFontStyle](DThemeDialogTime.md#getfontstyle)
- [getFontVariant](DThemeDialogTime.md#getfontvariant)
- [getFontWeight](DThemeDialogTime.md#getfontweight)
- [getGestureMode](DThemeDialogTime.md#getgesturemode)
- [getHeight](DThemeDialogTime.md#getheight)
- [getInteractive](DThemeDialogTime.md#getinteractive)
- [getLayoutHeight](DThemeDialogTime.md#getlayoutheight)
- [getLayoutMargin](DThemeDialogTime.md#getlayoutmargin)
- [getLayoutWidth](DThemeDialogTime.md#getlayoutwidth)
- [getLayoutX](DThemeDialogTime.md#getlayoutx)
- [getLayoutY](DThemeDialogTime.md#getlayouty)
- [getLineHeight](DThemeDialogTime.md#getlineheight)
- [getMode](DThemeDialogTime.md#getmode)
- [getOffsetX](DThemeDialogTime.md#getoffsetx)
- [getOffsetY](DThemeDialogTime.md#getoffsety)
- [getOk](DThemeDialogTime.md#getok)
- [getOutlineAlign](DThemeDialogTime.md#getoutlinealign)
- [getOutlineAlpha](DThemeDialogTime.md#getoutlinealpha)
- [getOutlineColor](DThemeDialogTime.md#getoutlinecolor)
- [getOutlineMask](DThemeDialogTime.md#getoutlinemask)
- [getOutlineOffset](DThemeDialogTime.md#getoutlineoffset)
- [getOutlineWidth](DThemeDialogTime.md#getoutlinewidth)
- [getPaddingBottom](DThemeDialogTime.md#getpaddingbottom)
- [getPaddingLeft](DThemeDialogTime.md#getpaddingleft)
- [getPaddingRight](DThemeDialogTime.md#getpaddingright)
- [getPaddingTop](DThemeDialogTime.md#getpaddingtop)
- [getShadow](DThemeDialogTime.md#getshadow)
- [getTitle](DThemeDialogTime.md#gettitle)
- [getWeight](DThemeDialogTime.md#getweight)
- [getWidth](DThemeDialogTime.md#getwidth)
- [getX](DThemeDialogTime.md#getx)
- [getY](DThemeDialogTime.md#gety)
- [isGestureEnabled](DThemeDialogTime.md#isgestureenabled)
- [isSticky](DThemeDialogTime.md#issticky)
- [newAnimation](DThemeDialogTime.md#newanimation)
- [newShadow](DThemeDialogTime.md#newshadow)
- [newShadowWeak](DThemeDialogTime.md#newshadowweak)
- [newState](DThemeDialogTime.md#newstate)

## Methods

### closeOn

▸ **closeOn**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[closeOn](DThemeDialogCommand.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L84)

___

### getAlign

▸ **getAlign**(`mode`): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getAlign](DThemeDialogCommand.md#getalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L90)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getAlpha](DThemeDialogCommand.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getBackgroundAlpha](DThemeDialogCommand.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L503)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getBackgroundColor](DThemeDialogCommand.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getBackgroundTexture](DThemeDialogCommand.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getBorderAlign](DThemeDialogCommand.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getBorderAlpha](DThemeDialogCommand.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L523)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getBorderColor](DThemeDialogCommand.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L516)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getBorderMask](DThemeDialogCommand.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getBorderTexture](DThemeDialogCommand.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:549](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L549)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getBorderWidth](DThemeDialogCommand.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getCancel

▸ **getCancel**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getCancel](DThemeDialogCommand.md#getcancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L78)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getClearType](DThemeDialogCommand.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getColor](DThemeDialogCommand.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getCornerMask](DThemeDialogCommand.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getCornerRadius](DThemeDialogCommand.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L574)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getCursor](DThemeDialogCommand.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getFontFamilly](DThemeDialogCommand.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getFontSize](DThemeDialogCommand.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getFontStyle](DThemeDialogCommand.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getFontVariant](DThemeDialogCommand.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getFontWeight](DThemeDialogCommand.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getGestureMode

▸ **getGestureMode**(`mode`): [`DDialogGestureMode`](../index.md#ddialoggesturemode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

[`DDialogGestureMode`](../index.md#ddialoggesturemode)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getGestureMode](DThemeDialogCommand.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L87)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getHeight](DThemeDialogCommand.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L483)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getInteractive](DThemeDialogCommand.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:633](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L633)

___

### getLayoutHeight

▸ **getLayoutHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getLayoutHeight](DThemeDialogCommand.md#getlayoutheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L82)

___

### getLayoutMargin

▸ **getLayoutMargin**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getLayoutMargin](DThemeDialogCommand.md#getlayoutmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L83)

___

### getLayoutWidth

▸ **getLayoutWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getLayoutWidth](DThemeDialogCommand.md#getlayoutwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L81)

___

### getLayoutX

▸ **getLayoutX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getLayoutX](DThemeDialogCommand.md#getlayoutx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L79)

___

### getLayoutY

▸ **getLayoutY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getLayoutY](DThemeDialogCommand.md#getlayouty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L80)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getLineHeight](DThemeDialogCommand.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMode

▸ **getMode**(): [`DDialogMode`](../index.md#ddialogmode)

#### Returns

[`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getMode](DThemeDialogCommand.md#getmode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L83)

___

### getOffsetX

▸ **getOffsetX**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getOffsetX](DThemeDialogCommand.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L88)

___

### getOffsetY

▸ **getOffsetY**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getOffsetY](DThemeDialogCommand.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L89)

___

### getOk

▸ **getOk**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getOk](DThemeDialogCommand.md#getok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L77)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getOutlineAlign](DThemeDialogCommand.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getOutlineAlpha](DThemeDialogCommand.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L594)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getOutlineColor](DThemeDialogCommand.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L587)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getOutlineMask](DThemeDialogCommand.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getOutlineOffset](DThemeDialogCommand.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[getOutlineWidth](DThemeDialogCommand.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getPaddingBottom](DThemeDialogCommand.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L569)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getPaddingLeft](DThemeDialogCommand.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L554)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getPaddingRight](DThemeDialogCommand.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L559)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getPaddingTop](DThemeDialogCommand.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getShadow](DThemeDialogCommand.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getTitle](DThemeDialogCommand.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getWeight](DThemeDialogCommand.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getWidth](DThemeDialogCommand.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getX](DThemeDialogCommand.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L473)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[getY](DThemeDialogCommand.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L478)

___

### isGestureEnabled

▸ **isGestureEnabled**(`mode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`boolean`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[isGestureEnabled](DThemeDialogCommand.md#isgestureenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L86)

___

### isSticky

▸ **isSticky**(`mode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

`boolean`

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[isSticky](DThemeDialogCommand.md#issticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L85)

___

### newAnimation

▸ **newAnimation**(`mode`): ``null`` \| [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

``null`` \| [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[newAnimation](DThemeDialogCommand.md#newanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L91)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[newShadow](DThemeDialogCommand.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L661)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogCommand](DThemeDialogCommand.md).[newShadowWeak](DThemeDialogCommand.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L666)

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

[DThemeDialogCommand](DThemeDialogCommand.md).[newState](DThemeDialogCommand.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L638)
