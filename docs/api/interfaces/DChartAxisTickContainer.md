[Winter Cardinal UI - v0.374.0](../index.md) / DChartAxisTickContainer

# Interface: DChartAxisTickContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartAxisBaseTickContainer`](../classes/DChartAxisBaseTickContainer.md)

## Table of contents

### Properties

- [major](DChartAxisTickContainer.md#major)
- [minor](DChartAxisTickContainer.md#minor)

### Methods

- [bind](DChartAxisTickContainer.md#bind)
- [destroy](DChartAxisTickContainer.md#destroy)
- [unbind](DChartAxisTickContainer.md#unbind)
- [update](DChartAxisTickContainer.md#update)

## Properties

### major

• `Readonly` **major**: [`DChartAxisTickMajor`](DChartAxisTickMajor.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts#L12)

___

### minor

• `Readonly` **minor**: [`DChartAxisTickMinor`](DChartAxisTickMinor.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts#L13)

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

[src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts#L15)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts#L18)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts#L16)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-tick-container.ts#L17)
