[Winter Cardinal UI - v0.457.0](../index.md) / DChartCoordinateContainerImpl

# Class: DChartCoordinateContainerImpl\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartCoordinateContainerImpl.md#constructor)

### Properties

- [\_plotArea](DChartCoordinateContainerImpl.md#_plotarea)
- [\_x](DChartCoordinateContainerImpl.md#_x)
- [\_y](DChartCoordinateContainerImpl.md#_y)

### Accessors

- [plotArea](DChartCoordinateContainerImpl.md#plotarea)
- [x](DChartCoordinateContainerImpl.md#x)
- [y](DChartCoordinateContainerImpl.md#y)

### Methods

- [blend](DChartCoordinateContainerImpl.md#blend)
- [fit](DChartCoordinateContainerImpl.md#fit)
- [mark](DChartCoordinateContainerImpl.md#mark)

## Constructors

### constructor

• **new DChartCoordinateContainerImpl**\<`CHART`\>(`plotArea`, `options?`): [`DChartCoordinateContainerImpl`](DChartCoordinateContainerImpl.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `options?` | [`DChartCoordinateContainerOptions`](../interfaces/DChartCoordinateContainerOptions.md)\<`CHART`\> |

#### Returns

[`DChartCoordinateContainerImpl`](DChartCoordinateContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L24)

## Properties

### \_plotArea

• `Protected` **\_plotArea**: [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L22)

___

### \_x

• `Protected` **\_x**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L20)

___

### \_y

• `Protected` **\_y**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L21)

## Accessors

### plotArea

• `get` **plotArea**(): [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\>

#### Returns

[`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[plotArea](../interfaces/DChartCoordinateContainer.md#plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L65)

___

### x

• `get` **x**(): [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[x](../interfaces/DChartCoordinateContainer.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L57)

___

### y

• `get` **y**(): [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainer](../interfaces/DChartCoordinateContainer.md).[y](../interfaces/DChartCoordinateContainer.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L61)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L81)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L69)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-impl.ts#L75)
