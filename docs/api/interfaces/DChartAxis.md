[Winter Cardinal UI - v0.457.0](../index.md) / DChartAxis

# Interface: DChartAxis\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartAxisBase`](../classes/DChartAxisBase.md)

## Table of contents

### Properties

- [bar](DChartAxis.md#bar)
- [coordinate](DChartAxis.md#coordinate)
- [guide](DChartAxis.md#guide)
- [padding](DChartAxis.md#padding)
- [position](DChartAxis.md#position)
- [tick](DChartAxis.md#tick)

### Methods

- [bind](DChartAxis.md#bind)
- [destroy](DChartAxis.md#destroy)
- [onRender](DChartAxis.md#onrender)
- [unbind](DChartAxis.md#unbind)
- [update](DChartAxis.md#update)

## Properties

### bar

• `Readonly` **bar**: [`DChartAxisBar`](DChartAxisBar.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L21)

___

### coordinate

• **coordinate**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L19)

___

### guide

• `Readonly` **guide**: [`DChartAxisGuideContainer`](DChartAxisGuideContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L23)

___

### padding

• **padding**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L20)

___

### position

• **position**: [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L18)

___

### tick

• `Readonly` **tick**: [`DChartAxisTickContainer`](DChartAxisTickContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L22)

## Methods

### bind

▸ **bind**(`container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](DChartAxisContainer.md)\<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L25)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L29)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L28)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L26)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis.ts#L27)
