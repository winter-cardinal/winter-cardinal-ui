[Winter Cardinal UI - v0.442.0](../index.md) / DChartPlotAreaLike

# Interface: DChartPlotAreaLike\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Hierarchy

- [`DApplicationTarget`](DApplicationTarget.md)

  ↳ **`DChartPlotAreaLike`**

  ↳↳ [`DChartPlotAreaTwofoldSub`](DChartPlotAreaTwofoldSub.md)

## Table of contents

### Properties

- [axis](DChartPlotAreaLike.md#axis)
- [chart](DChartPlotAreaLike.md#chart)
- [container](DChartPlotAreaLike.md#container)
- [coordinate](DChartPlotAreaLike.md#coordinate)
- [parent](DChartPlotAreaLike.md#parent)
- [plotArea](DChartPlotAreaLike.md#plotarea)
- [series](DChartPlotAreaLike.md#series)
- [state](DChartPlotAreaLike.md#state)
- [view](DChartPlotAreaLike.md#view)

### Methods

- [getAxisBounds](DChartPlotAreaLike.md#getaxisbounds)
- [getContainerBounds](DChartPlotAreaLike.md#getcontainerbounds)
- [getPixelBounds](DChartPlotAreaLike.md#getpixelbounds)
- [getPixelDomain](DChartPlotAreaLike.md#getpixeldomain)
- [getPixelRange](DChartPlotAreaLike.md#getpixelrange)
- [getSelectionBoundsX](DChartPlotAreaLike.md#getselectionboundsx)
- [getSelectionBoundsY](DChartPlotAreaLike.md#getselectionboundsy)
- [off](DChartPlotAreaLike.md#off)
- [on](DChartPlotAreaLike.md#on)
- [toLocal](DChartPlotAreaLike.md#tolocal)

## Properties

### axis

• `Readonly` **axis**: [`DChartAxisContainer`](DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L32)

___

### chart

• `Readonly` **chart**: `CHART`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L27)

___

### container

• `Readonly` **container**: [`DChartPlotAreaContainer`](../classes/DChartPlotAreaContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L31)

___

### coordinate

• `Readonly` **coordinate**: [`DChartCoordinateContainer`](DChartCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L29)

___

### parent

• `Optional` **parent**: ``null`` \| [`DApplicationTarget`](DApplicationTarget.md)

#### Inherited from

[DApplicationTarget](DApplicationTarget.md).[parent](DApplicationTarget.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L11)

___

### plotArea

• `Readonly` **plotArea**: [`DChartPlotArea`](DChartPlotArea.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L28)

___

### series

• `Readonly` **series**: [`DChartSeriesContainer`](DChartSeriesContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L30)

___

### state

• `Readonly` **state**: [`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L34)

___

### view

• `Readonly` **view**: [`DView`](DView.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L33)

## Methods

### getAxisBounds

▸ **getAxisBounds**(`position`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L45)

___

### getContainerBounds

▸ **getContainerBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L48)

___

### getPixelBounds

▸ **getPixelBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L44)

___

### getPixelDomain

▸ **getPixelDomain**(`result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L42)

___

### getPixelRange

▸ **getPixelRange**(`result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L43)

___

### getSelectionBoundsX

▸ **getSelectionBoundsX**(): `Rectangle`

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L46)

___

### getSelectionBoundsY

▸ **getSelectionBoundsY**(): `Rectangle`

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L47)

___

### off

▸ **off**(`name`, `callback?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L40)

___

### on

▸ **on**(`name`, `callback`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L37)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `result?`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPoint` |
| `from?` | `DisplayObject` |
| `result?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L49)
