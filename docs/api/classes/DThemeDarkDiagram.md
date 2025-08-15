[Winter Cardinal UI - v0.457.0](../index.md) / DThemeDarkDiagram

# Class: DThemeDarkDiagram

[DDiagram](DDiagram.md) theme.

## Hierarchy

- [`DThemeDarkDiagramBase`](DThemeDarkDiagramBase.md)

  ↳ **`DThemeDarkDiagram`**

## Implements

- [`DThemeDiagram`](../interfaces/DThemeDiagram.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkDiagram.md#constructor)

### Methods

- [getAlpha](DThemeDarkDiagram.md#getalpha)
- [getBackgroundAlpha](DThemeDarkDiagram.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkDiagram.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkDiagram.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkDiagram.md#getborderalign)
- [getBorderAlpha](DThemeDarkDiagram.md#getborderalpha)
- [getBorderColor](DThemeDarkDiagram.md#getbordercolor)
- [getBorderMask](DThemeDarkDiagram.md#getbordermask)
- [getBorderTexture](DThemeDarkDiagram.md#getbordertexture)
- [getBorderWidth](DThemeDarkDiagram.md#getborderwidth)
- [getCanvasBackgroundAlpha](DThemeDarkDiagram.md#getcanvasbackgroundalpha)
- [getCanvasBackgroundColor](DThemeDarkDiagram.md#getcanvasbackgroundcolor)
- [getCanvasShadow](DThemeDarkDiagram.md#getcanvasshadow)
- [getClearType](DThemeDarkDiagram.md#getcleartype)
- [getColor](DThemeDarkDiagram.md#getcolor)
- [getCornerMask](DThemeDarkDiagram.md#getcornermask)
- [getCornerRadius](DThemeDarkDiagram.md#getcornerradius)
- [getCursor](DThemeDarkDiagram.md#getcursor)
- [getFontFamilly](DThemeDarkDiagram.md#getfontfamilly)
- [getFontSize](DThemeDarkDiagram.md#getfontsize)
- [getFontStyle](DThemeDarkDiagram.md#getfontstyle)
- [getFontVariant](DThemeDarkDiagram.md#getfontvariant)
- [getFontWeight](DThemeDarkDiagram.md#getfontweight)
- [getHeight](DThemeDarkDiagram.md#getheight)
- [getInteractive](DThemeDarkDiagram.md#getinteractive)
- [getLineHeight](DThemeDarkDiagram.md#getlineheight)
- [getOutlineAlign](DThemeDarkDiagram.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkDiagram.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkDiagram.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkDiagram.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkDiagram.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkDiagram.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkDiagram.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkDiagram.md#getpaddingleft)
- [getPaddingRight](DThemeDarkDiagram.md#getpaddingright)
- [getPaddingTop](DThemeDarkDiagram.md#getpaddingtop)
- [getShadow](DThemeDarkDiagram.md#getshadow)
- [getTitle](DThemeDarkDiagram.md#gettitle)
- [getWeight](DThemeDarkDiagram.md#getweight)
- [getWidth](DThemeDarkDiagram.md#getwidth)
- [getX](DThemeDarkDiagram.md#getx)
- [getY](DThemeDarkDiagram.md#gety)
- [isAmbient](DThemeDarkDiagram.md#isambient)
- [isOverflowMaskEnabled](DThemeDarkDiagram.md#isoverflowmaskenabled)
- [newShadow](DThemeDarkDiagram.md#newshadow)
- [newShadowWeak](DThemeDarkDiagram.md#newshadowweak)
- [newState](DThemeDarkDiagram.md#newstate)

## Constructors

### constructor

• **new DThemeDarkDiagram**(): [`DThemeDarkDiagram`](DThemeDarkDiagram.md)

#### Returns

[`DThemeDarkDiagram`](DThemeDarkDiagram.md)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[constructor](DThemeDarkDiagramBase.md#constructor)

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

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getAlpha](../interfaces/DThemeDiagram.md#getalpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getAlpha](DThemeDarkDiagramBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBackgroundAlpha](../interfaces/DThemeDiagram.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBackgroundAlpha](DThemeDarkDiagramBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L84)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBackgroundColor](../interfaces/DThemeDiagram.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBackgroundColor](DThemeDarkDiagramBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L12)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBackgroundTexture](../interfaces/DThemeDiagram.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBackgroundTexture](DThemeDarkDiagramBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L88)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBorderAlign](../interfaces/DThemeDiagram.md#getborderalign)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderAlign](DThemeDarkDiagramBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L104)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBorderAlpha](../interfaces/DThemeDiagram.md#getborderalpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderAlpha](DThemeDarkDiagramBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L96)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBorderColor](../interfaces/DThemeDiagram.md#getbordercolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderColor](DThemeDarkDiagramBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L16)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBorderMask](../interfaces/DThemeDiagram.md#getbordermask)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderMask](DThemeDarkDiagramBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBorderTexture](../interfaces/DThemeDiagram.md#getbordertexture)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderTexture](DThemeDarkDiagramBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L112)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBorderWidth](../interfaces/DThemeDiagram.md#getborderwidth)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderWidth](DThemeDarkDiagramBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCanvasBackgroundAlpha](../interfaces/DThemeDiagram.md#getcanvasbackgroundalpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCanvasBackgroundAlpha](DThemeDarkDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L15)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCanvasBackgroundColor](../interfaces/DThemeDiagram.md#getcanvasbackgroundcolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCanvasBackgroundColor](DThemeDarkDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L11)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCanvasShadow](../interfaces/DThemeDiagram.md#getcanvasshadow)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCanvasShadow](DThemeDarkDiagramBase.md#getcanvasshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L23)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getClearType](../interfaces/DThemeDiagram.md#getcleartype)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getClearType](DThemeDarkDiagramBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L167)

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

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getColor](../interfaces/DThemeDiagram.md#getcolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getColor](DThemeDarkDiagramBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCornerMask](../interfaces/DThemeDiagram.md#getcornermask)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCornerMask](DThemeDarkDiagramBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCornerRadius](../interfaces/DThemeDiagram.md#getcornerradius)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCornerRadius](DThemeDarkDiagramBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L132)

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

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCursor](../interfaces/DThemeDiagram.md#getcursor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCursor](DThemeDarkDiagramBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontFamilly](../interfaces/DThemeDiagram.md#getfontfamilly)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontFamilly](DThemeDarkDiagramBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontSize](../interfaces/DThemeDiagram.md#getfontsize)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontSize](DThemeDarkDiagramBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontStyle](../interfaces/DThemeDiagram.md#getfontstyle)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontStyle](DThemeDarkDiagramBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontVariant](../interfaces/DThemeDiagram.md#getfontvariant)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontVariant](DThemeDarkDiagramBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontWeight](../interfaces/DThemeDiagram.md#getfontweight)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontWeight](DThemeDarkDiagramBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getHeight](../interfaces/DThemeDiagram.md#getheight)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getHeight](DThemeDarkDiagramBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getInteractive](../interfaces/DThemeDiagram.md#getinteractive)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getInteractive](DThemeDarkDiagramBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L40)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getLineHeight](../interfaces/DThemeDiagram.md#getlineheight)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getLineHeight](DThemeDarkDiagramBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getOutlineAlign](../interfaces/DThemeDiagram.md#getoutlinealign)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineAlign](DThemeDarkDiagramBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L159)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getOutlineAlpha](../interfaces/DThemeDiagram.md#getoutlinealpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineAlpha](DThemeDarkDiagramBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L144)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getOutlineColor](../interfaces/DThemeDiagram.md#getoutlinecolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineColor](DThemeDarkDiagramBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L140)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getOutlineMask](../interfaces/DThemeDiagram.md#getoutlinemask)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineMask](DThemeDarkDiagramBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L163)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getOutlineOffset](../interfaces/DThemeDiagram.md#getoutlineoffset)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineOffset](DThemeDarkDiagramBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L155)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getOutlineWidth](../interfaces/DThemeDiagram.md#getoutlinewidth)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineWidth](DThemeDarkDiagramBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getPaddingBottom](../interfaces/DThemeDiagram.md#getpaddingbottom)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getPaddingBottom](DThemeDarkDiagramBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L32)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getPaddingLeft](../interfaces/DThemeDiagram.md#getpaddingleft)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getPaddingLeft](DThemeDarkDiagramBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L20)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getPaddingRight](../interfaces/DThemeDiagram.md#getpaddingright)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getPaddingRight](DThemeDarkDiagramBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L28)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getPaddingTop](../interfaces/DThemeDiagram.md#getpaddingtop)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getPaddingTop](DThemeDarkDiagramBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L24)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getShadow](../interfaces/DThemeDiagram.md#getshadow)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getShadow](DThemeDarkDiagramBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getTitle](../interfaces/DThemeDiagram.md#gettitle)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getTitle](DThemeDarkDiagramBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getWeight](../interfaces/DThemeDiagram.md#getweight)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getWeight](DThemeDarkDiagramBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getWidth](../interfaces/DThemeDiagram.md#getwidth)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getWidth](DThemeDarkDiagramBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getX](../interfaces/DThemeDiagram.md#getx)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getX](DThemeDarkDiagramBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getY](../interfaces/DThemeDiagram.md#gety)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getY](DThemeDarkDiagramBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[isAmbient](../interfaces/DThemeDiagram.md#isambient)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[isAmbient](DThemeDarkDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L19)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[isOverflowMaskEnabled](../interfaces/DThemeDiagram.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[isOverflowMaskEnabled](DThemeDarkDiagramBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L36)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[newShadow](../interfaces/DThemeDiagram.md#newshadow)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[newShadow](DThemeDarkDiagramBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[newShadowWeak](../interfaces/DThemeDiagram.md#newshadowweak)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[newShadowWeak](DThemeDarkDiagramBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L195)

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

[DThemeDiagram](../interfaces/DThemeDiagram.md).[newState](../interfaces/DThemeDiagram.md#newstate)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[newState](DThemeDarkDiagramBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L179)
