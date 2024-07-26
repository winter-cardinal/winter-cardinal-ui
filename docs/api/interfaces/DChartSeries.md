[Winter Cardinal UI - v0.442.0](../index.md) / DChartSeries

# Interface: DChartSeries\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartSeriesBase`](../classes/DChartSeriesBase.md)

## Table of contents

### Properties

- [container](DChartSeries.md#container)
- [coordinate](DChartSeries.md#coordinate)
- [domain](DChartSeries.md#domain)
- [index](DChartSeries.md#index)
- [range](DChartSeries.md#range)
- [shape](DChartSeries.md#shape)
- [state](DChartSeries.md#state)

### Methods

- [bind](DChartSeries.md#bind)
- [calcHitPoint](DChartSeries.md#calchitpoint)
- [destroy](DChartSeries.md#destroy)
- [hide](DChartSeries.md#hide)
- [hitTest](DChartSeries.md#hittest)
- [isHidden](DChartSeries.md#ishidden)
- [isShown](DChartSeries.md#isshown)
- [onRender](DChartSeries.md#onrender)
- [show](DChartSeries.md#show)
- [toDirty](DChartSeries.md#todirty)
- [unbind](DChartSeries.md#unbind)
- [update](DChartSeries.md#update)

## Properties

### container

• `Readonly` **container**: ``null`` \| [`DChartSeriesContainer`](DChartSeriesContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L57)

___

### coordinate

• `Readonly` **coordinate**: [`DChartSeriesCoordinateContainer`](DChartSeriesCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L58)

___

### domain

• `Readonly` **domain**: [`DChartRegionImmutable`](DChartRegionImmutable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L54)

___

### index

• `Readonly` **index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L59)

___

### range

• `Readonly` **range**: [`DChartRegionImmutable`](DChartRegionImmutable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L55)

___

### shape

• `Readonly` **shape**: ``null`` \| [`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L56)

___

### state

• `Readonly` **state**: [`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L60)

## Methods

### bind

▸ **bind**(`container`, `index`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](DChartSeriesContainer.md)\<`CHART`\> |
| `index` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L62)

___

### calcHitPoint

▸ **calcHitPoint**(`x`, `y`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `result` | [`DChartSeriesHitResult`](../classes/DChartSeriesHitResult.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L77)

___

### destroy

▸ **destroy**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L74)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L69)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L76)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L70)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L68)

___

### onRender

▸ **onRender**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L73)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L67)

___

### toDirty

▸ **toDirty**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L65)

___

### unbind

▸ **unbind**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L63)

___

### update

▸ **update**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-series.ts#L72)
