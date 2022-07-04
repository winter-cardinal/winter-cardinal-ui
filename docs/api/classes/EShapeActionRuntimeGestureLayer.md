[Winter Cardinal UI - v0.194.0](../index.md) / EShapeActionRuntimeGestureLayer

# Class: EShapeActionRuntimeGestureLayer

## Hierarchy

- [`EShapeActionRuntimeConditional`](EShapeActionRuntimeConditional.md)

  ↳ **`EShapeActionRuntimeGestureLayer`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeGestureLayer.md#constructor)

### Properties

- [\_layers](EShapeActionRuntimeGestureLayer.md#_layers)
- [\_operationType](EShapeActionRuntimeGestureLayer.md#_operationtype)
- [\_scaleMax](EShapeActionRuntimeGestureLayer.md#_scalemax)
- [\_scaleMin](EShapeActionRuntimeGestureLayer.md#_scalemin)
- [condition](EShapeActionRuntimeGestureLayer.md#condition)
- [reset](EShapeActionRuntimeGestureLayer.md#reset)
- [GESTURE\_UTIL](EShapeActionRuntimeGestureLayer.md#gesture_util)

### Methods

- [execute](EShapeActionRuntimeGestureLayer.md#execute)
- [getGestureUtil](EShapeActionRuntimeGestureLayer.md#getgestureutil)
- [initialize](EShapeActionRuntimeGestureLayer.md#initialize)
- [newGestureUtil](EShapeActionRuntimeGestureLayer.md#newgestureutil)
- [onBlur](EShapeActionRuntimeGestureLayer.md#onblur)
- [onDblClick](EShapeActionRuntimeGestureLayer.md#ondblclick)
- [onDown](EShapeActionRuntimeGestureLayer.md#ondown)
- [onDowning](EShapeActionRuntimeGestureLayer.md#ondowning)
- [onFocus](EShapeActionRuntimeGestureLayer.md#onfocus)
- [onGestureMove](EShapeActionRuntimeGestureLayer.md#ongesturemove)
- [onMove](EShapeActionRuntimeGestureLayer.md#onmove)
- [onRender](EShapeActionRuntimeGestureLayer.md#onrender)
- [toSize](EShapeActionRuntimeGestureLayer.md#tosize)

## Constructors

### constructor

• **new EShapeActionRuntimeGestureLayer**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueGesture`](EShapeActionValueGesture.md) |

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[constructor](EShapeActionRuntimeConditional.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L24)

## Properties

### \_layers

• `Protected` **\_layers**: `Map`<[`EShape`](../interfaces/EShape.md), [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L19)

___

### \_operationType

• `Protected` **\_operationType**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L20)

___

### \_scaleMax

• `Protected` **\_scaleMax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L22)

___

### \_scaleMin

• `Protected` **\_scaleMin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L21)

___

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[condition](EShapeActionRuntimeConditional.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[reset](EShapeActionRuntimeConditional.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### GESTURE\_UTIL

▪ `Static` `Protected` `Optional` **GESTURE\_UTIL**: [`UtilGesture`](UtilGesture.md)<[`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L18)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L27)

___

### getGestureUtil

▸ `Protected` **getGestureUtil**(): [`UtilGesture`](UtilGesture.md)<[`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)\>

#### Returns

[`UtilGesture`](UtilGesture.md)<[`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L56)

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

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[initialize](EShapeActionRuntimeConditional.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L32)

___

### newGestureUtil

▸ `Protected` **newGestureUtil**(): [`UtilGesture`](UtilGesture.md)<[`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)\>

#### Returns

[`UtilGesture`](UtilGesture.md)<[`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L60)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L45)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

___

### onGestureMove

▸ `Protected` **onGestureMove**(`layer`, `dx`, `dy`, `x`, `y`, `ds`, `work`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer) |
| `dx` | `number` |
| `dy` | `number` |
| `x` | `number` |
| `y` | `number` |
| `ds` | `number` |
| `work` | `Point` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L78)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

___

### toSize

▸ `Protected` **toSize**(`layer`, `result`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer) |
| `result` | `Point` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-gesture-layer.ts#L128)
