[Winter Cardinal UI - v0.414.0](../index.md) / EShapeDataImpl

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
- [\_system](EShapeDataImpl.md#_system)
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
- [system](EShapeDataImpl.md#system)
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
- [getSystem](EShapeDataImpl.md#getsystem)
- [indexOf](EShapeDataImpl.md#indexof)
- [isMapped](EShapeDataImpl.md#ismapped)
- [newAlias](EShapeDataImpl.md#newalias)
- [newMapping](EShapeDataImpl.md#newmapping)
- [newPrivate](EShapeDataImpl.md#newprivate)
- [newSystem](EShapeDataImpl.md#newsystem)
- [remove](EShapeDataImpl.md#remove)
- [serialize](EShapeDataImpl.md#serialize)
- [set](EShapeDataImpl.md#set)
- [size](EShapeDataImpl.md#size)
- [swap](EShapeDataImpl.md#swap)

## Constructors

### constructor

• **new EShapeDataImpl**(): [`EShapeDataImpl`](EShapeDataImpl.md)

#### Returns

[`EShapeDataImpl`](EShapeDataImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L36)

## Properties

### \_alias

• `Protected` `Optional` **\_alias**: `Record`\<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L34)

___

### \_isChanged

• `Protected` **\_isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L30)

___

### \_mapping

• `Protected` `Optional` **\_mapping**: [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L31)

___

### \_private

• `Protected` `Optional` **\_private**: [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L32)

___

### \_system

• `Protected` `Optional` **\_system**: [`EShapeDataSystem`](../interfaces/EShapeDataSystem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L33)

___

### \_values

• `Protected` **\_values**: [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L29)

## Accessors

### alias

• `get` **alias**(): `Record`\<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Returns

`Record`\<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[alias](../interfaces/EShapeData.md#alias)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L177)

___

### as

• `get` **as**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[as](../interfaces/EShapeData.md#as)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L61)

___

### capacity

• `get` **capacity**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[capacity](../interfaces/EShapeData.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L162)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L170)

___

### format

• `get` **format**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[format](../interfaces/EShapeData.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L93)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[id](../interfaces/EShapeData.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L53)

___

### initial

• `get` **initial**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[initial](../interfaces/EShapeData.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L85)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[isChanged](../interfaces/EShapeData.md#ischanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L45)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L49)

___

### mapping

• `get` **mapping**(): [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

[`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[mapping](../interfaces/EShapeData.md#mapping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L201)

___

### nvalue

• `get` **nvalue**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[nvalue](../interfaces/EShapeData.md#nvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L124)

___

### private

• `get` **private**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[private](../interfaces/EShapeData.md#private)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L218)

___

### range

• `get` **range**(): [`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Returns

[`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[range](../interfaces/EShapeData.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L101)

___

### scope

• `get` **scope**(): [`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Returns

[`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[scope](../interfaces/EShapeData.md#scope)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L77)

___

### state

• `get` **state**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[state](../interfaces/EShapeData.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L147)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L155)

___

### system

• `get` **system**(): [`EShapeDataSystem`](../interfaces/EShapeDataSystem.md)

#### Returns

[`EShapeDataSystem`](../interfaces/EShapeDataSystem.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[system](../interfaces/EShapeData.md#system)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L235)

___

### time

• `get` **time**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[time](../interfaces/EShapeData.md#time)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L132)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L140)

___

### type

• `get` **type**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[type](../interfaces/EShapeData.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L69)

___

### value

• `get` **value**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[value](../interfaces/EShapeData.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L109)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L117)

___

### values

• `get` **values**(): [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Returns

[`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[values](../interfaces/EShapeData.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L41)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L252)

___

### copy

▸ **copy**(`target`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeData`](../interfaces/EShapeData.md) |

#### Returns

`this`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[copy](../interfaces/EShapeData.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L328)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L386)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L309)

___

### getMapping

▸ **getMapping**(): `undefined` \| [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

`undefined` \| [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[getMapping](../interfaces/EShapeData.md#getmapping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L214)

___

### getPrivate

▸ **getPrivate**(): `undefined` \| [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

`undefined` \| [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[getPrivate](../interfaces/EShapeData.md#getprivate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L231)

___

### getSystem

▸ **getSystem**(): `undefined` \| [`EShapeDataSystem`](../interfaces/EShapeDataSystem.md)

#### Returns

`undefined` \| [`EShapeDataSystem`](../interfaces/EShapeDataSystem.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[getSystem](../interfaces/EShapeData.md#getsystem)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L248)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L281)

___

### isMapped

▸ **isMapped**(`target`): target is DDiagramSerializedDataWithMapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DDiagramSerializedData`](../index.md#ddiagramserializeddata) |

#### Returns

target is DDiagramSerializedDataWithMapping

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L429)

___

### newAlias

▸ **newAlias**(): `Record`\<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Returns

`Record`\<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L186)

___

### newMapping

▸ **newMapping**(): [`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Returns

[`EShapeDataMapping`](../interfaces/EShapeDataMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L210)

___

### newPrivate

▸ **newPrivate**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L227)

___

### newSystem

▸ **newSystem**(): [`EShapeDataSystem`](../interfaces/EShapeDataSystem.md)

#### Returns

[`EShapeDataSystem`](../interfaces/EShapeDataSystem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L244)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L274)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L354)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L262)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[size](../interfaces/EShapeData.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:317](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L317)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts:321](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-impl.ts#L321)
