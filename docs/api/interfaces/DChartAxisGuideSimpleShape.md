[Winter Cardinal UI - v0.414.0](../index.md) / DChartAxisGuideSimpleShape

# Interface: DChartAxisGuideSimpleShape\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Implemented by

- [`DChartAxisGuideSimpleShapeImpl`](../classes/DChartAxisGuideSimpleShapeImpl.md)

## Table of contents

### Properties

- [bar](DChartAxisGuideSimpleShape.md#bar)
- [label](DChartAxisGuideSimpleShape.md#label)
- [tick](DChartAxisGuideSimpleShape.md#tick)

### Methods

- [bind](DChartAxisGuideSimpleShape.md#bind)
- [destroy](DChartAxisGuideSimpleShape.md#destroy)
- [unbind](DChartAxisGuideSimpleShape.md#unbind)
- [update](DChartAxisGuideSimpleShape.md#update)

## Properties

### bar

• `Readonly` **bar**: ``null`` \| [`EShapeBar`](../classes/EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts#L81)

___

### label

• `Readonly` **label**: ``null`` \| [`EShapeRectangleRounded`](../classes/EShapeRectangleRounded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts#L82)

___

### tick

• `Readonly` **tick**: ``null`` \| [`EShapeBar`](../classes/EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts#L83)

## Methods

### bind

▸ **bind**(`container`, `index`, `axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](DChartAxisContainer.md)\<`CHART`\> |
| `index` | `number` |
| `axis` | [`DChartAxis`](DChartAxis.md)\<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts#L85)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts#L96)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts#L86)

___

### update

▸ **update**(`position`, `x`, `y`, `visible`, `width`, `height`, `offset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition) |
| `x` | `number` |
| `y` | `number` |
| `visible` | `boolean` |
| `width` | `number` |
| `height` | `number` |
| `offset` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape.ts#L87)
