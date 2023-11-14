[Winter Cardinal UI - v0.374.0](../index.md) / EShapeButtonRuntime

# Class: EShapeButtonRuntime

## Hierarchy

- [`EShapeRuntimeImpl`](EShapeRuntimeImpl.md)

  ↳ **`EShapeButtonRuntime`**

## Table of contents

### Constructors

- [constructor](EShapeButtonRuntime.md#constructor)

### Properties

- [\_isGrouped](EShapeButtonRuntime.md#_isgrouped)
- [\_isToggle](EShapeButtonRuntime.md#_istoggle)
- [actions](EShapeButtonRuntime.md#actions)
- [cursor](EShapeButtonRuntime.md#cursor)
- [effect](EShapeButtonRuntime.md#effect)
- [fill](EShapeButtonRuntime.md#fill)
- [interactive](EShapeButtonRuntime.md#interactive)
- [isStateChanged](EShapeButtonRuntime.md#isstatechanged)
- [reset](EShapeButtonRuntime.md#reset)
- [rotation](EShapeButtonRuntime.md#rotation)
- [sizeX](EShapeButtonRuntime.md#sizex)
- [sizeY](EShapeButtonRuntime.md#sizey)
- [stroke](EShapeButtonRuntime.md#stroke)
- [text](EShapeButtonRuntime.md#text)
- [written](EShapeButtonRuntime.md#written)
- [x](EShapeButtonRuntime.md#x)
- [y](EShapeButtonRuntime.md#y)
- [TRANSIENT\_STATES](EShapeButtonRuntime.md#transient_states)

### Methods

- [doReset](EShapeButtonRuntime.md#doreset)
- [initialize](EShapeButtonRuntime.md#initialize)
- [isActionable](EShapeButtonRuntime.md#isactionable)
- [onActivated](EShapeButtonRuntime.md#onactivated)
- [onBlur](EShapeButtonRuntime.md#onblur)
- [onClick](EShapeButtonRuntime.md#onclick)
- [onDblClick](EShapeButtonRuntime.md#ondblclick)
- [onDown](EShapeButtonRuntime.md#ondown)
- [onFocus](EShapeButtonRuntime.md#onfocus)
- [onKeyDown](EShapeButtonRuntime.md#onkeydown)
- [onKeyUp](EShapeButtonRuntime.md#onkeyup)
- [onMove](EShapeButtonRuntime.md#onmove)
- [onOut](EShapeButtonRuntime.md#onout)
- [onOver](EShapeButtonRuntime.md#onover)
- [onRender](EShapeButtonRuntime.md#onrender)
- [onResize](EShapeButtonRuntime.md#onresize)
- [onRightClick](EShapeButtonRuntime.md#onrightclick)
- [onRightDown](EShapeButtonRuntime.md#onrightdown)
- [onRightUp](EShapeButtonRuntime.md#onrightup)
- [onRightUpOutside](EShapeButtonRuntime.md#onrightupoutside)
- [onStateChange](EShapeButtonRuntime.md#onstatechange)
- [onUp](EShapeButtonRuntime.md#onup)
- [onUpOutside](EShapeButtonRuntime.md#onupoutside)
- [onUpdate](EShapeButtonRuntime.md#onupdate)
- [update](EShapeButtonRuntime.md#update)

## Constructors

### constructor

• **new EShapeButtonRuntime**(`shape`): [`EShapeButtonRuntime`](EShapeButtonRuntime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeButtonRuntime`](EShapeButtonRuntime.md)

#### Overrides

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[constructor](EShapeRuntimeImpl.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L19)

## Properties

### \_isGrouped

• `Protected` `Optional` **\_isGrouped**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L17)

___

### \_isToggle

• `Protected` `Optional` **\_isToggle**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L16)

___

### actions

• `Readonly` **actions**: [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)[]

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[actions](EShapeRuntimeImpl.md#actions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L45)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[cursor](EShapeRuntimeImpl.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L49)

___

### effect

• **effect**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[effect](EShapeRuntimeImpl.md#effect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L54)

___

### fill

• `Readonly` **fill**: [`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[fill](EShapeRuntimeImpl.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L46)

___

### interactive

• `Readonly` **interactive**: `boolean`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[interactive](EShapeRuntimeImpl.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L50)

___

### isStateChanged

• **isStateChanged**: `boolean`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[isStateChanged](EShapeRuntimeImpl.md#isstatechanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L55)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[reset](EShapeRuntimeImpl.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L52)

___

### rotation

• `Readonly` **rotation**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[rotation](EShapeRuntimeImpl.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L44)

___

### sizeX

• `Readonly` **sizeX**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[sizeX](EShapeRuntimeImpl.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L42)

___

### sizeY

• `Readonly` **sizeY**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[sizeY](EShapeRuntimeImpl.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L43)

___

### stroke

• `Readonly` **stroke**: [`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[stroke](EShapeRuntimeImpl.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L47)

___

### text

• `Readonly` **text**: [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[text](EShapeRuntimeImpl.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L48)

___

### written

• **written**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[written](EShapeRuntimeImpl.md#written)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L53)

___

### x

• `Readonly` **x**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[x](EShapeRuntimeImpl.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L40)

___

### y

• `Readonly` **y**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[y](EShapeRuntimeImpl.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L41)

___

### TRANSIENT\_STATES

▪ `Static` `Readonly` **TRANSIENT\_STATES**: `string`[]

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[TRANSIENT_STATES](EShapeRuntimeImpl.md#transient_states)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[doReset](EShapeRuntimeImpl.md#doreset)

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

#### Overrides

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[initialize](EShapeRuntimeImpl.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L31)

___

### isActionable

▸ **isActionable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[isActionable](EShapeRuntimeImpl.md#isactionable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L27)

___

### onActivated

▸ **onActivated**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L64)

___

### onBlur

▸ **onBlur**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onBlur](EShapeRuntimeImpl.md#onblur)

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

#### Overrides

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onClick](EShapeRuntimeImpl.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L40)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onDblClick](EShapeRuntimeImpl.md#ondblclick)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onDown](EShapeRuntimeImpl.md#ondown)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onFocus](EShapeRuntimeImpl.md#onfocus)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onKeyDown](EShapeRuntimeImpl.md#onkeydown)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onKeyUp](EShapeRuntimeImpl.md#onkeyup)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onMove](EShapeRuntimeImpl.md#onmove)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onOut](EShapeRuntimeImpl.md#onout)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onOver](EShapeRuntimeImpl.md#onover)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onRender](EShapeRuntimeImpl.md#onrender)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onResize](EShapeRuntimeImpl.md#onresize)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onRightClick](EShapeRuntimeImpl.md#onrightclick)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onRightDown](EShapeRuntimeImpl.md#onrightdown)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onRightUp](EShapeRuntimeImpl.md#onrightup)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onRightUpOutside](EShapeRuntimeImpl.md#onrightupoutside)

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

#### Overrides

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onStateChange](EShapeRuntimeImpl.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L57)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onUp](EShapeRuntimeImpl.md#onup)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onUpOutside](EShapeRuntimeImpl.md#onupoutside)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onUpdate](EShapeRuntimeImpl.md#onupdate)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[update](EShapeRuntimeImpl.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L448)
