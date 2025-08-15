[Winter Cardinal UI - v0.457.0](../index.md) / EShapeTransformImpl

# Class: EShapeTransformImpl

## Hierarchy

- `Transform`

  ↳ **`EShapeTransformImpl`**

## Implements

- [`EShapeTransform`](../interfaces/EShapeTransform.md)

## Table of contents

### Constructors

- [constructor](EShapeTransformImpl.md#constructor)

### Properties

- [\_currentLocalID](EShapeTransformImpl.md#_currentlocalid)
- [\_cx](EShapeTransformImpl.md#_cx)
- [\_cy](EShapeTransformImpl.md#_cy)
- [\_localID](EShapeTransformImpl.md#_localid)
- [\_parent](EShapeTransformImpl.md#_parent)
- [\_parentID](EShapeTransformImpl.md#_parentid)
- [\_rotation](EShapeTransformImpl.md#_rotation)
- [\_sx](EShapeTransformImpl.md#_sx)
- [\_sy](EShapeTransformImpl.md#_sy)
- [\_worldID](EShapeTransformImpl.md#_worldid)
- [internalTransform](EShapeTransformImpl.md#internaltransform)
- [localTransform](EShapeTransformImpl.md#localtransform)
- [pivot](EShapeTransformImpl.md#pivot)
- [position](EShapeTransformImpl.md#position)
- [rotation](EShapeTransformImpl.md#rotation)
- [scale](EShapeTransformImpl.md#scale)
- [skew](EShapeTransformImpl.md#skew)
- [worldTransform](EShapeTransformImpl.md#worldtransform)
- [IDENTITY](EShapeTransformImpl.md#identity)

### Methods

- [getLocalId](EShapeTransformImpl.md#getlocalid)
- [getLocalIdCurrent](EShapeTransformImpl.md#getlocalidcurrent)
- [getParentId](EShapeTransformImpl.md#getparentid)
- [getWorldId](EShapeTransformImpl.md#getworldid)
- [onChange](EShapeTransformImpl.md#onchange)
- [setFromMatrix](EShapeTransformImpl.md#setfrommatrix)
- [updateLocalTransform](EShapeTransformImpl.md#updatelocaltransform)
- [updateSkew](EShapeTransformImpl.md#updateskew)
- [updateTransform](EShapeTransformImpl.md#updatetransform)

## Constructors

### constructor

• **new EShapeTransformImpl**(`parent`): [`EShapeTransformImpl`](EShapeTransformImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeTransformParent`](../interfaces/EShapeTransformParent.md) |

#### Returns

[`EShapeTransformImpl`](EShapeTransformImpl.md)

#### Overrides

Transform.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L28)

## Properties

### \_currentLocalID

• `Protected` **\_currentLocalID**: `number`

The locally unique ID of the local transform
used to calculate the current local transformation matrix.

**`Member`**

PIXI.Transform#_currentLocalID

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_currentLocalID](../interfaces/EShapeTransform.md#_currentlocalid)

#### Inherited from

Transform.\_currentLocalID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12669

___

### \_cx

• `Protected` **\_cx**: `number`

The X-coordinate value of the normalized local X axis,
the first column of the local transformation matrix without a scale.

**`Member`**

PIXI.Transform#_cx

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_cx](../interfaces/EShapeTransform.md#_cx)

#### Inherited from

Transform.\_cx

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12630

___

### \_cy

• `Protected` **\_cy**: `number`

The X-coordinate value of the normalized local Y axis,
the second column of the local transformation matrix without a scale.

**`Member`**

PIXI.Transform#_cy

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_cy](../interfaces/EShapeTransform.md#_cy)

#### Inherited from

Transform.\_cy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12646

___

### \_localID

• `Protected` **\_localID**: `number`

The locally unique ID of the local transform.

**`Member`**

PIXI.Transform#_localID

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_localID](../interfaces/EShapeTransform.md#_localid)

#### Inherited from

Transform.\_localID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12661

___

### \_parent

• `Protected` **\_parent**: [`EShapeTransformParent`](../interfaces/EShapeTransformParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L25)

___

### \_parentID

• `Protected` **\_parentID**: `number`

The locally unique ID of the parent's world transform
used to calculate the current world transformation matrix.

**`Member`**

PIXI.Transform#_parentID

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_parentID](../interfaces/EShapeTransform.md#_parentid)

#### Inherited from

Transform.\_parentID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12684

___

### \_rotation

• `Protected` **\_rotation**: `number`

The rotation amount.

**`Member`**

PIXI.Transform#_rotation

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_rotation](../interfaces/EShapeTransform.md#_rotation)

#### Inherited from

Transform.\_rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12622

___

### \_sx

• `Protected` **\_sx**: `number`

The Y-coordinate value of the normalized local X axis,
the first column of the local transformation matrix without a scale.

**`Member`**

PIXI.Transform#_sx

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_sx](../interfaces/EShapeTransform.md#_sx)

#### Inherited from

Transform.\_sx

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12638

___

### \_sy

• `Protected` **\_sy**: `number`

The Y-coordinate value of the normalized local Y axis,
the second column of the local transformation matrix without a scale.

**`Member`**

PIXI.Transform#_sy

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_sy](../interfaces/EShapeTransform.md#_sy)

#### Inherited from

Transform.\_sy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12654

___

### \_worldID

• `Protected` **\_worldID**: `number`

The locally unique ID of the world transform.

**`Member`**

PIXI.Transform#_worldID

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[_worldID](../interfaces/EShapeTransform.md#_worldid)

#### Inherited from

Transform.\_worldID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12676

___

### internalTransform

• **internalTransform**: `Matrix`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[internalTransform](../interfaces/EShapeTransform.md#internaltransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L26)

___

### localTransform

• **localTransform**: `Matrix`

The local transformation matrix.

**`Member`**

PIXI.Transform#localTransform

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[localTransform](../interfaces/EShapeTransform.md#localtransform)

#### Inherited from

Transform.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12591

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.

**`Member`**

PIXI.Transform#pivot

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[pivot](../interfaces/EShapeTransform.md#pivot)

#### Inherited from

Transform.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12609

___

### position

• **position**: `ObservablePoint`

The coordinate of the object relative to the local coordinates of the parent.

**`Member`**

PIXI.Transform#position

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[position](../interfaces/EShapeTransform.md#position)

#### Inherited from

Transform.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12597

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.

**`Member`**

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[rotation](../interfaces/EShapeTransform.md#rotation)

#### Inherited from

Transform.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12718

___

### scale

• **scale**: `ObservablePoint`

The scale factor of the object.

**`Member`**

PIXI.Transform#scale

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[scale](../interfaces/EShapeTransform.md#scale)

#### Inherited from

Transform.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12603

___

### skew

• **skew**: `ObservablePoint`

The skew amount, on the x and y axis.

**`Member`**

PIXI.Transform#skew

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[skew](../interfaces/EShapeTransform.md#skew)

#### Inherited from

Transform.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12615

___

### worldTransform

• **worldTransform**: `Matrix`

The world transformation matrix.

**`Member`**

PIXI.Transform#worldTransform

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[worldTransform](../interfaces/EShapeTransform.md#worldtransform)

#### Inherited from

Transform.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12585

___

### IDENTITY

▪ `Static` **IDENTITY**: `Transform`

A default (identity) transform

**`Static`**

**`Constant`**

**`Member`**

#### Inherited from

Transform.IDENTITY

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12726

## Methods

### getLocalId

▸ **getLocalId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[getLocalId](../interfaces/EShapeTransform.md#getlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L48)

___

### getLocalIdCurrent

▸ **getLocalIdCurrent**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[getLocalIdCurrent](../interfaces/EShapeTransform.md#getlocalidcurrent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L44)

___

### getParentId

▸ **getParentId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[getParentId](../interfaces/EShapeTransform.md#getparentid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L52)

___

### getWorldId

▸ **getWorldId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[getWorldId](../interfaces/EShapeTransform.md#getworldid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L56)

___

### onChange

▸ **onChange**(): `void`

Called when a value changes.

#### Returns

`void`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[onChange](../interfaces/EShapeTransform.md#onchange)

#### Overrides

Transform.onChange

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L34)

___

### setFromMatrix

▸ **setFromMatrix**(`matrix`): `void`

Decomposes a matrix and sets the transforms properties based on it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `Matrix` | The matrix to decompose |

#### Returns

`void`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[setFromMatrix](../interfaces/EShapeTransform.md#setfrommatrix)

#### Inherited from

Transform.setFromMatrix

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12712

___

### updateLocalTransform

▸ **updateLocalTransform**(): `void`

Updates the local transformation matrix.

#### Returns

`void`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[updateLocalTransform](../interfaces/EShapeTransform.md#updatelocaltransform)

#### Inherited from

Transform.updateLocalTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12700

___

### updateSkew

▸ **updateSkew**(): `void`

Called when the skew or the rotation changes.

#### Returns

`void`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[updateSkew](../interfaces/EShapeTransform.md#updateskew)

#### Overrides

Transform.updateSkew

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L39)

___

### updateTransform

▸ **updateTransform**(`parentTransform`): `void`

Updates the local and the world transformation matrices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentTransform` | `Transform` | The parent transform |

#### Returns

`void`

#### Implementation of

[EShapeTransform](../interfaces/EShapeTransform.md).[updateTransform](../interfaces/EShapeTransform.md#updatetransform)

#### Overrides

Transform.updateTransform

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L60)
