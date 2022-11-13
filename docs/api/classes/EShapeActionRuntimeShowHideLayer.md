[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeShowHideLayer

# Class: EShapeActionRuntimeShowHideLayer

An action runtime.
Please note that all the action runtimes are shared across shapes.

## Hierarchy

- [`EShapeActionRuntimeConditional`](EShapeActionRuntimeConditional.md)

  ↳ **`EShapeActionRuntimeShowHideLayer`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeShowHideLayer.md#constructor)

### Properties

- [\_bringToFront](EShapeActionRuntimeShowHideLayer.md#_bringtofront)
- [\_data](EShapeActionRuntimeShowHideLayer.md#_data)
- [\_layers](EShapeActionRuntimeShowHideLayer.md#_layers)
- [condition](EShapeActionRuntimeShowHideLayer.md#condition)
- [reset](EShapeActionRuntimeShowHideLayer.md#reset)

### Methods

- [execute](EShapeActionRuntimeShowHideLayer.md#execute)
- [initialize](EShapeActionRuntimeShowHideLayer.md#initialize)
- [newData](EShapeActionRuntimeShowHideLayer.md#newdata)
- [onBlur](EShapeActionRuntimeShowHideLayer.md#onblur)
- [onDblClick](EShapeActionRuntimeShowHideLayer.md#ondblclick)
- [onDown](EShapeActionRuntimeShowHideLayer.md#ondown)
- [onDowning](EShapeActionRuntimeShowHideLayer.md#ondowning)
- [onFocus](EShapeActionRuntimeShowHideLayer.md#onfocus)
- [onMove](EShapeActionRuntimeShowHideLayer.md#onmove)
- [onRender](EShapeActionRuntimeShowHideLayer.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeShowHideLayer**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueShowHideLayer`](EShapeActionValueShowHideLayer.md) |

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[constructor](EShapeActionRuntimeConditional.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts#L24)

## Properties

### \_bringToFront

• `Protected` **\_bringToFront**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts#L22)

___

### \_data

• `Protected` **\_data**: `Map`<[`EShape`](../interfaces/EShape.md), [`EShapeActionRuntimeShowHideLayerData`](../interfaces/EShapeActionRuntimeShowHideLayerData.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts#L20)

___

### \_layers

• `Protected` **\_layers**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts#L21)

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

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[execute](EShapeActionRuntimeConditional.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts#L42)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts#L31)

___

### newData

▸ `Protected` **newData**(`shape`): `undefined` \| [`EShapeActionRuntimeShowHideLayerData`](../interfaces/EShapeActionRuntimeShowHideLayerData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`undefined` \| [`EShapeActionRuntimeShowHideLayerData`](../interfaces/EShapeActionRuntimeShowHideLayerData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-layer.ts#L63)

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

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDown](EShapeActionRuntimeConditional.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

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
