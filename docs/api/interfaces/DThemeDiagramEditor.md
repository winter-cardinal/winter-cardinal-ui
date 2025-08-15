[Winter Cardinal UI - v0.457.0](../index.md) / DThemeDiagramEditor

# Interface: DThemeDiagramEditor

[DDiagramEditor](../classes/DDiagramEditor.md) theme.

## Hierarchy

- [`DThemeDiagramBase`](DThemeDiagramBase.md)

- [`DThemeDiagramEditorThumbnail`](DThemeDiagramEditorThumbnail.md)

- [`EThemeSnapper`](EThemeSnapper.md)

  ↳ **`DThemeDiagramEditor`**

## Implemented by

- [`DThemeDarkDiagramEditor`](../classes/DThemeDarkDiagramEditor.md)
- [`DThemeWhiteDiagramEditor`](../classes/DThemeWhiteDiagramEditor.md)

## Table of contents

### Methods

- [getAlpha](DThemeDiagramEditor.md#getalpha)
- [getBackgroundAlpha](DThemeDiagramEditor.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDiagramEditor.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDiagramEditor.md#getbackgroundtexture)
- [getBaseLayerLabel](DThemeDiagramEditor.md#getbaselayerlabel)
- [getBorderAlign](DThemeDiagramEditor.md#getborderalign)
- [getBorderAlpha](DThemeDiagramEditor.md#getborderalpha)
- [getBorderColor](DThemeDiagramEditor.md#getbordercolor)
- [getBorderMask](DThemeDiagramEditor.md#getbordermask)
- [getBorderTexture](DThemeDiagramEditor.md#getbordertexture)
- [getBorderWidth](DThemeDiagramEditor.md#getborderwidth)
- [getCanvasBackgroundAlpha](DThemeDiagramEditor.md#getcanvasbackgroundalpha)
- [getCanvasBackgroundColor](DThemeDiagramEditor.md#getcanvasbackgroundcolor)
- [getCanvasShadow](DThemeDiagramEditor.md#getcanvasshadow)
- [getClearType](DThemeDiagramEditor.md#getcleartype)
- [getColor](DThemeDiagramEditor.md#getcolor)
- [getCornerMask](DThemeDiagramEditor.md#getcornermask)
- [getCornerRadius](DThemeDiagramEditor.md#getcornerradius)
- [getCursor](DThemeDiagramEditor.md#getcursor)
- [getFontFamilly](DThemeDiagramEditor.md#getfontfamilly)
- [getFontSize](DThemeDiagramEditor.md#getfontsize)
- [getFontStyle](DThemeDiagramEditor.md#getfontstyle)
- [getFontVariant](DThemeDiagramEditor.md#getfontvariant)
- [getFontWeight](DThemeDiagramEditor.md#getfontweight)
- [getHeight](DThemeDiagramEditor.md#getheight)
- [getInteractive](DThemeDiagramEditor.md#getinteractive)
- [getLineHeight](DThemeDiagramEditor.md#getlineheight)
- [getOutlineAlign](DThemeDiagramEditor.md#getoutlinealign)
- [getOutlineAlpha](DThemeDiagramEditor.md#getoutlinealpha)
- [getOutlineColor](DThemeDiagramEditor.md#getoutlinecolor)
- [getOutlineMask](DThemeDiagramEditor.md#getoutlinemask)
- [getOutlineOffset](DThemeDiagramEditor.md#getoutlineoffset)
- [getOutlineWidth](DThemeDiagramEditor.md#getoutlinewidth)
- [getPaddingBottom](DThemeDiagramEditor.md#getpaddingbottom)
- [getPaddingLeft](DThemeDiagramEditor.md#getpaddingleft)
- [getPaddingRight](DThemeDiagramEditor.md#getpaddingright)
- [getPaddingTop](DThemeDiagramEditor.md#getpaddingtop)
- [getShadow](DThemeDiagramEditor.md#getshadow)
- [getSnapGridSize](DThemeDiagramEditor.md#getsnapgridsize)
- [getThumbnailSize](DThemeDiagramEditor.md#getthumbnailsize)
- [getTitle](DThemeDiagramEditor.md#gettitle)
- [getWeight](DThemeDiagramEditor.md#getweight)
- [getWidth](DThemeDiagramEditor.md#getwidth)
- [getX](DThemeDiagramEditor.md#getx)
- [getY](DThemeDiagramEditor.md#gety)
- [isAmbient](DThemeDiagramEditor.md#isambient)
- [isOverflowMaskEnabled](DThemeDiagramEditor.md#isoverflowmaskenabled)
- [isSnapEnabled](DThemeDiagramEditor.md#issnapenabled)
- [isSnapGridEnabled](DThemeDiagramEditor.md#issnapgridenabled)
- [isSnapGridVisible](DThemeDiagramEditor.md#issnapgridvisible)
- [isSnapTargetEnabled](DThemeDiagramEditor.md#issnaptargetenabled)
- [isSnapTargetVisible](DThemeDiagramEditor.md#issnaptargetvisible)
- [isThumbnailEnabled](DThemeDiagramEditor.md#isthumbnailenabled)
- [newShadow](DThemeDiagramEditor.md#newshadow)
- [newShadowWeak](DThemeDiagramEditor.md#newshadowweak)
- [newState](DThemeDiagramEditor.md#newstate)

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

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

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

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getBackgroundTexture](DThemeDiagramBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

___

### getBaseLayerLabel

▸ **getBaseLayerLabel**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L152)

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

[src/main/typescript/wcardinal/ui/d-base.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L585)

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

[src/main/typescript/wcardinal/ui/d-base.ts:571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L571)

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

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

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

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getBorderTexture](DThemeDiagramBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:597](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L597)

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

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getCanvasBackgroundAlpha

▸ **getCanvasBackgroundAlpha**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasBackgroundAlpha](DThemeDiagramBase.md#getcanvasbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L84)

___

### getCanvasBackgroundColor

▸ **getCanvasBackgroundColor**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasBackgroundColor](DThemeDiagramBase.md#getcanvasbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L83)

___

### getCanvasShadow

▸ **getCanvasShadow**(): ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Returns

``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCanvasShadow](DThemeDiagramBase.md#getcanvasshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L85)

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

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

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

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCornerMask](DThemeDiagramBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getCornerRadius](DThemeDiagramBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontFamilly](DThemeDiagramBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontSize](DThemeDiagramBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontStyle](DThemeDiagramBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontVariant](DThemeDiagramBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getFontWeight](DThemeDiagramBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getHeight](DThemeDiagramBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getInteractive](DThemeDiagramBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getLineHeight](DThemeDiagramBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

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

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

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

[src/main/typescript/wcardinal/ui/d-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L635)

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

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

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

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

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

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingBottom](DThemeDiagramBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingLeft](DThemeDiagramBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingRight](DThemeDiagramBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getPaddingTop](DThemeDiagramBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

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

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getSnapGridSize

▸ **getSnapGridSize**(): `number`

#### Returns

`number`

#### Inherited from

[EThemeSnapper](EThemeSnapper.md).[getSnapGridSize](EThemeSnapper.md#getsnapgridsize)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L18)

___

### getThumbnailSize

▸ **getThumbnailSize**(): ``null`` \| `number`

Returns a thumbnail maximum size.
If the size is null, a thumbnail size will be of a canvas size.

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDiagramEditorThumbnail](DThemeDiagramEditorThumbnail.md).[getThumbnailSize](DThemeDiagramEditorThumbnail.md#getthumbnailsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L27)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getTitle](DThemeDiagramBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L691)

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

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getWidth](DThemeDiagramBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getX](DThemeDiagramBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[getY](DThemeDiagramBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[isAmbient](DThemeDiagramBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L86)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[isOverflowMaskEnabled](DThemeDiagramBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L63)

___

### isSnapEnabled

▸ **isSnapEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EThemeSnapper](EThemeSnapper.md).[isSnapEnabled](EThemeSnapper.md#issnapenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L57)

___

### isSnapGridEnabled

▸ **isSnapGridEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EThemeSnapper](EThemeSnapper.md).[isSnapGridEnabled](EThemeSnapper.md#issnapgridenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L17)

___

### isSnapGridVisible

▸ **isSnapGridVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EThemeSnapper](EThemeSnapper.md).[isSnapGridVisible](EThemeSnapper.md#issnapgridvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L16)

___

### isSnapTargetEnabled

▸ **isSnapTargetEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EThemeSnapper](EThemeSnapper.md).[isSnapTargetEnabled](EThemeSnapper.md#issnaptargetenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L21)

___

### isSnapTargetVisible

▸ **isSnapTargetVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EThemeSnapper](EThemeSnapper.md).[isSnapTargetVisible](EThemeSnapper.md#issnaptargetvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L20)

___

### isThumbnailEnabled

▸ **isThumbnailEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramEditorThumbnail](DThemeDiagramEditorThumbnail.md).[isThumbnailEnabled](DThemeDiagramEditorThumbnail.md#isthumbnailenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L21)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[newShadow](DThemeDiagramBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramBase](DThemeDiagramBase.md).[newShadowWeak](DThemeDiagramBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:714](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L714)

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

[src/main/typescript/wcardinal/ui/d-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L686)
