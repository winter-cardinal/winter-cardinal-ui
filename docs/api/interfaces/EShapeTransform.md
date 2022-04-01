[Winter Cardinal UI - v0.160.0](../index.md) / EShapeTransform

# Interface: EShapeTransform

## Hierarchy

- `Transform`

  ↳ **`EShapeTransform`**

## Implemented by

- [`EShapeTransformImpl`](../classes/EShapeTransformImpl.md)

## Table of contents

### Properties

- [\_currentLocalID](EShapeTransform.md#_currentlocalid)
- [\_cx](EShapeTransform.md#_cx)
- [\_cy](EShapeTransform.md#_cy)
- [\_localID](EShapeTransform.md#_localid)
- [\_parentID](EShapeTransform.md#_parentid)
- [\_rotation](EShapeTransform.md#_rotation)
- [\_sx](EShapeTransform.md#_sx)
- [\_sy](EShapeTransform.md#_sy)
- [\_worldID](EShapeTransform.md#_worldid)
- [internalTransform](EShapeTransform.md#internaltransform)
- [localTransform](EShapeTransform.md#localtransform)
- [pivot](EShapeTransform.md#pivot)
- [position](EShapeTransform.md#position)
- [rotation](EShapeTransform.md#rotation)
- [scale](EShapeTransform.md#scale)
- [skew](EShapeTransform.md#skew)
- [worldTransform](EShapeTransform.md#worldtransform)

### Methods

- [getLocalId](EShapeTransform.md#getlocalid)
- [getLocalIdCurrent](EShapeTransform.md#getlocalidcurrent)
- [getParentId](EShapeTransform.md#getparentid)
- [getWorldId](EShapeTransform.md#getworldid)
- [onChange](EShapeTransform.md#onchange)
- [setFromMatrix](EShapeTransform.md#setfrommatrix)
- [updateLocalTransform](EShapeTransform.md#updatelocaltransform)
- [updateSkew](EShapeTransform.md#updateskew)
- [updateTransform](EShapeTransform.md#updatetransform)

## Properties

### \_currentLocalID

• `Protected` **\_currentLocalID**: `number`

The locally unique ID of the local transform
used to calculate the current local transformation matrix.

**`member`** {number} PIXI.Transform#_currentLocalID

#### Inherited from

Transform.\_currentLocalID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12273

___

### \_cx

• `Protected` **\_cx**: `number`

The X-coordinate value of the normalized local X axis,
the first column of the local transformation matrix without a scale.

**`member`** {number} PIXI.Transform#_cx

#### Inherited from

Transform.\_cx

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12234

___

### \_cy

• `Protected` **\_cy**: `number`

The X-coordinate value of the normalized local Y axis,
the second column of the local transformation matrix without a scale.

**`member`** {number} PIXI.Transform#_cy

#### Inherited from

Transform.\_cy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12250

___

### \_localID

• `Protected` **\_localID**: `number`

The locally unique ID of the local transform.

**`member`** {number} PIXI.Transform#_localID

#### Inherited from

Transform.\_localID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12265

___

### \_parentID

• `Protected` **\_parentID**: `number`

The locally unique ID of the parent's world transform
used to calculate the current world transformation matrix.

**`member`** {number} PIXI.Transform#_parentID

#### Inherited from

Transform.\_parentID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12288

___

### \_rotation

• `Protected` **\_rotation**: `number`

The rotation amount.

**`member`** {number} PIXI.Transform#_rotation

#### Inherited from

Transform.\_rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12226

___

### \_sx

• `Protected` **\_sx**: `number`

The Y-coordinate value of the normalized local X axis,
the first column of the local transformation matrix without a scale.

**`member`** {number} PIXI.Transform#_sx

#### Inherited from

Transform.\_sx

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12242

___

### \_sy

• `Protected` **\_sy**: `number`

The Y-coordinate value of the normalized local Y axis,
the second column of the local transformation matrix without a scale.

**`member`** {number} PIXI.Transform#_sy

#### Inherited from

Transform.\_sy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12258

___

### \_worldID

• `Protected` **\_worldID**: `number`

The locally unique ID of the world transform.

**`member`** {number} PIXI.Transform#_worldID

#### Inherited from

Transform.\_worldID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12280

___

### internalTransform

• **internalTransform**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L10)

___

### localTransform

• **localTransform**: `Matrix`

The local transformation matrix.

**`member`** {PIXI.Matrix} PIXI.Transform#localTransform

#### Inherited from

Transform.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12195

___

### pivot

• **pivot**: `ObservablePoint`

#### Overrides

Transform.pivot

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L13)

___

### position

• **position**: `ObservablePoint`

#### Overrides

Transform.position

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L12)

___

### rotation

• **rotation**: `number`

#### Overrides

Transform.rotation

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L14)

___

### scale

• **scale**: `ObservablePoint`

#### Overrides

Transform.scale

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L16)

___

### skew

• **skew**: `ObservablePoint`

#### Overrides

Transform.skew

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L15)

___

### worldTransform

• **worldTransform**: `Matrix`

The world transformation matrix.

**`member`** {PIXI.Matrix} PIXI.Transform#worldTransform

#### Inherited from

Transform.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12189

## Methods

### getLocalId

▸ **getLocalId**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L19)

___

### getLocalIdCurrent

▸ **getLocalIdCurrent**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L18)

___

### getParentId

▸ **getParentId**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L20)

___

### getWorldId

▸ **getWorldId**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-transform.ts#L21)

___

### onChange

▸ `Protected` **onChange**(): `void`

Called when a value changes.

#### Returns

`void`

#### Inherited from

Transform.onChange

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12294

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

#### Inherited from

Transform.setFromMatrix

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12316

___

### updateLocalTransform

▸ **updateLocalTransform**(): `void`

Updates the local transformation matrix.

#### Returns

`void`

#### Inherited from

Transform.updateLocalTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12304

___

### updateSkew

▸ `Protected` **updateSkew**(): `void`

Called when the skew or the rotation changes.

#### Returns

`void`

#### Inherited from

Transform.updateSkew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12300

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

#### Inherited from

Transform.updateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12310
