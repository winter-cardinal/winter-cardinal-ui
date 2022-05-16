[Winter Cardinal UI - v0.167.0](../index.md) / EShapeConnectorBodyImpl

# Class: EShapeConnectorBodyImpl

## Implements

- [`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md)

## Table of contents

### Constructors

- [constructor](EShapeConnectorBodyImpl.md#constructor)

### Properties

- [\_id](EShapeConnectorBodyImpl.md#_id)
- [\_isChanged](EShapeConnectorBodyImpl.md#_ischanged)
- [\_lockCount](EShapeConnectorBodyImpl.md#_lockcount)
- [\_onChange](EShapeConnectorBodyImpl.md#_onchange)
- [\_parent](EShapeConnectorBodyImpl.md#_parent)
- [\_values](EShapeConnectorBodyImpl.md#_values)

### Accessors

- [id](EShapeConnectorBodyImpl.md#id)
- [values](EShapeConnectorBodyImpl.md#values)

### Methods

- [copy](EShapeConnectorBodyImpl.md#copy)
- [deserialize](EShapeConnectorBodyImpl.md#deserialize)
- [lock](EShapeConnectorBodyImpl.md#lock)
- [onChange](EShapeConnectorBodyImpl.md#onchange)
- [serialize](EShapeConnectorBodyImpl.md#serialize)
- [set](EShapeConnectorBodyImpl.md#set)
- [unlock](EShapeConnectorBodyImpl.md#unlock)

## Constructors

### constructor

• **new EShapeConnectorBodyImpl**(`parent`, `onChange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeConnector`](../interfaces/EShapeConnector.md) |
| `onChange` | () => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L20)

## Properties

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L14)

___

### \_isChanged

• `Protected` **\_isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L17)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L16)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L18)

___

### \_parent

• `Protected` **\_parent**: [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L13)

___

### \_values

• `Protected` **\_values**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L15)

## Accessors

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[id](../interfaces/EShapeConnectorBody.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L46)

___

### values

• `get` **values**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[values](../interfaces/EShapeConnectorBody.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L50)

• `set` **values**(`newValues`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValues` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[values](../interfaces/EShapeConnectorBody.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L54)

## Methods

### copy

▸ **copy**(`source`): [`EShapeConnectorBodyImpl`](EShapeConnectorBodyImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md) |

#### Returns

[`EShapeConnectorBodyImpl`](EShapeConnectorBodyImpl.md)

#### Implementation of

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[copy](../interfaces/EShapeConnectorBody.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L74)

___

### deserialize

▸ **deserialize**(`resourceId`, `mapping`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `number` |
| `mapping` | [`EShapeUuidMapping`](../interfaces/EShapeUuidMapping.md) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[deserialize](../interfaces/EShapeConnectorBody.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L82)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[lock](../interfaces/EShapeConnectorBody.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L29)

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L98)

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

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[serialize](../interfaces/EShapeConnectorBody.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L78)

___

### set

▸ **set**(`newValues?`): [`EShapeConnectorBodyImpl`](EShapeConnectorBodyImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValues?` | `number`[] |

#### Returns

[`EShapeConnectorBodyImpl`](EShapeConnectorBodyImpl.md)

#### Implementation of

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[set](../interfaces/EShapeConnectorBody.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L58)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorBody](../interfaces/EShapeConnectorBody.md).[unlock](../interfaces/EShapeConnectorBody.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body-impl.ts#L36)
