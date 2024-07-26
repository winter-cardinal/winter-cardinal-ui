[Winter Cardinal UI - v0.442.0](../index.md) / DChartSeriesLinear

# Class: DChartSeriesLinear\<CHART\>

A series represents a linear equation `a (x - x0) === b (y - y0)`.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSeriesBase`](DChartSeriesBase.md)\<`CHART`\>

  ↳ **`DChartSeriesLinear`**

## Table of contents

### Constructors

- [constructor](DChartSeriesLinear.md#constructor)

### Properties

- [\_container](DChartSeriesLinear.md#_container)
- [\_coordinate](DChartSeriesLinear.md#_coordinate)
- [\_domain](DChartSeriesLinear.md#_domain)
- [\_index](DChartSeriesLinear.md#_index)
- [\_isShown](DChartSeriesLinear.md#_isshown)
- [\_line](DChartSeriesLinear.md#_line)
- [\_options](DChartSeriesLinear.md#_options)
- [\_parameters](DChartSeriesLinear.md#_parameters)
- [\_range](DChartSeriesLinear.md#_range)
- [\_regionPointId](DChartSeriesLinear.md#_regionpointid)
- [\_state](DChartSeriesLinear.md#_state)
- [\_stroke](DChartSeriesLinear.md#_stroke)
- [WORK](DChartSeriesLinear.md#work)

### Accessors

- [container](DChartSeriesLinear.md#container)
- [coordinate](DChartSeriesLinear.md#coordinate)
- [domain](DChartSeriesLinear.md#domain)
- [index](DChartSeriesLinear.md#index)
- [parameters](DChartSeriesLinear.md#parameters)
- [range](DChartSeriesLinear.md#range)
- [shape](DChartSeriesLinear.md#shape)
- [state](DChartSeriesLinear.md#state)

### Methods

- [addListener](DChartSeriesLinear.md#addlistener)
- [bind](DChartSeriesLinear.md#bind)
- [calcHitPoint](DChartSeriesLinear.md#calchitpoint)
- [calcHitPointHitTester](DChartSeriesLinear.md#calchitpointhittester)
- [destroy](DChartSeriesLinear.md#destroy)
- [doUpdate](DChartSeriesLinear.md#doupdate)
- [doUpdateLine](DChartSeriesLinear.md#doupdateline)
- [emit](DChartSeriesLinear.md#emit)
- [eventNames](DChartSeriesLinear.md#eventnames)
- [hide](DChartSeriesLinear.md#hide)
- [hitTest](DChartSeriesLinear.md#hittest)
- [isHidden](DChartSeriesLinear.md#ishidden)
- [isShown](DChartSeriesLinear.md#isshown)
- [listenerCount](DChartSeriesLinear.md#listenercount)
- [listeners](DChartSeriesLinear.md#listeners)
- [off](DChartSeriesLinear.md#off)
- [on](DChartSeriesLinear.md#on)
- [onHide](DChartSeriesLinear.md#onhide)
- [onRender](DChartSeriesLinear.md#onrender)
- [onShow](DChartSeriesLinear.md#onshow)
- [onStateChange](DChartSeriesLinear.md#onstatechange)
- [once](DChartSeriesLinear.md#once)
- [removeAllListeners](DChartSeriesLinear.md#removealllisteners)
- [removeListener](DChartSeriesLinear.md#removelistener)
- [show](DChartSeriesLinear.md#show)
- [toDirty](DChartSeriesLinear.md#todirty)
- [toThreshold](DChartSeriesLinear.md#tothreshold)
- [unbind](DChartSeriesLinear.md#unbind)
- [update](DChartSeriesLinear.md#update)
- [updateRegion](DChartSeriesLinear.md#updateregion)

## Constructors

### constructor

• **new DChartSeriesLinear**\<`CHART`\>(`options?`): [`DChartSeriesLinear`](DChartSeriesLinear.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSeriesLinearOptions`](../interfaces/DChartSeriesLinearOptions.md) |

#### Returns

