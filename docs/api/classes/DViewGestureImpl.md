[Winter Cardinal UI - v0.407.0](../index.md) / DViewGestureImpl

# Class: DViewGestureImpl

## Implements

- [`DViewGesture`](../interfaces/DViewGesture.md)

## Table of contents

### Constructors

- [constructor](DViewGestureImpl.md#constructor)

### Properties

- [\_constraint](DViewGestureImpl.md#_constraint)
- [\_gestureUtil](DViewGestureImpl.md#_gestureutil)
- [\_owner](DViewGestureImpl.md#_owner)
- [\_parent](DViewGestureImpl.md#_parent)

### Methods

- [onDown](DViewGestureImpl.md#ondown)
- [onEnd](DViewGestureImpl.md#onend)
- [onGestureMove](DViewGestureImpl.md#ongesturemove)
- [onStart](DViewGestureImpl.md#onstart)
- [onStop](DViewGestureImpl.md#onstop)
- [stop](DViewGestureImpl.md#stop)

## Constructors

### constructor

• **new DViewGestureImpl**(`owner`, `toTarget`, `parent`, `constraint`, `theme`, `options?`): [`DViewGestureImpl`](DViewGestureImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `toTarget` | [`DViewToTarget`](../index.md#dviewtotarget) |
| `parent` | [`DViewParent`](../interfaces/DViewParent.md) |
| `constraint` | [`DViewConstraint`](../index.md#dviewconstraint) |
| `theme` | [`DThemeViewGesture`](../interfaces/DThemeViewGesture.md) |
| `options?` | [`DViewGestureOptions`](../interfaces/DViewGestureOptions.md) |

#### Returns

[`DViewGestureImpl`](DViewGestureImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L23)

## Properties

### \_constraint

• `Protected` **\_constraint**: [`DViewConstraint`](../index.md#dviewconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L20)

___

### \_gestureUtil

• `Protected` `Optional` **\_gestureUtil**: [`UtilGesture`](UtilGesture.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L21)

___

### \_owner

• `Protected` **\_owner**: [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L18)

___

### \_parent

• `Protected` **\_parent**: [`DViewParent`](../interfaces/DViewParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L19)

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

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L131)

___

### onEnd

▸ **onEnd**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L81)

___

### onGestureMove

▸ **onGestureMove**(`target`, `dx`, `dy`, `x`, `y`, `ds`): `void`

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

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L91)

___

### onStart

▸ **onStart**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L75)

___

### onStop

▸ **onStop**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L86)

___

### stop

▸ **stop**(): `void`

Stops an animation if sxists.

#### Returns

`void`

#### Implementation of

[DViewGesture](../interfaces/DViewGesture.md).[stop](../interfaces/DViewGesture.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view-gesture-impl.ts#L127)
