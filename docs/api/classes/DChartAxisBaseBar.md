[Winter Cardinal UI - v0.310.1](../index.md) / DChartAxisBaseBar

# Class: DChartAxisBaseBar<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisBar`](../interfaces/DChartAxisBar.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisBaseBar.md#constructor)

### Properties

- [\_container](DChartAxisBaseBar.md#_container)
- [\_index](DChartAxisBaseBar.md#_index)
- [\_parser](DChartAxisBaseBar.md#_parser)
- [\_shape](DChartAxisBaseBar.md#_shape)

### Accessors

- [shape](DChartAxisBaseBar.md#shape)

### Methods

- [bind](DChartAxisBaseBar.md#bind)
- [destroy](DChartAxisBaseBar.md#destroy)
- [newShape](DChartAxisBaseBar.md#newshape)
- [newShapePosition](DChartAxisBaseBar.md#newshapeposition)
- [unbind](DChartAxisBaseBar.md#unbind)
- [update](DChartAxisBaseBar.md#update)

## Constructors

### constructor

• **new DChartAxisBaseBar**<`CHART`\>(`parser`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L22)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L18)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L19)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L17)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L20)

## Accessors

### shape

• `get` **shape**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[DChartAxisBar](../interfaces/DChartAxisBar.md).[shape](../interfaces/DChartAxisBar.md#shape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L27)

## Methods

### bind

▸ **bind**(`container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Implementation of

[DChartAxisBar](../interfaces/DChartAxisBar.md).[bind](../interfaces/DChartAxisBar.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L57)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisBar](../interfaces/DChartAxisBar.md).[destroy](../interfaces/DChartAxisBar.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L108)

___

### newShape

▸ `Protected` **newShape**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L36)

___

### newShapePosition

▸ `Protected` **newShapePosition**(): [`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L47)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisBar](../interfaces/DChartAxisBar.md).[unbind](../interfaces/DChartAxisBar.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L63)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisBar](../interfaces/DChartAxisBar.md).[update](../interfaces/DChartAxisBar.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-bar.ts#L72)
