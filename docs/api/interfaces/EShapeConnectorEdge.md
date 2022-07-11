[Winter Cardinal UI - v0.199.0](../index.md) / EShapeConnectorEdge

# Interface: EShapeConnectorEdge

## Implemented by

- [`EShapeConnectorEdgeImpl`](../classes/EShapeConnectorEdgeImpl.md)

## Table of contents

### Properties

- [acceptor](EShapeConnectorEdge.md#acceptor)
- [local](EShapeConnectorEdge.md#local)
- [localId](EShapeConnectorEdge.md#localid)
- [margin](EShapeConnectorEdge.md#margin)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L16)

___

### local

• `Readonly` **local**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L17)

___

### localId

• **localId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L18)

___

### margin

• **margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L19)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L38)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L30)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L33)

___

### detach

▸ **detach**(): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L31)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L21)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L32)

___

### set

▸ **set**(`shape?`, `edge?`, `margin?`, `localX?`, `localY?`): [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](EShape.md) |
| `edge?` | ``null`` \| `string` |
| `margin?` | `number` |
| `localX?` | `number` |
| `localY?` | `number` |

#### Returns

[`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L23)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge.ts#L22)
