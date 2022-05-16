[Winter Cardinal UI - v0.165.0](../index.md) / EShapeDataImpl

# Class: EShapeDataImpl

## Implements

- [`EShapeData`](../interfaces/EShapeData.md)

## Table of contents

### Constructors

- [constructor](EShapeDataImpl.md#constructor)

### Properties

- [\_isChanged](EShapeDataImpl.md#_ischanged)
- [\_values](EShapeDataImpl.md#_values)

### Accessors

- [capacity](EShapeDataImpl.md#capacity)
- [format](EShapeDataImpl.md#format)
- [id](EShapeDataImpl.md#id)
- [initial](EShapeDataImpl.md#initial)
- [isChanged](EShapeDataImpl.md#ischanged)
- [nvalue](EShapeDataImpl.md#nvalue)
- [range](EShapeDataImpl.md#range)
- [time](EShapeDataImpl.md#time)
- [value](EShapeDataImpl.md#value)
- [values](EShapeDataImpl.md#values)

### Methods

- [add](EShapeDataImpl.md#add)
- [copy](EShapeDataImpl.md#copy)
- [deserialize](EShapeDataImpl.md#deserialize)
- [get](EShapeDataImpl.md#get)
- [indexOf](EShapeDataImpl.md#indexof)
- [remove](EShapeDataImpl.md#remove)
- [serialize](EShapeDataImpl.md#serialize)
- [set](EShapeDataImpl.md#set)
- [size](EShapeDataImpl.md#size)
- [swap](EShapeDataImpl.md#swap)

## Constructors

### constructor

• **new EShapeDataImpl**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L20)

## Properties

### \_isChanged

• `Protected` **\_isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L18)

___

### \_values

• `Protected` **\_values**: [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L17)

## Accessors

### capacity

• `get` **capacity**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[capacity](../interfaces/EShapeData.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L107)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L115)

___

### format

• `get` **format**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[format](../interfaces/EShapeData.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L53)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[id](../interfaces/EShapeData.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L37)

___

### initial

• `get` **initial**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[initial](../interfaces/EShapeData.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L45)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[isChanged](../interfaces/EShapeData.md#ischanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L33)

___

### nvalue

• `get` **nvalue**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[nvalue](../interfaces/EShapeData.md#nvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L84)

___

### range

• `get` **range**(): [`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Returns

[`EShapeDataValueRange`](../interfaces/EShapeDataValueRange.md)

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[range](../interfaces/EShapeData.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L61)

___

### time

• `get` **time**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[time](../interfaces/EShapeData.md#time)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L92)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L100)

___

### value

• `get` **value**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[value](../interfaces/EShapeData.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L69)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L77)

___

### values

• `get` **values**(): [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Returns

[`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[values](../interfaces/EShapeData.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L25)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L122)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L198)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L228)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L179)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L151)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L144)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L214)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L132)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeData](../interfaces/EShapeData.md).[size](../interfaces/EShapeData.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L187)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-data-impl.ts#L191)
