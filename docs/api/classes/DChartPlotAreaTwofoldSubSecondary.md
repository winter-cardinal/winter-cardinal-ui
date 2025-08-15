[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaTwofoldSubSecondary

# Class: DChartPlotAreaTwofoldSubSecondary\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartPlotAreaTwofoldSubBase`](DChartPlotAreaTwofoldSubBase.md)\<`CHART`\>

  ↳ **`DChartPlotAreaTwofoldSubSecondary`**

## Table of contents

### Constructors

- [constructor](DChartPlotAreaTwofoldSubSecondary.md#constructor)

### Properties

- [\_axis](DChartPlotAreaTwofoldSubSecondary.md#_axis)
- [\_container](DChartPlotAreaTwofoldSubSecondary.md#_container)
- [\_containerBounds](DChartPlotAreaTwofoldSubSecondary.md#_containerbounds)
- [\_coordinate](DChartPlotAreaTwofoldSubSecondary.md#_coordinate)
- [\_isContainerBoundsDirty](DChartPlotAreaTwofoldSubSecondary.md#_iscontainerboundsdirty)
- [\_margin](DChartPlotAreaTwofoldSubSecondary.md#_margin)
- [\_overflowMask](DChartPlotAreaTwofoldSubSecondary.md#_overflowmask)
- [\_plotArea](DChartPlotAreaTwofoldSubSecondary.md#_plotarea)
- [\_series](DChartPlotAreaTwofoldSubSecondary.md#_series)
- [\_workPoint](DChartPlotAreaTwofoldSubSecondary.md#_workpoint)

### Accessors

- [axis](DChartPlotAreaTwofoldSubSecondary.md#axis)
- [chart](DChartPlotAreaTwofoldSubSecondary.md#chart)
- [container](DChartPlotAreaTwofoldSubSecondary.md#container)
- [coordinate](DChartPlotAreaTwofoldSubSecondary.md#coordinate)
- [plotArea](DChartPlotAreaTwofoldSubSecondary.md#plotarea)
- [series](DChartPlotAreaTwofoldSubSecondary.md#series)
- [state](DChartPlotAreaTwofoldSubSecondary.md#state)
- [view](DChartPlotAreaTwofoldSubSecondary.md#view)

### Methods

- [destroy](DChartPlotAreaTwofoldSubSecondary.md#destroy)
- [getAxisBounds](DChartPlotAreaTwofoldSubSecondary.md#getaxisbounds)
- [getContainerBounds](DChartPlotAreaTwofoldSubSecondary.md#getcontainerbounds)
- [getOverflowMask](DChartPlotAreaTwofoldSubSecondary.md#getoverflowmask)
- [getPixelBounds](DChartPlotAreaTwofoldSubSecondary.md#getpixelbounds)
- [getPixelDomain](DChartPlotAreaTwofoldSubSecondary.md#getpixeldomain)
- [getPixelRange](DChartPlotAreaTwofoldSubSecondary.md#getpixelrange)
- [getSelectionBoundsX](DChartPlotAreaTwofoldSubSecondary.md#getselectionboundsx)
- [getSelectionBoundsY](DChartPlotAreaTwofoldSubSecondary.md#getselectionboundsy)
- [off](DChartPlotAreaTwofoldSubSecondary.md#off)
- [on](DChartPlotAreaTwofoldSubSecondary.md#on)
- [toBoundsDirty](DChartPlotAreaTwofoldSubSecondary.md#toboundsdirty)
- [toLocal](DChartPlotAreaTwofoldSubSecondary.md#tolocal)

## Constructors

### constructor

• **new DChartPlotAreaTwofoldSubSecondary**\<`CHART`\>(`plotArea`, `onContainerChange`, `mask`, `margin`, `axisShapeContainer`, `options?`): [`DChartPlotAreaTwofoldSubSecondary`](DChartPlotAreaTwofoldSubSecondary.md)\<`CHART`\>

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

[`DChartPlotAreaTwofoldSubSecondary`](DChartPlotAreaTwofoldSubSecondary.md)\<`CHART`\>

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[constructor](DChartPlotAreaTwofoldSubBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L44)

## Properties

### \_axis

• `Protected` **\_axis**: [`DChartAxisContainerImpl`](DChartAxisContainerImpl.md)\<`CHART`\>

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_axis](DChartPlotAreaTwofoldSubBase.md#_axis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L40)

___

### \_container

• `Protected` **\_container**: [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_container](DChartPlotAreaTwofoldSubBase.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L37)

___

### \_containerBounds

• `Protected` **\_containerBounds**: `Rectangle`

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_containerBounds](DChartPlotAreaTwofoldSubBase.md#_containerbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L33)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_coordinate](DChartPlotAreaTwofoldSubBase.md#_coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L39)

___

### \_isContainerBoundsDirty

• `Protected` **\_isContainerBoundsDirty**: `boolean`

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_isContainerBoundsDirty](DChartPlotAreaTwofoldSubBase.md#_iscontainerboundsdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L32)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_margin](DChartPlotAreaTwofoldSubBase.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L42)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_overflowMask](DChartPlotAreaTwofoldSubBase.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L41)

___

### \_plotArea

• `Protected` **\_plotArea**: [`DChartPlotAreaTwofoldSubParent`](../interfaces/DChartPlotAreaTwofoldSubParent.md)\<`CHART`\>

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_plotArea](DChartPlotAreaTwofoldSubBase.md#_plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L36)

___

### \_series

• `Protected` **\_series**: [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_series](DChartPlotAreaTwofoldSubBase.md#_series)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L38)

___

### \_workPoint

• `Protected` **\_workPoint**: `Point`

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[_workPoint](DChartPlotAreaTwofoldSubBase.md#_workpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L34)

## Accessors

### axis

• `get` **axis**(): [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Inherited from

DChartPlotAreaTwofoldSubBase.axis

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L101)

___

### chart

• `get` **chart**(): `CHART`

#### Returns

`CHART`

#### Inherited from

DChartPlotAreaTwofoldSubBase.chart

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L85)

___

### container

• `get` **container**(): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

DChartPlotAreaTwofoldSubBase.container

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L89)

___

### coordinate

• `get` **coordinate**(): [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Inherited from

DChartPlotAreaTwofoldSubBase.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L97)

___

### plotArea

• `get` **plotArea**(): [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Returns

[`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Inherited from

DChartPlotAreaTwofoldSubBase.plotArea

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L81)

___

### series

• `get` **series**(): [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Returns

[`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Inherited from

DChartPlotAreaTwofoldSubBase.series

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L93)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DChartPlotAreaTwofoldSubBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L105)

___

### view

• `get` **view**(): [`DView`](../interfaces/DView.md)

#### Returns

[`DView`](../interfaces/DView.md)

#### Inherited from

DChartPlotAreaTwofoldSubBase.view

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L109)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[destroy](DChartPlotAreaTwofoldSubBase.md#destroy)

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

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[getAxisBounds](DChartPlotAreaTwofoldSubBase.md#getaxisbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L136)

___

### getContainerBounds

▸ **getContainerBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Overrides

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[getContainerBounds](DChartPlotAreaTwofoldSubBase.md#getcontainerbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-secondary.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-secondary.ts#L41)

___

### getOverflowMask

▸ **getOverflowMask**(): [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Returns

[`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Overrides

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[getOverflowMask](DChartPlotAreaTwofoldSubBase.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-secondary.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-secondary.ts#L16)

___

### getPixelBounds

▸ **getPixelBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Overrides

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[getPixelBounds](DChartPlotAreaTwofoldSubBase.md#getpixelbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-secondary.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-secondary.ts#L34)

___

### getPixelDomain

▸ **getPixelDomain**(`result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[getPixelDomain](DChartPlotAreaTwofoldSubBase.md#getpixeldomain)

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

#### Overrides

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[getPixelRange](DChartPlotAreaTwofoldSubBase.md#getpixelrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-secondary.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-secondary.ts#L26)

___

### getSelectionBoundsX

▸ **getSelectionBoundsX**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[getSelectionBoundsX](DChartPlotAreaTwofoldSubBase.md#getselectionboundsx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L140)

___

### getSelectionBoundsY

▸ **getSelectionBoundsY**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[getSelectionBoundsY](DChartPlotAreaTwofoldSubBase.md#getselectionboundsy)

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

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[off](DChartPlotAreaTwofoldSubBase.md#off)

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

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[on](DChartPlotAreaTwofoldSubBase.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L114)

___

### toBoundsDirty

▸ **toBoundsDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[toBoundsDirty](DChartPlotAreaTwofoldSubBase.md#toboundsdirty)

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

#### Inherited from

[DChartPlotAreaTwofoldSubBase](DChartPlotAreaTwofoldSubBase.md).[toLocal](DChartPlotAreaTwofoldSubBase.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-sub-base.ts#L152)
