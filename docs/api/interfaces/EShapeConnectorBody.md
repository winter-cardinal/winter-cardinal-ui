[Winter Cardinal UI - v0.414.0](../index.md) / EShapeConnectorBody

# Interface: EShapeConnectorBody

## Implemented by

- [`EShapeConnectorBodyImpl`](../classes/EShapeConnectorBodyImpl.md)

## Table of contents

### Properties

- [id](EShapeConnectorBody.md#id)
- [values](EShapeConnectorBody.md#values)

### Methods

- [copy](EShapeConnectorBody.md#copy)
- [deserialize](EShapeConnectorBody.md#deserialize)
- [lock](EShapeConnectorBody.md#lock)
- [serialize](EShapeConnectorBody.md#serialize)
- [set](EShapeConnectorBody.md#set)
- [unlock](EShapeConnectorBody.md#unlock)

## Properties

### id

• `Readonly` **id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts#L13)

___

### values

• **values**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts#L14)

## Methods

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorBody`](EShapeConnectorBody.md) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts#L19)

___

### deserialize

▸ **deserialize**(`resourceId`, `mapping`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `number` |
| `mapping` | [`EShapeUuidMapping`](EShapeUuidMapping.md) |
| `manager` | [`EShapeResourceManagerDeserialization`](../classes/EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts#L21)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts#L20)

___

### set

▸ **set**(`values?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `number`[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts#L18)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-body.ts#L17)
