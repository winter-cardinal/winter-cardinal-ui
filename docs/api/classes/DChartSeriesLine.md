[Winter Cardinal UI - v0.164.0](../index.md) / DChartSeriesLine

# Class: DChartSeriesLine<CHART\>

A series represents a polyline.
Data points must be sorted in ascending order on the X axis.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

  ↳ **`DChartSeriesLine`**

## Table of contents

### Constructors

- [constructor](DChartSeriesLine.md#constructor)

### Properties

- [\_centerX](DChartSeriesLine.md#_centerx)
- [\_centerY](DChartSeriesLine.md#_centery)
- [\_container](DChartSeriesLine.md#_container)
- [\_coordinate](DChartSeriesLine.md#_coordinate)
- [\_domain](DChartSeriesLine.md#_domain)
- [\_index](DChartSeriesLine.md#_index)
- [\_line](DChartSeriesLine.md#_line)
- [\_options](DChartSeriesLine.md#_options)
- [\_pointId](DChartSeriesLine.md#_pointid)
- [\_pointIdUpdated](DChartSeriesLine.md#_pointidupdated)
- [\_points](DChartSeriesLine.md#_points)
- [\_range](DChartSeriesLine.md#_range)
- [\_regionPointId](DChartSeriesLine.md#_regionpointid)
- [\_state](DChartSeriesLine.md#_state)
- [\_stroke](DChartSeriesLine.md#_stroke)
- [WORK](DChartSeriesLine.md#work)

### Accessors

- [container](DChartSeriesLine.md#container)
- [coordinate](DChartSeriesLine.md#coordinate)
- [domain](DChartSeriesLine.md#domain)
- [index](DChartSeriesLine.md#index)
- [points](DChartSeriesLine.md#points)
- [range](DChartSeriesLine.md#range)
- [shape](DChartSeriesLine.md#shape)
- [state](DChartSeriesLine.md#state)

### Methods

- [addListener](DChartSeriesLine.md#addlistener)
- [bind](DChartSeriesLine.md#bind)
- [calcHitPoint](DChartSeriesLine.md#calchitpoint)
- [calcHitPointHitTester](DChartSeriesLine.md#calchitpointhittester)
- [calcHitPointTestRange](DChartSeriesLine.md#calchitpointtestrange)
- [destroy](DChartSeriesLine.md#destroy)
- [emit](DChartSeriesLine.md#emit)
- [eventNames](DChartSeriesLine.md#eventnames)
- [hitTest](DChartSeriesLine.md#hittest)
- [listenerCount](DChartSeriesLine.md#listenercount)
- [listeners](DChartSeriesLine.md#listeners)
- [off](DChartSeriesLine.md#off)
- [on](DChartSeriesLine.md#on)
- [onStateChange](DChartSeriesLine.md#onstatechange)
- [once](DChartSeriesLine.md#once)
- [removeAllListeners](DChartSeriesLine.md#removealllisteners)
- [removeListener](DChartSeriesLine.md#removelistener)
- [toDirty](DChartSeriesLine.md#todirty)
- [toThreshold](DChartSeriesLine.md#tothreshold)
- [unbind](DChartSeriesLine.md#unbind)
- [update](DChartSeriesLine.md#update)
- [updateLine](DChartSeriesLine.md#updateline)
- [updateRegion](DChartSeriesLine.md#updateregion)

## Constructors

### constructor

• **new DChartSeriesLine**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSeriesLineOptions`](../interfaces/DChartSeriesLineOptions.md) |

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[constructor](DChartSeriesBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L43)

## Properties

### \_centerX

• `Protected` **\_centerX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L40)

___

### \_centerY

• `Protected` **\_centerY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L41)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_container](DChartSeriesBase.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L39)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_coordinate](DChartSeriesBase.md#_coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L37)

___

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_domain](DChartSeriesBase.md#_domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L42)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_index](DChartSeriesBase.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L40)

___

### \_line

• `Protected` **\_line**: ``null`` \| [`EShapeLine`](EShapeLine.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L34)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSeriesLineOptions`](../interfaces/DChartSeriesLineOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L35)

___

### \_pointId

• `Protected` **\_pointId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L37)

___

### \_pointIdUpdated

• `Protected` **\_pointIdUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L38)

___

### \_points

• `Protected` **\_points**: (``null`` \| `number`)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L36)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_range](DChartSeriesBase.md#_range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L43)

___

### \_regionPointId

• `Protected` **\_regionPointId**: `number`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_regionPointId](DChartSeriesBase.md#_regionpointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L44)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_state](DChartSeriesBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L46)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`DChartSeriesStrokeComputed`](../interfaces/DChartSeriesStrokeComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L39)

___

### WORK

▪ `Static` `Protected` **WORK**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L33)

## Accessors

### container

• `get` **container**(): ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Returns

``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Inherited from

DChartSeriesBase.container

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L103)

___

### coordinate

• `get` **coordinate**(): [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Returns

[`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Inherited from

DChartSeriesBase.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L111)

___

### domain

• `get` **domain**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesBase.domain

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L93)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

DChartSeriesBase.index

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L107)

___

### points

• `get` **points**(): (``null`` \| `number`)[]

#### Returns

(``null`` \| `number`)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L80)

• `set` **points**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | (``null`` \| `number`)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L84)

___

### range

• `get` **range**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesBase.range

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L98)

___

### shape

• `get` **shape**(): ``null`` \| [`EShapeLine`](EShapeLine.md)

#### Returns

``null`` \| [`EShapeLine`](EShapeLine.md)

#### Overrides

DChartSeriesBase.shape

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L76)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DChartSeriesBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L115)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[addListener](DChartSeriesBase.md#addlistener)

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

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[bind](DChartSeriesBase.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L54)

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

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[calcHitPoint](DChartSeriesBase.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L268)

___

### calcHitPointHitTester

▸ **calcHitPointHitTester**(`this`, `x`, `y`, `p0x`, `p0y`, `p1x`, `p1y`, `index`, `threshold`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `x` | `number` |
| `y` | `number` |
| `p0x` | `number` |
| `p0y` | `number` |
| `p1x` | `number` |
| `p1y` | `number` |
| `index` | `number` |
| `threshold` | `number` |
| `result` | [`DChartSeriesHitResult`](DChartSeriesHitResult.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L305)

___

### calcHitPointTestRange

▸ **calcHitPointTestRange**(`this`, `x`, `y`, `threshold`, `values`, `result`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `x` | `number` |
| `y` | `number` |
| `threshold` | `number` |
| `values` | `number`[] |
| `result` | [`number`, `number`] |

#### Returns

[`number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L291)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[destroy](DChartSeriesBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L243)

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

[DChartSeriesBase](DChartSeriesBase.md).[emit](DChartSeriesBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[eventNames](DChartSeriesBase.md#eventnames)

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

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[hitTest](DChartSeriesBase.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L257)

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

[DChartSeriesBase](DChartSeriesBase.md).[listenerCount](DChartSeriesBase.md#listenercount)

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

[DChartSeriesBase](DChartSeriesBase.md).[listeners](DChartSeriesBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[off](DChartSeriesBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[on](DChartSeriesBase.md#on)

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

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[onStateChange](DChartSeriesBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L134)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[once](DChartSeriesBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[removeAllListeners](DChartSeriesBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSeriesLine`](DChartSeriesLine.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[removeListener](DChartSeriesBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[toDirty](DChartSeriesBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L89)

___

### toThreshold

▸ `Protected` **toThreshold**(`this`, `strokeWidth`, `strokeScale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `strokeWidth` | `number` |
| `strokeScale` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L287)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[unbind](DChartSeriesBase.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L68)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[update](DChartSeriesBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L93)

___

### updateLine

▸ `Protected` **updateLine**(`line`, `xcoordinate`, `ycoordinate`, `isPointsDirty`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLine`](EShapeLine.md) |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `isPointsDirty` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L120)

___

### updateRegion

▸ `Protected` **updateRegion**(): `void`

#### Returns

`void`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[updateRegion](DChartSeriesBase.md#updateregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-series-line.ts#L218)
