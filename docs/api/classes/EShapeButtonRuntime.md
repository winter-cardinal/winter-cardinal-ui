[Winter Cardinal UI - v0.310.1](../index.md) / EShapeButtonRuntime

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

• **new EShapeButtonRuntime**(`shape`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L44)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[cursor](EShapeRuntimeImpl.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L48)

___

### effect

• **effect**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[effect](EShapeRuntimeImpl.md#effect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L53)

___

### fill

• `Readonly` **fill**: [`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[fill](EShapeRuntimeImpl.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L45)

___

### interactive

• `Readonly` **interactive**: `boolean`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[interactive](EShapeRuntimeImpl.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L49)

___

### isStateChanged

• **isStateChanged**: `boolean`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[isStateChanged](EShapeRuntimeImpl.md#isstatechanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L54)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[reset](EShapeRuntimeImpl.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L51)

___

### rotation

• `Readonly` **rotation**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[rotation](EShapeRuntimeImpl.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L43)

___

### sizeX

• `Readonly` **sizeX**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[sizeX](EShapeRuntimeImpl.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L41)

___

### sizeY

• `Readonly` **sizeY**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[sizeY](EShapeRuntimeImpl.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L42)

___

### stroke

• `Readonly` **stroke**: [`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[stroke](EShapeRuntimeImpl.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L46)

___

### text

• `Readonly` **text**: [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[text](EShapeRuntimeImpl.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L47)

___

### written

• **written**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[written](EShapeRuntimeImpl.md#written)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L52)

___

### x

• `Readonly` **x**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[x](EShapeRuntimeImpl.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L39)

___

### y

• `Readonly` **y**: `number`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[y](EShapeRuntimeImpl.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L40)

___

### TRANSIENT\_STATES

▪ `Static` `Readonly` **TRANSIENT\_STATES**: `string`[]

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[TRANSIENT_STATES](EShapeRuntimeImpl.md#transient_states)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L23)

## Methods

### doReset

▸ `Protected` **doReset**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[doReset](EShapeRuntimeImpl.md#doreset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L484)

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

▸ `Protected` **onActivated**(`shape`): `void`

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L327)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L112)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onDown](EShapeRuntimeImpl.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L161)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L319)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L267)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L283)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L259)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L147)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L133)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L465)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L90)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L335)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:349](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L349)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:395](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L395)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L422)

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
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onUp](EShapeRuntimeImpl.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L207)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L234)

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

#### Inherited from

[EShapeRuntimeImpl](EShapeRuntimeImpl.md).[onUpdate](EShapeRuntimeImpl.md#onupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L473)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L447)
