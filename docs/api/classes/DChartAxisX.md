[Winter Cardinal UI - v0.199.0](../index.md) / DChartAxisX

# Class: DChartAxisX<CHART, OPTIONS\>

An X axis.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `OPTIONS` | extends [`DChartAxisXOptions`](../interfaces/DChartAxisXOptions.md) = [`DChartAxisXOptions`](../interfaces/DChartAxisXOptions.md) |

## Hierarchy

- [`DChartAxisBase`](DChartAxisBase.md)<`CHART`, `OPTIONS`\>

  ↳ **`DChartAxisX`**

  ↳↳ [`DChartAxisXDatetime`](DChartAxisXDatetime.md)

## Table of contents

### Constructors

- [constructor](DChartAxisX.md#constructor)

### Properties

- [\_bar](DChartAxisX.md#_bar)
- [\_container](DChartAxisX.md#_container)
- [\_coordinateIndex](DChartAxisX.md#_coordinateindex)
- [\_index](DChartAxisX.md#_index)
- [\_label](DChartAxisX.md#_label)
- [\_majorTicks](DChartAxisX.md#_majorticks)
- [\_minorTicks](DChartAxisX.md#_minorticks)
- [\_padding](DChartAxisX.md#_padding)
- [\_position](DChartAxisX.md#_position)
- [\_theme](DChartAxisX.md#_theme)
- [\_tick](DChartAxisX.md#_tick)

### Accessors

- [position](DChartAxisX.md#position)

### Methods

- [bind](DChartAxisX.md#bind)
- [destroy](DChartAxisX.md#destroy)
- [getThemeDefault](DChartAxisX.md#getthemedefault)
- [getType](DChartAxisX.md#gettype)
- [toTheme](DChartAxisX.md#totheme)
- [unbind](DChartAxisX.md#unbind)
- [update](DChartAxisX.md#update)
- [updateBar](DChartAxisX.md#updatebar)
- [updateTicks](DChartAxisX.md#updateticks)
- [updateTicksX](DChartAxisX.md#updateticksx)
- [updateTicksY](DChartAxisX.md#updateticksy)

## Constructors

### constructor

• **new DChartAxisX**<`CHART`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `OPTIONS` | extends [`DChartAxisXOptions`](../interfaces/DChartAxisXOptions.md) = [`DChartAxisXOptions`](../interfaces/DChartAxisXOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[constructor](DChartAxisBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L43)

## Properties

### \_bar

• `Protected` **\_bar**: [`DChartAxisBaseBar`](../interfaces/DChartAxisBaseBar.md)

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_bar](DChartAxisBase.md#_bar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L35)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\>

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_container](DChartAxisBase.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L34)

___

### \_coordinateIndex

• `Protected` **\_coordinateIndex**: `number`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_coordinateIndex](DChartAxisBase.md#_coordinateindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L31)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_index](DChartAxisBase.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L36)

___

### \_label

• `Protected` `Optional` **\_label**: [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_label](DChartAxisBase.md#_label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L40)

___

### \_majorTicks

• `Protected` **\_majorTicks**: `Float64Array`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_majorTicks](DChartAxisBase.md#_majorticks)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L38)

___

### \_minorTicks

• `Protected` **\_minorTicks**: `Float64Array`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_minorTicks](DChartAxisBase.md#_minorticks)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L39)

___

### \_padding

• `Protected` **\_padding**: `number`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_padding](DChartAxisBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L32)

___

### \_position

• `Protected` **\_position**: [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_position](DChartAxisBase.md#_position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L33)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_theme](DChartAxisBase.md#_theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L41)

___

### \_tick

• `Protected` **\_tick**: [`DChartAxisBaseTickContainer`](../interfaces/DChartAxisBaseTickContainer.md)

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_tick](DChartAxisBase.md#_tick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L37)

## Accessors

### position

• `get` **position**(): [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Returns

[`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Inherited from

DChartAxisBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L62)

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

[DChartAxisBase](DChartAxisBase.md).[bind](DChartAxisBase.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L373)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[destroy](DChartAxisBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L523)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Returns

[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[getThemeDefault](DChartAxisBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L563)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DChartAxisBase](DChartAxisBase.md).[getType](DChartAxisBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-x.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-x.ts#L19)

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

[DChartAxisBase](DChartAxisBase.md).[toTheme](DChartAxisBase.md#totheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L559)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[unbind](DChartAxisBase.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L479)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[update](DChartAxisBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:515](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L515)

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

[DChartAxisBase](DChartAxisBase.md).[updateBar](DChartAxisBase.md#updatebar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L66)

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

[DChartAxisBase](DChartAxisBase.md).[updateTicks](DChartAxisBase.md#updateticks)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L271)

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

[DChartAxisBase](DChartAxisBase.md).[updateTicksX](DChartAxisBase.md#updateticksx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L99)

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

[DChartAxisBase](DChartAxisBase.md).[updateTicksY](DChartAxisBase.md#updateticksy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L185)
