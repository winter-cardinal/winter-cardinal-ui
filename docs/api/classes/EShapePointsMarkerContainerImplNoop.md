[Winter Cardinal UI - v0.442.0](../index.md) / EShapePointsMarkerContainerImplNoop

# Class: EShapePointsMarkerContainerImplNoop

## Implements

- [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

## Table of contents

### Constructors

- [constructor](EShapePointsMarkerContainerImplNoop.md#constructor)

### Properties

- [\_marker](EShapePointsMarkerContainerImplNoop.md#_marker)
- [INSTANCE](EShapePointsMarkerContainerImplNoop.md#instance)

### Accessors

- [head](EShapePointsMarkerContainerImplNoop.md#head)
- [tail](EShapePointsMarkerContainerImplNoop.md#tail)

### Methods

- [copy](EShapePointsMarkerContainerImplNoop.md#copy)
- [deserialize](EShapePointsMarkerContainerImplNoop.md#deserialize)
- [lock](EShapePointsMarkerContainerImplNoop.md#lock)
- [serialize](EShapePointsMarkerContainerImplNoop.md#serialize)
- [unlock](EShapePointsMarkerContainerImplNoop.md#unlock)
- [getInstance](EShapePointsMarkerContainerImplNoop.md#getinstance)

## Constructors

### constructor

• **new EShapePointsMarkerContainerImplNoop**(): [`EShapePointsMarkerContainerImplNoop`](EShapePointsMarkerContainerImplNoop.md)

#### Returns

[`EShapePointsMarkerContainerImplNoop`](EShapePointsMarkerContainerImplNoop.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L15)

## Properties

### \_marker

• `Protected` **\_marker**: [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L13)

___

### INSTANCE

▪ `Static` `Protected` `Optional` **INSTANCE**: [`EShapePointsMarkerContainerImplNoop`](EShapePointsMarkerContainerImplNoop.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L47)

## Accessors

### head

• `get` **head**(): [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Returns

[`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[head](../interfaces/EShapePointsMarkerContainer.md#head)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L27)

___

### tail

• `get` **tail**(): [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Returns

[`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[tail](../interfaces/EShapePointsMarkerContainer.md#tail)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L31)

## Methods

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md) |

#### Returns

`this`

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[copy](../interfaces/EShapePointsMarkerContainer.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L35)

___

### deserialize

▸ **deserialize**(`resourceId`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[deserialize](../interfaces/EShapePointsMarkerContainer.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L43)

___

### lock

▸ **lock**(): `this`

#### Returns

`this`

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[lock](../interfaces/EShapePointsMarkerContainer.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L19)

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

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[serialize](../interfaces/EShapePointsMarkerContainer.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L39)

___

### unlock

▸ **unlock**(): `this`

#### Returns

`this`

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[unlock](../interfaces/EShapePointsMarkerContainer.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L23)

___

### getInstance

▸ **getInstance**(): [`EShapePointsMarkerContainerImplNoop`](EShapePointsMarkerContainerImplNoop.md)

#### Returns

[`EShapePointsMarkerContainerImplNoop`](EShapePointsMarkerContainerImplNoop.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl-noop.ts#L48)
