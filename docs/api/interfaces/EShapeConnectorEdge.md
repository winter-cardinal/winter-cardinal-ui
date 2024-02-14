[Winter Cardinal UI - v0.407.0](../index.md) / EShapeConnectorEdge

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
- [side](EShapeConnectorEdge.md#side)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L30)

___

### local

• `Readonly` **local**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L31)

___

### localId

• `Readonly` **localId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L32)

___

### margin

• **margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L36)

___

### normal

• `Readonly` **normal**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L33)

___

### normalId

• `Readonly` **normalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L34)

___

### parent

• `Readonly` **parent**: [`EShapeConnector`](EShapeConnector.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L29)

___

### side

• **side**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L35)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L60)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L52)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L55)

___

### detach

▸ **detach**(`exceptions?`): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](EShape.md)\> |

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L61)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L53)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L38)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L54)

___

### set

▸ **set**(`acceptorShape?`, `acceptorEdge?`, `acceptorX?`, `acceptorY?`, `margin?`, `x?`, `y?`, `nx?`, `ny?`, `side?`): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `acceptorShape?` | ``null`` \| [`EShape`](EShape.md) |
| `acceptorEdge?` | ``null`` \| `string` |
| `acceptorX?` | ``null`` \| `number` |
| `acceptorY?` | ``null`` \| `number` |
| `margin?` | `number` |
| `x?` | `number` |
| `y?` | `number` |
| `nx?` | `number` |
| `ny?` | `number` |
| `side?` | `number` |

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L40)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L39)
