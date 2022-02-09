[Winter Cardinal UI](../README.md) / EShapeActionRuntimeOpenDialog

# Class: EShapeActionRuntimeOpenDialog<VALUE, INITIAL\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `INITIAL` | `VALUE` |

## Hierarchy

- [`EShapeActionRuntimeOpen`](EShapeActionRuntimeOpen.md)

  ↳ **`EShapeActionRuntimeOpenDialog`**

  ↳↳ [`EShapeActionRuntimeOpenDialogBoolean`](EShapeActionRuntimeOpenDialogBoolean.md)

  ↳↳ [`EShapeActionRuntimeOpenDialogInteger`](EShapeActionRuntimeOpenDialogInteger.md)

  ↳↳ [`EShapeActionRuntimeOpenDialogReal`](EShapeActionRuntimeOpenDialogReal.md)

  ↳↳ [`EShapeActionRuntimeOpenDialogText`](EShapeActionRuntimeOpenDialogText.md)

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeOpenDialog.md#constructor)

### Properties

- [condition](EShapeActionRuntimeOpenDialog.md#condition)
- [initial](EShapeActionRuntimeOpenDialog.md#initial)
- [isOpened](EShapeActionRuntimeOpenDialog.md#isopened)
- [onInputAction](EShapeActionRuntimeOpenDialog.md#oninputaction)
- [reset](EShapeActionRuntimeOpenDialog.md#reset)
- [target](EShapeActionRuntimeOpenDialog.md#target)

### Methods

- [execute](EShapeActionRuntimeOpenDialog.md#execute)
- [initialize](EShapeActionRuntimeOpenDialog.md#initialize)
- [onBlur](EShapeActionRuntimeOpenDialog.md#onblur)
- [onDblClick](EShapeActionRuntimeOpenDialog.md#ondblclick)
- [onDown](EShapeActionRuntimeOpenDialog.md#ondown)
- [onDowning](EShapeActionRuntimeOpenDialog.md#ondowning)
- [onFocus](EShapeActionRuntimeOpenDialog.md#onfocus)
- [onMove](EShapeActionRuntimeOpenDialog.md#onmove)
- [onRender](EShapeActionRuntimeOpenDialog.md#onrender)
- [open](EShapeActionRuntimeOpenDialog.md#open)

## Constructors

### constructor

• **new EShapeActionRuntimeOpenDialog**<`VALUE`, `INITIAL`\>(`value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `INITIAL` | `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueOpen`](EShapeActionValueOpen.md) |

#### Overrides

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[constructor](EShapeActionRuntimeOpen.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L22)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../README.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[condition](EShapeActionRuntimeOpen.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### initial

• `Protected` `Abstract` **initial**: [`EShapeActionExpression`](../README.md#eshapeactionexpression)<`INITIAL`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L20)

___

### isOpened

• `Protected` **isOpened**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L19)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../README.md#eshapeactionvalueoninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L18)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[reset](EShapeActionRuntimeOpen.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../README.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[target](EShapeActionRuntimeOpen.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open.ts#L13)

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

#### Overrides

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[execute](EShapeActionRuntimeOpen.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L28)

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

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[initialize](EShapeActionRuntimeOpen.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[onBlur](EShapeActionRuntimeOpen.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

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

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[onDblClick](EShapeActionRuntimeOpen.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

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

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[onDown](EShapeActionRuntimeOpen.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

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

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[onDowning](EShapeActionRuntimeOpen.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

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

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[onFocus](EShapeActionRuntimeOpen.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

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

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[onMove](EShapeActionRuntimeOpen.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[onRender](EShapeActionRuntimeOpen.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

___

### open

▸ `Protected` `Abstract` **open**(`target`, `initial`): `Promise`<`VALUE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `initial` | `INITIAL` |

#### Returns

`Promise`<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-dialog.ts#L57)
