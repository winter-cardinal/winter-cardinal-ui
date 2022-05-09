[Winter Cardinal UI - v0.164.0](../index.md) / DChartSelectionGridlineContainer

# Interface: DChartSelectionGridlineContainer<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartSelectionGridlineContainerImpl`](../classes/DChartSelectionGridlineContainerImpl.md)

## Table of contents

### Properties

- [x](DChartSelectionGridlineContainer.md#x)
- [y](DChartSelectionGridlineContainer.md#y)

### Methods

- [bind](DChartSelectionGridlineContainer.md#bind)
- [set](DChartSelectionGridlineContainer.md#set)
- [unbind](DChartSelectionGridlineContainer.md#unbind)
- [unset](DChartSelectionGridlineContainer.md#unset)
- [update](DChartSelectionGridlineContainer.md#update)

## Properties

### x

• `Readonly` **x**: [`DChartSelectionShape`](DChartSelectionShape.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts#L18)

___

### y

• `Readonly` **y**: [`DChartSelectionShape`](DChartSelectionShape.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts#L19)

## Methods

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts#L21)

___

### set

▸ **set**(`container`, `mappedPosition`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\> |
| `mappedPosition` | `IPoint` |
| `series` | [`DChartSeries`](DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts#L23)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts#L22)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts#L28)

___

### update

▸ **update**(`container`, `mappedPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\> |
| `mappedPosition` | `IPoint` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container.ts#L29)
