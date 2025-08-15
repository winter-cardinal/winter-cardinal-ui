[Winter Cardinal UI - v0.457.0](../index.md) / DThemeTextPiece

# Interface: DThemeTextPiece\<VALUE\>

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Hierarchy

- [`DThemeFont`](DThemeFont.md)

  ↳ **`DThemeTextPiece`**

  ↳↳ [`DThemeTextBase`](DThemeTextBase.md)

## Table of contents

### Methods

- [getAlpha](DThemeTextPiece.md#getalpha)
- [getColor](DThemeTextPiece.md#getcolor)
- [getFontFamilly](DThemeTextPiece.md#getfontfamilly)
- [getFontSize](DThemeTextPiece.md#getfontsize)
- [getFontStyle](DThemeTextPiece.md#getfontstyle)
- [getFontVariant](DThemeTextPiece.md#getfontvariant)
- [getFontWeight](DThemeTextPiece.md#getfontweight)
- [getLineHeight](DThemeTextPiece.md#getlineheight)
- [getTextAlignHorizontal](DThemeTextPiece.md#gettextalignhorizontal)
- [getTextAlignVertical](DThemeTextPiece.md#gettextalignvertical)
- [getTextFormatter](DThemeTextPiece.md#gettextformatter)
- [getTextStyleClipping](DThemeTextPiece.md#gettextstyleclipping)
- [getTextStyleFitting](DThemeTextPiece.md#gettextstylefitting)
- [getTextStyleWordWrap](DThemeTextPiece.md#gettextstylewordwrap)
- [getTextValue](DThemeTextPiece.md#gettextvalue)
- [isOverflowMaskEnabled](DThemeTextPiece.md#isoverflowmaskenabled)
- [newTextValue](DThemeTextPiece.md#newtextvalue)

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

[DThemeFont](DThemeFont.md).[getAlpha](DThemeFont.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

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

[DThemeFont](DThemeFont.md).[getColor](DThemeFont.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeFont](DThemeFont.md).[getFontFamilly](DThemeFont.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeFont](DThemeFont.md).[getFontSize](DThemeFont.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeFont](DThemeFont.md).[getFontStyle](DThemeFont.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeFont](DThemeFont.md).[getFontVariant](DThemeFont.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeFont](DThemeFont.md).[getFontWeight](DThemeFont.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeFont](DThemeFont.md).[getLineHeight](DThemeFont.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getTextAlignHorizontal

▸ **getTextAlignHorizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L46)

___

### getTextAlignVertical

▸ **getTextAlignVertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L45)

___

### getTextFormatter

▸ **getTextFormatter**(): [`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Returns

[`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L29)

___

### getTextStyleClipping

▸ **getTextStyleClipping**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L47)

___

### getTextStyleFitting

▸ **getTextStyleFitting**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L48)

___

### getTextStyleWordWrap

▸ **getTextStyleWordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L49)

___

### getTextValue

▸ **getTextValue**(`state`): `undefined` \| `VALUE`

Returns a text value.
Called to get a text vale if there is no text value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`undefined` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L43)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L50)

___

### newTextValue

▸ **newTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

Returns a new text value.
Called to initialize a text value if a text value is not given.

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L35)
