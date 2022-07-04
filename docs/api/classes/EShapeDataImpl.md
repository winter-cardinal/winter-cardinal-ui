[Winter Cardinal UI - v0.194.0](../index.md) / EShapeDataImpl

# Class: EShapeDataImpl

## Implements

- [`EShapeData`](../interfaces/EShapeData.md)

## Table of contents

### Constructors

- [constructor](EShapeDataImpl.md#constructor)

### Properties

- [\_isChanged](EShapeDataImpl.md#_ischanged)
- [\_mapping](EShapeDataImpl.md#_mapping)
- [\_private](EShapeDataImpl.md#_private)
- [\_values](EShapeDataImpl.md#_values)

### Accessors

- [capacity](EShapeDataImpl.md#capacity)
- [format](EShapeDataImpl.md#format)
- [id](EShapeDataImpl.md#id)
- [initial](EShapeDataImpl.md#initial)
- [isChanged](EShapeDataImpl.md#ischanged)
- [mapping](EShapeDataImpl.md#mapping)
- [nvalue](EShapeDataImpl.md#nvalue)
- [private](EShapeDataImpl.md#private)
- [range](EShapeDataImpl.md#range)
- [scope](EShapeDataImpl.md#scope)
- [time](EShapeDataImpl.md#time)
- [type](EShapeDataImpl.md#type)
- [value](EShapeDataImpl.md#value)
- [values](EShapeDataImpl.md#values)

### Methods

- [add](EShapeDataImpl.md#add)
- [copy](EShapeDataImpl.md#copy)
- [deserialize](EShapeDataImpl.md#deserialize)
- [get](EShapeDataImpl.md#get)
- [getMapping](EShapeDataImpl.md#getmapping)
- [getPrivate](EShapeDataImpl.md#getprivate)
- [indexOf](EShapeDataImpl.md#indexof)
- [isMapped](EShapeDataImpl.md#ismapped)
- [newMapping](EShapeDataImpl.md#newmapping)
- [newPrivate](EShapeDataImpl.md#newprivate)
- [remove](EShapeDataImpl.md#remove)
- [serialize](EShapeDataImpl.md#serialize)
- [set](EShapeDataImpl.md#set)
- [size](EShapeDataImpl.md#size)
- [swap](EShapeDataImpl.md#swap)

## Constructors

### constructor

• **new EShapeDataImpl**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L30)

## Properties

### \_isChanged

• `Protected` **\_isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L26)

___

### \_mapping

• `Protected` `Optional` **\_mapping**: [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L27)

___

### \_private

• `Protected` `Optional` **\_private**: [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L28)

___

### \_values

• `Protected` **\_values**: [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L25)

## Accessors

### capacity

• `get` **capacity**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[capacity](../interfaces/EShapeData.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L133)

• `set` **capacity**(`capacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[capacity](../interfaces/EShapeData.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L141)

___

### format

• `get` **format**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[format](../interfaces/EShapeData.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L79)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[id](../interfaces/EShapeData.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L47)

___

### initial

• `get` **initial**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[initial](../interfaces/EShapeData.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L71)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[isChanged](../interfaces/EShapeData.md#ischanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L39)

• `set` **isChanged**(`isChanged`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isChanged` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[isChanged](../interfaces/EShapeData.md#ischanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L43)

___

### mapping

• `get` **mapping**(): [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

[`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[mapping](../interfaces/EShapeData.md#mapping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L148)

___

### nvalue

• `get` **nvalue**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[nvalue](../interfaces/EShapeData.md#nvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L110)

___

### private

• `get` **private**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[private](../interfaces/EShapeData.md#private)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L165)

___

### range

• `get` **range**(): [`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Returns

[`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[range](../interfaces/EShapeData.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L87)

___

### scope

• `get` **scope**(): [`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Returns

[`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[scope](../interfaces/EShapeData.md#scope)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L63)

___

### time

• `get` **time**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[time](../interfaces/EShapeData.md#time)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L118)

• `set` **time**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[time](../interfaces/EShapeData.md#time)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L126)

___

### type

• `get` **type**(): [`EShapeDataValueType`](../index.md#eshapedatavaluetype)

#### Returns

[`EShapeDataValueType`](../index.md#eshapedatavaluetype)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[type](../interfaces/EShapeData.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L55)

___

### value

• `get` **value**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[value](../interfaces/EShapeData.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L95)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`void`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[value](../interfaces/EShapeData.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L103)

___

### values

• `get` **values**(): [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Returns

[`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[values](../interfaces/EShapeData.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L35)

## Methods

### add

▸ **add**(`value`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |
| `index?` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[add](../interfaces/EShapeData.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L182)

___

### copy

▸ **copy**(`target`): [`EShapeDataImpl`](EShapeDataImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeData`](../interfaces/EShapeData.md) |

#### Returns

[`EShapeDataImpl`](EShapeDataImpl.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[copy](../interfaces/EShapeData.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L258)

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

[EShapeData](../interfaces/EShapeData.md).[deserialize](../interfaces/EShapeData.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L295)

___

### get

▸ **get**(`index`): ``null`` \| [`EShapeDataValue`](../interfaces/EShapeDataValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EShapeDataValue`](../interfaces/EShapeDataValue.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[get](../interfaces/EShapeData.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L239)

___

### getMapping

▸ **getMapping**(): `undefined` \| [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

`undefined` \| [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[getMapping](../interfaces/EShapeData.md#getmapping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L161)

___

### getPrivate

▸ **getPrivate**(): `undefined` \| [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

`undefined` \| [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[getPrivate](../interfaces/EShapeData.md#getprivate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L178)

___

### indexOf

▸ **indexOf**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[indexOf](../interfaces/EShapeData.md#indexof)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L211)

___

### isMapped

▸ `Protected` **isMapped**(`target`): target is DDiagramSerializedDataWithMapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DDiagramSerializedData`](../index.md#ddiagramserializeddata) |

#### Returns

target is DDiagramSerializedDataWithMapping

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:329](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L329)

___

### newMapping

▸ `Protected` **newMapping**(): [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

[`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L157)

___

### newPrivate

▸ `Protected` **newPrivate**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L174)

___

### remove

▸ **remove**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[remove](../interfaces/EShapeData.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L204)

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

[EShapeData](../interfaces/EShapeData.md).[serialize](../interfaces/EShapeData.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:279](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L279)

___

### set

▸ **set**(`index`, `value`): ``null`` \| [`EShapeDataValue`](../interfaces/EShapeDataValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |

#### Returns

``null`` \| [`EShapeDataValue`](../interfaces/EShapeDataValue.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[set](../interfaces/EShapeData.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L192)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[size](../interfaces/EShapeData.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L247)

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

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[swap](../interfaces/EShapeData.md#swap)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L251)
