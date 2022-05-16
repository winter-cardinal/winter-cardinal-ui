[Winter Cardinal UI - v0.165.0](../index.md) / DThemeDarkButtonBase

# Class: DThemeDarkButtonBase<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DThemeDarkImageBase`](DThemeDarkImageBase.md)<`VALUE`\>

  ↳ **`DThemeDarkButtonBase`**

  ↳↳ [`DThemeDarkButton`](DThemeDarkButton.md)

  ↳↳ [`DThemeDarkButtonAmbient`](DThemeDarkButtonAmbient.md)

  ↳↳ [`DThemeDarkButtonDanger`](DThemeDarkButtonDanger.md)

  ↳↳ [`DThemeDarkButtonPrimary`](DThemeDarkButtonPrimary.md)

  ↳↳ [`DThemeDarkButtonSecondary`](DThemeDarkButtonSecondary.md)

## Implements

- [`DThemeButtonBase`](../interfaces/DThemeButtonBase.md)<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DThemeDarkButtonBase.md#constructor)

### Properties

- [BACKGROUND\_COLOR](DThemeDarkButtonBase.md#background_color)
- [BACKGROUND\_COLOR\_HOVERED](DThemeDarkButtonBase.md#background_color_hovered)
- [BACKGROUND\_COLOR\_PRESSED](DThemeDarkButtonBase.md#background_color_pressed)
- [OUTLINE\_COLOR](DThemeDarkButtonBase.md#outline_color)

### Methods

- [getAlpha](DThemeDarkButtonBase.md#getalpha)
- [getBackgroundAlpha](DThemeDarkButtonBase.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkButtonBase.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkButtonBase.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkButtonBase.md#getborderalign)
- [getBorderAlpha](DThemeDarkButtonBase.md#getborderalpha)
- [getBorderColor](DThemeDarkButtonBase.md#getbordercolor)
- [getBorderMask](DThemeDarkButtonBase.md#getbordermask)
- [getBorderTexture](DThemeDarkButtonBase.md#getbordertexture)
- [getBorderWidth](DThemeDarkButtonBase.md#getborderwidth)
- [getClearType](DThemeDarkButtonBase.md#getcleartype)
- [getColor](DThemeDarkButtonBase.md#getcolor)
- [getCornerMask](DThemeDarkButtonBase.md#getcornermask)
- [getCornerRadius](DThemeDarkButtonBase.md#getcornerradius)
- [getCursor](DThemeDarkButtonBase.md#getcursor)
- [getFontFamilly](DThemeDarkButtonBase.md#getfontfamilly)
- [getFontSize](DThemeDarkButtonBase.md#getfontsize)
- [getFontStyle](DThemeDarkButtonBase.md#getfontstyle)
- [getFontVariant](DThemeDarkButtonBase.md#getfontvariant)
- [getFontWeight](DThemeDarkButtonBase.md#getfontweight)
- [getHeight](DThemeDarkButtonBase.md#getheight)
- [getImageAlignHorizontal](DThemeDarkButtonBase.md#getimagealignhorizontal)
- [getImageAlignVertical](DThemeDarkButtonBase.md#getimagealignvertical)
- [getImageAlignWith](DThemeDarkButtonBase.md#getimagealignwith)
- [getImageMarginHorizontal](DThemeDarkButtonBase.md#getimagemarginhorizontal)
- [getImageMarginVertial](DThemeDarkButtonBase.md#getimagemarginvertial)
- [getImageSource](DThemeDarkButtonBase.md#getimagesource)
- [getImageTintAlpha](DThemeDarkButtonBase.md#getimagetintalpha)
- [getImageTintColor](DThemeDarkButtonBase.md#getimagetintcolor)
- [getInteractive](DThemeDarkButtonBase.md#getinteractive)
- [getLineHeight](DThemeDarkButtonBase.md#getlineheight)
- [getOutlineAlign](DThemeDarkButtonBase.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkButtonBase.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkButtonBase.md#getoutlinecolor)
- [getOutlineColorActive](DThemeDarkButtonBase.md#getoutlinecoloractive)
- [getOutlineColorNonActive](DThemeDarkButtonBase.md#getoutlinecolornonactive)
- [getOutlineMask](DThemeDarkButtonBase.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkButtonBase.md#getoutlineoffset)
- [getOutlineOffsetActive](DThemeDarkButtonBase.md#getoutlineoffsetactive)
- [getOutlineOffsetNonActive](DThemeDarkButtonBase.md#getoutlineoffsetnonactive)
- [getOutlineWidth](DThemeDarkButtonBase.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkButtonBase.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkButtonBase.md#getpaddingleft)
- [getPaddingRight](DThemeDarkButtonBase.md#getpaddingright)
- [getPaddingTop](DThemeDarkButtonBase.md#getpaddingtop)
- [getSecondaryImageAlignHorizontal](DThemeDarkButtonBase.md#getsecondaryimagealignhorizontal)
- [getSecondaryImageAlignVertical](DThemeDarkButtonBase.md#getsecondaryimagealignvertical)
- [getSecondaryImageAlignWith](DThemeDarkButtonBase.md#getsecondaryimagealignwith)
- [getSecondaryImageMarginHorizontal](DThemeDarkButtonBase.md#getsecondaryimagemarginhorizontal)
- [getSecondaryImageMarginVertial](DThemeDarkButtonBase.md#getsecondaryimagemarginvertial)
- [getSecondaryImageTintAlpha](DThemeDarkButtonBase.md#getsecondaryimagetintalpha)
- [getSecondaryImageTintColor](DThemeDarkButtonBase.md#getsecondaryimagetintcolor)
- [getShadow](DThemeDarkButtonBase.md#getshadow)
- [getTertiaryImageAlignHorizontal](DThemeDarkButtonBase.md#gettertiaryimagealignhorizontal)
- [getTertiaryImageAlignVertical](DThemeDarkButtonBase.md#gettertiaryimagealignvertical)
- [getTertiaryImageAlignWith](DThemeDarkButtonBase.md#gettertiaryimagealignwith)
- [getTertiaryImageMarginHorizontal](DThemeDarkButtonBase.md#gettertiaryimagemarginhorizontal)
- [getTertiaryImageMarginVertial](DThemeDarkButtonBase.md#gettertiaryimagemarginvertial)
- [getTertiaryImageTintAlpha](DThemeDarkButtonBase.md#gettertiaryimagetintalpha)
- [getTertiaryImageTintColor](DThemeDarkButtonBase.md#gettertiaryimagetintcolor)
- [getTextAlignHorizontal](DThemeDarkButtonBase.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeDarkButtonBase.md#gettextalignvertical)
- [getTextFormatter](DThemeDarkButtonBase.md#gettextformatter)
- [getTextStyleClipping](DThemeDarkButtonBase.md#gettextstyleclipping)
- [getTextStyleWordWrap](DThemeDarkButtonBase.md#gettextstylewordwrap)
- [getTextValue](DThemeDarkButtonBase.md#gettextvalue)
- [getTitle](DThemeDarkButtonBase.md#gettitle)
- [getWeight](DThemeDarkButtonBase.md#getweight)
- [getWhen](DThemeDarkButtonBase.md#getwhen)
- [getWidth](DThemeDarkButtonBase.md#getwidth)
- [getX](DThemeDarkButtonBase.md#getx)
- [getY](DThemeDarkButtonBase.md#gety)
- [isOverflowMaskEnabled](DThemeDarkButtonBase.md#isoverflowmaskenabled)
- [isToggle](DThemeDarkButtonBase.md#istoggle)
- [newShadow](DThemeDarkButtonBase.md#newshadow)
- [newShadowWeak](DThemeDarkButtonBase.md#newshadowweak)
- [newState](DThemeDarkButtonBase.md#newstate)
- [newTextValue](DThemeDarkButtonBase.md#newtextvalue)

## Constructors

### constructor

• **new DThemeDarkButtonBase**<`VALUE`\>(`backgroundColor?`, `hover?`, `pressed?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `backgroundColor` | `number` | `0x484848` |
| `hover` | `number` | `0.017` |
| `pressed` | `number` | `0.034` |

#### Overrides

[DThemeDarkImageBase](DThemeDarkImageBase.md).[constructor](DThemeDarkImageBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L25)

## Properties

### BACKGROUND\_COLOR

• `Protected` `Readonly` **BACKGROUND\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L19)

___

### BACKGROUND\_COLOR\_HOVERED

• `Protected` `Readonly` **BACKGROUND\_COLOR\_HOVERED**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L20)

___

### BACKGROUND\_COLOR\_PRESSED

• `Protected` `Readonly` **BACKGROUND\_COLOR\_PRESSED**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L21)

___

### OUTLINE\_COLOR

• `Protected` `Readonly` **OUTLINE\_COLOR**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L23)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getAlpha](DThemeDarkImageBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBackgroundAlpha](DThemeDarkImageBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBackgroundColor](DThemeDarkImageBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L38)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBackgroundTexture](../interfaces/DThemeButtonBase.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBackgroundTexture](DThemeDarkImageBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBorderAlign](DThemeDarkImageBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBorderAlpha](DThemeDarkImageBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBorderColor](DThemeDarkImageBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L60)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBorderMask](DThemeDarkImageBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getBorderTexture](../interfaces/DThemeButtonBase.md#getbordertexture)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBorderTexture](DThemeDarkImageBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getBorderWidth](DThemeDarkImageBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getClearType](DThemeDarkImageBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getColor](DThemeDarkImageBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L52)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getCornerMask](../interfaces/DThemeButtonBase.md#getcornermask)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getCornerMask](DThemeDarkImageBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getCornerRadius](../interfaces/DThemeButtonBase.md#getcornerradius)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getCornerRadius](DThemeDarkImageBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getCursor](DThemeDarkImageBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L126)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontFamilly](../interfaces/DThemeButtonBase.md#getfontfamilly)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getFontFamilly](DThemeDarkImageBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontSize](../interfaces/DThemeButtonBase.md#getfontsize)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getFontSize](DThemeDarkImageBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontStyle](../interfaces/DThemeButtonBase.md#getfontstyle)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getFontStyle](DThemeDarkImageBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontVariant](../interfaces/DThemeButtonBase.md#getfontvariant)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getFontVariant](DThemeDarkImageBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getFontWeight](../interfaces/DThemeButtonBase.md#getfontweight)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getFontWeight](DThemeDarkImageBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getHeight](../interfaces/DThemeButtonBase.md#getheight)

#### Overrides

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getHeight](DThemeDarkImageBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L98)

___

### getImageAlignHorizontal

▸ **getImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageAlignHorizontal](../interfaces/DThemeButtonBase.md#getimagealignhorizontal)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getImageAlignHorizontal](DThemeDarkImageBase.md#getimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L18)

___

### getImageAlignVertical

▸ **getImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageAlignVertical](../interfaces/DThemeButtonBase.md#getimagealignvertical)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getImageAlignVertical](DThemeDarkImageBase.md#getimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L22)

___

### getImageAlignWith

▸ **getImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageAlignWith](../interfaces/DThemeButtonBase.md#getimagealignwith)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getImageAlignWith](DThemeDarkImageBase.md#getimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L26)

___

### getImageMarginHorizontal

▸ **getImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageMarginHorizontal](../interfaces/DThemeButtonBase.md#getimagemarginhorizontal)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getImageMarginHorizontal](DThemeDarkImageBase.md#getimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L30)

___

### getImageMarginVertial

▸ **getImageMarginVertial**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getImageMarginVertial](../interfaces/DThemeButtonBase.md#getimagemarginvertial)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getImageMarginVertial](DThemeDarkImageBase.md#getimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L34)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getImageSource](DThemeDarkImageBase.md#getimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L46)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getImageTintAlpha](DThemeDarkImageBase.md#getimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L42)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getImageTintColor](DThemeDarkImageBase.md#getimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L38)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getInteractive](../interfaces/DThemeButtonBase.md#getinteractive)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getInteractive](DThemeDarkImageBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L165)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getLineHeight](../interfaces/DThemeButtonBase.md#getlineheight)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getLineHeight](DThemeDarkImageBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getOutlineAlign](DThemeDarkImageBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getOutlineAlpha](DThemeDarkImageBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getOutlineColor](DThemeDarkImageBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L68)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L75)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L79)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getOutlineMask](DThemeDarkImageBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getOutlineOffset](DThemeDarkImageBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L83)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L90)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L94)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getOutlineWidth](DThemeDarkImageBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getPaddingBottom](../interfaces/DThemeButtonBase.md#getpaddingbottom)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getPaddingBottom](DThemeDarkImageBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getPaddingLeft](../interfaces/DThemeButtonBase.md#getpaddingleft)

#### Overrides

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getPaddingLeft](DThemeDarkImageBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L110)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getPaddingRight](../interfaces/DThemeButtonBase.md#getpaddingright)

#### Overrides

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getPaddingRight](DThemeDarkImageBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L114)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getPaddingTop](../interfaces/DThemeButtonBase.md#getpaddingtop)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getPaddingTop](DThemeDarkImageBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

___

### getSecondaryImageAlignHorizontal

▸ **getSecondaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageAlignHorizontal](../interfaces/DThemeButtonBase.md#getsecondaryimagealignhorizontal)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getSecondaryImageAlignHorizontal](DThemeDarkImageBase.md#getsecondaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L50)

___

### getSecondaryImageAlignVertical

▸ **getSecondaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageAlignVertical](../interfaces/DThemeButtonBase.md#getsecondaryimagealignvertical)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getSecondaryImageAlignVertical](DThemeDarkImageBase.md#getsecondaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L54)

___

### getSecondaryImageAlignWith

▸ **getSecondaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageAlignWith](../interfaces/DThemeButtonBase.md#getsecondaryimagealignwith)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getSecondaryImageAlignWith](DThemeDarkImageBase.md#getsecondaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L58)

___

### getSecondaryImageMarginHorizontal

▸ **getSecondaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageMarginHorizontal](../interfaces/DThemeButtonBase.md#getsecondaryimagemarginhorizontal)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getSecondaryImageMarginHorizontal](DThemeDarkImageBase.md#getsecondaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L62)

___

### getSecondaryImageMarginVertial

▸ **getSecondaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getSecondaryImageMarginVertial](../interfaces/DThemeButtonBase.md#getsecondaryimagemarginvertial)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getSecondaryImageMarginVertial](DThemeDarkImageBase.md#getsecondaryimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L66)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getSecondaryImageTintAlpha](DThemeDarkImageBase.md#getsecondaryimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L74)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getSecondaryImageTintColor](DThemeDarkImageBase.md#getsecondaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L70)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getShadow](DThemeDarkImageBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTertiaryImageAlignHorizontal

▸ **getTertiaryImageAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageAlignHorizontal](../interfaces/DThemeButtonBase.md#gettertiaryimagealignhorizontal)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTertiaryImageAlignHorizontal](DThemeDarkImageBase.md#gettertiaryimagealignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L78)

___

### getTertiaryImageAlignVertical

▸ **getTertiaryImageAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageAlignVertical](../interfaces/DThemeButtonBase.md#gettertiaryimagealignvertical)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTertiaryImageAlignVertical](DThemeDarkImageBase.md#gettertiaryimagealignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L82)

___

### getTertiaryImageAlignWith

▸ **getTertiaryImageAlignWith**(): [`DAlignWith`](../index.md#dalignwith)

#### Returns

[`DAlignWith`](../index.md#dalignwith)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageAlignWith](../interfaces/DThemeButtonBase.md#gettertiaryimagealignwith)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTertiaryImageAlignWith](DThemeDarkImageBase.md#gettertiaryimagealignwith)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L86)

___

### getTertiaryImageMarginHorizontal

▸ **getTertiaryImageMarginHorizontal**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageMarginHorizontal](../interfaces/DThemeButtonBase.md#gettertiaryimagemarginhorizontal)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTertiaryImageMarginHorizontal](DThemeDarkImageBase.md#gettertiaryimagemarginhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L90)

___

### getTertiaryImageMarginVertial

▸ **getTertiaryImageMarginVertial**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTertiaryImageMarginVertial](../interfaces/DThemeButtonBase.md#gettertiaryimagemarginvertial)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTertiaryImageMarginVertial](DThemeDarkImageBase.md#gettertiaryimagemarginvertial)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L94)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTertiaryImageTintAlpha](DThemeDarkImageBase.md#gettertiaryimagetintalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L102)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTertiaryImageTintColor](DThemeDarkImageBase.md#gettertiaryimagetintcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-image-base.ts#L98)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextAlignHorizontal](../interfaces/DThemeButtonBase.md#gettextalignhorizontal)

#### Overrides

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTextAlignHorizontal](DThemeDarkImageBase.md#gettextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L106)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextAlignVertical](../interfaces/DThemeButtonBase.md#gettextalignvertical)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTextAlignVertical](DThemeDarkImageBase.md#gettextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L19)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTextFormatter](DThemeDarkImageBase.md#gettextformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L39)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextStyleClipping](../interfaces/DThemeButtonBase.md#gettextstyleclipping)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTextStyleClipping](DThemeDarkImageBase.md#gettextstyleclipping)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L31)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTextStyleWordWrap](../interfaces/DThemeButtonBase.md#gettextstylewordwrap)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTextStyleWordWrap](DThemeDarkImageBase.md#gettextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L35)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTextValue](DThemeDarkImageBase.md#gettextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L43)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getTitle](../interfaces/DThemeButtonBase.md#gettitle)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getTitle](DThemeDarkImageBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getWeight](DThemeDarkImageBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWhen

▸ **getWhen**(): [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

Returns when to activate a button.

#### Returns

[`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getWhen](../interfaces/DThemeButtonBase.md#getwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L122)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getWidth](../interfaces/DThemeButtonBase.md#getwidth)

#### Overrides

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getWidth](DThemeDarkImageBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L102)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getX](../interfaces/DThemeButtonBase.md#getx)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getX](DThemeDarkImageBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[getY](../interfaces/DThemeButtonBase.md#gety)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[getY](DThemeDarkImageBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[isOverflowMaskEnabled](../interfaces/DThemeButtonBase.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[isOverflowMaskEnabled](DThemeDarkImageBase.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L27)

___

### isToggle

▸ **isToggle**(): `boolean`

Returns true to turn a toggle mode on.

#### Returns

`boolean`

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[isToggle](../interfaces/DThemeButtonBase.md#istoggle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-button-base.ts#L118)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[newShadow](../interfaces/DThemeButtonBase.md#newshadow)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[newShadow](DThemeDarkImageBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeButtonBase](../interfaces/DThemeButtonBase.md).[newShadowWeak](../interfaces/DThemeButtonBase.md#newshadowweak)

#### Inherited from

[DThemeDarkImageBase](DThemeDarkImageBase.md).[newShadowWeak](DThemeDarkImageBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[newState](DThemeDarkImageBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L169)

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

[DThemeDarkImageBase](DThemeDarkImageBase.md).[newTextValue](DThemeDarkImageBase.md#newtextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-text-base.ts#L47)
