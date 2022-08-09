[Winter Cardinal UI - v0.205.1](../index.md) / EShapeActionRuntimeShowHideShape

# Class: EShapeActionRuntimeShowHideShape

## Hierarchy

- [`EShapeActionRuntimeConditional`](EShapeActionRuntimeConditional.md)

  ↳ **`EShapeActionRuntimeShowHideShape`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeShowHideShape.md#constructor)

### Properties

- [condition](EShapeActionRuntimeShowHideShape.md#condition)
- [reset](EShapeActionRuntimeShowHideShape.md#reset)

### Methods

- [execute](EShapeActionRuntimeShowHideShape.md#execute)
- [initialize](EShapeActionRuntimeShowHideShape.md#initialize)
- [onBlur](EShapeActionRuntimeShowHideShape.md#onblur)
- [onDblClick](EShapeActionRuntimeShowHideShape.md#ondblclick)
- [onDown](EShapeActionRuntimeShowHideShape.md#ondown)
- [onDowning](EShapeActionRuntimeShowHideShape.md#ondowning)
- [onFocus](EShapeActionRuntimeShowHideShape.md#onfocus)
- [onMove](EShapeActionRuntimeShowHideShape.md#onmove)
- [onRender](EShapeActionRuntimeShowHideShape.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeShowHideShape**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueShowHideShape`](EShapeActionValueShowHideShape.md) |

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[constructor](EShapeActionRuntimeConditional.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-shape.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-shape.ts#L13)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[condition](EShapeActionRuntimeConditional.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[reset](EShapeActionRuntimeConditional.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-shape.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-shape.ts#L21)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-shape.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-show-hide-shape.ts#L17)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)
