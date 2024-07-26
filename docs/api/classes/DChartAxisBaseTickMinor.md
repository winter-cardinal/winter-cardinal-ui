[Winter Cardinal UI - v0.442.0](../index.md) / DChartAxisBaseTickMinor

# Class: DChartAxisBaseTickMinor\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisTickMinor`](../interfaces/DChartAxisTickMinor.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisBaseTickMinor.md#constructor)

### Properties

- [\_container](DChartAxisBaseTickMinor.md#_container)
- [\_index](DChartAxisBaseTickMinor.md#_index)
- [\_parser](DChartAxisBaseTickMinor.md#_parser)
- [\_shapes](DChartAxisBaseTickMinor.md#_shapes)

### Accessors

- [shapes](DChartAxisBaseTickMinor.md#shapes)

### Methods

- [bind](DChartAxisBaseTickMinor.md#bind)
- [destroy](DChartAxisBaseTickMinor.md#destroy)
- [newShapes](DChartAxisBaseTickMinor.md#newshapes)
- [unbind](DChartAxisBaseTickMinor.md#unbind)

## Constructors

### constructor

• **new DChartAxisBaseTickMinor**\<`CHART`\>(`parser`): [`DChartAxisBaseTickMinor`](DChartAxisBaseTickMinor.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\> |

#### Returns

[`DChartAxisBaseTickMinor`](DChartAxisBaseTickMinor.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L17)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L13)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L14)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L12)

___

### \_shapes

• `Protected` `Optional` **\_shapes**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L15)

## Accessors

### shapes

• `get` **shapes**(): [`EShape`](../interfaces/EShape.md)[]

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[DChartAxisTickMinor](../interfaces/DChartAxisTickMinor.md).[shapes](../interfaces/DChartAxisTickMinor.md#shapes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L22)

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

[DChartAxisTickMinor](../interfaces/DChartAxisTickMinor.md).[bind](../interfaces/DChartAxisTickMinor.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L50)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisTickMinor](../interfaces/DChartAxisTickMinor.md).[destroy](../interfaces/DChartAxisTickMinor.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L71)

___

### newShapes

▸ **newShapes**(): [`EShape`](../interfaces/EShape.md)[]

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L26)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisTickMinor](../interfaces/DChartAxisTickMinor.md).[unbind](../interfaces/DChartAxisTickMinor.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-minor.ts#L60)
