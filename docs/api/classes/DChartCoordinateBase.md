[Winter Cardinal UI - v0.457.0](../index.md) / DChartCoordinateBase

# Class: DChartCoordinateBase\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- **`DChartCoordinateBase`**

  ↳ [`DChartCoordinateLinear`](DChartCoordinateLinear.md)

  ↳ [`DChartCoordinateLog`](DChartCoordinateLog.md)

## Implements

- [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartCoordinateBase.md#constructor)

### Properties

- [\_container](DChartCoordinateBase.md#_container)
- [\_direction](DChartCoordinateBase.md#_direction)
- [\_from](DChartCoordinateBase.md#_from)
- [\_id](DChartCoordinateBase.md#_id)
- [\_mark](DChartCoordinateBase.md#_mark)
- [\_theme](DChartCoordinateBase.md#_theme)
- [\_tick](DChartCoordinateBase.md#_tick)
- [\_to](DChartCoordinateBase.md#_to)
- [\_transform](DChartCoordinateBase.md#_transform)
- [\_work](DChartCoordinateBase.md#_work)

### Accessors

- [from](DChartCoordinateBase.md#from)
- [id](DChartCoordinateBase.md#id)
- [to](DChartCoordinateBase.md#to)
- [transform](DChartCoordinateBase.md#transform)

### Methods

- [bind](DChartCoordinateBase.md#bind)
- [blend](DChartCoordinateBase.md#blend)
- [doFit](DChartCoordinateBase.md#dofit)
- [doFit\_](DChartCoordinateBase.md#dofit_)
- [fit](DChartCoordinateBase.md#fit)
- [getPixelDomain](DChartCoordinateBase.md#getpixeldomain)
- [getPixelRange](DChartCoordinateBase.md#getpixelrange)
- [getThemeDefault](DChartCoordinateBase.md#getthemedefault)
- [getType](DChartCoordinateBase.md#gettype)
- [map](DChartCoordinateBase.md#map)
- [mapAll](DChartCoordinateBase.md#mapall)
- [mark](DChartCoordinateBase.md#mark)
- [newMark](DChartCoordinateBase.md#newmark)
- [newRegion](DChartCoordinateBase.md#newregion)
- [newTick](DChartCoordinateBase.md#newtick)
- [newTransform](DChartCoordinateBase.md#newtransform)
- [ticks](DChartCoordinateBase.md#ticks)
- [toFitDomain](DChartCoordinateBase.md#tofitdomain)
- [toFitRange](DChartCoordinateBase.md#tofitrange)
- [toTheme](DChartCoordinateBase.md#totheme)
- [unbind](DChartCoordinateBase.md#unbind)
- [unmap](DChartCoordinateBase.md#unmap)
- [unmapAll](DChartCoordinateBase.md#unmapall)

## Constructors

### constructor

• **new DChartCoordinateBase**\<`CHART`\>(`options?`): [`DChartCoordinateBase`](DChartCoordinateBase.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateOptions`](../interfaces/DChartCoordinateOptions.md) |

#### Returns

[`DChartCoordinateBase`](DChartCoordinateBase.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L46)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L37)

___

### \_direction

• `Protected` **\_direction**: [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L38)

___

### \_from

• `Protected` `Optional` **\_from**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L43)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L35)

___

### \_mark

• `Protected` **\_mark**: [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L42)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L39)

___

### \_tick

• `Protected` **\_tick**: [`DChartCoordinateTick`](../interfaces/DChartCoordinateTick.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L41)

___

### \_to

• `Protected` `Optional` **\_to**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L44)

___

### \_transform

• `Protected` **\_transform**: [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L36)

___

### \_work

• `Protected` **\_work**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L40)

## Accessors

### from

• `get` **from**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[from](../interfaces/DChartCoordinate.md#from)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L74)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L78)

___

### id

• `get` **id**(): `number`

Monotonic increasing ID for change detection.

#### Returns

`number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[id](../interfaces/DChartCoordinate.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L237)

___

### to

• `get` **to**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[to](../interfaces/DChartCoordinate.md#to)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L82)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L86)

___

### transform

• `get` **transform**(): [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Returns

[`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[transform](../interfaces/DChartCoordinate.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L241)

## Methods

### bind

▸ **bind**(`container`, `direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\> |
| `direction` | [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection) |

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[bind](../interfaces/DChartCoordinate.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L90)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L116)

___

### doFit

▸ **doFit**(`from`, `to`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |
| `to` | `undefined` \| `number` |
| `result` | [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md) \| [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L120)

___

### doFit\_

▸ **doFit_**(`pixelFrom`, `pixelTo`, `region`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixelFrom` | `number` |
| `pixelTo` | `number` |
| `region` | [`DChartRegion`](../interfaces/DChartRegion.md) |
| `result` | [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md) \| [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L208)

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

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[fit](../interfaces/DChartCoordinate.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L104)

___

### getPixelDomain

▸ **getPixelDomain**(`plotArea`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L152)

___

### getPixelRange

▸ **getPixelRange**(`plotArea`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L159)

___

### getThemeDefault

▸ **getThemeDefault**(): [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Returns

[`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L296)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L300)

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

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[map](../interfaces/DChartCoordinate.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:245](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L245)

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

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[mapAll](../interfaces/DChartCoordinate.md#mapall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L249)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L108)

___

### newMark

▸ **newMark**(): [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md)

#### Returns

[`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L70)

___

### newRegion

▸ **newRegion**(): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L66)

___

### newTick

▸ **newTick**(`options?`): [`DChartCoordinateTick`](../interfaces/DChartCoordinateTick.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTickOptions`](../interfaces/DChartCoordinateTickOptions.md) |

#### Returns

[`DChartCoordinateTick`](../interfaces/DChartCoordinateTick.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L64)

___

### newTransform

▸ **newTransform**(`options?`): [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTransformOptions`](../interfaces/DChartCoordinateTransformOptions.md) |

#### Returns

[`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L58)

___

### ticks

▸ **ticks**(`domainFrom`, `domainTo`, `domainVisibleFrom`, `domainVisibleTo`, `majorCount`, `majorCapacity`, `majorStep`, `minorCountPerMajor`, `minorCount`, `minorStep`, `majorResult`, `minorResult`): `void`

Returns major / minor tick positions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domainFrom` | `number` | domain lower bound |
| `domainTo` | `number` | domain upper bound |
| `domainVisibleFrom` | `number` | visible domain lower bound |
| `domainVisibleTo` | `number` | visible domain upper bound |
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

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[ticks](../interfaces/DChartCoordinate.md#ticks)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L261)

___

### toFitDomain

▸ **toFitDomain**(`from`, `to`, `plotArea`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |
| `to` | `undefined` \| `number` |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L166)

___

### toFitRange

▸ **toFitRange**(`from`, `to`, `plotArea`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |
| `to` | `undefined` \| `number` |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L187)

___

### toTheme

▸ **toTheme**(`options?`): [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateOptions`](../interfaces/DChartCoordinateOptions.md) |

#### Returns

[`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L292)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[unbind](../interfaces/DChartCoordinate.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L99)

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

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[unmap](../interfaces/DChartCoordinate.md#unmap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L253)

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

#### Implementation of

[DChartCoordinate](../interfaces/DChartCoordinate.md).[unmapAll](../interfaces/DChartCoordinate.md#unmapall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L257)
