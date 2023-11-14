[Winter Cardinal UI - v0.374.0](../index.md) / EShapeDataMapping

# Interface: EShapeDataMapping

## Implemented by

- [`EShapeDataMappingImpl`](../classes/EShapeDataMappingImpl.md)

## Table of contents

### Properties

- [values](EShapeDataMapping.md#values)

### Methods

- [add](EShapeDataMapping.md#add)
- [addAll](EShapeDataMapping.md#addall)
- [clear](EShapeDataMapping.md#clear)
- [clearAndAdd](EShapeDataMapping.md#clearandadd)
- [clearAndAddAll](EShapeDataMapping.md#clearandaddall)
- [copy](EShapeDataMapping.md#copy)
- [deserialize](EShapeDataMapping.md#deserialize)
- [get](EShapeDataMapping.md#get)
- [indexOf](EShapeDataMapping.md#indexof)
- [remove](EShapeDataMapping.md#remove)
- [serialize](EShapeDataMapping.md#serialize)
- [set](EShapeDataMapping.md#set)
- [size](EShapeDataMapping.md#size)
- [swap](EShapeDataMapping.md#swap)

## Properties

### values

• `Readonly` **values**: [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L12)

## Methods

### add

▸ **add**(`value`, `index?`): [`EShapeDataMapping`](EShapeDataMapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue) |
| `index?` | `number` |

#### Returns

[`EShapeDataMapping`](EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L14)

___

### addAll

▸ **addAll**(`values`): [`EShapeDataMapping`](EShapeDataMapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)[] |

#### Returns

[`EShapeDataMapping`](EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L15)

___

### clear

▸ **clear**(): [`EShapeDataMapping`](EShapeDataMapping.md)

#### Returns

[`EShapeDataMapping`](EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L22)

___

### clearAndAdd

▸ **clearAndAdd**(`value`): [`EShapeDataMapping`](EShapeDataMapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue) |

#### Returns

[`EShapeDataMapping`](EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L16)

___

### clearAndAddAll

▸ **clearAndAddAll**(`values`): [`EShapeDataMapping`](EShapeDataMapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)[] |

#### Returns

[`EShapeDataMapping`](EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L17)

___

### copy

▸ **copy**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataMapping`](EShapeDataMapping.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L26)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L28)

___

### get

▸ **get**(`index`): ``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L19)

___

### indexOf

▸ **indexOf**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L18)

___

### remove

▸ **remove**(`index`): ``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L21)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L27)

___

### set

▸ **set**(`index`, `value`): ``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue) |

#### Returns

``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L20)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L23)

___

### swap

▸ **swap**(`indexA`, `indexB`): [`EShapeDataMapping`](EShapeDataMapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexA` | `number` |
| `indexB` | `number` |

#### Returns

[`EShapeDataMapping`](EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping.ts#L24)
