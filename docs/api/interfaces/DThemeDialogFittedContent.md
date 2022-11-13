[Winter Cardinal UI - v0.227.0](../index.md) / DThemeDialogFittedContent

# Interface: DThemeDialogFittedContent

[DBase](../classes/DBase.md) theme.

## Hierarchy

- [`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)

  ↳ **`DThemeDialogFittedContent`**

## Implemented by

- [`DThemeDarkDialogFittedContent`](../classes/DThemeDarkDialogFittedContent.md)
- [`DThemeWhiteDialogFittedContent`](../classes/DThemeWhiteDialogFittedContent.md)

## Table of contents

### Methods

- [getAlpha](DThemeDialogFittedContent.md#getalpha)
- [getBackgroundAlpha](DThemeDialogFittedContent.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDialogFittedContent.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDialogFittedContent.md#getbackgroundtexture)
- [getBorderAlign](DThemeDialogFittedContent.md#getborderalign)
- [getBorderAlpha](DThemeDialogFittedContent.md#getborderalpha)
- [getBorderColor](DThemeDialogFittedContent.md#getbordercolor)
- [getBorderMask](DThemeDialogFittedContent.md#getbordermask)
- [getBorderTexture](DThemeDialogFittedContent.md#getbordertexture)
- [getBorderWidth](DThemeDialogFittedContent.md#getborderwidth)
- [getClearType](DThemeDialogFittedContent.md#getcleartype)
- [getColor](DThemeDialogFittedContent.md#getcolor)
- [getCornerAdjust](DThemeDialogFittedContent.md#getcorneradjust)
- [getCornerMask](DThemeDialogFittedContent.md#getcornermask)
- [getCornerRadius](DThemeDialogFittedContent.md#getcornerradius)
- [getCursor](DThemeDialogFittedContent.md#getcursor)
- [getDirection](DThemeDialogFittedContent.md#getdirection)
- [getFontFamilly](DThemeDialogFittedContent.md#getfontfamilly)
- [getFontSize](DThemeDialogFittedContent.md#getfontsize)
- [getFontStyle](DThemeDialogFittedContent.md#getfontstyle)
- [getFontVariant](DThemeDialogFittedContent.md#getfontvariant)
- [getFontWeight](DThemeDialogFittedContent.md#getfontweight)
- [getHeight](DThemeDialogFittedContent.md#getheight)
- [getInteractive](DThemeDialogFittedContent.md#getinteractive)
- [getLineHeight](DThemeDialogFittedContent.md#getlineheight)
- [getMargin](DThemeDialogFittedContent.md#getmargin)
- [getMultiplicity](DThemeDialogFittedContent.md#getmultiplicity)
- [getOutlineAlign](DThemeDialogFittedContent.md#getoutlinealign)
- [getOutlineAlpha](DThemeDialogFittedContent.md#getoutlinealpha)
- [getOutlineColor](DThemeDialogFittedContent.md#getoutlinecolor)
- [getOutlineMask](DThemeDialogFittedContent.md#getoutlinemask)
- [getOutlineOffset](DThemeDialogFittedContent.md#getoutlineoffset)
- [getOutlineWidth](DThemeDialogFittedContent.md#getoutlinewidth)
- [getPaddingBottom](DThemeDialogFittedContent.md#getpaddingbottom)
- [getPaddingLeft](DThemeDialogFittedContent.md#getpaddingleft)
- [getPaddingRight](DThemeDialogFittedContent.md#getpaddingright)
- [getPaddingTop](DThemeDialogFittedContent.md#getpaddingtop)
- [getReverse](DThemeDialogFittedContent.md#getreverse)
- [getShadow](DThemeDialogFittedContent.md#getshadow)
- [getTitle](DThemeDialogFittedContent.md#gettitle)
- [getWeight](DThemeDialogFittedContent.md#getweight)
- [getWidth](DThemeDialogFittedContent.md#getwidth)
- [getX](DThemeDialogFittedContent.md#getx)
- [getY](DThemeDialogFittedContent.md#gety)
- [newShadow](DThemeDialogFittedContent.md#newshadow)
- [newShadowWeak](DThemeDialogFittedContent.md#newshadowweak)
- [newState](DThemeDialogFittedContent.md#newstate)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getAlpha](DThemeDialogLayeredContent.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBackgroundAlpha](DThemeDialogLayeredContent.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:517](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L517)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBackgroundColor](DThemeDialogLayeredContent.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:510](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L510)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBackgroundTexture](DThemeDialogLayeredContent.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L522)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBorderAlign](DThemeDialogLayeredContent.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBorderAlpha](DThemeDialogLayeredContent.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBorderColor](DThemeDialogLayeredContent.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBorderMask](DThemeDialogLayeredContent.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L558)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBorderTexture](DThemeDialogLayeredContent.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L563)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getBorderWidth](DThemeDialogLayeredContent.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getClearType](DThemeDialogLayeredContent.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getColor](DThemeDialogLayeredContent.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getCornerAdjust](DThemeDialogLayeredContent.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L42)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getCornerMask](DThemeDialogLayeredContent.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getCornerRadius](DThemeDialogLayeredContent.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L588)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getCursor](DThemeDialogLayeredContent.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:685](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L685)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getDirection](DThemeDialogLayeredContent.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L41)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getFontFamilly](DThemeDialogLayeredContent.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getFontSize](DThemeDialogLayeredContent.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getFontStyle](DThemeDialogLayeredContent.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getFontVariant](DThemeDialogLayeredContent.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getFontWeight](DThemeDialogLayeredContent.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getHeight](DThemeDialogLayeredContent.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getInteractive](DThemeDialogLayeredContent.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:647](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L647)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getLineHeight](DThemeDialogLayeredContent.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getMargin](DThemeDialogLayeredContent.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L40)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getMultiplicity](DThemeDialogLayeredContent.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L43)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getOutlineAlign](DThemeDialogLayeredContent.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:629](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L629)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getOutlineAlpha](DThemeDialogLayeredContent.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getOutlineColor](DThemeDialogLayeredContent.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getOutlineMask](DThemeDialogLayeredContent.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L636)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getOutlineOffset](DThemeDialogLayeredContent.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getOutlineWidth](DThemeDialogLayeredContent.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getPaddingBottom](DThemeDialogLayeredContent.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:583](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L583)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getPaddingLeft](DThemeDialogLayeredContent.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L568)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getPaddingRight](DThemeDialogLayeredContent.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L573)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getPaddingTop](DThemeDialogLayeredContent.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getReverse](DThemeDialogLayeredContent.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L44)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getShadow](DThemeDialogLayeredContent.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getTitle](DThemeDialogLayeredContent.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L657)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getWeight](DThemeDialogLayeredContent.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getWidth](DThemeDialogLayeredContent.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getX](DThemeDialogLayeredContent.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[getY](DThemeDialogLayeredContent.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L492)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[newShadow](DThemeDialogLayeredContent.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:675](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L675)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[newShadowWeak](DThemeDialogLayeredContent.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L680)

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

[DThemeDialogLayeredContent](DThemeDialogLayeredContent.md).[newState](DThemeDialogLayeredContent.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L652)
