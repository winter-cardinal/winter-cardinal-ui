[Winter Cardinal UI - v0.310.1](../index.md) / DThemePickerDate

# Interface: DThemePickerDate

[DBase](../classes/DBase.md) theme.

## Hierarchy

- [`DThemePickerDatetime`](DThemePickerDatetime.md)

  ↳ **`DThemePickerDate`**

## Implemented by

- [`DThemeDarkPickerDate`](../classes/DThemeDarkPickerDate.md)
- [`DThemeWhitePickerDate`](../classes/DThemeWhitePickerDate.md)

## Table of contents

### Methods

- [getAlpha](DThemePickerDate.md#getalpha)
- [getBackButtonOptions](DThemePickerDate.md#getbackbuttonoptions)
- [getBackgroundAlpha](DThemePickerDate.md#getbackgroundalpha)
- [getBackgroundColor](DThemePickerDate.md#getbackgroundcolor)
- [getBackgroundTexture](DThemePickerDate.md#getbackgroundtexture)
- [getBorderAlign](DThemePickerDate.md#getborderalign)
- [getBorderAlpha](DThemePickerDate.md#getborderalpha)
- [getBorderColor](DThemePickerDate.md#getbordercolor)
- [getBorderMask](DThemePickerDate.md#getbordermask)
- [getBorderTexture](DThemePickerDate.md#getbordertexture)
- [getBorderWidth](DThemePickerDate.md#getborderwidth)
- [getClearType](DThemePickerDate.md#getcleartype)
- [getColor](DThemePickerDate.md#getcolor)
- [getCornerMask](DThemePickerDate.md#getcornermask)
- [getCornerRadius](DThemePickerDate.md#getcornerradius)
- [getCursor](DThemePickerDate.md#getcursor)
- [getDateDecorator](DThemePickerDate.md#getdatedecorator)
- [getDayLabels](DThemePickerDate.md#getdaylabels)
- [getDayStart](DThemePickerDate.md#getdaystart)
- [getFontFamilly](DThemePickerDate.md#getfontfamilly)
- [getFontSize](DThemePickerDate.md#getfontsize)
- [getFontStyle](DThemePickerDate.md#getfontstyle)
- [getFontVariant](DThemePickerDate.md#getfontvariant)
- [getFontWeight](DThemePickerDate.md#getfontweight)
- [getHeight](DThemePickerDate.md#getheight)
- [getHoursOptions](DThemePickerDate.md#gethoursoptions)
- [getInteractive](DThemePickerDate.md#getinteractive)
- [getLabelFormatter](DThemePickerDate.md#getlabelformatter)
- [getLineHeight](DThemePickerDate.md#getlineheight)
- [getLowerBound](DThemePickerDate.md#getlowerbound)
- [getMargin](DThemePickerDate.md#getmargin)
- [getMask](DThemePickerDate.md#getmask)
- [getMinutesOptions](DThemePickerDate.md#getminutesoptions)
- [getNextButtonOptions](DThemePickerDate.md#getnextbuttonoptions)
- [getOutlineAlign](DThemePickerDate.md#getoutlinealign)
- [getOutlineAlpha](DThemePickerDate.md#getoutlinealpha)
- [getOutlineColor](DThemePickerDate.md#getoutlinecolor)
- [getOutlineMask](DThemePickerDate.md#getoutlinemask)
- [getOutlineOffset](DThemePickerDate.md#getoutlineoffset)
- [getOutlineWidth](DThemePickerDate.md#getoutlinewidth)
- [getPaddingBottom](DThemePickerDate.md#getpaddingbottom)
- [getPaddingLeft](DThemePickerDate.md#getpaddingleft)
- [getPaddingRight](DThemePickerDate.md#getpaddingright)
- [getPaddingTop](DThemePickerDate.md#getpaddingtop)
- [getSecondsOptions](DThemePickerDate.md#getsecondsoptions)
- [getShadow](DThemePickerDate.md#getshadow)
- [getTitle](DThemePickerDate.md#gettitle)
- [getUpperBound](DThemePickerDate.md#getupperbound)
- [getWeight](DThemePickerDate.md#getweight)
- [getWidth](DThemePickerDate.md#getwidth)
- [getX](DThemePickerDate.md#getx)
- [getY](DThemePickerDate.md#gety)
- [isLowerBoundInclusive](DThemePickerDate.md#islowerboundinclusive)
- [isUpperBoundInclusive](DThemePickerDate.md#isupperboundinclusive)
- [newShadow](DThemePickerDate.md#newshadow)
- [newShadowWeak](DThemePickerDate.md#newshadowweak)
- [newState](DThemePickerDate.md#newstate)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getAlpha](DThemePickerDatetime.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackButtonOptions

▸ **getBackButtonOptions**(): ``null`` \| [`DPickerDatetimeButtonBackOptions`](DPickerDatetimeButtonBackOptions.md)<`unknown`, [`DThemePickerDatetimeButtonBack`](DThemePickerDatetimeButtonBack.md)<`unknown`\>\>

#### Returns

``null`` \| [`DPickerDatetimeButtonBackOptions`](DPickerDatetimeButtonBackOptions.md)<`unknown`, [`DThemePickerDatetimeButtonBack`](DThemePickerDatetimeButtonBack.md)<`unknown`\>\>

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getBackButtonOptions](DThemePickerDatetime.md#getbackbuttonoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L52)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getBackgroundAlpha](DThemePickerDatetime.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L552)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getBackgroundColor](DThemePickerDatetime.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L545)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getBackgroundTexture](DThemePickerDatetime.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L557)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getBorderAlign](DThemePickerDatetime.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L586)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getBorderAlpha](DThemePickerDatetime.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L572)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getBorderColor](DThemePickerDatetime.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L565)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getBorderMask](DThemePickerDatetime.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getBorderTexture](DThemePickerDatetime.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L598)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getBorderWidth](DThemePickerDatetime.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getClearType](DThemePickerDatetime.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L698)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getColor](DThemePickerDatetime.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getCornerMask](DThemePickerDatetime.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getCornerRadius](DThemePickerDatetime.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L623)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getCursor](DThemePickerDatetime.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L720)

___

### getDateDecorator

▸ **getDateDecorator**(): [`DPickerDatetimeDateDecorator`](../index.md#dpickerdatetimedatedecorator)

#### Returns

[`DPickerDatetimeDateDecorator`](../index.md#dpickerdatetimedatedecorator)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getDateDecorator](DThemePickerDatetime.md#getdatedecorator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L51)

___

### getDayLabels

▸ **getDayLabels**(): [`DPickerDatetimeDayLabels`](../index.md#dpickerdatetimedaylabels)

#### Returns

[`DPickerDatetimeDayLabels`](../index.md#dpickerdatetimedaylabels)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getDayLabels](DThemePickerDatetime.md#getdaylabels)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L48)

___

### getDayStart

▸ **getDayStart**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getDayStart](DThemePickerDatetime.md#getdaystart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L49)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getFontFamilly](DThemePickerDatetime.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getFontSize](DThemePickerDatetime.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getFontStyle](DThemePickerDatetime.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getFontVariant](DThemePickerDatetime.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getFontWeight](DThemePickerDatetime.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getHeight](DThemePickerDatetime.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L532)

___

### getHoursOptions

▸ **getHoursOptions**(): [`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getHoursOptions](DThemePickerDatetime.md#gethoursoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L33)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getInteractive](DThemePickerDatetime.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L682)

___

### getLabelFormatter

▸ **getLabelFormatter**(): [`DPickerDatetimeLabelFormatter`](../index.md#dpickerdatetimelabelformatter)

#### Returns

[`DPickerDatetimeLabelFormatter`](../index.md#dpickerdatetimelabelformatter)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getLabelFormatter](DThemePickerDatetime.md#getlabelformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L50)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getLineHeight](DThemePickerDatetime.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getLowerBound

▸ **getLowerBound**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getLowerBound](DThemePickerDatetime.md#getlowerbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L37)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getMargin](DThemePickerDatetime.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L32)

___

### getMask

▸ **getMask**(): `number`

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getMask](DThemePickerDatetime.md#getmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L36)

___

### getMinutesOptions

▸ **getMinutesOptions**(): [`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getMinutesOptions](DThemePickerDatetime.md#getminutesoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L34)

___

### getNextButtonOptions

▸ **getNextButtonOptions**(): ``null`` \| [`DPickerDatetimeButtonNextOptions`](DPickerDatetimeButtonNextOptions.md)<`unknown`, [`DThemePickerDatetimeButtonNext`](DThemePickerDatetimeButtonNext.md)<`unknown`\>\>

#### Returns

``null`` \| [`DPickerDatetimeButtonNextOptions`](DPickerDatetimeButtonNextOptions.md)<`unknown`, [`DThemePickerDatetimeButtonNext`](DThemePickerDatetimeButtonNext.md)<`unknown`\>\>

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getNextButtonOptions](DThemePickerDatetime.md#getnextbuttonoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L53)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getOutlineAlign](DThemePickerDatetime.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L664)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getOutlineAlpha](DThemePickerDatetime.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L643)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getOutlineColor](DThemePickerDatetime.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L636)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getOutlineMask](DThemePickerDatetime.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L671)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getOutlineOffset](DThemePickerDatetime.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L657)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[getOutlineWidth](DThemePickerDatetime.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L650)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getPaddingBottom](DThemePickerDatetime.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L618)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getPaddingLeft](DThemePickerDatetime.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:603](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L603)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getPaddingRight](DThemePickerDatetime.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getPaddingTop](DThemePickerDatetime.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:613](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L613)

___

### getSecondsOptions

▸ **getSecondsOptions**(): [`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](DInputIntegerOptions.md)<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getSecondsOptions](DThemePickerDatetime.md#getsecondsoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L35)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getShadow](DThemePickerDatetime.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L677)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getTitle](DThemePickerDatetime.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L692)

___

### getUpperBound

▸ **getUpperBound**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getUpperBound](DThemePickerDatetime.md#getupperbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L39)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getWeight](DThemePickerDatetime.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L705)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getWidth](DThemePickerDatetime.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getX](DThemePickerDatetime.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L522)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[getY](DThemePickerDatetime.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L527)

___

### isLowerBoundInclusive

▸ **isLowerBoundInclusive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[isLowerBoundInclusive](DThemePickerDatetime.md#islowerboundinclusive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L38)

___

### isUpperBoundInclusive

▸ **isUpperBoundInclusive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[isUpperBoundInclusive](DThemePickerDatetime.md#isupperboundinclusive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-picker-time.ts#L40)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[newShadow](DThemePickerDatetime.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:710](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L710)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemePickerDatetime](DThemePickerDatetime.md).[newShadowWeak](DThemePickerDatetime.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:715](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L715)

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

[DThemePickerDatetime](DThemePickerDatetime.md).[newState](DThemePickerDatetime.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L687)
