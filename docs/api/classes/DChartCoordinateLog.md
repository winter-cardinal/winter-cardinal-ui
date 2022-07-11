[Winter Cardinal UI - v0.199.0](../index.md) / DChartCoordinateLog

# Class: DChartCoordinateLog<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartCoordinateLog.md#constructor)

### Properties

- [\_container](DChartCoordinateLog.md#_container)
- [\_direction](DChartCoordinateLog.md#_direction)
- [\_from](DChartCoordinateLog.md#_from)
- [\_id](DChartCoordinateLog.md#_id)
- [\_mark](DChartCoordinateLog.md#_mark)
- [\_theme](DChartCoordinateLog.md#_theme)
- [\_tick](DChartCoordinateLog.md#_tick)
- [\_to](DChartCoordinateLog.md#_to)
- [\_transform](DChartCoordinateLog.md#_transform)
- [\_work](DChartCoordinateLog.md#_work)

### Accessors

- [from](DChartCoordinateLog.md#from)
- [id](DChartCoordinateLog.md#id)
- [to](DChartCoordinateLog.md#to)
- [transform](DChartCoordinateLog.md#transform)

### Methods

- [bind](DChartCoordinateLog.md#bind)
- [blend](DChartCoordinateLog.md#blend)
- [doFit](DChartCoordinateLog.md#dofit)
- [doFit\_](DChartCoordinateLog.md#dofit_)
- [fit](DChartCoordinateLog.md#fit)
- [getThemeDefault](DChartCoordinateLog.md#getthemedefault)
- [getType](DChartCoordinateLog.md#gettype)
- [map](DChartCoordinateLog.md#map)
- [mapAll](DChartCoordinateLog.md#mapall)
- [mark](DChartCoordinateLog.md#mark)
- [ticks](DChartCoordinateLog.md#ticks)
- [toFitDomain](DChartCoordinateLog.md#tofitdomain)
- [toFitRange](DChartCoordinateLog.md#tofitrange)
- [toTheme](DChartCoordinateLog.md#totheme)
- [unbind](DChartCoordinateLog.md#unbind)
- [unmap](DChartCoordinateLog.md#unmap)
- [unmapAll](DChartCoordinateLog.md#unmapall)

## Constructors

### constructor

• **new DChartCoordinateLog**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateOptions`](../interfaces/DChartCoordinateOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L42)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L33)

___

### \_direction

• `Protected` **\_direction**: [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L34)

___

### \_from

• `Protected` `Optional` **\_from**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L39)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L31)

___

### \_mark

• `Protected` **\_mark**: [`DChartCoordinateTransformMarkImpl`](DChartCoordinateTransformMarkImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L38)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L35)

___

### \_tick

• `Protected` **\_tick**: [`DChartCoordinateTick`](../interfaces/DChartCoordinateTick.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L37)

___

### \_to

• `Protected` `Optional` **\_to**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L40)

___

### \_transform

• `Protected` **\_transform**: [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L32)

___

### \_work

• `Protected` **\_work**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L36)

## Accessors

### from

• `get` **from**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[from](../interfaces/DChartCoordinate.md#from)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L54)

• `set` **from**(`from`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[from](../interfaces/DChartCoordinate.md#from)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L58)

___

### id

• `get` **id**(): `number`

Monotonic increasing ID for change detection.

#### Returns

`number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[id](../interfaces/DChartCoordinate.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L200)

___

### to

• `get` **to**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[to](../interfaces/DChartCoordinate.md#to)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L62)

• `set` **to**(`to`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[to](../interfaces/DChartCoordinate.md#to)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L66)

___

### transform

• `get` **transform**(): [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\>

#### Returns

[`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\>

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[transform](../interfaces/DChartCoordinate.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L204)

## Methods

### bind

▸ **bind**(`container`, `direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)<`CHART`\> |
| `direction` | [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection) |

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[bind](../interfaces/DChartCoordinate.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L70)

___

### blend

▸ **blend**(`ratio`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[blend](../interfaces/DChartCoordinate.md#blend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L94)

___

### doFit

▸ `Protected` **doFit**(`from`, `to`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |
| `to` | `undefined` \| `number` |
| `result` | [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md) \| [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L98)

___

### doFit\_

▸ `Protected` **doFit_**(`pixelFrom`, `pixelTo`, `region`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixelFrom` | `number` |
| `pixelTo` | `number` |
| `region` | [`DChartRegion`](../interfaces/DChartRegion.md) |
| `result` | [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md) \| [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L171)

___

### fit

▸ **fit**(`from?`, `to?`): `void`

Adjusts the transform so that mapped points of the given range fit into the plot area
if the plot area container's localTransform is an identity matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[fit](../interfaces/DChartCoordinate.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L82)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Returns

[`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L259)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L263)

___

### map

▸ **map**(`value`): `number`

Transforms the given raw value to the untransformed value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[map](../interfaces/DChartCoordinate.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L208)

___

### mapAll

▸ **mapAll**(`values`, `ifrom`, `iend`, `stride`, `offset`): `void`

Transforms the given raw values to untransformed values.
Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
Here, i is a non-negative integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |
| `ifrom` | `number` |
| `iend` | `number` |
| `stride` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[mapAll](../interfaces/DChartCoordinate.md#mapall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L212)

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

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[mark](../interfaces/DChartCoordinate.md#mark)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L86)

___

### ticks

▸ **ticks**(`domainFrom`, `domainTo`, `majorCount`, `majorStep`, `minorCountPerMajor`, `minorCount`, `minorStep`, `majorResult`, `minorResult`): `void`

Returns major / minor tick positions.

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

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[ticks](../interfaces/DChartCoordinate.md#ticks)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L230)

___

### toFitDomain

▸ `Protected` **toFitDomain**(`from`, `to`, `plotArea`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |
| `to` | `undefined` \| `number` |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L129)

___

### toFitRange

▸ `Protected` **toFitRange**(`from`, `to`, `plotArea`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |
| `to` | `undefined` \| `number` |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L150)

___

### toTheme

▸ `Protected` **toTheme**(`options?`): [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateOptions`](../interfaces/DChartCoordinateOptions.md) |

#### Returns

[`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L255)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[unbind](../interfaces/DChartCoordinate.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L78)

___

### unmap

▸ **unmap**(`value`): `number`

Transforms the given untransformed value to the raw value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[unmap](../interfaces/DChartCoordinate.md#unmap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L220)

___

### unmapAll

▸ **unmapAll**(`values`, `ifrom`, `iend`, `stride`, `offset`): `void`

Transforms the given untransformed values to raw values.
Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
Here, i is a non-negative integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |
| `ifrom` | `number` |
| `iend` | `number` |
| `stride` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[unmapAll](../interfaces/DChartCoordinate.md#unmapall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L224)
