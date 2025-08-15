[Winter Cardinal UI - v0.457.0](../index.md) / DMapTilePyramidImpl

# Class: DMapTilePyramidImpl

## Hierarchy

- `EventEmitter`

  ↳ **`DMapTilePyramidImpl`**

## Implements

- [`DMapTilePyramid`](../interfaces/DMapTilePyramid.md)

## Table of contents

### Constructors

- [constructor](DMapTilePyramidImpl.md#constructor)

### Properties

- [\_builder](DMapTilePyramidImpl.md#_builder)
- [\_canvas](DMapTilePyramidImpl.md#_canvas)
- [\_coordinate](DMapTilePyramidImpl.md#_coordinate)
- [\_fitBound](DMapTilePyramidImpl.md#_fitbound)
- [\_fitBoundTimeout](DMapTilePyramidImpl.md#_fitboundtimeout)
- [\_fitThrottle](DMapTilePyramidImpl.md#_fitthrottle)
- [\_fitThrottledBound](DMapTilePyramidImpl.md#_fitthrottledbound)
- [\_mapping](DMapTilePyramidImpl.md#_mapping)
- [\_mappingInternal](DMapTilePyramidImpl.md#_mappinginternal)
- [\_maxZ](DMapTilePyramidImpl.md#_maxz)
- [\_minZ](DMapTilePyramidImpl.md#_minz)
- [\_onLoadedBound](DMapTilePyramidImpl.md#_onloadedbound)
- [\_planes](DMapTilePyramidImpl.md#_planes)
- [\_tz](DMapTilePyramidImpl.md#_tz)
- [\_z](DMapTilePyramidImpl.md#_z)
- [WORK\_LONLAT](DMapTilePyramidImpl.md#work_lonlat)

### Accessors

- [coordinate](DMapTilePyramidImpl.md#coordinate)
- [mapping](DMapTilePyramidImpl.md#mapping)

### Methods

- [addListener](DMapTilePyramidImpl.md#addlistener)
- [cleanup](DMapTilePyramidImpl.md#cleanup)
- [destroy](DMapTilePyramidImpl.md#destroy)
- [destroyPlanesAfter](DMapTilePyramidImpl.md#destroyplanesafter)
- [destroyPlanesBefore](DMapTilePyramidImpl.md#destroyplanesbefore)
- [emit](DMapTilePyramidImpl.md#emit)
- [eventNames](DMapTilePyramidImpl.md#eventnames)
- [fit](DMapTilePyramidImpl.md#fit)
- [fitThrottled](DMapTilePyramidImpl.md#fitthrottled)
- [listenerCount](DMapTilePyramidImpl.md#listenercount)
- [listeners](DMapTilePyramidImpl.md#listeners)
- [move](DMapTilePyramidImpl.md#move)
- [newPlane](DMapTilePyramidImpl.md#newplane)
- [off](DMapTilePyramidImpl.md#off)
- [on](DMapTilePyramidImpl.md#on)
- [onLoaded](DMapTilePyramidImpl.md#onloaded)
- [once](DMapTilePyramidImpl.md#once)
- [removeAllListeners](DMapTilePyramidImpl.md#removealllisteners)
- [removeListener](DMapTilePyramidImpl.md#removelistener)
- [render](DMapTilePyramidImpl.md#render)
- [toMapping](DMapTilePyramidImpl.md#tomapping)
- [toTileZ](DMapTilePyramidImpl.md#totilez)
- [toZ](DMapTilePyramidImpl.md#toz)
- [updateTransform](DMapTilePyramidImpl.md#updatetransform)

## Constructors

### constructor

• **new DMapTilePyramidImpl**(`options`): [`DMapTilePyramidImpl`](DMapTilePyramidImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DMapTilePyramidOptions`](../interfaces/DMapTilePyramidOptions.md) |

#### Returns

[`DMapTilePyramidImpl`](DMapTilePyramidImpl.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L35)

## Properties

### \_builder

• `Protected` `Readonly` **\_builder**: [`DMapTileUrlBuilder`](../index.md#dmaptileurlbuilder)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L20)

___

### \_canvas

• `Protected` `Readonly` **\_canvas**: [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L19)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DMapCoordinate`](../interfaces/DMapCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L28)

___

### \_fitBound

• `Protected` **\_fitBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L30)

___

### \_fitBoundTimeout

• `Protected` **\_fitBoundTimeout**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L31)

___

### \_fitThrottle

• `Protected` **\_fitThrottle**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L33)

___

### \_fitThrottledBound

• `Protected` **\_fitThrottledBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L32)

___

### \_mapping

• `Protected` **\_mapping**: [`DMapTileMapping`](../interfaces/DMapTileMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L26)

___

### \_mappingInternal

• `Protected` **\_mappingInternal**: [`DMapTileMappingInternal`](../interfaces/DMapTileMappingInternal.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L27)

___

### \_maxZ

• `Protected` **\_maxZ**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L25)

___

### \_minZ

• `Protected` **\_minZ**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L24)

___

### \_onLoadedBound

• `Protected` **\_onLoadedBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L29)

___

### \_planes

• `Protected` `Readonly` **\_planes**: (`undefined` \| [`DMapTilePlane`](DMapTilePlane.md))[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L21)

___

### \_tz

• `Protected` **\_tz**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L23)

___

### \_z

• `Protected` **\_z**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L22)

___

### WORK\_LONLAT

▪ `Static` `Protected` **WORK\_LONLAT**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L17)

## Accessors

### coordinate

• `get` **coordinate**(): [`DMapCoordinate`](../interfaces/DMapCoordinate.md)

#### Returns

[`DMapCoordinate`](../interfaces/DMapCoordinate.md)

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[coordinate](../interfaces/DMapTilePyramid.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L67)

___

### mapping

• `get` **mapping**(): [`DMapTileMapping`](../interfaces/DMapTileMapping.md)

#### Returns

[`DMapTileMapping`](../interfaces/DMapTileMapping.md)

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[mapping](../interfaces/DMapTilePyramid.md#mapping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L117)

• `set` **mapping**(`mapping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | [`DMapTileMapping`](../interfaces/DMapTileMapping.md) |

#### Returns

`void`

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[mapping](../interfaces/DMapTilePyramid.md#mapping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L121)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[addListener](../interfaces/DMapTilePyramid.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L273)

___

### destroy

▸ **destroy**(): `this`

#### Returns

`this`

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[destroy](../interfaces/DMapTilePyramid.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L306)

___

### destroyPlanesAfter

▸ **destroyPlanesAfter**(`tz`, `planes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |
| `planes` | (`undefined` \| [`DMapTilePlane`](DMapTilePlane.md))[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L263)

___

### destroyPlanesBefore

▸ **destroyPlanesBefore**(`tz`, `planes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |
| `planes` | (`undefined` \| [`DMapTilePlane`](DMapTilePlane.md))[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L253)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[emit](../interfaces/DMapTilePyramid.md#emit)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[eventNames](../interfaces/DMapTilePyramid.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### fit

▸ **fit**(): `this`

#### Returns

`this`

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[fit](../interfaces/DMapTilePyramid.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L217)

___

### fitThrottled

▸ **fitThrottled**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L71)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[listenerCount](../interfaces/DMapTilePyramid.md#listenercount)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[listeners](../interfaces/DMapTilePyramid.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### move

▸ **move**(`scale`, `lon0`, `lat0`, `lon1`, `lat1`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |
| `lon0` | `number` |
| `lat0` | `number` |
| `lon1` | `number` |
| `lat1` | `number` |

#### Returns

`this`

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[move](../interfaces/DMapTilePyramid.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L191)

___

### newPlane

▸ **newPlane**(`tz`): [`DMapTilePlane`](DMapTilePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |

#### Returns

[`DMapTilePlane`](DMapTilePlane.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L145)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[off](../interfaces/DMapTilePyramid.md#off)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[on](../interfaces/DMapTilePyramid.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onLoaded

▸ **onLoaded**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L301)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[once](../interfaces/DMapTilePyramid.md#once)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[removeAllListeners](../interfaces/DMapTilePyramid.md#removealllisteners)

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

#### Implementation of

[DMapTilePyramid](../interfaces/DMapTilePyramid.md).[removeListener](../interfaces/DMapTilePyramid.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L156)

___

### toMapping

▸ **toMapping**(`canvas`, `mapping`, `coordinate`): [`DMapTileMappingInternal`](../interfaces/DMapTileMappingInternal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `mapping` | [`DMapTileMapping`](../interfaces/DMapTileMapping.md) |
| `coordinate` | [`DMapCoordinate`](../interfaces/DMapCoordinate.md) |

#### Returns

[`DMapTileMappingInternal`](../interfaces/DMapTileMappingInternal.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L77)

___

### toTileZ

▸ **toTileZ**(`tz`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L179)

___

### toZ

▸ **toZ**(`scale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L187)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-map-tile-pyramid-impl.ts#L183)
