[Winter Cardinal UI - v0.205.1](../index.md) / EShapeDataImpl

# Class: EShapeDataImpl

## Implements

- [`EShapeData`](../interfaces/EShapeData.md)

## Table of contents

### Constructors

- [constructor](EShapeDataImpl.md#constructor)

### Properties

- [\_alias](EShapeDataImpl.md#_alias)
- [\_isChanged](EShapeDataImpl.md#_ischanged)
- [\_mapping](EShapeDataImpl.md#_mapping)
- [\_private](EShapeDataImpl.md#_private)
- [\_values](EShapeDataImpl.md#_values)

### Accessors

- [alias](EShapeDataImpl.md#alias)
- [as](EShapeDataImpl.md#as)
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
- [state](EShapeDataImpl.md#state)
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
- [newAlias](EShapeDataImpl.md#newalias)
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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L33)

## Properties

### \_alias

• `Protected` `Optional` **\_alias**: `Record`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L31)

___

### \_isChanged

• `Protected` **\_isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L28)

___

### \_mapping

• `Protected` `Optional` **\_mapping**: [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L29)

___

### \_private

• `Protected` `Optional` **\_private**: [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L30)

___

### \_values

• `Protected` **\_values**: [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L27)

## Accessors

### alias

• `get` **alias**(): `Record`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Returns

`Record`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[alias](../interfaces/EShapeData.md#alias)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L174)

___

### as

• `get` **as**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[as](../interfaces/EShapeData.md#as)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L58)

___

### capacity

• `get` **capacity**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[capacity](../interfaces/EShapeData.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L159)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L167)

___

### format

• `get` **format**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[format](../interfaces/EShapeData.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L90)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[id](../interfaces/EShapeData.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L50)

___

### initial

• `get` **initial**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[initial](../interfaces/EShapeData.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L82)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[isChanged](../interfaces/EShapeData.md#ischanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L42)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L46)

___

### mapping

• `get` **mapping**(): [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

[`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[mapping](../interfaces/EShapeData.md#mapping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L198)

___

### nvalue

• `get` **nvalue**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[nvalue](../interfaces/EShapeData.md#nvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L121)

___

### private

• `get` **private**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[private](../interfaces/EShapeData.md#private)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L215)

___

### range

• `get` **range**(): [`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Returns

[`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[range](../interfaces/EShapeData.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L98)

___

### scope

• `get` **scope**(): [`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Returns

[`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[scope](../interfaces/EShapeData.md#scope)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L74)

___

### state

• `get` **state**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[state](../interfaces/EShapeData.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L144)

• `set` **state**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[state](../interfaces/EShapeData.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L152)

___

### time

• `get` **time**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[time](../interfaces/EShapeData.md#time)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L129)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L137)

___

### type

• `get` **type**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[type](../interfaces/EShapeData.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L66)

___

### value

• `get` **value**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[value](../interfaces/EShapeData.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L106)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L114)

___

### values

• `get` **values**(): [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Returns

[`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[values](../interfaces/EShapeData.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L38)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L232)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L308)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L345)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:289](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L289)

___

### getMapping

▸ **getMapping**(): `undefined` \| [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

`undefined` \| [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[getMapping](../interfaces/EShapeData.md#getmapping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L211)

___

### getPrivate

▸ **getPrivate**(): `undefined` \| [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

`undefined` \| [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[getPrivate](../interfaces/EShapeData.md#getprivate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L228)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L261)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:379](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L379)

___

### newAlias

▸ `Protected` **newAlias**(): `Record`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Returns

`Record`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L183)

___

### newMapping

▸ `Protected` **newMapping**(): [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

[`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L207)

___

### newPrivate

▸ `Protected` **newPrivate**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L224)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:254](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L254)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:329](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L329)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L242)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[size](../interfaces/EShapeData.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:297](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L297)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L301)
