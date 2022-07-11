[Winter Cardinal UI - v0.200.0](../index.md) / UtilWheelEvent

# Class: UtilWheelEvent

## Table of contents

### Constructors

- [constructor](UtilWheelEvent.md#constructor)

### Methods

- [getLineHeight](UtilWheelEvent.md#getlineheight)
- [getNames](UtilWheelEvent.md#getnames)
- [getPageHeight](UtilWheelEvent.md#getpageheight)
- [normalize](UtilWheelEvent.md#normalize)
- [off](UtilWheelEvent.md#off)
- [on](UtilWheelEvent.md#on)
- [getInstance](UtilWheelEvent.md#getinstance)

## Constructors

### constructor

• **new UtilWheelEvent**()

## Methods

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-wheel-event.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/util-wheel-event.ts#L68)

___

### getNames

▸ **getNames**(): [`UtilWheelEventName`](../index.md#utilwheeleventname)[]

#### Returns

[`UtilWheelEventName`](../index.md#utilwheeleventname)[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-wheel-event.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/util-wheel-event.ts#L39)

___

### getPageHeight

▸ **getPageHeight**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-wheel-event.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/util-wheel-event.ts#L76)

___

### normalize

▸ **normalize**(`e`): ``null`` \| [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

``null`` \| [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-wheel-event.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/util-wheel-event.ts#L83)

___

### off

▸ **off**(`target`, `handler`, `useCapture?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | `HTMLElement` | `undefined` |
| `handler` | [`UtilWheelEventHandler`](../index.md#utilwheeleventhandler) | `undefined` |
| `useCapture` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-wheel-event.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/util-wheel-event.ts#L60)

___

### on

▸ **on**(`target`, `handler`, `useCapture?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | `HTMLElement` | `undefined` |
| `handler` | [`UtilWheelEventHandler`](../index.md#utilwheeleventhandler) | `undefined` |
| `useCapture` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-wheel-event.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/util-wheel-event.ts#L52)

___

### getInstance

▸ `Static` **getInstance**(): [`UtilWheelEvent`](UtilWheelEvent.md)

#### Returns

[`UtilWheelEvent`](UtilWheelEvent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-wheel-event.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/util-wheel-event.ts#L175)
