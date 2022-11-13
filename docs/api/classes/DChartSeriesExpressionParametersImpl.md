[Winter Cardinal UI - v0.227.0](../index.md) / DChartSeriesExpressionParametersImpl

# Class: DChartSeriesExpressionParametersImpl

## Implements

- [`DChartSeriesLinearParameters`](../interfaces/DChartSeriesLinearParameters.md)

## Table of contents

### Constructors

- [constructor](DChartSeriesExpressionParametersImpl.md#constructor)

### Properties

- [\_a](DChartSeriesExpressionParametersImpl.md#_a)
- [\_b](DChartSeriesExpressionParametersImpl.md#_b)
- [\_id](DChartSeriesExpressionParametersImpl.md#_id)
- [\_idUpdated](DChartSeriesExpressionParametersImpl.md#_idupdated)
- [\_x0](DChartSeriesExpressionParametersImpl.md#_x0)
- [\_y0](DChartSeriesExpressionParametersImpl.md#_y0)

### Accessors

- [a](DChartSeriesExpressionParametersImpl.md#a)
- [b](DChartSeriesExpressionParametersImpl.md#b)
- [x0](DChartSeriesExpressionParametersImpl.md#x0)
- [y0](DChartSeriesExpressionParametersImpl.md#y0)

### Methods

- [isDirty](DChartSeriesExpressionParametersImpl.md#isdirty)
- [toClean](DChartSeriesExpressionParametersImpl.md#toclean)
- [toDirty](DChartSeriesExpressionParametersImpl.md#todirty)
- [from](DChartSeriesExpressionParametersImpl.md#from)

## Constructors

### constructor

• **new DChartSeriesExpressionParametersImpl**(`a`, `b`, `x0`, `y0`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `x0` | `number` |
| `y0` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L19)

## Properties

### \_a

• `Protected` **\_a**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L14)

___

### \_b

• `Protected` **\_b**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L15)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L12)

___

### \_idUpdated

• `Protected` **\_idUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L13)

___

### \_x0

• `Protected` **\_x0**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L16)

___

### \_y0

• `Protected` **\_y0**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L17)

## Accessors

### a

• `get` **a**(): `number`

A coefficient of the variable x

#### Returns

`number`

#### Implementation of

[DChartSeriesLinearParameters](../interfaces/DChartSeriesLinearParameters.md).[a](../interfaces/DChartSeriesLinearParameters.md#a)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L28)

• `set` **a**(`a`): `void`

A coefficient of the variable x

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`void`

#### Implementation of

[DChartSeriesLinearParameters](../interfaces/DChartSeriesLinearParameters.md).[a](../interfaces/DChartSeriesLinearParameters.md#a)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L32)

___

### b

• `get` **b**(): `number`

A coefficient of the variable y

#### Returns

`number`

#### Implementation of

[DChartSeriesLinearParameters](../interfaces/DChartSeriesLinearParameters.md).[b](../interfaces/DChartSeriesLinearParameters.md#b)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L39)

• `set` **b**(`b`): `void`

A coefficient of the variable y

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`void`

#### Implementation of

[DChartSeriesLinearParameters](../interfaces/DChartSeriesLinearParameters.md).[b](../interfaces/DChartSeriesLinearParameters.md#b)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L43)

___

### x0

• `get` **x0**(): `number`

X coordinate of the point the line passes through

#### Returns

`number`

#### Implementation of

[DChartSeriesLinearParameters](../interfaces/DChartSeriesLinearParameters.md).[x0](../interfaces/DChartSeriesLinearParameters.md#x0)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L50)

• `set` **x0**(`x0`): `void`

X coordinate of the point the line passes through

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |

#### Returns

`void`

#### Implementation of

[DChartSeriesLinearParameters](../interfaces/DChartSeriesLinearParameters.md).[x0](../interfaces/DChartSeriesLinearParameters.md#x0)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L54)

___

### y0

• `get` **y0**(): `number`

Y coordinate of the point the line passes through

#### Returns

`number`

#### Implementation of

[DChartSeriesLinearParameters](../interfaces/DChartSeriesLinearParameters.md).[y0](../interfaces/DChartSeriesLinearParameters.md#y0)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L61)

• `set` **y0**(`y0`): `void`

Y coordinate of the point the line passes through

#### Parameters

| Name | Type |
| :------ | :------ |
| `y0` | `number` |

#### Returns

`void`

#### Implementation of

[DChartSeriesLinearParameters](../interfaces/DChartSeriesLinearParameters.md).[y0](../interfaces/DChartSeriesLinearParameters.md#y0)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L65)

## Methods

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L76)

___

### toClean

▸ **toClean**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L80)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L72)

___

### from

▸ `Static` **from**(`options?`): [`DChartSeriesExpressionParametersImpl`](DChartSeriesExpressionParametersImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSeriesLinearParametersOptions`](../interfaces/DChartSeriesLinearParametersOptions.md) |

#### Returns

[`DChartSeriesExpressionParametersImpl`](DChartSeriesExpressionParametersImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-chart-series-linear-parameters-impl.ts#L84)
