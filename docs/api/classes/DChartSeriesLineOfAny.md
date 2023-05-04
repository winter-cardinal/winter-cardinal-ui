[Winter Cardinal UI - v0.310.1](../index.md) / DChartSeriesLineOfAny

# Class: DChartSeriesLineOfAny<CHART\>

A series represents a line of anything.
Data points must be sorted in ascending order on the X axis.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSeriesBase`](DChartSeriesBase.md)<`CHART`\>

  ↳ **`DChartSeriesLineOfAny`**

  ↳↳ [`DChartSeriesBar`](DChartSeriesBar.md)

  ↳↳ [`DChartSeriesLineOfCircles`](DChartSeriesLineOfCircles.md)

  ↳↳ [`DChartSeriesLineOfRectangleRoundeds`](DChartSeriesLineOfRectangleRoundeds.md)

  ↳↳ [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)

  ↳↳ [`DChartSeriesLineOfTriangles`](DChartSeriesLineOfTriangles.md)

## Table of contents

### Constructors

- [constructor](DChartSeriesLineOfAny.md#constructor)

### Properties

- [\_container](DChartSeriesLineOfAny.md#_container)
- [\_coordinate](DChartSeriesLineOfAny.md#_coordinate)
- [\_domain](DChartSeriesLineOfAny.md#_domain)
- [\_fill](DChartSeriesLineOfAny.md#_fill)
- [\_index](DChartSeriesLineOfAny.md#_index)
- [\_isShown](DChartSeriesLineOfAny.md#_isshown)
- [\_line](DChartSeriesLineOfAny.md#_line)
- [\_offset](DChartSeriesLineOfAny.md#_offset)
- [\_options](DChartSeriesLineOfAny.md#_options)
- [\_pointId](DChartSeriesLineOfAny.md#_pointid)
- [\_pointIdUpdated](DChartSeriesLineOfAny.md#_pointidupdated)
- [\_points](DChartSeriesLineOfAny.md#_points)
- [\_range](DChartSeriesLineOfAny.md#_range)
- [\_regionPointId](DChartSeriesLineOfAny.md#_regionpointid)
- [\_size](DChartSeriesLineOfAny.md#_size)
- [\_state](DChartSeriesLineOfAny.md#_state)
- [\_stroke](DChartSeriesLineOfAny.md#_stroke)
- [WORK](DChartSeriesLineOfAny.md#work)
- [WORK\_REGION](DChartSeriesLineOfAny.md#work_region)

### Accessors

- [container](DChartSeriesLineOfAny.md#container)
- [coordinate](DChartSeriesLineOfAny.md#coordinate)
- [domain](DChartSeriesLineOfAny.md#domain)
- [index](DChartSeriesLineOfAny.md#index)
- [points](DChartSeriesLineOfAny.md#points)
- [range](DChartSeriesLineOfAny.md#range)
- [shape](DChartSeriesLineOfAny.md#shape)
- [state](DChartSeriesLineOfAny.md#state)

### Methods

- [addListener](DChartSeriesLineOfAny.md#addlistener)
- [adjustLineRegion](DChartSeriesLineOfAny.md#adjustlineregion)
- [applyLine](DChartSeriesLineOfAny.md#applyline)
- [bind](DChartSeriesLineOfAny.md#bind)
- [calcHitPoint](DChartSeriesLineOfAny.md#calchitpoint)
- [calcHitPointHitTester](DChartSeriesLineOfAny.md#calchitpointhittester)
- [calcHitPointTestRange](DChartSeriesLineOfAny.md#calchitpointtestrange)
- [calcRegion](DChartSeriesLineOfAny.md#calcregion)
- [destroy](DChartSeriesLineOfAny.md#destroy)
- [doUpdate](DChartSeriesLineOfAny.md#doupdate)
- [doUpdateLine](DChartSeriesLineOfAny.md#doupdateline)
- [emit](DChartSeriesLineOfAny.md#emit)
- [eventNames](DChartSeriesLineOfAny.md#eventnames)
- [getOffsetDefault](DChartSeriesLineOfAny.md#getoffsetdefault)
- [getSizeDefault](DChartSeriesLineOfAny.md#getsizedefault)
- [hide](DChartSeriesLineOfAny.md#hide)
- [hitTest](DChartSeriesLineOfAny.md#hittest)
- [initLine](DChartSeriesLineOfAny.md#initline)
- [isHidden](DChartSeriesLineOfAny.md#ishidden)
- [isShown](DChartSeriesLineOfAny.md#isshown)
- [listenerCount](DChartSeriesLineOfAny.md#listenercount)
- [listeners](DChartSeriesLineOfAny.md#listeners)
- [newLineOfAny](DChartSeriesLineOfAny.md#newlineofany)
- [off](DChartSeriesLineOfAny.md#off)
- [on](DChartSeriesLineOfAny.md#on)
- [onHide](DChartSeriesLineOfAny.md#onhide)
- [onRender](DChartSeriesLineOfAny.md#onrender)
- [onShow](DChartSeriesLineOfAny.md#onshow)
- [onStateChange](DChartSeriesLineOfAny.md#onstatechange)
- [once](DChartSeriesLineOfAny.md#once)
- [removeAllListeners](DChartSeriesLineOfAny.md#removealllisteners)
- [removeListener](DChartSeriesLineOfAny.md#removelistener)
- [show](DChartSeriesLineOfAny.md#show)
- [toDirty](DChartSeriesLineOfAny.md#todirty)
- [unbind](DChartSeriesLineOfAny.md#unbind)
- [update](DChartSeriesLineOfAny.md#update)
- [updateRegion](DChartSeriesLineOfAny.md#updateregion)

## Constructors

### constructor

• **new DChartSeriesLineOfAny**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md) |

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[constructor](DChartSeriesBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L71)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_container](DChartSeriesBase.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L39)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_coordinate](DChartSeriesBase.md#_coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L37)

___

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_domain](DChartSeriesBase.md#_domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L42)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`DChartSeriesFillComputed`](../interfaces/DChartSeriesFillComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L67)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_index](DChartSeriesBase.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L40)

___

### \_isShown

• `Protected` **\_isShown**: `boolean`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_isShown](DChartSeriesBase.md#_isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L47)

___

### \_line

• `Protected` **\_line**: ``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L60)

___

### \_offset

• `Protected` `Optional` **\_offset**: [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L69)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L61)

___

### \_pointId

• `Protected` **\_pointId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L63)

___

### \_pointIdUpdated

• `Protected` **\_pointIdUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L64)

___

### \_points

• `Protected` **\_points**: (``null`` \| `number`)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L62)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_range](DChartSeriesBase.md#_range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L43)

___

### \_regionPointId

• `Protected` **\_regionPointId**: `number`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_regionPointId](DChartSeriesBase.md#_regionpointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L44)

___

### \_size

• `Protected` `Optional` **\_size**: [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L68)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[_state](DChartSeriesBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L46)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`DChartSeriesStrokeComputed`](../interfaces/DChartSeriesStrokeComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L66)

___

### WORK

▪ `Static` `Protected` **WORK**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L57)

___

### WORK\_REGION

▪ `Static` `Protected` `Optional` **WORK\_REGION**: [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L58)

## Accessors

### container

• `get` **container**(): ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Returns

``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Inherited from

DChartSeriesBase.container

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L108)

___

### coordinate

• `get` **coordinate**(): [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Returns

[`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Inherited from

