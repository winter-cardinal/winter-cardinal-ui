[Winter Cardinal UI - v0.457.0](../index.md) / EShapeActionRuntimeTransformRotateAbsolute

# Class: EShapeActionRuntimeTransformRotateAbsolute

A base class of action runtimes.

## Hierarchy

- [`EShapeActionRuntimeTransformRotate`](EShapeActionRuntimeTransformRotate.md)

  ↳ **`EShapeActionRuntimeTransformRotateAbsolute`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeTransformRotateAbsolute.md#constructor)

### Properties

- [amount](EShapeActionRuntimeTransformRotateAbsolute.md#amount)
- [condition](EShapeActionRuntimeTransformRotateAbsolute.md#condition)
- [originX](EShapeActionRuntimeTransformRotateAbsolute.md#originx)
- [originY](EShapeActionRuntimeTransformRotateAbsolute.md#originy)
- [reset](EShapeActionRuntimeTransformRotateAbsolute.md#reset)

### Methods

- [adjustPosition](EShapeActionRuntimeTransformRotateAbsolute.md#adjustposition)
- [execute](EShapeActionRuntimeTransformRotateAbsolute.md#execute)
- [initialize](EShapeActionRuntimeTransformRotateAbsolute.md#initialize)
- [onBlur](EShapeActionRuntimeTransformRotateAbsolute.md#onblur)
- [onClick](EShapeActionRuntimeTransformRotateAbsolute.md#onclick)
- [onDblClick](EShapeActionRuntimeTransformRotateAbsolute.md#ondblclick)
- [onDown](EShapeActionRuntimeTransformRotateAbsolute.md#ondown)
- [onDowning](EShapeActionRuntimeTransformRotateAbsolute.md#ondowning)
- [onFocus](EShapeActionRuntimeTransformRotateAbsolute.md#onfocus)
- [onKeyDown](EShapeActionRuntimeTransformRotateAbsolute.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeTransformRotateAbsolute.md#onkeyup)
- [onMove](EShapeActionRuntimeTransformRotateAbsolute.md#onmove)
- [onOut](EShapeActionRuntimeTransformRotateAbsolute.md#onout)
- [onOver](EShapeActionRuntimeTransformRotateAbsolute.md#onover)
- [onPressed](EShapeActionRuntimeTransformRotateAbsolute.md#onpressed)
- [onRender](EShapeActionRuntimeTransformRotateAbsolute.md#onrender)
- [onResize](EShapeActionRuntimeTransformRotateAbsolute.md#onresize)
- [onRightClick](EShapeActionRuntimeTransformRotateAbsolute.md#onrightclick)
- [onRightDown](EShapeActionRuntimeTransformRotateAbsolute.md#onrightdown)
- [onRightDowning](EShapeActionRuntimeTransformRotateAbsolute.md#onrightdowning)
- [onRightPressed](EShapeActionRuntimeTransformRotateAbsolute.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntimeTransformRotateAbsolute.md#onrightunpressed)
- [onRightUp](EShapeActionRuntimeTransformRotateAbsolute.md#onrightup)
- [onRightUpOutside](EShapeActionRuntimeTransformRotateAbsolute.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntimeTransformRotateAbsolute.md#onunpressed)
- [onUp](EShapeActionRuntimeTransformRotateAbsolute.md#onup)
- [onUpOutside](EShapeActionRuntimeTransformRotateAbsolute.md#onupoutside)

## Constructors

### constructor

• **new EShapeActionRuntimeTransformRotateAbsolute**(`value`): [`EShapeActionRuntimeTransformRotateAbsolute`](EShapeActionRuntimeTransformRotateAbsolute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueTransformRotate`](EShapeActionValueTransformRotate.md) |

#### Returns

[`EShapeActionRuntimeTransformRotateAbsolute`](EShapeActionRuntimeTransformRotateAbsolute.md)

#### Overrides

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[constructor](EShapeActionRuntimeTransformRotate.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate-absolute.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate-absolute.ts#L14)

## Properties

### amount

• `Protected` `Readonly` **amount**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<`number`\>

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[amount](EShapeActionRuntimeTransformRotate.md#amount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts#L17)

___

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<`boolean`\>

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[condition](EShapeActionRuntimeTransformRotate.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### originX

• `Protected` **originX**: `number`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[originX](EShapeActionRuntimeTransformRotate.md#originx)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts#L16)

___

### originY

• `Protected` **originY**: `number`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[originY](EShapeActionRuntimeTransformRotate.md#originy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts#L15)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[reset](EShapeActionRuntimeTransformRotate.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L16)

## Methods

### adjustPosition

▸ **adjustPosition**(`shape`, `runtime`, `oldRotation`, `newRotation`, `originX`, `originY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `oldRotation` | `number` |
| `newRotation` | `number` |
| `originX` | `number` |
| `originY` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[adjustPosition](EShapeActionRuntimeTransformRotate.md#adjustposition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate.ts#L26)

___

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

Called to execute this action for the given shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `time` | `number` | a current time |

#### Returns

`void`

#### Overrides

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[execute](EShapeActionRuntimeTransformRotate.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate-absolute.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-rotate-absolute.ts#L18)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

Called to initialize this action runtime for the given shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[initialize](EShapeActionRuntimeTransformRotate.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L22)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

Called when a shape losees a focuse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onBlur](EShapeActionRuntimeTransformRotate.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L38)

___

### onClick

▸ **onClick**(`shape`, `runtime`, `e`): `void`

Called when a shape is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onClick](EShapeActionRuntimeTransformRotate.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L42)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `manager`): `void`

Called when a shape is double clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `MouseEvent` \| `TouchEvent` | an event object |
| `manager` | `InteractionManager` | the interaction manager |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onDblClick](EShapeActionRuntimeTransformRotate.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L46)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onDown](EShapeActionRuntimeTransformRotate.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L59)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key are about to be pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onDowning](EShapeActionRuntimeTransformRotate.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L55)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

Called when a shape get focused.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onFocus](EShapeActionRuntimeTransformRotate.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L34)

___

### onKeyDown

▸ **onKeyDown**(`shape`, `runtime`, `e`): `void`

Called when a key is pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onKeyDown](EShapeActionRuntimeTransformRotate.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L91)

___

### onKeyUp

▸ **onKeyUp**(`shape`, `runtime`, `e`): `void`

Called when a key is released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onKeyUp](EShapeActionRuntimeTransformRotate.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L95)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

Called when a pointer is moved on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onMove](EShapeActionRuntimeTransformRotate.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L63)

___

### onOut

▸ **onOut**(`shape`, `runtime`, `e`): `void`

Called when a pointer gets out of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onOut](EShapeActionRuntimeTransformRotate.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L71)

___

### onOver

▸ **onOver**(`shape`, `runtime`, `e`): `void`

Called when a pointer gets on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onOver](EShapeActionRuntimeTransformRotate.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L67)

___

### onPressed

▸ **onPressed**(`shape`, `runtime`, `e`): `void`

Called when a shape is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onPressed](EShapeActionRuntimeTransformRotate.md#onpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L83)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

Called when a shape get rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `time` | `number` | - |
| `renderer` | `Renderer` | - |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRender](EShapeActionRuntimeTransformRotate.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L127)

___

### onResize

▸ **onResize**(`shape`, `runtime`): `void`

Called when the shape size is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onResize](EShapeActionRuntimeTransformRotate.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L30)

___

### onRightClick

▸ **onRightClick**(`shape`, `runtime`, `e`): `void`

Called when a shape is right-clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRightClick](EShapeActionRuntimeTransformRotate.md#onrightclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L99)

___

### onRightDown

▸ **onRightDown**(`shape`, `runtime`, `e`): `void`

Called when a secondary button gets pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRightDown](EShapeActionRuntimeTransformRotate.md#onrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L107)

___

### onRightDowning

▸ **onRightDowning**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is about to be pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRightDowning](EShapeActionRuntimeTransformRotate.md#onrightdowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L103)

___

### onRightPressed

▸ **onRightPressed**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRightPressed](EShapeActionRuntimeTransformRotate.md#onrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L119)

___

### onRightUnpressed

▸ **onRightUnpressed**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRightUnpressed](EShapeActionRuntimeTransformRotate.md#onrightunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L123)

___

### onRightUp

▸ **onRightUp**(`shape`, `runtime`, `e`): `void`

Called when a secondary button gets released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRightUp](EShapeActionRuntimeTransformRotate.md#onrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L111)

___

### onRightUpOutside

▸ **onRightUpOutside**(`shape`, `runtime`, `e`): `void`

Called when a secondary button get released outside of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onRightUpOutside](EShapeActionRuntimeTransformRotate.md#onrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L115)

___

### onUnpressed

▸ **onUnpressed**(`shape`, `runtime`, `e`): `void`

Called when a shape is released.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onUnpressed](EShapeActionRuntimeTransformRotate.md#onunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L87)

___

### onUp

▸ **onUp**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onUp](EShapeActionRuntimeTransformRotate.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L75)

___

### onUpOutside

▸ **onUpOutside**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get released outside of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformRotate](EShapeActionRuntimeTransformRotate.md).[onUpOutside](EShapeActionRuntimeTransformRotate.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L79)
