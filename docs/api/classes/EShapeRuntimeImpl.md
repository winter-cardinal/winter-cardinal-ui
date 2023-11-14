[Winter Cardinal UI - v0.374.0](../index.md) / EShapeRuntimeImpl

# Class: EShapeRuntimeImpl

## Hierarchy

- **`EShapeRuntimeImpl`**

  ↳ [`EShapeButtonRuntime`](EShapeButtonRuntime.md)

## Implements

- [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

## Table of contents

### Constructors

- [constructor](EShapeRuntimeImpl.md#constructor)

### Properties

- [actions](EShapeRuntimeImpl.md#actions)
- [cursor](EShapeRuntimeImpl.md#cursor)
- [effect](EShapeRuntimeImpl.md#effect)
- [fill](EShapeRuntimeImpl.md#fill)
- [interactive](EShapeRuntimeImpl.md#interactive)
- [isStateChanged](EShapeRuntimeImpl.md#isstatechanged)
- [reset](EShapeRuntimeImpl.md#reset)
- [rotation](EShapeRuntimeImpl.md#rotation)
- [sizeX](EShapeRuntimeImpl.md#sizex)
- [sizeY](EShapeRuntimeImpl.md#sizey)
- [stroke](EShapeRuntimeImpl.md#stroke)
- [text](EShapeRuntimeImpl.md#text)
- [written](EShapeRuntimeImpl.md#written)
- [x](EShapeRuntimeImpl.md#x)
- [y](EShapeRuntimeImpl.md#y)
- [TRANSIENT\_STATES](EShapeRuntimeImpl.md#transient_states)

### Methods

- [doReset](EShapeRuntimeImpl.md#doreset)
- [initialize](EShapeRuntimeImpl.md#initialize)
- [isActionable](EShapeRuntimeImpl.md#isactionable)
- [onBlur](EShapeRuntimeImpl.md#onblur)
- [onClick](EShapeRuntimeImpl.md#onclick)
- [onDblClick](EShapeRuntimeImpl.md#ondblclick)
- [onDown](EShapeRuntimeImpl.md#ondown)
- [onFocus](EShapeRuntimeImpl.md#onfocus)
- [onKeyDown](EShapeRuntimeImpl.md#onkeydown)
- [onKeyUp](EShapeRuntimeImpl.md#onkeyup)
- [onMove](EShapeRuntimeImpl.md#onmove)
- [onOut](EShapeRuntimeImpl.md#onout)
- [onOver](EShapeRuntimeImpl.md#onover)
- [onRender](EShapeRuntimeImpl.md#onrender)
- [onResize](EShapeRuntimeImpl.md#onresize)
- [onRightClick](EShapeRuntimeImpl.md#onrightclick)
- [onRightDown](EShapeRuntimeImpl.md#onrightdown)
- [onRightUp](EShapeRuntimeImpl.md#onrightup)
- [onRightUpOutside](EShapeRuntimeImpl.md#onrightupoutside)
- [onStateChange](EShapeRuntimeImpl.md#onstatechange)
- [onUp](EShapeRuntimeImpl.md#onup)
- [onUpOutside](EShapeRuntimeImpl.md#onupoutside)
- [onUpdate](EShapeRuntimeImpl.md#onupdate)
- [update](EShapeRuntimeImpl.md#update)

## Constructors

### constructor

• **new EShapeRuntimeImpl**(`shape`): [`EShapeRuntimeImpl`](EShapeRuntimeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeRuntimeImpl`](EShapeRuntimeImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L57)

## Properties

### actions

• `Readonly` **actions**: [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)[]

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[actions](../interfaces/EShapeRuntime.md#actions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L45)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[cursor](../interfaces/EShapeRuntime.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L49)

___

### effect

• **effect**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[effect](../interfaces/EShapeRuntime.md#effect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L54)

___

### fill

• `Readonly` **fill**: [`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[fill](../interfaces/EShapeRuntime.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L46)

___

### interactive

• `Readonly` **interactive**: `boolean`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[interactive](../interfaces/EShapeRuntime.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L50)

___

### isStateChanged

• **isStateChanged**: `boolean`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[isStateChanged](../interfaces/EShapeRuntime.md#isstatechanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L55)

___

### reset

• **reset**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[reset](../interfaces/EShapeRuntime.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L52)

___

### rotation

• `Readonly` **rotation**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[rotation](../interfaces/EShapeRuntime.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L44)

___

### sizeX

• `Readonly` **sizeX**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[sizeX](../interfaces/EShapeRuntime.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L42)

___

### sizeY

• `Readonly` **sizeY**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[sizeY](../interfaces/EShapeRuntime.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L43)

___

### stroke

• `Readonly` **stroke**: [`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[stroke](../interfaces/EShapeRuntime.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L47)

___

### text

• `Readonly` **text**: [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[text](../interfaces/EShapeRuntime.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L48)

___

### written

• **written**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[written](../interfaces/EShapeRuntime.md#written)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L53)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[x](../interfaces/EShapeRuntime.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L40)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[y](../interfaces/EShapeRuntime.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L41)

___

### TRANSIENT\_STATES

▪ `Static` `Readonly` **TRANSIENT\_STATES**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L24)

## Methods

### doReset

▸ **doReset**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:485](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L485)

___

### initialize

▸ **initialize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[initialize](../interfaces/EShapeRuntime.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L78)

___

### isActionable

▸ **isActionable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[isActionable](../interfaces/EShapeRuntime.md#isactionable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L87)

___

### onBlur

▸ **onBlur**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onBlur](../interfaces/EShapeRuntime.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L328)

___

### onClick

▸ **onClick**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onClick](../interfaces/EShapeRuntime.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L99)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onDblClick](../interfaces/EShapeRuntime.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L113)

___

### onDown

▸ **onDown**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onDown](../interfaces/EShapeRuntime.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L162)

___

### onFocus

▸ **onFocus**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onFocus](../interfaces/EShapeRuntime.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:320](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L320)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onKeyDown](../interfaces/EShapeRuntime.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L268)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onKeyUp](../interfaces/EShapeRuntime.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L284)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onMove](../interfaces/EShapeRuntime.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L260)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onOut](../interfaces/EShapeRuntime.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L148)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onOver](../interfaces/EShapeRuntime.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L134)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onRender](../interfaces/EShapeRuntime.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L466)

___

### onResize

▸ **onResize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onResize](../interfaces/EShapeRuntime.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L91)

___

### onRightClick

▸ **onRightClick**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onRightClick](../interfaces/EShapeRuntime.md#onrightclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L336)

___

### onRightDown

▸ **onRightDown**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onRightDown](../interfaces/EShapeRuntime.md#onrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L350)

___

### onRightUp

▸ **onRightUp**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onRightUp](../interfaces/EShapeRuntime.md#onrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L396)

___

### onRightUpOutside

▸ **onRightUpOutside**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onRightUpOutside](../interfaces/EShapeRuntime.md#onrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L423)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onStateChange](../interfaces/EShapeRuntime.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L307)

___

### onUp

▸ **onUp**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onUp](../interfaces/EShapeRuntime.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L208)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[onUpOutside](../interfaces/EShapeRuntime.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L235)

___

### onUpdate

▸ **onUpdate**(`shape`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L474)

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

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[update](../interfaces/EShapeRuntime.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L448)
