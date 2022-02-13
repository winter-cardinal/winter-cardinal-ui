[Winter Cardinal UI - v0.155.0](../index.md) / DThemePickerDatetime

# Interface: DThemePickerDatetime

## Hierarchy

- [`DThemePickerTime`](DThemePickerTime.md)

  ↳ **`DThemePickerDatetime`**

  ↳↳ [`DThemePickerDate`](DThemePickerDate.md)

## Implemented by

- [`DThemeDarkPickerDatetime`](../classes/DThemeDarkPickerDatetime.md)
- [`DThemeWhitePickerDatetime`](../classes/DThemeWhitePickerDatetime.md)

## Table of contents

### Methods

- [getAlpha](DThemePickerDatetime.md#getalpha)
- [getBackButtonOptions](DThemePickerDatetime.md#getbackbuttonoptions)
- [getBackgroundAlpha](DThemePickerDatetime.md#getbackgroundalpha)
- [getBackgroundColor](DThemePickerDatetime.md#getbackgroundcolor)
- [getBackgroundTexture](DThemePickerDatetime.md#getbackgroundtexture)
- [getBorderAlign](DThemePickerDatetime.md#getborderalign)
- [getBorderAlpha](DThemePickerDatetime.md#getborderalpha)
- [getBorderColor](DThemePickerDatetime.md#getbordercolor)
- [getBorderMask](DThemePickerDatetime.md#getbordermask)
- [getBorderTexture](DThemePickerDatetime.md#getbordertexture)
- [getBorderWidth](DThemePickerDatetime.md#getborderwidth)
- [getClearType](DThemePickerDatetime.md#getcleartype)
- [getColor](DThemePickerDatetime.md#getcolor)
- [getCornerMask](DThemePickerDatetime.md#getcornermask)
- [getCornerRadius](DThemePickerDatetime.md#getcornerradius)
- [getCursor](DThemePickerDatetime.md#getcursor)
- [getDateDecorator](DThemePickerDatetime.md#getdatedecorator)
- [getDayLabels](DThemePickerDatetime.md#getdaylabels)
- [getDayStart](DThemePickerDatetime.md#getdaystart)
- [getFontFamilly](DThemePickerDatetime.md#getfontfamilly)
- [getFontSize](DThemePickerDatetime.md#getfontsize)
- [getFontStyle](DThemePickerDatetime.md#getfontstyle)
- [getFontVariant](DThemePickerDatetime.md#getfontvariant)
- [getFontWeight](DThemePickerDatetime.md#getfontweight)
- [getHeight](DThemePickerDatetime.md#getheight)
- [getHoursOptions](DThemePickerDatetime.md#gethoursoptions)
- [getInteractive](DThemePickerDatetime.md#getinteractive)
- [getLabelFormatter](DThemePickerDatetime.md#getlabelformatter)
- [getLineHeight](DThemePickerDatetime.md#getlineheight)
- [getLowerBound](DThemePickerDatetime.md#getlowerbound)
- [getMargin](DThemePickerDatetime.md#getmargin)
- [getMask](DThemePickerDatetime.md#getmask)
- [getMinutesOptions](DThemePickerDatetime.md#getminutesoptions)
- [getNextButtonOptions](DThemePickerDatetime.md#getnextbuttonoptions)
- [getOutlineAlign](DThemePickerDatetime.md#getoutlinealign)
- [getOutlineAlpha](DThemePickerDatetime.md#getoutlinealpha)
- [getOutlineColor](DThemePickerDatetime.md#getoutlinecolor)
- [getOutlineMask](DThemePickerDatetime.md#getoutlinemask)
- [getOutlineOffset](DThemePickerDatetime.md#getoutlineoffset)
- [getOutlineWidth](DThemePickerDatetime.md#getoutlinewidth)
- [getPaddingBottom](DThemePickerDatetime.md#getpaddingbottom)
- [getPaddingLeft](DThemePickerDatetime.md#getpaddingleft)
- [getPaddingRight](DThemePickerDatetime.md#getpaddingright)
- [getPaddingTop](DThemePickerDatetime.md#getpaddingtop)
- [getSecondsOptions](DThemePickerDatetime.md#getsecondsoptions)
- [getShadow](DThemePickerDatetime.md#getshadow)
- [getTitle](DThemePickerDatetime.md#gettitle)
- [getUpperBound](DThemePickerDatetime.md#getupperbound)
- [getWeight](DThemePickerDatetime.md#getweight)
- [getWidth](DThemePickerDatetime.md#getwidth)
- [getX](DThemePickerDatetime.md#getx)
- [getY](DThemePickerDatetime.md#gety)
- [isLowerBoundInclusive](DThemePickerDatetime.md#islowerboundinclusive)
- [isUpperBoundInclusive](DThemePickerDatetime.md#isupperboundinclusive)
- [newShadow](DThemePickerDatetime.md#newshadow)
- [newShadowWeak](DThemePickerDatetime.md#newshadowweak)
- [newState](DThemePickerDatetime.md#newstate)

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

[DThemePickerTime](DThemePickerTime.md).[getAlpha](DThemePickerTime.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackButtonOptions

▸ **getBackButtonOptions**(): ``null`` \| [`DPickerDatetimeButtonBackOptions`](DPickerDatetimeButtonBackOptions.md)<`unknown`, [`DThemePickerDatetimeButtonBack`](DThemePickerDatetimeButtonBack.md)<`unknown`\>\>

#### Returns

``null`` \| [`DPickerDatetimeButtonBackOptions`](DPickerDatetimeButtonBackOptions.md)<`unknown`, [`DThemePickerDatetimeButtonBack`](DThemePickerDatetimeButtonBack.md)<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L52)

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

[DThemePickerTime](DThemePickerTime.md).[getBackgroundAlpha](DThemePickerTime.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L503)

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

[DThemePickerTime](DThemePickerTime.md).[getBackgroundColor](DThemePickerTime.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getBackgroundTexture](DThemePickerTime.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

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

[DThemePickerTime](DThemePickerTime.md).[getBorderAlign](DThemePickerTime.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

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

[DThemePickerTime](DThemePickerTime.md).[getBorderAlpha](DThemePickerTime.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L523)

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

[DThemePickerTime](DThemePickerTime.md).[getBorderColor](DThemePickerTime.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L516)

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

[DThemePickerTime](DThemePickerTime.md).[getBorderMask](DThemePickerTime.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getBorderTexture](DThemePickerTime.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:549](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L549)

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

[DThemePickerTime](DThemePickerTime.md).[getBorderWidth](DThemePickerTime.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getClearType](DThemePickerTime.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

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

[DThemePickerTime](DThemePickerTime.md).[getColor](DThemePickerTime.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getCornerMask](DThemePickerTime.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getCornerRadius](DThemePickerTime.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L574)

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

[DThemePickerTime](DThemePickerTime.md).[getCursor](DThemePickerTime.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getDateDecorator

▸ **getDateDecorator**(): [`DPickerDatetimeDateDecorator`](../index.md#dpickerdatetimedatedecorator)

#### Returns

[`DPickerDatetimeDateDecorator`](../index.md#dpickerdatetimedatedecorator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L51)

___

### getDayLabels

▸ **getDayLabels**(): [`DPickerDatetimeDayLabels`](../index.md#dpickerdatetimedaylabels)

#### Returns

[`DPickerDatetimeDayLabels`](../index.md#dpickerdatetimedaylabels)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L48)

___

### getDayStart

▸ **getDayStart**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L49)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getFontFamilly](DThemePickerTime.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getFontSize](DThemePickerTime.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getFontStyle](DThemePickerTime.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getFontVariant](DThemePickerTime.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getFontWeight](DThemePickerTime.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getHeight](DThemePickerTime.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L483)

___

### getHoursOptions

▸ **getHoursOptions**(): [`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getHoursOptions](DThemePickerTime.md#gethoursoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L33)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getInteractive](DThemePickerTime.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:633](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L633)

___

### getLabelFormatter

▸ **getLabelFormatter**(): [`DPickerDatetimeLabelFormatter`](../index.md#dpickerdatetimelabelformatter)

#### Returns

[`DPickerDatetimeLabelFormatter`](../index.md#dpickerdatetimelabelformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L50)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getLineHeight](DThemePickerTime.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getLowerBound

▸ **getLowerBound**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getLowerBound](DThemePickerTime.md#getlowerbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L37)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getMargin](DThemePickerTime.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L32)

___

### getMask

▸ **getMask**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getMask](DThemePickerTime.md#getmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L36)

___

### getMinutesOptions

▸ **getMinutesOptions**(): [`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getMinutesOptions](DThemePickerTime.md#getminutesoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L34)

___

### getNextButtonOptions

▸ **getNextButtonOptions**(): ``null`` \| [`DPickerDatetimeButtonNextOptions`](DPickerDatetimeButtonNextOptions.md)<`unknown`, [`DThemePickerDatetimeButtonNext`](DThemePickerDatetimeButtonNext.md)<`unknown`\>\>

#### Returns

``null`` \| [`DPickerDatetimeButtonNextOptions`](DPickerDatetimeButtonNextOptions.md)<`unknown`, [`DThemePickerDatetimeButtonNext`](DThemePickerDatetimeButtonNext.md)<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L53)

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

[DThemePickerTime](DThemePickerTime.md).[getOutlineAlign](DThemePickerTime.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

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

[DThemePickerTime](DThemePickerTime.md).[getOutlineAlpha](DThemePickerTime.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L594)

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

[DThemePickerTime](DThemePickerTime.md).[getOutlineColor](DThemePickerTime.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L587)

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

[DThemePickerTime](DThemePickerTime.md).[getOutlineMask](DThemePickerTime.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

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

[DThemePickerTime](DThemePickerTime.md).[getOutlineOffset](DThemePickerTime.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

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

[DThemePickerTime](DThemePickerTime.md).[getOutlineWidth](DThemePickerTime.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getPaddingBottom](DThemePickerTime.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L569)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getPaddingLeft](DThemePickerTime.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L554)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getPaddingRight](DThemePickerTime.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L559)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getPaddingTop](DThemePickerTime.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getSecondsOptions

▸ **getSecondsOptions**(): [`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getSecondsOptions](DThemePickerTime.md#getsecondsoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L35)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getShadow](DThemePickerTime.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getTitle](DThemePickerTime.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getUpperBound

▸ **getUpperBound**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getUpperBound](DThemePickerTime.md#getupperbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L39)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getWeight](DThemePickerTime.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getWidth](DThemePickerTime.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getX](DThemePickerTime.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L473)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[getY](DThemePickerTime.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L478)

___

### isLowerBoundInclusive

▸ **isLowerBoundInclusive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[isLowerBoundInclusive](DThemePickerTime.md#islowerboundinclusive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L38)

___

### isUpperBoundInclusive

▸ **isUpperBoundInclusive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[isUpperBoundInclusive](DThemePickerTime.md#isupperboundinclusive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L40)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[newShadow](DThemePickerTime.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L661)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemePickerTime](DThemePickerTime.md).[newShadowWeak](DThemePickerTime.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L666)

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

[DThemePickerTime](DThemePickerTime.md).[newState](DThemePickerTime.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L638)