[`DChartSeriesLinear`](DChartSeriesLinear.md)\<`CHART`\>

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[constructor](DChartSeriesBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L44)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_container](DChartSeriesBase.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L39)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)\<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_coordinate](DChartSeriesBase.md#_coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L37)

___

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_domain](DChartSeriesBase.md#_domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L42)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_index](DChartSeriesBase.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L40)

___

### \_isShown

• `Protected` **\_isShown**: `boolean`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_isShown](DChartSeriesBase.md#_isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L47)

___

### \_line

• `Protected` **\_line**: ``null`` \| [`EShapeLine`](EShapeLine.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L39)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSeriesLinearOptions`](../interfaces/DChartSeriesLinearOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L40)

___

### \_parameters

• `Protected` **\_parameters**: [`DChartSeriesExpressionParametersImpl`](DChartSeriesExpressionParametersImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L41)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_range](DChartSeriesBase.md#_range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L43)

___

### \_regionPointId

• `Protected` **\_regionPointId**: `number`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_regionPointId](DChartSeriesBase.md#_regionpointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L44)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_state](DChartSeriesBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L46)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`DChartSeriesStrokeComputed`](../interfaces/DChartSeriesStrokeComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L42)

___

### WORK

▪ `Static` `Protected` **WORK**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L38)

## Accessors

### container

• `get` **container**(): ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Returns

``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Inherited from

DChartSeriesBase.container

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L108)

___

### coordinate

• `get` **coordinate**(): [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)\<`CHART`\>

#### Returns

[`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)\<`CHART`\>

#### Inherited from

DChartSeriesBase.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L116)

___

### domain

• `get` **domain**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesBase.domain

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L98)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

DChartSeriesBase.index

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L112)

___

### parameters

• `get` **parameters**(): [`DChartSeriesLinearParameters`](../interfaces/DChartSeriesLinearParameters.md)

#### Returns

[`DChartSeriesLinearParameters`](../interfaces/DChartSeriesLinearParameters.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L79)

___

### range

• `get` **range**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesBase.range

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L103)

___

### shape

• `get` **shape**(): ``null`` \| [`EShapeLine`](EShapeLine.md)

#### Returns

``null`` \| [`EShapeLine`](EShapeLine.md)

#### Overrides

DChartSeriesBase.shape

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L75)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DChartSeriesBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L120)

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

[DChartSeriesBase](DChartSeriesBase.md).[addListener](DChartSeriesBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### bind

▸ **bind**(`container`, `index`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `index` | `number` |

#### Returns

`this`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[bind](DChartSeriesBase.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L51)

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

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L255)

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

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L278)

___

### destroy

▸ **destroy**(): `this`

#### Returns

`this`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[destroy](DChartSeriesBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L233)

___

### doUpdate

▸ **doUpdate**(`render`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `render` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L98)

___

### doUpdateLine

▸ **doUpdateLine**(`line`, `container`, `xcoordinate`, `ycoordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLine`](EShapeLine.md) |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L116)

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

[DChartSeriesBase](DChartSeriesBase.md).[emit](DChartSeriesBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[eventNames](DChartSeriesBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[hide](DChartSeriesBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L143)

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

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L244)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[isHidden](DChartSeriesBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L158)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[isShown](DChartSeriesBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L139)

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

[DChartSeriesBase](DChartSeriesBase.md).[listeners](DChartSeriesBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

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

[DChartSeriesBase](DChartSeriesBase.md).[off](DChartSeriesBase.md#off)

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

[DChartSeriesBase](DChartSeriesBase.md).[on](DChartSeriesBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onHide

▸ **onHide**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[onHide](DChartSeriesBase.md#onhide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L151)

___

### onRender

▸ **onRender**(): `this`

#### Returns

`this`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[onRender](DChartSeriesBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L93)

___

### onShow

▸ **onShow**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[onShow](DChartSeriesBase.md#onshow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L132)

___

### onStateChange

▸ **onStateChange**(`newState`, `oldState`): `void`

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

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L178)

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

[DChartSeriesBase](DChartSeriesBase.md).[once](DChartSeriesBase.md#once)

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

[DChartSeriesBase](DChartSeriesBase.md).[removeAllListeners](DChartSeriesBase.md#removealllisteners)

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

[DChartSeriesBase](DChartSeriesBase.md).[removeListener](DChartSeriesBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[show](DChartSeriesBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L124)

___

### toDirty

▸ **toDirty**(): `this`

#### Returns

`this`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[toDirty](DChartSeriesBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L83)

___

### toThreshold

▸ **toThreshold**(`this`, `strokeWidth`, `strokeScale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `strokeWidth` | `number` |
| `strokeScale` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L274)

___

### unbind

▸ **unbind**(): `this`

#### Returns

`this`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[unbind](DChartSeriesBase.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L66)

___

### update

▸ **update**(): `this`

#### Returns

`this`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[update](DChartSeriesBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L88)

___

### updateRegion

▸ **updateRegion**(): `void`

#### Returns

`void`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[updateRegion](DChartSeriesBase.md#updateregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-linear.ts#L229)
