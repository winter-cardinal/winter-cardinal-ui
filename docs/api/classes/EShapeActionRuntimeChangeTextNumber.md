[Winter Cardinal UI - v0.442.0](../index.md) / EShapeActionRuntimeChangeTextNumber

# Class: EShapeActionRuntimeChangeTextNumber

A base class of action runtimes.

## Hierarchy

- [`EShapeActionRuntimeConditional`](EShapeActionRuntimeConditional.md)

  ↳ **`EShapeActionRuntimeChangeTextNumber`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeChangeTextNumber.md#constructor)

### Properties

- [condition](EShapeActionRuntimeChangeTextNumber.md#condition)
- [formatters](EShapeActionRuntimeChangeTextNumber.md#formatters)
- [number](EShapeActionRuntimeChangeTextNumber.md#number)
- [reset](EShapeActionRuntimeChangeTextNumber.md#reset)

### Methods

- [execute](EShapeActionRuntimeChangeTextNumber.md#execute)
- [getFormatter](EShapeActionRuntimeChangeTextNumber.md#getformatter)
- [initialize](EShapeActionRuntimeChangeTextNumber.md#initialize)
- [newFormatter](EShapeActionRuntimeChangeTextNumber.md#newformatter)
- [onBlur](EShapeActionRuntimeChangeTextNumber.md#onblur)
- [onClick](EShapeActionRuntimeChangeTextNumber.md#onclick)
- [onDblClick](EShapeActionRuntimeChangeTextNumber.md#ondblclick)
- [onDown](EShapeActionRuntimeChangeTextNumber.md#ondown)
- [onDowning](EShapeActionRuntimeChangeTextNumber.md#ondowning)
- [onFocus](EShapeActionRuntimeChangeTextNumber.md#onfocus)
- [onKeyDown](EShapeActionRuntimeChangeTextNumber.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeChangeTextNumber.md#onkeyup)
- [onMove](EShapeActionRuntimeChangeTextNumber.md#onmove)
- [onOut](EShapeActionRuntimeChangeTextNumber.md#onout)
- [onOver](EShapeActionRuntimeChangeTextNumber.md#onover)
- [onPressed](EShapeActionRuntimeChangeTextNumber.md#onpressed)
- [onRender](EShapeActionRuntimeChangeTextNumber.md#onrender)
- [onResize](EShapeActionRuntimeChangeTextNumber.md#onresize)
- [onRightClick](EShapeActionRuntimeChangeTextNumber.md#onrightclick)
- [onRightDown](EShapeActionRuntimeChangeTextNumber.md#onrightdown)
- [onRightDowning](EShapeActionRuntimeChangeTextNumber.md#onrightdowning)
- [onRightPressed](EShapeActionRuntimeChangeTextNumber.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntimeChangeTextNumber.md#onrightunpressed)
- [onRightUp](EShapeActionRuntimeChangeTextNumber.md#onrightup)
- [onRightUpOutside](EShapeActionRuntimeChangeTextNumber.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntimeChangeTextNumber.md#onunpressed)
- [onUp](EShapeActionRuntimeChangeTextNumber.md#onup)
- [onUpOutside](EShapeActionRuntimeChangeTextNumber.md#onupoutside)

## Constructors

### constructor

• **new EShapeActionRuntimeChangeTextNumber**(`value`): [`EShapeActionRuntimeChangeTextNumber`](EShapeActionRuntimeChangeTextNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueChangeText`](EShapeActionValueChangeText.md) |

#### Returns

[`EShapeActionRuntimeChangeTextNumber`](EShapeActionRuntimeChangeTextNumber.md)

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[constructor](EShapeActionRuntimeConditional.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts#L21)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<`boolean`\>

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[condition](EShapeActionRuntimeConditional.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### formatters

• `Protected` **formatters**: `Map`\<`string`, ``null`` \| [`NumberFormatter`](../interfaces/NumberFormatter.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts#L19)

___

### number

• `Protected` **number**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts#L18)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[reset](EShapeActionRuntimeConditional.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L16)

## Methods

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[execute](EShapeActionRuntimeConditional.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts#L47)

___

### getFormatter

▸ **getFormatter**(`shape`, `runtime`): ``null`` \| [`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

``null`` \| [`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts#L28)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[initialize](EShapeActionRuntimeConditional.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L22)

___

### newFormatter

▸ **newFormatter**(`format`): ``null`` \| [`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |

#### Returns

``null`` \| [`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-change-text-number.ts#L39)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onBlur](EShapeActionRuntimeConditional.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L38)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onClick](EShapeActionRuntimeConditional.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L42)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDblClick](EShapeActionRuntimeConditional.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L46)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDown](EShapeActionRuntimeConditional.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L59)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDowning](EShapeActionRuntimeConditional.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L55)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onFocus](EShapeActionRuntimeConditional.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L34)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onKeyDown](EShapeActionRuntimeConditional.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L91)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onKeyUp](EShapeActionRuntimeConditional.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L95)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onMove](EShapeActionRuntimeConditional.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L63)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onOut](EShapeActionRuntimeConditional.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L71)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onOver](EShapeActionRuntimeConditional.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L67)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onPressed](EShapeActionRuntimeConditional.md#onpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L83)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRender](EShapeActionRuntimeConditional.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L127)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onResize](EShapeActionRuntimeConditional.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L30)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRightClick](EShapeActionRuntimeConditional.md#onrightclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L99)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRightDown](EShapeActionRuntimeConditional.md#onrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L107)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRightDowning](EShapeActionRuntimeConditional.md#onrightdowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L103)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRightPressed](EShapeActionRuntimeConditional.md#onrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L119)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRightUnpressed](EShapeActionRuntimeConditional.md#onrightunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L123)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRightUp](EShapeActionRuntimeConditional.md#onrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L111)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRightUpOutside](EShapeActionRuntimeConditional.md#onrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L115)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onUnpressed](EShapeActionRuntimeConditional.md#onunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L87)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onUp](EShapeActionRuntimeConditional.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L75)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onUpOutside](EShapeActionRuntimeConditional.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L79)
