[Winter Cardinal UI - v0.179.0](../index.md) / EShapeRuntime

# Class: EShapeRuntime

## Hierarchy

- **`EShapeRuntime`**

  ↳ [`EShapeButtonRuntime`](EShapeButtonRuntime.md)

## Table of contents

### Constructors

- [constructor](EShapeRuntime.md#constructor)

### Properties

- [actions](EShapeRuntime.md#actions)
- [cursor](EShapeRuntime.md#cursor)
- [effect](EShapeRuntime.md#effect)
- [fill](EShapeRuntime.md#fill)
- [interactive](EShapeRuntime.md#interactive)
- [isStateChanged](EShapeRuntime.md#isstatechanged)
- [reset](EShapeRuntime.md#reset)
- [rotation](EShapeRuntime.md#rotation)
- [size](EShapeRuntime.md#size)
- [stroke](EShapeRuntime.md#stroke)
- [text](EShapeRuntime.md#text)
- [written](EShapeRuntime.md#written)
- [x](EShapeRuntime.md#x)
- [y](EShapeRuntime.md#y)

### Methods

- [doReset](EShapeRuntime.md#doreset)
- [initialize](EShapeRuntime.md#initialize)
- [isActionable](EShapeRuntime.md#isactionable)
- [onBlur](EShapeRuntime.md#onblur)
- [onClick](EShapeRuntime.md#onclick)
- [onDblClick](EShapeRuntime.md#ondblclick)
- [onDown](EShapeRuntime.md#ondown)
- [onFocus](EShapeRuntime.md#onfocus)
- [onInitialize](EShapeRuntime.md#oninitialize)
- [onKeyDown](EShapeRuntime.md#onkeydown)
- [onKeyUp](EShapeRuntime.md#onkeyup)
- [onMove](EShapeRuntime.md#onmove)
- [onOut](EShapeRuntime.md#onout)
- [onOver](EShapeRuntime.md#onover)
- [onRender](EShapeRuntime.md#onrender)
- [onStateChange](EShapeRuntime.md#onstatechange)
- [onUp](EShapeRuntime.md#onup)
- [onUpOutside](EShapeRuntime.md#onupoutside)
- [onUpdate](EShapeRuntime.md#onupdate)
- [update](EShapeRuntime.md#update)

## Constructors

### constructor

• **new EShapeRuntime**(`shape`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L74)

## Properties

### actions

• **actions**: [`EShapeActionRuntime`](EShapeActionRuntime.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L60)

___

### cursor

• **cursor**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L64)

___

### effect

• **effect**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L69)

___

### fill

• **fill**: [`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L61)

___

### interactive

• **interactive**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L72)

___

### isStateChanged

• **isStateChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L71)

___

### reset

• **reset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L66)

___

### rotation

• **rotation**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L59)

___

### size

• **size**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L58)

___

### stroke

• **stroke**: [`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L62)

___

### text

• **text**: [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L63)

___

### written

• **written**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L67)

___

### x

• **x**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L56)

___

### y

• **y**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L57)

## Methods

### doReset

▸ `Protected` **doReset**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L271)

___

### initialize

▸ **initialize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L94)

___

### isActionable

▸ **isActionable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L107)

___

### onBlur

▸ **onBlur**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L223)

___

### onClick

▸ **onClick**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L111)

___

### onDblClick

▸ **onDblClick**(`shape`, `e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L118)

___

### onDown

▸ **onDown**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L138)

___

### onFocus

▸ **onFocus**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L216)

___

### onInitialize

▸ **onInitialize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L100)

___

### onKeyDown

▸ **onKeyDown**(`shape`, `e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L182)

___

### onKeyUp

▸ **onKeyUp**(`shape`, `e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L189)

___

### onMove

▸ **onMove**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L175)

___

### onOut

▸ **onOut**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L134)

___

### onOver

▸ **onOver**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L130)

___

### onRender

▸ **onRender**(`shape`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L252)

___

### onStateChange

▸ **onStateChange**(`shape`, `newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L203)

___

### onUp

▸ **onUp**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L164)

___

### onUpOutside

▸ **onUpOutside**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L171)

___

### onUpdate

▸ `Protected` **onUpdate**(`shape`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L260)

___

### update

▸ **update**(`shape`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L230)
