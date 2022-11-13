[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeTransformResize

# Class: EShapeActionRuntimeTransformResize

An action runtime.
Please note that all the action runtimes are shared across shapes.

## Hierarchy

- [`EShapeActionRuntimeConditional`](EShapeActionRuntimeConditional.md)

  ↳ **`EShapeActionRuntimeTransformResize`**

  ↳↳ [`EShapeActionRuntimeTransformResizeHeightAbsolute`](EShapeActionRuntimeTransformResizeHeightAbsolute.md)

  ↳↳ [`EShapeActionRuntimeTransformResizeHeightRelative`](EShapeActionRuntimeTransformResizeHeightRelative.md)

  ↳↳ [`EShapeActionRuntimeTransformResizeSizeAbsolute`](EShapeActionRuntimeTransformResizeSizeAbsolute.md)

  ↳↳ [`EShapeActionRuntimeTransformResizeSizeRelative`](EShapeActionRuntimeTransformResizeSizeRelative.md)

  ↳↳ [`EShapeActionRuntimeTransformResizeWidthAbsolute`](EShapeActionRuntimeTransformResizeWidthAbsolute.md)

  ↳↳ [`EShapeActionRuntimeTransformResizeWidthRelative`](EShapeActionRuntimeTransformResizeWidthRelative.md)

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeTransformResize.md#constructor)

### Properties

- [condition](EShapeActionRuntimeTransformResize.md#condition)
- [reset](EShapeActionRuntimeTransformResize.md#reset)
- [size](EShapeActionRuntimeTransformResize.md#size)

### Methods

- [adjustPosition](EShapeActionRuntimeTransformResize.md#adjustposition)
- [execute](EShapeActionRuntimeTransformResize.md#execute)
- [initialize](EShapeActionRuntimeTransformResize.md#initialize)
- [onBlur](EShapeActionRuntimeTransformResize.md#onblur)
- [onDblClick](EShapeActionRuntimeTransformResize.md#ondblclick)
- [onDown](EShapeActionRuntimeTransformResize.md#ondown)
- [onDowning](EShapeActionRuntimeTransformResize.md#ondowning)
- [onFocus](EShapeActionRuntimeTransformResize.md#onfocus)
- [onMove](EShapeActionRuntimeTransformResize.md#onmove)
- [onRender](EShapeActionRuntimeTransformResize.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeTransformResize**(`value`, `reset`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueTransformResize`](EShapeActionValueTransformResize.md) |
| `reset` | `number` |

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[constructor](EShapeActionRuntimeConditional.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts#L17)

## Properties

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

### size

• `Protected` `Readonly` **size**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts#L15)

## Methods

### adjustPosition

▸ `Protected` **adjustPosition**(`shape`, `runtime`, `dsx`, `dsy`, `originX`, `originY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `dsx` | `number` |
| `dsy` | `number` |
| `originX` | `number` |
| `originY` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts#L43)

___

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
