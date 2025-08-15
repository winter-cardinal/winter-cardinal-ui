[Winter Cardinal UI - v0.457.0](../index.md) / UtilGestureTap

# Class: UtilGestureTap\<TARGET\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilGestureTarget`](../interfaces/UtilGestureTarget.md) |

## Table of contents

### Constructors

- [constructor](UtilGestureTap.md#constructor)

### Properties

- [\_onLongPress](UtilGestureTap.md#_onlongpress)
- [\_onTap](UtilGestureTap.md#_ontap)
- [\_threshold](UtilGestureTap.md#_threshold)
- [\_unused](UtilGestureTap.md#_unused)
- [\_used](UtilGestureTap.md#_used)

### Methods

- [deleteData](UtilGestureTap.md#deletedata)
- [end](UtilGestureTap.md#end)
- [newData](UtilGestureTap.md#newdata)
- [newOnEnd](UtilGestureTap.md#newonend)
- [newOnMove](UtilGestureTap.md#newonmove)
- [onDown](UtilGestureTap.md#ondown)
- [onEnd](UtilGestureTap.md#onend)
- [onLongPress](UtilGestureTap.md#onlongpress)
- [onMove](UtilGestureTap.md#onmove)
- [start](UtilGestureTap.md#start)
- [stop](UtilGestureTap.md#stop)
- [toThreshold](UtilGestureTap.md#tothreshold)

## Constructors

### constructor

• **new UtilGestureTap**\<`TARGET`\>(`on?`, `options?`): [`UtilGestureTap`](UtilGestureTap.md)\<`TARGET`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilGestureTarget`](../interfaces/UtilGestureTarget.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `on?` | [`UtilGestureTapOnOptions`](../interfaces/UtilGestureTapOnOptions.md)\<`TARGET`\> |
| `options?` | [`UtilGestureTapOptions`](../interfaces/UtilGestureTapOptions.md)\<`TARGET`\> |

#### Returns

[`UtilGestureTap`](UtilGestureTap.md)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L41)

## Properties

### \_onLongPress

• `Protected` `Optional` **\_onLongPress**: [`UtilGestureOnTap`](../index.md#utilgestureontap)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L36)

___

### \_onTap

• `Protected` `Optional` **\_onTap**: [`UtilGestureOnTap`](../index.md#utilgestureontap)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L35)

___

### \_threshold

• `Protected` **\_threshold**: [`UtilGestureTapThreshold`](../interfaces/UtilGestureTapThreshold.md)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L37)

___

### \_unused

• `Protected` **\_unused**: [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L38)

___

### \_used

• `Protected` **\_used**: `Map`\<`TARGET`, [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L39)

## Methods

### deleteData

▸ **deleteData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L88)

___

### end

▸ **end**(`target`, `data`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L231)

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

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L69)

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

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L110)

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

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L104)

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

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L116)

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

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L173)

___

### onLongPress

▸ **onLongPress**(`target`, `data`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L207)

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

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L148)

___

### start

▸ **start**(`target`, `data`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `data` | [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\> |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L222)

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

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L246)

___

### toThreshold

▸ **toThreshold**(`options?`): [`UtilGestureTapThreshold`](../interfaces/UtilGestureTapThreshold.md)\<`TARGET`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`UtilGestureTapOptions`](../interfaces/UtilGestureTapOptions.md)\<`TARGET`\> |

#### Returns

[`UtilGestureTapThreshold`](../interfaces/UtilGestureTapThreshold.md)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-tap.ts#L51)
