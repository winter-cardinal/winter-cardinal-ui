[Winter Cardinal UI - v0.167.0](../index.md) / DViewTransformImpl

# Class: DViewTransformImpl

## Implements

- [`DViewTransform`](../interfaces/DViewTransform.md)

## Table of contents

### Constructors

- [constructor](DViewTransformImpl.md#constructor)

### Properties

- [\_animation](DViewTransformImpl.md#_animation)
- [\_constraint](DViewTransformImpl.md#_constraint)
- [\_duration](DViewTransformImpl.md#_duration)
- [\_newScaleX](DViewTransformImpl.md#_newscalex)
- [\_newScaleY](DViewTransformImpl.md#_newscaley)
- [\_newX](DViewTransformImpl.md#_newx)
- [\_newY](DViewTransformImpl.md#_newy)
- [\_oldScaleX](DViewTransformImpl.md#_oldscalex)
- [\_oldScaleY](DViewTransformImpl.md#_oldscaley)
- [\_oldX](DViewTransformImpl.md#_oldx)
- [\_oldY](DViewTransformImpl.md#_oldy)
- [\_parent](DViewTransformImpl.md#_parent)
- [\_stopper](DViewTransformImpl.md#_stopper)
- [\_toTarget](DViewTransformImpl.md#_totarget)

### Methods

- [onTime](DViewTransformImpl.md#ontime)
- [start](DViewTransformImpl.md#start)
- [stop](DViewTransformImpl.md#stop)

## Constructors

### constructor

• **new DViewTransformImpl**(`parent`, `toTarget`, `stopper`, `constraint`, `duration`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `toTarget` | [`DViewToTarget`](../index.md#dviewtotarget) |
| `stopper` | [`DViewStopper`](../interfaces/DViewStopper.md) |
| `constraint` | [`DViewConstraint`](../index.md#dviewconstraint) |
| `duration` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L30)

## Properties

### \_animation

• `Protected` **\_animation**: [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L26)

___

### \_constraint

• `Protected` **\_constraint**: [`DViewConstraint`](../index.md#dviewconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L17)

___

### \_duration

• `Protected` **\_duration**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L28)

___

### \_newScaleX

• `Protected` **\_newScaleX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L20)

___

### \_newScaleY

• `Protected` **\_newScaleY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L21)

___

### \_newX

• `Protected` **\_newX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L18)

___

### \_newY

• `Protected` **\_newY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L19)

___

### \_oldScaleX

• `Protected` **\_oldScaleX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L24)

___

### \_oldScaleY

• `Protected` **\_oldScaleY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L25)

___

### \_oldX

• `Protected` **\_oldX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L22)

___

### \_oldY

• `Protected` **\_oldY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L23)

___

### \_parent

• `Protected` **\_parent**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L15)

___

### \_stopper

• `Protected` **\_stopper**: [`DViewStopper`](../interfaces/DViewStopper.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L27)

___

### \_toTarget

• `Protected` **\_toTarget**: [`DViewToTarget`](../index.md#dviewtotarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L16)

## Methods

### onTime

▸ `Protected` **onTime**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L58)

___

### start

▸ **start**(`target`, `x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Sets to the specified position and scale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DViewTarget`](../interfaces/DViewTarget.md) |
| `x` | `number` |
| `y` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DViewTransform](../interfaces/DViewTransform.md).[start](../interfaces/DViewTransform.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L73)

___

### stop

▸ **stop**(): `void`

Stops an animation if exits.

#### Returns

`void`

#### Implementation of

[DViewTransform](../interfaces/DViewTransform.md).[stop](../interfaces/DViewTransform.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L108)
