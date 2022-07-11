[Winter Cardinal UI - v0.200.0](../index.md) / EShapeButtonRuntime

# Class: EShapeButtonRuntime

## Hierarchy

- [`EShapeRuntime`](EShapeRuntime.md)

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
- [size](EShapeButtonRuntime.md#size)
- [stroke](EShapeButtonRuntime.md#stroke)
- [text](EShapeButtonRuntime.md#text)
- [written](EShapeButtonRuntime.md#written)
- [x](EShapeButtonRuntime.md#x)
- [y](EShapeButtonRuntime.md#y)

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
- [onInitialize](EShapeButtonRuntime.md#oninitialize)
- [onKeyDown](EShapeButtonRuntime.md#onkeydown)
- [onKeyUp](EShapeButtonRuntime.md#onkeyup)
- [onMove](EShapeButtonRuntime.md#onmove)
- [onOut](EShapeButtonRuntime.md#onout)
- [onOver](EShapeButtonRuntime.md#onover)
- [onRender](EShapeButtonRuntime.md#onrender)
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

[EShapeRuntime](EShapeRuntime.md).[constructor](EShapeRuntime.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L19)

## Properties

### \_isGrouped

• `Protected` `Optional` **\_isGrouped**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L17)

___

### \_isToggle

• `Protected` `Optional` **\_isToggle**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L16)

___

### actions

• **actions**: [`EShapeActionRuntime`](EShapeActionRuntime.md)[]

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[actions](EShapeRuntime.md#actions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L60)

___

### cursor

• **cursor**: `string`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[cursor](EShapeRuntime.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L64)

___

### effect

• **effect**: `number`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[effect](EShapeRuntime.md#effect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L69)

___

### fill

• **fill**: [`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[fill](EShapeRuntime.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L61)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[interactive](EShapeRuntime.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L72)

___

### isStateChanged

• **isStateChanged**: `boolean`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[isStateChanged](EShapeRuntime.md#isstatechanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L71)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[reset](EShapeRuntime.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L66)

___

### rotation

• **rotation**: `number`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[rotation](EShapeRuntime.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L59)

___

### size

• **size**: `Point`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[size](EShapeRuntime.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L58)

___

### stroke

• **stroke**: [`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[stroke](EShapeRuntime.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L62)

___

### text

• **text**: [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[text](EShapeRuntime.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L63)

___

### written

• **written**: `number`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[written](EShapeRuntime.md#written)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L67)

___

### x

• **x**: `number`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[x](EShapeRuntime.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L56)

___

### y

• **y**: `number`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[y](EShapeRuntime.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L57)

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

[EShapeRuntime](EShapeRuntime.md).[doReset](EShapeRuntime.md#doreset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L271)

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

[EShapeRuntime](EShapeRuntime.md).[initialize](EShapeRuntime.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L31)

___

### isActionable

▸ **isActionable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[EShapeRuntime](EShapeRuntime.md).[isActionable](EShapeRuntime.md#isactionable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L27)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L64)

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

[EShapeRuntime](EShapeRuntime.md).[onBlur](EShapeRuntime.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L223)

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

[EShapeRuntime](EShapeRuntime.md).[onClick](EShapeRuntime.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L40)

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

[EShapeRuntime](EShapeRuntime.md).[onDblClick](EShapeRuntime.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L118)

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

[EShapeRuntime](EShapeRuntime.md).[onDown](EShapeRuntime.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L138)

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

[EShapeRuntime](EShapeRuntime.md).[onFocus](EShapeRuntime.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L216)

___

### onInitialize

▸ **onInitialize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[EShapeRuntime](EShapeRuntime.md).[onInitialize](EShapeRuntime.md#oninitialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L100)

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

[EShapeRuntime](EShapeRuntime.md).[onKeyDown](EShapeRuntime.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L182)

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

[EShapeRuntime](EShapeRuntime.md).[onKeyUp](EShapeRuntime.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L189)

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

[EShapeRuntime](EShapeRuntime.md).[onMove](EShapeRuntime.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L175)

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

[EShapeRuntime](EShapeRuntime.md).[onOut](EShapeRuntime.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L134)

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

[EShapeRuntime](EShapeRuntime.md).[onOver](EShapeRuntime.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L130)

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

[EShapeRuntime](EShapeRuntime.md).[onRender](EShapeRuntime.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L252)

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

[EShapeRuntime](EShapeRuntime.md).[onStateChange](EShapeRuntime.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime.ts#L57)

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

[EShapeRuntime](EShapeRuntime.md).[onUp](EShapeRuntime.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L164)

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

[EShapeRuntime](EShapeRuntime.md).[onUpOutside](EShapeRuntime.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L171)

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

[EShapeRuntime](EShapeRuntime.md).[onUpdate](EShapeRuntime.md#onupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L260)

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

[EShapeRuntime](EShapeRuntime.md).[update](EShapeRuntime.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L230)
