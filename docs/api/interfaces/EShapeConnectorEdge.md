[Winter Cardinal UI - v0.227.0](../index.md) / EShapeConnectorEdge

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L24)

___

### local

• `Readonly` **local**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L25)

___

### localId

• `Readonly` **localId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L26)

___

### margin

• **margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L29)

___

### normal

• `Readonly` **normal**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L27)

___

### normalId

• `Readonly` **normalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L28)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L50)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L42)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L45)

___

### detach

▸ **detach**(): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L51)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L43)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L44)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L33)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L32)
