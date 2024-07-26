[Winter Cardinal UI - v0.442.0](../index.md) / DChartSeriesContainer

# Interface: DChartSeriesContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartPlotAreaTwofoldSeriesContainer`](../classes/DChartPlotAreaTwofoldSeriesContainer.md)
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

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L44)

___

### plotArea

• `Readonly` **plotArea**: [`DChartPlotArea`](DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](DChartPlotAreaLike.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L47)

___

### range

• **range**: [`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L45)

___

### selection

• `Readonly` **selection**: ``null`` \| [`DChartSelection`](DChartSelection.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L48)

## Methods

### add

▸ **add**(`series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | [`DChartSeries`](DChartSeries.md)\<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L76)

___

### calcHitPoint

▸ **calcHitPoint**(`x`, `y`, `result`): ``null`` \| [`DChartSeries`](DChartSeries.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `result` | [`DChartSeriesHitResult`](../classes/DChartSeriesHitResult.md) |

#### Returns

``null`` \| [`DChartSeries`](DChartSeries.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L87)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L78)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L80)

___

### get

▸ **get**(`index`): ``null`` \| [`DChartSeries`](DChartSeries.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DChartSeries`](DChartSeries.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L77)

___

### getDomain

▸ **getDomain**(`coordinate`, `result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](DChartCoordinate.md)\<`CHART`\> |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L83)

___

### getRange

▸ **getRange**(`coordinate`, `result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](DChartCoordinate.md)\<`CHART`\> |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L84)

___

### hitTest

▸ **hitTest**(`x`, `y`): ``null`` \| [`DChartSeries`](DChartSeries.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`DChartSeries`](DChartSeries.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L86)

___

### indexOf

▸ **indexOf**(`series`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | [`DChartSeries`](DChartSeries.md)\<`CHART`\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L81)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L50)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L64)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L70)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L58)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L54)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L79)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container.ts#L75)
