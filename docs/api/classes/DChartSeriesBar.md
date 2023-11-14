[Winter Cardinal UI - v0.374.0](../index.md) / DChartSeriesBar

# Class: DChartSeriesBar\<CHART\>

A series represents bars.
Data points must be sorted in ascending order on the X axis.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)\<`CHART`\>

  ↳ **`DChartSeriesBar`**

## Table of contents

### Constructors

- [constructor](DChartSeriesBar.md#constructor)

### Properties

- [\_barCount](DChartSeriesBar.md#_barcount)
- [\_barIndex](DChartSeriesBar.md#_barindex)
- [\_container](DChartSeriesBar.md#_container)
- [\_coordinate](DChartSeriesBar.md#_coordinate)
- [\_domain](DChartSeriesBar.md#_domain)
- [\_fill](DChartSeriesBar.md#_fill)
- [\_index](DChartSeriesBar.md#_index)
- [\_isShown](DChartSeriesBar.md#_isshown)
- [\_isSizeAutomatic](DChartSeriesBar.md#_issizeautomatic)
- [\_line](DChartSeriesBar.md#_line)
- [\_offset](DChartSeriesBar.md#_offset)
- [\_options](DChartSeriesBar.md#_options)
- [\_padding](DChartSeriesBar.md#_padding)
- [\_pointId](DChartSeriesBar.md#_pointid)
- [\_pointIdUpdated](DChartSeriesBar.md#_pointidupdated)
- [\_points](DChartSeriesBar.md#_points)
- [\_range](DChartSeriesBar.md#_range)
- [\_regionPointId](DChartSeriesBar.md#_regionpointid)
- [\_size](DChartSeriesBar.md#_size)
- [\_state](DChartSeriesBar.md#_state)
- [\_stroke](DChartSeriesBar.md#_stroke)
- [\_xcoordinateId](DChartSeriesBar.md#_xcoordinateid)
- [\_xcoordinateTransformId](DChartSeriesBar.md#_xcoordinatetransformid)
- [WORK](DChartSeriesBar.md#work)
- [WORK\_REGION](DChartSeriesBar.md#work_region)

### Accessors

- [container](DChartSeriesBar.md#container)
- [coordinate](DChartSeriesBar.md#coordinate)
- [domain](DChartSeriesBar.md#domain)
- [index](DChartSeriesBar.md#index)
- [points](DChartSeriesBar.md#points)
- [range](DChartSeriesBar.md#range)
- [shape](DChartSeriesBar.md#shape)
- [state](DChartSeriesBar.md#state)

### Methods

- [addListener](DChartSeriesBar.md#addlistener)
- [adjustLineRegion](DChartSeriesBar.md#adjustlineregion)
- [applyLine](DChartSeriesBar.md#applyline)
- [bind](DChartSeriesBar.md#bind)
- [calcHitPoint](DChartSeriesBar.md#calchitpoint)
- [calcHitPointHitTester](DChartSeriesBar.md#calchitpointhittester)
- [calcHitPointTestRange](DChartSeriesBar.md#calchitpointtestrange)
- [calcRegion](DChartSeriesBar.md#calcregion)
- [calcSizeX](DChartSeriesBar.md#calcsizex)
- [destroy](DChartSeriesBar.md#destroy)
- [doUpdate](DChartSeriesBar.md#doupdate)
- [doUpdateLine](DChartSeriesBar.md#doupdateline)
- [emit](DChartSeriesBar.md#emit)
- [eventNames](DChartSeriesBar.md#eventnames)
- [getOffsetDefault](DChartSeriesBar.md#getoffsetdefault)
- [getSizeDefault](DChartSeriesBar.md#getsizedefault)
- [hide](DChartSeriesBar.md#hide)
- [hitTest](DChartSeriesBar.md#hittest)
- [initLine](DChartSeriesBar.md#initline)
- [isHidden](DChartSeriesBar.md#ishidden)
- [isShown](DChartSeriesBar.md#isshown)
- [listenerCount](DChartSeriesBar.md#listenercount)
- [listeners](DChartSeriesBar.md#listeners)
- [newLineOfAny](DChartSeriesBar.md#newlineofany)
- [off](DChartSeriesBar.md#off)
- [on](DChartSeriesBar.md#on)
- [onHide](DChartSeriesBar.md#onhide)
- [onRender](DChartSeriesBar.md#onrender)
- [onShow](DChartSeriesBar.md#onshow)
- [onStateChange](DChartSeriesBar.md#onstatechange)
- [once](DChartSeriesBar.md#once)
- [removeAllListeners](DChartSeriesBar.md#removealllisteners)
- [removeListener](DChartSeriesBar.md#removelistener)
- [show](DChartSeriesBar.md#show)
- [toDirty](DChartSeriesBar.md#todirty)
- [unbind](DChartSeriesBar.md#unbind)
- [update](DChartSeriesBar.md#update)
- [updateBarCountAndIndex](DChartSeriesBar.md#updatebarcountandindex)
- [updateRegion](DChartSeriesBar.md#updateregion)

## Constructors

### constructor

• **new DChartSeriesBar**\<`CHART`\>(`options?`): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSeriesBarOptions`](../interfaces/DChartSeriesBarOptions.md) |

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[constructor](DChartSeriesLineOfAny.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L41)

## Properties

### \_barCount

• `Protected` **\_barCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L34)

___

### \_barIndex

• `Protected` **\_barIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L35)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_container](DChartSeriesLineOfAny.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L39)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_coordinate](DChartSeriesLineOfAny.md#_coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L37)

___

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_domain](DChartSeriesLineOfAny.md#_domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L42)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`DChartSeriesFillComputed`](../interfaces/DChartSeriesFillComputed.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_fill](DChartSeriesLineOfAny.md#_fill)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L68)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_index](DChartSeriesLineOfAny.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L40)

___

### \_isShown

• `Protected` **\_isShown**: `boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_isShown](DChartSeriesLineOfAny.md#_isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L47)

___

### \_isSizeAutomatic

• `Protected` **\_isSizeAutomatic**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L39)

___

### \_line

• `Protected` **\_line**: ``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_line](DChartSeriesLineOfAny.md#_line)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L61)

___

### \_offset

• `Protected` `Optional` **\_offset**: [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_offset](DChartSeriesLineOfAny.md#_offset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L70)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_options](DChartSeriesLineOfAny.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L62)

___

### \_padding

• `Protected` `Optional` **\_padding**: [`DChartSeriesPaddingComputed`](../interfaces/DChartSeriesPaddingComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L38)

___

### \_pointId

• `Protected` **\_pointId**: `number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_pointId](DChartSeriesLineOfAny.md#_pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L64)

___

### \_pointIdUpdated

• `Protected` **\_pointIdUpdated**: `number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_pointIdUpdated](DChartSeriesLineOfAny.md#_pointidupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L65)

___

### \_points

• `Protected` **\_points**: (``null`` \| `number`)[]

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_points](DChartSeriesLineOfAny.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L63)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_range](DChartSeriesLineOfAny.md#_range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L43)

___

### \_regionPointId

• `Protected` **\_regionPointId**: `number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_regionPointId](DChartSeriesLineOfAny.md#_regionpointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L44)

___

### \_size

• `Protected` `Optional` **\_size**: [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_size](DChartSeriesLineOfAny.md#_size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L69)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_state](DChartSeriesLineOfAny.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L46)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`DChartSeriesStrokeComputed`](../interfaces/DChartSeriesStrokeComputed.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_stroke](DChartSeriesLineOfAny.md#_stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L67)

___

### \_xcoordinateId

• `Protected` **\_xcoordinateId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L36)

___

### \_xcoordinateTransformId

• `Protected` **\_xcoordinateTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L37)

___

### WORK

▪ `Static` `Protected` **WORK**: `Point`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[WORK](DChartSeriesLineOfAny.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L58)

___

### WORK\_REGION

▪ `Static` `Protected` `Optional` **WORK\_REGION**: [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[WORK_REGION](DChartSeriesLineOfAny.md#work_region)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L59)

## Accessors

### container

• `get` **container**(): ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Returns

``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Inherited from

DChartSeriesLineOfAny.container

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L108)

___

### coordinate

• `get` **coordinate**(): [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)\<`CHART`\>

#### Returns

[`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)\<`CHART`\>

#### Inherited from

DChartSeriesLineOfAny.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L116)

___

### domain

• `get` **domain**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesLineOfAny.domain

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L98)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

DChartSeriesLineOfAny.index

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L112)

___

### points

• `get` **points**(): (``null`` \| `number`)[]

#### Returns

(``null`` \| `number`)[]

#### Inherited from

DChartSeriesLineOfAny.points

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L148)

• `set` **points**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | (``null`` \| `number`)[] |

#### Returns

`void`

#### Inherited from

DChartSeriesLineOfAny.points

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L152)

___

### range

• `get` **range**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesLineOfAny.range

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L103)

___

### shape

• `get` **shape**(): ``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Returns

``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Inherited from

DChartSeriesLineOfAny.shape

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L144)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DChartSeriesLineOfAny.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L120)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[addListener](DChartSeriesLineOfAny.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### adjustLineRegion

▸ **adjustLineRegion**(`xmin`, `xmax`, `ymin`, `ymax`, `result`): [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

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

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[adjustLineRegion](DChartSeriesLineOfAny.md#adjustlineregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L77)

___

### applyLine

▸ **applyLine**(`line`, `xcoordinate`, `ycoordinate`, `sx`, `sy`, `cx`, `cy`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `sx` | `number` |
| `sy` | `number` |
| `cx` | `number` |
| `cy` | `number` |
| `values` | `number`[] |

#### Returns

`void`

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[applyLine](DChartSeriesLineOfAny.md#applyline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L111)

___

### bind

▸ **bind**(`container`, `index`): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `index` | `number` |

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[bind](DChartSeriesLineOfAny.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L50)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[calcHitPoint](DChartSeriesLineOfAny.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L364)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[calcHitPointHitTester](DChartSeriesLineOfAny.md#calchitpointhittester)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:408](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L408)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[calcHitPointTestRange](DChartSeriesLineOfAny.md#calchitpointtestrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L383)

___

### calcRegion

▸ **calcRegion**(`points`, `domain`, `range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | (``null`` \| `number`)[] |
| `domain` | [`DChartRegion`](../interfaces/DChartRegion.md) |
| `range` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

`void`

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[calcRegion](DChartSeriesLineOfAny.md#calcregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L223)

___

### calcSizeX

▸ **calcSizeX**(`def`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L206)

___

### destroy

▸ **destroy**(): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[destroy](DChartSeriesLineOfAny.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L338)

___

### doUpdate

▸ **doUpdate**(`render`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `render` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[doUpdate](DChartSeriesLineOfAny.md#doupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L172)

___

### doUpdateLine

▸ **doUpdateLine**(`line`, `xcoordinate`, `ycoordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[doUpdateLine](DChartSeriesLineOfAny.md#doupdateline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L199)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[emit](DChartSeriesLineOfAny.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[eventNames](DChartSeriesLineOfAny.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### getOffsetDefault

▸ **getOffsetDefault**(): `number`

#### Returns

`number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[getOffsetDefault](DChartSeriesLineOfAny.md#getoffsetdefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L85)

___

### getSizeDefault

▸ **getSizeDefault**(): `number`

#### Returns

`number`

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[getSizeDefault](DChartSeriesLineOfAny.md#getsizedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L73)

___

### hide

▸ **hide**(): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[hide](DChartSeriesLineOfAny.md#hide)

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

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[hitTest](DChartSeriesLineOfAny.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:353](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L353)

___

### initLine

▸ **initLine**(`line`, `options`, `container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `options` | `undefined` \| [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md) |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[initLine](DChartSeriesLineOfAny.md#initline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L59)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[isHidden](DChartSeriesLineOfAny.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L158)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[isShown](DChartSeriesLineOfAny.md#isshown)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[listenerCount](DChartSeriesLineOfAny.md#listenercount)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[listeners](DChartSeriesLineOfAny.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newLineOfAny

▸ **newLineOfAny**(): [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Returns

[`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[newLineOfAny](DChartSeriesLineOfAny.md#newlineofany)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L69)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[off](DChartSeriesLineOfAny.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[on](DChartSeriesLineOfAny.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onHide

▸ **onHide**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[onHide](DChartSeriesLineOfAny.md#onhide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L151)

___

### onRender

▸ **onRender**(): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[onRender](DChartSeriesLineOfAny.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L167)

___

### onShow

▸ **onShow**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[onShow](DChartSeriesLineOfAny.md#onshow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L132)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[onStateChange](DChartSeriesLineOfAny.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L178)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[once](DChartSeriesLineOfAny.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[removeAllListeners](DChartSeriesLineOfAny.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[removeListener](DChartSeriesLineOfAny.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### show

▸ **show**(): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[show](DChartSeriesLineOfAny.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L124)

___

### toDirty

▸ **toDirty**(): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[toDirty](DChartSeriesLineOfAny.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L157)

___

### unbind

▸ **unbind**(): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[unbind](DChartSeriesLineOfAny.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L135)

___

### update

▸ **update**(): [`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Returns

[`DChartSeriesBar`](DChartSeriesBar.md)\<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[update](DChartSeriesLineOfAny.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L162)

___

### updateBarCountAndIndex

▸ **updateBarCountAndIndex**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-bar.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-bar.ts#L87)

___

### updateRegion

▸ **updateRegion**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[updateRegion](DChartSeriesLineOfAny.md#updateregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L308)
