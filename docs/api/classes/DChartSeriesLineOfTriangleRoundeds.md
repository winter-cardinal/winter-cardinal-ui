[Winter Cardinal UI - v0.167.0](../index.md) / DChartSeriesLineOfTriangleRoundeds

# Class: DChartSeriesLineOfTriangleRoundeds<CHART\>

A series represents a line of rounded triangles.
Data points must be sorted in ascending order on the X axis.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSeriesLineOfTriangles`](DChartSeriesLineOfTriangles.md)<`CHART`\>

  ↳ **`DChartSeriesLineOfTriangleRoundeds`**

## Table of contents

### Constructors

- [constructor](DChartSeriesLineOfTriangleRoundeds.md#constructor)

### Properties

- [\_container](DChartSeriesLineOfTriangleRoundeds.md#_container)
- [\_coordinate](DChartSeriesLineOfTriangleRoundeds.md#_coordinate)
- [\_domain](DChartSeriesLineOfTriangleRoundeds.md#_domain)
- [\_fill](DChartSeriesLineOfTriangleRoundeds.md#_fill)
- [\_index](DChartSeriesLineOfTriangleRoundeds.md#_index)
- [\_line](DChartSeriesLineOfTriangleRoundeds.md#_line)
- [\_offset](DChartSeriesLineOfTriangleRoundeds.md#_offset)
- [\_options](DChartSeriesLineOfTriangleRoundeds.md#_options)
- [\_pointId](DChartSeriesLineOfTriangleRoundeds.md#_pointid)
- [\_pointIdUpdated](DChartSeriesLineOfTriangleRoundeds.md#_pointidupdated)
- [\_points](DChartSeriesLineOfTriangleRoundeds.md#_points)
- [\_range](DChartSeriesLineOfTriangleRoundeds.md#_range)
- [\_regionPointId](DChartSeriesLineOfTriangleRoundeds.md#_regionpointid)
- [\_size](DChartSeriesLineOfTriangleRoundeds.md#_size)
- [\_sizeId](DChartSeriesLineOfTriangleRoundeds.md#_sizeid)
- [\_state](DChartSeriesLineOfTriangleRoundeds.md#_state)
- [\_stroke](DChartSeriesLineOfTriangleRoundeds.md#_stroke)
- [WORK](DChartSeriesLineOfTriangleRoundeds.md#work)
- [WORK\_REGION](DChartSeriesLineOfTriangleRoundeds.md#work_region)

### Accessors

- [container](DChartSeriesLineOfTriangleRoundeds.md#container)
- [coordinate](DChartSeriesLineOfTriangleRoundeds.md#coordinate)
- [domain](DChartSeriesLineOfTriangleRoundeds.md#domain)
- [index](DChartSeriesLineOfTriangleRoundeds.md#index)
- [points](DChartSeriesLineOfTriangleRoundeds.md#points)
- [range](DChartSeriesLineOfTriangleRoundeds.md#range)
- [shape](DChartSeriesLineOfTriangleRoundeds.md#shape)
- [state](DChartSeriesLineOfTriangleRoundeds.md#state)

### Methods

- [addListener](DChartSeriesLineOfTriangleRoundeds.md#addlistener)
- [adjustLineRegion](DChartSeriesLineOfTriangleRoundeds.md#adjustlineregion)
- [applyLine](DChartSeriesLineOfTriangleRoundeds.md#applyline)
- [bind](DChartSeriesLineOfTriangleRoundeds.md#bind)
- [calcHitPoint](DChartSeriesLineOfTriangleRoundeds.md#calchitpoint)
- [calcHitPointHitTester](DChartSeriesLineOfTriangleRoundeds.md#calchitpointhittester)
- [calcHitPointTestRange](DChartSeriesLineOfTriangleRoundeds.md#calchitpointtestrange)
- [calcRegion](DChartSeriesLineOfTriangleRoundeds.md#calcregion)
- [destroy](DChartSeriesLineOfTriangleRoundeds.md#destroy)
- [emit](DChartSeriesLineOfTriangleRoundeds.md#emit)
- [eventNames](DChartSeriesLineOfTriangleRoundeds.md#eventnames)
- [getOffsetDefault](DChartSeriesLineOfTriangleRoundeds.md#getoffsetdefault)
- [getSizeDefault](DChartSeriesLineOfTriangleRoundeds.md#getsizedefault)
- [hitTest](DChartSeriesLineOfTriangleRoundeds.md#hittest)
- [initLine](DChartSeriesLineOfTriangleRoundeds.md#initline)
- [listenerCount](DChartSeriesLineOfTriangleRoundeds.md#listenercount)
- [listeners](DChartSeriesLineOfTriangleRoundeds.md#listeners)
- [newLineOfAny](DChartSeriesLineOfTriangleRoundeds.md#newlineofany)
- [off](DChartSeriesLineOfTriangleRoundeds.md#off)
- [on](DChartSeriesLineOfTriangleRoundeds.md#on)
- [onStateChange](DChartSeriesLineOfTriangleRoundeds.md#onstatechange)
- [once](DChartSeriesLineOfTriangleRoundeds.md#once)
- [removeAllListeners](DChartSeriesLineOfTriangleRoundeds.md#removealllisteners)
- [removeListener](DChartSeriesLineOfTriangleRoundeds.md#removelistener)
- [toDirty](DChartSeriesLineOfTriangleRoundeds.md#todirty)
- [unbind](DChartSeriesLineOfTriangleRoundeds.md#unbind)
- [update](DChartSeriesLineOfTriangleRoundeds.md#update)
- [updateLine](DChartSeriesLineOfTriangleRoundeds.md#updateline)
- [updateRegion](DChartSeriesLineOfTriangleRoundeds.md#updateregion)

## Constructors

### constructor

• **new DChartSeriesLineOfTriangleRoundeds**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md) |

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[constructor](DChartSeriesLineOfTriangles.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-triangles.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-triangles.ts#L21)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_container](DChartSeriesLineOfTriangles.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L39)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_coordinate](DChartSeriesLineOfTriangles.md#_coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L37)

___

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_domain](DChartSeriesLineOfTriangles.md#_domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L42)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`DChartSeriesFillComputed`](../interfaces/DChartSeriesFillComputed.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_fill](DChartSeriesLineOfTriangles.md#_fill)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L67)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_index](DChartSeriesLineOfTriangles.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L40)

___

### \_line

• `Protected` **\_line**: ``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_line](DChartSeriesLineOfTriangles.md#_line)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L60)

___

### \_offset

• `Protected` `Optional` **\_offset**: [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_offset](DChartSeriesLineOfTriangles.md#_offset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L69)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_options](DChartSeriesLineOfTriangles.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L61)

___

### \_pointId

• `Protected` **\_pointId**: `number`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_pointId](DChartSeriesLineOfTriangles.md#_pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L63)

___

### \_pointIdUpdated

• `Protected` **\_pointIdUpdated**: `number`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_pointIdUpdated](DChartSeriesLineOfTriangles.md#_pointidupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L64)

___

### \_points

• `Protected` **\_points**: (``null`` \| `number`)[]

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_points](DChartSeriesLineOfTriangles.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L62)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_range](DChartSeriesLineOfTriangles.md#_range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L43)

___

### \_regionPointId

• `Protected` **\_regionPointId**: `number`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_regionPointId](DChartSeriesLineOfTriangles.md#_regionpointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L44)

___

### \_size

• `Protected` `Optional` **\_size**: [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_size](DChartSeriesLineOfTriangles.md#_size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L68)

___

### \_sizeId

• `Protected` **\_sizeId**: `number`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_sizeId](DChartSeriesLineOfTriangles.md#_sizeid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-triangles.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-triangles.ts#L19)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_state](DChartSeriesLineOfTriangles.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L46)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`DChartSeriesStrokeComputed`](../interfaces/DChartSeriesStrokeComputed.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[_stroke](DChartSeriesLineOfTriangles.md#_stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L66)

___

### WORK

▪ `Static` `Protected` **WORK**: `Point`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[WORK](DChartSeriesLineOfTriangles.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L57)

___

### WORK\_REGION

▪ `Static` `Protected` `Optional` **WORK\_REGION**: [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[WORK_REGION](DChartSeriesLineOfTriangles.md#work_region)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L58)

## Accessors

### container

• `get` **container**(): ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Returns

``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Inherited from

DChartSeriesLineOfTriangles.container

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L103)

___

### coordinate

• `get` **coordinate**(): [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Returns

[`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Inherited from

