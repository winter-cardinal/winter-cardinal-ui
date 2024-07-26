[Winter Cardinal UI - v0.442.0](../index.md) / EShapeDataValueImpl

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
- [\_state](EShapeDataValueImpl.md#_state)
- [\_states](EShapeDataValueImpl.md#_states)
- [\_time](EShapeDataValueImpl.md#_time)
- [\_times](EShapeDataValueImpl.md#_times)
- [\_value](EShapeDataValueImpl.md#_value)
- [\_values](EShapeDataValueImpl.md#_values)
- [as](EShapeDataValueImpl.md#as)
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
- [state](EShapeDataValueImpl.md#state)
- [states](EShapeDataValueImpl.md#states)
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
- [toDirty](EShapeDataValueImpl.md#todirty)

## Constructors

### constructor

• **new EShapeDataValueImpl**(): [`EShapeDataValueImpl`](EShapeDataValueImpl.md)

#### Returns

[`EShapeDataValueImpl`](EShapeDataValueImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L46)

## Properties

### \_capacity

• `Protected` **\_capacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L39)

___

### \_order

• `Protected` **\_order**: [`EShapeDataValueOrder`](../index.md#eshapedatavalueorder)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L40)

___

### \_parent

• `Protected` `Optional` **\_parent**: [`EShapeDataValueParent`](../interfaces/EShapeDataValueParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L42)

___

### \_state

• `Protected` **\_state**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L33)

___

### \_states

• `Protected` **\_states**: `undefined` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L37)

___

### \_time

• `Protected` **\_time**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L32)

___

### \_times

• `Protected` **\_times**: `undefined` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L36)

___

### \_value

• `Protected` **\_value**: `unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L31)

___

### \_values

• `Protected` **\_values**: `undefined` \| `unknown`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L35)

___

### as

• **as**: `string`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[as](../interfaces/EShapeDataValue.md#as)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L24)

___

### format

• **format**: `string`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[format](../interfaces/EShapeDataValue.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L28)

___

### formatter

• `Optional` **formatter**: [`EShapeDataValueFormatter`](../index.md#eshapedatavalueformatter)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[formatter](../interfaces/EShapeDataValue.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L44)

___

### id

• **id**: `string`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[id](../interfaces/EShapeDataValue.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L23)

___

### initial

• **initial**: `string`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[initial](../interfaces/EShapeDataValue.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L27)

___

### range

• **range**: [`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[range](../interfaces/EShapeDataValue.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L29)

___

### scope

• **scope**: [`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[scope](../interfaces/EShapeDataValue.md#scope)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L26)

___

### type

• **type**: `number`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[type](../interfaces/EShapeDataValue.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L25)

## Accessors

### capacity

• `get` **capacity**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[capacity](../interfaces/EShapeDataValue.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L457)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:461](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L461)

___

### nvalue

• `get` **nvalue**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[nvalue](../interfaces/EShapeDataValue.md#nvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L129)

___

### order

• `get` **order**(): [`EShapeDataValueOrder`](../index.md#eshapedatavalueorder)

#### Returns

[`EShapeDataValueOrder`](../index.md#eshapedatavalueorder)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[order](../interfaces/EShapeDataValue.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L527)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L531)

___

### parent

• `get` **parent**(): `undefined` \| [`EShapeDataValueParent`](../interfaces/EShapeDataValueParent.md)

#### Returns

`undefined` \| [`EShapeDataValueParent`](../interfaces/EShapeDataValueParent.md)

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[parent](../interfaces/EShapeDataValue.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L61)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L65)

___

### state

• `get` **state**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[state](../interfaces/EShapeDataValue.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L338)

• `set` **state**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[state](../interfaces/EShapeDataValue.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L342)

___

### states

• `get` **states**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[states](../interfaces/EShapeDataValue.md#states)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L391)

• `set` **states**(`newStates`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newStates` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[states](../interfaces/EShapeDataValue.md#states)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L400)

___

### time

• `get` **time**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[time](../interfaces/EShapeDataValue.md#time)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L219)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L223)

___

### times

• `get` **times**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[times](../interfaces/EShapeDataValue.md#times)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:272](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L272)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L281)

___

### value

• `get` **value**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[value](../interfaces/EShapeDataValue.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L72)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L76)

___

### values

• `get` **values**(): `unknown`[]

#### Returns

`unknown`[]

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[values](../interfaces/EShapeDataValue.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L133)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L142)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[clear](../interfaces/EShapeDataValue.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L623)

___

### copy

▸ **copy**(`target`): `this`

This method does not copy the `#values` and `#times` for the performance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) | a copy target |

#### Returns

`this`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[copy](../interfaces/EShapeDataValue.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L668)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`this`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[deserialize](../interfaces/EShapeDataValue.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:707](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L707)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L684)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:535](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L535)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L573)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:696](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L696)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeDataValue](../interfaces/EShapeDataValue.md).[toDirty](../interfaces/EShapeDataValue.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-impl.ts#L656)
