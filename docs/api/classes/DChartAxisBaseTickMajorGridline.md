[Winter Cardinal UI - v0.407.0](../index.md) / DChartAxisBaseTickMajorGridline

# Class: DChartAxisBaseTickMajorGridline\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisTickMajorGridline`](../interfaces/DChartAxisTickMajorGridline.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisBaseTickMajorGridline.md#constructor)

### Properties

- [\_container](DChartAxisBaseTickMajorGridline.md#_container)
- [\_index](DChartAxisBaseTickMajorGridline.md#_index)
- [\_parser](DChartAxisBaseTickMajorGridline.md#_parser)
- [\_shapes](DChartAxisBaseTickMajorGridline.md#_shapes)

### Accessors

- [shapes](DChartAxisBaseTickMajorGridline.md#shapes)

### Methods

- [bind](DChartAxisBaseTickMajorGridline.md#bind)
- [destroy](DChartAxisBaseTickMajorGridline.md#destroy)
- [newShapePosition](DChartAxisBaseTickMajorGridline.md#newshapeposition)
- [newShapes](DChartAxisBaseTickMajorGridline.md#newshapes)
- [unbind](DChartAxisBaseTickMajorGridline.md#unbind)

## Constructors

### constructor

• **new DChartAxisBaseTickMajorGridline**\<`CHART`\>(`parser`): [`DChartAxisBaseTickMajorGridline`](DChartAxisBaseTickMajorGridline.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\> |

#### Returns

[`DChartAxisBaseTickMajorGridline`](DChartAxisBaseTickMajorGridline.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L19)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L15)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L16)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L14)

___

### \_shapes

• `Protected` `Optional` **\_shapes**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L17)

## Accessors

### shapes

• `get` **shapes**(): [`EShape`](../interfaces/EShape.md)[]

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[DChartAxisTickMajorGridline](../interfaces/DChartAxisTickMajorGridline.md).[shapes](../interfaces/DChartAxisTickMajorGridline.md#shapes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L24)

## Methods

### bind

▸ **bind**(`container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L63)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L84)

___

### newShapePosition

▸ **newShapePosition**(): [`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L53)

___

### newShapes

▸ **newShapes**(): [`EShape`](../interfaces/EShape.md)[]

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L33)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L73)