DChartSeriesLineOfTriangles.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L111)

___

### domain

• `get` **domain**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesLineOfTriangles.domain

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L93)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

DChartSeriesLineOfTriangles.index

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L107)

___

### points

• `get` **points**(): (``null`` \| `number`)[]

#### Returns

(``null`` \| `number`)[]

#### Inherited from

DChartSeriesLineOfTriangles.points

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L144)

• `set` **points**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | (``null`` \| `number`)[] |

#### Returns

`void`

#### Inherited from

DChartSeriesLineOfTriangles.points

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L148)

___

### range

• `get` **range**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesLineOfTriangles.range

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L98)

___

### shape

• `get` **shape**(): ``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Returns

``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Inherited from

DChartSeriesLineOfTriangles.shape

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L140)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DChartSeriesLineOfTriangles.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L115)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[addListener](DChartSeriesLineOfTriangles.md#addlistener)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[adjustLineRegion](DChartSeriesLineOfTriangles.md#adjustlineregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L259)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[applyLine](DChartSeriesLineOfTriangles.md#applyline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-triangles.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-triangles.ts#L30)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[bind](DChartSeriesLineOfTriangles.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L88)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[calcHitPoint](DChartSeriesLineOfTriangles.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L343)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[calcHitPointHitTester](DChartSeriesLineOfTriangles.md#calchitpointhittester)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L387)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[calcHitPointTestRange](DChartSeriesLineOfTriangles.md#calchitpointtestrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L362)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[calcRegion](DChartSeriesLineOfTriangles.md#calcregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L301)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[destroy](DChartSeriesLineOfTriangles.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:318](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L318)

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

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[emit](DChartSeriesLineOfTriangles.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[eventNames](DChartSeriesLineOfTriangles.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### getOffsetDefault

▸ `Protected` **getOffsetDefault**(): `number`

#### Returns

`number`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[getOffsetDefault](DChartSeriesLineOfTriangles.md#getoffsetdefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L84)

___

### getSizeDefault

▸ `Protected` **getSizeDefault**(): `number`

#### Returns

`number`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[getSizeDefault](DChartSeriesLineOfTriangles.md#getsizedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L80)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[hitTest](DChartSeriesLineOfTriangles.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L332)

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

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[initLine](DChartSeriesLineOfTriangles.md#initline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L100)

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

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[listenerCount](DChartSeriesLineOfTriangles.md#listenercount)

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

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[listeners](DChartSeriesLineOfTriangles.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newLineOfAny

▸ `Protected` **newLineOfAny**(): [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Returns

[`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Overrides

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[newLineOfAny](DChartSeriesLineOfTriangles.md#newlineofany)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-triangle-roundeds.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-triangle-roundeds.ts#L18)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[off](DChartSeriesLineOfTriangles.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[on](DChartSeriesLineOfTriangles.md#on)

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

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[onStateChange](DChartSeriesLineOfTriangles.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L134)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[once](DChartSeriesLineOfTriangles.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[removeAllListeners](DChartSeriesLineOfTriangles.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSeriesLineOfTriangleRoundeds`](DChartSeriesLineOfTriangleRoundeds.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[removeListener](DChartSeriesLineOfTriangles.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[toDirty](DChartSeriesLineOfTriangles.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L153)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[unbind](DChartSeriesLineOfTriangles.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L132)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[update](DChartSeriesLineOfTriangles.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L157)

___

### updateLine

▸ `Protected` **updateLine**(`line`, `xcoordinate`, `ycoordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[updateLine](DChartSeriesLineOfTriangles.md#updateline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L179)

___

### updateRegion

▸ `Protected` **updateRegion**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfTriangles](DChartSeriesLineOfTriangles.md).[updateRegion](DChartSeriesLineOfTriangles.md#updateregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L288)
