[Winter Cardinal UI - v0.442.0](../index.md) / DThemeDarkDiagramCanvasBase

# Class: DThemeDarkDiagramCanvasBase

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkCanvas`](DThemeDarkCanvas.md)

  ↳ **`DThemeDarkDiagramCanvasBase`**

  ↳↳ [`DThemeDarkDiagramCanvasEditor`](DThemeDarkDiagramCanvasEditor.md)

  ↳↳ [`DThemeDarkDiagramCanvas`](DThemeDarkDiagramCanvas.md)

## Implements

- [`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkDiagramCanvasBase.md#constructor)

### Methods

- [getAlpha](DThemeDarkDiagramCanvasBase.md#getalpha)
- [getBackgroundAlpha](DThemeDarkDiagramCanvasBase.md#getbackgroundalpha)
- [getBackgroundBase](DThemeDarkDiagramCanvasBase.md#getbackgroundbase)
- [getBackgroundColor](DThemeDarkDiagramCanvasBase.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkDiagramCanvasBase.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkDiagramCanvasBase.md#getborderalign)
- [getBorderAlpha](DThemeDarkDiagramCanvasBase.md#getborderalpha)
- [getBorderColor](DThemeDarkDiagramCanvasBase.md#getbordercolor)
- [getBorderMask](DThemeDarkDiagramCanvasBase.md#getbordermask)
- [getBorderTexture](DThemeDarkDiagramCanvasBase.md#getbordertexture)
- [getBorderWidth](DThemeDarkDiagramCanvasBase.md#getborderwidth)
- [getClearType](DThemeDarkDiagramCanvasBase.md#getcleartype)
- [getColor](DThemeDarkDiagramCanvasBase.md#getcolor)
- [getCornerMask](DThemeDarkDiagramCanvasBase.md#getcornermask)
- [getCornerRadius](DThemeDarkDiagramCanvasBase.md#getcornerradius)
- [getCursor](DThemeDarkDiagramCanvasBase.md#getcursor)
- [getFontFamilly](DThemeDarkDiagramCanvasBase.md#getfontfamilly)
- [getFontSize](DThemeDarkDiagramCanvasBase.md#getfontsize)
- [getFontStyle](DThemeDarkDiagramCanvasBase.md#getfontstyle)
- [getFontVariant](DThemeDarkDiagramCanvasBase.md#getfontvariant)
- [getFontWeight](DThemeDarkDiagramCanvasBase.md#getfontweight)
- [getHeight](DThemeDarkDiagramCanvasBase.md#getheight)
- [getInteractive](DThemeDarkDiagramCanvasBase.md#getinteractive)
- [getLineHeight](DThemeDarkDiagramCanvasBase.md#getlineheight)
- [getLocalBoundsLimit](DThemeDarkDiagramCanvasBase.md#getlocalboundslimit)
- [getOutlineAlign](DThemeDarkDiagramCanvasBase.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkDiagramCanvasBase.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkDiagramCanvasBase.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkDiagramCanvasBase.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkDiagramCanvasBase.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkDiagramCanvasBase.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkDiagramCanvasBase.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkDiagramCanvasBase.md#getpaddingleft)
- [getPaddingRight](DThemeDarkDiagramCanvasBase.md#getpaddingright)
- [getPaddingTop](DThemeDarkDiagramCanvasBase.md#getpaddingtop)
- [getShadow](DThemeDarkDiagramCanvasBase.md#getshadow)
- [getTitle](DThemeDarkDiagramCanvasBase.md#gettitle)
- [getWeight](DThemeDarkDiagramCanvasBase.md#getweight)
- [getWidth](DThemeDarkDiagramCanvasBase.md#getwidth)
- [getX](DThemeDarkDiagramCanvasBase.md#getx)
- [getY](DThemeDarkDiagramCanvasBase.md#gety)
- [isAmbient](DThemeDarkDiagramCanvasBase.md#isambient)
- [newShadow](DThemeDarkDiagramCanvasBase.md#newshadow)
- [newShadowWeak](DThemeDarkDiagramCanvasBase.md#newshadowweak)
- [newState](DThemeDarkDiagramCanvasBase.md#newstate)

## Constructors

### constructor

• **new DThemeDarkDiagramCanvasBase**(): [`DThemeDarkDiagramCanvasBase`](DThemeDarkDiagramCanvasBase.md)

#### Returns

[`DThemeDarkDiagramCanvasBase`](DThemeDarkDiagramCanvasBase.md)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[constructor](DThemeDarkCanvas.md#constructor)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getAlpha](../interfaces/DThemeDiagramCanvasBase.md#getalpha)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getAlpha](DThemeDarkCanvas.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBackgroundAlpha](../interfaces/DThemeDiagramCanvasBase.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBackgroundAlpha](DThemeDarkCanvas.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L84)

___

### getBackgroundBase

▸ **getBackgroundBase**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBackgroundBase](../interfaces/DThemeDiagramCanvasBase.md#getbackgroundbase)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-canvas-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-canvas-base.ts#L18)

___

### getBackgroundColor

▸ **getBackgroundColor**(): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBackgroundColor](../interfaces/DThemeDiagramCanvasBase.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBackgroundColor](DThemeDarkCanvas.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBackgroundTexture](../interfaces/DThemeDiagramCanvasBase.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBackgroundTexture](DThemeDarkCanvas.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L88)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBorderAlign](../interfaces/DThemeDiagramCanvasBase.md#getborderalign)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBorderAlign](DThemeDarkCanvas.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L104)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBorderAlpha](../interfaces/DThemeDiagramCanvasBase.md#getborderalpha)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBorderAlpha](DThemeDarkCanvas.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L96)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBorderColor](../interfaces/DThemeDiagramCanvasBase.md#getbordercolor)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBorderColor](DThemeDarkCanvas.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas.ts#L17)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBorderMask](../interfaces/DThemeDiagramCanvasBase.md#getbordermask)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBorderMask](DThemeDarkCanvas.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBorderTexture](../interfaces/DThemeDiagramCanvasBase.md#getbordertexture)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBorderTexture](DThemeDarkCanvas.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L112)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getBorderWidth](../interfaces/DThemeDiagramCanvasBase.md#getborderwidth)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getBorderWidth](DThemeDarkCanvas.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getClearType](../interfaces/DThemeDiagramCanvasBase.md#getcleartype)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getClearType](DThemeDarkCanvas.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L167)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getColor](../interfaces/DThemeDiagramCanvasBase.md#getcolor)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getColor](DThemeDarkCanvas.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getCornerMask](../interfaces/DThemeDiagramCanvasBase.md#getcornermask)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getCornerMask](DThemeDarkCanvas.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas.ts#L21)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getCornerRadius](../interfaces/DThemeDiagramCanvasBase.md#getcornerradius)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getCornerRadius](DThemeDarkCanvas.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L132)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getCursor](../interfaces/DThemeDiagramCanvasBase.md#getcursor)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getCursor](DThemeDarkCanvas.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getFontFamilly](../interfaces/DThemeDiagramCanvasBase.md#getfontfamilly)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getFontFamilly](DThemeDarkCanvas.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getFontSize](../interfaces/DThemeDiagramCanvasBase.md#getfontsize)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getFontSize](DThemeDarkCanvas.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getFontStyle](../interfaces/DThemeDiagramCanvasBase.md#getfontstyle)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getFontStyle](DThemeDarkCanvas.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getFontVariant](../interfaces/DThemeDiagramCanvasBase.md#getfontvariant)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getFontVariant](DThemeDarkCanvas.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getFontWeight](../interfaces/DThemeDiagramCanvasBase.md#getfontweight)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getFontWeight](DThemeDarkCanvas.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getHeight](../interfaces/DThemeDiagramCanvasBase.md#getheight)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getHeight](DThemeDarkCanvas.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getInteractive](../interfaces/DThemeDiagramCanvasBase.md#getinteractive)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getInteractive](DThemeDarkCanvas.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-canvas.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getLineHeight](../interfaces/DThemeDiagramCanvasBase.md#getlineheight)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getLineHeight](DThemeDarkCanvas.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getLocalBoundsLimit

▸ **getLocalBoundsLimit**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getLocalBoundsLimit](../interfaces/DThemeDiagramCanvasBase.md#getlocalboundslimit)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-canvas-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-canvas-base.ts#L22)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getOutlineAlign](../interfaces/DThemeDiagramCanvasBase.md#getoutlinealign)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getOutlineAlign](DThemeDarkCanvas.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L159)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getOutlineAlpha](../interfaces/DThemeDiagramCanvasBase.md#getoutlinealpha)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getOutlineAlpha](DThemeDarkCanvas.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L144)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getOutlineColor](../interfaces/DThemeDiagramCanvasBase.md#getoutlinecolor)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getOutlineColor](DThemeDarkCanvas.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L140)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getOutlineMask](../interfaces/DThemeDiagramCanvasBase.md#getoutlinemask)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getOutlineMask](DThemeDarkCanvas.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L163)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getOutlineOffset](../interfaces/DThemeDiagramCanvasBase.md#getoutlineoffset)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getOutlineOffset](DThemeDarkCanvas.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L155)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getOutlineWidth](../interfaces/DThemeDiagramCanvasBase.md#getoutlinewidth)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getOutlineWidth](DThemeDarkCanvas.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getPaddingBottom](../interfaces/DThemeDiagramCanvasBase.md#getpaddingbottom)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getPaddingBottom](DThemeDarkCanvas.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getPaddingLeft](../interfaces/DThemeDiagramCanvasBase.md#getpaddingleft)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getPaddingLeft](DThemeDarkCanvas.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getPaddingRight](../interfaces/DThemeDiagramCanvasBase.md#getpaddingright)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getPaddingRight](DThemeDarkCanvas.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getPaddingTop](../interfaces/DThemeDiagramCanvasBase.md#getpaddingtop)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getPaddingTop](DThemeDarkCanvas.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L124)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getShadow](../interfaces/DThemeDiagramCanvasBase.md#getshadow)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getShadow](DThemeDarkCanvas.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getTitle](../interfaces/DThemeDiagramCanvasBase.md#gettitle)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getTitle](DThemeDarkCanvas.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getWeight](../interfaces/DThemeDiagramCanvasBase.md#getweight)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getWeight](DThemeDarkCanvas.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getWidth](../interfaces/DThemeDiagramCanvasBase.md#getwidth)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getWidth](DThemeDarkCanvas.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getX](../interfaces/DThemeDiagramCanvasBase.md#getx)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getX](DThemeDarkCanvas.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[getY](../interfaces/DThemeDiagramCanvasBase.md#gety)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[getY](DThemeDarkCanvas.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[isAmbient](../interfaces/DThemeDiagramCanvasBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-canvas-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-diagram-canvas-base.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[newShadow](../interfaces/DThemeDiagramCanvasBase.md#newshadow)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[newShadow](DThemeDarkCanvas.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[newShadowWeak](../interfaces/DThemeDiagramCanvasBase.md#newshadowweak)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[newShadowWeak](DThemeDarkCanvas.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L195)

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

[DThemeDiagramCanvasBase](../interfaces/DThemeDiagramCanvasBase.md).[newState](../interfaces/DThemeDiagramCanvasBase.md#newstate)

#### Inherited from

[DThemeDarkCanvas](DThemeDarkCanvas.md).[newState](DThemeDarkCanvas.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L179)
