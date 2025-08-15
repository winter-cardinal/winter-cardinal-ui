[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaTwofoldSeriesContainer

# Class: DChartPlotAreaTwofoldSeriesContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartPlotAreaTwofoldSeriesContainer.md#constructor)

### Properties

- [\_domain](DChartPlotAreaTwofoldSeriesContainer.md#_domain)
- [\_plotArea](DChartPlotAreaTwofoldSeriesContainer.md#_plotarea)
- [\_primary](DChartPlotAreaTwofoldSeriesContainer.md#_primary)
- [\_range](DChartPlotAreaTwofoldSeriesContainer.md#_range)
- [\_secondary](DChartPlotAreaTwofoldSeriesContainer.md#_secondary)
- [WORK\_CALCHITPOINT](DChartPlotAreaTwofoldSeriesContainer.md#work_calchitpoint)

### Accessors

- [domain](DChartPlotAreaTwofoldSeriesContainer.md#domain)
- [plotArea](DChartPlotAreaTwofoldSeriesContainer.md#plotarea)
- [range](DChartPlotAreaTwofoldSeriesContainer.md#range)
- [selection](DChartPlotAreaTwofoldSeriesContainer.md#selection)

### Methods

- [add](DChartPlotAreaTwofoldSeriesContainer.md#add)
- [calcHitPoint](DChartPlotAreaTwofoldSeriesContainer.md#calchitpoint)
- [clear](DChartPlotAreaTwofoldSeriesContainer.md#clear)
- [destroy](DChartPlotAreaTwofoldSeriesContainer.md#destroy)
- [get](DChartPlotAreaTwofoldSeriesContainer.md#get)
- [getDomain](DChartPlotAreaTwofoldSeriesContainer.md#getdomain)
- [getRange](DChartPlotAreaTwofoldSeriesContainer.md#getrange)
- [hitTest](DChartPlotAreaTwofoldSeriesContainer.md#hittest)
- [indexOf](DChartPlotAreaTwofoldSeriesContainer.md#indexof)
- [newFill](DChartPlotAreaTwofoldSeriesContainer.md#newfill)
- [newOffset](DChartPlotAreaTwofoldSeriesContainer.md#newoffset)
- [newPadding](DChartPlotAreaTwofoldSeriesContainer.md#newpadding)
- [newSize](DChartPlotAreaTwofoldSeriesContainer.md#newsize)
- [newStroke](DChartPlotAreaTwofoldSeriesContainer.md#newstroke)
- [onRender](DChartPlotAreaTwofoldSeriesContainer.md#onrender)
- [size](DChartPlotAreaTwofoldSeriesContainer.md#size)
- [update](DChartPlotAreaTwofoldSeriesContainer.md#update)

## Constructors

### constructor

• **new DChartPlotAreaTwofoldSeriesContainer**\<`CHART`\>(`plotArea`, `primary`, `secondary`): [`DChartPlotAreaTwofoldSeriesContainer`](DChartPlotAreaTwofoldSeriesContainer.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> |
| `primary` | [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\> |
| `secondary` | [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\> |

#### Returns

[`DChartPlotAreaTwofoldSeriesContainer`](DChartPlotAreaTwofoldSeriesContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L44)

## Properties

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L41)

___

### \_plotArea

• `Protected` **\_plotArea**: [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L37)

___

### \_primary

• `Protected` **\_primary**: [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L38)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L42)

___

### \_secondary

• `Protected` **\_secondary**: [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L39)

___

### WORK\_CALCHITPOINT

▪ `Static` `Protected` **WORK\_CALCHITPOINT**: `undefined` \| [`DChartSeriesHitResult`](DChartSeriesHitResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L35)

## Accessors

### domain

• `get` **domain**(): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[domain](../interfaces/DChartSeriesContainer.md#domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L193)

___

### plotArea

• `get` **plotArea**(): [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Returns

[`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[plotArea](../interfaces/DChartSeriesContainer.md#plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L96)

___

### range

• `get` **range**(): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[range](../interfaces/DChartSeriesContainer.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L206)

___

### selection

• `get` **selection**(): ``null`` \| [`DChartSelection`](../interfaces/DChartSelection.md)\<`CHART`\>

#### Returns

``null`` \| [`DChartSelection`](../interfaces/DChartSelection.md)\<`CHART`\>

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[selection](../interfaces/DChartSeriesContainer.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L100)

## Methods

### add

▸ **add**(`series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[add](../interfaces/DChartSeriesContainer.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L122)

___

### calcHitPoint

▸ **calcHitPoint**(`x`, `y`, `result`): ``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `result` | [`DChartSeriesHitResult`](DChartSeriesHitResult.md) |

#### Returns

``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\>

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[calcHitPoint](../interfaces/DChartSeriesContainer.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L227)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[clear](../interfaces/DChartSeriesContainer.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L153)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[destroy](../interfaces/DChartSeriesContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L163)

___

### get

▸ **get**(`index`): ``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\>

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[get](../interfaces/DChartSeriesContainer.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L126)

___

### getDomain

▸ **getDomain**(`coordinate`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[getDomain](../interfaces/DChartSeriesContainer.md#getdomain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L171)

___

### getRange

▸ **getRange**(`coordinate`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[getRange](../interfaces/DChartSeriesContainer.md#getrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L181)

___

### hitTest

▸ **hitTest**(`x`, `y`): ``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\>

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[hitTest](../interfaces/DChartSeriesContainer.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L219)

___

### indexOf

▸ **indexOf**(`series`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\> |

#### Returns

`number`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[indexOf](../interfaces/DChartSeriesContainer.md#indexof)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L140)

___

### newFill

▸ **newFill**(`index`, `options`): [`DChartSeriesFillComputed`](../interfaces/DChartSeriesFillComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesFillComputedOptions`](../interfaces/DChartSeriesFillComputedOptions.md) |

#### Returns

[`DChartSeriesFillComputed`](../interfaces/DChartSeriesFillComputed.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[newFill](../interfaces/DChartSeriesContainer.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L57)

___

### newOffset

▸ **newOffset**(`index`, `options`, `x`, `y`): [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesPointComputedOptions`](../interfaces/DChartSeriesPointComputedOptions.md) |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[newOffset](../interfaces/DChartSeriesContainer.md#newoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L80)

___

### newPadding

▸ **newPadding**(`index`, `options`): [`DChartSeriesPaddingComputed`](../interfaces/DChartSeriesPaddingComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesPaddingComputedOptions`](../interfaces/DChartSeriesPaddingComputedOptions.md) |

#### Returns

[`DChartSeriesPaddingComputed`](../interfaces/DChartSeriesPaddingComputed.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[newPadding](../interfaces/DChartSeriesContainer.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L89)

___

### newSize

▸ **newSize**(`index`, `options`, `x`, `y`): [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesPointComputedOptions`](../interfaces/DChartSeriesPointComputedOptions.md) |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[newSize](../interfaces/DChartSeriesContainer.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L71)

___

### newStroke

▸ **newStroke**(`index`, `options`): [`DChartSeriesStrokeComputed`](../interfaces/DChartSeriesStrokeComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesStrokeComputedOptions`](../interfaces/DChartSeriesStrokeComputedOptions.md) |

#### Returns

[`DChartSeriesStrokeComputed`](../interfaces/DChartSeriesStrokeComputed.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[newStroke](../interfaces/DChartSeriesContainer.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L64)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L113)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[size](../interfaces/DChartSeriesContainer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L159)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[update](../interfaces/DChartSeriesContainer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-series-container.ts#L104)
