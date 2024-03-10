[Winter Cardinal UI - v0.414.0](../index.md) / DViewTransformImpl

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
- [\_isStarted](DViewTransformImpl.md#_isstarted)
- [\_newScaleX](DViewTransformImpl.md#_newscalex)
- [\_newScaleY](DViewTransformImpl.md#_newscaley)
- [\_newX](DViewTransformImpl.md#_newx)
- [\_newY](DViewTransformImpl.md#_newy)
- [\_oldScaleX](DViewTransformImpl.md#_oldscalex)
- [\_oldScaleY](DViewTransformImpl.md#_oldscaley)
- [\_oldX](DViewTransformImpl.md#_oldx)
- [\_oldY](DViewTransformImpl.md#_oldy)
- [\_owner](DViewTransformImpl.md#_owner)
- [\_parent](DViewTransformImpl.md#_parent)
- [\_toTarget](DViewTransformImpl.md#_totarget)

### Methods

- [onEnd](DViewTransformImpl.md#onend)
- [onStart](DViewTransformImpl.md#onstart)
- [onStop](DViewTransformImpl.md#onstop)
- [onTime](DViewTransformImpl.md#ontime)
- [start](DViewTransformImpl.md#start)
- [stop](DViewTransformImpl.md#stop)

## Constructors

### constructor

• **new DViewTransformImpl**(`owner`, `toTarget`, `parent`, `constraint`, `duration`): [`DViewTransformImpl`](DViewTransformImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `toTarget` | [`DViewToTarget`](../index.md#dviewtotarget) |
| `parent` | [`DViewParent`](../interfaces/DViewParent.md) |
| `constraint` | [`DViewConstraint`](../index.md#dviewconstraint) |
| `duration` | `number` |

#### Returns

[`DViewTransformImpl`](DViewTransformImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L31)

## Properties

### \_animation

• `Protected` **\_animation**: [`DAnimation`](../interfaces/DAnimation.md)\<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L26)

___

### \_constraint

• `Protected` **\_constraint**: [`DViewConstraint`](../index.md#dviewconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L17)

___

### \_duration

• `Protected` **\_duration**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L28)

___

### \_isStarted

• `Protected` **\_isStarted**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L29)

___

### \_newScaleX

• `Protected` **\_newScaleX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L20)

___

### \_newScaleY

• `Protected` **\_newScaleY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L21)

___

### \_newX

• `Protected` **\_newX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L18)

___

### \_newY

• `Protected` **\_newY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L19)

___

### \_oldScaleX

• `Protected` **\_oldScaleX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L24)

___

### \_oldScaleY

• `Protected` **\_oldScaleY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L25)

___

### \_oldX

• `Protected` **\_oldX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L22)

___

### \_oldY

• `Protected` **\_oldY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L23)

___

### \_owner

• `Protected` **\_owner**: [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L15)

___

### \_parent

• `Protected` **\_parent**: [`DViewParent`](../interfaces/DViewParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L27)

___

### \_toTarget

• `Protected` **\_toTarget**: [`DViewToTarget`](../index.md#dviewtotarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L16)

## Methods

### onEnd

▸ **onEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L89)

___

### onStart

▸ **onStart**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L69)

___

### onStop

▸ **onStop**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L94)

___

### onTime

▸ **onTime**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L74)

___

### start

▸ **start**(`target`, `x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Sets to the specified position and scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DViewTarget`](../interfaces/DViewTarget.md) | a target |
| `x` | `number` | a local X coordinate positoon |
| `y` | `number` | a local Y coordinate position |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Implementation of

[DViewTransform](../interfaces/DViewTransform.md).[start](../interfaces/DViewTransform.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L99)

___

### stop

▸ **stop**(): `void`

Stops an animation if exits.

#### Returns

`void`

#### Implementation of

[DViewTransform](../interfaces/DViewTransform.md).[stop](../interfaces/DViewTransform.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform-impl.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view-transform-impl.ts#L137)
