[Winter Cardinal UI - v0.457.0](../index.md) / DChartCoordinateLog

# Class: DChartCoordinateLog\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartCoordinateBase`](DChartCoordinateBase.md)\<`CHART`\>

  ↳ **`DChartCoordinateLog`**

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
- [getPixelDomain](DChartCoordinateLog.md#getpixeldomain)
- [getPixelRange](DChartCoordinateLog.md#getpixelrange)
- [getThemeDefault](DChartCoordinateLog.md#getthemedefault)
- [getType](DChartCoordinateLog.md#gettype)
- [map](DChartCoordinateLog.md#map)
- [mapAll](DChartCoordinateLog.md#mapall)
- [mark](DChartCoordinateLog.md#mark)
- [newMark](DChartCoordinateLog.md#newmark)
- [newRegion](DChartCoordinateLog.md#newregion)
- [newTick](DChartCoordinateLog.md#newtick)
- [newTransform](DChartCoordinateLog.md#newtransform)
- [ticks](DChartCoordinateLog.md#ticks)
- [toFitDomain](DChartCoordinateLog.md#tofitdomain)
- [toFitRange](DChartCoordinateLog.md#tofitrange)
- [toTheme](DChartCoordinateLog.md#totheme)
- [unbind](DChartCoordinateLog.md#unbind)
- [unmap](DChartCoordinateLog.md#unmap)
- [unmapAll](DChartCoordinateLog.md#unmapall)

## Constructors

### constructor

• **new DChartCoordinateLog**\<`CHART`\>(`options?`): [`DChartCoordinateLog`](DChartCoordinateLog.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateOptions`](../interfaces/DChartCoordinateOptions.md) |

#### Returns

[`DChartCoordinateLog`](DChartCoordinateLog.md)\<`CHART`\>

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[constructor](DChartCoordinateBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L46)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_container](DChartCoordinateBase.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L37)

___

### \_direction

• `Protected` **\_direction**: [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection)

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_direction](DChartCoordinateBase.md#_direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L38)

___

### \_from

• `Protected` `Optional` **\_from**: `number`

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_from](DChartCoordinateBase.md#_from)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L43)

___

### \_id

• `Protected` **\_id**: `number`

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_id](DChartCoordinateBase.md#_id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L35)

___

### \_mark

• `Protected` **\_mark**: [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md)

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_mark](DChartCoordinateBase.md#_mark)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L42)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_theme](DChartCoordinateBase.md#_theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L39)

___

### \_tick

• `Protected` **\_tick**: [`DChartCoordinateTick`](../interfaces/DChartCoordinateTick.md)\<`CHART`\>

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_tick](DChartCoordinateBase.md#_tick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L41)

___

### \_to

• `Protected` `Optional` **\_to**: `number`

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_to](DChartCoordinateBase.md#_to)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L44)

___

### \_transform

• `Protected` **\_transform**: [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_transform](DChartCoordinateBase.md#_transform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L36)

___

### \_work

• `Protected` **\_work**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[_work](DChartCoordinateBase.md#_work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L40)

## Accessors

### from

• `get` **from**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

DChartCoordinateBase.from

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L74)

• `set` **from**(`from`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

DChartCoordinateBase.from

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L78)

___

### id

• `get` **id**(): `number`

Monotonic increasing ID for change detection.

#### Returns

`number`

#### Inherited from

DChartCoordinateBase.id

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L237)

___

### to

• `get` **to**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

DChartCoordinateBase.to

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L82)

• `set` **to**(`to`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

DChartCoordinateBase.to

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L86)

___

### transform

• `get` **transform**(): [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Returns

[`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Inherited from

DChartCoordinateBase.transform

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[bind](DChartCoordinateBase.md#bind)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[blend](DChartCoordinateBase.md#blend)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[doFit](DChartCoordinateBase.md#dofit)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[doFit_](DChartCoordinateBase.md#dofit_)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[fit](DChartCoordinateBase.md#fit)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[getPixelDomain](DChartCoordinateBase.md#getpixeldomain)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[getPixelRange](DChartCoordinateBase.md#getpixelrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L159)

___

### getThemeDefault

▸ **getThemeDefault**(): [`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Returns

[`DThemeChartCoordinate`](../interfaces/DThemeChartCoordinate.md)

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[getThemeDefault](DChartCoordinateBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L296)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[getType](DChartCoordinateBase.md#gettype)

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

#### Overrides

[DChartCoordinateBase](DChartCoordinateBase.md).[map](DChartCoordinateBase.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L16)

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

#### Overrides

[DChartCoordinateBase](DChartCoordinateBase.md).[mapAll](DChartCoordinateBase.md#mapall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L20)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[mark](DChartCoordinateBase.md#mark)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L108)

___

### newMark

▸ **newMark**(): [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md)

#### Returns

[`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md)

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[newMark](DChartCoordinateBase.md#newmark)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L70)

___

### newRegion

▸ **newRegion**(): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[newRegion](DChartCoordinateBase.md#newregion)

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

#### Overrides

[DChartCoordinateBase](DChartCoordinateBase.md).[newTick](DChartCoordinateBase.md#newtick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L12)

___

### newTransform

▸ **newTransform**(`options?`): [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTransformOptions`](../interfaces/DChartCoordinateTransformOptions.md) |

#### Returns

[`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)\<`CHART`\>

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[newTransform](DChartCoordinateBase.md#newtransform)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[ticks](DChartCoordinateBase.md#ticks)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[toFitDomain](DChartCoordinateBase.md#tofitdomain)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[toFitRange](DChartCoordinateBase.md#tofitrange)

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

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[toTheme](DChartCoordinateBase.md#totheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-base.ts#L292)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartCoordinateBase](DChartCoordinateBase.md).[unbind](DChartCoordinateBase.md#unbind)

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

#### Overrides

[DChartCoordinateBase](DChartCoordinateBase.md).[unmap](DChartCoordinateBase.md#unmap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L34)

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

#### Overrides

[DChartCoordinateBase](DChartCoordinateBase.md).[unmapAll](DChartCoordinateBase.md#unmapall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-log.ts#L38)
