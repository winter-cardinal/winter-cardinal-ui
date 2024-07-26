[Winter Cardinal UI - v0.442.0](../index.md) / EShapePointsMarkerBase

# Class: EShapePointsMarkerBase

## Hierarchy

- **`EShapePointsMarkerBase`**

  ↳ [`EShapePointsMarkerHead`](EShapePointsMarkerHead.md)

  ↳ [`EShapePointsMarkerTail`](EShapePointsMarkerTail.md)

## Implements

- [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

## Table of contents

### Constructors

- [constructor](EShapePointsMarkerBase.md#constructor)

### Properties

- [\_fill](EShapePointsMarkerBase.md#_fill)
- [\_isFillChanged](EShapePointsMarkerBase.md#_isfillchanged)
- [\_isSizeChanged](EShapePointsMarkerBase.md#_issizechanged)
- [\_isTypeChanged](EShapePointsMarkerBase.md#_istypechanged)
- [\_lockCount](EShapePointsMarkerBase.md#_lockcount)
- [\_parent](EShapePointsMarkerBase.md#_parent)
- [\_size](EShapePointsMarkerBase.md#_size)
- [\_transform](EShapePointsMarkerBase.md#_transform)
- [\_transformId](EShapePointsMarkerBase.md#_transformid)
- [\_type](EShapePointsMarkerBase.md#_type)

### Accessors

- [fill](EShapePointsMarkerBase.md#fill)
- [size](EShapePointsMarkerBase.md#size)
- [transform](EShapePointsMarkerBase.md#transform)
- [type](EShapePointsMarkerBase.md#type)

### Methods

- [copy](EShapePointsMarkerBase.md#copy)
- [deserialize](EShapePointsMarkerBase.md#deserialize)
- [lock](EShapePointsMarkerBase.md#lock)
- [newFill](EShapePointsMarkerBase.md#newfill)
- [onFillChange](EShapePointsMarkerBase.md#onfillchange)
- [onSizeChange](EShapePointsMarkerBase.md#onsizechange)
- [onTypeChange](EShapePointsMarkerBase.md#ontypechange)
- [serialize](EShapePointsMarkerBase.md#serialize)
- [set](EShapePointsMarkerBase.md#set)
- [toTransform](EShapePointsMarkerBase.md#totransform)
- [toTransformMatrix](EShapePointsMarkerBase.md#totransformmatrix)
- [unlock](EShapePointsMarkerBase.md#unlock)
- [updateTransform](EShapePointsMarkerBase.md#updatetransform)
- [updateUploaded](EShapePointsMarkerBase.md#updateuploaded)

## Constructors

### constructor

• **new EShapePointsMarkerBase**(`parent`): [`EShapePointsMarkerBase`](EShapePointsMarkerBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapePointsMarkerBaseParent`](../interfaces/EShapePointsMarkerBaseParent.md) |

#### Returns

[`EShapePointsMarkerBase`](EShapePointsMarkerBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L40)

## Properties

### \_fill

• `Protected` **\_fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L38)

___

### \_isFillChanged

• `Protected` **\_isFillChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L33)

___

### \_isSizeChanged

• `Protected` **\_isSizeChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L32)

___

### \_isTypeChanged

• `Protected` **\_isTypeChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L31)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L30)

___

### \_parent

• `Protected` **\_parent**: [`EShapePointsMarkerBaseParent`](../interfaces/EShapePointsMarkerBaseParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L29)

___

### \_size

• `Protected` **\_size**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L35)

___

### \_transform

• `Protected` `Optional` **\_transform**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L36)

___

### \_transformId

• `Protected` **\_transformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L37)

___

### \_type

• `Protected` **\_type**: [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L34)

## Accessors

### fill

• `get` **fill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[fill](../interfaces/EShapePointsMarker.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L168)

___

### size

• `get` **size**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[size](../interfaces/EShapePointsMarker.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L109)

___

### transform

• `get` **transform**(): `Matrix`

#### Returns

`Matrix`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[transform](../interfaces/EShapePointsMarker.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L121)

___

### type

• `get` **type**(): [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Returns

[`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[type](../interfaces/EShapePointsMarker.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L90)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L94)

## Methods

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md) |

#### Returns

`this`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[copy](../interfaces/EShapePointsMarker.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L184)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L209)

___

### lock

▸ **lock**(): `this`

#### Returns

`this`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[lock](../interfaces/EShapePointsMarker.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L63)

___

### newFill

▸ **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L59)

___

### onFillChange

▸ **onFillChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L172)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L113)

___

### onTypeChange

▸ **onTypeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L101)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L203)

___

### set

▸ **set**(`type?`, `sizeX?`, `sizeY?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype) |
| `sizeX?` | `number` |
| `sizeY?` | `number` |

#### Returns

`this`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[set](../interfaces/EShapePointsMarker.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L190)

___

### toTransform

▸ **toTransform**(`values`, `result`): `Matrix`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |
| `result` | `Matrix` |

#### Returns

`Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L145)

___

### toTransformMatrix

▸ **toTransformMatrix**(`x0`, `y0`, `x1`, `y1`, `result`): `Matrix`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `result` | `Matrix` |

#### Returns

`Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L147)

___

### unlock

▸ **unlock**(): `this`

#### Returns

`this`

#### Implementation of

[EShapePointsMarker](../interfaces/EShapePointsMarker.md).[unlock](../interfaces/EShapePointsMarker.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L73)

___

### updateTransform

▸ **updateTransform**(): `Matrix`

#### Returns

`Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L125)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L180)
