[Winter Cardinal UI - v0.457.0](../index.md) / UtilGestureData

# Class: UtilGestureData\<TARGET\>

## Type parameters

| Name |
| :------ |
| `TARGET` |

## Table of contents

### Constructors

- [constructor](UtilGestureData.md#constructor)

### Properties

- [center](UtilGestureData.md#center)
- [distance](UtilGestureData.md#distance)
- [easing](UtilGestureData.md#easing)
- [interactionManager](UtilGestureData.md#interactionmanager)
- [onEnd](UtilGestureData.md#onend)
- [onMove](UtilGestureData.md#onmove)
- [pointers](UtilGestureData.md#pointers)
- [scale](UtilGestureData.md#scale)
- [target](UtilGestureData.md#target)
- [time](UtilGestureData.md#time)
- [timeoutId](UtilGestureData.md#timeoutid)

### Methods

- [bind](UtilGestureData.md#bind)
- [doUpdate](UtilGestureData.md#doupdate)
- [end](UtilGestureData.md#end)
- [isUpdatable](UtilGestureData.md#isupdatable)
- [start](UtilGestureData.md#start)
- [unbind](UtilGestureData.md#unbind)
- [update](UtilGestureData.md#update)

## Constructors

### constructor

• **new UtilGestureData**\<`TARGET`\>(): [`UtilGestureData`](UtilGestureData.md)\<`TARGET`\>

#### Type parameters

| Name |
| :------ |
| `TARGET` |

#### Returns

[`UtilGestureData`](UtilGestureData.md)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L23)

## Properties

### center

• **center**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L14)

___

### distance

• **distance**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L17)

___

### easing

• `Optional` **easing**: [`UtilGestureEasing`](UtilGestureEasing.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L21)

___

### interactionManager

• `Optional` **interactionManager**: `InteractionManager`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L13)

___

### onEnd

• `Optional` **onEnd**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L20)

___

### onMove

• `Optional` **onMove**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L19)

___

### pointers

• **pointers**: `Map`\<`number`, `PointerEvent`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L12)

___

### scale

• **scale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L15)

___

### target

• `Optional` **target**: `TARGET`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L11)

___

### time

• **time**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L16)

___

### timeoutId

• `Optional` **timeoutId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L18)

## Methods

### bind

▸ **bind**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L69)

___

### doUpdate

▸ **doUpdate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L101)

___

### end

▸ **end**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L55)

___

### isUpdatable

▸ **isUpdatable**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L39)

___

### start

▸ **start**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L31)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L85)

___

### update

▸ **update**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture-data.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-gesture-data.ts#L47)
