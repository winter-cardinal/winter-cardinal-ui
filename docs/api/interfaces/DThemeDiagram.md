[Winter Cardinal UI](../README.md) / DThemeDiagram

# Interface: DThemeDiagram

[DDiagram](../classes/DDiagram.md) theme.

## Hierarchy

- [`DThemeDiagramBase`](DThemeDiagramBase.md)

  ↳ **`DThemeDiagram`**

## Implemented by

- [`DThemeDarkDiagram`](../classes/DThemeDarkDiagram.md)
- [`DThemeWhiteDiagram`](../classes/DThemeWhiteDiagram.md)

## Table of contents

### Methods

- [getAlpha](DThemeDiagram.md#getalpha)
- [getBackgroundAlpha](DThemeDiagram.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDiagram.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDiagram.md#getbackgroundtexture)
- [getBorderAlign](DThemeDiagram.md#getborderalign)
- [getBorderAlpha](DThemeDiagram.md#getborderalpha)
- [getBorderColor](DThemeDiagram.md#getbordercolor)
- [getBorderMask](DThemeDiagram.md#getbordermask)
- [getBorderTexture](DThemeDiagram.md#getbordertexture)
- [getBorderWidth](DThemeDiagram.md#getborderwidth)
- [getCanvasBackgroundAlpha](DThemeDiagram.md#getcanvasbackgroundalpha)
- [getCanvasBackgroundColor](DThemeDiagram.md#getcanvasbackgroundcolor)
- [getCanvasShadow](DThemeDiagram.md#getcanvasshadow)
- [getClearType](DThemeDiagram.md#getcleartype)
- [getColor](DThemeDiagram.md#getcolor)
- [getCornerMask](DThemeDiagram.md#getcornermask)
- [getCornerRadius](DThemeDiagram.md#getcornerradius)
- [getCursor](DThemeDiagram.md#getcursor)
- [getFontFamilly](DThemeDiagram.md#getfontfamilly)
- [getFontSize](DThemeDiagram.md#getfontsize)
- [getFontStyle](DThemeDiagram.md#getfontstyle)
- [getFontVariant](DThemeDiagram.md#getfontvariant)
- [getFontWeight](DThemeDiagram.md#getfontweight)
- [getHeight](DThemeDiagram.md#getheight)
- [getInteractive](DThemeDiagram.md#getinteractive)
- [getLineHeight](DThemeDiagram.md#getlineheight)
- [getOutlineAlign](DThemeDiagram.md#getoutlinealign)
- [getOutlineAlpha](DThemeDiagram.md#getoutlinealpha)
- [getOutlineColor](DThemeDiagram.md#getoutlinecolor)
- [getOutlineMask](DThemeDiagram.md#getoutlinemask)
- [getOutlineOffset](DThemeDiagram.md#getoutlineoffset)
- [getOutlineWidth](DThemeDiagram.md#getoutlinewidth)
- [getPaddingBottom](DThemeDiagram.md#getpaddingbottom)
- [getPaddingLeft](DThemeDiagram.md#getpaddingleft)
- [getPaddingRight](DThemeDiagram.md#getpaddingright)
- [getPaddingTop](DThemeDiagram.md#getpaddingtop)
- [getShadow](DThemeDiagram.md#getshadow)
- [getTitle](DThemeDiagram.md#gettitle)
- [getWeight](DThemeDiagram.md#getweight)
- [getWidth](DThemeDiagram.md#getwidth)
- [getX](DThemeDiagram.md#getx)
- [getY](DThemeDiagram.md#gety)
- [isAmbient](DThemeDiagram.md#isambient)
- [isOverflowMaskEnabled](DThemeDiagram.md#isoverflowmaskenabled)
- [newShadow](DThemeDiagram.md#newshadow)
- [newShadowWeak](DThemeDiagram.md#newshadowweak)
- [newState](DThemeDiagram.md#newstate)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getAlpha](DThemeDiagramBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBackgroundAlpha](DThemeDiagramBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L503)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBackgroundColor](DThemeDiagramBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getBackgroundTexture](DThemeDiagramBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderAlign](DThemeDiagramBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderAlpha](DThemeDiagramBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L523)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderColor](DThemeDiagramBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L516)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderMask](DThemeDiagramBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderTexture](DThemeDiagramBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:549](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L549)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderWidth](DThemeDiagramBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasBackgroundAlpha](DThemeDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L96)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasBackgroundColor](DThemeDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L95)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../README.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../README.md#dbaseshadow)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasShadow](DThemeDiagramBase.md#getcanvasshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L97)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getClearType](DThemeDiagramBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getColor](DThemeDiagramBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCornerMask](DThemeDiagramBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCornerRadius](DThemeDiagramBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L574)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getCursor](DThemeDiagramBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontFamilly](DThemeDiagramBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontSize](DThemeDiagramBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../README.md#dfontstyle)

#### Returns

[`DFontStyle`](../README.md#dfontstyle)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontStyle](DThemeDiagramBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../README.md#dfontvariant)

#### Returns

[`DFontVariant`](../README.md#dfontvariant)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontVariant](DThemeDiagramBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../README.md#dfontweight)

#### Returns

[`DFontWeight`](../README.md#dfontweight)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontWeight](DThemeDiagramBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getHeight](DThemeDiagramBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L483)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getInteractive](DThemeDiagramBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:633](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L633)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getLineHeight](DThemeDiagramBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineAlign](DThemeDiagramBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineAlpha](DThemeDiagramBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L594)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineColor](DThemeDiagramBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L587)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineMask](DThemeDiagramBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineOffset](DThemeDiagramBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineWidth](DThemeDiagramBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingBottom](DThemeDiagramBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L569)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingLeft](DThemeDiagramBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L554)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingRight](DThemeDiagramBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L559)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingTop](DThemeDiagramBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getShadow](DThemeDiagramBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getTitle](DThemeDiagramBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getWeight](DThemeDiagramBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getWidth](DThemeDiagramBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getX](DThemeDiagramBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L473)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getY](DThemeDiagramBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L478)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[isAmbient](DThemeDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L98)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[isOverflowMaskEnabled](DThemeDiagramBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L63)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[newShadow](DThemeDiagramBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L661)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[newShadowWeak](DThemeDiagramBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L666)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[newState](DThemeDiagramBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L638)
