[Winter Cardinal UI - v0.179.0](../index.md) / EShapeDataValueImpl

# Class: EShapeDataValueImpl

## Implements

- [`EShapeDataValue`](../interfaces/EShapeDataValue.md)

## Table of contents

### Constructors

- [constructor](EShapeDataValueImpl.md#constructor)

### Properties

- [\_capacity](EShapeDataValueImpl.md#_capacity)
- [\_order](EShapeDataValueImpl.md#_order)
- [\_parent](EShapeDataValueImpl.md#_parent)
- [\_time](EShapeDataValueImpl.md#_time)
- [\_times](EShapeDataValueImpl.md#_times)
- [\_value](EShapeDataValueImpl.md#_value)
- [\_values](EShapeDataValueImpl.md#_values)
- [format](EShapeDataValueImpl.md#format)
- [formatter](EShapeDataValueImpl.md#formatter)
- [id](EShapeDataValueImpl.md#id)
- [initial](EShapeDataValueImpl.md#initial)
- [range](EShapeDataValueImpl.md#range)
- [scope](EShapeDataValueImpl.md#scope)
- [type](EShapeDataValueImpl.md#type)

### Accessors

- [capacity](EShapeDataValueImpl.md#capacity)
- [nvalue](EShapeDataValueImpl.md#nvalue)
- [order](EShapeDataValueImpl.md#order)
- [parent](EShapeDataValueImpl.md#parent)
- [time](EShapeDataValueImpl.md#time)
- [times](EShapeDataValueImpl.md#times)
- [value](EShapeDataValueImpl.md#value)
- [values](EShapeDataValueImpl.md#values)

### Methods

- [clear](EShapeDataValueImpl.md#clear)
- [copy](EShapeDataValueImpl.md#copy)
- [deserialize](EShapeDataValueImpl.md#deserialize)
- [isEquals](EShapeDataValueImpl.md#isequals)
- [remove](EShapeDataValueImpl.md#remove)
- [removeAll](EShapeDataValueImpl.md#removeall)
- [serialize](EShapeDataValueImpl.md#serialize)

## Constructors

### constructor

• **new EShapeDataValueImpl**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L39)

## Properties

### \_capacity

• `Protected` **\_capacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L32)

___

### \_order

• `Protected` **\_order**: [`EShapeDataValueOrder`](../index.md#eshapedatavalueorder)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L33)

___

### \_parent

• `Protected` `Optional` **\_parent**: [`EShapeDataValueParent`](../interfaces/EShapeDataValueParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L35)

___

### \_time

• `Protected` **\_time**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L28)

___

### \_times

• `Protected` **\_times**: `undefined` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L31)

___

### \_value

• `Protected` **\_value**: `unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L27)

___

### \_values

• `Protected` **\_values**: `undefined` \| `unknown`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L30)

___

### format

• **format**: `string`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[format](../interfaces/EShapeDataValue.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L25)

___

### formatter

• `Optional` **formatter**: (`value`: `unknown`) => `unknown`

#### Type declaration

▸ (`value`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

##### Returns

`unknown`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[formatter](../interfaces/EShapeDataValue.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L37)

___

### id

• **id**: `string`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[id](../interfaces/EShapeDataValue.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L21)

___

### initial

• **initial**: `string`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[initial](../interfaces/EShapeDataValue.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L24)

___

### range

• **range**: [`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[range](../interfaces/EShapeDataValue.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L26)

___

### scope

• **scope**: [`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[scope](../interfaces/EShapeDataValue.md#scope)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L23)

___

### type

• **type**: [`EShapeDataValueType`](../index.md#eshapedatavaluetype)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[type](../interfaces/EShapeDataValue.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L22)

## Accessors

### capacity

• `get` **capacity**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[capacity](../interfaces/EShapeDataValue.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L327)

• `set` **capacity**(`capacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[capacity](../interfaces/EShapeDataValue.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L331)

___

### nvalue

• `get` **nvalue**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[nvalue](../interfaces/EShapeDataValue.md#nvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L120)

___

### order

• `get` **order**(): [`EShapeDataValueOrder`](../index.md#eshapedatavalueorder)

#### Returns

[`EShapeDataValueOrder`](../index.md#eshapedatavalueorder)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[order](../interfaces/EShapeDataValue.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L381)

• `set` **order**(`order`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | [`EShapeDataValueOrder`](../index.md#eshapedatavalueorder) |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[order](../interfaces/EShapeDataValue.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:385](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L385)

___

### parent

• `get` **parent**(): `undefined` \| [`EShapeDataValueParent`](../interfaces/EShapeDataValueParent.md)

#### Returns

`undefined` \| [`EShapeDataValueParent`](../interfaces/EShapeDataValueParent.md)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[parent](../interfaces/EShapeDataValue.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L52)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`EShapeDataValueParent`](../interfaces/EShapeDataValueParent.md) |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[parent](../interfaces/EShapeDataValue.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L56)

___

### time

• `get` **time**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[time](../interfaces/EShapeDataValue.md#time)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L209)

• `set` **time**(`newTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTime` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[time](../interfaces/EShapeDataValue.md#time)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:213](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L213)

___

### times

• `get` **times**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[times](../interfaces/EShapeDataValue.md#times)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L262)

• `set` **times**(`newTimes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTimes` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[times](../interfaces/EShapeDataValue.md#times)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L271)

___

### value

• `get` **value**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[value](../interfaces/EShapeDataValue.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L63)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `unknown` |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[value](../interfaces/EShapeDataValue.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L67)

___

### values

• `get` **values**(): `unknown`[]

#### Returns

`unknown`[]

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[values](../interfaces/EShapeDataValue.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L124)

• `set` **values**(`newValues`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValues` | `unknown`[] |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[values](../interfaces/EShapeDataValue.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L133)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[clear](../interfaces/EShapeDataValue.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L468)

___

### copy

▸ **copy**(`target`): [`EShapeDataValueImpl`](EShapeDataValueImpl.md)

This method does not copy the `#values` and `#times` for the performance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) | a copy target |

#### Returns

[`EShapeDataValueImpl`](EShapeDataValueImpl.md)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[copy](../interfaces/EShapeDataValue.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L499)

___

### deserialize

▸ **deserialize**(`target`, `manager`): [`EShapeDataValueImpl`](EShapeDataValueImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeDataValueImpl`](EShapeDataValueImpl.md)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[deserialize](../interfaces/EShapeDataValue.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L534)

___

### isEquals

▸ **isEquals**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |

#### Returns

`boolean`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[isEquals](../interfaces/EShapeDataValue.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L513)

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

[EShapeDataValue](../interfaces/EShapeDataValue.md).[remove](../interfaces/EShapeDataValue.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L389)

___

### removeAll

▸ **removeAll**(`indices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[removeAll](../interfaces/EShapeDataValue.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L418)

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

[EShapeDataValue](../interfaces/EShapeDataValue.md).[serialize](../interfaces/EShapeDataValue.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:524](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L524)
