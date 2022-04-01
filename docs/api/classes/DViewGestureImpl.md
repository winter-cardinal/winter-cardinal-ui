[Winter Cardinal UI - v0.160.0](../index.md) / DViewGestureImpl

# Class: DViewGestureImpl

## Implements

- [`DViewGesture`](../interfaces/DViewGesture.md)

## Table of contents

### Constructors

- [constructor](DViewGestureImpl.md#constructor)

### Properties

- [\_constraint](DViewGestureImpl.md#_constraint)
- [\_gestureUtil](DViewGestureImpl.md#_gestureutil)
- [\_parent](DViewGestureImpl.md#_parent)
- [\_stopper](DViewGestureImpl.md#_stopper)

### Methods

- [onDown](DViewGestureImpl.md#ondown)
- [onGestureMove](DViewGestureImpl.md#ongesturemove)
- [stop](DViewGestureImpl.md#stop)

## Constructors

### constructor

• **new DViewGestureImpl**(`parent`, `toTarget`, `stopper`, `constraint`, `theme`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `toTarget` | [`DViewToTarget`](../index.md#dviewtotarget) |
| `stopper` | [`DViewStopper`](../interfaces/DViewStopper.md) |
| `constraint` | [`DViewConstraint`](../index.md#dviewconstraint) |
| `theme` | [`DThemeViewGesture`](../interfaces/DThemeViewGesture.md) |
| `options?` | [`DViewGestureOptions`](../interfaces/DViewGestureOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L23)

## Properties

### \_constraint

• `Protected` **\_constraint**: [`DViewConstraint`](../index.md#dviewconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L20)

___

### \_gestureUtil

• `Protected` `Optional` **\_gestureUtil**: [`UtilGesture`](UtilGesture.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L21)

___

### \_parent

• `Protected` **\_parent**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L18)

___

### \_stopper

• `Protected` **\_stopper**: [`DViewStopper`](../interfaces/DViewStopper.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L19)

## Methods

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L107)

___

### onGestureMove

▸ `Protected` **onGestureMove**(`target`, `dx`, `dy`, `x`, `y`, `ds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| [`DViewTarget`](../interfaces/DViewTarget.md) |
| `dx` | `number` |
| `dy` | `number` |
| `x` | `number` |
| `y` | `number` |
| `ds` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L67)

___

### stop

▸ **stop**(): `void`

Stops an animation if sxists.

#### Returns

`void`

#### Implementation of

[DViewGesture](../interfaces/DViewGesture.md).[stop](../interfaces/DViewGesture.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L103)
