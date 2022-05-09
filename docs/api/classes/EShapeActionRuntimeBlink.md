[Winter Cardinal UI - v0.164.0](../index.md) / EShapeActionRuntimeBlink

# Class: EShapeActionRuntimeBlink

## Hierarchy

- [`EShapeActionRuntimeConditional`](EShapeActionRuntimeConditional.md)

  ↳ **`EShapeActionRuntimeBlink`**

  ↳↳ [`EShapeActionRuntimeBlinkBrighten`](EShapeActionRuntimeBlinkBrighten.md)

  ↳↳ [`EShapeActionRuntimeBlinkColorFill`](EShapeActionRuntimeBlinkColorFill.md)

  ↳↳ [`EShapeActionRuntimeBlinkColorStroke`](EShapeActionRuntimeBlinkColorStroke.md)

  ↳↳ [`EShapeActionRuntimeBlinkDarken`](EShapeActionRuntimeBlinkDarken.md)

  ↳↳ [`EShapeActionRuntimeBlinkOpacity`](EShapeActionRuntimeBlinkOpacity.md)

  ↳↳ [`EShapeActionRuntimeBlinkVisibility`](EShapeActionRuntimeBlinkVisibility.md)

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeBlink.md#constructor)

### Properties

- [condition](EShapeActionRuntimeBlink.md#condition)
- [interval](EShapeActionRuntimeBlink.md#interval)
- [reset](EShapeActionRuntimeBlink.md#reset)

### Methods

- [execute](EShapeActionRuntimeBlink.md#execute)
- [initialize](EShapeActionRuntimeBlink.md#initialize)
- [onBlur](EShapeActionRuntimeBlink.md#onblur)
- [onDblClick](EShapeActionRuntimeBlink.md#ondblclick)
- [onDown](EShapeActionRuntimeBlink.md#ondown)
- [onDowning](EShapeActionRuntimeBlink.md#ondowning)
- [onFocus](EShapeActionRuntimeBlink.md#onfocus)
- [onMove](EShapeActionRuntimeBlink.md#onmove)
- [onRender](EShapeActionRuntimeBlink.md#onrender)
- [toOff](EShapeActionRuntimeBlink.md#tooff)
- [toOn](EShapeActionRuntimeBlink.md#toon)

## Constructors

### constructor

• **new EShapeActionRuntimeBlink**(`value`, `reset`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueBlink`](EShapeActionValueBlink.md) |
| `reset` | `number` |

#### Overrides

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[constructor](EShapeActionRuntimeConditional.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts#L14)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[condition](EShapeActionRuntimeConditional.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### interval

• `Protected` **interval**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts#L12)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[reset](EShapeActionRuntimeConditional.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[execute](EShapeActionRuntimeConditional.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts#L19)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[initialize](EShapeActionRuntimeConditional.md#initialize)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onBlur](EShapeActionRuntimeConditional.md#onblur)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDblClick](EShapeActionRuntimeConditional.md#ondblclick)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDown](EShapeActionRuntimeConditional.md#ondown)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onDowning](EShapeActionRuntimeConditional.md#ondowning)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onFocus](EShapeActionRuntimeConditional.md#onfocus)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onMove](EShapeActionRuntimeConditional.md#onmove)

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

[EShapeActionRuntimeConditional](EShapeActionRuntimeConditional.md).[onRender](EShapeActionRuntimeConditional.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

___

### toOff

▸ `Protected` **toOff**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts#L38)

___

### toOn

▸ `Protected` **toOn**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-blink.ts#L34)
