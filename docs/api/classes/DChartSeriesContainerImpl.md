[Winter Cardinal UI - v0.442.0](../index.md) / DChartSeriesContainerImpl

# Class: DChartSeriesContainerImpl\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSeriesContainerImpl.md#constructor)

### Properties

- [\_domain](DChartSeriesContainerImpl.md#_domain)
- [\_fill](DChartSeriesContainerImpl.md#_fill)
- [\_list](DChartSeriesContainerImpl.md#_list)
- [\_offset](DChartSeriesContainerImpl.md#_offset)
- [\_padding](DChartSeriesContainerImpl.md#_padding)
- [\_plotArea](DChartSeriesContainerImpl.md#_plotarea)
- [\_range](DChartSeriesContainerImpl.md#_range)
- [\_selection](DChartSeriesContainerImpl.md#_selection)
- [\_size](DChartSeriesContainerImpl.md#_size)
- [\_stroke](DChartSeriesContainerImpl.md#_stroke)
- [WORK\_CALCHITPOINT](DChartSeriesContainerImpl.md#work_calchitpoint)

### Accessors

- [domain](DChartSeriesContainerImpl.md#domain)
- [plotArea](DChartSeriesContainerImpl.md#plotarea)
- [range](DChartSeriesContainerImpl.md#range)
- [selection](DChartSeriesContainerImpl.md#selection)

### Methods

- [add](DChartSeriesContainerImpl.md#add)
- [calcHitPoint](DChartSeriesContainerImpl.md#calchitpoint)
- [clear](DChartSeriesContainerImpl.md#clear)
- [destroy](DChartSeriesContainerImpl.md#destroy)
- [get](DChartSeriesContainerImpl.md#get)
- [getDomain](DChartSeriesContainerImpl.md#getdomain)
- [getRange](DChartSeriesContainerImpl.md#getrange)
- [hitTest](DChartSeriesContainerImpl.md#hittest)
- [indexOf](DChartSeriesContainerImpl.md#indexof)
- [newFill](DChartSeriesContainerImpl.md#newfill)
- [newOffset](DChartSeriesContainerImpl.md#newoffset)
- [newPadding](DChartSeriesContainerImpl.md#newpadding)
- [newSize](DChartSeriesContainerImpl.md#newsize)
- [newStroke](DChartSeriesContainerImpl.md#newstroke)
- [onRender](DChartSeriesContainerImpl.md#onrender)
- [size](DChartSeriesContainerImpl.md#size)
- [update](DChartSeriesContainerImpl.md#update)

## Constructors

### constructor

• **new DChartSeriesContainerImpl**\<`CHART`\>(`plotArea`, `options?`): [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `options?` | [`DChartSeriesContainerOptions`](../interfaces/DChartSeriesContainerOptions.md)\<`CHART`\> |

#### Returns

[`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L56)

## Properties

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L46)

___

### \_fill

• `Protected` **\_fill**: [`DChartSeriesFillImpl`](DChartSeriesFillImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L50)

___

### \_list

• `Protected` **\_list**: [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L45)

___

### \_offset

• `Protected` **\_offset**: [`DChartSeriesPointImpl`](DChartSeriesPointImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L53)

___

### \_padding

• `Protected` **\_padding**: [`DChartSeriesPaddingImpl`](DChartSeriesPaddingImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L54)

___

### \_plotArea

• `Protected` **\_plotArea**: [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L44)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L47)

___

### \_selection

• `Protected` **\_selection**: ``null`` \| [`DChartSelection`](../interfaces/DChartSelection.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L48)

___

### \_size

• `Protected` **\_size**: [`DChartSeriesPointImpl`](DChartSeriesPointImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L52)

___

### \_stroke

• `Protected` **\_stroke**: [`DChartSeriesStrokeImpl`](DChartSeriesStrokeImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L51)

___

### WORK\_CALCHITPOINT

▪ `Static` `Protected` **WORK\_CALCHITPOINT**: [`DChartSeriesHitResult`](DChartSeriesHitResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L42)

## Accessors

### domain

• `get` **domain**(): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[domain](../interfaces/DChartSeriesContainer.md#domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L216)

___

### plotArea

• `get` **plotArea**(): [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\>

#### Returns

[`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\>

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[plotArea](../interfaces/DChartSeriesContainer.md#plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L113)

___

### range

• `get` **range**(): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[range](../interfaces/DChartSeriesContainer.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L229)

___

### selection

• `get` **selection**(): ``null`` \| [`DChartSelection`](../interfaces/DChartSelection.md)\<`CHART`\>

#### Returns

``null`` \| [`DChartSelection`](../interfaces/DChartSelection.md)\<`CHART`\>

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[selection](../interfaces/DChartSeriesContainer.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L117)

• `set` **selection**(`selection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`DChartSelection`](../interfaces/DChartSelection.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[selection](../interfaces/DChartSeriesContainer.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L121)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L147)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L253)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[clear](../interfaces/DChartSeriesContainer.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L165)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[destroy](../interfaces/DChartSeriesContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L178)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L153)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L186)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L201)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L242)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L161)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L74)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L97)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L106)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L88)

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

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L81)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L136)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[size](../interfaces/DChartSeriesContainer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L174)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSeriesContainer](../interfaces/DChartSeriesContainer.md).[update](../interfaces/DChartSeriesContainer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series-container-impl.ts#L125)
