[Winter Cardinal UI](../README.md) / DThemeDarkMenuItemExpandable

# Class: DThemeDarkMenuItemExpandable

## Hierarchy

- [`DThemeDarkLayoutVertical`](DThemeDarkLayoutVertical.md)

  ↳ **`DThemeDarkMenuItemExpandable`**

  ↳↳ [`DThemeDarkMenuSidedItemExpandable`](DThemeDarkMenuSidedItemExpandable.md)

## Implements

- [`DThemeMenuItemExpandable`](../interfaces/DThemeMenuItemExpandable.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkMenuItemExpandable.md#constructor)

### Methods

- [getAlpha](DThemeDarkMenuItemExpandable.md#getalpha)
- [getBackgroundAlpha](DThemeDarkMenuItemExpandable.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkMenuItemExpandable.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkMenuItemExpandable.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkMenuItemExpandable.md#getborderalign)
- [getBorderAlpha](DThemeDarkMenuItemExpandable.md#getborderalpha)
- [getBorderColor](DThemeDarkMenuItemExpandable.md#getbordercolor)
- [getBorderMask](DThemeDarkMenuItemExpandable.md#getbordermask)
- [getBorderTexture](DThemeDarkMenuItemExpandable.md#getbordertexture)
- [getBorderWidth](DThemeDarkMenuItemExpandable.md#getborderwidth)
- [getClearType](DThemeDarkMenuItemExpandable.md#getcleartype)
- [getColor](DThemeDarkMenuItemExpandable.md#getcolor)
- [getCornerAdjust](DThemeDarkMenuItemExpandable.md#getcorneradjust)
- [getCornerMask](DThemeDarkMenuItemExpandable.md#getcornermask)
- [getCornerRadius](DThemeDarkMenuItemExpandable.md#getcornerradius)
- [getCursor](DThemeDarkMenuItemExpandable.md#getcursor)
- [getDirection](DThemeDarkMenuItemExpandable.md#getdirection)
- [getFontFamilly](DThemeDarkMenuItemExpandable.md#getfontfamilly)
- [getFontSize](DThemeDarkMenuItemExpandable.md#getfontsize)
- [getFontStyle](DThemeDarkMenuItemExpandable.md#getfontstyle)
- [getFontVariant](DThemeDarkMenuItemExpandable.md#getfontvariant)
- [getFontWeight](DThemeDarkMenuItemExpandable.md#getfontweight)
- [getHeight](DThemeDarkMenuItemExpandable.md#getheight)
- [getInteractive](DThemeDarkMenuItemExpandable.md#getinteractive)
- [getLineHeight](DThemeDarkMenuItemExpandable.md#getlineheight)
- [getMargin](DThemeDarkMenuItemExpandable.md#getmargin)
- [getMultiplicity](DThemeDarkMenuItemExpandable.md#getmultiplicity)
- [getOutlineAlign](DThemeDarkMenuItemExpandable.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkMenuItemExpandable.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkMenuItemExpandable.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkMenuItemExpandable.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkMenuItemExpandable.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkMenuItemExpandable.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkMenuItemExpandable.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkMenuItemExpandable.md#getpaddingleft)
- [getPaddingRight](DThemeDarkMenuItemExpandable.md#getpaddingright)
- [getPaddingTop](DThemeDarkMenuItemExpandable.md#getpaddingtop)
- [getReverse](DThemeDarkMenuItemExpandable.md#getreverse)
- [getShadow](DThemeDarkMenuItemExpandable.md#getshadow)
- [getTitle](DThemeDarkMenuItemExpandable.md#gettitle)
- [getWeight](DThemeDarkMenuItemExpandable.md#getweight)
- [getWidth](DThemeDarkMenuItemExpandable.md#getwidth)
- [getX](DThemeDarkMenuItemExpandable.md#getx)
- [getY](DThemeDarkMenuItemExpandable.md#gety)
- [newShadow](DThemeDarkMenuItemExpandable.md#newshadow)
- [newShadowWeak](DThemeDarkMenuItemExpandable.md#newshadowweak)
- [newState](DThemeDarkMenuItemExpandable.md#newstate)

## Constructors

### constructor

• **new DThemeDarkMenuItemExpandable**()

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getAlpha](../interfaces/DThemeMenuItemExpandable.md#getalpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getAlpha](DThemeDarkLayoutVertical.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBackgroundAlpha](../interfaces/DThemeMenuItemExpandable.md#getbackgroundalpha)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundAlpha](DThemeDarkLayoutVertical.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts#L23)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBackgroundColor](../interfaces/DThemeMenuItemExpandable.md#getbackgroundcolor)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundColor](DThemeDarkLayoutVertical.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts#L16)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBackgroundTexture](../interfaces/DThemeMenuItemExpandable.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBackgroundTexture](DThemeDarkLayoutVertical.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBorderAlign](../interfaces/DThemeMenuItemExpandable.md#getborderalign)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderAlign](DThemeDarkLayoutVertical.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBorderAlpha](../interfaces/DThemeMenuItemExpandable.md#getborderalpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderAlpha](DThemeDarkLayoutVertical.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBorderColor](../interfaces/DThemeMenuItemExpandable.md#getbordercolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderColor](DThemeDarkLayoutVertical.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L17)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBorderMask](../interfaces/DThemeMenuItemExpandable.md#getbordermask)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderMask](DThemeDarkLayoutVertical.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBorderTexture](../interfaces/DThemeMenuItemExpandable.md#getbordertexture)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderTexture](DThemeDarkLayoutVertical.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getBorderWidth](../interfaces/DThemeMenuItemExpandable.md#getborderwidth)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getBorderWidth](DThemeDarkLayoutVertical.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getClearType](../interfaces/DThemeMenuItemExpandable.md#getcleartype)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getClearType](DThemeDarkLayoutVertical.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getColor](../interfaces/DThemeMenuItemExpandable.md#getcolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getColor](DThemeDarkLayoutVertical.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getCornerAdjust](../interfaces/DThemeMenuItemExpandable.md#getcorneradjust)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerAdjust](DThemeDarkLayoutVertical.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L38)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getCornerMask](../interfaces/DThemeMenuItemExpandable.md#getcornermask)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerMask](DThemeDarkLayoutVertical.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts#L42)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getCornerRadius](../interfaces/DThemeMenuItemExpandable.md#getcornerradius)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCornerRadius](DThemeDarkLayoutVertical.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getCursor](../interfaces/DThemeMenuItemExpandable.md#getcursor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getCursor](DThemeDarkLayoutVertical.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../README.md#dlayoutdirection)

#### Returns

[`DLayoutDirection`](../README.md#dlayoutdirection)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getDirection](../interfaces/DThemeMenuItemExpandable.md#getdirection)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getDirection](DThemeDarkLayoutVertical.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-vertical.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-vertical.ts#L12)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getFontFamilly](../interfaces/DThemeMenuItemExpandable.md#getfontfamilly)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontFamilly](DThemeDarkLayoutVertical.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getFontSize](../interfaces/DThemeMenuItemExpandable.md#getfontsize)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontSize](DThemeDarkLayoutVertical.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../README.md#dfontstyle)

#### Returns

[`DFontStyle`](../README.md#dfontstyle)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getFontStyle](../interfaces/DThemeMenuItemExpandable.md#getfontstyle)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontStyle](DThemeDarkLayoutVertical.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../README.md#dfontvariant)

#### Returns

[`DFontVariant`](../README.md#dfontvariant)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getFontVariant](../interfaces/DThemeMenuItemExpandable.md#getfontvariant)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontVariant](DThemeDarkLayoutVertical.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../README.md#dfontweight)

#### Returns

[`DFontWeight`](../README.md#dfontweight)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getFontWeight](../interfaces/DThemeMenuItemExpandable.md#getfontweight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getFontWeight](DThemeDarkLayoutVertical.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getHeight](../interfaces/DThemeMenuItemExpandable.md#getheight)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getHeight](DThemeDarkLayoutVertical.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts#L38)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getInteractive](../interfaces/DThemeMenuItemExpandable.md#getinteractive)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getInteractive](DThemeDarkLayoutVertical.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L25)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getLineHeight](../interfaces/DThemeMenuItemExpandable.md#getlineheight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getLineHeight](DThemeDarkLayoutVertical.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getMargin](../interfaces/DThemeMenuItemExpandable.md#getmargin)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getMargin](DThemeDarkLayoutVertical.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts#L30)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getMultiplicity](../interfaces/DThemeMenuItemExpandable.md#getmultiplicity)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getMultiplicity](DThemeDarkLayoutVertical.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L42)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getOutlineAlign](../interfaces/DThemeMenuItemExpandable.md#getoutlinealign)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineAlign](DThemeDarkLayoutVertical.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getOutlineAlpha](../interfaces/DThemeMenuItemExpandable.md#getoutlinealpha)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineAlpha](DThemeDarkLayoutVertical.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getOutlineColor](../interfaces/DThemeMenuItemExpandable.md#getoutlinecolor)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineColor](DThemeDarkLayoutVertical.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getOutlineMask](../interfaces/DThemeMenuItemExpandable.md#getoutlinemask)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineMask](DThemeDarkLayoutVertical.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getOutlineOffset](../interfaces/DThemeMenuItemExpandable.md#getoutlineoffset)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineOffset](DThemeDarkLayoutVertical.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getOutlineWidth](../interfaces/DThemeMenuItemExpandable.md#getoutlinewidth)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getOutlineWidth](DThemeDarkLayoutVertical.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getPaddingBottom](../interfaces/DThemeMenuItemExpandable.md#getpaddingbottom)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingBottom](DThemeDarkLayoutVertical.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getPaddingLeft](../interfaces/DThemeMenuItemExpandable.md#getpaddingleft)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingLeft](DThemeDarkLayoutVertical.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getPaddingRight](../interfaces/DThemeMenuItemExpandable.md#getpaddingright)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingRight](DThemeDarkLayoutVertical.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getPaddingTop](../interfaces/DThemeMenuItemExpandable.md#getpaddingtop)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getPaddingTop](DThemeDarkLayoutVertical.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getReverse](../interfaces/DThemeMenuItemExpandable.md#getreverse)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getReverse](DThemeDarkLayoutVertical.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getShadow](../interfaces/DThemeMenuItemExpandable.md#getshadow)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getShadow](DThemeDarkLayoutVertical.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getTitle](../interfaces/DThemeMenuItemExpandable.md#gettitle)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getTitle](DThemeDarkLayoutVertical.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getWeight](../interfaces/DThemeMenuItemExpandable.md#getweight)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getWeight](DThemeDarkLayoutVertical.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getWidth](../interfaces/DThemeMenuItemExpandable.md#getwidth)

#### Overrides

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getWidth](DThemeDarkLayoutVertical.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-menu-item-expandable.ts#L34)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getX](../interfaces/DThemeMenuItemExpandable.md#getx)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getX](DThemeDarkLayoutVertical.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[getY](../interfaces/DThemeMenuItemExpandable.md#gety)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[getY](DThemeDarkLayoutVertical.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[newShadow](../interfaces/DThemeMenuItemExpandable.md#newshadow)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newShadow](DThemeDarkLayoutVertical.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[newShadowWeak](../interfaces/DThemeMenuItemExpandable.md#newshadowweak)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newShadowWeak](DThemeDarkLayoutVertical.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeMenuItemExpandable](../interfaces/DThemeMenuItemExpandable.md).[newState](../interfaces/DThemeMenuItemExpandable.md#newstate)

#### Inherited from

[DThemeDarkLayoutVertical](DThemeDarkLayoutVertical.md).[newState](DThemeDarkLayoutVertical.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout.ts#L29)
