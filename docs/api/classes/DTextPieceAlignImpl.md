[Winter Cardinal UI - v0.414.0](../index.md) / DTextPieceAlignImpl

# Class: DTextPieceAlignImpl\<VALUE\>

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Implements

- [`DTextPieceAlign`](../interfaces/DTextPieceAlign.md)

## Table of contents

### Constructors

- [constructor](DTextPieceAlignImpl.md#constructor)

### Properties

- [\_horizontal](DTextPieceAlignImpl.md#_horizontal)
- [\_parent](DTextPieceAlignImpl.md#_parent)
- [\_vertical](DTextPieceAlignImpl.md#_vertical)

### Accessors

- [horizontal](DTextPieceAlignImpl.md#horizontal)
- [vertical](DTextPieceAlignImpl.md#vertical)

### Methods

- [onChange](DTextPieceAlignImpl.md#onchange)
- [set](DTextPieceAlignImpl.md#set)

## Constructors

### constructor

• **new DTextPieceAlignImpl**\<`VALUE`\>(`parent`, `theme`, `options?`): [`DTextPieceAlignImpl`](DTextPieceAlignImpl.md)\<`VALUE`\>

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTextPieceAlignImplParent`](../interfaces/DTextPieceAlignImplParent.md) |
| `theme` | [`DThemeTextPiece`](../interfaces/DThemeTextPiece.md)\<`VALUE`\> |
| `options?` | [`DTextPieceTextAlignOptions`](../interfaces/DTextPieceTextAlignOptions.md) |

#### Returns

[`DTextPieceAlignImpl`](DTextPieceAlignImpl.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L18)

## Properties

### \_horizontal

• `Protected` **\_horizontal**: [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L16)

___

### \_parent

• `Protected` **\_parent**: [`DTextPieceAlignImplParent`](../interfaces/DTextPieceAlignImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L14)

___

### \_vertical

• `Protected` **\_vertical**: [`DAlignVertical`](../index.md#dalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L15)

## Accessors

### horizontal

• `get` **horizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DTextPieceAlign](../interfaces/DTextPieceAlign.md).[horizontal](../interfaces/DTextPieceAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L43)

• `set` **horizontal**(`horizontal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | ``"RIGHT"`` \| ``"LEFT"`` \| ``"CENTER"`` \| [`DAlignHorizontal`](../index.md#dalignhorizontal) |

#### Returns

`void`

#### Implementation of

[DTextPieceAlign](../interfaces/DTextPieceAlign.md).[horizontal](../interfaces/DTextPieceAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L47)

___

### vertical

• `get` **vertical**(): [`DAlignVertical`](../index.md#dalignvertical)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical)

#### Implementation of

[DTextPieceAlign](../interfaces/DTextPieceAlign.md).[vertical](../interfaces/DTextPieceAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L31)

• `set` **vertical**(`vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical` | ``"TOP"`` \| ``"BOTTOM"`` \| ``"MIDDLE"`` \| [`DAlignVertical`](../index.md#dalignvertical) |

#### Returns

`void`

#### Implementation of

[DTextPieceAlign](../interfaces/DTextPieceAlign.md).[vertical](../interfaces/DTextPieceAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L35)

## Methods

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L83)

___

### set

▸ **set**(`vertical?`, `horizontal?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical?` | ``"TOP"`` \| ``"BOTTOM"`` \| ``"MIDDLE"`` \| [`DAlignVertical`](../index.md#dalignvertical) |
| `horizontal?` | ``"RIGHT"`` \| ``"LEFT"`` \| ``"CENTER"`` \| [`DAlignHorizontal`](../index.md#dalignhorizontal) |

#### Returns

`this`

#### Implementation of

[DTextPieceAlign](../interfaces/DTextPieceAlign.md).[set](../interfaces/DTextPieceAlign.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-align-impl.ts#L55)
