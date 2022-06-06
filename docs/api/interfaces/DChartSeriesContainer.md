[Winter Cardinal UI - v0.179.0](../index.md) / DChartSeriesContainer

# Interface: DChartSeriesContainer<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartSeriesContainerImpl`](../classes/DChartSeriesContainerImpl.md)

## Table of contents

### Properties

- [domain](DChartSeriesContainer.md#domain)
- [plotArea](DChartSeriesContainer.md#plotarea)
- [range](DChartSeriesContainer.md#range)
- [selection](DChartSeriesContainer.md#selection)

### Methods

- [add](DChartSeriesContainer.md#add)
- [calcHitPoint](DChartSeriesContainer.md#calchitpoint)
- [clear](DChartSeriesContainer.md#clear)
- [destroy](DChartSeriesContainer.md#destroy)
- [get](DChartSeriesContainer.md#get)
- [getDomain](DChartSeriesContainer.md#getdomain)
- [getRange](DChartSeriesContainer.md#getrange)
- [hitTest](DChartSeriesContainer.md#hittest)
- [indexOf](DChartSeriesContainer.md#indexof)
- [newFill](DChartSeriesContainer.md#newfill)
- [newOffset](DChartSeriesContainer.md#newoffset)
- [newPadding](DChartSeriesContainer.md#newpadding)
- [newSize](DChartSeriesContainer.md#newsize)
- [newStroke](DChartSeriesContainer.md#newstroke)
- [size](DChartSeriesContainer.md#size)
- [update](DChartSeriesContainer.md#update)

## Properties

### domain

• **domain**: [`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L45)

___

### plotArea

• `Readonly` **plotArea**: [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L48)

___

### range

• **range**: [`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L46)

___

### selection

• `Readonly` **selection**: ``null`` \| [`DChartSelection`](DChartSelection.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L49)

## Methods

### add

▸ **add**(`series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | [`DChartSeries`](DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L77)

___

### calcHitPoint

▸ **calcHitPoint**(`x`, `y`, `result`): ``null`` \| [`DChartSeries`](DChartSeries.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `result` | [`DChartSeriesHitResult`](../classes/DChartSeriesHitResult.md) |

#### Returns

``null`` \| [`DChartSeries`](DChartSeries.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L88)

___

### clear

▸ **clear**(): [`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\>

#### Returns

[`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L79)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L81)

___

### get

▸ **get**(`index`): ``null`` \| [`DChartSeries`](DChartSeries.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DChartSeries`](DChartSeries.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L78)

___

### getDomain

▸ **getDomain**(`coordinate`, `result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\> |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L84)

___

### getRange

▸ **getRange**(`coordinate`, `result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\> |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L85)

___

### hitTest

▸ **hitTest**(`x`, `y`): ``null`` \| [`DChartSeries`](DChartSeries.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`DChartSeries`](DChartSeries.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L87)

___

### indexOf

▸ **indexOf**(`series`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | [`DChartSeries`](DChartSeries.md)<`CHART`\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L82)

___

### newFill

▸ **newFill**(`index`, `options`): [`DChartSeriesFillComputed`](DChartSeriesFillComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesFillComputedOptions`](DChartSeriesFillComputedOptions.md) |

#### Returns

[`DChartSeriesFillComputed`](DChartSeriesFillComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L51)

___

### newOffset

▸ **newOffset**(`index`, `options`, `x`, `y`): [`DChartSeriesPointComputed`](DChartSeriesPointComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesPointComputedOptions`](DChartSeriesPointComputedOptions.md) |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`DChartSeriesPointComputed`](DChartSeriesPointComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L65)

___

### newPadding

▸ **newPadding**(`index`, `options`): [`DChartSeriesPaddingComputed`](DChartSeriesPaddingComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesPaddingComputedOptions`](DChartSeriesPaddingComputedOptions.md) |

#### Returns

[`DChartSeriesPaddingComputed`](DChartSeriesPaddingComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L71)

___

### newSize

▸ **newSize**(`index`, `options`, `x`, `y`): [`DChartSeriesPointComputed`](DChartSeriesPointComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesPointComputedOptions`](DChartSeriesPointComputedOptions.md) |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`DChartSeriesPointComputed`](DChartSeriesPointComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L59)

___

### newStroke

▸ **newStroke**(`index`, `options`): [`DChartSeriesStrokeComputed`](DChartSeriesStrokeComputed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | `undefined` \| [`DChartSeriesStrokeComputedOptions`](DChartSeriesStrokeComputedOptions.md) |

#### Returns

[`DChartSeriesStrokeComputed`](DChartSeriesStrokeComputed.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L55)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L80)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L76)
