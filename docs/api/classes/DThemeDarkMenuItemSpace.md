[Winter Cardinal UI - v0.154.0](../index.md) / DThemeDarkMenuItemSpace

# Class: DThemeDarkMenuItemSpace

## Hierarchy

- [`DThemeDarkLayoutSpace`](DThemeDarkLayoutSpace.md)

  ↳ **`DThemeDarkMenuItemSpace`**

  ↳↳ [`DThemeDarkMenuItemExpandableItemSpace`](DThemeDarkMenuItemExpandableItemSpace.md)

  ↳↳ [`DThemeDarkMenuSidedItemSpace`](DThemeDarkMenuSidedItemSpace.md)

## Implements

- [`DThemeMenuItemSpace`](../interfaces/DThemeMenuItemSpace.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkMenuItemSpace.md#constructor)

### Methods

- [getAlpha](DThemeDarkMenuItemSpace.md#getalpha)
- [getBackgroundAlpha](DThemeDarkMenuItemSpace.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkMenuItemSpace.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkMenuItemSpace.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkMenuItemSpace.md#getborderalign)
- [getBorderAlpha](DThemeDarkMenuItemSpace.md#getborderalpha)
- [getBorderColor](DThemeDarkMenuItemSpace.md#getbordercolor)
- [getBorderMask](DThemeDarkMenuItemSpace.md#getbordermask)
- [getBorderTexture](DThemeDarkMenuItemSpace.md#getbordertexture)
- [getBorderWidth](DThemeDarkMenuItemSpace.md#getborderwidth)
- [getClearType](DThemeDarkMenuItemSpace.md#getcleartype)
- [getColor](DThemeDarkMenuItemSpace.md#getcolor)
- [getCornerMask](DThemeDarkMenuItemSpace.md#getcornermask)
- [getCornerRadius](DThemeDarkMenuItemSpace.md#getcornerradius)
- [getCursor](DThemeDarkMenuItemSpace.md#getcursor)
- [getFontFamilly](DThemeDarkMenuItemSpace.md#getfontfamilly)
- [getFontSize](DThemeDarkMenuItemSpace.md#getfontsize)
- [getFontStyle](DThemeDarkMenuItemSpace.md#getfontstyle)
- [getFontVariant](DThemeDarkMenuItemSpace.md#getfontvariant)
- [getFontWeight](DThemeDarkMenuItemSpace.md#getfontweight)
- [getHeight](DThemeDarkMenuItemSpace.md#getheight)
- [getInteractive](DThemeDarkMenuItemSpace.md#getinteractive)
- [getLineHeight](DThemeDarkMenuItemSpace.md#getlineheight)
- [getOutlineAlign](DThemeDarkMenuItemSpace.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkMenuItemSpace.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkMenuItemSpace.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkMenuItemSpace.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkMenuItemSpace.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkMenuItemSpace.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkMenuItemSpace.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkMenuItemSpace.md#getpaddingleft)
- [getPaddingRight](DThemeDarkMenuItemSpace.md#getpaddingright)
- [getPaddingTop](DThemeDarkMenuItemSpace.md#getpaddingtop)
- [getShadow](DThemeDarkMenuItemSpace.md#getshadow)
- [getTitle](DThemeDarkMenuItemSpace.md#gettitle)
- [getWeight](DThemeDarkMenuItemSpace.md#getweight)
- [getWidth](DThemeDarkMenuItemSpace.md#getwidth)
- [getX](DThemeDarkMenuItemSpace.md#getx)
- [getY](DThemeDarkMenuItemSpace.md#gety)
- [newShadow](DThemeDarkMenuItemSpace.md#newshadow)
- [newShadowWeak](DThemeDarkMenuItemSpace.md#newshadowweak)
- [newState](DThemeDarkMenuItemSpace.md#newstate)

## Constructors

### constructor

• **new DThemeDarkMenuItemSpace**()

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[constructor](DThemeDarkLayoutSpace.md#constructor)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getAlpha](../interfaces/DThemeMenuItemSpace.md#getalpha)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getAlpha](DThemeDarkLayoutSpace.md#getalpha)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBackgroundAlpha](../interfaces/DThemeMenuItemSpace.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBackgroundAlpha](DThemeDarkLayoutSpace.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBackgroundColor](../interfaces/DThemeMenuItemSpace.md#getbackgroundcolor)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBackgroundColor](DThemeDarkLayoutSpace.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts#L14)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBackgroundTexture](../interfaces/DThemeMenuItemSpace.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBackgroundTexture](DThemeDarkLayoutSpace.md#getbackgroundtexture)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBorderAlign](../interfaces/DThemeMenuItemSpace.md#getborderalign)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBorderAlign](DThemeDarkLayoutSpace.md#getborderalign)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBorderAlpha](../interfaces/DThemeMenuItemSpace.md#getborderalpha)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBorderAlpha](DThemeDarkLayoutSpace.md#getborderalpha)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBorderColor](../interfaces/DThemeMenuItemSpace.md#getbordercolor)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBorderColor](DThemeDarkLayoutSpace.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts#L18)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBorderMask](../interfaces/DThemeMenuItemSpace.md#getbordermask)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBorderMask](DThemeDarkLayoutSpace.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBorderTexture](../interfaces/DThemeMenuItemSpace.md#getbordertexture)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBorderTexture](DThemeDarkLayoutSpace.md#getbordertexture)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getBorderWidth](../interfaces/DThemeMenuItemSpace.md#getborderwidth)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getBorderWidth](DThemeDarkLayoutSpace.md#getborderwidth)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getClearType](../interfaces/DThemeMenuItemSpace.md#getcleartype)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getClearType](DThemeDarkLayoutSpace.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts#L30)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getColor](../interfaces/DThemeMenuItemSpace.md#getcolor)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getColor](DThemeDarkLayoutSpace.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getCornerMask](../interfaces/DThemeMenuItemSpace.md#getcornermask)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getCornerMask](DThemeDarkLayoutSpace.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getCornerRadius](../interfaces/DThemeMenuItemSpace.md#getcornerradius)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getCornerRadius](DThemeDarkLayoutSpace.md#getcornerradius)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getCursor](../interfaces/DThemeMenuItemSpace.md#getcursor)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getCursor](DThemeDarkLayoutSpace.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getFontFamilly](../interfaces/DThemeMenuItemSpace.md#getfontfamilly)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getFontFamilly](DThemeDarkLayoutSpace.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getFontSize](../interfaces/DThemeMenuItemSpace.md#getfontsize)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getFontSize](DThemeDarkLayoutSpace.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getFontStyle](../interfaces/DThemeMenuItemSpace.md#getfontstyle)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getFontStyle](DThemeDarkLayoutSpace.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getFontVariant](../interfaces/DThemeMenuItemSpace.md#getfontvariant)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getFontVariant](DThemeDarkLayoutSpace.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getFontWeight](../interfaces/DThemeMenuItemSpace.md#getfontweight)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getFontWeight](DThemeDarkLayoutSpace.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getHeight](../interfaces/DThemeMenuItemSpace.md#getheight)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getHeight](DThemeDarkLayoutSpace.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts#L26)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getInteractive](../interfaces/DThemeMenuItemSpace.md#getinteractive)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getInteractive](DThemeDarkLayoutSpace.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts#L34)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getLineHeight](../interfaces/DThemeMenuItemSpace.md#getlineheight)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getLineHeight](DThemeDarkLayoutSpace.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getOutlineAlign](../interfaces/DThemeMenuItemSpace.md#getoutlinealign)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getOutlineAlign](DThemeDarkLayoutSpace.md#getoutlinealign)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getOutlineAlpha](../interfaces/DThemeMenuItemSpace.md#getoutlinealpha)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getOutlineAlpha](DThemeDarkLayoutSpace.md#getoutlinealpha)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getOutlineColor](../interfaces/DThemeMenuItemSpace.md#getoutlinecolor)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getOutlineColor](DThemeDarkLayoutSpace.md#getoutlinecolor)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getOutlineMask](../interfaces/DThemeMenuItemSpace.md#getoutlinemask)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getOutlineMask](DThemeDarkLayoutSpace.md#getoutlinemask)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getOutlineOffset](../interfaces/DThemeMenuItemSpace.md#getoutlineoffset)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getOutlineOffset](DThemeDarkLayoutSpace.md#getoutlineoffset)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getOutlineWidth](../interfaces/DThemeMenuItemSpace.md#getoutlinewidth)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getOutlineWidth](DThemeDarkLayoutSpace.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getPaddingBottom](../interfaces/DThemeMenuItemSpace.md#getpaddingbottom)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getPaddingBottom](DThemeDarkLayoutSpace.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getPaddingLeft](../interfaces/DThemeMenuItemSpace.md#getpaddingleft)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getPaddingLeft](DThemeDarkLayoutSpace.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getPaddingRight](../interfaces/DThemeMenuItemSpace.md#getpaddingright)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getPaddingRight](DThemeDarkLayoutSpace.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getPaddingTop](../interfaces/DThemeMenuItemSpace.md#getpaddingtop)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getPaddingTop](DThemeDarkLayoutSpace.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getShadow](../interfaces/DThemeMenuItemSpace.md#getshadow)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getShadow](DThemeDarkLayoutSpace.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getTitle](../interfaces/DThemeMenuItemSpace.md#gettitle)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getTitle](DThemeDarkLayoutSpace.md#gettitle)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getWeight](../interfaces/DThemeMenuItemSpace.md#getweight)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getWeight](DThemeDarkLayoutSpace.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getWidth](../interfaces/DThemeMenuItemSpace.md#getwidth)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getWidth](DThemeDarkLayoutSpace.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts#L22)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getX](../interfaces/DThemeMenuItemSpace.md#getx)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getX](DThemeDarkLayoutSpace.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[getY](../interfaces/DThemeMenuItemSpace.md#gety)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[getY](DThemeDarkLayoutSpace.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[newShadow](../interfaces/DThemeMenuItemSpace.md#newshadow)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[newShadow](DThemeDarkLayoutSpace.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[newShadowWeak](../interfaces/DThemeMenuItemSpace.md#newshadowweak)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[newShadowWeak](DThemeDarkLayoutSpace.md#newshadowweak)

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

[DThemeMenuItemSpace](../interfaces/DThemeMenuItemSpace.md).[newState](../interfaces/DThemeMenuItemSpace.md#newstate)

#### Inherited from

[DThemeDarkLayoutSpace](DThemeDarkLayoutSpace.md).[newState](DThemeDarkLayoutSpace.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-layout-space.ts#L38)
