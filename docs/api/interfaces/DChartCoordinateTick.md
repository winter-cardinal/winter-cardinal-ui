[Winter Cardinal UI - v0.414.0](../index.md) / DChartCoordinateTick

# Interface: DChartCoordinateTick\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartCoordinateLinearTick`](../classes/DChartCoordinateLinearTick.md)
- [`DChartCoordinateLogTick`](../classes/DChartCoordinateLogTick.md)

## Table of contents

### Methods

- [calculate](DChartCoordinateTick.md#calculate)

## Methods

### calculate

▸ **calculate**(`domainFrom`, `domainTo`, `domainVisibleFrom`, `domainVisibleTo`, `majorCount`, `majorCapacity`, `majorStep`, `minorCountPerMajor`, `minorCount`, `minorStep`, `majorResult`, `minorResult`, `coordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainFrom` | `number` |
| `domainTo` | `number` |
| `domainVisibleFrom` | `number` |
| `domainVisibleTo` | `number` |
| `majorCount` | `number` |
| `majorCapacity` | `number` |
| `majorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMajorStepFunction`](../index.md#dchartcoordinatetickmajorstepfunction) |
| `minorCountPerMajor` | `number` |
| `minorCount` | `number` |
| `minorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMinorStepFunction`](../index.md#dchartcoordinatetickminorstepfunction) |
| `majorResult` | `number`[] |
| `minorResult` | `number`[] |
| `coordinate` | [`DChartCoordinate`](DChartCoordinate.md)\<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-tick.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-tick.ts#L20)
