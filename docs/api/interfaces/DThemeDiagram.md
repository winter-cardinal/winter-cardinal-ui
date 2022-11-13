[Winter Cardinal UI - v0.227.0](../index.md) / DThemeDiagram

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBackgroundAlpha](DThemeDiagramBase.md#getbackgroundalpha)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBackgroundColor](DThemeDiagramBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:510](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L510)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getBackgroundTexture](DThemeDiagramBase.md#getbackgroundtexture)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderAlign](DThemeDiagramBase.md#getborderalign)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderAlpha](DThemeDiagramBase.md#getborderalpha)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderColor](DThemeDiagramBase.md#getbordercolor)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderMask](DThemeDiagramBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L558)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderTexture](DThemeDiagramBase.md#getbordertexture)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderWidth](DThemeDiagramBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasBackgroundAlpha](DThemeDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L84)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasBackgroundColor](DThemeDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L83)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasShadow](DThemeDiagramBase.md#getcanvasshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L85)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getColor](DThemeDiagramBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCornerMask](DThemeDiagramBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCornerRadius](DThemeDiagramBase.md#getcornerradius)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getCursor](DThemeDiagramBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:685](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L685)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontFamilly](DThemeDiagramBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontSize](DThemeDiagramBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontStyle](DThemeDiagramBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontVariant](DThemeDiagramBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontWeight](DThemeDiagramBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getHeight](DThemeDiagramBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getInteractive](DThemeDiagramBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:647](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L647)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getLineHeight](DThemeDiagramBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineAlpha](DThemeDiagramBase.md#getoutlinealpha)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineColor](DThemeDiagramBase.md#getoutlinecolor)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineMask](DThemeDiagramBase.md#getoutlinemask)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineOffset](DThemeDiagramBase.md#getoutlineoffset)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getOutlineWidth](DThemeDiagramBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingBottom](DThemeDiagramBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:583](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L583)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingLeft](DThemeDiagramBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L568)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingRight](DThemeDiagramBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L573)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingTop](DThemeDiagramBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

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

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getTitle](DThemeDiagramBase.md#gettitle)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[getWeight](DThemeDiagramBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getWidth](DThemeDiagramBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getX](DThemeDiagramBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getY](DThemeDiagramBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L492)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[isAmbient](DThemeDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L86)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[isOverflowMaskEnabled](DThemeDiagramBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L63)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[newShadow](DThemeDiagramBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:675](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L675)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[newShadowWeak](DThemeDiagramBase.md#newshadowweak)

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

[DThemeDiagramBase](DThemeDiagramBase.md).[newState](DThemeDiagramBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L652)
