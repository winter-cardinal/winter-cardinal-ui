[Winter Cardinal UI - v0.227.0](../index.md) / DChartSelectionGridlineContainerImpl

# Class: DChartSelectionGridlineContainerImpl<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartSelectionGridlineContainer`](../interfaces/DChartSelectionGridlineContainer.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSelectionGridlineContainerImpl.md#constructor)

### Properties

- [\_x](DChartSelectionGridlineContainerImpl.md#_x)
- [\_y](DChartSelectionGridlineContainerImpl.md#_y)

### Accessors

- [x](DChartSelectionGridlineContainerImpl.md#x)
- [y](DChartSelectionGridlineContainerImpl.md#y)

### Methods

- [bind](DChartSelectionGridlineContainerImpl.md#bind)
- [set](DChartSelectionGridlineContainerImpl.md#set)
- [unbind](DChartSelectionGridlineContainerImpl.md#unbind)
- [unset](DChartSelectionGridlineContainerImpl.md#unset)
- [update](DChartSelectionGridlineContainerImpl.md#update)

## Constructors

### constructor

• **new DChartSelectionGridlineContainerImpl**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionGridlineContainerOptions`](../interfaces/DChartSelectionGridlineContainerOptions.md)<`CHART`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L24)

## Properties

### \_x

• `Protected` **\_x**: [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L21)

___

### \_y

• `Protected` **\_y**: [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L22)

## Accessors

### x

• `get` **x**(): [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)<`CHART`\>

#### Returns

[`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)<`CHART`\>

#### Implementation of

[DChartSelectionGridlineContainer](../interfaces/DChartSelectionGridlineContainer.md).[x](../interfaces/DChartSelectionGridlineContainer.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L29)

___

### y

• `get` **y**(): [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)<`CHART`\>

#### Returns

[`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)<`CHART`\>

#### Implementation of

[DChartSelectionGridlineContainer](../interfaces/DChartSelectionGridlineContainer.md).[y](../interfaces/DChartSelectionGridlineContainer.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L33)

## Methods

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionGridlineContainer](../interfaces/DChartSelectionGridlineContainer.md).[bind](../interfaces/DChartSelectionGridlineContainer.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L37)

___

### set

▸ **set**(`container`, `mappedPosition`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `mappedPosition` | `IPoint` |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionGridlineContainer](../interfaces/DChartSelectionGridlineContainer.md).[set](../interfaces/DChartSelectionGridlineContainer.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L47)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionGridlineContainer](../interfaces/DChartSelectionGridlineContainer.md).[unbind](../interfaces/DChartSelectionGridlineContainer.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L42)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionGridlineContainer](../interfaces/DChartSelectionGridlineContainer.md).[unset](../interfaces/DChartSelectionGridlineContainer.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L56)

___

### update

▸ **update**(`container`, `mappedPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `mappedPosition` | `IPoint` |

#### Returns

`void`

#### Implementation of

[DChartSelectionGridlineContainer](../interfaces/DChartSelectionGridlineContainer.md).[update](../interfaces/DChartSelectionGridlineContainer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-container-impl.ts#L61)
