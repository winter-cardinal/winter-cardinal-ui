[Winter Cardinal UI - v0.442.0](../index.md) / DChartAxisContainer

# Interface: DChartAxisContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartAxisContainerImpl`](../classes/DChartAxisContainerImpl.md)
- [`DChartPlotAreaTwofoldAxisContainer`](../classes/DChartPlotAreaTwofoldAxisContainer.md)

## Table of contents

### Properties

- [container](DChartAxisContainer.md#container)
- [plotArea](DChartAxisContainer.md#plotarea)

### Methods

- [add](DChartAxisContainer.md#add)
- [clear](DChartAxisContainer.md#clear)
- [destroy](DChartAxisContainer.md#destroy)
- [get](DChartAxisContainer.md#get)
- [indexOf](DChartAxisContainer.md#indexof)
- [onRender](DChartAxisContainer.md#onrender)
- [size](DChartAxisContainer.md#size)
- [update](DChartAxisContainer.md#update)

## Properties

### container

• `Readonly` **container**: [`EShapeContainer`](../classes/EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L17)

___

### plotArea

• `Readonly` **plotArea**: [`DChartPlotArea`](DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](DChartPlotAreaLike.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L18)

## Methods

### add

▸ **add**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](DChartAxis.md)\<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L20)

___

### clear

▸ **clear**(`position`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L26)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L30)

___

### get

▸ **get**(`position`, `index`): ``null`` \| [`DChartAxis`](DChartAxis.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| [`DChartAxisPosition`](../index.md#dchartaxisposition) |
| `index` | `number` |

#### Returns

``null`` \| [`DChartAxis`](DChartAxis.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L21)

___

### indexOf

▸ **indexOf**(`axis`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](DChartAxis.md)\<`CHART`\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L25)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L29)

___

### size

▸ **size**(`position`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L27)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-container.ts#L28)
