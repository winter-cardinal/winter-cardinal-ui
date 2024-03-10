[Winter Cardinal UI - v0.414.0](../index.md) / DThemeDiagramCanvasEditor

# Interface: DThemeDiagramCanvasEditor

[DBase](../classes/DBase.md) theme.

## Hierarchy

- [`DThemeDiagramCanvasBase`](DThemeDiagramCanvasBase.md)

- [`DThemeDiagramCanvasEditorSnap`](DThemeDiagramCanvasEditorSnap.md)

  ↳ **`DThemeDiagramCanvasEditor`**

## Implemented by

- [`DThemeDarkDiagramCanvasEditor`](../classes/DThemeDarkDiagramCanvasEditor.md)
- [`DThemeWhiteDiagramCanvasEditor`](../classes/DThemeWhiteDiagramCanvasEditor.md)

## Table of contents

### Methods

- [getAlpha](DThemeDiagramCanvasEditor.md#getalpha)
- [getBackgroundAlpha](DThemeDiagramCanvasEditor.md#getbackgroundalpha)
- [getBackgroundBase](DThemeDiagramCanvasEditor.md#getbackgroundbase)
- [getBackgroundColor](DThemeDiagramCanvasEditor.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDiagramCanvasEditor.md#getbackgroundtexture)
- [getBorderAlign](DThemeDiagramCanvasEditor.md#getborderalign)
- [getBorderAlpha](DThemeDiagramCanvasEditor.md#getborderalpha)
- [getBorderColor](DThemeDiagramCanvasEditor.md#getbordercolor)
- [getBorderMask](DThemeDiagramCanvasEditor.md#getbordermask)
- [getBorderTexture](DThemeDiagramCanvasEditor.md#getbordertexture)
- [getBorderWidth](DThemeDiagramCanvasEditor.md#getborderwidth)
- [getClearType](DThemeDiagramCanvasEditor.md#getcleartype)
- [getColor](DThemeDiagramCanvasEditor.md#getcolor)
- [getCornerMask](DThemeDiagramCanvasEditor.md#getcornermask)
- [getCornerRadius](DThemeDiagramCanvasEditor.md#getcornerradius)
- [getCursor](DThemeDiagramCanvasEditor.md#getcursor)
- [getFontFamilly](DThemeDiagramCanvasEditor.md#getfontfamilly)
- [getFontSize](DThemeDiagramCanvasEditor.md#getfontsize)
- [getFontStyle](DThemeDiagramCanvasEditor.md#getfontstyle)
- [getFontVariant](DThemeDiagramCanvasEditor.md#getfontvariant)
- [getFontWeight](DThemeDiagramCanvasEditor.md#getfontweight)
- [getHeight](DThemeDiagramCanvasEditor.md#getheight)
- [getInteractive](DThemeDiagramCanvasEditor.md#getinteractive)
- [getLineHeight](DThemeDiagramCanvasEditor.md#getlineheight)
- [getLocalBoundsLimit](DThemeDiagramCanvasEditor.md#getlocalboundslimit)
- [getOutlineAlign](DThemeDiagramCanvasEditor.md#getoutlinealign)
- [getOutlineAlpha](DThemeDiagramCanvasEditor.md#getoutlinealpha)
- [getOutlineColor](DThemeDiagramCanvasEditor.md#getoutlinecolor)
- [getOutlineMask](DThemeDiagramCanvasEditor.md#getoutlinemask)
- [getOutlineOffset](DThemeDiagramCanvasEditor.md#getoutlineoffset)
- [getOutlineWidth](DThemeDiagramCanvasEditor.md#getoutlinewidth)
- [getPaddingBottom](DThemeDiagramCanvasEditor.md#getpaddingbottom)
- [getPaddingLeft](DThemeDiagramCanvasEditor.md#getpaddingleft)
- [getPaddingRight](DThemeDiagramCanvasEditor.md#getpaddingright)
- [getPaddingTop](DThemeDiagramCanvasEditor.md#getpaddingtop)
- [getShadow](DThemeDiagramCanvasEditor.md#getshadow)
- [getSnapGridMajorAlpha](DThemeDiagramCanvasEditor.md#getsnapgridmajoralpha)
- [getSnapGridMajorColor](DThemeDiagramCanvasEditor.md#getsnapgridmajorcolor)
- [getSnapGridMajorInterval](DThemeDiagramCanvasEditor.md#getsnapgridmajorinterval)
- [getSnapGridMajorStyle](DThemeDiagramCanvasEditor.md#getsnapgridmajorstyle)
- [getSnapGridMajorWidth](DThemeDiagramCanvasEditor.md#getsnapgridmajorwidth)
- [getSnapGridMinorAlpha](DThemeDiagramCanvasEditor.md#getsnapgridminoralpha)
- [getSnapGridMinorColor](DThemeDiagramCanvasEditor.md#getsnapgridminorcolor)
- [getSnapGridMinorStyle](DThemeDiagramCanvasEditor.md#getsnapgridminorstyle)
- [getSnapGridMinorWidth](DThemeDiagramCanvasEditor.md#getsnapgridminorwidth)
- [getSnapGridSize](DThemeDiagramCanvasEditor.md#getsnapgridsize)
- [getSnapTargetAlpha](DThemeDiagramCanvasEditor.md#getsnaptargetalpha)
- [getSnapTargetColor](DThemeDiagramCanvasEditor.md#getsnaptargetcolor)
- [getSnapTargetStyle](DThemeDiagramCanvasEditor.md#getsnaptargetstyle)
- [getSnapTargetWidth](DThemeDiagramCanvasEditor.md#getsnaptargetwidth)
- [getTitle](DThemeDiagramCanvasEditor.md#gettitle)
- [getWeight](DThemeDiagramCanvasEditor.md#getweight)
- [getWidth](DThemeDiagramCanvasEditor.md#getwidth)
- [getX](DThemeDiagramCanvasEditor.md#getx)
- [getY](DThemeDiagramCanvasEditor.md#gety)
- [isAmbient](DThemeDiagramCanvasEditor.md#isambient)
- [newShadow](DThemeDiagramCanvasEditor.md#newshadow)
- [newShadowWeak](DThemeDiagramCanvasEditor.md#newshadowweak)
- [newState](DThemeDiagramCanvasEditor.md#newstate)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getAlpha](DThemeDiagramCanvasBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundAlpha](DThemeDiagramCanvasBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

___

### getBackgroundBase

▸ **getBackgroundBase**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundBase](DThemeDiagramCanvasBase.md#getbackgroundbase)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L33)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundColor](DThemeDiagramCanvasBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundTexture](DThemeDiagramCanvasBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L556)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderAlign](DThemeDiagramCanvasBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L585)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderAlpha](DThemeDiagramCanvasBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L571)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderColor](DThemeDiagramCanvasBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderMask](DThemeDiagramCanvasBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L592)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderTexture](DThemeDiagramCanvasBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:597](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L597)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderWidth](DThemeDiagramCanvasBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getClearType](DThemeDiagramCanvasBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L697)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getColor](DThemeDiagramCanvasBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCornerMask](DThemeDiagramCanvasBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L627)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCornerRadius](DThemeDiagramCanvasBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCursor](DThemeDiagramCanvasBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontFamilly](DThemeDiagramCanvasBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontSize](DThemeDiagramCanvasBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontStyle](DThemeDiagramCanvasBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontVariant](DThemeDiagramCanvasBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontWeight](DThemeDiagramCanvasBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getHeight](DThemeDiagramCanvasBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L531)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getInteractive](DThemeDiagramCanvasBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L681)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getLineHeight](DThemeDiagramCanvasBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getLocalBoundsLimit

▸ **getLocalBoundsLimit**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getLocalBoundsLimit](DThemeDiagramCanvasBase.md#getlocalboundslimit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L34)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineAlign](DThemeDiagramCanvasBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineAlpha](DThemeDiagramCanvasBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineColor](DThemeDiagramCanvasBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L635)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineMask](DThemeDiagramCanvasBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineOffset](DThemeDiagramCanvasBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineWidth](DThemeDiagramCanvasBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingBottom](DThemeDiagramCanvasBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L617)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingLeft](DThemeDiagramCanvasBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L602)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingRight](DThemeDiagramCanvasBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L607)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingTop](DThemeDiagramCanvasBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L612)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getShadow](DThemeDiagramCanvasBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L676)

___

### getSnapGridMajorAlpha

▸ **getSnapGridMajorAlpha**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMajorAlpha](DThemeDiagramCanvasEditorSnap.md#getsnapgridmajoralpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L60)

___

### getSnapGridMajorColor

▸ **getSnapGridMajorColor**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMajorColor](DThemeDiagramCanvasEditorSnap.md#getsnapgridmajorcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L59)

___

### getSnapGridMajorInterval

▸ **getSnapGridMajorInterval**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMajorInterval](DThemeDiagramCanvasEditorSnap.md#getsnapgridmajorinterval)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L58)

___

### getSnapGridMajorStyle

▸ **getSnapGridMajorStyle**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMajorStyle](DThemeDiagramCanvasEditorSnap.md#getsnapgridmajorstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L62)

___

### getSnapGridMajorWidth

▸ **getSnapGridMajorWidth**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMajorWidth](DThemeDiagramCanvasEditorSnap.md#getsnapgridmajorwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L61)

___

### getSnapGridMinorAlpha

▸ **getSnapGridMinorAlpha**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMinorAlpha](DThemeDiagramCanvasEditorSnap.md#getsnapgridminoralpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L65)

___

### getSnapGridMinorColor

▸ **getSnapGridMinorColor**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMinorColor](DThemeDiagramCanvasEditorSnap.md#getsnapgridminorcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L64)

___

### getSnapGridMinorStyle

▸ **getSnapGridMinorStyle**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMinorStyle](DThemeDiagramCanvasEditorSnap.md#getsnapgridminorstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L67)

___

### getSnapGridMinorWidth

▸ **getSnapGridMinorWidth**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridMinorWidth](DThemeDiagramCanvasEditorSnap.md#getsnapgridminorwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L66)

___

### getSnapGridSize

▸ **getSnapGridSize**(): [`DDiagramCanvasEditorSnapGridSize`](../index.md#ddiagramcanvaseditorsnapgridsize)

#### Returns

[`DDiagramCanvasEditorSnapGridSize`](../index.md#ddiagramcanvaseditorsnapgridsize)

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapGridSize](DThemeDiagramCanvasEditorSnap.md#getsnapgridsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L69)

___

### getSnapTargetAlpha

▸ **getSnapTargetAlpha**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapTargetAlpha](DThemeDiagramCanvasEditorSnap.md#getsnaptargetalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L72)

___

### getSnapTargetColor

▸ **getSnapTargetColor**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapTargetColor](DThemeDiagramCanvasEditorSnap.md#getsnaptargetcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L71)

___

### getSnapTargetStyle

▸ **getSnapTargetStyle**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapTargetStyle](DThemeDiagramCanvasEditorSnap.md#getsnaptargetstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L74)

___

### getSnapTargetWidth

▸ **getSnapTargetWidth**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasEditorSnap](DThemeDiagramCanvasEditorSnap.md).[getSnapTargetWidth](DThemeDiagramCanvasEditorSnap.md#getsnaptargetwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L73)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getTitle](DThemeDiagramCanvasBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L691)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getWeight](DThemeDiagramCanvasBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L704)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getWidth](DThemeDiagramCanvasBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L536)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getX](DThemeDiagramCanvasBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L521)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getY](DThemeDiagramCanvasBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L526)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[isAmbient](DThemeDiagramCanvasBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L32)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newShadow](DThemeDiagramCanvasBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L709)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newShadowWeak](DThemeDiagramCanvasBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:714](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L714)

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

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newState](DThemeDiagramCanvasBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L686)
