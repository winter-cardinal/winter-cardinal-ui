[Winter Cardinal UI - v0.310.1](../index.md) / DThemeDarkDiagramBase

# Class: DThemeDarkDiagramBase

[DDiagramBase](DDiagramBase.md) theme.

## Hierarchy

- [`DThemeDarkCanvasContainer`](DThemeDarkCanvasContainer.md)

  ↳ **`DThemeDarkDiagramBase`**

  ↳↳ [`DThemeDarkDiagram`](DThemeDarkDiagram.md)

  ↳↳ [`DThemeDarkDiagramEditor`](DThemeDarkDiagramEditor.md)

## Implements

- [`DThemeDiagramBase`](../interfaces/DThemeDiagramBase.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkDiagramBase.md#constructor)

### Methods

- [getAlpha](DThemeDarkDiagramBase.md#getalpha)
- [getBackgroundAlpha](DThemeDarkDiagramBase.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkDiagramBase.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkDiagramBase.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkDiagramBase.md#getborderalign)
- [getBorderAlpha](DThemeDarkDiagramBase.md#getborderalpha)
- [getBorderColor](DThemeDarkDiagramBase.md#getbordercolor)
- [getBorderMask](DThemeDarkDiagramBase.md#getbordermask)
- [getBorderTexture](DThemeDarkDiagramBase.md#getbordertexture)
- [getBorderWidth](DThemeDarkDiagramBase.md#getborderwidth)
- [getCanvasBackgroundAlpha](DThemeDarkDiagramBase.md#getcanvasbackgroundalpha)
- [getCanvasBackgroundColor](DThemeDarkDiagramBase.md#getcanvasbackgroundcolor)
- [getCanvasShadow](DThemeDarkDiagramBase.md#getcanvasshadow)
- [getClearType](DThemeDarkDiagramBase.md#getcleartype)
- [getColor](DThemeDarkDiagramBase.md#getcolor)
- [getCornerMask](DThemeDarkDiagramBase.md#getcornermask)
- [getCornerRadius](DThemeDarkDiagramBase.md#getcornerradius)
- [getCursor](DThemeDarkDiagramBase.md#getcursor)
- [getFontFamilly](DThemeDarkDiagramBase.md#getfontfamilly)
- [getFontSize](DThemeDarkDiagramBase.md#getfontsize)
- [getFontStyle](DThemeDarkDiagramBase.md#getfontstyle)
- [getFontVariant](DThemeDarkDiagramBase.md#getfontvariant)
- [getFontWeight](DThemeDarkDiagramBase.md#getfontweight)
- [getHeight](DThemeDarkDiagramBase.md#getheight)
- [getInteractive](DThemeDarkDiagramBase.md#getinteractive)
- [getLineHeight](DThemeDarkDiagramBase.md#getlineheight)
- [getOutlineAlign](DThemeDarkDiagramBase.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkDiagramBase.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkDiagramBase.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkDiagramBase.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkDiagramBase.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkDiagramBase.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkDiagramBase.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkDiagramBase.md#getpaddingleft)
- [getPaddingRight](DThemeDarkDiagramBase.md#getpaddingright)
- [getPaddingTop](DThemeDarkDiagramBase.md#getpaddingtop)
- [getShadow](DThemeDarkDiagramBase.md#getshadow)
- [getTitle](DThemeDarkDiagramBase.md#gettitle)
- [getWeight](DThemeDarkDiagramBase.md#getweight)
- [getWidth](DThemeDarkDiagramBase.md#getwidth)
- [getX](DThemeDarkDiagramBase.md#getx)
- [getY](DThemeDarkDiagramBase.md#gety)
- [isAmbient](DThemeDarkDiagramBase.md#isambient)
- [isOverflowMaskEnabled](DThemeDarkDiagramBase.md#isoverflowmaskenabled)
- [newShadow](DThemeDarkDiagramBase.md#newshadow)
- [newShadowWeak](DThemeDarkDiagramBase.md#newshadowweak)
- [newState](DThemeDarkDiagramBase.md#newstate)

## Constructors

### constructor

• **new DThemeDarkDiagramBase**()

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[constructor](DThemeDarkCanvasContainer.md#constructor)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getAlpha](../interfaces/DThemeDiagramBase.md#getalpha)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getAlpha](DThemeDarkCanvasContainer.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBackgroundAlpha](../interfaces/DThemeDiagramBase.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBackgroundAlpha](DThemeDarkCanvasContainer.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L84)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBackgroundColor](../interfaces/DThemeDiagramBase.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBackgroundColor](DThemeDarkCanvasContainer.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L12)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBackgroundTexture](../interfaces/DThemeDiagramBase.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBackgroundTexture](DThemeDarkCanvasContainer.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L88)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderAlign](../interfaces/DThemeDiagramBase.md#getborderalign)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderAlign](DThemeDarkCanvasContainer.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L104)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderAlpha](../interfaces/DThemeDiagramBase.md#getborderalpha)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderAlpha](DThemeDarkCanvasContainer.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L96)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderColor](../interfaces/DThemeDiagramBase.md#getbordercolor)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderColor](DThemeDarkCanvasContainer.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L16)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderMask](../interfaces/DThemeDiagramBase.md#getbordermask)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderMask](DThemeDarkCanvasContainer.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderTexture](../interfaces/DThemeDiagramBase.md#getbordertexture)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderTexture](DThemeDarkCanvasContainer.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L112)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderWidth](../interfaces/DThemeDiagramBase.md#getborderwidth)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderWidth](DThemeDarkCanvasContainer.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCanvasBackgroundAlpha](../interfaces/DThemeDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L15)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCanvasBackgroundColor](../interfaces/DThemeDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L11)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCanvasShadow](../interfaces/DThemeDiagramBase.md#getcanvasshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L23)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getClearType](../interfaces/DThemeDiagramBase.md#getcleartype)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getClearType](DThemeDarkCanvasContainer.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L167)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getColor](../interfaces/DThemeDiagramBase.md#getcolor)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getColor](DThemeDarkCanvasContainer.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCornerMask](../interfaces/DThemeDiagramBase.md#getcornermask)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getCornerMask](DThemeDarkCanvasContainer.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCornerRadius](../interfaces/DThemeDiagramBase.md#getcornerradius)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getCornerRadius](DThemeDarkCanvasContainer.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L132)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCursor](../interfaces/DThemeDiagramBase.md#getcursor)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getCursor](DThemeDarkCanvasContainer.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getFontFamilly](../interfaces/DThemeDiagramBase.md#getfontfamilly)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getFontFamilly](DThemeDarkCanvasContainer.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getFontSize](../interfaces/DThemeDiagramBase.md#getfontsize)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getFontSize](DThemeDarkCanvasContainer.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getFontStyle](../interfaces/DThemeDiagramBase.md#getfontstyle)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getFontStyle](DThemeDarkCanvasContainer.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getFontVariant](../interfaces/DThemeDiagramBase.md#getfontvariant)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getFontVariant](DThemeDarkCanvasContainer.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getFontWeight](../interfaces/DThemeDiagramBase.md#getfontweight)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getFontWeight](DThemeDarkCanvasContainer.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getHeight](../interfaces/DThemeDiagramBase.md#getheight)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getHeight](DThemeDarkCanvasContainer.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getInteractive](../interfaces/DThemeDiagramBase.md#getinteractive)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getInteractive](DThemeDarkCanvasContainer.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L40)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getLineHeight](../interfaces/DThemeDiagramBase.md#getlineheight)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getLineHeight](DThemeDarkCanvasContainer.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineAlign](../interfaces/DThemeDiagramBase.md#getoutlinealign)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineAlign](DThemeDarkCanvasContainer.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L159)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineAlpha](../interfaces/DThemeDiagramBase.md#getoutlinealpha)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineAlpha](DThemeDarkCanvasContainer.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L144)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineColor](../interfaces/DThemeDiagramBase.md#getoutlinecolor)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineColor](DThemeDarkCanvasContainer.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L140)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineMask](../interfaces/DThemeDiagramBase.md#getoutlinemask)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineMask](DThemeDarkCanvasContainer.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L163)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineOffset](../interfaces/DThemeDiagramBase.md#getoutlineoffset)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineOffset](DThemeDarkCanvasContainer.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L155)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineWidth](../interfaces/DThemeDiagramBase.md#getoutlinewidth)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineWidth](DThemeDarkCanvasContainer.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getPaddingBottom](../interfaces/DThemeDiagramBase.md#getpaddingbottom)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getPaddingBottom](DThemeDarkCanvasContainer.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L32)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getPaddingLeft](../interfaces/DThemeDiagramBase.md#getpaddingleft)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getPaddingLeft](DThemeDarkCanvasContainer.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L20)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getPaddingRight](../interfaces/DThemeDiagramBase.md#getpaddingright)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getPaddingRight](DThemeDarkCanvasContainer.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L28)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getPaddingTop](../interfaces/DThemeDiagramBase.md#getpaddingtop)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getPaddingTop](DThemeDarkCanvasContainer.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L24)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getShadow](../interfaces/DThemeDiagramBase.md#getshadow)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getShadow](DThemeDarkCanvasContainer.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getTitle](../interfaces/DThemeDiagramBase.md#gettitle)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getTitle](DThemeDarkCanvasContainer.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getWeight](../interfaces/DThemeDiagramBase.md#getweight)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getWeight](DThemeDarkCanvasContainer.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getWidth](../interfaces/DThemeDiagramBase.md#getwidth)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getWidth](DThemeDarkCanvasContainer.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getX](../interfaces/DThemeDiagramBase.md#getx)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getX](DThemeDarkCanvasContainer.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getY](../interfaces/DThemeDiagramBase.md#gety)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getY](DThemeDarkCanvasContainer.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[isAmbient](../interfaces/DThemeDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L19)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[isOverflowMaskEnabled](../interfaces/DThemeDiagramBase.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[isOverflowMaskEnabled](DThemeDarkCanvasContainer.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L36)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[newShadow](../interfaces/DThemeDiagramBase.md#newshadow)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[newShadow](DThemeDarkCanvasContainer.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[newShadowWeak](../interfaces/DThemeDiagramBase.md#newshadowweak)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[newShadowWeak](DThemeDarkCanvasContainer.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L195)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[newState](../interfaces/DThemeDiagramBase.md#newstate)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[newState](DThemeDarkCanvasContainer.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L179)
