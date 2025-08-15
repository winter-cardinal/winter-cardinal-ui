[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaTwofoldSubBase

# Class: DChartPlotAreaTwofoldSubBase\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- **`DChartPlotAreaTwofoldSubBase`**

  ↳ [`DChartPlotAreaTwofoldSubPrimary`](DChartPlotAreaTwofoldSubPrimary.md)

  ↳ [`DChartPlotAreaTwofoldSubSecondary`](DChartPlotAreaTwofoldSubSecondary.md)

## Implements

- [`DChartPlotAreaTwofoldSub`](../interfaces/DChartPlotAreaTwofoldSub.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartPlotAreaTwofoldSubBase.md#constructor)

### Properties

- [\_axis](DChartPlotAreaTwofoldSubBase.md#_axis)
- [\_container](DChartPlotAreaTwofoldSubBase.md#_container)
- [\_containerBounds](DChartPlotAreaTwofoldSubBase.md#_containerbounds)
- [\_coordinate](DChartPlotAreaTwofoldSubBase.md#_coordinate)
- [\_isContainerBoundsDirty](DChartPlotAreaTwofoldSubBase.md#_iscontainerboundsdirty)
- [\_margin](DChartPlotAreaTwofoldSubBase.md#_margin)
- [\_overflowMask](DChartPlotAreaTwofoldSubBase.md#_overflowmask)
- [\_plotArea](DChartPlotAreaTwofoldSubBase.md#_plotarea)
- [\_series](DChartPlotAreaTwofoldSubBase.md#_series)
- [\_workPoint](DChartPlotAreaTwofoldSubBase.md#_workpoint)

### Accessors

- [axis](DChartPlotAreaTwofoldSubBase.md#axis)
- [chart](DChartPlotAreaTwofoldSubBase.md#chart)
- [container](DChartPlotAreaTwofoldSubBase.md#container)
- [coordinate](DChartPlotAreaTwofoldSubBase.md#coordinate)
- [plotArea](DChartPlotAreaTwofoldSubBase.md#plotarea)
- [series](DChartPlotAreaTwofoldSubBase.md#series)
- [state](DChartPlotAreaTwofoldSubBase.md#state)
- [view](DChartPlotAreaTwofoldSubBase.md#view)

### Methods

- [destroy](DChartPlotAreaTwofoldSubBase.md#destroy)
- [getAxisBounds](DChartPlotAreaTwofoldSubBase.md#getaxisbounds)
- [getContainerBounds](DChartPlotAreaTwofoldSubBase.md#getcontainerbounds)
- [getOverflowMask](DChartPlotAreaTwofoldSubBase.md#getoverflowmask)
- [getPixelBounds](DChartPlotAreaTwofoldSubBase.md#getpixelbounds)
- [getPixelDomain](DChartPlotAreaTwofoldSubBase.md#getpixeldomain)
- [getPixelRange](DChartPlotAreaTwofoldSubBase.md#getpixelrange)
- [getSelectionBoundsX](DChartPlotAreaTwofoldSubBase.md#getselectionboundsx)
- [getSelectionBoundsY](DChartPlotAreaTwofoldSubBase.md#getselectionboundsy)
- [off](DChartPlotAreaTwofoldSubBase.md#off)
- [on](DChartPlotAreaTwofoldSubBase.md#on)
- [toBoundsDirty](DChartPlotAreaTwofoldSubBase.md#toboundsdirty)
- [toLocal](DChartPlotAreaTwofoldSubBase.md#tolocal)

## Constructors

### constructor

• **new DChartPlotAreaTwofoldSubBase**\<`CHART`\>(`plotArea`, `onContainerChange`, `mask`, `margin`, `axisShapeContainer`, `options?`): [`DChartPlotAreaTwofoldSubBase`](DChartPlotAreaTwofoldSubBase.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotAreaTwofoldSubParent`](../interfaces/DChartPlotAreaTwofoldSubParent.md)\<`CHART`\> |
| `onContainerChange` | () => `void` |
| `mask` | `boolean` |
| `margin` | `number` |
| `axisShapeContainer` | [`EShapeContainer`](EShapeContainer.md) |
| `options?` | [`DChartPlotAreaTwofoldSubOptions`](../interfaces/DChartPlotAreaTwofoldSubOptions.md)\<`CHART`\> |

#### Returns

[`DChartPlotAreaTwofoldSubBase`](DChartPlotAreaTwofoldSubBase.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L44)

## Properties

### \_axis

• `Protected` **\_axis**: [`DChartAxisContainerImpl`](DChartAxisContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L40)

___

### \_container

• `Protected` **\_container**: [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L37)

___

### \_containerBounds

• `Protected` **\_containerBounds**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L33)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L39)

___

### \_isContainerBoundsDirty

• `Protected` **\_isContainerBoundsDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L32)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L42)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L41)

___

### \_plotArea

• `Protected` **\_plotArea**: [`DChartPlotAreaTwofoldSubParent`](../interfaces/DChartPlotAreaTwofoldSubParent.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L36)

___

### \_series

• `Protected` **\_series**: [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L38)

___

### \_workPoint

• `Protected` **\_workPoint**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L34)

## Accessors

### axis

• `get` **axis**(): [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[axis](../interfaces/DChartPlotAreaTwofoldSub.md#axis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L101)

___

### chart

• `get` **chart**(): `CHART`

#### Returns

`CHART`

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[chart](../interfaces/DChartPlotAreaTwofoldSub.md#chart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L85)

___

### container

• `get` **container**(): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[container](../interfaces/DChartPlotAreaTwofoldSub.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L89)

___

### coordinate

• `get` **coordinate**(): [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[coordinate](../interfaces/DChartPlotAreaTwofoldSub.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L97)

___

### plotArea

• `get` **plotArea**(): [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Returns

[`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[plotArea](../interfaces/DChartPlotAreaTwofoldSub.md#plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L81)

___

### series

• `get` **series**(): [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Returns

[`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[series](../interfaces/DChartPlotAreaTwofoldSub.md#series)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L93)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[state](../interfaces/DChartPlotAreaTwofoldSub.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L105)

___

### view

• `get` **view**(): [`DView`](../interfaces/DView.md)

#### Returns

[`DView`](../interfaces/DView.md)

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[view](../interfaces/DChartPlotAreaTwofoldSub.md#view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L109)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[destroy](../interfaces/DChartPlotAreaTwofoldSub.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L158)

___

### getAxisBounds

▸ **getAxisBounds**(`position`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[getAxisBounds](../interfaces/DChartPlotAreaTwofoldSub.md#getaxisbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L136)

___

### getContainerBounds

▸ **getContainerBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[getContainerBounds](../interfaces/DChartPlotAreaTwofoldSub.md#getcontainerbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L156)

___

### getOverflowMask

▸ **getOverflowMask**(): [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Returns

[`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L79)

___

### getPixelBounds

▸ **getPixelBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[getPixelBounds](../interfaces/DChartPlotAreaTwofoldSub.md#getpixelbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L134)

___

### getPixelDomain

▸ **getPixelDomain**(`result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[getPixelDomain](../interfaces/DChartPlotAreaTwofoldSub.md#getpixeldomain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L125)

___

### getPixelRange

▸ **getPixelRange**(`result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[getPixelRange](../interfaces/DChartPlotAreaTwofoldSub.md#getpixelrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L132)

___

### getSelectionBoundsX

▸ **getSelectionBoundsX**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[getSelectionBoundsX](../interfaces/DChartPlotAreaTwofoldSub.md#getselectionboundsx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L140)

___

### getSelectionBoundsY

▸ **getSelectionBoundsY**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[getSelectionBoundsY](../interfaces/DChartPlotAreaTwofoldSub.md#getselectionboundsy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L144)

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

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[off](../interfaces/DChartPlotAreaTwofoldSub.md#off)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L120)

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

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[on](../interfaces/DChartPlotAreaTwofoldSub.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L114)

___

### toBoundsDirty

▸ **toBoundsDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L148)

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

#### Implementation of

[DChartPlotAreaTwofoldSub](../interfaces/DChartPlotAreaTwofoldSub.md).[toLocal](../interfaces/DChartPlotAreaTwofoldSub.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L152)
