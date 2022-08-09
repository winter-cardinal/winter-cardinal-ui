[Winter Cardinal UI - v0.205.1](../index.md) / EShapeActionRuntimeConditional

# Class: EShapeActionRuntimeConditional

## Hierarchy

- [`EShapeActionRuntime`](EShapeActionRuntime.md)

  ↳ **`EShapeActionRuntimeConditional`**

  ↳↳ [`EShapeActionRuntimeBlink`](EShapeActionRuntimeBlink.md)

  ↳↳ [`EShapeActionRuntimeChangeCursor`](EShapeActionRuntimeChangeCursor.md)

  ↳↳ [`EShapeActionRuntimeChangeTextNumber`](EShapeActionRuntimeChangeTextNumber.md)

  ↳↳ [`EShapeActionRuntimeChangeTextText`](EShapeActionRuntimeChangeTextText.md)

  ↳↳ [`EShapeActionRuntimeEmitEvent`](EShapeActionRuntimeEmitEvent.md)

  ↳↳ [`EShapeActionRuntimeGestureLayer`](EShapeActionRuntimeGestureLayer.md)

  ↳↳ [`EShapeActionRuntimeGestureShape`](EShapeActionRuntimeGestureShape.md)

  ↳↳ [`EShapeActionRuntimeMiscEmitEvent`](EShapeActionRuntimeMiscEmitEvent.md)

  ↳↳ [`EShapeActionRuntimeMiscExecute`](EShapeActionRuntimeMiscExecute.md)

  ↳↳ [`EShapeActionRuntimeMiscWrite`](EShapeActionRuntimeMiscWrite.md)

  ↳↳ [`EShapeActionRuntimeOpenDialogExtension`](EShapeActionRuntimeOpenDialogExtension.md)

  ↳↳ [`EShapeActionRuntimeOpenDialog`](EShapeActionRuntimeOpenDialog.md)

  ↳↳ [`EShapeActionRuntimeOpen`](EShapeActionRuntimeOpen.md)

  ↳↳ [`EShapeActionRuntimeShowHideLayer`](EShapeActionRuntimeShowHideLayer.md)

  ↳↳ [`EShapeActionRuntimeShowHideShape`](EShapeActionRuntimeShowHideShape.md)

  ↳↳ [`EShapeActionRuntimeShowHide`](EShapeActionRuntimeShowHide.md)

  ↳↳ [`EShapeActionRuntimeTransformMove`](EShapeActionRuntimeTransformMove.md)

  ↳↳ [`EShapeActionRuntimeTransformResize`](EShapeActionRuntimeTransformResize.md)

  ↳↳ [`EShapeActionRuntimeTransformRotate`](EShapeActionRuntimeTransformRotate.md)

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeConditional.md#constructor)

### Properties

- [condition](EShapeActionRuntimeConditional.md#condition)
- [reset](EShapeActionRuntimeConditional.md#reset)

### Methods

- [execute](EShapeActionRuntimeConditional.md#execute)
- [initialize](EShapeActionRuntimeConditional.md#initialize)
- [onBlur](EShapeActionRuntimeConditional.md#onblur)
- [onDblClick](EShapeActionRuntimeConditional.md#ondblclick)
- [onDown](EShapeActionRuntimeConditional.md#ondown)
- [onDowning](EShapeActionRuntimeConditional.md#ondowning)
- [onFocus](EShapeActionRuntimeConditional.md#onfocus)
- [onMove](EShapeActionRuntimeConditional.md#onmove)
- [onRender](EShapeActionRuntimeConditional.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeConditional**(`value`, `reset`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |
| `reset` | `number` |

#### Overrides

[EShapeActionRuntime](EShapeActionRuntime.md).[constructor](EShapeActionRuntime.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L15)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[reset](EShapeActionRuntime.md#reset)

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

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[execute](EShapeActionRuntime.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L27)

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

[EShapeActionRuntime](EShapeActionRuntime.md).[initialize](EShapeActionRuntime.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[EShapeActionRuntime](EShapeActionRuntime.md).[onBlur](EShapeActionRuntime.md#onblur)

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

[EShapeActionRuntime](EShapeActionRuntime.md).[onDblClick](EShapeActionRuntime.md#ondblclick)

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

[EShapeActionRuntime](EShapeActionRuntime.md).[onDown](EShapeActionRuntime.md#ondown)

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

[EShapeActionRuntime](EShapeActionRuntime.md).[onDowning](EShapeActionRuntime.md#ondowning)

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

[EShapeActionRuntime](EShapeActionRuntime.md).[onFocus](EShapeActionRuntime.md#onfocus)

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

[EShapeActionRuntime](EShapeActionRuntime.md).[onMove](EShapeActionRuntime.md#onmove)

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

[EShapeActionRuntime](EShapeActionRuntime.md).[onRender](EShapeActionRuntime.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)
