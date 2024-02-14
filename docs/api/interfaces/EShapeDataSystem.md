[Winter Cardinal UI - v0.407.0](../index.md) / EShapeDataSystem

# Interface: EShapeDataSystem

## Implemented by

- [`EShapeDataSystemImpl`](../classes/EShapeDataSystemImpl.md)

## Table of contents

### Methods

- [clear](EShapeDataSystem.md#clear)
- [contains](EShapeDataSystem.md#contains)
- [copy](EShapeDataSystem.md#copy)
- [deserialize](EShapeDataSystem.md#deserialize)
- [each](EShapeDataSystem.md#each)
- [get](EShapeDataSystem.md#get)
- [remove](EShapeDataSystem.md#remove)
- [serialize](EShapeDataSystem.md#serialize)
- [set](EShapeDataSystem.md#set)
- [size](EShapeDataSystem.md#size)

## Methods

### clear

▸ **clear**(): [`EShapeDataSystem`](EShapeDataSystem.md)

#### Returns

[`EShapeDataSystem`](EShapeDataSystem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L14)

___

### contains

▸ **contains**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L12)

___

### copy

▸ **copy**(`target`): [`EShapeDataSystem`](EShapeDataSystem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataSystem`](EShapeDataSystem.md) |

#### Returns

[`EShapeDataSystem`](EShapeDataSystem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L18)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L21)

___

### each

▸ **each**(`iteratee`): [`EShapeDataSystem`](EShapeDataSystem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`value`: `string`, `key`: `string`) => `boolean` \| `void` |

#### Returns

[`EShapeDataSystem`](EShapeDataSystem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L17)

___

### get

▸ **get**(`key`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L11)

___

### remove

▸ **remove**(`key`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L13)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L20)

___

### set

▸ **set**(`key`, `value`): [`EShapeDataSystem`](EShapeDataSystem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`EShapeDataSystem`](EShapeDataSystem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L10)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-system.ts#L15)
