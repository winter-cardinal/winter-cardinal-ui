[Winter Cardinal UI - v0.154.0](../index.md) / DChartCoordinateLinearTick

# Class: DChartCoordinateLinearTick<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Table of contents

### Constructors

- [constructor](DChartCoordinateLinearTick.md#constructor)

### Properties

- [\_theme](DChartCoordinateLinearTick.md#_theme)

### Methods

- [calcStepMajor](DChartCoordinateLinearTick.md#calcstepmajor)
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

• **new DChartCoordinateLinearTick**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTickOptions`](../interfaces/DChartCoordinateTickOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L17)

## Properties

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L15)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L39)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L63)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L67)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L84)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Returns

[`DThemeChartCoordinateTick`](../interfaces/DThemeChartCoordinateTick.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L182)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L186)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L21)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L46)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear-tick.ts#L178)
