[Winter Cardinal UI - v0.374.0](../index.md) / DChartCoordinateTransform

# Interface: DChartCoordinateTransform\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartCoordinateTransformImpl`](../classes/DChartCoordinateTransformImpl.md)

## Table of contents

### Properties

- [id](DChartCoordinateTransform.md#id)
- [scale](DChartCoordinateTransform.md#scale)
- [translate](DChartCoordinateTransform.md#translate)

### Methods

- [bind](DChartCoordinateTransform.md#bind)
- [blend](DChartCoordinateTransform.md#blend)
- [map](DChartCoordinateTransform.md#map)
- [mapAll](DChartCoordinateTransform.md#mapall)
- [set](DChartCoordinateTransform.md#set)
- [unbind](DChartCoordinateTransform.md#unbind)
- [unmap](DChartCoordinateTransform.md#unmap)
- [unmapAll](DChartCoordinateTransform.md#unmapall)

## Properties

### id

• `Readonly` **id**: `number`

Monotonic increasing ID for change detection.

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L25)

___

### scale

• **scale**: `number`

Scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L35)

___

### translate

• **translate**: `number`

Translation amount

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L30)

## Methods

### bind

▸ **bind**(`container`, `direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartCoordinateContainerSub`](DChartCoordinateContainerSub.md)\<`CHART`\> |
| `direction` | [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection-1) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L41)

___

### blend

▸ **blend**(`ratio`, `target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |
| `target` | [`DChartCoordinateTransformMark`](DChartCoordinateTransformMark.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L39)

___

### map

▸ **map**(`value`): `number`

Transforms the given untransformed value to a transformed value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | an untransformed value |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L52)

___

### mapAll

▸ **mapAll**(`values`, `ifrom`, `iend`, `stride`, `offset`): `void`

Transforms the given untransformed values to transformed values.
Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
Here, i is a non-negative integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `number`[] | untransformed values to be transformed |
| `ifrom` | `number` | an index on raw values at which to begin a transformation |
| `iend` | `number` | an index on raw values before which to end a transformation |
| `stride` | `number` | a stride of indices |
| `offset` | `number` | an offset of indices |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L65)

___

### set

▸ **set**(`translate?`, `scale?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translate?` | `number` |
| `scale?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L37)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L45)

___

### unmap

▸ **unmap**(`value`): `number`

Transforms the given transformed value to an untransformed value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | a transformed value |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L72)

___

### unmapAll

▸ **unmapAll**(`values`, `ifrom`, `iend`, `stride`, `offset`): `void`

Transformed the given transformed values to untransformed values.
Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
Here, i is a non-negative integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `number`[] | transformed values to be transformed. |
| `ifrom` | `number` | an index on raw values at which to begin a transformation |
| `iend` | `number` | an index on raw values before which to end a transformation |
| `stride` | `number` | a stride of indices |
| `offset` | `number` | an offset of indices |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform.ts#L85)
