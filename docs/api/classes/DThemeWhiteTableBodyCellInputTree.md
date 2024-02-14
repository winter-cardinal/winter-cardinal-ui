[Winter Cardinal UI - v0.407.0](../index.md) / DThemeWhiteTableBodyCellInputTree

# Class: DThemeWhiteTableBodyCellInputTree

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeWhiteBase`](DThemeWhiteBase.md)

  ↳ **`DThemeWhiteTableBodyCellInputTree`**

## Implements

- [`DThemeTableBodyCellInputTree`](../interfaces/DThemeTableBodyCellInputTree.md)

## Table of contents

### Constructors

- [constructor](DThemeWhiteTableBodyCellInputTree.md#constructor)

### Methods

- [getAlpha](DThemeWhiteTableBodyCellInputTree.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteTableBodyCellInputTree.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteTableBodyCellInputTree.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteTableBodyCellInputTree.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteTableBodyCellInputTree.md#getborderalign)
- [getBorderAlpha](DThemeWhiteTableBodyCellInputTree.md#getborderalpha)
- [getBorderColor](DThemeWhiteTableBodyCellInputTree.md#getbordercolor)
- [getBorderMask](DThemeWhiteTableBodyCellInputTree.md#getbordermask)
- [getBorderTexture](DThemeWhiteTableBodyCellInputTree.md#getbordertexture)
- [getBorderWidth](DThemeWhiteTableBodyCellInputTree.md#getborderwidth)
- [getClearType](DThemeWhiteTableBodyCellInputTree.md#getcleartype)
- [getColor](DThemeWhiteTableBodyCellInputTree.md#getcolor)
- [getCornerMask](DThemeWhiteTableBodyCellInputTree.md#getcornermask)
- [getCornerRadius](DThemeWhiteTableBodyCellInputTree.md#getcornerradius)
- [getCursor](DThemeWhiteTableBodyCellInputTree.md#getcursor)
- [getFontFamilly](DThemeWhiteTableBodyCellInputTree.md#getfontfamilly)
- [getFontSize](DThemeWhiteTableBodyCellInputTree.md#getfontsize)
- [getFontStyle](DThemeWhiteTableBodyCellInputTree.md#getfontstyle)
- [getFontVariant](DThemeWhiteTableBodyCellInputTree.md#getfontvariant)
- [getFontWeight](DThemeWhiteTableBodyCellInputTree.md#getfontweight)
- [getHeight](DThemeWhiteTableBodyCellInputTree.md#getheight)
- [getInteractive](DThemeWhiteTableBodyCellInputTree.md#getinteractive)
- [getLevelPadding](DThemeWhiteTableBodyCellInputTree.md#getlevelpadding)
- [getLineHeight](DThemeWhiteTableBodyCellInputTree.md#getlineheight)
- [getOutlineAlign](DThemeWhiteTableBodyCellInputTree.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteTableBodyCellInputTree.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteTableBodyCellInputTree.md#getoutlinecolor)
- [getOutlineMask](DThemeWhiteTableBodyCellInputTree.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteTableBodyCellInputTree.md#getoutlineoffset)
- [getOutlineWidth](DThemeWhiteTableBodyCellInputTree.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteTableBodyCellInputTree.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteTableBodyCellInputTree.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteTableBodyCellInputTree.md#getpaddingright)
- [getPaddingTop](DThemeWhiteTableBodyCellInputTree.md#getpaddingtop)
- [getShadow](DThemeWhiteTableBodyCellInputTree.md#getshadow)
- [getTitle](DThemeWhiteTableBodyCellInputTree.md#gettitle)
- [getWeight](DThemeWhiteTableBodyCellInputTree.md#getweight)
- [getWidth](DThemeWhiteTableBodyCellInputTree.md#getwidth)
- [getX](DThemeWhiteTableBodyCellInputTree.md#getx)
- [getY](DThemeWhiteTableBodyCellInputTree.md#gety)
- [newShadow](DThemeWhiteTableBodyCellInputTree.md#newshadow)
- [newShadowWeak](DThemeWhiteTableBodyCellInputTree.md#newshadowweak)
- [newState](DThemeWhiteTableBodyCellInputTree.md#newstate)

## Constructors

### constructor

• **new DThemeWhiteTableBodyCellInputTree**(): [`DThemeWhiteTableBodyCellInputTree`](DThemeWhiteTableBodyCellInputTree.md)

#### Returns

[`DThemeWhiteTableBodyCellInputTree`](DThemeWhiteTableBodyCellInputTree.md)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[constructor](DThemeWhiteBase.md#constructor)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getAlpha](../interfaces/DThemeTableBodyCellInputTree.md#getalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getAlpha](DThemeWhiteBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBackgroundAlpha](../interfaces/DThemeTableBodyCellInputTree.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundAlpha](DThemeWhiteBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L84)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBackgroundColor](../interfaces/DThemeTableBodyCellInputTree.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundColor](DThemeWhiteBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts#L24)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBackgroundTexture](../interfaces/DThemeTableBodyCellInputTree.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBackgroundTexture](DThemeWhiteBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L88)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBorderAlign](../interfaces/DThemeTableBodyCellInputTree.md#getborderalign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlign](DThemeWhiteBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L104)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBorderAlpha](../interfaces/DThemeTableBodyCellInputTree.md#getborderalpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderAlpha](DThemeWhiteBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L96)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBorderColor](../interfaces/DThemeTableBodyCellInputTree.md#getbordercolor)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderColor](DThemeWhiteBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts#L28)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBorderMask](../interfaces/DThemeTableBodyCellInputTree.md#getbordermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderMask](DThemeWhiteBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBorderTexture](../interfaces/DThemeTableBodyCellInputTree.md#getbordertexture)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderTexture](DThemeWhiteBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L112)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getBorderWidth](../interfaces/DThemeTableBodyCellInputTree.md#getborderwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getBorderWidth](DThemeWhiteBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getClearType](../interfaces/DThemeTableBodyCellInputTree.md#getcleartype)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getClearType](DThemeWhiteBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L167)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getColor](../interfaces/DThemeTableBodyCellInputTree.md#getcolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getColor](DThemeWhiteBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getCornerMask](../interfaces/DThemeTableBodyCellInputTree.md#getcornermask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerMask](DThemeWhiteBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getCornerRadius](../interfaces/DThemeTableBodyCellInputTree.md#getcornerradius)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCornerRadius](DThemeWhiteBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L132)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getCursor](../interfaces/DThemeTableBodyCellInputTree.md#getcursor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getCursor](DThemeWhiteBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getFontFamilly](../interfaces/DThemeTableBodyCellInputTree.md#getfontfamilly)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontFamilly](DThemeWhiteBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getFontSize](../interfaces/DThemeTableBodyCellInputTree.md#getfontsize)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontSize](DThemeWhiteBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getFontStyle](../interfaces/DThemeTableBodyCellInputTree.md#getfontstyle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontStyle](DThemeWhiteBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getFontVariant](../interfaces/DThemeTableBodyCellInputTree.md#getfontvariant)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontVariant](DThemeWhiteBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getFontWeight](../interfaces/DThemeTableBodyCellInputTree.md#getfontweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getFontWeight](DThemeWhiteBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getHeight](../interfaces/DThemeTableBodyCellInputTree.md#getheight)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getHeight](DThemeWhiteBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts#L20)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getInteractive](../interfaces/DThemeTableBodyCellInputTree.md#getinteractive)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[getInteractive](DThemeWhiteBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts#L36)

___

### getLevelPadding

▸ **getLevelPadding**(`level`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getLevelPadding](../interfaces/DThemeTableBodyCellInputTree.md#getlevelpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts#L32)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getLineHeight](../interfaces/DThemeTableBodyCellInputTree.md#getlineheight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getLineHeight](DThemeWhiteBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getOutlineAlign](../interfaces/DThemeTableBodyCellInputTree.md#getoutlinealign)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlign](DThemeWhiteBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L159)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getOutlineAlpha](../interfaces/DThemeTableBodyCellInputTree.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineAlpha](DThemeWhiteBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L144)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getOutlineColor](../interfaces/DThemeTableBodyCellInputTree.md#getoutlinecolor)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineColor](DThemeWhiteBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L140)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getOutlineMask](../interfaces/DThemeTableBodyCellInputTree.md#getoutlinemask)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineMask](DThemeWhiteBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L163)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getOutlineOffset](../interfaces/DThemeTableBodyCellInputTree.md#getoutlineoffset)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineOffset](DThemeWhiteBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L155)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getOutlineWidth](../interfaces/DThemeTableBodyCellInputTree.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getOutlineWidth](DThemeWhiteBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getPaddingBottom](../interfaces/DThemeTableBodyCellInputTree.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingBottom](DThemeWhiteBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getPaddingLeft](../interfaces/DThemeTableBodyCellInputTree.md#getpaddingleft)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingLeft](DThemeWhiteBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getPaddingRight](../interfaces/DThemeTableBodyCellInputTree.md#getpaddingright)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingRight](DThemeWhiteBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getPaddingTop](../interfaces/DThemeTableBodyCellInputTree.md#getpaddingtop)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getPaddingTop](DThemeWhiteBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L124)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getShadow](../interfaces/DThemeTableBodyCellInputTree.md#getshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getShadow](DThemeWhiteBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getTitle](../interfaces/DThemeTableBodyCellInputTree.md#gettitle)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getTitle](DThemeWhiteBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getWeight](../interfaces/DThemeTableBodyCellInputTree.md#getweight)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWeight](DThemeWhiteBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L187)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getWidth](../interfaces/DThemeTableBodyCellInputTree.md#getwidth)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getWidth](DThemeWhiteBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getX](../interfaces/DThemeTableBodyCellInputTree.md#getx)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getX](DThemeWhiteBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[getY](../interfaces/DThemeTableBodyCellInputTree.md#gety)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[getY](DThemeWhiteBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L68)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[newShadow](../interfaces/DThemeTableBodyCellInputTree.md#newshadow)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadow](DThemeWhiteBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[newShadowWeak](../interfaces/DThemeTableBodyCellInputTree.md#newshadowweak)

#### Inherited from

[DThemeWhiteBase](DThemeWhiteBase.md).[newShadowWeak](DThemeWhiteBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L195)

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

[DThemeTableBodyCellInputTree](../interfaces/DThemeTableBodyCellInputTree.md).[newState](../interfaces/DThemeTableBodyCellInputTree.md#newstate)

#### Overrides

[DThemeWhiteBase](DThemeWhiteBase.md).[newState](DThemeWhiteBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-table-body-cell-input-tree.ts#L40)
