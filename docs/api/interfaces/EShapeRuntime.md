[Winter Cardinal UI - v0.407.0](../index.md) / EShapeRuntime

# Interface: EShapeRuntime

## Implemented by

- [`EShapeRuntimeImpl`](../classes/EShapeRuntimeImpl.md)

## Table of contents

### Properties

- [actions](EShapeRuntime.md#actions)
- [cursor](EShapeRuntime.md#cursor)
- [effect](EShapeRuntime.md#effect)
- [fill](EShapeRuntime.md#fill)
- [interactive](EShapeRuntime.md#interactive)
- [isStateChanged](EShapeRuntime.md#isstatechanged)
- [reset](EShapeRuntime.md#reset)
- [rotation](EShapeRuntime.md#rotation)
- [sizeX](EShapeRuntime.md#sizex)
- [sizeY](EShapeRuntime.md#sizey)
- [stroke](EShapeRuntime.md#stroke)
- [text](EShapeRuntime.md#text)
- [written](EShapeRuntime.md#written)
- [x](EShapeRuntime.md#x)
- [y](EShapeRuntime.md#y)

### Methods

- [initialize](EShapeRuntime.md#initialize)
- [isActionable](EShapeRuntime.md#isactionable)
- [onBlur](EShapeRuntime.md#onblur)
- [onClick](EShapeRuntime.md#onclick)
- [onDblClick](EShapeRuntime.md#ondblclick)
- [onDown](EShapeRuntime.md#ondown)
- [onFocus](EShapeRuntime.md#onfocus)
- [onKeyDown](EShapeRuntime.md#onkeydown)
- [onKeyUp](EShapeRuntime.md#onkeyup)
- [onMove](EShapeRuntime.md#onmove)
- [onOut](EShapeRuntime.md#onout)
- [onOver](EShapeRuntime.md#onover)
- [onRender](EShapeRuntime.md#onrender)
- [onResize](EShapeRuntime.md#onresize)
- [onRightClick](EShapeRuntime.md#onrightclick)
- [onRightDown](EShapeRuntime.md#onrightdown)
- [onRightUp](EShapeRuntime.md#onrightup)
- [onRightUpOutside](EShapeRuntime.md#onrightupoutside)
- [onStateChange](EShapeRuntime.md#onstatechange)
- [onUp](EShapeRuntime.md#onup)
- [onUpOutside](EShapeRuntime.md#onupoutside)
- [update](EShapeRuntime.md#update)

## Properties

### actions

• `Readonly` **actions**: [`EShapeActionRuntime`](EShapeActionRuntime.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L21)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L25)

___

### effect

• **effect**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L30)

___

### fill

• `Readonly` **fill**: [`EShapeFillLike`](EShapeFillLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L22)

___

### interactive

• `Readonly` **interactive**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L26)

___

### isStateChanged

• **isStateChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L31)

___

### reset

• **reset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L28)

___

### rotation

• `Readonly` **rotation**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L20)

___

### sizeX

• `Readonly` **sizeX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L18)

___

### sizeY

• `Readonly` **sizeY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L19)

___

### stroke

• `Readonly` **stroke**: [`EShapeStrokeLike`](EShapeStrokeLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L23)

___

### text

• `Readonly` **text**: [`EShapeTextLike`](EShapeTextLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L24)

___

### written

• **written**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L29)

___

### x

• `Readonly` **x**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L16)

___

### y

• `Readonly` **y**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L17)

## Methods

### initialize

▸ **initialize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L33)

___

### isActionable

▸ **isActionable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L35)

___

### onBlur

▸ **onBlur**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L69)

___

### onClick

▸ **onClick**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L41)

___

### onDblClick

▸ **onDblClick**(`shape`, `e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L43)

___

### onDown

▸ **onDown**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L53)

___

### onFocus

▸ **onFocus**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L67)

___

### onKeyDown

▸ **onKeyDown**(`shape`, `e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L61)

___

### onKeyUp

▸ **onKeyUp**(`shape`, `e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L63)

___

### onMove

▸ **onMove**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L59)

___

### onOut

▸ **onOut**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L51)

___

### onOver

▸ **onOver**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L49)

___

### onRender

▸ **onRender**(`shape`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L79)

___

### onResize

▸ **onResize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L39)

___

### onRightClick

▸ **onRightClick**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L71)

___

### onRightDown

▸ **onRightDown**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L73)

___

### onRightUp

▸ **onRightUp**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L75)

___

### onRightUpOutside

▸ **onRightUpOutside**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L77)

___

### onStateChange

▸ **onStateChange**(`shape`, `newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `newState` | [`DBaseStateSet`](DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L65)

___

### onUp

▸ **onUp**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L55)

___

### onUpOutside

▸ **onUpOutside**(`shape`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L57)

___

### update

▸ **update**(`shape`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-runtime.ts#L37)
