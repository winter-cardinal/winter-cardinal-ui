[Winter Cardinal UI - v0.374.0](../index.md) / DChartSelectionContainerImpl

# Class: DChartSelectionContainerImpl\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartSelectionContainer`](../interfaces/DChartSelectionContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSelectionContainerImpl.md#constructor)

### Properties

- [\_x](DChartSelectionContainerImpl.md#_x)
- [\_y](DChartSelectionContainerImpl.md#_y)

### Accessors

- [x](DChartSelectionContainerImpl.md#x)
- [y](DChartSelectionContainerImpl.md#y)

### Methods

- [bind](DChartSelectionContainerImpl.md#bind)
- [set](DChartSelectionContainerImpl.md#set)
- [unbind](DChartSelectionContainerImpl.md#unbind)
- [unset](DChartSelectionContainerImpl.md#unset)
- [update](DChartSelectionContainerImpl.md#update)

## Constructors

### constructor

• **new DChartSelectionContainerImpl**\<`CHART`\>(`x`, `y`): [`DChartSelectionContainerImpl`](DChartSelectionContainerImpl.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\> |
| `y` | [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\> |

#### Returns

[`DChartSelectionContainerImpl`](DChartSelectionContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L19)

## Properties

### \_x

• `Protected` **\_x**: [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L16)

___

### \_y

• `Protected` **\_y**: [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L17)

## Accessors

### x

• `get` **x**(): [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\>

#### Returns

[`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\>

#### Implementation of

[DChartSelectionContainer](../interfaces/DChartSelectionContainer.md).[x](../interfaces/DChartSelectionContainer.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L24)

___

### y

• `get` **y**(): [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\>

#### Returns

[`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\>

#### Implementation of

[DChartSelectionContainer](../interfaces/DChartSelectionContainer.md).[y](../interfaces/DChartSelectionContainer.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L28)

## Methods

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionContainer](../interfaces/DChartSelectionContainer.md).[bind](../interfaces/DChartSelectionContainer.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L32)

___

### set

▸ **set**(`container`, `position`, `mappedPosition`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionContainer](../interfaces/DChartSelectionContainer.md).[set](../interfaces/DChartSelectionContainer.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L42)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionContainer](../interfaces/DChartSelectionContainer.md).[unbind](../interfaces/DChartSelectionContainer.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L37)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionContainer](../interfaces/DChartSelectionContainer.md).[unset](../interfaces/DChartSelectionContainer.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L52)

___

### update

▸ **update**(`container`, `position`, `mappedPosition`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |

#### Returns

`boolean`

#### Implementation of

[DChartSelectionContainer](../interfaces/DChartSelectionContainer.md).[update](../interfaces/DChartSelectionContainer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-selection-container-impl.ts#L57)
