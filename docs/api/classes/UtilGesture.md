[Winter Cardinal UI - v0.407.0](../index.md) / UtilGesture

# Class: UtilGesture\<TARGET\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilGestureTarget`](../interfaces/UtilGestureTarget.md) |

## Table of contents

### Constructors

- [constructor](UtilGesture.md#constructor)

### Properties

- [\_checkerMove](UtilGesture.md#_checkermove)
- [\_checkerStart](UtilGesture.md#_checkerstart)
- [\_easing](UtilGesture.md#_easing)
- [\_modifier](UtilGesture.md#_modifier)
- [\_onEasingEnd](UtilGesture.md#_oneasingend)
- [\_onEasingStart](UtilGesture.md#_oneasingstart)
- [\_onEnd](UtilGesture.md#_onend)
- [\_onMove](UtilGesture.md#_onmove)
- [\_onStart](UtilGesture.md#_onstart)
- [\_onStop](UtilGesture.md#_onstop)
- [\_touch](UtilGesture.md#_touch)
- [\_unused](UtilGesture.md#_unused)
- [\_used](UtilGesture.md#_used)

### Methods

- [bind](UtilGesture.md#bind)
- [deleteData](UtilGesture.md#deletedata)
- [isTouch](UtilGesture.md#istouch)
- [newData](UtilGesture.md#newdata)
- [newEasing](UtilGesture.md#neweasing)
- [newOnEnd](UtilGesture.md#newonend)
- [newOnMove](UtilGesture.md#newonmove)
- [onDown](UtilGesture.md#ondown)
- [onEasingEnd](UtilGesture.md#oneasingend)
- [onEasingMove](UtilGesture.md#oneasingmove)
- [onEnd](UtilGesture.md#onend)
- [onMove](UtilGesture.md#onmove)
- [stop](UtilGesture.md#stop)
- [toEasingOptions](UtilGesture.md#toeasingoptions)

## Constructors

### constructor

• **new UtilGesture**\<`TARGET`\>(`options`): [`UtilGesture`](UtilGesture.md)\<`TARGET`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilGestureTarget`](../interfaces/UtilGestureTarget.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UtilGestureOptions`](../interfaces/UtilGestureOptions.md)\<`TARGET`\> |

#### Returns

[`UtilGesture`](UtilGesture.md)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L100)

## Properties

### \_checkerMove

• `Protected` **\_checkerMove**: [`UtilGestureChecker`](../index.md#utilgesturechecker)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L93)

___

### \_checkerStart

• `Protected` **\_checkerStart**: [`UtilGestureChecker`](../index.md#utilgesturechecker)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L92)

___

### \_easing

• `Protected` `Optional` **\_easing**: `boolean` \| [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L94)

___

### \_modifier

• `Protected` **\_modifier**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L91)

___

### \_onEasingEnd

• `Protected` `Optional` **\_onEasingEnd**: [`UtilGestureOnEasingEnd`](../index.md#utilgestureoneasingend)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L90)

___

### \_onEasingStart

• `Protected` `Optional` **\_onEasingStart**: [`UtilGestureOnEasingStart`](../index.md#utilgestureoneasingstart)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L89)

___

### \_onEnd

• `Protected` `Optional` **\_onEnd**: [`UtilGestureOnEnd`](../index.md#utilgestureonend)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L87)

___

### \_onMove

• `Protected` `Optional` **\_onMove**: [`UtilGestureOnMove`](../index.md#utilgestureonmove)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L86)

___

### \_onStart

• `Protected` `Optional` **\_onStart**: [`UtilGestureOnStart`](../index.md#utilgestureonstart)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L85)

___

### \_onStop

• `Protected` `Optional` **\_onStop**: [`UtilGestureOnStop`](../index.md#utilgestureonstop)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L88)

___

### \_touch

• `Protected` **\_touch**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L95)

___

### \_unused

• `Protected` **\_unused**: [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L97)

___

### \_used

• `Protected` **\_used**: `Map`\<`TARGET`, [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L98)

## Methods

### bind

▸ **bind**(`target`): [`UtilGesture`](UtilGesture.md)\<`TARGET`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` & `EventEmitter` |

#### Returns

[`UtilGesture`](UtilGesture.md)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L184)

___

### deleteData

▸ **deleteData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L173)

___

### isTouch

▸ **isTouch**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L191)

___

### newData

▸ **newData**(`target`): [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |

#### Returns

[`UtilGestureData`](UtilGestureData.md)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L130)

___

### newEasing

▸ **newEasing**(`data`): `undefined` \| [`UtilGestureEasing`](UtilGestureEasing.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`undefined` \| [`UtilGestureEasing`](UtilGestureEasing.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L149)

___

### newOnEnd

▸ **newOnEnd**(`data`): (`e`: `InteractionEvent`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`fn`

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L252)

___

### newOnMove

▸ **newOnMove**(`data`): (`e`: `InteractionEvent`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`fn`

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L246)

___

### onDown

▸ **onDown**(`target`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L202)

___

### onEasingEnd

▸ **onEasingEnd**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:376](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L376)

___

### onEasingMove

▸ **onEasingMove**(`dx`, `dy`, `ds`, `time`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |
| `ds` | `number` |
| `time` | `number` |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L351)

___

### onEnd

▸ **onEnd**(`e`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L301)

___

### onMove

▸ **onMove**(`e`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L258)

___

### stop

▸ **stop**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:385](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L385)

___

### toEasingOptions

▸ **toEasingOptions**(`options?`): `undefined` \| [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | ``true`` \| [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md) |

#### Returns

`undefined` \| [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L167)
