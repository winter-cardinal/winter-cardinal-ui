[Winter Cardinal UI - v0.154.0](../index.md) / DColorGradientObservable

# Class: DColorGradientObservable

## Hierarchy

- `EventEmitter`

  ↳ **`DColorGradientObservable`**

## Implements

- [`DColorGradient`](../interfaces/DColorGradient.md)

## Table of contents

### Constructors

- [constructor](DColorGradientObservable.md#constructor)

### Properties

- [\_direction](DColorGradientObservable.md#_direction)
- [\_onChangeBound](DColorGradientObservable.md#_onchangebound)
- [\_points](DColorGradientObservable.md#_points)
- [\_selected](DColorGradientObservable.md#_selected)
- [\_workColor](DColorGradientObservable.md#_workcolor)

### Accessors

- [direction](DColorGradientObservable.md#direction)
- [points](DColorGradientObservable.md#points)
- [selected](DColorGradientObservable.md#selected)

### Methods

- [add](DColorGradientObservable.md#add)
- [addAt](DColorGradientObservable.md#addat)
- [addListener](DColorGradientObservable.md#addlistener)
- [emit](DColorGradientObservable.md#emit)
- [eventNames](DColorGradientObservable.md#eventnames)
- [fromObject](DColorGradientObservable.md#fromobject)
- [get](DColorGradientObservable.md#get)
- [listenerCount](DColorGradientObservable.md#listenercount)
- [listeners](DColorGradientObservable.md#listeners)
- [off](DColorGradientObservable.md#off)
- [on](DColorGradientObservable.md#on)
- [onChange](DColorGradientObservable.md#onchange)
- [once](DColorGradientObservable.md#once)
- [remove](DColorGradientObservable.md#remove)
- [removeAllListeners](DColorGradientObservable.md#removealllisteners)
- [removeListener](DColorGradientObservable.md#removelistener)
- [reset](DColorGradientObservable.md#reset)
- [size](DColorGradientObservable.md#size)
- [toObject](DColorGradientObservable.md#toobject)

## Constructors

### constructor

• **new DColorGradientObservable**()

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L22)

## Properties

### \_direction

• `Protected` **\_direction**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L16)

___

### \_onChangeBound

• `Protected` **\_onChangeBound**: (`target`: [`DColorGradientPointObservable`](DColorGradientPointObservable.md)) => `void`

#### Type declaration

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DColorGradientPointObservable`](DColorGradientPointObservable.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L19)

___

### \_points

• `Protected` **\_points**: [`DColorGradientPointObservable`](DColorGradientPointObservable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L15)

___

### \_selected

• `Protected` **\_selected**: ``null`` \| [`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L17)

___

### \_workColor

• `Protected` **\_workColor**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L20)

## Accessors

### direction

• `get` **direction**(): `number`

#### Returns

`number`

#### Implementation of

[DColorGradient](../interfaces/DColorGradient.md).[direction](../interfaces/DColorGradient.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L58)

• `set` **direction**(`direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | `number` |

#### Returns

`void`

#### Implementation of

[DColorGradient](../interfaces/DColorGradient.md).[direction](../interfaces/DColorGradient.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L62)

___

### points

• `get` **points**(): [`DColorGradientPointObservable`](DColorGradientPointObservable.md)[]

#### Returns

[`DColorGradientPointObservable`](DColorGradientPointObservable.md)[]

#### Implementation of

[DColorGradient](../interfaces/DColorGradient.md).[points](../interfaces/DColorGradient.md#points)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L54)

___

### selected

• `get` **selected**(): ``null`` \| [`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Returns

``null`` \| [`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L70)

## Methods

### add

▸ **add**(`color`, `alpha`, `position`, `selected`): [`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |
| `alpha` | `number` |
| `position` | `number` |
| `selected` | `boolean` |

#### Returns

[`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L132)

___

### addAt

▸ **addAt**(`position`): [`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

[`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L86)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DColorGradientObservable`](DColorGradientObservable.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DColorGradientObservable`](DColorGradientObservable.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### fromObject

▸ **fromObject**(`data`): [`DColorGradientObservable`](DColorGradientObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DColorGradient`](../interfaces/DColorGradient.md) |

#### Returns

[`DColorGradientObservable`](DColorGradientObservable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L223)

___

### get

▸ **get**(`index`): ``null`` \| [`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DColorGradientPointObservable`](DColorGradientPointObservable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L78)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

utils.EventEmitter.listenerCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DColorGradientObservable`](DColorGradientObservable.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DColorGradientObservable`](DColorGradientObservable.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DColorGradientObservable`](DColorGradientObservable.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DColorGradientObservable`](DColorGradientObservable.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onChange

▸ `Protected` **onChange**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DColorGradientPointObservable`](DColorGradientPointObservable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L38)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DColorGradientObservable`](DColorGradientObservable.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DColorGradientObservable`](DColorGradientObservable.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### remove

▸ **remove**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DColorGradientPointObservable`](DColorGradientPointObservable.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L151)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DColorGradientObservable`](DColorGradientObservable.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DColorGradientObservable`](DColorGradientObservable.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DColorGradientObservable`](DColorGradientObservable.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DColorGradientObservable`](DColorGradientObservable.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### reset

▸ **reset**(): [`DColorGradientObservable`](DColorGradientObservable.md)

#### Returns

[`DColorGradientObservable`](DColorGradientObservable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L176)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L74)

___

### toObject

▸ **toObject**(): [`DColorGradient`](../interfaces/DColorGradient.md)

#### Returns

[`DColorGradient`](../interfaces/DColorGradient.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-color-gradient-observable.ts#L211)
