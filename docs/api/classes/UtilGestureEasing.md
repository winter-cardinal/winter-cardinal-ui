[Winter Cardinal UI - v0.164.0](../index.md) / UtilGestureEasing

# Class: UtilGestureEasing

## Table of contents

### Constructors

- [constructor](UtilGestureEasing.md#constructor)

### Properties

- [\_animation](UtilGestureEasing.md#_animation)
- [\_ds](UtilGestureEasing.md#_ds)
- [\_dt](UtilGestureEasing.md#_dt)
- [\_dtw](UtilGestureEasing.md#_dtw)
- [\_dx](UtilGestureEasing.md#_dx)
- [\_dy](UtilGestureEasing.md#_dy)
- [\_histories](UtilGestureEasing.md#_histories)
- [\_historiesSorted](UtilGestureEasing.md#_historiessorted)
- [\_historyBegin](UtilGestureEasing.md#_historybegin)
- [\_historyEnd](UtilGestureEasing.md#_historyend)
- [\_onEnd](UtilGestureEasing.md#_onend)
- [\_onMove](UtilGestureEasing.md#_onmove)
- [\_t](UtilGestureEasing.md#_t)
- [HISTORY\_CAPACITY](UtilGestureEasing.md#history_capacity)

### Methods

- [onEase](UtilGestureEasing.md#onease)
- [onEaseEnd](UtilGestureEasing.md#oneaseend)
- [onEnd](UtilGestureEasing.md#onend)
- [onMove](UtilGestureEasing.md#onmove)
- [onStart](UtilGestureEasing.md#onstart)
- [stop](UtilGestureEasing.md#stop)
- [updateHistoriesSorted](UtilGestureEasing.md#updatehistoriessorted)

## Constructors

### constructor

• **new UtilGestureEasing**(`onMove`, `onEnd`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onMove` | [`UtilGestureEasingOnMove`](../index.md#utilgestureeasingonmove) |
| `onEnd` | [`UtilGestureEasingOnEnd`](../index.md#utilgestureeasingonend) |
| `options?` | [`UtilGestureEasingOptions`](../interfaces/UtilGestureEasingOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L34)

## Properties

### \_animation

• `Protected` **\_animation**: [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L24)

___

### \_ds

• `Protected` **\_ds**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L27)

___

### \_dt

• `Protected` **\_dt**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L28)

___

### \_dtw

• `Protected` **\_dtw**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L29)

___

### \_dx

• `Protected` **\_dx**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L25)

___

### \_dy

• `Protected` **\_dy**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L26)

___

### \_histories

• `Protected` **\_histories**: [`UtilGestureEasingHistory`](UtilGestureEasingHistory.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L20)

___

### \_historiesSorted

• `Protected` **\_historiesSorted**: [`UtilGestureEasingHistory`](UtilGestureEasingHistory.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L21)

___

### \_historyBegin

• `Protected` **\_historyBegin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L22)

___

### \_historyEnd

• `Protected` **\_historyEnd**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L23)

___

### \_onEnd

• `Protected` **\_onEnd**: [`UtilGestureEasingOnEnd`](../index.md#utilgestureeasingonend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L32)

___

### \_onMove

• `Protected` **\_onMove**: [`UtilGestureEasingOnMove`](../index.md#utilgestureeasingonmove)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L31)

___

### \_t

• `Protected` **\_t**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L30)

___

### HISTORY\_CAPACITY

▪ `Static` `Protected` **HISTORY\_CAPACITY**: `number` = `5`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L19)

## Methods

### onEase

▸ `Protected` **onEase**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L184)

___

### onEaseEnd

▸ `Protected` **onEaseEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L192)

___

### onEnd

▸ **onEnd**(`ldt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ldt` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L143)

___

### onMove

▸ **onMove**(`dx`, `dy`, `ds`, `dt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |
| `ds` | `number` |
| `dt` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L76)

___

### onStart

▸ **onStart**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L63)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L196)

___

### updateHistoriesSorted

▸ `Protected` **updateHistoriesSorted**(`dt`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dt` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-gesture-easing.ts#L94)
