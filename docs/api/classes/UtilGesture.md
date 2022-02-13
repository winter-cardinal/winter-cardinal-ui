[Winter Cardinal UI - v0.155.0](../index.md) / UtilGesture

# Class: UtilGesture<TARGET\>

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
- [\_onEnd](UtilGesture.md#_onend)
- [\_onMove](UtilGesture.md#_onmove)
- [\_onStart](UtilGesture.md#_onstart)
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

• **new UtilGesture**<`TARGET`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilGestureTarget`](../interfaces/UtilGestureTarget.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UtilGestureOptions`](../interfaces/UtilGestureOptions.md)<`TARGET`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L88)

## Properties

### \_checkerMove

• `Protected` **\_checkerMove**: [`UtilGestureChecker`](../index.md#utilgesturechecker)<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L81)

___

### \_checkerStart

• `Protected` **\_checkerStart**: [`UtilGestureChecker`](../index.md#utilgesturechecker)<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L80)

___

### \_easing

• `Protected` `Optional` **\_easing**: `boolean` \| [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L82)

___

### \_modifier

• `Protected` **\_modifier**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L79)

___

### \_onEnd

• `Protected` `Optional` **\_onEnd**: [`UtilGestureOnEnd`](../index.md#utilgestureonend)<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L78)

___

### \_onMove

• `Protected` `Optional` **\_onMove**: [`UtilGestureOnMove`](../index.md#utilgestureonmove)<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L77)

___

### \_onStart

• `Protected` `Optional` **\_onStart**: [`UtilGestureOnStart`](../index.md#utilgestureonstart)<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L76)

___

### \_touch

• `Protected` **\_touch**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L83)

___

### \_unused

• `Protected` **\_unused**: [`UtilGestureData`](UtilGestureData.md)<`TARGET`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L85)

___

### \_used

• `Protected` **\_used**: `Map`<`TARGET`, [`UtilGestureData`](UtilGestureData.md)<`TARGET`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L86)

## Methods

### bind

▸ **bind**(`target`): [`UtilGesture`](UtilGesture.md)<`TARGET`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` & `EventEmitter` |

#### Returns

[`UtilGesture`](UtilGesture.md)<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L166)

___

### deleteData

▸ `Protected` **deleteData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L155)

___

### isTouch

▸ `Protected` **isTouch**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L173)

___

### newData

▸ `Protected` **newData**(`target`): [`UtilGestureData`](UtilGestureData.md)<`TARGET`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |

#### Returns

[`UtilGestureData`](UtilGestureData.md)<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L112)

___

### newEasing

▸ `Protected` **newEasing**(`data`): `undefined` \| [`UtilGestureEasing`](UtilGestureEasing.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)<`TARGET`\> |

#### Returns

`undefined` \| [`UtilGestureEasing`](UtilGestureEasing.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L131)

___

### newOnEnd

▸ `Protected` **newOnEnd**(`data`): (`e`: `InteractionEvent`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)<`TARGET`\> |

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

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L234)

___

### newOnMove

▸ `Protected` **newOnMove**(`data`): (`e`: `InteractionEvent`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)<`TARGET`\> |

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

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L228)

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

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L184)

___

### onEasingEnd

▸ `Protected` **onEasingEnd**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L350)

___

### onEasingMove

▸ `Protected` **onEasingMove**(`dx`, `dy`, `ds`, `time`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |
| `ds` | `number` |
| `time` | `number` |
| `data` | [`UtilGestureData`](UtilGestureData.md)<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:325](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L325)

___

### onEnd

▸ `Protected` **onEnd**(`e`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `data` | [`UtilGestureData`](UtilGestureData.md)<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L283)

___

### onMove

▸ `Protected` **onMove**(`e`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `data` | [`UtilGestureData`](UtilGestureData.md)<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L240)

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

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L354)

___

### toEasingOptions

▸ `Protected` **toEasingOptions**(`options?`): `undefined` \| [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | ``true`` \| [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md) |

#### Returns

`undefined` \| [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L149)
