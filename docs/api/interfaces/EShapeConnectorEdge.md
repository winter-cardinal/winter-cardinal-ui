[Winter Cardinal UI - v0.310.1](../index.md) / EShapeConnectorEdge

# Interface: EShapeConnectorEdge

## Implemented by

- [`EShapeConnectorEdgeImpl`](../classes/EShapeConnectorEdgeImpl.md)

## Table of contents

### Properties

- [acceptor](EShapeConnectorEdge.md#acceptor)
- [local](EShapeConnectorEdge.md#local)
- [localId](EShapeConnectorEdge.md#localid)
- [margin](EShapeConnectorEdge.md#margin)
- [normal](EShapeConnectorEdge.md#normal)
- [normalId](EShapeConnectorEdge.md#normalid)
- [parent](EShapeConnectorEdge.md#parent)

### Methods

- [attach](EShapeConnectorEdge.md#attach)
- [copy](EShapeConnectorEdge.md#copy)
- [deserialize](EShapeConnectorEdge.md#deserialize)
- [detach](EShapeConnectorEdge.md#detach)
- [fit](EShapeConnectorEdge.md#fit)
- [lock](EShapeConnectorEdge.md#lock)
- [serialize](EShapeConnectorEdge.md#serialize)
- [set](EShapeConnectorEdge.md#set)
- [unlock](EShapeConnectorEdge.md#unlock)

## Properties

### acceptor

• `Readonly` **acceptor**: [`EShapeConnectorEdgeAcceptor`](EShapeConnectorEdgeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L26)

___

### local

• `Readonly` **local**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L27)

___

### localId

• `Readonly` **localId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L28)

___

### margin

• **margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L31)

___

### normal

• `Readonly` **normal**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L29)

___

### normalId

• `Readonly` **normalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L30)

___

### parent

• `Readonly` **parent**: [`EShapeConnector`](EShapeConnector.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L25)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L52)

___

### copy

▸ **copy**(`source`): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorEdge`](EShapeConnectorEdge.md) |

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L44)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L47)

___

### detach

▸ **detach**(): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L53)

___

### fit

▸ **fit**(`forcibly?`): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L45)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L33)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L46)

___

### set

▸ **set**(`shape?`, `edge?`, `margin?`, `x?`, `y?`, `nx?`, `ny?`): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](EShape.md) |
| `edge?` | ``null`` \| `string` |
| `margin?` | `number` |
| `x?` | `number` |
| `y?` | `number` |
| `nx?` | `number` |
| `ny?` | `number` |

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L35)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L34)
