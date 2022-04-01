[Winter Cardinal UI - v0.160.0](../index.md) / DChartCoordinateLogTick

# Class: DChartCoordinateLogTick<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Table of contents

### Constructors

- [constructor](DChartCoordinateLogTick.md#constructor)

### Properties

- [\_theme](DChartCoordinateLogTick.md#_theme)

### Methods

- [calcStepMajor](DChartCoordinateLogTick.md#calcstepmajor)
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

• **new DChartCoordinateLogTick**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTickOptions`](../interfaces/DChartCoordinateTickOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L19)

## Properties

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L17)

## Methods

### calcStepMajor

▸ `Protected` **calcStepMajor**(`domainMin`, `domainMax`, `majorCount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainMin` | `number` |
| `domainMax` | `number` |
| `majorCount` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L41)

___

### calcStepMinor

▸ `Protected` **calcStepMinor**(`majorStep`, `minorCount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `majorStep` | `number` |
| `minorCount` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L65)

___

### calcTickMinorPositions

▸ `Protected` **calcTickMinorPositions**(`step`, `count`, `majorPosition`, `rangeMin`, `rangeMax`, `iresult`, `result`): `void`

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L69)

___

### calculate

▸ **calculate**(`domainFrom`, `domainTo`, `majorCount`, `majorStep`, `minorCountPerMajor`, `minorCount`, `minorStep`, `majorResult`, `minorResult`, `coordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainFrom` | `number` |
| `domainTo` | `number` |
| `majorCount` | `number` |
| `majorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMajorStepFunction`](../index.md#dchartcoordinatetickmajorstepfunction) |
| `minorCountPerMajor` | `number` |
| `minorCount` | `number` |
| `minorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMinorStepFunction`](../index.md#dchartcoordinatetickminorstepfunction) |
| `majorResult` | `Float64Array` |
| `minorResult` | `Float64Array` |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L86)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Returns

[`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L193)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L197)

___

### toMajorStep

▸ `Protected` **toMajorStep**(`domainMin`, `domainMax`, `majorCount`, `majorStep?`): `number`

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L23)

___

### toMinorStep

▸ `Protected` **toMinorStep**(`majorStep`, `minorCount`, `minorStep?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `majorStep` | `number` |
| `minorCount` | `number` |
| `minorStep?` | `number` \| [`DChartCoordinateTickMinorStepFunction`](../index.md#dchartcoordinatetickminorstepfunction) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L48)

___

### toTheme

▸ `Protected` **toTheme**(`options?`): [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTickOptions`](../interfaces/DChartCoordinateTickOptions.md) |

#### Returns

[`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log-tick.ts#L189)
