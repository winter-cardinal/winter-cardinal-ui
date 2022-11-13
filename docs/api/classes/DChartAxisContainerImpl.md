[Winter Cardinal UI - v0.227.0](../index.md) / DChartAxisContainerImpl

# Class: DChartAxisContainerImpl<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisContainerImpl.md#constructor)

### Properties

- [\_container](DChartAxisContainerImpl.md#_container)
- [\_list](DChartAxisContainerImpl.md#_list)
- [\_plotArea](DChartAxisContainerImpl.md#_plotarea)

### Accessors

- [container](DChartAxisContainerImpl.md#container)
- [plotArea](DChartAxisContainerImpl.md#plotarea)

### Methods

- [add](DChartAxisContainerImpl.md#add)
- [clear](DChartAxisContainerImpl.md#clear)
- [destroy](DChartAxisContainerImpl.md#destroy)
- [get](DChartAxisContainerImpl.md#get)
- [indexOf](DChartAxisContainerImpl.md#indexof)
- [size](DChartAxisContainerImpl.md#size)
- [update](DChartAxisContainerImpl.md#update)

## Constructors

### constructor

• **new DChartAxisContainerImpl**<`CHART`\>(`plotArea`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)<`CHART`\> |
| `options?` | [`DChartAxisContainerOptions`](../interfaces/DChartAxisContainerOptions.md)<`CHART`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L20)

## Properties

### \_container

• `Protected` **\_container**: [`EShapeContainer`](EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L17)

___

### \_list

• `Protected` **\_list**: `Map`<[`DChartAxisPosition`](../index.md#dchartaxisposition-1), [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\>[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L18)

___

### \_plotArea

• `Protected` **\_plotArea**: [`DChartPlotArea`](../interfaces/DChartPlotArea.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L16)

## Accessors

### container

• `get` **container**(): [`EShapeContainer`](EShapeContainer.md)

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[container](../interfaces/DChartAxisContainer.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L33)

___

### plotArea

• `get` **plotArea**(): [`DChartPlotArea`](../interfaces/DChartPlotArea.md)<`CHART`\>

#### Returns

[`DChartPlotArea`](../interfaces/DChartPlotArea.md)<`CHART`\>

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[plotArea](../interfaces/DChartAxisContainer.md#plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L37)

## Methods

### add

▸ **add**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[add](../interfaces/DChartAxisContainer.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L41)

___

### clear

▸ **clear**(`position`): [`DChartAxisContainerImpl`](DChartAxisContainerImpl.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition-1) |

#### Returns

[`DChartAxisContainerImpl`](DChartAxisContainerImpl.md)<`CHART`\>

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[clear](../interfaces/DChartAxisContainer.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L72)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[destroy](../interfaces/DChartAxisContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L101)

___

### get

▸ **get**(`position`, `index`): ``null`` \| [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition-1) |
| `index` | `number` |

#### Returns

``null`` \| [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\>

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[get](../interfaces/DChartAxisContainer.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L52)

___

### indexOf

▸ **indexOf**(`axis`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\> |

#### Returns

`number`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[indexOf](../interfaces/DChartAxisContainer.md#indexof)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L63)

___

### size

▸ **size**(`position`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition-1) |

#### Returns

`number`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[size](../interfaces/DChartAxisContainer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L84)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[update](../interfaces/DChartAxisContainer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-axis-container-impl.ts#L93)
