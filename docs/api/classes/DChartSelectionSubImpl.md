[Winter Cardinal UI - v0.160.0](../index.md) / DChartSelectionSubImpl

# Class: DChartSelectionSubImpl<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`DChartSelectionSubImpl`**

## Implements

- [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSelectionSubImpl.md#constructor)

### Properties

- [\_container](DChartSelectionSubImpl.md#_container)
- [\_coordinateX](DChartSelectionSubImpl.md#_coordinatex)
- [\_coordinateY](DChartSelectionSubImpl.md#_coordinatey)
- [\_gridline](DChartSelectionSubImpl.md#_gridline)
- [\_isEnabled](DChartSelectionSubImpl.md#_isenabled)
- [\_marker](DChartSelectionSubImpl.md#_marker)
- [\_point](DChartSelectionSubImpl.md#_point)
- [\_position](DChartSelectionSubImpl.md#_position)
- [\_series](DChartSelectionSubImpl.md#_series)
- [\_state](DChartSelectionSubImpl.md#_state)
- [\_work](DChartSelectionSubImpl.md#_work)

### Accessors

- [gridline](DChartSelectionSubImpl.md#gridline)
- [marker](DChartSelectionSubImpl.md#marker)
- [position](DChartSelectionSubImpl.md#position)
- [series](DChartSelectionSubImpl.md#series)

### Methods

- [addListener](DChartSelectionSubImpl.md#addlistener)
- [bind](DChartSelectionSubImpl.md#bind)
- [emit](DChartSelectionSubImpl.md#emit)
- [eventNames](DChartSelectionSubImpl.md#eventnames)
- [listenerCount](DChartSelectionSubImpl.md#listenercount)
- [listeners](DChartSelectionSubImpl.md#listeners)
- [off](DChartSelectionSubImpl.md#off)
- [on](DChartSelectionSubImpl.md#on)
- [once](DChartSelectionSubImpl.md#once)
- [removeAllListeners](DChartSelectionSubImpl.md#removealllisteners)
- [removeListener](DChartSelectionSubImpl.md#removelistener)
- [set](DChartSelectionSubImpl.md#set)
- [setStyle](DChartSelectionSubImpl.md#setstyle)
- [unbind](DChartSelectionSubImpl.md#unbind)
- [unset](DChartSelectionSubImpl.md#unset)
- [update](DChartSelectionSubImpl.md#update)

## Constructors

### constructor

• **new DChartSelectionSubImpl**<`CHART`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)<`CHART`, `any`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L36)

## Properties

### \_container

• `Protected` **\_container**: ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L24)

___

### \_coordinateX

• `Protected` **\_coordinateX**: ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L27)

___

### \_coordinateY

• `Protected` **\_coordinateY**: ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L28)

___

### \_gridline

• `Protected` **\_gridline**: [`DChartSelectionGridlineContainer`](../interfaces/DChartSelectionGridlineContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L32)

___

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L25)

___

### \_marker

• `Protected` **\_marker**: [`DChartSelectionMarker`](DChartSelectionMarker.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L33)

___

### \_point

• `Protected` **\_point**: [`DChartSelectionPoint`](../index.md#dchartselectionpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L30)

___

### \_position

• `Protected` **\_position**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L29)

___

### \_series

• `Protected` **\_series**: ``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L26)

___

### \_state

• `Protected` **\_state**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L34)

___

### \_work

• `Protected` **\_work**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L31)

## Accessors

### gridline

• `get` **gridline**(): [`DChartSelectionGridlineContainer`](../interfaces/DChartSelectionGridlineContainer.md)<`CHART`\>

#### Returns

[`DChartSelectionGridlineContainer`](../interfaces/DChartSelectionGridlineContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L87)

___

### marker

• `get` **marker**(): [`DChartSelectionMarker`](DChartSelectionMarker.md)<`CHART`\>

#### Returns

[`DChartSelectionMarker`](DChartSelectionMarker.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L91)

___

### position

• `get` **position**(): `Point`

#### Returns

`Point`

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[position](../interfaces/DChartSelectionSub.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L83)

___

### series

• `get` **series**(): ``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\>

#### Returns

``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\>

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[series](../interfaces/DChartSelectionSub.md#series)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L79)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[addListener](../interfaces/DChartSelectionSub.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[bind](../interfaces/DChartSelectionSub.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L63)

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

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[emit](../interfaces/DChartSelectionSub.md#emit)

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

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[eventNames](../interfaces/DChartSelectionSub.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

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

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[listenerCount](../interfaces/DChartSelectionSub.md#listenercount)

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

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[listeners](../interfaces/DChartSelectionSub.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[off](../interfaces/DChartSelectionSub.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

`this`.

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[on](../interfaces/DChartSelectionSub.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

`this`.

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[once](../interfaces/DChartSelectionSub.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

`this`.

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[removeAllListeners](../interfaces/DChartSelectionSub.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSelectionSubImpl`](DChartSelectionSubImpl.md)<`CHART`\>

`this`.

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[removeListener](../interfaces/DChartSelectionSub.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### set

▸ **set**(`series`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\> |
| `result` | [`DChartSeriesHitResult`](DChartSeriesHitResult.md) \| [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[set](../interfaces/DChartSelectionSub.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L95)

___

### setStyle

▸ `Protected` **setStyle**(`this`, `shape`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L163)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[unbind](../interfaces/DChartSelectionSub.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L71)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[unset](../interfaces/DChartSelectionSub.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L170)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionSub](../interfaces/DChartSelectionSub.md).[update](../interfaces/DChartSelectionSub.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-selection-sub-impl.ts#L186)
