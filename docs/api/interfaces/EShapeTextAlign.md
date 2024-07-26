[Winter Cardinal UI - v0.442.0](../index.md) / EShapeTextAlign

# Interface: EShapeTextAlign

## Hierarchy

- [`EShapeTextAlignLike`](EShapeTextAlignLike.md)

  ↳ **`EShapeTextAlign`**

## Implemented by

- [`EShapeTextAlignImpl`](../classes/EShapeTextAlignImpl.md)

## Table of contents

### Properties

- [horizontal](EShapeTextAlign.md#horizontal)
- [vertical](EShapeTextAlign.md#vertical)

### Methods

- [copy](EShapeTextAlign.md#copy)
- [deserialize](EShapeTextAlign.md#deserialize)
- [serialize](EShapeTextAlign.md#serialize)
- [set](EShapeTextAlign.md#set)
- [toObject](EShapeTextAlign.md#toobject)

## Properties

### horizontal

• **horizontal**: [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal)

#### Inherited from

[EShapeTextAlignLike](EShapeTextAlignLike.md).[horizontal](EShapeTextAlignLike.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts#L12)

___

### vertical

• **vertical**: [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)

#### Inherited from

[EShapeTextAlignLike](EShapeTextAlignLike.md).[vertical](EShapeTextAlignLike.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts#L13)

## Methods

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`\<[`EShapeTextAlignLike`](EShapeTextAlignLike.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts#L17)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](../classes/EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts#L21)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts#L20)

___

### set

▸ **set**(`horizontal?`, `vertical?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal?` | [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal) |
| `vertical?` | [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts#L18)

___

### toObject

▸ **toObject**(): [`EShapeTextAlignLike`](EShapeTextAlignLike.md)

#### Returns

[`EShapeTextAlignLike`](EShapeTextAlignLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-align.ts#L19)
