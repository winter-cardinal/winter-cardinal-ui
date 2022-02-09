[Winter Cardinal UI - v0.154.0](../index.md) / EShapePointsMarkerContainer

# Interface: EShapePointsMarkerContainer

## Implemented by

- [`EShapePointsMarkerContainerImpl`](../classes/EShapePointsMarkerContainerImpl.md)
- [`EShapePointsMarkerContainerImplNoop`](../classes/EShapePointsMarkerContainerImplNoop.md)

## Table of contents

### Properties

- [head](EShapePointsMarkerContainer.md#head)
- [tail](EShapePointsMarkerContainer.md#tail)

### Methods

- [copy](EShapePointsMarkerContainer.md#copy)
- [deserialize](EShapePointsMarkerContainer.md#deserialize)
- [lock](EShapePointsMarkerContainer.md#lock)
- [serialize](EShapePointsMarkerContainer.md#serialize)
- [unlock](EShapePointsMarkerContainer.md#unlock)

## Properties

### head

• **head**: [`EShapePointsMarker`](EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts#L13)

___

### tail

• **tail**: [`EShapePointsMarker`](EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts#L14)

## Methods

### copy

▸ **copy**(`source`): [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md) |

#### Returns

[`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts#L18)

___

### deserialize

▸ **deserialize**(`resourceId`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](../classes/EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts#L20)

___

### lock

▸ **lock**(): [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts#L19)

___

### unlock

▸ **unlock**(): [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container.ts#L17)
