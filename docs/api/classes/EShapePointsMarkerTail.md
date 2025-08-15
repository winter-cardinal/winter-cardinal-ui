[Winter Cardinal UI - v0.457.0](../index.md) / EShapePointsMarkerTail

# Class: EShapePointsMarkerTail

## Hierarchy

- [`EShapePointsMarkerBase`](EShapePointsMarkerBase.md)

  ↳ **`EShapePointsMarkerTail`**

## Table of contents

### Constructors

- [constructor](EShapePointsMarkerTail.md#constructor)

### Properties

- [\_fill](EShapePointsMarkerTail.md#_fill)
- [\_isFillChanged](EShapePointsMarkerTail.md#_isfillchanged)
- [\_isSizeChanged](EShapePointsMarkerTail.md#_issizechanged)
- [\_isTypeChanged](EShapePointsMarkerTail.md#_istypechanged)
- [\_lockCount](EShapePointsMarkerTail.md#_lockcount)
- [\_parent](EShapePointsMarkerTail.md#_parent)
- [\_size](EShapePointsMarkerTail.md#_size)
- [\_transform](EShapePointsMarkerTail.md#_transform)
- [\_transformId](EShapePointsMarkerTail.md#_transformid)
- [\_type](EShapePointsMarkerTail.md#_type)

### Accessors

- [fill](EShapePointsMarkerTail.md#fill)
- [size](EShapePointsMarkerTail.md#size)
- [transform](EShapePointsMarkerTail.md#transform)
- [type](EShapePointsMarkerTail.md#type)

### Methods

- [copy](EShapePointsMarkerTail.md#copy)
- [deserialize](EShapePointsMarkerTail.md#deserialize)
- [lock](EShapePointsMarkerTail.md#lock)
- [newFill](EShapePointsMarkerTail.md#newfill)
- [onFillChange](EShapePointsMarkerTail.md#onfillchange)
- [onSizeChange](EShapePointsMarkerTail.md#onsizechange)
- [onTypeChange](EShapePointsMarkerTail.md#ontypechange)
- [serialize](EShapePointsMarkerTail.md#serialize)
- [set](EShapePointsMarkerTail.md#set)
- [toTransform](EShapePointsMarkerTail.md#totransform)
- [toTransformMatrix](EShapePointsMarkerTail.md#totransformmatrix)
- [unlock](EShapePointsMarkerTail.md#unlock)
- [updateTransform](EShapePointsMarkerTail.md#updatetransform)
- [updateUploaded](EShapePointsMarkerTail.md#updateuploaded)

## Constructors

### constructor

• **new EShapePointsMarkerTail**(`parent`): [`EShapePointsMarkerTail`](EShapePointsMarkerTail.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapePointsMarkerBaseParent`](../interfaces/EShapePointsMarkerBaseParent.md) |

#### Returns

[`EShapePointsMarkerTail`](EShapePointsMarkerTail.md)

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[constructor](EShapePointsMarkerBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L40)

## Properties

### \_fill

• `Protected` **\_fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_fill](EShapePointsMarkerBase.md#_fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L38)

___

### \_isFillChanged

• `Protected` **\_isFillChanged**: `boolean`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_isFillChanged](EShapePointsMarkerBase.md#_isfillchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L33)

___

### \_isSizeChanged

• `Protected` **\_isSizeChanged**: `boolean`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_isSizeChanged](EShapePointsMarkerBase.md#_issizechanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L32)

___

### \_isTypeChanged

• `Protected` **\_isTypeChanged**: `boolean`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_isTypeChanged](EShapePointsMarkerBase.md#_istypechanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L31)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_lockCount](EShapePointsMarkerBase.md#_lockcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L30)

___

### \_parent

• `Protected` **\_parent**: [`EShapePointsMarkerBaseParent`](../interfaces/EShapePointsMarkerBaseParent.md)

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_parent](EShapePointsMarkerBase.md#_parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L29)

___

### \_size

• `Protected` **\_size**: `IPoint`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_size](EShapePointsMarkerBase.md#_size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L35)

___

### \_transform

• `Protected` `Optional` **\_transform**: `Matrix`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_transform](EShapePointsMarkerBase.md#_transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L36)

___

### \_transformId

• `Protected` **\_transformId**: `number`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_transformId](EShapePointsMarkerBase.md#_transformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L37)

___

### \_type

• `Protected` **\_type**: [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[_type](EShapePointsMarkerBase.md#_type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L34)

## Accessors

### fill

• `get` **fill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

EShapePointsMarkerBase.fill

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L168)

___

### size

• `get` **size**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

EShapePointsMarkerBase.size

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L109)

___

### transform

• `get` **transform**(): `Matrix`

#### Returns

`Matrix`

#### Inherited from

EShapePointsMarkerBase.transform

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L121)

___

### type

• `get` **type**(): [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Returns

[`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype)

#### Inherited from

EShapePointsMarkerBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L90)

• `set` **type**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EShapePointsMarkerType`](../index.md#eshapepointsmarkertype) |

#### Returns

`void`

#### Inherited from

EShapePointsMarkerBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L94)

## Methods

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md) |

#### Returns

`this`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[copy](EShapePointsMarkerBase.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L184)

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

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[deserialize](EShapePointsMarkerBase.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L209)

___

### lock

▸ **lock**(): `this`

#### Returns

`this`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[lock](EShapePointsMarkerBase.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L63)

___

### newFill

▸ **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[newFill](EShapePointsMarkerBase.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L59)

___

### onFillChange

▸ **onFillChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[onFillChange](EShapePointsMarkerBase.md#onfillchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L172)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[onSizeChange](EShapePointsMarkerBase.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L113)

___

### onTypeChange

▸ **onTypeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[onTypeChange](EShapePointsMarkerBase.md#ontypechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L101)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[serialize](EShapePointsMarkerBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L203)

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

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[set](EShapePointsMarkerBase.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L190)

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

#### Overrides

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[toTransform](EShapePointsMarkerBase.md#totransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-tail.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-tail.ts#L5)

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

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[toTransformMatrix](EShapePointsMarkerBase.md#totransformmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L147)

___

### unlock

▸ **unlock**(): `this`

#### Returns

`this`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[unlock](EShapePointsMarkerBase.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L73)

___

### updateTransform

▸ **updateTransform**(): `Matrix`

#### Returns

`Matrix`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[updateTransform](EShapePointsMarkerBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L125)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Inherited from

[EShapePointsMarkerBase](EShapePointsMarkerBase.md).[updateUploaded](EShapePointsMarkerBase.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-base.ts#L180)