DChartSeriesBase.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L116)

___

### domain

• `get` **domain**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesBase.domain

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L98)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

DChartSeriesBase.index

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L112)

___

### points

• `get` **points**(): (``null`` \| `number`)[]

#### Returns

(``null`` \| `number`)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L147)

• `set` **points**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | (``null`` \| `number`)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L151)

___

### range

• `get` **range**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesBase.range

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L103)

___

### shape

• `get` **shape**(): ``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Returns

``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Overrides

DChartSeriesBase.shape

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L143)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DChartSeriesBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L120)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[addListener](DChartSeriesBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### adjustLineRegion

▸ `Protected` **adjustLineRegion**(`xmin`, `xmax`, `ymin`, `ymax`, `result`): [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `xmin` | `number` |
| `xmax` | `number` |
| `ymin` | `number` |
| `ymax` | `number` |
| `result` | [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md) |

#### Returns

[`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L277)

___

### applyLine

▸ `Protected` **applyLine**(`line`, `xcoordinate`, `ycoordinate`, `sx`, `sy`, `cx`, `cy`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `sx` | `number` |
| `sy` | `number` |
| `cx` | `number` |
| `cy` | `number` |
| `values` | `number`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L291)

___

### bind

▸ **bind**(`container`, `index`): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `index` | `number` |

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[bind](DChartSeriesBase.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L88)

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

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L362)

___

### calcHitPointHitTester

▸ **calcHitPointHitTester**(`this`, `x`, `y`, `ax`, `ay`, `ox`, `oy`, `px`, `py`, `sw`, `ss`, `sa`, `index`, `threshold`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `px` | `number` |
| `py` | `number` |
| `sw` | `number` |
| `ss` | `number` |
| `sa` | `number` |
| `index` | `number` |
| `threshold` | `number` |
| `result` | [`DChartSeriesHitResult`](DChartSeriesHitResult.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:406](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L406)

___

### calcHitPointTestRange

▸ **calcHitPointTestRange**(`this`, `x`, `y`, `ax`, `ay`, `ox`, `oy`, `threshold`, `values`, `result`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `threshold` | `number` |
| `values` | `number`[] |
| `result` | [`number`, `number`] |

#### Returns

[`number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L381)

___

### calcRegion

▸ `Protected` **calcRegion**(`points`, `domain`, `range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | (``null`` \| `number`)[] |
| `domain` | [`DChartRegion`](../interfaces/DChartRegion.md) |
| `range` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L319)

___

### destroy

▸ **destroy**(): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[destroy](DChartSeriesBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L336)

___

### doUpdate

▸ `Protected` **doUpdate**(`render`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `render` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L171)

___

### doUpdateLine

▸ `Protected` **doUpdateLine**(`line`, `xcoordinate`, `ycoordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L198)

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

### getOffsetDefault

▸ `Protected` **getOffsetDefault**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L84)

___

### getSizeDefault

▸ `Protected` **getSizeDefault**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L80)

