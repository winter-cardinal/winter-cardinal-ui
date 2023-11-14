[Winter Cardinal UI - v0.374.0](../index.md) / DChartAxisBase

# Class: DChartAxisBase\<CHART, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `THEME` | extends [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) = [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `OPTIONS` | extends [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\> = [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\> |

## Hierarchy

- **`DChartAxisBase`**

  ↳ [`DChartAxisX`](DChartAxisX.md)

  ↳ [`DChartAxisY`](DChartAxisY.md)

## Implements

- [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisBase.md#constructor)

### Properties

- [\_bar](DChartAxisBase.md#_bar)
- [\_container](DChartAxisBase.md#_container)
- [\_guide](DChartAxisBase.md#_guide)
- [\_index](DChartAxisBase.md#_index)
- [\_parser](DChartAxisBase.md#_parser)
- [\_theme](DChartAxisBase.md#_theme)
- [\_tick](DChartAxisBase.md#_tick)

### Accessors

- [bar](DChartAxisBase.md#bar)
- [coordinate](DChartAxisBase.md#coordinate)
- [guide](DChartAxisBase.md#guide)
- [padding](DChartAxisBase.md#padding)
- [position](DChartAxisBase.md#position)
- [tick](DChartAxisBase.md#tick)

### Methods

- [bind](DChartAxisBase.md#bind)
- [destroy](DChartAxisBase.md#destroy)
- [getThemeDefault](DChartAxisBase.md#getthemedefault)
- [getType](DChartAxisBase.md#gettype)
- [newBar](DChartAxisBase.md#newbar)
- [newGuide](DChartAxisBase.md#newguide)
- [newParser](DChartAxisBase.md#newparser)
- [newTick](DChartAxisBase.md#newtick)
- [onRender](DChartAxisBase.md#onrender)
- [toTheme](DChartAxisBase.md#totheme)
- [unbind](DChartAxisBase.md#unbind)
- [update](DChartAxisBase.md#update)

## Constructors

### constructor

• **new DChartAxisBase**\<`CHART`, `THEME`, `OPTIONS`\>(`options?`): [`DChartAxisBase`](DChartAxisBase.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `THEME` | extends [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) = [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `OPTIONS` | extends [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\> = [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisBase`](DChartAxisBase.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L35)

## Properties

### \_bar

• `Protected` **\_bar**: [`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L31)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L29)

___

### \_guide

• `Protected` **\_guide**: [`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L33)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L30)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<`THEME`, [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L28)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L27)

___

### \_tick

• `Protected` **\_tick**: [`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L32)

## Accessors

### bar

• `get` **bar**(): [`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Returns

[`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[bar](../interfaces/DChartAxis.md#bar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L74)

___

### coordinate

• `get` **coordinate**(): `number`

#### Returns

`number`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[coordinate](../interfaces/DChartAxis.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L58)

• `set` **coordinate**(`coordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | `number` |

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[coordinate](../interfaces/DChartAxis.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L62)

___

### guide

• `get` **guide**(): [`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[guide](../interfaces/DChartAxis.md#guide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L98)

___

### padding

• `get` **padding**(): `number`

#### Returns

`number`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[padding](../interfaces/DChartAxis.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L66)

• `set` **padding**(`padding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `padding` | `number` |

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[padding](../interfaces/DChartAxis.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L70)

___

### position

• `get` **position**(): [`DChartAxisPosition`](../index.md#dchartaxisposition-1)

#### Returns

[`DChartAxisPosition`](../index.md#dchartaxisposition-1)

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[position](../interfaces/DChartAxis.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L50)

• `set` **position**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition-1) |

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[position](../interfaces/DChartAxis.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L54)

___

### tick

• `get` **tick**(): [`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[tick](../interfaces/DChartAxis.md#tick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L86)

## Methods

### bind

▸ **bind**(`container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[bind](../interfaces/DChartAxis.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L115)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[destroy](../interfaces/DChartAxis.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L149)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L160)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L164)

___

### newBar

▸ **newBar**(`parser`, `theme`, `options?`): [`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<`THEME`, [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\>\> |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L78)

___

### newGuide

▸ **newGuide**(`parser`, `theme`, `options?`): [`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<`THEME`, [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\>\> |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L102)

___

### newParser

▸ **newParser**(`theme`, `options?`): [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<`THEME`, [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<`THEME`, [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L46)

___

### newTick

▸ **newTick**(`parser`, `theme`, `options?`): [`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<`THEME`, [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\>\> |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L90)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[onRender](../interfaces/DChartAxis.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L143)

___

### toTheme

▸ **toTheme**(`options?`): `THEME`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\> |

#### Returns

`THEME`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L156)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[unbind](../interfaces/DChartAxis.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L123)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxis](../interfaces/DChartAxis.md).[update](../interfaces/DChartAxis.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L131)
