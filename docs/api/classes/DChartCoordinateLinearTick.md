[Winter Cardinal UI - v0.457.0](../index.md) / DChartCoordinateLinearTick

# Class: DChartCoordinateLinearTick\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinateTick`](../interfaces/DChartCoordinateTick.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartCoordinateLinearTick.md#constructor)

### Properties

- [\_theme](DChartCoordinateLinearTick.md#_theme)

### Methods

- [calcStepMinor](DChartCoordinateLinearTick.md#calcstepminor)
- [calcTickMinorPositions](DChartCoordinateLinearTick.md#calctickminorpositions)
- [calculate](DChartCoordinateLinearTick.md#calculate)
- [getThemeDefault](DChartCoordinateLinearTick.md#getthemedefault)
- [getType](DChartCoordinateLinearTick.md#gettype)
- [toMajorStep](DChartCoordinateLinearTick.md#tomajorstep)
- [toMinorStep](DChartCoordinateLinearTick.md#tominorstep)
- [toTheme](DChartCoordinateLinearTick.md#totheme)

## Constructors

### constructor

• **new DChartCoordinateLinearTick**\<`CHART`\>(`options?`): [`DChartCoordinateLinearTick`](DChartCoordinateLinearTick.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTickOptions`](../interfaces/DChartCoordinateTickOptions.md) |

#### Returns

[`DChartCoordinateLinearTick`](DChartCoordinateLinearTick.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L23)

## Properties

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L21)

## Methods

### calcStepMinor

▸ **calcStepMinor**(`majorStep`, `minorCount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `majorStep` | `number` |
| `minorCount` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L62)

___

### calcTickMinorPositions

▸ **calcTickMinorPositions**(`step`, `count`, `majorPosition`, `rangeMin`, `rangeMax`, `iresult`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `number` |
| `count` | `number` |
| `majorPosition` | `number` |
| `rangeMin` | `number` |
| `rangeMax` | `number` |
| `iresult` | `number` |
| `result` | `Float64Array` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L66)

___

### calculate

▸ **calculate**(`domainFrom`, `domainTo`, `domainVisibleFrom`, `domainVisibleTo`, `majorCount`, `majorCapacity`, `majorStep`, `minorCountPerMajor`, `minorCount`, `minorStep`, `majorResult`, `minorResult`, `coordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainFrom` | `number` |
| `domainTo` | `number` |
| `domainVisibleFrom` | `number` |
| `domainVisibleTo` | `number` |
| `majorCount` | `number` |
| `majorCapacity` | `number` |
| `majorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMajorStepFunction`](../index.md#dchartcoordinatetickmajorstepfunction) |
| `minorCountPerMajor` | `number` |
| `minorCount` | `number` |
| `minorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMinorStepFunction`](../index.md#dchartcoordinatetickminorstepfunction) |
| `majorResult` | `number`[] |
| `minorResult` | `number`[] |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartCoordinateTick](../interfaces/DChartCoordinateTick.md).[calculate](../interfaces/DChartCoordinateTick.md#calculate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L83)

___

### getThemeDefault

▸ **getThemeDefault**(): [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Returns

[`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L189)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L193)

___

### toMajorStep

▸ **toMajorStep**(`domainMin`, `domainMax`, `majorCount`, `majorStep?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainMin` | `number` |
| `domainMax` | `number` |
| `majorCount` | `number` |
| `majorStep?` | `number` \| [`DChartCoordinateTickMajorStepFunction`](../index.md#dchartcoordinatetickmajorstepfunction) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L27)

___

### toMinorStep

▸ **toMinorStep**(`majorStep`, `minorCount`, `minorStep?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `majorStep` | `number` |
| `minorCount` | `number` |
| `minorStep?` | `number` \| [`DChartCoordinateTickMinorStepFunction`](../index.md#dchartcoordinatetickminorstepfunction) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L45)

___

### toTheme

▸ **toTheme**(`options?`): [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTickOptions`](../interfaces/DChartCoordinateTickOptions.md) |

#### Returns

[`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L185)
