[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaTwofoldViewTarget

# Class: DChartPlotAreaTwofoldViewTarget\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) |

## Implements

- [`DViewTarget`](../interfaces/DViewTarget.md)

## Table of contents

### Constructors

- [constructor](DChartPlotAreaTwofoldViewTarget.md#constructor)

### Properties

- [\_position](DChartPlotAreaTwofoldViewTarget.md#_position)
- [\_primary](DChartPlotAreaTwofoldViewTarget.md#_primary)
- [\_scale](DChartPlotAreaTwofoldViewTarget.md#_scale)
- [\_secondary](DChartPlotAreaTwofoldViewTarget.md#_secondary)

### Accessors

- [position](DChartPlotAreaTwofoldViewTarget.md#position)
- [scale](DChartPlotAreaTwofoldViewTarget.md#scale)

### Methods

- [getLocalBounds](DChartPlotAreaTwofoldViewTarget.md#getlocalbounds)

## Constructors

### constructor

• **new DChartPlotAreaTwofoldViewTarget**\<`CHART`\>(`primary`, `secondary`): [`DChartPlotAreaTwofoldViewTarget`](DChartPlotAreaTwofoldViewTarget.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `primary` | [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md) |
| `secondary` | [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md) |

#### Returns

[`DChartPlotAreaTwofoldViewTarget`](DChartPlotAreaTwofoldViewTarget.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts#L53)

## Properties

### \_position

• `Protected` **\_position**: [`DChartPlotAreaTwofoldViewTargetPoint`](DChartPlotAreaTwofoldViewTargetPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts#L51)

___

### \_primary

• `Protected` **\_primary**: [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts#L48)

___

### \_scale

• `Protected` **\_scale**: [`DChartPlotAreaTwofoldViewTargetPoint`](DChartPlotAreaTwofoldViewTargetPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts#L50)

___

### \_secondary

• `Protected` **\_secondary**: [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts#L49)

## Accessors

### position

• `get` **position**(): [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Returns

[`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Implementation of

[DViewTarget](../interfaces/DViewTarget.md).[position](../interfaces/DViewTarget.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts#L67)

___

### scale

• `get` **scale**(): [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Returns

[`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Implementation of

[DViewTarget](../interfaces/DViewTarget.md).[scale](../interfaces/DViewTarget.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts#L63)

## Methods

### getLocalBounds

▸ **getLocalBounds**(`rect`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | `Rectangle` |

#### Returns

`Rectangle`

#### Implementation of

[DViewTarget](../interfaces/DViewTarget.md).[getLocalBounds](../interfaces/DViewTarget.md#getlocalbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-view-target.ts#L71)
