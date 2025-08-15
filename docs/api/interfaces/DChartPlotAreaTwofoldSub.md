[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaTwofoldSub

# Interface: DChartPlotAreaTwofoldSub\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Hierarchy

- [`DChartPlotAreaLike`](DChartPlotAreaLike.md)\<`CHART`\>

  ↳ **`DChartPlotAreaTwofoldSub`**

## Implemented by

- [`DChartPlotAreaTwofoldSubBase`](../classes/DChartPlotAreaTwofoldSubBase.md)

## Table of contents

### Properties

- [axis](DChartPlotAreaTwofoldSub.md#axis)
- [chart](DChartPlotAreaTwofoldSub.md#chart)
- [container](DChartPlotAreaTwofoldSub.md#container)
- [coordinate](DChartPlotAreaTwofoldSub.md#coordinate)
- [parent](DChartPlotAreaTwofoldSub.md#parent)
- [plotArea](DChartPlotAreaTwofoldSub.md#plotarea)
- [series](DChartPlotAreaTwofoldSub.md#series)
- [state](DChartPlotAreaTwofoldSub.md#state)
- [view](DChartPlotAreaTwofoldSub.md#view)

### Methods

- [destroy](DChartPlotAreaTwofoldSub.md#destroy)
- [getAxisBounds](DChartPlotAreaTwofoldSub.md#getaxisbounds)
- [getContainerBounds](DChartPlotAreaTwofoldSub.md#getcontainerbounds)
- [getPixelBounds](DChartPlotAreaTwofoldSub.md#getpixelbounds)
- [getPixelDomain](DChartPlotAreaTwofoldSub.md#getpixeldomain)
- [getPixelRange](DChartPlotAreaTwofoldSub.md#getpixelrange)
- [getSelectionBoundsX](DChartPlotAreaTwofoldSub.md#getselectionboundsx)
- [getSelectionBoundsY](DChartPlotAreaTwofoldSub.md#getselectionboundsy)
- [off](DChartPlotAreaTwofoldSub.md#off)
- [on](DChartPlotAreaTwofoldSub.md#on)
- [toLocal](DChartPlotAreaTwofoldSub.md#tolocal)

## Properties

### axis

• `Readonly` **axis**: [`DChartAxisContainer`](DChartAxisContainer.md)\<`CHART`\>

#### Overrides

[DChartPlotAreaLike](DChartPlotAreaLike.md).[axis](DChartPlotAreaLike.md#axis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts#L30)

___

### chart

• `Readonly` **chart**: `CHART`

#### Overrides

[DChartPlotAreaLike](DChartPlotAreaLike.md).[chart](DChartPlotAreaLike.md#chart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts#L26)

___

### container

• `Readonly` **container**: [`DChartPlotAreaContainer`](../classes/DChartPlotAreaContainer.md)

#### Overrides

[DChartPlotAreaLike](DChartPlotAreaLike.md).[container](DChartPlotAreaLike.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts#L27)

___

### coordinate

• `Readonly` **coordinate**: [`DChartCoordinateContainer`](DChartCoordinateContainer.md)\<`CHART`\>

#### Overrides

[DChartPlotAreaLike](DChartPlotAreaLike.md).[coordinate](DChartPlotAreaLike.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts#L29)

___

### parent

• `Optional` **parent**: ``null`` \| [`DApplicationTarget`](DApplicationTarget.md)

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[parent](DChartPlotAreaLike.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L11)

___

### plotArea

• `Readonly` **plotArea**: [`DChartPlotArea`](DChartPlotArea.md)\<`CHART`\>

#### Overrides

[DChartPlotAreaLike](DChartPlotAreaLike.md).[plotArea](DChartPlotAreaLike.md#plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts#L25)

___

### series

• `Readonly` **series**: [`DChartSeriesContainerImpl`](../classes/DChartSeriesContainerImpl.md)\<`CHART`\>

#### Overrides

[DChartPlotAreaLike](DChartPlotAreaLike.md).[series](DChartPlotAreaLike.md#series)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts#L28)

___

### state

• `Readonly` **state**: [`DBaseStateSet`](DBaseStateSet.md)

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[state](DChartPlotAreaLike.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L34)

___

### view

• `Readonly` **view**: [`DView`](DView.md)

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[view](DChartPlotAreaLike.md#view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L33)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts#L33)

___

### getAxisBounds

▸ **getAxisBounds**(`position`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[getAxisBounds](DChartPlotAreaLike.md#getaxisbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L45)

___

### getContainerBounds

▸ **getContainerBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Overrides

[DChartPlotAreaLike](DChartPlotAreaLike.md).[getContainerBounds](DChartPlotAreaLike.md#getcontainerbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub.ts#L32)

___

### getPixelBounds

▸ **getPixelBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[getPixelBounds](DChartPlotAreaLike.md#getpixelbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L44)

___

### getPixelDomain

▸ **getPixelDomain**(`result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[getPixelDomain](DChartPlotAreaLike.md#getpixeldomain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L42)

___

### getPixelRange

▸ **getPixelRange**(`result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[getPixelRange](DChartPlotAreaLike.md#getpixelrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L43)

___

### getSelectionBoundsX

▸ **getSelectionBoundsX**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[getSelectionBoundsX](DChartPlotAreaLike.md#getselectionboundsx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L46)

___

### getSelectionBoundsY

▸ **getSelectionBoundsY**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[getSelectionBoundsY](DChartPlotAreaLike.md#getselectionboundsy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L47)

___

### off

▸ **off**(`name`, `callback?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[off](DChartPlotAreaLike.md#off)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L40)

___

### on

▸ **on**(`name`, `callback`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[on](DChartPlotAreaLike.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L37)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `result?`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPoint` |
| `from?` | `DisplayObject` |
| `result?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Inherited from

[DChartPlotAreaLike](DChartPlotAreaLike.md).[toLocal](DChartPlotAreaLike.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L49)
