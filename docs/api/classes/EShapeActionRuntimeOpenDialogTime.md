[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeOpenDialogTime

# Class: EShapeActionRuntimeOpenDialogTime

An action runtime.
Please note that all the action runtimes are shared across shapes.

## Hierarchy

- [`EShapeActionRuntimeOpenDialog`](EShapeActionRuntimeOpenDialog.md)<`string`, `unknown`\>

  ↳ **`EShapeActionRuntimeOpenDialogTime`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeOpenDialogTime.md#constructor)

### Properties

- [condition](EShapeActionRuntimeOpenDialogTime.md#condition)
- [initial](EShapeActionRuntimeOpenDialogTime.md#initial)
- [isOpened](EShapeActionRuntimeOpenDialogTime.md#isopened)
- [onInputAction](EShapeActionRuntimeOpenDialogTime.md#oninputaction)
- [reset](EShapeActionRuntimeOpenDialogTime.md#reset)
- [target](EShapeActionRuntimeOpenDialogTime.md#target)
- [DIALOG](EShapeActionRuntimeOpenDialogTime.md#dialog)
- [FORMATTER](EShapeActionRuntimeOpenDialogTime.md#formatter)
- [PATTERN](EShapeActionRuntimeOpenDialogTime.md#pattern)

### Methods

- [execute](EShapeActionRuntimeOpenDialogTime.md#execute)
- [getFormatter](EShapeActionRuntimeOpenDialogTime.md#getformatter)
- [getPattern](EShapeActionRuntimeOpenDialogTime.md#getpattern)
- [initialize](EShapeActionRuntimeOpenDialogTime.md#initialize)
- [newFormatter](EShapeActionRuntimeOpenDialogTime.md#newformatter)
- [newPattern](EShapeActionRuntimeOpenDialogTime.md#newpattern)
- [onBlur](EShapeActionRuntimeOpenDialogTime.md#onblur)
- [onDblClick](EShapeActionRuntimeOpenDialogTime.md#ondblclick)
- [onDown](EShapeActionRuntimeOpenDialogTime.md#ondown)
- [onDowning](EShapeActionRuntimeOpenDialogTime.md#ondowning)
- [onFocus](EShapeActionRuntimeOpenDialogTime.md#onfocus)
- [onMove](EShapeActionRuntimeOpenDialogTime.md#onmove)
- [onRender](EShapeActionRuntimeOpenDialogTime.md#onrender)
- [open](EShapeActionRuntimeOpenDialogTime.md#open)
- [toDate](EShapeActionRuntimeOpenDialogTime.md#todate)
- [toHours](EShapeActionRuntimeOpenDialogTime.md#tohours)
- [toMilliseconds](EShapeActionRuntimeOpenDialogTime.md#tomilliseconds)
- [toMinutes](EShapeActionRuntimeOpenDialogTime.md#tominutes)
- [toNumber](EShapeActionRuntimeOpenDialogTime.md#tonumber)
- [toSeconds](EShapeActionRuntimeOpenDialogTime.md#toseconds)

## Constructors

### constructor

• **new EShapeActionRuntimeOpenDialogTime**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md) |

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[constructor](EShapeActionRuntimeOpenDialog.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L28)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[condition](EShapeActionRuntimeOpenDialog.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### initial

• `Protected` **initial**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`unknown`\>

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[initial](EShapeActionRuntimeOpenDialog.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L26)

___

### isOpened

• `Protected` **isOpened**: `boolean`

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[isOpened](EShapeActionRuntimeOpenDialog.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L22)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1)

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onInputAction](EShapeActionRuntimeOpenDialog.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L21)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[reset](EShapeActionRuntimeOpenDialog.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[target](EShapeActionRuntimeOpenDialog.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L20)

___

### DIALOG

▪ `Static` `Protected` `Optional` **DIALOG**: [`DDialogTime`](DDialogTime.md)<[`DThemeDialogTime`](../interfaces/DThemeDialogTime.md), [`DDialogTimeOptions`](../interfaces/DDialogTimeOptions.md)<[`DThemeDialogTime`](../interfaces/DThemeDialogTime.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L22)

___

### FORMATTER

▪ `Static` `Protected` `Optional` **FORMATTER**: [`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L24)

___

### PATTERN

▪ `Static` `Protected` `Optional` **PATTERN**: `RegExp`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L23)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L32)

___

### getFormatter

▸ `Protected` **getFormatter**(): [`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Returns

[`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L128)

___

### getPattern

▸ `Protected` **getPattern**(): `RegExp`

#### Returns

`RegExp`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L115)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

___

### newFormatter

▸ `Protected` **newFormatter**(): [`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Returns

[`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L137)

___

### newPattern

▸ `Protected` **newPattern**(): `RegExp`

#### Returns

`RegExp`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L124)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDblClick](EShapeActionRuntimeOpenDialog.md#ondblclick)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDown](EShapeActionRuntimeOpenDialog.md#ondown)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onDowning](EShapeActionRuntimeOpenDialog.md#ondowning)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onFocus](EShapeActionRuntimeOpenDialog.md#onfocus)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onMove](EShapeActionRuntimeOpenDialog.md#onmove)

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

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onRender](EShapeActionRuntimeOpenDialog.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L33)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L45)

___

### toHours

▸ `Protected` **toHours**(`value`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L78)

___

### toMilliseconds

▸ `Protected` **toMilliseconds**(`value`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L90)

___

### toMinutes

▸ `Protected` **toMinutes**(`value`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L82)

___

### toNumber

▸ `Protected` **toNumber**(`value`, `min`, `max`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `min` | `number` |
| `max` | `number` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L105)

___

### toSeconds

▸ `Protected` **toSeconds**(`value`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-time.ts#L86)
