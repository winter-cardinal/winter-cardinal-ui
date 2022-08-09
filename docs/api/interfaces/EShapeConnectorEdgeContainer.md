[Winter Cardinal UI - v0.205.1](../index.md) / EShapeConnectorEdgeContainer

# Interface: EShapeConnectorEdgeContainer

## Implemented by

- [`EShapeConnectorEdgeContainerImpl`](../classes/EShapeConnectorEdgeContainerImpl.md)

## Table of contents

### Properties

- [head](EShapeConnectorEdgeContainer.md#head)
- [tail](EShapeConnectorEdgeContainer.md#tail)

### Methods

- [attach](EShapeConnectorEdgeContainer.md#attach)
- [copy](EShapeConnectorEdgeContainer.md#copy)
- [deserialize](EShapeConnectorEdgeContainer.md#deserialize)
- [detach](EShapeConnectorEdgeContainer.md#detach)
- [fit](EShapeConnectorEdgeContainer.md#fit)
- [lock](EShapeConnectorEdgeContainer.md#lock)
- [serialize](EShapeConnectorEdgeContainer.md#serialize)
- [unlock](EShapeConnectorEdgeContainer.md#unlock)

## Properties

### head

• **head**: [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L15)

___

### tail

• **tail**: [`EShapeConnectorEdge`](EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L14)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Returns

[`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L26)

___

### copy

▸ **copy**(`source`): [`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md) |

#### Returns

[`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L18)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L21)

___

### detach

▸ **detach**(): [`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Returns

[`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L27)

___

### fit

▸ **fit**(`forcibly?`): [`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

[`EShapeConnectorEdgeContainer`](EShapeConnectorEdgeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L19)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L20)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container.ts#L17)
