[Winter Cardinal UI - v0.442.0](../index.md) / EShapeTextOffset

# Interface: EShapeTextOffset

## Hierarchy

- [`EShapeTextOffsetLike`](EShapeTextOffsetLike.md)

  ↳ **`EShapeTextOffset`**

## Implemented by

- [`EShapeTextOffsetImpl`](../classes/EShapeTextOffsetImpl.md)

## Table of contents

### Properties

- [horizontal](EShapeTextOffset.md#horizontal)
- [vertical](EShapeTextOffset.md#vertical)

### Methods

- [copy](EShapeTextOffset.md#copy)
- [deserialize](EShapeTextOffset.md#deserialize)
- [serialize](EShapeTextOffset.md#serialize)
- [set](EShapeTextOffset.md#set)
- [toObject](EShapeTextOffset.md#toobject)

## Properties

### horizontal

• **horizontal**: `number`

#### Inherited from

[EShapeTextOffsetLike](EShapeTextOffsetLike.md).[horizontal](EShapeTextOffsetLike.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts#L10)

___

### vertical

• **vertical**: `number`

#### Inherited from

[EShapeTextOffsetLike](EShapeTextOffsetLike.md).[vertical](EShapeTextOffsetLike.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts#L11)

## Methods

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`\<[`EShapeTextOffsetLike`](EShapeTextOffsetLike.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts#L15)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts#L19)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts#L18)

___

### set

▸ **set**(`horizontal?`, `vertical?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal?` | `number` |
| `vertical?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts#L16)

___

### toObject

▸ **toObject**(): [`EShapeTextOffsetLike`](EShapeTextOffsetLike.md)

#### Returns

[`EShapeTextOffsetLike`](EShapeTextOffsetLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-offset.ts#L17)
