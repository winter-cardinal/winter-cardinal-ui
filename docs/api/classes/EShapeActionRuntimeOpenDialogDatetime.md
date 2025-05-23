[Winter Cardinal UI - v0.442.0](../index.md) / EShapeActionRuntimeOpenDialogDatetime

# Class: EShapeActionRuntimeOpenDialogDatetime

A base class of action runtimes.

## Hierarchy

- [`EShapeActionRuntimeOpenDialog`](EShapeActionRuntimeOpenDialog.md)\<`string`, `unknown`\>

  ↳ **`EShapeActionRuntimeOpenDialogDatetime`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeOpenDialogDatetime.md#constructor)

### Properties

- [condition](EShapeActionRuntimeOpenDialogDatetime.md#condition)
- [initial](EShapeActionRuntimeOpenDialogDatetime.md#initial)
- [isOpened](EShapeActionRuntimeOpenDialogDatetime.md#isopened)
- [max](EShapeActionRuntimeOpenDialogDatetime.md#max)
- [min](EShapeActionRuntimeOpenDialogDatetime.md#min)
- [onInputAction](EShapeActionRuntimeOpenDialogDatetime.md#oninputaction)
- [reset](EShapeActionRuntimeOpenDialogDatetime.md#reset)
- [step](EShapeActionRuntimeOpenDialogDatetime.md#step)
- [target](EShapeActionRuntimeOpenDialogDatetime.md#target)
- [DIALOG](EShapeActionRuntimeOpenDialogDatetime.md#dialog)

### Methods

- [execute](EShapeActionRuntimeOpenDialogDatetime.md#execute)
- [initialize](EShapeActionRuntimeOpenDialogDatetime.md#initialize)
- [onBlur](EShapeActionRuntimeOpenDialogDatetime.md#onblur)
- [onClick](EShapeActionRuntimeOpenDialogDatetime.md#onclick)
- [onDblClick](EShapeActionRuntimeOpenDialogDatetime.md#ondblclick)
- [onDown](EShapeActionRuntimeOpenDialogDatetime.md#ondown)
- [onDowning](EShapeActionRuntimeOpenDialogDatetime.md#ondowning)
- [onFocus](EShapeActionRuntimeOpenDialogDatetime.md#onfocus)
- [onKeyDown](EShapeActionRuntimeOpenDialogDatetime.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeOpenDialogDatetime.md#onkeyup)
- [onMove](EShapeActionRuntimeOpenDialogDatetime.md#onmove)
- [onOut](EShapeActionRuntimeOpenDialogDatetime.md#onout)
- [onOver](EShapeActionRuntimeOpenDialogDatetime.md#onover)
- [onPressed](EShapeActionRuntimeOpenDialogDatetime.md#onpressed)
- [onRender](EShapeActionRuntimeOpenDialogDatetime.md#onrender)
- [onResize](EShapeActionRuntimeOpenDialogDatetime.md#onresize)
- [onRightClick](EShapeActionRuntimeOpenDialogDatetime.md#onrightclick)
- [onRightDown](EShapeActionRuntimeOpenDialogDatetime.md#onrightdown)
- [onRightDowning](EShapeActionRuntimeOpenDialogDatetime.md#onrightdowning)
- [onRightPressed](EShapeActionRuntimeOpenDialogDatetime.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntimeOpenDialogDatetime.md#onrightunpressed)
- [onRightUp](EShapeActionRuntimeOpenDialogDatetime.md#onrightup)
- [onRightUpOutside](EShapeActionRuntimeOpenDialogDatetime.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntimeOpenDialogDatetime.md#onunpressed)
- [onUp](EShapeActionRuntimeOpenDialogDatetime.md#onup)
- [onUpOutside](EShapeActionRuntimeOpenDialogDatetime.md#onupoutside)
- [open](EShapeActionRuntimeOpenDialogDatetime.md#open)
- [toDate](EShapeActionRuntimeOpenDialogDatetime.md#todate)

## Constructors

### constructor

• **new EShapeActionRuntimeOpenDialogDatetime**(`value`): [`EShapeActionRuntimeOpenDialogDatetime`](EShapeActionRuntimeOpenDialogDatetime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md) |

#### Returns

[`EShapeActionRuntimeOpenDialogDatetime`](EShapeActionRuntimeOpenDialogDatetime.md)

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[constructor](EShapeActionRuntimeOpenDialog.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L23)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<`boolean`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[condition](EShapeActionRuntimeOpenDialog.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### initial

• `Protected` **initial**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<`unknown`\>

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[initial](EShapeActionRuntimeOpenDialog.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L21)

___

### isOpened

• `Protected` **isOpened**: `boolean`

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[isOpened](EShapeActionRuntimeOpenDialog.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L23)

___

### max

• `Protected` **max**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `number`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[max](EShapeActionRuntimeOpenDialog.md#max)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L27)

___

### min

• `Protected` **min**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `number`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[min](EShapeActionRuntimeOpenDialog.md#min)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L26)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onInputAction](EShapeActionRuntimeOpenDialog.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L22)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[reset](EShapeActionRuntimeOpenDialog.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L16)

___

### step

• `Protected` **step**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `number`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[step](EShapeActionRuntimeOpenDialog.md#step)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L25)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[target](EShapeActionRuntimeOpenDialog.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L21)

___

### DIALOG

▪ `Static` `Protected` `Optional` **DIALOG**: [`DDialogDatetime`](DDialogDatetime.md)\<[`DThemeDialogDatetime`](../interfaces/DThemeDialogDatetime.md), [`DDialogDatetimeOptions`](../interfaces/DDialogDatetimeOptions.md)\<[`DThemeDialogDatetime`](../interfaces/DThemeDialogDatetime.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L19)

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

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[execute](EShapeActionRuntimeOpenDialog.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L39)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[initialize](EShapeActionRuntimeOpenDialog.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L22)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onBlur](EShapeActionRuntimeOpenDialog.md#onblur)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onClick](EShapeActionRuntimeOpenDialog.md#onclick)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDblClick](EShapeActionRuntimeOpenDialog.md#ondblclick)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDown](EShapeActionRuntimeOpenDialog.md#ondown)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDowning](EShapeActionRuntimeOpenDialog.md#ondowning)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onFocus](EShapeActionRuntimeOpenDialog.md#onfocus)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onKeyDown](EShapeActionRuntimeOpenDialog.md#onkeydown)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onKeyUp](EShapeActionRuntimeOpenDialog.md#onkeyup)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onMove](EShapeActionRuntimeOpenDialog.md#onmove)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onOut](EShapeActionRuntimeOpenDialog.md#onout)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onOver](EShapeActionRuntimeOpenDialog.md#onover)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onPressed](EShapeActionRuntimeOpenDialog.md#onpressed)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRender](EShapeActionRuntimeOpenDialog.md#onrender)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onResize](EShapeActionRuntimeOpenDialog.md#onresize)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRightClick](EShapeActionRuntimeOpenDialog.md#onrightclick)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRightDown](EShapeActionRuntimeOpenDialog.md#onrightdown)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRightDowning](EShapeActionRuntimeOpenDialog.md#onrightdowning)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRightPressed](EShapeActionRuntimeOpenDialog.md#onrightpressed)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRightUnpressed](EShapeActionRuntimeOpenDialog.md#onrightunpressed)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRightUp](EShapeActionRuntimeOpenDialog.md#onrightup)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRightUpOutside](EShapeActionRuntimeOpenDialog.md#onrightupoutside)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onUnpressed](EShapeActionRuntimeOpenDialog.md#onunpressed)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onUp](EShapeActionRuntimeOpenDialog.md#onup)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onUpOutside](EShapeActionRuntimeOpenDialog.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L79)

___

### open

▸ **open**(`shape`, `target`, `initial`, `step`, `min`, `max`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `target` | `string` |
| `initial` | `unknown` |
| `step` | ``null`` \| `number` |
| `min` | ``null`` \| `number` |
| `max` | ``null`` \| `number` |

#### Returns

`Promise`\<`string`\>

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[open](EShapeActionRuntimeOpenDialog.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L28)

___

### toDate

▸ **toDate**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`Date`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L47)
