[Winter Cardinal UI - v0.194.0](../index.md) / EShapeActionRuntimeOpenDialogDatetime

# Class: EShapeActionRuntimeOpenDialogDatetime

## Hierarchy

- [`EShapeActionRuntimeOpenDialog`](EShapeActionRuntimeOpenDialog.md)<`string`, `unknown`\>

  ↳ **`EShapeActionRuntimeOpenDialogDatetime`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeOpenDialogDatetime.md#constructor)

### Properties

- [condition](EShapeActionRuntimeOpenDialogDatetime.md#condition)
- [initial](EShapeActionRuntimeOpenDialogDatetime.md#initial)
- [isOpened](EShapeActionRuntimeOpenDialogDatetime.md#isopened)
- [onInputAction](EShapeActionRuntimeOpenDialogDatetime.md#oninputaction)
- [reset](EShapeActionRuntimeOpenDialogDatetime.md#reset)
- [target](EShapeActionRuntimeOpenDialogDatetime.md#target)
- [DIALOG](EShapeActionRuntimeOpenDialogDatetime.md#dialog)

### Methods

- [execute](EShapeActionRuntimeOpenDialogDatetime.md#execute)
- [initialize](EShapeActionRuntimeOpenDialogDatetime.md#initialize)
- [onBlur](EShapeActionRuntimeOpenDialogDatetime.md#onblur)
- [onDblClick](EShapeActionRuntimeOpenDialogDatetime.md#ondblclick)
- [onDown](EShapeActionRuntimeOpenDialogDatetime.md#ondown)
- [onDowning](EShapeActionRuntimeOpenDialogDatetime.md#ondowning)
- [onFocus](EShapeActionRuntimeOpenDialogDatetime.md#onfocus)
- [onMove](EShapeActionRuntimeOpenDialogDatetime.md#onmove)
- [onRender](EShapeActionRuntimeOpenDialogDatetime.md#onrender)
- [open](EShapeActionRuntimeOpenDialogDatetime.md#open)
- [toDate](EShapeActionRuntimeOpenDialogDatetime.md#todate)

## Constructors

### constructor

• **new EShapeActionRuntimeOpenDialogDatetime**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md) |

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[constructor](EShapeActionRuntimeOpenDialog.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L23)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[condition](EShapeActionRuntimeOpenDialog.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### initial

• `Protected` **initial**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`unknown`\>

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[initial](EShapeActionRuntimeOpenDialog.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L21)

___

### isOpened

• `Protected` **isOpened**: `boolean`

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[isOpened](EShapeActionRuntimeOpenDialog.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L21)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onInputAction](EShapeActionRuntimeOpenDialog.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L20)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[reset](EShapeActionRuntimeOpenDialog.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[target](EShapeActionRuntimeOpenDialog.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L19)

___

### DIALOG

▪ `Static` `Protected` `Optional` **DIALOG**: [`DDialogDatetime`](DDialogDatetime.md)<[`DThemeDialogDatetime`](../interfaces/DThemeDialogDatetime.md), [`DDialogDatetimeOptions`](../interfaces/DDialogDatetimeOptions.md)<[`DThemeDialogDatetime`](../interfaces/DThemeDialogDatetime.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L19)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[execute](EShapeActionRuntimeOpenDialog.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L31)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[initialize](EShapeActionRuntimeOpenDialog.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onBlur](EShapeActionRuntimeOpenDialog.md#onblur)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDblClick](EShapeActionRuntimeOpenDialog.md#ondblclick)

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

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDown](EShapeActionRuntimeOpenDialog.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDowning](EShapeActionRuntimeOpenDialog.md#ondowning)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onFocus](EShapeActionRuntimeOpenDialog.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onMove](EShapeActionRuntimeOpenDialog.md#onmove)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRender](EShapeActionRuntimeOpenDialog.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

___

### open

▸ `Protected` **open**(`shape`, `target`, `initial`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `target` | `string` |
| `initial` | `unknown` |

#### Returns

`Promise`<`string`\>

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[open](EShapeActionRuntimeOpenDialog.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L28)

___

### toDate

▸ `Protected` **toDate**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`Date`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-datetime.ts#L40)
