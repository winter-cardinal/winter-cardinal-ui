[Winter Cardinal UI - v0.155.0](../index.md) / EShapeActionRuntimeTransformRotateRelative

# Class: EShapeActionRuntimeTransformRotateRelative

## Hierarchy

- [`EShapeActionRuntimeTransformRotate`](EShapeActionRuntimeTransformRotate.md)

  ↳ **`EShapeActionRuntimeTransformRotateRelative`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeTransformRotateRelative.md#constructor)

### Properties

- [amount](EShapeActionRuntimeTransformRotateRelative.md#amount)
- [condition](EShapeActionRuntimeTransformRotateRelative.md#condition)
- [originX](EShapeActionRuntimeTransformRotateRelative.md#originx)
- [originY](EShapeActionRuntimeTransformRotateRelative.md#originy)
- [reset](EShapeActionRuntimeTransformRotateRelative.md#reset)

### Methods

- [adjustPosition](EShapeActionRuntimeTransformRotateRelative.md#adjustposition)
- [execute](EShapeActionRuntimeTransformRotateRelative.md#execute)
- [initialize](EShapeActionRuntimeTransformRotateRelative.md#initialize)
- [onBlur](EShapeActionRuntimeTransformRotateRelative.md#onblur)
- [onDblClick](EShapeActionRuntimeTransformRotateRelative.md#ondblclick)
- [onDown](EShapeActionRuntimeTransformRotateRelative.md#ondown)
- [onDowning](EShapeActionRuntimeTransformRotateRelative.md#ondowning)
- [onFocus](EShapeActionRuntimeTransformRotateRelative.md#onfocus)
- [onMove](EShapeActionRuntimeTransformRotateRelative.md#onmove)
- [onRender](EShapeActionRuntimeTransformRotateRelative.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeTransformRotateRelative**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueTransformRotate`](EShapeActionValueTransformRotate.md) |

#### Overrides

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[constructor](EShapeActionRuntimeTransformRotate.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate-relative.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate-relative.ts#L12)

## Properties

### amount

• `Protected` `Readonly` **amount**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[amount](EShapeActionRuntimeTransformRotate.md#amount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts#L16)

___

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[condition](EShapeActionRuntimeTransformRotate.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### originX

• `Protected` **originX**: `number`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[originX](EShapeActionRuntimeTransformRotate.md#originx)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts#L15)

___

### originY

• `Protected` **originY**: `number`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[originY](EShapeActionRuntimeTransformRotate.md#originy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts#L14)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[reset](EShapeActionRuntimeTransformRotate.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

## Methods

### adjustPosition

▸ `Protected` **adjustPosition**(`shape`, `runtime`, `oldRotation`, `newRotation`, `originX`, `originY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `oldRotation` | `number` |
| `newRotation` | `number` |
| `originX` | `number` |
| `originY` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[adjustPosition](EShapeActionRuntimeTransformRotate.md#adjustposition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts#L25)

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

#### Overrides

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[execute](EShapeActionRuntimeTransformRotate.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate-relative.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate-relative.ts#L17)

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

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[initialize](EShapeActionRuntimeTransformRotate.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onBlur](EShapeActionRuntimeTransformRotate.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

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

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onDblClick](EShapeActionRuntimeTransformRotate.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

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

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onDown](EShapeActionRuntimeTransformRotate.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

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

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onDowning](EShapeActionRuntimeTransformRotate.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

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

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onFocus](EShapeActionRuntimeTransformRotate.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

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

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onMove](EShapeActionRuntimeTransformRotate.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRender](EShapeActionRuntimeTransformRotate.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)
