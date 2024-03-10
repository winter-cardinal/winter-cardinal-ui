[Winter Cardinal UI - v0.414.0](../index.md) / DChartAxisBaseTickMajor

# Class: DChartAxisBaseTickMajor\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisTickMajor`](../interfaces/DChartAxisTickMajor.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisBaseTickMajor.md#constructor)

### Properties

- [\_container](DChartAxisBaseTickMajor.md#_container)
- [\_gridline](DChartAxisBaseTickMajor.md#_gridline)
- [\_index](DChartAxisBaseTickMajor.md#_index)
- [\_parser](DChartAxisBaseTickMajor.md#_parser)
- [\_shapes](DChartAxisBaseTickMajor.md#_shapes)

### Accessors

- [gridline](DChartAxisBaseTickMajor.md#gridline)
- [shapes](DChartAxisBaseTickMajor.md#shapes)

### Methods

- [bind](DChartAxisBaseTickMajor.md#bind)
- [destroy](DChartAxisBaseTickMajor.md#destroy)
- [newShapes](DChartAxisBaseTickMajor.md#newshapes)
- [unbind](DChartAxisBaseTickMajor.md#unbind)

## Constructors

### constructor

• **new DChartAxisBaseTickMajor**\<`CHART`\>(`parser`): [`DChartAxisBaseTickMajor`](DChartAxisBaseTickMajor.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\> |

#### Returns

[`DChartAxisBaseTickMajor`](DChartAxisBaseTickMajor.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L19)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L14)

___

### \_gridline

• `Protected` **\_gridline**: [`DChartAxisBaseTickMajorGridline`](DChartAxisBaseTickMajorGridline.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L17)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L15)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L13)

___

### \_shapes

• `Protected` `Optional` **\_shapes**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L16)

## Accessors

### gridline

• `get` **gridline**(): [`DChartAxisBaseTickMajorGridline`](DChartAxisBaseTickMajorGridline.md)\<`CHART`\>

#### Returns

[`DChartAxisBaseTickMajorGridline`](DChartAxisBaseTickMajorGridline.md)\<`CHART`\>

#### Implementation of

[DChartAxisTickMajor](../interfaces/DChartAxisTickMajor.md).[gridline](../interfaces/DChartAxisTickMajor.md#gridline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L57)

___

### shapes

• `get` **shapes**(): [`EShape`](../interfaces/EShape.md)[]

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[DChartAxisTickMajor](../interfaces/DChartAxisTickMajor.md).[shapes](../interfaces/DChartAxisTickMajor.md#shapes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L25)

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

#### Implementation of

[DChartAxisTickMajor](../interfaces/DChartAxisTickMajor.md).[bind](../interfaces/DChartAxisTickMajor.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L61)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisTickMajor](../interfaces/DChartAxisTickMajor.md).[destroy](../interfaces/DChartAxisTickMajor.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L88)

___

### newShapes

▸ **newShapes**(): [`EShape`](../interfaces/EShape.md)[]

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L34)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisTickMajor](../interfaces/DChartAxisTickMajor.md).[unbind](../interfaces/DChartAxisTickMajor.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-major.ts#L76)
