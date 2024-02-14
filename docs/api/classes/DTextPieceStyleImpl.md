[Winter Cardinal UI - v0.407.0](../index.md) / DTextPieceStyleImpl

# Class: DTextPieceStyleImpl

## Implements

- [`DTextPieceStyle`](../interfaces/DTextPieceStyle.md)

## Table of contents

### Constructors

- [constructor](DTextPieceStyleImpl.md#constructor)

### Properties

- [\_parent](DTextPieceStyleImpl.md#_parent)
- [\_style](DTextPieceStyleImpl.md#_style)

### Accessors

- [clipping](DTextPieceStyleImpl.md#clipping)
- [fitting](DTextPieceStyleImpl.md#fitting)
- [fontFamily](DTextPieceStyleImpl.md#fontfamily)
- [fontSize](DTextPieceStyleImpl.md#fontsize)
- [fontStyle](DTextPieceStyleImpl.md#fontstyle)
- [fontVariant](DTextPieceStyleImpl.md#fontvariant)
- [fontWeight](DTextPieceStyleImpl.md#fontweight)
- [lineHeight](DTextPieceStyleImpl.md#lineheight)
- [wordWrap](DTextPieceStyleImpl.md#wordwrap)

### Methods

- [onChange](DTextPieceStyleImpl.md#onchange)

## Constructors

### constructor

• **new DTextPieceStyleImpl**(`parent`, `style`): [`DTextPieceStyleImpl`](DTextPieceStyleImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |
| `style` | [`DDynamicTextStyle`](DDynamicTextStyle.md) |

#### Returns

[`DTextPieceStyleImpl`](DTextPieceStyleImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L18)

## Properties

### \_parent

• `Protected` **\_parent**: [`DApplicationTarget`](../interfaces/DApplicationTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L15)

___

### \_style

• `Protected` **\_style**: [`DDynamicTextStyle`](DDynamicTextStyle.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L16)

## Accessors

### clipping

• `get` **clipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[clipping](../interfaces/DTextPieceStyle.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L83)

• `set` **clipping**(`clipping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipping` | `boolean` |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[clipping](../interfaces/DTextPieceStyle.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L87)

___

### fitting

• `get` **fitting**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fitting](../interfaces/DTextPieceStyle.md#fitting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L95)

• `set` **fitting**(`fitting`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fitting` | `boolean` |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fitting](../interfaces/DTextPieceStyle.md#fitting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L99)

___

### fontFamily

• `get` **fontFamily**(): `string`

#### Returns

`string`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontFamily](../interfaces/DTextPieceStyle.md#fontfamily)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L23)

• `set` **fontFamily**(`fontFamily`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontFamily` | `string` |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontFamily](../interfaces/DTextPieceStyle.md#fontfamily)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L27)

___

### fontSize

• `get` **fontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontSize](../interfaces/DTextPieceStyle.md#fontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L35)

• `set` **fontSize**(`fontSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `number` |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontSize](../interfaces/DTextPieceStyle.md#fontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L39)

___

### fontStyle

• `get` **fontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontStyle](../interfaces/DTextPieceStyle.md#fontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L47)

• `set` **fontStyle**(`fontStyle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontStyle` | [`DFontStyle`](../index.md#dfontstyle) |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontStyle](../interfaces/DTextPieceStyle.md#fontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L51)

___

### fontVariant

• `get` **fontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontVariant](../interfaces/DTextPieceStyle.md#fontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L59)

• `set` **fontVariant**(`fontVariant`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontVariant` | [`DFontVariant`](../index.md#dfontvariant) |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontVariant](../interfaces/DTextPieceStyle.md#fontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L63)

___

### fontWeight

• `get` **fontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontWeight](../interfaces/DTextPieceStyle.md#fontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L71)

• `set` **fontWeight**(`fontWeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontWeight` | [`DFontWeight`](../index.md#dfontweight) |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[fontWeight](../interfaces/DTextPieceStyle.md#fontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L75)

___

### lineHeight

• `get` **lineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[lineHeight](../interfaces/DTextPieceStyle.md#lineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L120)

• `set` **lineHeight**(`lineHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[lineHeight](../interfaces/DTextPieceStyle.md#lineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L124)

___

### wordWrap

• `get` **wordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[wordWrap](../interfaces/DTextPieceStyle.md#wordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L107)

• `set` **wordWrap**(`wordWrap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordWrap` | ``"NONE"`` \| ``"NORMAL"`` \| ``"BREAK_ALL"`` \| [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1) |

#### Returns

`void`

#### Implementation of

[DTextPieceStyle](../interfaces/DTextPieceStyle.md).[wordWrap](../interfaces/DTextPieceStyle.md#wordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L111)

## Methods

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece-style-impl.ts#L132)
