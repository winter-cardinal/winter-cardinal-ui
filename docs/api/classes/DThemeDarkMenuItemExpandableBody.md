[Winter Cardinal UI - v0.155.0](../index.md) / DThemeDarkMenuItemExpandableBody

# Class: DThemeDarkMenuItemExpandableBody

## Hierarchy

- [`DThemeDarkLayoutVertical`](DThemeDarkLayoutVertical.md)

  ↳ **`DThemeDarkMenuItemExpandableBody`**

## Implements

- [`DThemeMenuItemExpandableBody`](../interfaces/DThemeMenuItemExpandableBody.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkMenuItemExpandableBody.md#constructor)

### Methods

- [getAlpha](DThemeDarkMenuItemExpandableBody.md#getalpha)
- [getBackgroundAlpha](DThemeDarkMenuItemExpandableBody.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkMenuItemExpandableBody.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkMenuItemExpandableBody.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkMenuItemExpandableBody.md#getborderalign)
- [getBorderAlpha](DThemeDarkMenuItemExpandableBody.md#getborderalpha)
- [getBorderColor](DThemeDarkMenuItemExpandableBody.md#getbordercolor)
- [getBorderMask](DThemeDarkMenuItemExpandableBody.md#getbordermask)
- [getBorderTexture](DThemeDarkMenuItemExpandableBody.md#getbordertexture)
- [getBorderWidth](DThemeDarkMenuItemExpandableBody.md#getborderwidth)
- [getClearType](DThemeDarkMenuItemExpandableBody.md#getcleartype)
- [getColor](DThemeDarkMenuItemExpandableBody.md#getcolor)
- [getCornerAdjust](DThemeDarkMenuItemExpandableBody.md#getcorneradjust)
- [getCornerMask](DThemeDarkMenuItemExpandableBody.md#getcornermask)
- [getCornerRadius](DThemeDarkMenuItemExpandableBody.md#getcornerradius)
- [getCursor](DThemeDarkMenuItemExpandableBody.md#getcursor)
- [getDirection](DThemeDarkMenuItemExpandableBody.md#getdirection)
- [getFontFamilly](DThemeDarkMenuItemExpandableBody.md#getfontfamilly)
- [getFontSize](DThemeDarkMenuItemExpandableBody.md#getfontsize)
- [getFontStyle](DThemeDarkMenuItemExpandableBody.md#getfontstyle)
- [getFontVariant](DThemeDarkMenuItemExpandableBody.md#getfontvariant)
- [getFontWeight](DThemeDarkMenuItemExpandableBody.md#getfontweight)
- [getHeight](DThemeDarkMenuItemExpandableBody.md#getheight)
- [getInteractive](DThemeDarkMenuItemExpandableBody.md#getinteractive)
- [getLineHeight](DThemeDarkMenuItemExpandableBody.md#getlineheight)
- [getMargin](DThemeDarkMenuItemExpandableBody.md#getmargin)
- [getMultiplicity](DThemeDarkMenuItemExpandableBody.md#getmultiplicity)
- [getOutlineAlign](DThemeDarkMenuItemExpandableBody.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkMenuItemExpandableBody.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkMenuItemExpandableBody.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkMenuItemExpandableBody.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkMenuItemExpandableBody.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkMenuItemExpandableBody.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkMenuItemExpandableBody.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkMenuItemExpandableBody.md#getpaddingleft)
- [getPaddingRight](DThemeDarkMenuItemExpandableBody.md#getpaddingright)
- [getPaddingTop](DThemeDarkMenuItemExpandableBody.md#getpaddingtop)
- [getReverse](DThemeDarkMenuItemExpandableBody.md#getreverse)
- [getShadow](DThemeDarkMenuItemExpandableBody.md#getshadow)
- [getTitle](DThemeDarkMenuItemExpandableBody.md#gettitle)
- [getWeight](DThemeDarkMenuItemExpandableBody.md#getweight)
- [getWidth](DThemeDarkMenuItemExpandableBody.md#getwidth)
- [getX](DThemeDarkMenuItemExpandableBody.md#getx)
- [getY](DThemeDarkMenuItemExpandableBody.md#gety)
- [newShadow](DThemeDarkMenuItemExpandableBody.md#newshadow)
- [newShadowWeak](DThemeDarkMenuItemExpandableBody.md#newshadowweak)
- [newState](DThemeDarkMenuItemExpandableBody.md#newstate)

## Constructors

### constructor

• **new DThemeDarkMenuItemExpandableBody**()

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[constructor](DThemeDarkLayoutVertical.md#constructor)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getAlpha](../interfaces/DThemeMenuItemExpandableBody.md#getalpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getAlpha](DThemeDarkLayoutVertical.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBackgroundAlpha](../interfaces/DThemeMenuItemExpandableBody.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundAlpha](DThemeDarkLayoutVertical.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBackgroundColor](../interfaces/DThemeMenuItemExpandableBody.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundColor](DThemeDarkLayoutVertical.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBackgroundTexture](../interfaces/DThemeMenuItemExpandableBody.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundTexture](DThemeDarkLayoutVertical.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBorderAlign](../interfaces/DThemeMenuItemExpandableBody.md#getborderalign)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderAlign](DThemeDarkLayoutVertical.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBorderAlpha](../interfaces/DThemeMenuItemExpandableBody.md#getborderalpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderAlpha](DThemeDarkLayoutVertical.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBorderColor](../interfaces/DThemeMenuItemExpandableBody.md#getbordercolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderColor](DThemeDarkLayoutVertical.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L17)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBorderMask](../interfaces/DThemeMenuItemExpandableBody.md#getbordermask)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderMask](DThemeDarkLayoutVertical.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBorderTexture](../interfaces/DThemeMenuItemExpandableBody.md#getbordertexture)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderTexture](DThemeDarkLayoutVertical.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getBorderWidth](../interfaces/DThemeMenuItemExpandableBody.md#getborderwidth)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderWidth](DThemeDarkLayoutVertical.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getClearType](../interfaces/DThemeMenuItemExpandableBody.md#getcleartype)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getClearType](DThemeDarkLayoutVertical.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getColor](../interfaces/DThemeMenuItemExpandableBody.md#getcolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getColor](DThemeDarkLayoutVertical.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getCornerAdjust](../interfaces/DThemeMenuItemExpandableBody.md#getcorneradjust)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerAdjust](DThemeDarkLayoutVertical.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getCornerMask](../interfaces/DThemeMenuItemExpandableBody.md#getcornermask)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerMask](DThemeDarkLayoutVertical.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable-body.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable-body.ts#L23)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getCornerRadius](../interfaces/DThemeMenuItemExpandableBody.md#getcornerradius)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerRadius](DThemeDarkLayoutVertical.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getCursor](../interfaces/DThemeMenuItemExpandableBody.md#getcursor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCursor](DThemeDarkLayoutVertical.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getDirection](../interfaces/DThemeMenuItemExpandableBody.md#getdirection)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getDirection](DThemeDarkLayoutVertical.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-vertical.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-vertical.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getFontFamilly](../interfaces/DThemeMenuItemExpandableBody.md#getfontfamilly)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontFamilly](DThemeDarkLayoutVertical.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getFontSize](../interfaces/DThemeMenuItemExpandableBody.md#getfontsize)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontSize](DThemeDarkLayoutVertical.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getFontStyle](../interfaces/DThemeMenuItemExpandableBody.md#getfontstyle)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontStyle](DThemeDarkLayoutVertical.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getFontVariant](../interfaces/DThemeMenuItemExpandableBody.md#getfontvariant)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontVariant](DThemeDarkLayoutVertical.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getFontWeight](../interfaces/DThemeMenuItemExpandableBody.md#getfontweight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontWeight](DThemeDarkLayoutVertical.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getHeight](../interfaces/DThemeMenuItemExpandableBody.md#getheight)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getHeight](DThemeDarkLayoutVertical.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable-body.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable-body.ts#L19)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getInteractive](../interfaces/DThemeMenuItemExpandableBody.md#getinteractive)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getInteractive](DThemeDarkLayoutVertical.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getLineHeight](../interfaces/DThemeMenuItemExpandableBody.md#getlineheight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getLineHeight](DThemeDarkLayoutVertical.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getMargin](../interfaces/DThemeMenuItemExpandableBody.md#getmargin)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getMargin](DThemeDarkLayoutVertical.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L21)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getMultiplicity](../interfaces/DThemeMenuItemExpandableBody.md#getmultiplicity)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getMultiplicity](DThemeDarkLayoutVertical.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L42)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getOutlineAlign](../interfaces/DThemeMenuItemExpandableBody.md#getoutlinealign)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineAlign](DThemeDarkLayoutVertical.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getOutlineAlpha](../interfaces/DThemeMenuItemExpandableBody.md#getoutlinealpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineAlpha](DThemeDarkLayoutVertical.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getOutlineColor](../interfaces/DThemeMenuItemExpandableBody.md#getoutlinecolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineColor](DThemeDarkLayoutVertical.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getOutlineMask](../interfaces/DThemeMenuItemExpandableBody.md#getoutlinemask)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineMask](DThemeDarkLayoutVertical.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getOutlineOffset](../interfaces/DThemeMenuItemExpandableBody.md#getoutlineoffset)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineOffset](DThemeDarkLayoutVertical.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getOutlineWidth](../interfaces/DThemeMenuItemExpandableBody.md#getoutlinewidth)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineWidth](DThemeDarkLayoutVertical.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getPaddingBottom](../interfaces/DThemeMenuItemExpandableBody.md#getpaddingbottom)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingBottom](DThemeDarkLayoutVertical.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getPaddingLeft](../interfaces/DThemeMenuItemExpandableBody.md#getpaddingleft)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingLeft](DThemeDarkLayoutVertical.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getPaddingRight](../interfaces/DThemeMenuItemExpandableBody.md#getpaddingright)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingRight](DThemeDarkLayoutVertical.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getPaddingTop](../interfaces/DThemeMenuItemExpandableBody.md#getpaddingtop)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingTop](DThemeDarkLayoutVertical.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getReverse](../interfaces/DThemeMenuItemExpandableBody.md#getreverse)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getReverse](DThemeDarkLayoutVertical.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getShadow](../interfaces/DThemeMenuItemExpandableBody.md#getshadow)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getShadow](DThemeDarkLayoutVertical.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getTitle](../interfaces/DThemeMenuItemExpandableBody.md#gettitle)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getTitle](DThemeDarkLayoutVertical.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getWeight](../interfaces/DThemeMenuItemExpandableBody.md#getweight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getWeight](DThemeDarkLayoutVertical.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getWidth](../interfaces/DThemeMenuItemExpandableBody.md#getwidth)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getWidth](DThemeDarkLayoutVertical.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable-body.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable-body.ts#L15)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getX](../interfaces/DThemeMenuItemExpandableBody.md#getx)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getX](DThemeDarkLayoutVertical.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[getY](../interfaces/DThemeMenuItemExpandableBody.md#gety)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getY](DThemeDarkLayoutVertical.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[newShadow](../interfaces/DThemeMenuItemExpandableBody.md#newshadow)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newShadow](DThemeDarkLayoutVertical.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[newShadowWeak](../interfaces/DThemeMenuItemExpandableBody.md#newshadowweak)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newShadowWeak](DThemeDarkLayoutVertical.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeMenuItemExpandableBody](../interfaces/DThemeMenuItemExpandableBody.md).[newState](../interfaces/DThemeMenuItemExpandableBody.md#newstate)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newState](DThemeDarkLayoutVertical.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L29)
