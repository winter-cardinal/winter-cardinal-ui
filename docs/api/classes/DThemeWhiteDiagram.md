[Winter Cardinal UI - v0.310.1](../index.md) / DThemeWhiteDiagram

# Class: DThemeWhiteDiagram

[DDiagram](DDiagram.md) theme.

## Hierarchy

- [`DThemeWhiteDiagramBase`](DThemeWhiteDiagramBase.md)

  ↳ **`DThemeWhiteDiagram`**

## Implements

- [`DThemeDiagram`](../interfaces/DThemeDiagram.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteDiagram.md#constructor)

### Methods

- [getAlpha](DThemeWhiteDiagram.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteDiagram.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteDiagram.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteDiagram.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteDiagram.md#getborderalign)
- [getBorderAlpha](DThemeWhiteDiagram.md#getborderalpha)
- [getBorderColor](DThemeWhiteDiagram.md#getbordercolor)
- [getBorderMask](DThemeWhiteDiagram.md#getbordermask)
- [getBorderTexture](DThemeWhiteDiagram.md#getbordertexture)
- [getBorderWidth](DThemeWhiteDiagram.md#getborderwidth)
- [getCanvasBackgroundAlpha](DThemeWhiteDiagram.md#getcanvasbackgroundalpha)
- [getCanvasBackgroundColor](DThemeWhiteDiagram.md#getcanvasbackgroundcolor)
- [getCanvasShadow](DThemeWhiteDiagram.md#getcanvasshadow)
- [getClearType](DThemeWhiteDiagram.md#getcleartype)
- [getColor](DThemeWhiteDiagram.md#getcolor)
- [getCornerMask](DThemeWhiteDiagram.md#getcornermask)
- [getCornerRadius](DThemeWhiteDiagram.md#getcornerradius)
- [getCursor](DThemeWhiteDiagram.md#getcursor)
- [getFontFamilly](DThemeWhiteDiagram.md#getfontfamilly)
- [getFontSize](DThemeWhiteDiagram.md#getfontsize)
- [getFontStyle](DThemeWhiteDiagram.md#getfontstyle)
- [getFontVariant](DThemeWhiteDiagram.md#getfontvariant)
- [getFontWeight](DThemeWhiteDiagram.md#getfontweight)
- [getHeight](DThemeWhiteDiagram.md#getheight)
- [getInteractive](DThemeWhiteDiagram.md#getinteractive)
- [getLineHeight](DThemeWhiteDiagram.md#getlineheight)
- [getOutlineAlign](DThemeWhiteDiagram.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteDiagram.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteDiagram.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteDiagram.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteDiagram.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteDiagram.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteDiagram.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteDiagram.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteDiagram.md#getpaddingright)
- [getPaddingTop](DThemeWhiteDiagram.md#getpaddingtop)
- [getShadow](DThemeWhiteDiagram.md#getshadow)
- [getTitle](DThemeWhiteDiagram.md#gettitle)
- [getWeight](DThemeWhiteDiagram.md#getweight)
- [getWidth](DThemeWhiteDiagram.md#getwidth)
- [getX](DThemeWhiteDiagram.md#getx)
- [getY](DThemeWhiteDiagram.md#gety)
- [isAmbient](DThemeWhiteDiagram.md#isambient)
- [isOverflowMaskEnabled](DThemeWhiteDiagram.md#isoverflowmaskenabled)
- [newShadow](DThemeWhiteDiagram.md#newshadow)
- [newShadowWeak](DThemeWhiteDiagram.md#newshadowweak)
- [newState](DThemeWhiteDiagram.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteDiagram**()

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[constructor](DThemeWhiteDiagramBase.md#constructor)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getAlpha](DThemeWhiteDiagramBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBackgroundAlpha](DThemeWhiteDiagramBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L84)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBackgroundColor](DThemeWhiteDiagramBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBackgroundTexture](../interfaces/DThemeDiagram.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBackgroundTexture](DThemeWhiteDiagramBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L88)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderAlign](DThemeWhiteDiagramBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L104)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderAlpha](DThemeWhiteDiagramBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L96)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderColor](DThemeWhiteDiagramBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L17)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderMask](DThemeWhiteDiagramBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getBorderTexture](../interfaces/DThemeDiagram.md#getbordertexture)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderTexture](DThemeWhiteDiagramBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L112)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderWidth](DThemeWhiteDiagramBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCanvasBackgroundAlpha](../interfaces/DThemeDiagram.md#getcanvasbackgroundalpha)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCanvasBackgroundAlpha](DThemeWhiteDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts#L18)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCanvasBackgroundColor](../interfaces/DThemeDiagram.md#getcanvasbackgroundcolor)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCanvasBackgroundColor](DThemeWhiteDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts#L14)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCanvasShadow](../interfaces/DThemeDiagram.md#getcanvasshadow)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCanvasShadow](DThemeWhiteDiagramBase.md#getcanvasshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts#L26)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getClearType](DThemeWhiteDiagramBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L167)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getColor](DThemeWhiteDiagramBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCornerMask](../interfaces/DThemeDiagram.md#getcornermask)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCornerMask](DThemeWhiteDiagramBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L45)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getCornerRadius](../interfaces/DThemeDiagram.md#getcornerradius)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCornerRadius](DThemeWhiteDiagramBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L132)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCursor](DThemeWhiteDiagramBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontFamilly](../interfaces/DThemeDiagram.md#getfontfamilly)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontFamilly](DThemeWhiteDiagramBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontSize](../interfaces/DThemeDiagram.md#getfontsize)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontSize](DThemeWhiteDiagramBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontStyle](../interfaces/DThemeDiagram.md#getfontstyle)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontStyle](DThemeWhiteDiagramBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontVariant](../interfaces/DThemeDiagram.md#getfontvariant)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontVariant](DThemeWhiteDiagramBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getFontWeight](../interfaces/DThemeDiagram.md#getfontweight)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontWeight](DThemeWhiteDiagramBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getHeight](../interfaces/DThemeDiagram.md#getheight)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getHeight](DThemeWhiteDiagramBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getInteractive](../interfaces/DThemeDiagram.md#getinteractive)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getInteractive](DThemeWhiteDiagramBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L41)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getLineHeight](../interfaces/DThemeDiagram.md#getlineheight)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getLineHeight](DThemeWhiteDiagramBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineAlign](DThemeWhiteDiagramBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L159)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineAlpha](DThemeWhiteDiagramBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L144)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineColor](DThemeWhiteDiagramBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L140)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineMask](DThemeWhiteDiagramBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L163)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineOffset](DThemeWhiteDiagramBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L155)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineWidth](DThemeWhiteDiagramBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getPaddingBottom](../interfaces/DThemeDiagram.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getPaddingBottom](DThemeWhiteDiagramBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L33)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getPaddingLeft](../interfaces/DThemeDiagram.md#getpaddingleft)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getPaddingLeft](DThemeWhiteDiagramBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L21)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getPaddingRight](../interfaces/DThemeDiagram.md#getpaddingright)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getPaddingRight](DThemeWhiteDiagramBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L29)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getPaddingTop](../interfaces/DThemeDiagram.md#getpaddingtop)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getPaddingTop](DThemeWhiteDiagramBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L25)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getShadow](DThemeWhiteDiagramBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getTitle](../interfaces/DThemeDiagram.md#gettitle)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getTitle](DThemeWhiteDiagramBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L183)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getWeight](DThemeWhiteDiagramBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getWidth](../interfaces/DThemeDiagram.md#getwidth)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getWidth](DThemeWhiteDiagramBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getX](../interfaces/DThemeDiagram.md#getx)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getX](DThemeWhiteDiagramBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[getY](../interfaces/DThemeDiagram.md#gety)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getY](DThemeWhiteDiagramBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[isAmbient](../interfaces/DThemeDiagram.md#isambient)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[isAmbient](DThemeWhiteDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts#L22)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[isOverflowMaskEnabled](../interfaces/DThemeDiagram.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[isOverflowMaskEnabled](DThemeWhiteDiagramBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L37)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[newShadow](../interfaces/DThemeDiagram.md#newshadow)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[newShadow](DThemeWhiteDiagramBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagram](../interfaces/DThemeDiagram.md).[newShadowWeak](../interfaces/DThemeDiagram.md#newshadowweak)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[newShadowWeak](DThemeWhiteDiagramBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L195)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[newState](DThemeWhiteDiagramBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L179)
