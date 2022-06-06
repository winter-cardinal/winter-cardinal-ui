[Winter Cardinal UI - v0.179.0](../index.md) / EShapeData

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
- [mapping](EShapeData.md#mapping)
- [nvalue](EShapeData.md#nvalue)
- [private](EShapeData.md#private)
- [range](EShapeData.md#range)
- [scope](EShapeData.md#scope)
- [time](EShapeData.md#time)
- [type](EShapeData.md#type)
- [value](EShapeData.md#value)
- [values](EShapeData.md#values)

### Methods

- [add](EShapeData.md#add)
- [copy](EShapeData.md#copy)
- [deserialize](EShapeData.md#deserialize)
- [get](EShapeData.md#get)
- [getMapping](EShapeData.md#getmapping)
- [getPrivate](EShapeData.md#getprivate)
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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L29)

___

### format

• `Readonly` **format**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L24)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L20)

___

### initial

• `Readonly` **initial**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L23)

___

### isChanged

• **isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L17)

___

### mapping

• `Readonly` **mapping**: [`EShapeDataMapping`](EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L32)

___

### nvalue

• `Readonly` **nvalue**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L27)

___

### private

• `Readonly` **private**: [`EShapeDataScoped`](EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L36)

___

### range

• `Readonly` **range**: [`EShapeDataValueRange`](EShapeDataValueRange.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L25)

___

### scope

• `Readonly` **scope**: [`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L22)

___

### time

• **time**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L28)

___

### type

• `Readonly` **type**: [`EShapeDataValueType`](../index.md#eshapedatavaluetype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L21)

___

### value

• **value**: `unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L26)

___

### values

• `Readonly` **values**: [`EShapeDataValue`](EShapeDataValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L40)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L48)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L50)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L43)

___

### getMapping

▸ **getMapping**(): `undefined` \| [`EShapeDataMapping`](EShapeDataMapping.md)

#### Returns

`undefined` \| [`EShapeDataMapping`](EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L33)

___

### getPrivate

▸ **getPrivate**(): `undefined` \| [`EShapeDataScoped`](EShapeDataScoped.md)

#### Returns

`undefined` \| [`EShapeDataScoped`](EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L37)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L42)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L44)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L49)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L41)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L45)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data.ts#L46)
