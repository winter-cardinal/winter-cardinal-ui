[Winter Cardinal UI - v0.407.0](../index.md) / EShapeDataMappingImpl

# Class: EShapeDataMappingImpl

## Implements

- [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

## Table of contents

### Constructors

- [constructor](EShapeDataMappingImpl.md#constructor)

### Properties

- [values](EShapeDataMappingImpl.md#values)

### Methods

- [add](EShapeDataMappingImpl.md#add)
- [addAll](EShapeDataMappingImpl.md#addall)
- [clear](EShapeDataMappingImpl.md#clear)
- [clearAndAdd](EShapeDataMappingImpl.md#clearandadd)
- [clearAndAddAll](EShapeDataMappingImpl.md#clearandaddall)
- [copy](EShapeDataMappingImpl.md#copy)
- [deserialize](EShapeDataMappingImpl.md#deserialize)
- [get](EShapeDataMappingImpl.md#get)
- [indexOf](EShapeDataMappingImpl.md#indexof)
- [remove](EShapeDataMappingImpl.md#remove)
- [serialize](EShapeDataMappingImpl.md#serialize)
- [set](EShapeDataMappingImpl.md#set)
- [size](EShapeDataMappingImpl.md#size)
- [swap](EShapeDataMappingImpl.md#swap)

## Constructors

### constructor

• **new EShapeDataMappingImpl**(): [`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Returns

[`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L14)

## Properties

### values

• **values**: [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)[]

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[values](../interfaces/EShapeDataMapping.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L12)

## Methods

### add

▸ **add**(`value`, `index?`): [`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue) |
| `index?` | `number` |

#### Returns

[`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[add](../interfaces/EShapeDataMapping.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L18)

___

### addAll

▸ **addAll**(`values`): [`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)[] |

#### Returns

[`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[addAll](../interfaces/EShapeDataMapping.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L28)

___

### clear

▸ **clear**(): [`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Returns

[`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[clear](../interfaces/EShapeDataMapping.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L96)

___

### clearAndAdd

▸ **clearAndAdd**(`value`): [`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue) |

#### Returns

[`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[clearAndAdd](../interfaces/EShapeDataMapping.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L36)

___

### clearAndAddAll

▸ **clearAndAddAll**(`values`): [`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)[] |

#### Returns

[`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[clearAndAddAll](../interfaces/EShapeDataMapping.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L42)

___

### copy

▸ **copy**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md) |

#### Returns

`void`

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[copy](../interfaces/EShapeDataMapping.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L113)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[deserialize](../interfaces/EShapeDataMapping.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L137)

___

### get

▸ **get**(`index`): ``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[get](../interfaces/EShapeDataMapping.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L70)

___

### indexOf

▸ **indexOf**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue) |

#### Returns

`number`

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[indexOf](../interfaces/EShapeDataMapping.md#indexof)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L48)

___

### remove

▸ **remove**(`index`): ``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EShapeDataMappingValue`](../index.md#eshapedatamappingvalue)

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[remove](../interfaces/EShapeDataMapping.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L88)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[serialize](../interfaces/EShapeDataMapping.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L117)

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

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[set](../interfaces/EShapeDataMapping.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L78)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[size](../interfaces/EShapeDataMapping.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L101)

___

### swap

▸ **swap**(`indexA`, `indexB`): [`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexA` | `number` |
| `indexB` | `number` |

#### Returns

[`EShapeDataMappingImpl`](EShapeDataMappingImpl.md)

#### Implementation of

[EShapeDataMapping](../interfaces/EShapeDataMapping.md).[swap](../interfaces/EShapeDataMapping.md#swap)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapping-impl.ts#L105)
