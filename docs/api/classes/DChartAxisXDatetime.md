[Winter Cardinal UI - v0.160.0](../index.md) / DChartAxisXDatetime

# Class: DChartAxisXDatetime<CHART, OPTIONS\>

An X axis for datetimes.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `OPTIONS` | extends [`DChartAxisXDatetimeOptions`](../interfaces/DChartAxisXDatetimeOptions.md) = [`DChartAxisXDatetimeOptions`](../interfaces/DChartAxisXDatetimeOptions.md) |

## Hierarchy

- [`DChartAxisX`](DChartAxisX.md)<`CHART`, `OPTIONS`\>

  ↳ **`DChartAxisXDatetime`**

## Table of contents

### Constructors

- [constructor](DChartAxisXDatetime.md#constructor)

### Properties

- [\_bar](DChartAxisXDatetime.md#_bar)
- [\_container](DChartAxisXDatetime.md#_container)
- [\_coordinateIndex](DChartAxisXDatetime.md#_coordinateindex)
- [\_index](DChartAxisXDatetime.md#_index)
- [\_label](DChartAxisXDatetime.md#_label)
- [\_majorTicks](DChartAxisXDatetime.md#_majorticks)
- [\_minorTicks](DChartAxisXDatetime.md#_minorticks)
- [\_padding](DChartAxisXDatetime.md#_padding)
- [\_position](DChartAxisXDatetime.md#_position)
- [\_theme](DChartAxisXDatetime.md#_theme)
- [\_tick](DChartAxisXDatetime.md#_tick)

### Accessors

- [position](DChartAxisXDatetime.md#position)

### Methods

- [bind](DChartAxisXDatetime.md#bind)
- [destroy](DChartAxisXDatetime.md#destroy)
- [getThemeDefault](DChartAxisXDatetime.md#getthemedefault)
- [getType](DChartAxisXDatetime.md#gettype)
- [toTheme](DChartAxisXDatetime.md#totheme)
- [unbind](DChartAxisXDatetime.md#unbind)
- [update](DChartAxisXDatetime.md#update)
- [updateBar](DChartAxisXDatetime.md#updatebar)
- [updateTicks](DChartAxisXDatetime.md#updateticks)
- [updateTicksX](DChartAxisXDatetime.md#updateticksx)
- [updateTicksY](DChartAxisXDatetime.md#updateticksy)

## Constructors

### constructor

• **new DChartAxisXDatetime**<`CHART`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `OPTIONS` | extends [`DChartAxisXDatetimeOptions`](../interfaces/DChartAxisXDatetimeOptions.md) = [`DChartAxisXDatetimeOptions`](../interfaces/DChartAxisXDatetimeOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DChartAxisX](DChartAxisX.md).[constructor](DChartAxisX.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L43)

## Properties

### \_bar

• `Protected` **\_bar**: [`DChartAxisBaseBar`](../interfaces/DChartAxisBaseBar.md)

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_bar](DChartAxisX.md#_bar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L35)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\>

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_container](DChartAxisX.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L34)

___

### \_coordinateIndex

• `Protected` **\_coordinateIndex**: `number`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_coordinateIndex](DChartAxisX.md#_coordinateindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L31)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_index](DChartAxisX.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L36)

___

### \_label

• `Protected` `Optional` **\_label**: [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_label](DChartAxisX.md#_label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L40)

___

### \_majorTicks

• `Protected` **\_majorTicks**: `Float64Array`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_majorTicks](DChartAxisX.md#_majorticks)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L38)

___

### \_minorTicks

• `Protected` **\_minorTicks**: `Float64Array`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_minorTicks](DChartAxisX.md#_minorticks)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L39)

___

### \_padding

• `Protected` **\_padding**: `number`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_padding](DChartAxisX.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L32)

___

### \_position

• `Protected` **\_position**: [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_position](DChartAxisX.md#_position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L33)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_theme](DChartAxisX.md#_theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L41)

___

### \_tick

• `Protected` **\_tick**: [`DChartAxisBaseTickContainer`](../interfaces/DChartAxisBaseTickContainer.md)

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_tick](DChartAxisX.md#_tick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L37)

## Accessors

### position

• `get` **position**(): [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Returns

[`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Inherited from

DChartAxisX.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L62)

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

#### Inherited from

[DChartAxisX](DChartAxisX.md).[bind](DChartAxisX.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L373)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[destroy](DChartAxisX.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L523)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Returns

[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Inherited from

[DChartAxisX](DChartAxisX.md).[getThemeDefault](DChartAxisX.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L563)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DChartAxisX](DChartAxisX.md).[getType](DChartAxisX.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-x-datetime.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-x-datetime.ts#L18)

___

### toTheme

▸ `Protected` **toTheme**(`options?`): [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

#### Returns

[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Inherited from

[DChartAxisX](DChartAxisX.md).[toTheme](DChartAxisX.md#totheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L559)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[unbind](DChartAxisX.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L479)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[update](DChartAxisX.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:515](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L515)

___

### updateBar

▸ `Protected` **updateBar**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\> |

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[updateBar](DChartAxisX.md#updatebar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L66)

___

### updateTicks

▸ `Protected` **updateTicks**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\> |

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[updateTicks](DChartAxisX.md#updateticks)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L271)

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

#### Inherited from

[DChartAxisX](DChartAxisX.md).[updateTicksX](DChartAxisX.md#updateticksx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L99)

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

#### Inherited from

[DChartAxisX](DChartAxisX.md).[updateTicksY](DChartAxisX.md#updateticksy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L185)
