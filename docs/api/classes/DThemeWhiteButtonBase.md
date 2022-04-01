[Winter Cardinal UI - v0.160.0](../index.md) / DThemeWhiteButtonBase

# Class: DThemeWhiteButtonBase<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DThemeWhiteImageBase`](DThemeWhiteImageBase.md)<`VALUE`\>

  ↳ **`DThemeWhiteButtonBase`**

  ↳↳ [`DThemeWhiteButtonAmbient`](DThemeWhiteButtonAmbient.md)

  ↳↳ [`DThemeWhiteButtonDanger`](DThemeWhiteButtonDanger.md)

  ↳↳ [`DThemeWhiteButtonPrimary`](DThemeWhiteButtonPrimary.md)

  ↳↳ [`DThemeWhiteButtonSecondary`](DThemeWhiteButtonSecondary.md)

  ↳↳ [`DThemeWhiteButton`](DThemeWhiteButton.md)

## Implements

- [`DThemeButtonBase`](../interfaces/DThemeButtonBase.md)<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DThemeWhiteButtonBase.md#constructor)

### Properties

- [BACKGROUND\_COLOR](DThemeWhiteButtonBase.md#background_color)
- [BACKGROUND\_COLOR\_HOVERED](DThemeWhiteButtonBase.md#background_color_hovered)
- [BACKGROUND\_COLOR\_PRESSED](DThemeWhiteButtonBase.md#background_color_pressed)
- [OUTLINE\_COLOR](DThemeWhiteButtonBase.md#outline_color)

### Methods

- [getAlpha](DThemeWhiteButtonBase.md#getalpha)
- [getBackgroundAlpha](DThemeWhiteButtonBase.md#getbackgroundalpha)
- [getBackgroundColor](DThemeWhiteButtonBase.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeWhiteButtonBase.md#getbackgroundtexture)
- [getBorderAlign](DThemeWhiteButtonBase.md#getborderalign)
- [getBorderAlpha](DThemeWhiteButtonBase.md#getborderalpha)
- [getBorderColor](DThemeWhiteButtonBase.md#getbordercolor)
- [getBorderMask](DThemeWhiteButtonBase.md#getbordermask)
- [getBorderTexture](DThemeWhiteButtonBase.md#getbordertexture)
- [getBorderWidth](DThemeWhiteButtonBase.md#getborderwidth)
- [getClearType](DThemeWhiteButtonBase.md#getcleartype)
- [getColor](DThemeWhiteButtonBase.md#getcolor)
- [getCornerMask](DThemeWhiteButtonBase.md#getcornermask)
- [getCornerRadius](DThemeWhiteButtonBase.md#getcornerradius)
- [getCursor](DThemeWhiteButtonBase.md#getcursor)
- [getFontFamilly](DThemeWhiteButtonBase.md#getfontfamilly)
- [getFontSize](DThemeWhiteButtonBase.md#getfontsize)
- [getFontStyle](DThemeWhiteButtonBase.md#getfontstyle)
- [getFontVariant](DThemeWhiteButtonBase.md#getfontvariant)
- [getFontWeight](DThemeWhiteButtonBase.md#getfontweight)
- [getHeight](DThemeWhiteButtonBase.md#getheight)
- [getImageAlignHorizontal](DThemeWhiteButtonBase.md#getimagealignhorizontal)
- [getImageAlignVertical](DThemeWhiteButtonBase.md#getimagealignvertical)
- [getImageAlignWith](DThemeWhiteButtonBase.md#getimagealignwith)
- [getImageMarginHorizontal](DThemeWhiteButtonBase.md#getimagemarginhorizontal)
- [getImageMarginVertial](DThemeWhiteButtonBase.md#getimagemarginvertial)
- [getImageSource](DThemeWhiteButtonBase.md#getimagesource)
- [getImageTintAlpha](DThemeWhiteButtonBase.md#getimagetintalpha)
- [getImageTintColor](DThemeWhiteButtonBase.md#getimagetintcolor)
- [getInteractive](DThemeWhiteButtonBase.md#getinteractive)
- [getLineHeight](DThemeWhiteButtonBase.md#getlineheight)
- [getOutlineAlign](DThemeWhiteButtonBase.md#getoutlinealign)
- [getOutlineAlpha](DThemeWhiteButtonBase.md#getoutlinealpha)
- [getOutlineColor](DThemeWhiteButtonBase.md#getoutlinecolor)
- [getOutlineColorActive](DThemeWhiteButtonBase.md#getoutlinecoloractive)
- [getOutlineColorNonActive](DThemeWhiteButtonBase.md#getoutlinecolornonactive)
- [getOutlineMask](DThemeWhiteButtonBase.md#getoutlinemask)
- [getOutlineOffset](DThemeWhiteButtonBase.md#getoutlineoffset)
- [getOutlineOffsetActive](DThemeWhiteButtonBase.md#getoutlineoffsetactive)
- [getOutlineOffsetNonActive](DThemeWhiteButtonBase.md#getoutlineoffsetnonactive)
- [getOutlineWidth](DThemeWhiteButtonBase.md#getoutlinewidth)
- [getPaddingBottom](DThemeWhiteButtonBase.md#getpaddingbottom)
- [getPaddingLeft](DThemeWhiteButtonBase.md#getpaddingleft)
- [getPaddingRight](DThemeWhiteButtonBase.md#getpaddingright)
- [getPaddingTop](DThemeWhiteButtonBase.md#getpaddingtop)
- [getSecondaryImageAlignHorizontal](DThemeWhiteButtonBase.md#getsecondaryimagealignhorizontal)
- [getSecondaryImageAlignVertical](DThemeWhiteButtonBase.md#getsecondaryimagealignvertical)
- [getSecondaryImageAlignWith](DThemeWhiteButtonBase.md#getsecondaryimagealignwith)
- [getSecondaryImageMarginHorizontal](DThemeWhiteButtonBase.md#getsecondaryimagemarginhorizontal)
- [getSecondaryImageMarginVertial](DThemeWhiteButtonBase.md#getsecondaryimagemarginvertial)
- [getSecondaryImageTintAlpha](DThemeWhiteButtonBase.md#getsecondaryimagetintalpha)
- [getSecondaryImageTintColor](DThemeWhiteButtonBase.md#getsecondaryimagetintcolor)
- [getShadow](DThemeWhiteButtonBase.md#getshadow)
- [getTertiaryImageAlignHorizontal](DThemeWhiteButtonBase.md#gettertiaryimagealignhorizontal)
- [getTertiaryImageAlignVertical](DThemeWhiteButtonBase.md#gettertiaryimagealignvertical)
- [getTertiaryImageAlignWith](DThemeWhiteButtonBase.md#gettertiaryimagealignwith)
- [getTertiaryImageMarginHorizontal](DThemeWhiteButtonBase.md#gettertiaryimagemarginhorizontal)
- [getTertiaryImageMarginVertial](DThemeWhiteButtonBase.md#gettertiaryimagemarginvertial)
- [getTertiaryImageTintAlpha](DThemeWhiteButtonBase.md#gettertiaryimagetintalpha)
- [getTertiaryImageTintColor](DThemeWhiteButtonBase.md#gettertiaryimagetintcolor)
- [getTextAlignHorizontal](DThemeWhiteButtonBase.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeWhiteButtonBase.md#gettextalignvertical)
- [getTextFormatter](DThemeWhiteButtonBase.md#gettextformatter)
- [getTextStyleClipping](DThemeWhiteButtonBase.md#gettextstyleclipping)
- [getTextStyleWordWrap](DThemeWhiteButtonBase.md#gettextstylewordwrap)
- [getTextValue](DThemeWhiteButtonBase.md#gettextvalue)
- [getTitle](DThemeWhiteButtonBase.md#gettitle)
- [getWeight](DThemeWhiteButtonBase.md#getweight)
- [getWhen](DThemeWhiteButtonBase.md#getwhen)
- [getWidth](DThemeWhiteButtonBase.md#getwidth)
- [getX](DThemeWhiteButtonBase.md#getx)
- [getY](DThemeWhiteButtonBase.md#gety)
- [isOverflowMaskEnabled](DThemeWhiteButtonBase.md#isoverflowmaskenabled)
- [isToggle](DThemeWhiteButtonBase.md#istoggle)
- [newShadow](DThemeWhiteButtonBase.md#newshadow)
- [newShadowWeak](DThemeWhiteButtonBase.md#newshadowweak)
- [newState](DThemeWhiteButtonBase.md#newstate)
- [newTextValue](DThemeWhiteButtonBase.md#newtextvalue)

## Constructors

### constructor

• **new DThemeWhiteButtonBase**<`VALUE`\>(`backgroundColor?`, `hover?`, `pressed?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `backgroundColor` | `number` | `0xffffff` |
| `hover` | `number` | `0.017` |
| `pressed` | `number` | `0.034` |

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[constructor](DThemeWhiteImageBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L25)

## Properties

### BACKGROUND\_COLOR

• `Protected` `Readonly` **BACKGROUND\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L19)

___

### BACKGROUND\_COLOR\_HOVERED

• `Protected` `Readonly` **BACKGROUND\_COLOR\_HOVERED**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L20)

___

### BACKGROUND\_COLOR\_PRESSED

• `Protected` `Readonly` **BACKGROUND\_COLOR\_PRESSED**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L21)

___

### OUTLINE\_COLOR

• `Protected` `Readonly` **OUTLINE\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L23)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getAlpha](../interfaces/DThemeButtonBase.md#getalpha)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getAlpha](DThemeWhiteImageBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L35)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBackgroundAlpha](../interfaces/DThemeButtonBase.md#getbackgroundalpha)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBackgroundAlpha](DThemeWhiteImageBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L74)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBackgroundColor](../interfaces/DThemeButtonBase.md#getbackgroundcolor)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBackgroundColor](DThemeWhiteImageBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L38)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBackgroundTexture](../interfaces/DThemeButtonBase.md#getbackgroundtexture)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBackgroundTexture](DThemeWhiteImageBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L78)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBorderAlign](../interfaces/DThemeButtonBase.md#getborderalign)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBorderAlign](DThemeWhiteImageBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L94)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBorderAlpha](../interfaces/DThemeButtonBase.md#getborderalpha)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBorderAlpha](DThemeWhiteImageBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L86)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBorderColor](../interfaces/DThemeButtonBase.md#getbordercolor)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBorderColor](DThemeWhiteImageBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L60)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBorderMask](../interfaces/DThemeButtonBase.md#getbordermask)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBorderMask](DThemeWhiteImageBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBorderTexture](../interfaces/DThemeButtonBase.md#getbordertexture)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBorderTexture](DThemeWhiteImageBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L102)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBorderWidth](../interfaces/DThemeButtonBase.md#getborderwidth)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getBorderWidth](DThemeWhiteImageBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getClearType](../interfaces/DThemeButtonBase.md#getcleartype)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getClearType](DThemeWhiteImageBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L157)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getColor](../interfaces/DThemeButtonBase.md#getcolor)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getColor](DThemeWhiteImageBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L52)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getCornerMask](../interfaces/DThemeButtonBase.md#getcornermask)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getCornerMask](DThemeWhiteImageBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getCornerRadius](../interfaces/DThemeButtonBase.md#getcornerradius)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getCornerRadius](DThemeWhiteImageBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L122)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getCursor](../interfaces/DThemeButtonBase.md#getcursor)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getCursor](DThemeWhiteImageBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L126)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontFamilly](../interfaces/DThemeButtonBase.md#getfontfamilly)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getFontFamilly](DThemeWhiteImageBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontSize](../interfaces/DThemeButtonBase.md#getfontsize)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getFontSize](DThemeWhiteImageBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontStyle](../interfaces/DThemeButtonBase.md#getfontstyle)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getFontStyle](DThemeWhiteImageBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontVariant](../interfaces/DThemeButtonBase.md#getfontvariant)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getFontVariant](DThemeWhiteImageBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontWeight](../interfaces/DThemeButtonBase.md#getfontweight)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getFontWeight](DThemeWhiteImageBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getHeight](../interfaces/DThemeButtonBase.md#getheight)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getHeight](DThemeWhiteImageBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L98)

___

### getImageAlignHorizontal

▸ **getImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageAlignHorizontal](../interfaces/DThemeButtonBase.md#getimagealignhorizontal)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getImageAlignHorizontal](DThemeWhiteImageBase.md#getimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L18)

___

### getImageAlignVertical

▸ **getImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageAlignVertical](../interfaces/DThemeButtonBase.md#getimagealignvertical)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getImageAlignVertical](DThemeWhiteImageBase.md#getimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L22)

___

### getImageAlignWith

▸ **getImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageAlignWith](../interfaces/DThemeButtonBase.md#getimagealignwith)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getImageAlignWith](DThemeWhiteImageBase.md#getimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L26)

___

### getImageMarginHorizontal

▸ **getImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageMarginHorizontal](../interfaces/DThemeButtonBase.md#getimagemarginhorizontal)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getImageMarginHorizontal](DThemeWhiteImageBase.md#getimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L30)

___

### getImageMarginVertial

▸ **getImageMarginVertial**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageMarginVertial](../interfaces/DThemeButtonBase.md#getimagemarginvertial)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getImageMarginVertial](DThemeWhiteImageBase.md#getimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L34)

___

### getImageSource

▸ **getImageSource**(`state`): ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageSource](../interfaces/DThemeButtonBase.md#getimagesource)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getImageSource](DThemeWhiteImageBase.md#getimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L46)

___

### getImageTintAlpha

▸ **getImageTintAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageTintAlpha](../interfaces/DThemeButtonBase.md#getimagetintalpha)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getImageTintAlpha](DThemeWhiteImageBase.md#getimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L42)

___

### getImageTintColor

▸ **getImageTintColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageTintColor](../interfaces/DThemeButtonBase.md#getimagetintcolor)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getImageTintColor](DThemeWhiteImageBase.md#getimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L38)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getInteractive](../interfaces/DThemeButtonBase.md#getinteractive)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getInteractive](DThemeWhiteImageBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L165)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getLineHeight](../interfaces/DThemeButtonBase.md#getlineheight)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getLineHeight](DThemeWhiteImageBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-font.ts#L42)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getOutlineAlign](../interfaces/DThemeButtonBase.md#getoutlinealign)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getOutlineAlign](DThemeWhiteImageBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L149)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getOutlineAlpha](../interfaces/DThemeButtonBase.md#getoutlinealpha)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getOutlineAlpha](DThemeWhiteImageBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L134)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getOutlineColor](../interfaces/DThemeButtonBase.md#getoutlinecolor)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getOutlineColor](DThemeWhiteImageBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L68)

___

### getOutlineColorActive

▸ `Protected` **getOutlineColorActive**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L75)

___

### getOutlineColorNonActive

▸ `Protected` **getOutlineColorNonActive**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L79)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getOutlineMask](../interfaces/DThemeButtonBase.md#getoutlinemask)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getOutlineMask](DThemeWhiteImageBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L153)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getOutlineOffset](../interfaces/DThemeButtonBase.md#getoutlineoffset)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getOutlineOffset](DThemeWhiteImageBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L83)

___

### getOutlineOffsetActive

▸ `Protected` **getOutlineOffsetActive**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L90)

___

### getOutlineOffsetNonActive

▸ `Protected` **getOutlineOffsetNonActive**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L94)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getOutlineWidth](../interfaces/DThemeButtonBase.md#getoutlinewidth)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getOutlineWidth](DThemeWhiteImageBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getPaddingBottom](../interfaces/DThemeButtonBase.md#getpaddingbottom)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getPaddingBottom](DThemeWhiteImageBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getPaddingLeft](../interfaces/DThemeButtonBase.md#getpaddingleft)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getPaddingLeft](DThemeWhiteImageBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L110)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getPaddingRight](../interfaces/DThemeButtonBase.md#getpaddingright)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getPaddingRight](DThemeWhiteImageBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L114)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getPaddingTop](../interfaces/DThemeButtonBase.md#getpaddingtop)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getPaddingTop](DThemeWhiteImageBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L114)

___

### getSecondaryImageAlignHorizontal

▸ **getSecondaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageAlignHorizontal](../interfaces/DThemeButtonBase.md#getsecondaryimagealignhorizontal)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getSecondaryImageAlignHorizontal](DThemeWhiteImageBase.md#getsecondaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L50)

___

### getSecondaryImageAlignVertical

▸ **getSecondaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageAlignVertical](../interfaces/DThemeButtonBase.md#getsecondaryimagealignvertical)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getSecondaryImageAlignVertical](DThemeWhiteImageBase.md#getsecondaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L54)

___

### getSecondaryImageAlignWith

▸ **getSecondaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageAlignWith](../interfaces/DThemeButtonBase.md#getsecondaryimagealignwith)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getSecondaryImageAlignWith](DThemeWhiteImageBase.md#getsecondaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L58)

___

### getSecondaryImageMarginHorizontal

▸ **getSecondaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageMarginHorizontal](../interfaces/DThemeButtonBase.md#getsecondaryimagemarginhorizontal)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getSecondaryImageMarginHorizontal](DThemeWhiteImageBase.md#getsecondaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L62)

___

### getSecondaryImageMarginVertial

▸ **getSecondaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageMarginVertial](../interfaces/DThemeButtonBase.md#getsecondaryimagemarginvertial)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getSecondaryImageMarginVertial](DThemeWhiteImageBase.md#getsecondaryimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L66)

___

### getSecondaryImageTintAlpha

▸ **getSecondaryImageTintAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageTintAlpha](../interfaces/DThemeButtonBase.md#getsecondaryimagetintalpha)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getSecondaryImageTintAlpha](DThemeWhiteImageBase.md#getsecondaryimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L74)

___

### getSecondaryImageTintColor

▸ **getSecondaryImageTintColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageTintColor](../interfaces/DThemeButtonBase.md#getsecondaryimagetintcolor)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getSecondaryImageTintColor](DThemeWhiteImageBase.md#getsecondaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L70)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getShadow](../interfaces/DThemeButtonBase.md#getshadow)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getShadow](DThemeWhiteImageBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L161)

___

### getTertiaryImageAlignHorizontal

▸ **getTertiaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageAlignHorizontal](../interfaces/DThemeButtonBase.md#gettertiaryimagealignhorizontal)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTertiaryImageAlignHorizontal](DThemeWhiteImageBase.md#gettertiaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L78)

___

### getTertiaryImageAlignVertical

▸ **getTertiaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageAlignVertical](../interfaces/DThemeButtonBase.md#gettertiaryimagealignvertical)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTertiaryImageAlignVertical](DThemeWhiteImageBase.md#gettertiaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L82)

___

### getTertiaryImageAlignWith

▸ **getTertiaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageAlignWith](../interfaces/DThemeButtonBase.md#gettertiaryimagealignwith)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTertiaryImageAlignWith](DThemeWhiteImageBase.md#gettertiaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L86)

___

### getTertiaryImageMarginHorizontal

▸ **getTertiaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageMarginHorizontal](../interfaces/DThemeButtonBase.md#gettertiaryimagemarginhorizontal)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTertiaryImageMarginHorizontal](DThemeWhiteImageBase.md#gettertiaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L90)

___

### getTertiaryImageMarginVertial

▸ **getTertiaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageMarginVertial](../interfaces/DThemeButtonBase.md#gettertiaryimagemarginvertial)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTertiaryImageMarginVertial](DThemeWhiteImageBase.md#gettertiaryimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L94)

___

### getTertiaryImageTintAlpha

▸ **getTertiaryImageTintAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageTintAlpha](../interfaces/DThemeButtonBase.md#gettertiaryimagetintalpha)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTertiaryImageTintAlpha](DThemeWhiteImageBase.md#gettertiaryimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L102)

___

### getTertiaryImageTintColor

▸ **getTertiaryImageTintColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageTintColor](../interfaces/DThemeButtonBase.md#gettertiaryimagetintcolor)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTertiaryImageTintColor](DThemeWhiteImageBase.md#gettertiaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-image-base.ts#L98)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextAlignHorizontal](../interfaces/DThemeButtonBase.md#gettextalignhorizontal)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTextAlignHorizontal](DThemeWhiteImageBase.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L106)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextAlignVertical](../interfaces/DThemeButtonBase.md#gettextalignvertical)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTextAlignVertical](DThemeWhiteImageBase.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L19)

___

### getTextFormatter

▸ **getTextFormatter**(): (`value`: `VALUE`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

`string`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextFormatter](../interfaces/DThemeButtonBase.md#gettextformatter)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTextFormatter](DThemeWhiteImageBase.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L39)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextStyleClipping](../interfaces/DThemeButtonBase.md#gettextstyleclipping)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTextStyleClipping](DThemeWhiteImageBase.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L31)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextStyleWordWrap](../interfaces/DThemeButtonBase.md#gettextstylewordwrap)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTextStyleWordWrap](DThemeWhiteImageBase.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L35)

___

### getTextValue

▸ **getTextValue**(`state`): `undefined` \| `VALUE`

Returns a text value.
Called to get a text vale if there is no text value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`undefined` \| `VALUE`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextValue](../interfaces/DThemeButtonBase.md#gettextvalue)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTextValue](DThemeWhiteImageBase.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L43)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTitle](../interfaces/DThemeButtonBase.md#gettitle)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getTitle](DThemeWhiteImageBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L173)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getWeight](../interfaces/DThemeButtonBase.md#getweight)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getWeight](DThemeWhiteImageBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L177)

___

### getWhen

▸ **getWhen**(): [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

Returns when to activate a button.

#### Returns

[`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getWhen](../interfaces/DThemeButtonBase.md#getwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L122)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getWidth](../interfaces/DThemeButtonBase.md#getwidth)

#### Overrides

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getWidth](DThemeWhiteImageBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L102)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getX](../interfaces/DThemeButtonBase.md#getx)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getX](DThemeWhiteImageBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getY](../interfaces/DThemeButtonBase.md#gety)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[getY](DThemeWhiteImageBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[isOverflowMaskEnabled](../interfaces/DThemeButtonBase.md#isoverflowmaskenabled)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[isOverflowMaskEnabled](DThemeWhiteImageBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L27)

___

### isToggle

▸ **isToggle**(): `boolean`

Returns true to turn a toggle mode on.

#### Returns

`boolean`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[isToggle](../interfaces/DThemeButtonBase.md#istoggle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-button-base.ts#L118)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[newShadow](../interfaces/DThemeButtonBase.md#newshadow)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[newShadow](DThemeWhiteImageBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[newShadowWeak](../interfaces/DThemeButtonBase.md#newshadowweak)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[newShadowWeak](DThemeWhiteImageBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L185)

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

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[newState](../interfaces/DThemeButtonBase.md#newstate)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[newState](DThemeWhiteImageBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-base.ts#L169)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[newTextValue](../interfaces/DThemeButtonBase.md#newtextvalue)

#### Inherited from

[DThemeWhiteImageBase](DThemeWhiteImageBase.md).[newTextValue](DThemeWhiteImageBase.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-text-base.ts#L47)
