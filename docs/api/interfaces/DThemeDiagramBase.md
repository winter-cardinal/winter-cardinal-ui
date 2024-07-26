[Winter Cardinal UI - v0.442.0](../index.md) / DThemeDiagramBase

# Interface: DThemeDiagramBase

[DDiagramBase](../classes/DDiagramBase.md) theme.

## Hierarchy

- [`DThemeCanvasContainer`](DThemeCanvasContainer.md)

  ↳ **`DThemeDiagramBase`**

  ↳↳ [`DThemeDiagramEditor`](DThemeDiagramEditor.md)

  ↳↳ [`DThemeDiagram`](DThemeDiagram.md)

## Implemented by

- [`DThemeDarkDiagramBase`](../classes/DThemeDarkDiagramBase.md)
- [`DThemeWhiteDiagramBase`](../classes/DThemeWhiteDiagramBase.md)

## Table of contents

### Methods

- [getAlpha](DThemeDiagramBase.md#getalpha)
- [getBackgroundAlpha](DThemeDiagramBase.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDiagramBase.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDiagramBase.md#getbackgroundtexture)
- [getBorderAlign](DThemeDiagramBase.md#getborderalign)
- [getBorderAlpha](DThemeDiagramBase.md#getborderalpha)
- [getBorderColor](DThemeDiagramBase.md#getbordercolor)
- [getBorderMask](DThemeDiagramBase.md#getbordermask)
- [getBorderTexture](DThemeDiagramBase.md#getbordertexture)
- [getBorderWidth](DThemeDiagramBase.md#getborderwidth)
- [getCanvasBackgroundAlpha](DThemeDiagramBase.md#getcanvasbackgroundalpha)
- [getCanvasBackgroundColor](DThemeDiagramBase.md#getcanvasbackgroundcolor)
- [getCanvasShadow](DThemeDiagramBase.md#getcanvasshadow)
- [getClearType](DThemeDiagramBase.md#getcleartype)
- [getColor](DThemeDiagramBase.md#getcolor)
- [getCornerMask](DThemeDiagramBase.md#getcornermask)
- [getCornerRadius](DThemeDiagramBase.md#getcornerradius)
- [getCursor](DThemeDiagramBase.md#getcursor)
- [getFontFamilly](DThemeDiagramBase.md#getfontfamilly)
- [getFontSize](DThemeDiagramBase.md#getfontsize)
- [getFontStyle](DThemeDiagramBase.md#getfontstyle)
- [getFontVariant](DThemeDiagramBase.md#getfontvariant)
- [getFontWeight](DThemeDiagramBase.md#getfontweight)
- [getHeight](DThemeDiagramBase.md#getheight)
- [getInteractive](DThemeDiagramBase.md#getinteractive)
- [getLineHeight](DThemeDiagramBase.md#getlineheight)
- [getOutlineAlign](DThemeDiagramBase.md#getoutlinealign)
- [getOutlineAlpha](DThemeDiagramBase.md#getoutlinealpha)
- [getOutlineColor](DThemeDiagramBase.md#getoutlinecolor)
- [getOutlineMask](DThemeDiagramBase.md#getoutlinemask)
- [getOutlineOffset](DThemeDiagramBase.md#getoutlineoffset)
- [getOutlineWidth](DThemeDiagramBase.md#getoutlinewidth)
- [getPaddingBottom](DThemeDiagramBase.md#getpaddingbottom)
- [getPaddingLeft](DThemeDiagramBase.md#getpaddingleft)
- [getPaddingRight](DThemeDiagramBase.md#getpaddingright)
- [getPaddingTop](DThemeDiagramBase.md#getpaddingtop)
- [getShadow](DThemeDiagramBase.md#getshadow)
- [getTitle](DThemeDiagramBase.md#gettitle)
- [getWeight](DThemeDiagramBase.md#getweight)
- [getWidth](DThemeDiagramBase.md#getwidth)
- [getX](DThemeDiagramBase.md#getx)
- [getY](DThemeDiagramBase.md#gety)
- [isAmbient](DThemeDiagramBase.md#isambient)
- [isOverflowMaskEnabled](DThemeDiagramBase.md#isoverflowmaskenabled)
- [newShadow](DThemeDiagramBase.md#newshadow)
- [newShadowWeak](DThemeDiagramBase.md#newshadowweak)
- [newState](DThemeDiagramBase.md#newstate)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getAlpha](DThemeCanvasContainer.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBackgroundAlpha](DThemeCanvasContainer.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBackgroundColor](DThemeCanvasContainer.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBackgroundTexture](DThemeCanvasContainer.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBorderAlign](DThemeCanvasContainer.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L585)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBorderAlpha](DThemeCanvasContainer.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L571)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBorderColor](DThemeCanvasContainer.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBorderMask](DThemeCanvasContainer.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBorderTexture](DThemeCanvasContainer.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:597](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L597)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getBorderWidth](DThemeCanvasContainer.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L84)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L83)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L85)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getClearType](DThemeCanvasContainer.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getColor](DThemeCanvasContainer.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getCornerMask](DThemeCanvasContainer.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getCornerRadius](DThemeCanvasContainer.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getCursor](DThemeCanvasContainer.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getFontFamilly](DThemeCanvasContainer.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getFontSize](DThemeCanvasContainer.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getFontStyle](DThemeCanvasContainer.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getFontVariant](DThemeCanvasContainer.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getFontWeight](DThemeCanvasContainer.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getHeight](DThemeCanvasContainer.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getInteractive](DThemeCanvasContainer.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getLineHeight](DThemeCanvasContainer.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getOutlineAlign](DThemeCanvasContainer.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getOutlineAlpha](DThemeCanvasContainer.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getOutlineColor](DThemeCanvasContainer.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L635)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getOutlineMask](DThemeCanvasContainer.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getOutlineOffset](DThemeCanvasContainer.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getOutlineWidth](DThemeCanvasContainer.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getPaddingBottom](DThemeCanvasContainer.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getPaddingLeft](DThemeCanvasContainer.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getPaddingRight](DThemeCanvasContainer.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getPaddingTop](DThemeCanvasContainer.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getShadow](DThemeCanvasContainer.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getTitle](DThemeCanvasContainer.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L691)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getWeight](DThemeCanvasContainer.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getWidth](DThemeCanvasContainer.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getX](DThemeCanvasContainer.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[getY](DThemeCanvasContainer.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L86)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[isOverflowMaskEnabled](DThemeCanvasContainer.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L63)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[newShadow](DThemeCanvasContainer.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeCanvasContainer](DThemeCanvasContainer.md).[newShadowWeak](DThemeCanvasContainer.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:714](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L714)

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

[DThemeCanvasContainer](DThemeCanvasContainer.md).[newState](DThemeCanvasContainer.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L686)
