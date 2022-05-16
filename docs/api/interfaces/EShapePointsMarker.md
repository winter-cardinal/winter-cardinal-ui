[Winter Cardinal UI - v0.165.0](../index.md) / EShapePointsMarker

# Interface: EShapePointsMarker

## Implemented by

- [`EShapePointsMarkerBase`](../classes/EShapePointsMarkerBase.md)
- [`EShapePointsMarkerNoop`](../classes/EShapePointsMarkerNoop.md)

## Table of contents

### Properties

- [fill](EShapePointsMarker.md#fill)
- [size](EShapePointsMarker.md#size)
- [transform](EShapePointsMarker.md#transform)
- [type](EShapePointsMarker.md#type)

### Methods

- [copy](EShapePointsMarker.md#copy)
- [deserialize](EShapePointsMarker.md#deserialize)
- [lock](EShapePointsMarker.md#lock)
- [serialize](EShapePointsMarker.md#serialize)
- [set](EShapePointsMarker.md#set)
- [unlock](EShapePointsMarker.md#unlock)

## Properties

### fill

• `Readonly` **fill**: [`EShapeFill`](EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L18)

___

### size

• `Readonly` **size**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L16)

___

### transform

• `Readonly` **transform**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L17)

___

### type

• **type**: [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L15)

## Methods

### copy

▸ **copy**(`source`): [`EShapePointsMarker`](EShapePointsMarker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePointsMarker`](EShapePointsMarker.md) |

#### Returns

[`EShapePointsMarker`](EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L22)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L25)

___

### lock

▸ **lock**(): [`EShapePointsMarker`](EShapePointsMarker.md)

#### Returns

[`EShapePointsMarker`](EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L20)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L24)

___

### set

▸ **set**(`type?`, `sizeX?`, `sizeY?`): [`EShapePointsMarker`](EShapePointsMarker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype) |
| `sizeX?` | `number` |
| `sizeY?` | `number` |

#### Returns

[`EShapePointsMarker`](EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L23)

___

### unlock

▸ **unlock**(): [`EShapePointsMarker`](EShapePointsMarker.md)

#### Returns

[`EShapePointsMarker`](EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker.ts#L21)
