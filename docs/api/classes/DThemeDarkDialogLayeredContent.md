[Winter Cardinal UI - v0.199.0](../index.md) / DThemeDarkDialogLayeredContent

# Class: DThemeDarkDialogLayeredContent

## Hierarchy

- [`DThemeDarkLayoutVertical`](DThemeDarkLayoutVertical.md)

  ↳ **`DThemeDarkDialogLayeredContent`**

  ↳↳ [`DThemeDarkDialogFittedContent`](DThemeDarkDialogFittedContent.md)

## Implements

- [`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkDialogLayeredContent.md#constructor)

### Methods

- [getAlpha](DThemeDarkDialogLayeredContent.md#getalpha)
- [getBackgroundAlpha](DThemeDarkDialogLayeredContent.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkDialogLayeredContent.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkDialogLayeredContent.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkDialogLayeredContent.md#getborderalign)
- [getBorderAlpha](DThemeDarkDialogLayeredContent.md#getborderalpha)
- [getBorderColor](DThemeDarkDialogLayeredContent.md#getbordercolor)
- [getBorderMask](DThemeDarkDialogLayeredContent.md#getbordermask)
- [getBorderTexture](DThemeDarkDialogLayeredContent.md#getbordertexture)
- [getBorderWidth](DThemeDarkDialogLayeredContent.md#getborderwidth)
- [getClearType](DThemeDarkDialogLayeredContent.md#getcleartype)
- [getColor](DThemeDarkDialogLayeredContent.md#getcolor)
- [getCornerAdjust](DThemeDarkDialogLayeredContent.md#getcorneradjust)
- [getCornerMask](DThemeDarkDialogLayeredContent.md#getcornermask)
- [getCornerRadius](DThemeDarkDialogLayeredContent.md#getcornerradius)
- [getCursor](DThemeDarkDialogLayeredContent.md#getcursor)
- [getDirection](DThemeDarkDialogLayeredContent.md#getdirection)
- [getFontFamilly](DThemeDarkDialogLayeredContent.md#getfontfamilly)
- [getFontSize](DThemeDarkDialogLayeredContent.md#getfontsize)
- [getFontStyle](DThemeDarkDialogLayeredContent.md#getfontstyle)
- [getFontVariant](DThemeDarkDialogLayeredContent.md#getfontvariant)
- [getFontWeight](DThemeDarkDialogLayeredContent.md#getfontweight)
- [getHeight](DThemeDarkDialogLayeredContent.md#getheight)
- [getInteractive](DThemeDarkDialogLayeredContent.md#getinteractive)
- [getLineHeight](DThemeDarkDialogLayeredContent.md#getlineheight)
- [getMargin](DThemeDarkDialogLayeredContent.md#getmargin)
- [getMultiplicity](DThemeDarkDialogLayeredContent.md#getmultiplicity)
- [getOutlineAlign](DThemeDarkDialogLayeredContent.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkDialogLayeredContent.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkDialogLayeredContent.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkDialogLayeredContent.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkDialogLayeredContent.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkDialogLayeredContent.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkDialogLayeredContent.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkDialogLayeredContent.md#getpaddingleft)
- [getPaddingRight](DThemeDarkDialogLayeredContent.md#getpaddingright)
- [getPaddingTop](DThemeDarkDialogLayeredContent.md#getpaddingtop)
- [getReverse](DThemeDarkDialogLayeredContent.md#getreverse)
- [getShadow](DThemeDarkDialogLayeredContent.md#getshadow)
- [getTitle](DThemeDarkDialogLayeredContent.md#gettitle)
- [getWeight](DThemeDarkDialogLayeredContent.md#getweight)
- [getWidth](DThemeDarkDialogLayeredContent.md#getwidth)
- [getX](DThemeDarkDialogLayeredContent.md#getx)
- [getY](DThemeDarkDialogLayeredContent.md#gety)
- [newShadow](DThemeDarkDialogLayeredContent.md#newshadow)
- [newShadowWeak](DThemeDarkDialogLayeredContent.md#newshadowweak)
- [newState](DThemeDarkDialogLayeredContent.md#newstate)

## Constructors

### constructor

• **new DThemeDarkDialogLayeredContent**()

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getAlpha](../interfaces/DThemeDialogLayeredContent.md#getalpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getAlpha](DThemeDarkLayoutVertical.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBackgroundAlpha](../interfaces/DThemeDialogLayeredContent.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundAlpha](DThemeDarkLayoutVertical.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBackgroundColor](../interfaces/DThemeDialogLayeredContent.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundColor](DThemeDarkLayoutVertical.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L13)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBackgroundTexture](../interfaces/DThemeDialogLayeredContent.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundTexture](DThemeDarkLayoutVertical.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBorderAlign](../interfaces/DThemeDialogLayeredContent.md#getborderalign)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderAlign](DThemeDarkLayoutVertical.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBorderAlpha](../interfaces/DThemeDialogLayeredContent.md#getborderalpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderAlpha](DThemeDarkLayoutVertical.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBorderColor](../interfaces/DThemeDialogLayeredContent.md#getbordercolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderColor](DThemeDarkLayoutVertical.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L17)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBorderMask](../interfaces/DThemeDialogLayeredContent.md#getbordermask)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderMask](DThemeDarkLayoutVertical.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBorderTexture](../interfaces/DThemeDialogLayeredContent.md#getbordertexture)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderTexture](DThemeDarkLayoutVertical.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getBorderWidth](../interfaces/DThemeDialogLayeredContent.md#getborderwidth)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderWidth](DThemeDarkLayoutVertical.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getClearType](../interfaces/DThemeDialogLayeredContent.md#getcleartype)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getClearType](DThemeDarkLayoutVertical.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getColor](../interfaces/DThemeDialogLayeredContent.md#getcolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getColor](DThemeDarkLayoutVertical.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getCornerAdjust](../interfaces/DThemeDialogLayeredContent.md#getcorneradjust)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerAdjust](DThemeDarkLayoutVertical.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getCornerMask](../interfaces/DThemeDialogLayeredContent.md#getcornermask)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerMask](DThemeDarkLayoutVertical.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getCornerRadius](../interfaces/DThemeDialogLayeredContent.md#getcornerradius)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerRadius](DThemeDarkLayoutVertical.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getCursor](../interfaces/DThemeDialogLayeredContent.md#getcursor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCursor](DThemeDarkLayoutVertical.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getDirection](../interfaces/DThemeDialogLayeredContent.md#getdirection)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getDirection](DThemeDarkLayoutVertical.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-vertical.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-vertical.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getFontFamilly](../interfaces/DThemeDialogLayeredContent.md#getfontfamilly)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontFamilly](DThemeDarkLayoutVertical.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getFontSize](../interfaces/DThemeDialogLayeredContent.md#getfontsize)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontSize](DThemeDarkLayoutVertical.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getFontStyle](../interfaces/DThemeDialogLayeredContent.md#getfontstyle)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontStyle](DThemeDarkLayoutVertical.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getFontVariant](../interfaces/DThemeDialogLayeredContent.md#getfontvariant)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontVariant](DThemeDarkLayoutVertical.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getFontWeight](../interfaces/DThemeDialogLayeredContent.md#getfontweight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontWeight](DThemeDarkLayoutVertical.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getHeight](../interfaces/DThemeDialogLayeredContent.md#getheight)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getHeight](DThemeDarkLayoutVertical.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts#L26)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getInteractive](../interfaces/DThemeDialogLayeredContent.md#getinteractive)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getInteractive](DThemeDarkLayoutVertical.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getLineHeight](../interfaces/DThemeDialogLayeredContent.md#getlineheight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getLineHeight](DThemeDarkLayoutVertical.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getMargin](../interfaces/DThemeDialogLayeredContent.md#getmargin)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getMargin](DThemeDarkLayoutVertical.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L21)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getMultiplicity](../interfaces/DThemeDialogLayeredContent.md#getmultiplicity)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getMultiplicity](DThemeDarkLayoutVertical.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L42)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getOutlineAlign](../interfaces/DThemeDialogLayeredContent.md#getoutlinealign)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineAlign](DThemeDarkLayoutVertical.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getOutlineAlpha](../interfaces/DThemeDialogLayeredContent.md#getoutlinealpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineAlpha](DThemeDarkLayoutVertical.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getOutlineColor](../interfaces/DThemeDialogLayeredContent.md#getoutlinecolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineColor](DThemeDarkLayoutVertical.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getOutlineMask](../interfaces/DThemeDialogLayeredContent.md#getoutlinemask)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineMask](DThemeDarkLayoutVertical.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getOutlineOffset](../interfaces/DThemeDialogLayeredContent.md#getoutlineoffset)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineOffset](DThemeDarkLayoutVertical.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getOutlineWidth](../interfaces/DThemeDialogLayeredContent.md#getoutlinewidth)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineWidth](DThemeDarkLayoutVertical.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getPaddingBottom](../interfaces/DThemeDialogLayeredContent.md#getpaddingbottom)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingBottom](DThemeDarkLayoutVertical.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts#L38)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getPaddingLeft](../interfaces/DThemeDialogLayeredContent.md#getpaddingleft)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingLeft](DThemeDarkLayoutVertical.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts#L42)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getPaddingRight](../interfaces/DThemeDialogLayeredContent.md#getpaddingright)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingRight](DThemeDarkLayoutVertical.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts#L34)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getPaddingTop](../interfaces/DThemeDialogLayeredContent.md#getpaddingtop)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingTop](DThemeDarkLayoutVertical.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts#L30)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getReverse](../interfaces/DThemeDialogLayeredContent.md#getreverse)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getReverse](DThemeDarkLayoutVertical.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getShadow](../interfaces/DThemeDialogLayeredContent.md#getshadow)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getShadow](DThemeDarkLayoutVertical.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getTitle](../interfaces/DThemeDialogLayeredContent.md#gettitle)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getTitle](DThemeDarkLayoutVertical.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getWeight](../interfaces/DThemeDialogLayeredContent.md#getweight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getWeight](DThemeDarkLayoutVertical.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getWidth](../interfaces/DThemeDialogLayeredContent.md#getwidth)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getWidth](DThemeDarkLayoutVertical.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts#L22)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getX](../interfaces/DThemeDialogLayeredContent.md#getx)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getX](DThemeDarkLayoutVertical.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts#L14)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[getY](../interfaces/DThemeDialogLayeredContent.md#gety)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getY](DThemeDarkLayoutVertical.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-dialog-layered-content.ts#L18)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[newShadow](../interfaces/DThemeDialogLayeredContent.md#newshadow)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newShadow](DThemeDarkLayoutVertical.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[newShadowWeak](../interfaces/DThemeDialogLayeredContent.md#newshadowweak)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newShadowWeak](DThemeDarkLayoutVertical.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeDialogLayeredContent](../interfaces/DThemeDialogLayeredContent.md).[newState](../interfaces/DThemeDialogLayeredContent.md#newstate)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newState](DThemeDarkLayoutVertical.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L29)
