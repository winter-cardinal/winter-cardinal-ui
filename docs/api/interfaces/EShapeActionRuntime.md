[Winter Cardinal UI - v0.407.0](../index.md) / EShapeActionRuntime

# Interface: EShapeActionRuntime

An action runtime.
Please note that all the action runtimes are shared across shapes.

## Implemented by

- [`EShapeActionRuntimeBase`](../classes/EShapeActionRuntimeBase.md)

## Table of contents

### Properties

- [reset](EShapeActionRuntime.md#reset)

### Methods

- [execute](EShapeActionRuntime.md#execute)
- [initialize](EShapeActionRuntime.md#initialize)
- [onBlur](EShapeActionRuntime.md#onblur)
- [onClick](EShapeActionRuntime.md#onclick)
- [onDblClick](EShapeActionRuntime.md#ondblclick)
- [onDown](EShapeActionRuntime.md#ondown)
- [onDowning](EShapeActionRuntime.md#ondowning)
- [onFocus](EShapeActionRuntime.md#onfocus)
- [onKeyDown](EShapeActionRuntime.md#onkeydown)
- [onKeyUp](EShapeActionRuntime.md#onkeyup)
- [onMove](EShapeActionRuntime.md#onmove)
- [onOut](EShapeActionRuntime.md#onout)
- [onOver](EShapeActionRuntime.md#onover)
- [onPressed](EShapeActionRuntime.md#onpressed)
- [onRender](EShapeActionRuntime.md#onrender)
- [onResize](EShapeActionRuntime.md#onresize)
- [onRightClick](EShapeActionRuntime.md#onrightclick)
- [onRightDown](EShapeActionRuntime.md#onrightdown)
- [onRightDowning](EShapeActionRuntime.md#onrightdowning)
- [onRightPressed](EShapeActionRuntime.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntime.md#onrightunpressed)
- [onRightUp](EShapeActionRuntime.md#onrightup)
- [onRightUpOutside](EShapeActionRuntime.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntime.md#onunpressed)
- [onUp](EShapeActionRuntime.md#onup)
- [onUpOutside](EShapeActionRuntime.md#onupoutside)

## Properties

### reset

• `Readonly` **reset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L16)

## Methods

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

Called to execute this action for the given shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `time` | `number` | a current time |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L33)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

Called to initialize this action runtime for the given shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L24)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

Called when a shape losees a focuse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L179)

___

### onClick

▸ **onClick**(`shape`, `runtime`, `e`): `void`

Called when a shape is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L50)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `manager`): `void`

Called when a shape is double clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `MouseEvent` \| `TouchEvent` | an event object |
| `manager` | `InteractionManager` | the interaction manager |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L59)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L82)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key are about to be pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L73)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

Called when a shape get focused.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L171)

___

### onKeyDown

▸ **onKeyDown**(`shape`, `runtime`, `e`): `void`

Called when a key is pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L154)

___

### onKeyUp

▸ **onKeyUp**(`shape`, `runtime`, `e`): `void`

Called when a key is released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L163)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

Called when a pointer is moved on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L91)

___

### onOut

▸ **onOut**(`shape`, `runtime`, `e`): `void`

Called when a pointer gets out of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L109)

___

### onOver

▸ **onOver**(`shape`, `runtime`, `e`): `void`

Called when a pointer gets on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L100)

___

### onPressed

▸ **onPressed**(`shape`, `runtime`, `e`): `void`

Called when a shape is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L136)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

Called when a shape get rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `time` | `number` | - |
| `renderer` | `Renderer` | - |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L250)

___

### onResize

▸ **onResize**(`shape`, `runtime`): `void`

Called when the shape size is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L41)

___

### onRightClick

▸ **onRightClick**(`shape`, `runtime`, `e`): `void`

Called when a shape is right-clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L188)

___

### onRightDown

▸ **onRightDown**(`shape`, `runtime`, `e`): `void`

Called when a secondary button gets pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L206)

___

### onRightDowning

▸ **onRightDowning**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is about to be pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L197)

___

### onRightPressed

▸ **onRightPressed**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L233)

___

### onRightUnpressed

▸ **onRightUnpressed**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L242)

___

### onRightUp

▸ **onRightUp**(`shape`, `runtime`, `e`): `void`

Called when a secondary button gets released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L215)

___

### onRightUpOutside

▸ **onRightUpOutside**(`shape`, `runtime`, `e`): `void`

Called when a secondary button get released outside of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L224)

___

### onUnpressed

▸ **onUnpressed**(`shape`, `runtime`, `e`): `void`

Called when a shape is released.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L145)

___

### onUp

▸ **onUp**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L118)

___

### onUpOutside

▸ **onUpOutside**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get released outside of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L127)
