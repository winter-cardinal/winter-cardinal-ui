[Winter Cardinal UI](../README.md) / DThemeWhiteDiagramEditor

# Class: DThemeWhiteDiagramEditor

## Hierarchy

- [`DThemeWhiteDiagramBase`](DThemeWhiteDiagramBase.md)

  ↳ **`DThemeWhiteDiagramEditor`**

## Implements

- [`DThemeDiagramEditor`](../interfaces/DThemeDiagramEditor.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteDiagramEditor.md#constructor)

### Methods

- [getAlpha](DThemeWhiteDiagramEditor.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteDiagramEditor.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteDiagramEditor.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteDiagramEditor.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteDiagramEditor.md#getborderalign)
- [getBorderAlpha](DThemeWhiteDiagramEditor.md#getborderalpha)
- [getBorderColor](DThemeWhiteDiagramEditor.md#getbordercolor)
- [getBorderMask](DThemeWhiteDiagramEditor.md#getbordermask)
- [getBorderTexture](DThemeWhiteDiagramEditor.md#getbordertexture)
- [getBorderWidth](DThemeWhiteDiagramEditor.md#getborderwidth)
- [getCanvasBackgroundAlpha](DThemeWhiteDiagramEditor.md#getcanvasbackgroundalpha)
- [getCanvasBackgroundColor](DThemeWhiteDiagramEditor.md#getcanvasbackgroundcolor)
- [getCanvasShadow](DThemeWhiteDiagramEditor.md#getcanvasshadow)
- [getClearType](DThemeWhiteDiagramEditor.md#getcleartype)
- [getColor](DThemeWhiteDiagramEditor.md#getcolor)
- [getCornerMask](DThemeWhiteDiagramEditor.md#getcornermask)
- [getCornerRadius](DThemeWhiteDiagramEditor.md#getcornerradius)
- [getCursor](DThemeWhiteDiagramEditor.md#getcursor)
- [getFontFamilly](DThemeWhiteDiagramEditor.md#getfontfamilly)
- [getFontSize](DThemeWhiteDiagramEditor.md#getfontsize)
- [getFontStyle](DThemeWhiteDiagramEditor.md#getfontstyle)
- [getFontVariant](DThemeWhiteDiagramEditor.md#getfontvariant)
- [getFontWeight](DThemeWhiteDiagramEditor.md#getfontweight)
- [getHeight](DThemeWhiteDiagramEditor.md#getheight)
- [getInteractive](DThemeWhiteDiagramEditor.md#getinteractive)
- [getLineHeight](DThemeWhiteDiagramEditor.md#getlineheight)
- [getOutlineAlign](DThemeWhiteDiagramEditor.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteDiagramEditor.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteDiagramEditor.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteDiagramEditor.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteDiagramEditor.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteDiagramEditor.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteDiagramEditor.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteDiagramEditor.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteDiagramEditor.md#getpaddingright)
- [getPaddingTop](DThemeWhiteDiagramEditor.md#getpaddingtop)
- [getShadow](DThemeWhiteDiagramEditor.md#getshadow)
- [getThumbnailSize](DThemeWhiteDiagramEditor.md#getthumbnailsize)
- [getTitle](DThemeWhiteDiagramEditor.md#gettitle)
- [getWeight](DThemeWhiteDiagramEditor.md#getweight)
- [getWidth](DThemeWhiteDiagramEditor.md#getwidth)
- [getX](DThemeWhiteDiagramEditor.md#getx)
- [getY](DThemeWhiteDiagramEditor.md#gety)
- [isAmbient](DThemeWhiteDiagramEditor.md#isambient)
- [isOverflowMaskEnabled](DThemeWhiteDiagramEditor.md#isoverflowmaskenabled)
- [isThumbnailEnabled](DThemeWhiteDiagramEditor.md#isthumbnailenabled)
- [newShadow](DThemeWhiteDiagramEditor.md#newshadow)
- [newShadowWeak](DThemeWhiteDiagramEditor.md#newshadowweak)
- [newState](DThemeWhiteDiagramEditor.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteDiagramEditor**()

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

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getAlpha](../interfaces/DThemeDiagramEditor.md#getalpha)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getAlpha](DThemeWhiteDiagramBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBackgroundAlpha](DThemeWhiteDiagramBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBackgroundColor](DThemeWhiteDiagramBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBackgroundTexture](../interfaces/DThemeDiagramEditor.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBackgroundTexture](DThemeWhiteDiagramBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderAlign](DThemeWhiteDiagramBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L94)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderAlpha](DThemeWhiteDiagramBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderColor](DThemeWhiteDiagramBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L17)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderMask](DThemeWhiteDiagramBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getBorderTexture](../interfaces/DThemeDiagramEditor.md#getbordertexture)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderTexture](DThemeWhiteDiagramBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getBorderWidth](DThemeWhiteDiagramBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCanvasBackgroundAlpha](../interfaces/DThemeDiagramEditor.md#getcanvasbackgroundalpha)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCanvasBackgroundAlpha](DThemeWhiteDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts#L18)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCanvasBackgroundColor](../interfaces/DThemeDiagramEditor.md#getcanvasbackgroundcolor)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCanvasBackgroundColor](DThemeWhiteDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts#L14)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../README.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../README.md#dbaseshadow)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCanvasShadow](../interfaces/DThemeDiagramEditor.md#getcanvasshadow)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCanvasShadow](DThemeWhiteDiagramBase.md#getcanvasshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-base.ts#L26)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getClearType](DThemeWhiteDiagramBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getColor](DThemeWhiteDiagramBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCornerMask](../interfaces/DThemeDiagramEditor.md#getcornermask)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCornerMask](DThemeWhiteDiagramBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L45)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getCornerRadius](../interfaces/DThemeDiagramEditor.md#getcornerradius)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCornerRadius](DThemeWhiteDiagramBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getCursor](DThemeWhiteDiagramBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontFamilly](../interfaces/DThemeDiagramEditor.md#getfontfamilly)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontFamilly](DThemeWhiteDiagramBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontSize](../interfaces/DThemeDiagramEditor.md#getfontsize)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontSize](DThemeWhiteDiagramBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../README.md#dfontstyle)

#### Returns

[`DFontStyle`](../README.md#dfontstyle)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontStyle](../interfaces/DThemeDiagramEditor.md#getfontstyle)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontStyle](DThemeWhiteDiagramBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../README.md#dfontvariant)

#### Returns

[`DFontVariant`](../README.md#dfontvariant)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontVariant](../interfaces/DThemeDiagramEditor.md#getfontvariant)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontVariant](DThemeWhiteDiagramBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../README.md#dfontweight)

#### Returns

[`DFontWeight`](../README.md#dfontweight)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getFontWeight](../interfaces/DThemeDiagramEditor.md#getfontweight)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getFontWeight](DThemeWhiteDiagramBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getHeight](../interfaces/DThemeDiagramEditor.md#getheight)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getHeight](DThemeWhiteDiagramBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L62)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getInteractive](../interfaces/DThemeDiagramEditor.md#getinteractive)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getInteractive](DThemeWhiteDiagramBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L41)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getLineHeight](../interfaces/DThemeDiagramEditor.md#getlineheight)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getLineHeight](DThemeWhiteDiagramBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineAlign](DThemeWhiteDiagramBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L149)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineAlpha](DThemeWhiteDiagramBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineColor](DThemeWhiteDiagramBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L130)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineMask](DThemeWhiteDiagramBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineOffset](DThemeWhiteDiagramBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L145)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getOutlineWidth](DThemeWhiteDiagramBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getPaddingBottom](../interfaces/DThemeDiagramEditor.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getPaddingBottom](DThemeWhiteDiagramBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L33)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getPaddingLeft](../interfaces/DThemeDiagramEditor.md#getpaddingleft)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getPaddingLeft](DThemeWhiteDiagramBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L21)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getPaddingRight](../interfaces/DThemeDiagramEditor.md#getpaddingright)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getPaddingRight](DThemeWhiteDiagramBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L29)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getPaddingTop](../interfaces/DThemeDiagramEditor.md#getpaddingtop)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getPaddingTop](DThemeWhiteDiagramBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L25)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getShadow](DThemeWhiteDiagramBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

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

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-editor.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-editor.ts#L21)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getTitle](../interfaces/DThemeDiagramEditor.md#gettitle)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getTitle](DThemeWhiteDiagramBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getWeight](DThemeWhiteDiagramBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getWidth](../interfaces/DThemeDiagramEditor.md#getwidth)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getWidth](DThemeWhiteDiagramBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L66)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getX](../interfaces/DThemeDiagramEditor.md#getx)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getX](DThemeWhiteDiagramBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[getY](../interfaces/DThemeDiagramEditor.md#gety)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[getY](DThemeWhiteDiagramBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[isAmbient](../interfaces/DThemeDiagramEditor.md#isambient)

#### Overrides

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[isAmbient](DThemeWhiteDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-editor.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-editor.ts#L13)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[isOverflowMaskEnabled](../interfaces/DThemeDiagramEditor.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[isOverflowMaskEnabled](DThemeWhiteDiagramBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-canvas-container.ts#L37)

___

### isThumbnailEnabled

▸ **isThumbnailEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[isThumbnailEnabled](../interfaces/DThemeDiagramEditor.md#isthumbnailenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-editor.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-diagram-editor.ts#L17)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[newShadow](../interfaces/DThemeDiagramEditor.md#newshadow)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[newShadow](DThemeWhiteDiagramBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramEditor](../interfaces/DThemeDiagramEditor.md).[newShadowWeak](../interfaces/DThemeDiagramEditor.md#newshadowweak)

#### Inherited from

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[newShadowWeak](DThemeWhiteDiagramBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemeWhiteDiagramBase](DThemeWhiteDiagramBase.md).[newState](DThemeWhiteDiagramBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L169)
