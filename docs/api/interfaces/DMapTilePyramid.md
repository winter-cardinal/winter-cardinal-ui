[Winter Cardinal UI - v0.457.0](../index.md) / DMapTilePyramid

# Interface: DMapTilePyramid

## Hierarchy

- `EventEmitter`

  ↳ **`DMapTilePyramid`**

## Implemented by

- [`DMapTilePyramidImpl`](../classes/DMapTilePyramidImpl.md)

## Table of contents

### Properties

- [coordinate](DMapTilePyramid.md#coordinate)
- [mapping](DMapTilePyramid.md#mapping)

### Methods

- [addListener](DMapTilePyramid.md#addlistener)
- [destroy](DMapTilePyramid.md#destroy)
- [emit](DMapTilePyramid.md#emit)
- [eventNames](DMapTilePyramid.md#eventnames)
- [fit](DMapTilePyramid.md#fit)
- [listenerCount](DMapTilePyramid.md#listenercount)
- [listeners](DMapTilePyramid.md#listeners)
- [move](DMapTilePyramid.md#move)
- [off](DMapTilePyramid.md#off)
- [on](DMapTilePyramid.md#on)
- [once](DMapTilePyramid.md#once)
- [removeAllListeners](DMapTilePyramid.md#removealllisteners)
- [removeListener](DMapTilePyramid.md#removelistener)

## Properties

### coordinate

• `Readonly` **coordinate**: [`DMapCoordinate`](DMapCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts#L27)

___

### mapping

• **mapping**: [`DMapTileMapping`](DMapTileMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts#L28)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): `this`

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### destroy

▸ **destroy**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts#L31)

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

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

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### fit

▸ **fit**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts#L30)

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

node_modules/pixi.js/pixi.js.d.ts:25432

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

node_modules/pixi.js/pixi.js.d.ts:25424

___

### move

▸ **move**(`z`, `lon0`, `lat0`, `lon1`, `lat1`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |
| `lon0` | `number` |
| `lat0` | `number` |
| `lon1` | `number` |
| `lat1` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid.ts#L29)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): `this`

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

`this`

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): `this`

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

`this`

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### once

▸ **once**(`event`, `fn`, `context?`): `this`

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

`this`

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

`this`

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): `this`

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

`this`

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475