___

### hide

▸ **hide**(): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[hide](DChartSeriesBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L143)

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

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L351)

___

### initLine

▸ `Protected` **initLine**(`line`, `options`, `container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `options` | `undefined` \| [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md) |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L102)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[isHidden](DChartSeriesBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L158)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[isShown](DChartSeriesBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L139)

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

### newLineOfAny

▸ `Protected` `Abstract` **newLineOfAny**(): [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Returns

[`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L132)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[off](DChartSeriesBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[on](DChartSeriesBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onHide

▸ `Protected` **onHide**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[onHide](DChartSeriesBase.md#onhide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L151)

___

### onRender

▸ **onRender**(): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[onRender](DChartSeriesBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L166)

___

### onShow

▸ `Protected` **onShow**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[onShow](DChartSeriesBase.md#onshow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L132)

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

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L178)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[once](DChartSeriesBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[removeAllListeners](DChartSeriesBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[removeListener](DChartSeriesBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### show

▸ **show**(): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Inherited from

[DChartSeriesBase](DChartSeriesBase.md).[show](DChartSeriesBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L124)

___

### toDirty

▸ **toDirty**(): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[toDirty](DChartSeriesBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L156)

___

### unbind

▸ **unbind**(): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[unbind](DChartSeriesBase.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L134)

___

### update

▸ **update**(): [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[update](DChartSeriesBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L161)

___

### updateRegion

▸ `Protected` **updateRegion**(): `void`

#### Returns

`void`

#### Overrides

[DChartSeriesBase](DChartSeriesBase.md).[updateRegion](DChartSeriesBase.md#updateregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L306)
