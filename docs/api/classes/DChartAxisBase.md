[Winter Cardinal UI - v0.154.0](../index.md) / DChartAxisBase

# Class: DChartAxisBase<CHART, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `OPTIONS` | extends [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) = [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

## Hierarchy

- **`DChartAxisBase`**

  ↳ [`DChartAxisX`](DChartAxisX.md)

  ↳ [`DChartAxisY`](DChartAxisY.md)

## Implements

- [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisBase.md#constructor)

### Properties

- [\_bar](DChartAxisBase.md#_bar)
- [\_container](DChartAxisBase.md#_container)
- [\_coordinateIndex](DChartAxisBase.md#_coordinateindex)
- [\_index](DChartAxisBase.md#_index)
- [\_label](DChartAxisBase.md#_label)
- [\_majorTicks](DChartAxisBase.md#_majorticks)
- [\_minorTicks](DChartAxisBase.md#_minorticks)
- [\_padding](DChartAxisBase.md#_padding)
- [\_position](DChartAxisBase.md#_position)
- [\_theme](DChartAxisBase.md#_theme)
- [\_tick](DChartAxisBase.md#_tick)

### Accessors

- [position](DChartAxisBase.md#position)

### Methods

- [bind](DChartAxisBase.md#bind)
- [destroy](DChartAxisBase.md#destroy)
- [getThemeDefault](DChartAxisBase.md#getthemedefault)
- [getType](DChartAxisBase.md#gettype)
- [toTheme](DChartAxisBase.md#totheme)
- [unbind](DChartAxisBase.md#unbind)
- [update](DChartAxisBase.md#update)
- [updateBar](DChartAxisBase.md#updatebar)
- [updateTicks](DChartAxisBase.md#updateticks)
- [updateTicksX](DChartAxisBase.md#updateticksx)
- [updateTicksY](DChartAxisBase.md#updateticksy)

## Constructors

### constructor

• **new DChartAxisBase**<`CHART`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `OPTIONS` | extends [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) = [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L43)

## Properties

### \_bar

• `Protected` **\_bar**: [`DChartAxisBaseBar`](../interfaces/DChartAxisBaseBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L35)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L34)

___

### \_coordinateIndex

• `Protected` **\_coordinateIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L31)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L36)

___

### \_label

• `Protected` `Optional` **\_label**: [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L40)

___

### \_majorTicks

• `Protected` **\_majorTicks**: `Float64Array`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L38)

___

### \_minorTicks

• `Protected` **\_minorTicks**: `Float64Array`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L39)

___

### \_padding

• `Protected` **\_padding**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L32)

___

### \_position

• `Protected` **\_position**: [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L33)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L41)

___

### \_tick

• `Protected` **\_tick**: [`DChartAxisBaseTickContainer`](../interfaces/DChartAxisBaseTickContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L37)

## Accessors

### position

• `get` **position**(): [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Returns

[`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[position](../interfaces/DChartAxis.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L62)

## Methods

### bind

▸ **bind**(`container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[bind](../interfaces/DChartAxis.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L373)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[destroy](../interfaces/DChartAxis.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L523)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Returns

[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L563)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:567](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L567)

___

### toTheme

▸ `Protected` **toTheme**(`options?`): [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

#### Returns

[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L559)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[unbind](../interfaces/DChartAxis.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L479)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[update](../interfaces/DChartAxis.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:515](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L515)

___

### updateBar

▸ `Protected` **updateBar**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L66)

___

### updateTicks

▸ `Protected` **updateTicks**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L271)

___

### updateTicksX

▸ **updateTicksX**(`domainMin`, `domainMax`, `coordinate`, `majorShapes`, `minorShapes`, `gridlineShapes`, `shapePositionY`, `transform`, `plotAreaHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainMin` | `number` |
| `domainMax` | `number` |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `majorShapes` | [`EShapeBar`](EShapeBar.md)[] |
| `minorShapes` | [`EShapeBar`](EShapeBar.md)[] |
| `gridlineShapes` | `undefined` \| [`EShapeBar`](EShapeBar.md)[] |
| `shapePositionY` | `number` |
| `transform` | `Matrix` |
| `plotAreaHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L99)

___

### updateTicksY

▸ **updateTicksY**(`domainMin`, `domainMax`, `coordinate`, `majorShapes`, `minorShapes`, `gridlineShapes`, `shapePositionX`, `transform`, `plotAreaWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainMin` | `number` |
| `domainMax` | `number` |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `majorShapes` | [`EShapeBar`](EShapeBar.md)[] |
| `minorShapes` | [`EShapeBar`](EShapeBar.md)[] |
| `gridlineShapes` | `undefined` \| [`EShapeBar`](EShapeBar.md)[] |
| `shapePositionX` | `number` |
| `transform` | `Matrix` |
| `plotAreaWidth` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L185)
