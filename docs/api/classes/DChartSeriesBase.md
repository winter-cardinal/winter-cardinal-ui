[Winter Cardinal UI - v0.165.0](../index.md) / DChartSeriesBase

# Class: DChartSeriesBase<CHART\>

A series represents a polyline.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`DChartSeriesBase`**

  ↳↳ [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)

  ↳↳ [`DChartSeriesLine`](DChartSeriesLine.md)

  ↳↳ [`DChartSeriesLinear`](DChartSeriesLinear.md)

## Implements

- [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSeriesBase.md#constructor)

### Properties

- [\_container](DChartSeriesBase.md#_container)
- [\_coordinate](DChartSeriesBase.md#_coordinate)
- [\_domain](DChartSeriesBase.md#_domain)
- [\_index](DChartSeriesBase.md#_index)
- [\_range](DChartSeriesBase.md#_range)
- [\_regionPointId](DChartSeriesBase.md#_regionpointid)
- [\_state](DChartSeriesBase.md#_state)
- [shape](DChartSeriesBase.md#shape)

### Accessors

- [container](DChartSeriesBase.md#container)
- [coordinate](DChartSeriesBase.md#coordinate)
- [domain](DChartSeriesBase.md#domain)
- [index](DChartSeriesBase.md#index)
- [range](DChartSeriesBase.md#range)
- [state](DChartSeriesBase.md#state)

### Methods

- [addListener](DChartSeriesBase.md#addlistener)
- [bind](DChartSeriesBase.md#bind)
- [calcHitPoint](DChartSeriesBase.md#calchitpoint)
- [destroy](DChartSeriesBase.md#destroy)
- [emit](DChartSeriesBase.md#emit)
- [eventNames](DChartSeriesBase.md#eventnames)
- [hitTest](DChartSeriesBase.md#hittest)
- [listenerCount](DChartSeriesBase.md#listenercount)
- [listeners](DChartSeriesBase.md#listeners)
- [off](DChartSeriesBase.md#off)
- [on](DChartSeriesBase.md#on)
- [onStateChange](DChartSeriesBase.md#onstatechange)
- [once](DChartSeriesBase.md#once)
- [removeAllListeners](DChartSeriesBase.md#removealllisteners)
- [removeListener](DChartSeriesBase.md#removelistener)
- [toDirty](DChartSeriesBase.md#todirty)
- [unbind](DChartSeriesBase.md#unbind)
- [update](DChartSeriesBase.md#update)
- [updateRegion](DChartSeriesBase.md#updateregion)

## Constructors

### constructor

• **new DChartSeriesBase**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSeriesBaseOptions`](../interfaces/DChartSeriesBaseOptions.md)<`any`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L50)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L39)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L37)

___

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L42)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L40)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L43)

___

### \_regionPointId

• `Protected` **\_regionPointId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L44)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L46)

___

### shape

• `Readonly` `Abstract` **shape**: ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[shape](../interfaces/DChartSeries.md#shape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L48)

## Accessors

### container

• `get` **container**(): ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Returns

``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[container](../interfaces/DChartSeries.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L103)

___

### coordinate

• `get` **coordinate**(): [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Returns

[`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[coordinate](../interfaces/DChartSeries.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L111)

___

### domain

• `get` **domain**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[domain](../interfaces/DChartSeries.md#domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L93)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[index](../interfaces/DChartSeries.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L107)

___

### range

• `get` **range**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[range](../interfaces/DChartSeries.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L98)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[state](../interfaces/DChartSeries.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L115)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### bind

▸ **bind**(`container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[bind](../interfaces/DChartSeries.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L75)

___

### calcHitPoint

▸ **calcHitPoint**(`x`, `y`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `result` | [`DChartSeriesHitResult`](DChartSeriesHitResult.md) |

#### Returns

`boolean`

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[calcHitPoint](../interfaces/DChartSeries.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L130)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[destroy](../interfaces/DChartSeries.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L121)

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

### hitTest

▸ **hitTest**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[hitTest](../interfaces/DChartSeries.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L126)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L134)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### toDirty

▸ `Abstract` **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[toDirty](../interfaces/DChartSeries.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L90)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[unbind](../interfaces/DChartSeries.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L86)

___

### update

▸ `Abstract` **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSeries](../interfaces/DChartSeries.md).[update](../interfaces/DChartSeries.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L91)

___

### updateRegion

▸ `Protected` `Abstract` **updateRegion**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L119)
