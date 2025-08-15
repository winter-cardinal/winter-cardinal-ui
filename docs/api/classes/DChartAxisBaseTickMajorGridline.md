[Winter Cardinal UI - v0.457.0](../index.md) / DChartAxisBaseTickMajorGridline

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

- [index](DChartAxisBaseTickMajorGridline.md#index)
- [parser](DChartAxisBaseTickMajorGridline.md#parser)
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

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L19)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L15)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L16)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L14)

___

### \_shapes

• `Protected` `Optional` **\_shapes**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L17)

## Accessors

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L28)

___

### parser

• `get` **parser**(): [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\>

#### Returns

[`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L24)

___

### shapes

• `get` **shapes**(): [`EShape`](../interfaces/EShape.md)[]

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[DChartAxisTickMajorGridline](../interfaces/DChartAxisTickMajorGridline.md).[shapes](../interfaces/DChartAxisTickMajorGridline.md#shapes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L32)

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

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L66)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L87)

___

### newShapePosition

▸ **newShapePosition**(): [`EShapeBarPosition`](../index.md#eshapebarposition)

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L56)

___

### newShapes

▸ **newShapes**(): [`EShape`](../interfaces/EShape.md)[]

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L36)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major-gridline.ts#L76)
