[Winter Cardinal UI - v0.442.0](../index.md) / DChartCoordinateContainer

# Interface: DChartCoordinateContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartCoordinateContainerImpl`](../classes/DChartCoordinateContainerImpl.md)
- [`DChartPlotAreaTwofoldCoorinateContainer`](../classes/DChartPlotAreaTwofoldCoorinateContainer.md)

## Table of contents

### Properties

- [plotArea](DChartCoordinateContainer.md#plotarea)
- [x](DChartCoordinateContainer.md#x)
- [y](DChartCoordinateContainer.md#y)

### Methods

- [blend](DChartCoordinateContainer.md#blend)
- [fit](DChartCoordinateContainer.md#fit)
- [mark](DChartCoordinateContainer.md#mark)

## Properties

### plotArea

• **plotArea**: [`DChartPlotArea`](DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](DChartPlotAreaLike.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts#L19)

___

### x

• **x**: [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts#L17)

___

### y

• **y**: [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts#L18)

## Methods

### blend

▸ **blend**(`ratio`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts#L23)

___

### fit

▸ **fit**(`domainFrom?`, `domainTo?`, `rangeFrom?`, `rangeTo?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainFrom?` | `number` |
| `domainTo?` | `number` |
| `rangeFrom?` | `number` |
| `rangeTo?` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts#L21)

___

### mark

▸ **mark**(`domainFrom?`, `domainTo?`, `rangeFrom?`, `rangeTo?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainFrom?` | `number` |
| `domainTo?` | `number` |
| `rangeFrom?` | `number` |
| `rangeTo?` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container.ts#L22)
