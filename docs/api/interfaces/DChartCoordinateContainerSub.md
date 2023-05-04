[Winter Cardinal UI - v0.310.1](../index.md) / DChartCoordinateContainerSub

# Interface: DChartCoordinateContainerSub<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartCoordinateContainerSubImpl`](../classes/DChartCoordinateContainerSubImpl.md)

## Table of contents

### Properties

- [container](DChartCoordinateContainerSub.md#container)

### Methods

- [add](DChartCoordinateContainerSub.md#add)
- [blend](DChartCoordinateContainerSub.md#blend)
- [clear](DChartCoordinateContainerSub.md#clear)
- [destroy](DChartCoordinateContainerSub.md#destroy)
- [fit](DChartCoordinateContainerSub.md#fit)
- [get](DChartCoordinateContainerSub.md#get)
- [indexOf](DChartCoordinateContainerSub.md#indexof)
- [mark](DChartCoordinateContainerSub.md#mark)
- [remove](DChartCoordinateContainerSub.md#remove)
- [size](DChartCoordinateContainerSub.md#size)

## Properties

### container

• `Readonly` **container**: [`DChartCoordinateContainer`](DChartCoordinateContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L11)

## Methods

### add

▸ **add**(`coordinate`, `index?`): [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\> |
| `index?` | `number` |

#### Returns

[`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L13)

___

### blend

▸ **blend**(`ratio`): [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

#### Returns

[`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L24)

___

### clear

▸ **clear**(): [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Returns

[`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L18)

___

### destroy

▸ **destroy**(): [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Returns

[`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L19)

___

### fit

▸ **fit**(`from?`, `to?`): [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

[`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L22)

___

### get

▸ **get**(`index`): ``null`` \| [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L14)

___

### indexOf

▸ **indexOf**(`coordinate`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L15)

___

### mark

▸ **mark**(`from?`, `to?`): [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

[`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L23)

___

### remove

▸ **remove**(`coordinate`): ``null`` \| [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\> |

#### Returns

``null`` \| [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L16)

▸ **remove**(`index`): ``null`` \| [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DChartCoordinate`](DChartCoordinate.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L17)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub.ts#L20)
