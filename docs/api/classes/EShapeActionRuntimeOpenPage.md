[Winter Cardinal UI - v0.160.0](../index.md) / EShapeActionRuntimeOpenPage

# Class: EShapeActionRuntimeOpenPage

## Hierarchy

- [`EShapeActionRuntimeOpen`](EShapeActionRuntimeOpen.md)

  ↳ **`EShapeActionRuntimeOpenPage`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeOpenPage.md#constructor)

### Properties

- [condition](EShapeActionRuntimeOpenPage.md#condition)
- [reset](EShapeActionRuntimeOpenPage.md#reset)
- [target](EShapeActionRuntimeOpenPage.md#target)

### Methods

- [execute](EShapeActionRuntimeOpenPage.md#execute)
- [initialize](EShapeActionRuntimeOpenPage.md#initialize)
- [onBlur](EShapeActionRuntimeOpenPage.md#onblur)
- [onDblClick](EShapeActionRuntimeOpenPage.md#ondblclick)
- [onDown](EShapeActionRuntimeOpenPage.md#ondown)
- [onDowning](EShapeActionRuntimeOpenPage.md#ondowning)
- [onFocus](EShapeActionRuntimeOpenPage.md#onfocus)
- [onMove](EShapeActionRuntimeOpenPage.md#onmove)
- [onRender](EShapeActionRuntimeOpenPage.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeOpenPage**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueOpen`](EShapeActionValueOpen.md) |

#### Overrides

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[constructor](EShapeActionRuntimeOpen.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-page.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-page.ts#L12)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[condition](EShapeActionRuntimeOpen.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[reset](EShapeActionRuntimeOpen.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeOpen](EShapeActionRuntimeOpen.md).[target](EShapeActionRuntimeOpen.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open.ts#L13)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-page.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-open-page.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)
