[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeGestureShape

# Class: EShapeActionRuntimeGestureShape

An action runtime.
Please note that all the action runtimes are shared across shapes.

## Hierarchy

- [`EShapeActionRuntimeConditional`](EShapeActionRuntimeConditional.md)

  ↳ **`EShapeActionRuntimeGestureShape`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeGestureShape.md#constructor)

### Properties

- [\_operationType](EShapeActionRuntimeGestureShape.md#_operationtype)
- [\_scaleMax](EShapeActionRuntimeGestureShape.md#_scalemax)
- [\_scaleMin](EShapeActionRuntimeGestureShape.md#_scalemin)
- [condition](EShapeActionRuntimeGestureShape.md#condition)
- [reset](EShapeActionRuntimeGestureShape.md#reset)
- [GESTURE\_UTIL](EShapeActionRuntimeGestureShape.md#gesture_util)

### Methods

- [execute](EShapeActionRuntimeGestureShape.md#execute)
- [getGestureUtil](EShapeActionRuntimeGestureShape.md#getgestureutil)
- [initialize](EShapeActionRuntimeGestureShape.md#initialize)
- [newGestureUtil](EShapeActionRuntimeGestureShape.md#newgestureutil)
- [onBlur](EShapeActionRuntimeGestureShape.md#onblur)
- [onDblClick](EShapeActionRuntimeGestureShape.md#ondblclick)
- [onDown](EShapeActionRuntimeGestureShape.md#ondown)
- [onDowning](EShapeActionRuntimeGestureShape.md#ondowning)
- [onFocus](EShapeActionRuntimeGestureShape.md#onfocus)
- [onGestureMove](EShapeActionRuntimeGestureShape.md#ongesturemove)
- [onMove](EShapeActionRuntimeGestureShape.md#onmove)
- [onRender](EShapeActionRuntimeGestureShape.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeGestureShape**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueGesture`](EShapeActionValueGesture.md) |

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[constructor](EShapeActionRuntimeConditional.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L23)

## Properties

### \_operationType

• `Protected` **\_operationType**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L19)

___

### \_scaleMax

• `Protected` **\_scaleMax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L21)

___

### \_scaleMin

• `Protected` **\_scaleMin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L20)

___

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[condition](EShapeActionRuntimeConditional.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[reset](EShapeActionRuntimeConditional.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### GESTURE\_UTIL

▪ `Static` `Protected` `Optional` **GESTURE\_UTIL**: [`UtilGesture`](UtilGesture.md)<[`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L18)

## Methods

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[execute](EShapeActionRuntimeConditional.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L27)

___

### getGestureUtil

▸ `Protected` **getGestureUtil**(): [`UtilGesture`](UtilGesture.md)<[`EShape`](../interfaces/EShape.md)\>

#### Returns

[`UtilGesture`](UtilGesture.md)<[`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L40)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[initialize](EShapeActionRuntimeConditional.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

___

### newGestureUtil

▸ `Protected` **newGestureUtil**(): [`UtilGesture`](UtilGesture.md)<[`EShape`](../interfaces/EShape.md)\>

#### Returns

[`UtilGesture`](UtilGesture.md)<[`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L44)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onBlur](EShapeActionRuntimeConditional.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDblClick](EShapeActionRuntimeConditional.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDown](EShapeActionRuntimeConditional.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L30)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDowning](EShapeActionRuntimeConditional.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onFocus](EShapeActionRuntimeConditional.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

___

### onGestureMove

▸ `Protected` **onGestureMove**(`target`, `dx`, `dy`, `x`, `y`, `ds`, `work`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShape`](../interfaces/EShape.md) |
| `dx` | `number` |
| `dy` | `number` |
| `x` | `number` |
| `y` | `number` |
| `ds` | `number` |
| `work` | `Point` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-shape.ts#L62)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onMove](EShapeActionRuntimeConditional.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRender](EShapeActionRuntimeConditional.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)
