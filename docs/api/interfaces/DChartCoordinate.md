[Winter Cardinal UI - v0.414.0](../index.md) / DChartCoordinate

# Interface: DChartCoordinate\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartCoordinateBase`](../classes/DChartCoordinateBase.md)

## Table of contents

### Properties

- [from](DChartCoordinate.md#from)
- [id](DChartCoordinate.md#id)
- [to](DChartCoordinate.md#to)
- [transform](DChartCoordinate.md#transform)

### Methods

- [bind](DChartCoordinate.md#bind)
- [blend](DChartCoordinate.md#blend)
- [fit](DChartCoordinate.md#fit)
- [map](DChartCoordinate.md#map)
- [mapAll](DChartCoordinate.md#mapall)
- [mark](DChartCoordinate.md#mark)
- [ticks](DChartCoordinate.md#ticks)
- [unbind](DChartCoordinate.md#unbind)
- [unmap](DChartCoordinate.md#unmap)
- [unmapAll](DChartCoordinate.md#unmapall)

## Properties

### from

• **from**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L36)

___

### id

• `Readonly` **id**: `number`

Monotonic increasing ID for change detection.

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L33)

___

### to

• **to**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L37)

___

### transform

• `Readonly` **transform**: [`DChartCoordinateTransform`](DChartCoordinateTransform.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L34)

## Methods

### bind

▸ **bind**(`container`, `direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)\<`CHART`\> |
| `direction` | [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L39)

___

### blend

▸ **blend**(`ratio`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L56)

___

### fit

▸ **fit**(`from?`, `to?`): `void`

Adjusts the transform so that mapped points of the given range fit into the plot area
if the plot area container's localTransform is an identity matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from?` | `number` | a lower end of the range |
| `to?` | `number` | an upper end of the range |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L52)

___

### map

▸ **map**(`value`): `number`

Transforms the given raw value to the untransformed value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | a raw value |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L63)

___

### mapAll

▸ **mapAll**(`values`, `ifrom`, `iend`, `stride`, `offset`): `void`

Transforms the given raw values to untransformed values.
Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
Here, i is a non-negative integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `number`[] | raw values to be transformed |
| `ifrom` | `number` | an index on raw values at which to begin a transformation |
| `iend` | `number` | an index on raw values before which to end a transformation |
| `stride` | `number` | a stride of indices |
| `offset` | `number` | an offset of indices |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L76)

___

### mark

▸ **mark**(`from?`, `to?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L54)

___

### ticks

▸ **ticks**(`domainMin`, `domainMax`, `domainVisibleMin`, `domainVisibleMax`, `majorCount`, `majorCapacity`, `majorStep`, `minorCountPerMajor`, `minorCount`, `minorStep`, `majorResult`, `minorResult`): `void`

Returns major / minor tick positions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domainMin` | `number` | domain lower bound |
| `domainMax` | `number` | domain upper bound |
| `domainVisibleMin` | `number` | visible domain lower bound |
| `domainVisibleMax` | `number` | visible domain upper bound |
| `majorCount` | `number` | Expected major tick count |
| `majorCapacity` | `number` | - |
| `majorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMajorStepFunction`](../index.md#dchartcoordinatetickmajorstepfunction) | - |
| `minorCountPerMajor` | `number` | Expected minor tick count per major ticks |
| `minorCount` | `number` | Expected total minor tick count |
| `minorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMinorStepFunction`](../index.md#dchartcoordinatetickminorstepfunction) | - |
| `majorResult` | `number`[] | `majorResult.length` must be larger than `majorCount * 3`. |
| `minorResult` | `number`[] | `minorResult.length` must be larger than `minorCount * 3`. |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L111)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L43)

___

### unmap

▸ **unmap**(`value`): `number`

Transforms the given untransformed value to the raw value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | an untransformed value |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L83)

___

### unmapAll

▸ **unmapAll**(`values`, `ifrom`, `iend`, `stride`, `offset`): `void`

Transforms the given untransformed values to raw values.
Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
Here, i is a non-negative integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `number`[] | untrasformed values to be transformed |
| `ifrom` | `number` | an index on raw values at which to begin a transformation |
| `iend` | `number` | an index on raw values at which to begin a transformation |
| `stride` | `number` | a stride of indices |
| `offset` | `number` | an offset of indices |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate.ts#L96)
