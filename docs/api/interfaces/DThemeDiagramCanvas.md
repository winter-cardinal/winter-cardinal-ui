[Winter Cardinal UI - v0.205.1](../index.md) / DThemeDiagramCanvas

# Interface: DThemeDiagramCanvas

## Hierarchy

- [`DThemeDiagramCanvasBase`](DThemeDiagramCanvasBase.md)

  ↳ **`DThemeDiagramCanvas`**

## Implemented by

- [`DThemeDarkDiagramCanvas`](../classes/DThemeDarkDiagramCanvas.md)
- [`DThemeWhiteDiagramCanvas`](../classes/DThemeWhiteDiagramCanvas.md)

## Table of contents

### Methods

- [getAlpha](DThemeDiagramCanvas.md#getalpha)
- [getBackgroundAlpha](DThemeDiagramCanvas.md#getbackgroundalpha)
- [getBackgroundBase](DThemeDiagramCanvas.md#getbackgroundbase)
- [getBackgroundColor](DThemeDiagramCanvas.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDiagramCanvas.md#getbackgroundtexture)
- [getBorderAlign](DThemeDiagramCanvas.md#getborderalign)
- [getBorderAlpha](DThemeDiagramCanvas.md#getborderalpha)
- [getBorderColor](DThemeDiagramCanvas.md#getbordercolor)
- [getBorderMask](DThemeDiagramCanvas.md#getbordermask)
- [getBorderTexture](DThemeDiagramCanvas.md#getbordertexture)
- [getBorderWidth](DThemeDiagramCanvas.md#getborderwidth)
- [getClearType](DThemeDiagramCanvas.md#getcleartype)
- [getColor](DThemeDiagramCanvas.md#getcolor)
- [getCornerMask](DThemeDiagramCanvas.md#getcornermask)
- [getCornerRadius](DThemeDiagramCanvas.md#getcornerradius)
- [getCursor](DThemeDiagramCanvas.md#getcursor)
- [getFontFamilly](DThemeDiagramCanvas.md#getfontfamilly)
- [getFontSize](DThemeDiagramCanvas.md#getfontsize)
- [getFontStyle](DThemeDiagramCanvas.md#getfontstyle)
- [getFontVariant](DThemeDiagramCanvas.md#getfontvariant)
- [getFontWeight](DThemeDiagramCanvas.md#getfontweight)
- [getHeight](DThemeDiagramCanvas.md#getheight)
- [getInteractive](DThemeDiagramCanvas.md#getinteractive)
- [getLineHeight](DThemeDiagramCanvas.md#getlineheight)
- [getOutlineAlign](DThemeDiagramCanvas.md#getoutlinealign)
- [getOutlineAlpha](DThemeDiagramCanvas.md#getoutlinealpha)
- [getOutlineColor](DThemeDiagramCanvas.md#getoutlinecolor)
- [getOutlineMask](DThemeDiagramCanvas.md#getoutlinemask)
- [getOutlineOffset](DThemeDiagramCanvas.md#getoutlineoffset)
- [getOutlineWidth](DThemeDiagramCanvas.md#getoutlinewidth)
- [getPaddingBottom](DThemeDiagramCanvas.md#getpaddingbottom)
- [getPaddingLeft](DThemeDiagramCanvas.md#getpaddingleft)
- [getPaddingRight](DThemeDiagramCanvas.md#getpaddingright)
- [getPaddingTop](DThemeDiagramCanvas.md#getpaddingtop)
- [getShadow](DThemeDiagramCanvas.md#getshadow)
- [getTitle](DThemeDiagramCanvas.md#gettitle)
- [getWeight](DThemeDiagramCanvas.md#getweight)
- [getWidth](DThemeDiagramCanvas.md#getwidth)
- [getX](DThemeDiagramCanvas.md#getx)
- [getY](DThemeDiagramCanvas.md#gety)
- [isAmbient](DThemeDiagramCanvas.md#isambient)
- [newShadow](DThemeDiagramCanvas.md#newshadow)
- [newShadowWeak](DThemeDiagramCanvas.md#newshadowweak)
- [newState](DThemeDiagramCanvas.md#newstate)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getAlpha](DThemeDiagramCanvasBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundAlpha](DThemeDiagramCanvasBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### getBackgroundBase

▸ **getBackgroundBase**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundBase](DThemeDiagramCanvasBase.md#getbackgroundbase)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L29)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundColor](DThemeDiagramCanvasBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundTexture](DThemeDiagramCanvasBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L508)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderAlign](DThemeDiagramCanvasBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L537)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderAlpha](DThemeDiagramCanvasBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L523)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderColor](DThemeDiagramCanvasBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L516)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderMask](DThemeDiagramCanvasBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderTexture](DThemeDiagramCanvasBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:549](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L549)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderWidth](DThemeDiagramCanvasBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getClearType](DThemeDiagramCanvasBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L649)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getColor](DThemeDiagramCanvasBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCornerMask](DThemeDiagramCanvasBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCornerRadius](DThemeDiagramCanvasBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L574)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCursor](DThemeDiagramCanvasBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontFamilly](DThemeDiagramCanvasBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontSize](DThemeDiagramCanvasBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontStyle](DThemeDiagramCanvasBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontVariant](DThemeDiagramCanvasBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontWeight](DThemeDiagramCanvasBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getHeight](DThemeDiagramCanvasBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L483)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getInteractive](DThemeDiagramCanvasBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:633](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L633)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getLineHeight](DThemeDiagramCanvasBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineAlign](DThemeDiagramCanvasBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L615)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineAlpha](DThemeDiagramCanvasBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L594)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineColor](DThemeDiagramCanvasBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L587)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineMask](DThemeDiagramCanvasBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineOffset](DThemeDiagramCanvasBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L608)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineWidth](DThemeDiagramCanvasBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingBottom](DThemeDiagramCanvasBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L569)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingLeft](DThemeDiagramCanvasBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L554)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingRight](DThemeDiagramCanvasBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L559)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingTop](DThemeDiagramCanvasBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getShadow](DThemeDiagramCanvasBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getTitle](DThemeDiagramCanvasBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getWeight](DThemeDiagramCanvasBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getWidth](DThemeDiagramCanvasBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getX](DThemeDiagramCanvasBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L473)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getY](DThemeDiagramCanvasBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L478)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[isAmbient](DThemeDiagramCanvasBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L28)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newShadow](DThemeDiagramCanvasBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L661)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newShadowWeak](DThemeDiagramCanvasBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L666)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newState](DThemeDiagramCanvasBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L638)
