[Winter Cardinal UI - v0.167.0](../index.md) / DChartSelectionShape

# Interface: DChartSelectionShape<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartSelectionShapeBase`](../classes/DChartSelectionShapeBase.md)

## Table of contents

### Methods

- [bind](DChartSelectionShape.md#bind)
- [set](DChartSelectionShape.md#set)
- [unbind](DChartSelectionShape.md#unbind)
- [unset](DChartSelectionShape.md#unset)
- [update](DChartSelectionShape.md#update)

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

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L28)

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

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L30)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L29)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L36)
