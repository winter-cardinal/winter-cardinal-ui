[Winter Cardinal UI - v0.160.0](../index.md) / EShapePointsMarkerNoop

# Class: EShapePointsMarkerNoop

## Implements

- [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

## Table of contents

### Constructors

- [constructor](EShapePointsMarkerNoop.md#constructor)

### Properties

- [\_fill](EShapePointsMarkerNoop.md#_fill)
- [\_size](EShapePointsMarkerNoop.md#_size)
- [\_transform](EShapePointsMarkerNoop.md#_transform)

### Accessors

- [fill](EShapePointsMarkerNoop.md#fill)
- [size](EShapePointsMarkerNoop.md#size)
- [transform](EShapePointsMarkerNoop.md#transform)
- [type](EShapePointsMarkerNoop.md#type)

### Methods

- [copy](EShapePointsMarkerNoop.md#copy)
- [deserialize](EShapePointsMarkerNoop.md#deserialize)
- [lock](EShapePointsMarkerNoop.md#lock)
- [serialize](EShapePointsMarkerNoop.md#serialize)
- [set](EShapePointsMarkerNoop.md#set)
- [unlock](EShapePointsMarkerNoop.md#unlock)
- [updateUploaded](EShapePointsMarkerNoop.md#updateuploaded)

## Constructors

### constructor

• **new EShapePointsMarkerNoop**()

## Properties

### \_fill

• `Protected` `Optional` **\_fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L18)

___

### \_size

• `Protected` `Optional` **\_size**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L16)

___

### \_transform

• `Protected` `Optional` **\_transform**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L17)

## Accessors

### fill

• `get` **fill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[fill](../interfaces/EShapePointsMarker.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L54)

___

### size

• `get` **size**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[size](../interfaces/EShapePointsMarker.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L36)

___

### transform

• `get` **transform**(): `Matrix`

#### Returns

`Matrix`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[transform](../interfaces/EShapePointsMarker.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L45)

___

### type

• `get` **type**(): [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Returns

[`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[type](../interfaces/EShapePointsMarker.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L28)

• `set` **type**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype) |

#### Returns

`void`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[type](../interfaces/EShapePointsMarker.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L32)

## Methods

### copy

▸ **copy**(`source`): [`EShapePointsMarkerNoop`](EShapePointsMarkerNoop.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md) |

#### Returns

[`EShapePointsMarkerNoop`](EShapePointsMarkerNoop.md)

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[copy](../interfaces/EShapePointsMarker.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L67)

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

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[deserialize](../interfaces/EShapePointsMarker.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L79)

___

### lock

▸ **lock**(): [`EShapePointsMarkerNoop`](EShapePointsMarkerNoop.md)

#### Returns

[`EShapePointsMarkerNoop`](EShapePointsMarkerNoop.md)

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[lock](../interfaces/EShapePointsMarker.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L20)

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

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[serialize](../interfaces/EShapePointsMarker.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L75)

___

### set

▸ **set**(`type?`, `sizeX?`, `sizeY?`): [`EShapePointsMarkerNoop`](EShapePointsMarkerNoop.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype) |
| `sizeX?` | `number` |
| `sizeY?` | `number` |

#### Returns

[`EShapePointsMarkerNoop`](EShapePointsMarkerNoop.md)

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[set](../interfaces/EShapePointsMarker.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L71)

___

### unlock

▸ **unlock**(): [`EShapePointsMarkerNoop`](EShapePointsMarkerNoop.md)

#### Returns

[`EShapePointsMarkerNoop`](EShapePointsMarkerNoop.md)

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[unlock](../interfaces/EShapePointsMarker.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L24)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-noop.ts#L63)
