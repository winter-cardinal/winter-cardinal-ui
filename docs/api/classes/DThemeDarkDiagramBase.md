[Winter Cardinal UI - v0.194.0](../index.md) / DThemeDarkDiagramBase

# Class: DThemeDarkDiagramBase

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBackgroundAlpha](../interfaces/DThemeDiagramBase.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBackgroundAlpha](DThemeDarkCanvasContainer.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBackgroundColor](../interfaces/DThemeDiagramBase.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBackgroundColor](DThemeDarkCanvasContainer.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L12)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderAlign](../interfaces/DThemeDiagramBase.md#getborderalign)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderAlign](DThemeDarkCanvasContainer.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderAlpha](../interfaces/DThemeDiagramBase.md#getborderalpha)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderAlpha](DThemeDarkCanvasContainer.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderColor](../interfaces/DThemeDiagramBase.md#getbordercolor)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderColor](DThemeDarkCanvasContainer.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L16)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderMask](../interfaces/DThemeDiagramBase.md#getbordermask)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderMask](DThemeDarkCanvasContainer.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getBorderWidth](../interfaces/DThemeDiagramBase.md#getborderwidth)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getBorderWidth](DThemeDarkCanvasContainer.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCanvasBackgroundAlpha](../interfaces/DThemeDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L15)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCanvasBackgroundColor](../interfaces/DThemeDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L11)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getCanvasShadow](../interfaces/DThemeDiagramBase.md#getcanvasshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L23)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L62)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L40)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineAlign](../interfaces/DThemeDiagramBase.md#getoutlinealign)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineAlign](DThemeDarkCanvasContainer.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineAlpha](../interfaces/DThemeDiagramBase.md#getoutlinealpha)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineAlpha](DThemeDarkCanvasContainer.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineColor](../interfaces/DThemeDiagramBase.md#getoutlinecolor)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineColor](DThemeDarkCanvasContainer.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineMask](../interfaces/DThemeDiagramBase.md#getoutlinemask)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineMask](DThemeDarkCanvasContainer.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineOffset](../interfaces/DThemeDiagramBase.md#getoutlineoffset)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineOffset](DThemeDarkCanvasContainer.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[getOutlineWidth](../interfaces/DThemeDiagramBase.md#getoutlinewidth)

#### Inherited from

[DThemeDarkCanvasContainer](DThemeDarkCanvasContainer.md).[getOutlineWidth](DThemeDarkCanvasContainer.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L32)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L20)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L28)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L24)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L66)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramBase](../interfaces/DThemeDiagramBase.md).[isAmbient](../interfaces/DThemeDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L19)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L36)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L169)
