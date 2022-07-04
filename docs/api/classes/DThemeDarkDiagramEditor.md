[Winter Cardinal UI - v0.194.0](../index.md) / DThemeDarkDiagramEditor

# Class: DThemeDarkDiagramEditor

## Hierarchy

- [`DThemeDarkDiagramBase`](DThemeDarkDiagramBase.md)

  ↳ **`DThemeDarkDiagramEditor`**

## Implements

- [`DThemeDiagramEditor`](../interfaces/DThemeDiagramEditor.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkDiagramEditor.md#constructor)

### Methods

- [getAlpha](DThemeDarkDiagramEditor.md#getalpha)
- [getBackgroundAlpha](DThemeDarkDiagramEditor.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkDiagramEditor.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkDiagramEditor.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkDiagramEditor.md#getborderalign)
- [getBorderAlpha](DThemeDarkDiagramEditor.md#getborderalpha)
- [getBorderColor](DThemeDarkDiagramEditor.md#getbordercolor)
- [getBorderMask](DThemeDarkDiagramEditor.md#getbordermask)
- [getBorderTexture](DThemeDarkDiagramEditor.md#getbordertexture)
- [getBorderWidth](DThemeDarkDiagramEditor.md#getborderwidth)
- [getCanvasBackgroundAlpha](DThemeDarkDiagramEditor.md#getcanvasbackgroundalpha)
- [getCanvasBackgroundColor](DThemeDarkDiagramEditor.md#getcanvasbackgroundcolor)
- [getCanvasShadow](DThemeDarkDiagramEditor.md#getcanvasshadow)
- [getClearType](DThemeDarkDiagramEditor.md#getcleartype)
- [getColor](DThemeDarkDiagramEditor.md#getcolor)
- [getCornerMask](DThemeDarkDiagramEditor.md#getcornermask)
- [getCornerRadius](DThemeDarkDiagramEditor.md#getcornerradius)
- [getCursor](DThemeDarkDiagramEditor.md#getcursor)
- [getFontFamilly](DThemeDarkDiagramEditor.md#getfontfamilly)
- [getFontSize](DThemeDarkDiagramEditor.md#getfontsize)
- [getFontStyle](DThemeDarkDiagramEditor.md#getfontstyle)
- [getFontVariant](DThemeDarkDiagramEditor.md#getfontvariant)
- [getFontWeight](DThemeDarkDiagramEditor.md#getfontweight)
- [getHeight](DThemeDarkDiagramEditor.md#getheight)
- [getInteractive](DThemeDarkDiagramEditor.md#getinteractive)
- [getLineHeight](DThemeDarkDiagramEditor.md#getlineheight)
- [getOutlineAlign](DThemeDarkDiagramEditor.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkDiagramEditor.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkDiagramEditor.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkDiagramEditor.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkDiagramEditor.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkDiagramEditor.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkDiagramEditor.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkDiagramEditor.md#getpaddingleft)
- [getPaddingRight](DThemeDarkDiagramEditor.md#getpaddingright)
- [getPaddingTop](DThemeDarkDiagramEditor.md#getpaddingtop)
- [getShadow](DThemeDarkDiagramEditor.md#getshadow)
- [getThumbnailSize](DThemeDarkDiagramEditor.md#getthumbnailsize)
- [getTitle](DThemeDarkDiagramEditor.md#gettitle)
- [getWeight](DThemeDarkDiagramEditor.md#getweight)
- [getWidth](DThemeDarkDiagramEditor.md#getwidth)
- [getX](DThemeDarkDiagramEditor.md#getx)
- [getY](DThemeDarkDiagramEditor.md#gety)
- [isAmbient](DThemeDarkDiagramEditor.md#isambient)
- [isOverflowMaskEnabled](DThemeDarkDiagramEditor.md#isoverflowmaskenabled)
- [isThumbnailEnabled](DThemeDarkDiagramEditor.md#isthumbnailenabled)
- [newShadow](DThemeDarkDiagramEditor.md#newshadow)
- [newShadowWeak](DThemeDarkDiagramEditor.md#newshadowweak)
- [newState](DThemeDarkDiagramEditor.md#newstate)

## Constructors

### constructor

• **new DThemeDarkDiagramEditor**()

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getAlpha](../interfaces/DThemeDiagramEditor.md#getalpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getAlpha](DThemeDarkDiagramBase.md#getalpha)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBackgroundAlpha](../interfaces/DThemeDiagramEditor.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBackgroundAlpha](DThemeDarkDiagramBase.md#getbackgroundalpha)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBackgroundColor](../interfaces/DThemeDiagramEditor.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBackgroundColor](DThemeDarkDiagramBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L12)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBackgroundTexture](../interfaces/DThemeDiagramEditor.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBackgroundTexture](DThemeDarkDiagramBase.md#getbackgroundtexture)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBorderAlign](../interfaces/DThemeDiagramEditor.md#getborderalign)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderAlign](DThemeDarkDiagramBase.md#getborderalign)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBorderAlpha](../interfaces/DThemeDiagramEditor.md#getborderalpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderAlpha](DThemeDarkDiagramBase.md#getborderalpha)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBorderColor](../interfaces/DThemeDiagramEditor.md#getbordercolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderColor](DThemeDarkDiagramBase.md#getbordercolor)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBorderMask](../interfaces/DThemeDiagramEditor.md#getbordermask)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderMask](DThemeDarkDiagramBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBorderTexture](../interfaces/DThemeDiagramEditor.md#getbordertexture)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderTexture](DThemeDarkDiagramBase.md#getbordertexture)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBorderWidth](../interfaces/DThemeDiagramEditor.md#getborderwidth)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getBorderWidth](DThemeDarkDiagramBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCanvasBackgroundAlpha](../interfaces/DThemeDiagramEditor.md#getcanvasbackgroundalpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCanvasBackgroundAlpha](DThemeDarkDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L15)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCanvasBackgroundColor](../interfaces/DThemeDiagramEditor.md#getcanvasbackgroundcolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCanvasBackgroundColor](DThemeDarkDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-base.ts#L11)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCanvasShadow](../interfaces/DThemeDiagramEditor.md#getcanvasshadow)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCanvasShadow](DThemeDarkDiagramBase.md#getcanvasshadow)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getClearType](../interfaces/DThemeDiagramEditor.md#getcleartype)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getClearType](DThemeDarkDiagramBase.md#getcleartype)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getColor](../interfaces/DThemeDiagramEditor.md#getcolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getColor](DThemeDarkDiagramBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCornerMask](../interfaces/DThemeDiagramEditor.md#getcornermask)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCornerMask](DThemeDarkDiagramBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCornerRadius](../interfaces/DThemeDiagramEditor.md#getcornerradius)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCornerRadius](DThemeDarkDiagramBase.md#getcornerradius)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCursor](../interfaces/DThemeDiagramEditor.md#getcursor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getCursor](DThemeDarkDiagramBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontFamilly](../interfaces/DThemeDiagramEditor.md#getfontfamilly)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontFamilly](DThemeDarkDiagramBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontSize](../interfaces/DThemeDiagramEditor.md#getfontsize)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontSize](DThemeDarkDiagramBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontStyle](../interfaces/DThemeDiagramEditor.md#getfontstyle)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontStyle](DThemeDarkDiagramBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontVariant](../interfaces/DThemeDiagramEditor.md#getfontvariant)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontVariant](DThemeDarkDiagramBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontWeight](../interfaces/DThemeDiagramEditor.md#getfontweight)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getFontWeight](DThemeDarkDiagramBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getHeight](../interfaces/DThemeDiagramEditor.md#getheight)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getHeight](DThemeDarkDiagramBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L62)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getInteractive](../interfaces/DThemeDiagramEditor.md#getinteractive)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getInteractive](DThemeDarkDiagramBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L40)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getLineHeight](../interfaces/DThemeDiagramEditor.md#getlineheight)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getLineHeight](DThemeDarkDiagramBase.md#getlineheight)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getOutlineAlign](../interfaces/DThemeDiagramEditor.md#getoutlinealign)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineAlign](DThemeDarkDiagramBase.md#getoutlinealign)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getOutlineAlpha](../interfaces/DThemeDiagramEditor.md#getoutlinealpha)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineAlpha](DThemeDarkDiagramBase.md#getoutlinealpha)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getOutlineColor](../interfaces/DThemeDiagramEditor.md#getoutlinecolor)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineColor](DThemeDarkDiagramBase.md#getoutlinecolor)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getOutlineMask](../interfaces/DThemeDiagramEditor.md#getoutlinemask)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineMask](DThemeDarkDiagramBase.md#getoutlinemask)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getOutlineOffset](../interfaces/DThemeDiagramEditor.md#getoutlineoffset)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineOffset](DThemeDarkDiagramBase.md#getoutlineoffset)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getOutlineWidth](../interfaces/DThemeDiagramEditor.md#getoutlinewidth)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getOutlineWidth](DThemeDarkDiagramBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getPaddingBottom](../interfaces/DThemeDiagramEditor.md#getpaddingbottom)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getPaddingBottom](DThemeDarkDiagramBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L32)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getPaddingLeft](../interfaces/DThemeDiagramEditor.md#getpaddingleft)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getPaddingLeft](DThemeDarkDiagramBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L20)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getPaddingRight](../interfaces/DThemeDiagramEditor.md#getpaddingright)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getPaddingRight](DThemeDarkDiagramBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L28)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getPaddingTop](../interfaces/DThemeDiagramEditor.md#getpaddingtop)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getPaddingTop](DThemeDarkDiagramBase.md#getpaddingtop)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getShadow](../interfaces/DThemeDiagramEditor.md#getshadow)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getShadow](DThemeDarkDiagramBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getThumbnailSize

▸ **getThumbnailSize**(): ``null`` \| `number`

Returns a thumbnail maximum size.
If the size is null, a thumbnail size will be of a canvas size.

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getThumbnailSize](../interfaces/DThemeDiagramEditor.md#getthumbnailsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-editor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-editor.ts#L18)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getTitle](../interfaces/DThemeDiagramEditor.md#gettitle)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getTitle](DThemeDarkDiagramBase.md#gettitle)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getWeight](../interfaces/DThemeDiagramEditor.md#getweight)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getWeight](DThemeDarkDiagramBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getWidth](../interfaces/DThemeDiagramEditor.md#getwidth)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getWidth](DThemeDarkDiagramBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getX](../interfaces/DThemeDiagramEditor.md#getx)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getX](DThemeDarkDiagramBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getY](../interfaces/DThemeDiagramEditor.md#gety)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[getY](DThemeDarkDiagramBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[isAmbient](../interfaces/DThemeDiagramEditor.md#isambient)

#### Overrides

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[isAmbient](DThemeDarkDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-editor.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-editor.ts#L10)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[isOverflowMaskEnabled](../interfaces/DThemeDiagramEditor.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[isOverflowMaskEnabled](DThemeDarkDiagramBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas-container.ts#L36)

___

### isThumbnailEnabled

▸ **isThumbnailEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[isThumbnailEnabled](../interfaces/DThemeDiagramEditor.md#isthumbnailenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-editor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-editor.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[newShadow](../interfaces/DThemeDiagramEditor.md#newshadow)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[newShadow](DThemeDarkDiagramBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[newShadowWeak](../interfaces/DThemeDiagramEditor.md#newshadowweak)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[newShadowWeak](DThemeDarkDiagramBase.md#newshadowweak)

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[newState](../interfaces/DThemeDiagramEditor.md#newstate)

#### Inherited from

[DThemeDarkDiagramBase](DThemeDarkDiagramBase.md).[newState](DThemeDarkDiagramBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L169)
