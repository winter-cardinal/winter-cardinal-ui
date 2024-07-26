[Winter Cardinal UI - v0.442.0](../index.md) / DChartPlotAreaTwofoldCoorinateContainer

# Class: DChartPlotAreaTwofoldCoorinateContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartPlotAreaTwofoldCoorinateContainer.md#constructor)

### Properties

- [\_plotArea](DChartPlotAreaTwofoldCoorinateContainer.md#_plotarea)
- [\_primary](DChartPlotAreaTwofoldCoorinateContainer.md#_primary)
- [\_secondary](DChartPlotAreaTwofoldCoorinateContainer.md#_secondary)
- [\_x](DChartPlotAreaTwofoldCoorinateContainer.md#_x)
- [\_y](DChartPlotAreaTwofoldCoorinateContainer.md#_y)

### Accessors

- [plotArea](DChartPlotAreaTwofoldCoorinateContainer.md#plotarea)
- [x](DChartPlotAreaTwofoldCoorinateContainer.md#x)
- [y](DChartPlotAreaTwofoldCoorinateContainer.md#y)

### Methods

- [blend](DChartPlotAreaTwofoldCoorinateContainer.md#blend)
- [fit](DChartPlotAreaTwofoldCoorinateContainer.md#fit)
- [mark](DChartPlotAreaTwofoldCoorinateContainer.md#mark)

## Constructors

### constructor

• **new DChartPlotAreaTwofoldCoorinateContainer**\<`CHART`\>(`plotArea`, `primary`, `secondary`): [`DChartPlotAreaTwofoldCoorinateContainer`](DChartPlotAreaTwofoldCoorinateContainer.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> |
| `primary` | [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\> |
| `secondary` | [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\> |

#### Returns

[`DChartPlotAreaTwofoldCoorinateContainer`](DChartPlotAreaTwofoldCoorinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L21)

## Properties

### \_plotArea

• `Protected` **\_plotArea**: [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L17)

___

### \_primary

• `Protected` **\_primary**: [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L18)

___

### \_secondary

• `Protected` **\_secondary**: [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L19)

___

### \_x

• `Protected` **\_x**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L15)

___

### \_y

• `Protected` **\_y**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L16)

## Accessors

### plotArea

• `get` **plotArea**(): [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Returns

[`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[plotArea](../interfaces/DChartCoordinateContainer.md#plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L41)

___

### x

• `get` **x**(): [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[x](../interfaces/DChartCoordinateContainer.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L33)

___

### y

• `get` **y**(): [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[y](../interfaces/DChartCoordinateContainer.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L37)

## Methods

### blend

▸ **blend**(`ratio`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[blend](../interfaces/DChartCoordinateContainer.md#blend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L57)

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

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[fit](../interfaces/DChartCoordinateContainer.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L45)

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

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[mark](../interfaces/DChartCoordinateContainer.md#mark)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container.ts#L51)
