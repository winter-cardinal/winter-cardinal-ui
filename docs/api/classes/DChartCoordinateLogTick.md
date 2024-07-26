[Winter Cardinal UI - v0.442.0](../index.md) / DChartCoordinateLogTick

# Class: DChartCoordinateLogTick\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinateTick`](../interfaces/DChartCoordinateTick.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartCoordinateLogTick.md#constructor)

### Properties

- [\_theme](DChartCoordinateLogTick.md#_theme)

### Methods

- [calcStepMinor](DChartCoordinateLogTick.md#calcstepminor)
- [calcTickMinorPositions](DChartCoordinateLogTick.md#calctickminorpositions)
- [calculate](DChartCoordinateLogTick.md#calculate)
- [getThemeDefault](DChartCoordinateLogTick.md#getthemedefault)
- [getType](DChartCoordinateLogTick.md#gettype)
- [toMajorStep](DChartCoordinateLogTick.md#tomajorstep)
- [toMinorStep](DChartCoordinateLogTick.md#tominorstep)
- [toTheme](DChartCoordinateLogTick.md#totheme)

## Constructors

### constructor

• **new DChartCoordinateLogTick**\<`CHART`\>(`options?`): [`DChartCoordinateLogTick`](DChartCoordinateLogTick.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTickOptions`](../interfaces/DChartCoordinateTickOptions.md) |

#### Returns

[`DChartCoordinateLogTick`](DChartCoordinateLogTick.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L25)

## Properties

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L23)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L64)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L68)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L85)

___

### getThemeDefault

▸ **getThemeDefault**(): [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Returns

[`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L193)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L197)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L29)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L47)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L189)
