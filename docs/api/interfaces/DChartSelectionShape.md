[Winter Cardinal UI - v0.310.1](../index.md) / DChartSelectionShape

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

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L30)

___

### set

▸ **set**(`container`, `position`, `mappedPosition`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |
| `series` | [`DChartSeries`](DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L32)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L31)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L38)

___

### update

▸ **update**(`container`, `position`, `mappedPosition`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-shape.ts#L39)
