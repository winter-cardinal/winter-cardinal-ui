[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeMiscWriteRemote

# Class: EShapeActionRuntimeMiscWriteRemote

An action runtime.
Please note that all the action runtimes are shared across shapes.

## Hierarchy

- [`EShapeActionRuntimeMiscWrite`](EShapeActionRuntimeMiscWrite.md)

  ↳ **`EShapeActionRuntimeMiscWriteRemote`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeMiscWriteRemote.md#constructor)

### Properties

- [condition](EShapeActionRuntimeMiscWriteRemote.md#condition)
- [reset](EShapeActionRuntimeMiscWriteRemote.md#reset)
- [target](EShapeActionRuntimeMiscWriteRemote.md#target)
- [value](EShapeActionRuntimeMiscWriteRemote.md#value)

### Methods

- [execute](EShapeActionRuntimeMiscWriteRemote.md#execute)
- [initialize](EShapeActionRuntimeMiscWriteRemote.md#initialize)
- [onBlur](EShapeActionRuntimeMiscWriteRemote.md#onblur)
- [onDblClick](EShapeActionRuntimeMiscWriteRemote.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscWriteRemote.md#ondown)
- [onDowning](EShapeActionRuntimeMiscWriteRemote.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscWriteRemote.md#onfocus)
- [onMove](EShapeActionRuntimeMiscWriteRemote.md#onmove)
- [onRender](EShapeActionRuntimeMiscWriteRemote.md#onrender)
- [write](EShapeActionRuntimeMiscWriteRemote.md#write)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscWriteRemote**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Inherited from

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[constructor](EShapeActionRuntimeMiscWrite.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write.ts#L18)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[condition](EShapeActionRuntimeMiscWrite.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[reset](EShapeActionRuntimeMiscWrite.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[target](EShapeActionRuntimeMiscWrite.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write.ts#L15)

___

### value

• `Protected` **value**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`unknown`\>

#### Inherited from

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[value](EShapeActionRuntimeMiscWrite.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write.ts#L16)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[execute](EShapeActionRuntimeMiscWrite.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write.ts#L24)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[initialize](EShapeActionRuntimeMiscWrite.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[onBlur](EShapeActionRuntimeMiscWrite.md#onblur)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[onDblClick](EShapeActionRuntimeMiscWrite.md#ondblclick)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[onDown](EShapeActionRuntimeMiscWrite.md#ondown)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[onDowning](EShapeActionRuntimeMiscWrite.md#ondowning)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[onFocus](EShapeActionRuntimeMiscWrite.md#onfocus)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[onMove](EShapeActionRuntimeMiscWrite.md#onmove)

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

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[onRender](EShapeActionRuntimeMiscWrite.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

___

### write

▸ `Protected` **write**(`shape`, `target`, `value`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `target` | `string` |
| `value` | `unknown` |
| `time` | `number` |

#### Returns

`void`

#### Overrides

[EShapeActionRuntimeMiscWrite](EShapeActionRuntimeMiscWrite.md).[write](EShapeActionRuntimeMiscWrite.md#write)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write-remote.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-write-remote.ts#L11)
