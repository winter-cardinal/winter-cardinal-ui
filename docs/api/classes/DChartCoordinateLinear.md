[Winter Cardinal UI - v0.165.0](../index.md) / DChartCoordinateLinear

# Class: DChartCoordinateLinear<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartCoordinateLinear.md#constructor)

### Properties

- [\_container](DChartCoordinateLinear.md#_container)
- [\_direction](DChartCoordinateLinear.md#_direction)
- [\_from](DChartCoordinateLinear.md#_from)
- [\_id](DChartCoordinateLinear.md#_id)
- [\_mark](DChartCoordinateLinear.md#_mark)
- [\_theme](DChartCoordinateLinear.md#_theme)
- [\_tick](DChartCoordinateLinear.md#_tick)
- [\_to](DChartCoordinateLinear.md#_to)
- [\_transform](DChartCoordinateLinear.md#_transform)
- [\_work](DChartCoordinateLinear.md#_work)

### Accessors

- [from](DChartCoordinateLinear.md#from)
- [id](DChartCoordinateLinear.md#id)
- [to](DChartCoordinateLinear.md#to)
- [transform](DChartCoordinateLinear.md#transform)

### Methods

- [bind](DChartCoordinateLinear.md#bind)
- [blend](DChartCoordinateLinear.md#blend)
- [doFit](DChartCoordinateLinear.md#dofit)
- [doFit\_](DChartCoordinateLinear.md#dofit_)
- [fit](DChartCoordinateLinear.md#fit)
- [getThemeDefault](DChartCoordinateLinear.md#getthemedefault)
- [getType](DChartCoordinateLinear.md#gettype)
- [map](DChartCoordinateLinear.md#map)
- [mapAll](DChartCoordinateLinear.md#mapall)
- [mark](DChartCoordinateLinear.md#mark)
- [ticks](DChartCoordinateLinear.md#ticks)
- [toFitDomain](DChartCoordinateLinear.md#tofitdomain)
- [toFitRange](DChartCoordinateLinear.md#tofitrange)
- [toTheme](DChartCoordinateLinear.md#totheme)
- [unbind](DChartCoordinateLinear.md#unbind)
- [unmap](DChartCoordinateLinear.md#unmap)
- [unmapAll](DChartCoordinateLinear.md#unmapall)

## Constructors

### constructor

• **new DChartCoordinateLinear**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateOptions`](../interfaces/DChartCoordinateOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L44)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L35)

___

### \_direction

• `Protected` **\_direction**: [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L36)

___

### \_from

• `Protected` `Optional` **\_from**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L41)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L33)

___

### \_mark

• `Protected` **\_mark**: [`DChartCoordinateTransformMarkImpl`](DChartCoordinateTransformMarkImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L40)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L37)

___

### \_tick

• `Protected` **\_tick**: [`DChartCoordinateTick`](../interfaces/DChartCoordinateTick.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L39)

___

### \_to

• `Protected` `Optional` **\_to**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L42)

___

### \_transform

• `Protected` **\_transform**: [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L34)

___

### \_work

• `Protected` **\_work**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L38)

## Accessors

### from

• `get` **from**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[from](../interfaces/DChartCoordinate.md#from)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L56)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L60)

___

### id

• `get` **id**(): `number`

Monotonic increasing ID for change detection.

#### Returns

`number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[id](../interfaces/DChartCoordinate.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L202)

___

### to

• `get` **to**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[to](../interfaces/DChartCoordinate.md#to)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L64)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L68)

___

### transform

• `get` **transform**(): [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\>

#### Returns

[`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\>

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[transform](../interfaces/DChartCoordinate.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L206)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L72)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L98)

___

### doFit

▸ `Protected` **doFit**(`from`, `to`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |
| `to` | `undefined` \| `number` |
| `result` | [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\> \| [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L102)

___

### doFit\_

▸ `Protected` **doFit_**(`pixelFrom`, `pixelTo`, `region`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixelFrom` | `number` |
| `pixelTo` | `number` |
| `region` | [`DChartRegion`](../interfaces/DChartRegion.md) |
| `result` | [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\> \| [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L175)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L86)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Returns

[`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L255)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L259)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L210)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L214)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L90)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L226)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L133)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L154)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L251)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[unbind](../interfaces/DChartCoordinate.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L81)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L218)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-linear.ts#L222)
