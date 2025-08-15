[Winter Cardinal UI - v0.457.0](../index.md) / EShapeRuntimeImpl

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L55)

## Properties

### actions

• `Readonly` **actions**: [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)[]

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[actions](../interfaces/EShapeRuntime.md#actions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L43)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[cursor](../interfaces/EShapeRuntime.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L47)

___

### effect

• **effect**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[effect](../interfaces/EShapeRuntime.md#effect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L52)

___

### fill

• `Readonly` **fill**: [`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[fill](../interfaces/EShapeRuntime.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L44)

___

### interactive

• `Readonly` **interactive**: `boolean`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[interactive](../interfaces/EShapeRuntime.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L48)

___

### isStateChanged

• **isStateChanged**: `boolean`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[isStateChanged](../interfaces/EShapeRuntime.md#isstatechanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L53)

___

### reset

• **reset**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[reset](../interfaces/EShapeRuntime.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L50)

___

### rotation

• `Readonly` **rotation**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[rotation](../interfaces/EShapeRuntime.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L42)

___

### sizeX

• `Readonly` **sizeX**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[sizeX](../interfaces/EShapeRuntime.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L40)

___

### sizeY

• `Readonly` **sizeY**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[sizeY](../interfaces/EShapeRuntime.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L41)

___

### stroke

• `Readonly` **stroke**: [`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[stroke](../interfaces/EShapeRuntime.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L45)

___

### text

• `Readonly` **text**: [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[text](../interfaces/EShapeRuntime.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L46)

___

### written

• **written**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[written](../interfaces/EShapeRuntime.md#written)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L51)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[x](../interfaces/EShapeRuntime.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L38)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[y](../interfaces/EShapeRuntime.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L39)

___

### TRANSIENT\_STATES

▪ `Static` `Readonly` **TRANSIENT\_STATES**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L22)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L484)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L76)

___

### isActionable

▸ **isActionable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeRuntime](../interfaces/EShapeRuntime.md).[isActionable](../interfaces/EShapeRuntime.md#isactionable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L85)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L326)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L97)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L111)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L160)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:318](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L318)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L266)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L282)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L258)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L146)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L132)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L465)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L89)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:334](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L334)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:348](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L348)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L394)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L421)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L305)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L206)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L233)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L473)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts:446](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime-impl.ts#L446)
