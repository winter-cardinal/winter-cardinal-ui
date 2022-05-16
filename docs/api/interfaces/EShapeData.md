[Winter Cardinal UI - v0.165.0](../index.md) / EShapeData

# Interface: EShapeData

## Implemented by

- [`EShapeDataImpl`](../classes/EShapeDataImpl.md)

## Table of contents

### Properties

- [capacity](EShapeData.md#capacity)
- [format](EShapeData.md#format)
- [id](EShapeData.md#id)
- [initial](EShapeData.md#initial)
- [isChanged](EShapeData.md#ischanged)
- [nvalue](EShapeData.md#nvalue)
- [range](EShapeData.md#range)
- [time](EShapeData.md#time)
- [value](EShapeData.md#value)
- [values](EShapeData.md#values)

### Methods

- [add](EShapeData.md#add)
- [copy](EShapeData.md#copy)
- [deserialize](EShapeData.md#deserialize)
- [get](EShapeData.md#get)
- [indexOf](EShapeData.md#indexof)
- [remove](EShapeData.md#remove)
- [serialize](EShapeData.md#serialize)
- [set](EShapeData.md#set)
- [size](EShapeData.md#size)
- [swap](EShapeData.md#swap)

## Properties

### capacity

• **capacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L23)

___

### format

• `Readonly` **format**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L18)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L16)

___

### initial

• `Readonly` **initial**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L17)

___

### isChanged

• **isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L13)

___

### nvalue

• `Readonly` **nvalue**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L21)

___

### range

• `Readonly` **range**: [`EShapeDataValueRange`](EShapeDataValueRange.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L19)

___

### time

• **time**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L22)

___

### value

• **value**: `unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L20)

___

### values

• `Readonly` **values**: [`EShapeDataValue`](EShapeDataValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L12)

## Methods

### add

▸ **add**(`value`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](EShapeDataValue.md) |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L25)

___

### copy

▸ **copy**(`target`): [`EShapeData`](EShapeData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeData`](EShapeData.md) |

#### Returns

[`EShapeData`](EShapeData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L33)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L35)

___

### get

▸ **get**(`index`): ``null`` \| [`EShapeDataValue`](EShapeDataValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EShapeDataValue`](EShapeDataValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L28)

___

### indexOf

▸ **indexOf**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataValue`](EShapeDataValue.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L27)

___

### remove

▸ **remove**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L34)

___

### set

▸ **set**(`index`, `value`): ``null`` \| [`EShapeDataValue`](EShapeDataValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`EShapeDataValue`](EShapeDataValue.md) |

#### Returns

``null`` \| [`EShapeDataValue`](EShapeDataValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L26)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L30)

___

### swap

▸ **swap**(`indexA`, `indexB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexA` | `number` |
| `indexB` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L31)
