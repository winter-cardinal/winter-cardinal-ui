[Winter Cardinal UI - v0.457.0](../index.md) / DThemeDialogDate

# Interface: DThemeDialogDate

[DDialogFitted](../classes/DDialogFitted.md) theme.

## Hierarchy

- [`DThemeDialogFitted`](DThemeDialogFitted.md)

  ↳ **`DThemeDialogDate`**

## Implemented by

- [`DThemeDarkDialogDate`](../classes/DThemeDarkDialogDate.md)
- [`DThemeWhiteDialogDate`](../classes/DThemeWhiteDialogDate.md)

## Table of contents

### Methods

- [closeOn](DThemeDialogDate.md#closeon)
- [getAlign](DThemeDialogDate.md#getalign)
- [getAlpha](DThemeDialogDate.md#getalpha)
- [getBackgroundAlpha](DThemeDialogDate.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDialogDate.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDialogDate.md#getbackgroundtexture)
- [getBorderAlign](DThemeDialogDate.md#getborderalign)
- [getBorderAlpha](DThemeDialogDate.md#getborderalpha)
- [getBorderColor](DThemeDialogDate.md#getbordercolor)
- [getBorderMask](DThemeDialogDate.md#getbordermask)
- [getBorderTexture](DThemeDialogDate.md#getbordertexture)
- [getBorderWidth](DThemeDialogDate.md#getborderwidth)
- [getClearType](DThemeDialogDate.md#getcleartype)
- [getColor](DThemeDialogDate.md#getcolor)
- [getContent](DThemeDialogDate.md#getcontent)
- [getCornerMask](DThemeDialogDate.md#getcornermask)
- [getCornerRadius](DThemeDialogDate.md#getcornerradius)
- [getCursor](DThemeDialogDate.md#getcursor)
- [getFontFamilly](DThemeDialogDate.md#getfontfamilly)
- [getFontSize](DThemeDialogDate.md#getfontsize)
- [getFontStyle](DThemeDialogDate.md#getfontstyle)
- [getFontVariant](DThemeDialogDate.md#getfontvariant)
- [getFontWeight](DThemeDialogDate.md#getfontweight)
- [getFooter](DThemeDialogDate.md#getfooter)
- [getGestureMode](DThemeDialogDate.md#getgesturemode)
- [getHeader](DThemeDialogDate.md#getheader)
- [getHeight](DThemeDialogDate.md#getheight)
- [getInteractive](DThemeDialogDate.md#getinteractive)
- [getLayout](DThemeDialogDate.md#getlayout)
- [getLineHeight](DThemeDialogDate.md#getlineheight)
- [getMode](DThemeDialogDate.md#getmode)
- [getOffsetX](DThemeDialogDate.md#getoffsetx)
- [getOffsetY](DThemeDialogDate.md#getoffsety)
- [getOutlineAlign](DThemeDialogDate.md#getoutlinealign)
- [getOutlineAlpha](DThemeDialogDate.md#getoutlinealpha)
- [getOutlineColor](DThemeDialogDate.md#getoutlinecolor)
- [getOutlineMask](DThemeDialogDate.md#getoutlinemask)
- [getOutlineOffset](DThemeDialogDate.md#getoutlineoffset)
- [getOutlineWidth](DThemeDialogDate.md#getoutlinewidth)
- [getPaddingBottom](DThemeDialogDate.md#getpaddingbottom)
- [getPaddingLeft](DThemeDialogDate.md#getpaddingleft)
- [getPaddingRight](DThemeDialogDate.md#getpaddingright)
- [getPaddingTop](DThemeDialogDate.md#getpaddingtop)
- [getShadow](DThemeDialogDate.md#getshadow)
- [getTitle](DThemeDialogDate.md#gettitle)
- [getWeight](DThemeDialogDate.md#getweight)
- [getWidth](DThemeDialogDate.md#getwidth)
- [getX](DThemeDialogDate.md#getx)
- [getY](DThemeDialogDate.md#gety)
- [isAlwaysOnTop](DThemeDialogDate.md#isalwaysontop)
- [isGestureEnabled](DThemeDialogDate.md#isgestureenabled)
- [isSticky](DThemeDialogDate.md#issticky)
- [newAnimation](DThemeDialogDate.md#newanimation)
- [newShadow](DThemeDialogDate.md#newshadow)
- [newShadowWeak](DThemeDialogDate.md#newshadowweak)
- [newState](DThemeDialogDate.md#newstate)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[closeOn](DThemeDialogFitted.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L88)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getAlign](DThemeDialogFitted.md#getalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L95)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getAlpha](DThemeDialogFitted.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getBackgroundAlpha](DThemeDialogFitted.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getBackgroundColor](DThemeDialogFitted.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getBackgroundTexture](DThemeDialogFitted.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getBorderAlign](DThemeDialogFitted.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L585)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getBorderAlpha](DThemeDialogFitted.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L571)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getBorderColor](DThemeDialogFitted.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getBorderMask](DThemeDialogFitted.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getBorderTexture](DThemeDialogFitted.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:597](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L597)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getBorderWidth](DThemeDialogFitted.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getClearType](DThemeDialogFitted.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getColor](DThemeDialogFitted.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getContent

▸ **getContent**(): `undefined` \| [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

#### Returns

`undefined` \| [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getContent](DThemeDialogFitted.md#getcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L83)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getCornerMask](DThemeDialogFitted.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getCornerRadius](DThemeDialogFitted.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getCursor](DThemeDialogFitted.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getFontFamilly](DThemeDialogFitted.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getFontSize](DThemeDialogFitted.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getFontStyle](DThemeDialogFitted.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getFontVariant](DThemeDialogFitted.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getFontWeight](DThemeDialogFitted.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getFooter

▸ **getFooter**(): `undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getFooter](DThemeDialogFitted.md#getfooter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L84)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getGestureMode](DThemeDialogFitted.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L92)

___

### getHeader

▸ **getHeader**(): `undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getHeader](DThemeDialogFitted.md#getheader)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L82)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getHeight](DThemeDialogFitted.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getInteractive](DThemeDialogFitted.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLayout

▸ **getLayout**(): `undefined` \| [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

#### Returns

`undefined` \| [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getLayout](DThemeDialogFitted.md#getlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L81)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getLineHeight](DThemeDialogFitted.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMode

▸ **getMode**(): [`DDialogMode`](../index.md#ddialogmode)

#### Returns

[`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getMode](DThemeDialogFitted.md#getmode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L87)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getOffsetX](DThemeDialogFitted.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L93)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getOffsetY](DThemeDialogFitted.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L94)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getOutlineAlign](DThemeDialogFitted.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getOutlineAlpha](DThemeDialogFitted.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getOutlineColor](DThemeDialogFitted.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L635)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getOutlineMask](DThemeDialogFitted.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getOutlineOffset](DThemeDialogFitted.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[getOutlineWidth](DThemeDialogFitted.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getPaddingBottom](DThemeDialogFitted.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getPaddingLeft](DThemeDialogFitted.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getPaddingRight](DThemeDialogFitted.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getPaddingTop](DThemeDialogFitted.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getShadow](DThemeDialogFitted.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getTitle](DThemeDialogFitted.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L691)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getWeight](DThemeDialogFitted.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getWidth](DThemeDialogFitted.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getX](DThemeDialogFitted.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[getY](DThemeDialogFitted.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### isAlwaysOnTop

▸ **isAlwaysOnTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[isAlwaysOnTop](DThemeDialogFitted.md#isalwaysontop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L90)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[isGestureEnabled](DThemeDialogFitted.md#isgestureenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L91)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[isSticky](DThemeDialogFitted.md#issticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L89)

___

### newAnimation

▸ **newAnimation**(`mode`): ``null`` \| [`DAnimation`](DAnimation.md)\<[`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |

#### Returns

``null`` \| [`DAnimation`](DAnimation.md)\<[`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[newAnimation](DThemeDialogFitted.md#newanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L96)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[newShadow](DThemeDialogFitted.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogFitted](DThemeDialogFitted.md).[newShadowWeak](DThemeDialogFitted.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:714](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L714)

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

[DThemeDialogFitted](DThemeDialogFitted.md).[newState](DThemeDialogFitted.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L686)
