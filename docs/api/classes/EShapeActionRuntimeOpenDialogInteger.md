[Winter Cardinal UI - v0.164.0](../index.md) / EShapeActionRuntimeOpenDialogInteger

# Class: EShapeActionRuntimeOpenDialogInteger

## Hierarchy

- [`EShapeActionRuntimeOpenDialog`](EShapeActionRuntimeOpenDialog.md)<`number`\>

  ↳ **`EShapeActionRuntimeOpenDialogInteger`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeOpenDialogInteger.md#constructor)

### Properties

- [condition](EShapeActionRuntimeOpenDialogInteger.md#condition)
- [initial](EShapeActionRuntimeOpenDialogInteger.md#initial)
- [isOpened](EShapeActionRuntimeOpenDialogInteger.md#isopened)
- [onInputAction](EShapeActionRuntimeOpenDialogInteger.md#oninputaction)
- [reset](EShapeActionRuntimeOpenDialogInteger.md#reset)
- [target](EShapeActionRuntimeOpenDialogInteger.md#target)
- [DIALOG](EShapeActionRuntimeOpenDialogInteger.md#dialog)

### Methods

- [execute](EShapeActionRuntimeOpenDialogInteger.md#execute)
- [initialize](EShapeActionRuntimeOpenDialogInteger.md#initialize)
- [onBlur](EShapeActionRuntimeOpenDialogInteger.md#onblur)
- [onDblClick](EShapeActionRuntimeOpenDialogInteger.md#ondblclick)
- [onDown](EShapeActionRuntimeOpenDialogInteger.md#ondown)
- [onDowning](EShapeActionRuntimeOpenDialogInteger.md#ondowning)
- [onFocus](EShapeActionRuntimeOpenDialogInteger.md#onfocus)
- [onMove](EShapeActionRuntimeOpenDialogInteger.md#onmove)
- [onRender](EShapeActionRuntimeOpenDialogInteger.md#onrender)
- [open](EShapeActionRuntimeOpenDialogInteger.md#open)

## Constructors

### constructor

• **new EShapeActionRuntimeOpenDialogInteger**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueOpen`](EShapeActionValueOpen.md) |

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[constructor](EShapeActionRuntimeOpenDialog.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-integer.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-integer.ts#L16)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[condition](EShapeActionRuntimeOpenDialog.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### initial

• `Protected` **initial**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[initial](EShapeActionRuntimeOpenDialog.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-integer.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-integer.ts#L14)

___

### isOpened

• `Protected` **isOpened**: `boolean`

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[isOpened](EShapeActionRuntimeOpenDialog.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L19)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[onInputAction](EShapeActionRuntimeOpenDialog.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L18)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[reset](EShapeActionRuntimeOpenDialog.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[target](EShapeActionRuntimeOpenDialog.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open.ts#L13)

___

### DIALOG

▪ `Static` `Protected` `Optional` **DIALOG**: [`DDialogInputInteger`](DDialogInputInteger.md)<[`DThemeDialogInputInteger`](../interfaces/DThemeDialogInputInteger.md), [`DDialogInputIntegerOptions`](../interfaces/DDialogInputIntegerOptions.md)<[`DThemeDialogInputInteger`](../interfaces/DThemeDialogInputInteger.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-integer.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-integer.ts#L13)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L28)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

___

### open

▸ `Protected` **open**(`target`, `initial`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `initial` | `number` |

#### Returns

`Promise`<`number`\>

#### Overrides

[EShapeActionRuntimeOpenDialog](EShapeActionRuntimeOpenDialog.md).[open](EShapeActionRuntimeOpenDialog.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-integer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog-integer.ts#L21)
