[Winter Cardinal UI - v0.407.0](../index.md) / DChartAxisY

# Class: DChartAxisY\<CHART, THEME, OPTIONS\>

An Y axis.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `THEME` | extends [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) = [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `OPTIONS` | extends [`DChartAxisYOptions`](../interfaces/DChartAxisYOptions.md)\<`THEME`\> = [`DChartAxisYOptions`](../interfaces/DChartAxisYOptions.md)\<`THEME`\> |

## Hierarchy

- [`DChartAxisBase`](DChartAxisBase.md)\<`CHART`, `THEME`, `OPTIONS`\>

  ↳ **`DChartAxisY`**

## Table of contents

### Constructors

- [constructor](DChartAxisY.md#constructor)

### Properties

- [\_bar](DChartAxisY.md#_bar)
- [\_container](DChartAxisY.md#_container)
- [\_guide](DChartAxisY.md#_guide)
- [\_index](DChartAxisY.md#_index)
- [\_parser](DChartAxisY.md#_parser)
- [\_theme](DChartAxisY.md#_theme)
- [\_tick](DChartAxisY.md#_tick)

### Accessors

- [bar](DChartAxisY.md#bar)
- [coordinate](DChartAxisY.md#coordinate)
- [guide](DChartAxisY.md#guide)
- [padding](DChartAxisY.md#padding)
- [position](DChartAxisY.md#position)
- [tick](DChartAxisY.md#tick)

### Methods

- [bind](DChartAxisY.md#bind)
- [destroy](DChartAxisY.md#destroy)
- [getThemeDefault](DChartAxisY.md#getthemedefault)
- [getType](DChartAxisY.md#gettype)
- [newBar](DChartAxisY.md#newbar)
- [newGuide](DChartAxisY.md#newguide)
- [newParser](DChartAxisY.md#newparser)
- [newTick](DChartAxisY.md#newtick)
- [onRender](DChartAxisY.md#onrender)
- [toTheme](DChartAxisY.md#totheme)
- [unbind](DChartAxisY.md#unbind)
- [update](DChartAxisY.md#update)

## Constructors

### constructor

• **new DChartAxisY**\<`CHART`, `THEME`, `OPTIONS`\>(`options?`): [`DChartAxisY`](DChartAxisY.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `THEME` | extends [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) = [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `OPTIONS` | extends [`DChartAxisYOptions`](../interfaces/DChartAxisYOptions.md)\<`THEME`\> = [`DChartAxisYOptions`](../interfaces/DChartAxisYOptions.md)\<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisY`](DChartAxisY.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[constructor](DChartAxisBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L35)

## Properties

### \_bar

• `Protected` **\_bar**: [`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_bar](DChartAxisBase.md#_bar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L31)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_container](DChartAxisBase.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L29)

___

### \_guide

• `Protected` **\_guide**: [`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_guide](DChartAxisBase.md#_guide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L33)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_index](DChartAxisBase.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L30)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<`THEME`, [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\>\>

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_parser](DChartAxisBase.md#_parser)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L28)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_theme](DChartAxisBase.md#_theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L27)

___

### \_tick

• `Protected` **\_tick**: [`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[_tick](DChartAxisBase.md#_tick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L32)

## Accessors

### bar

• `get` **bar**(): [`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Returns

[`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Inherited from

DChartAxisBase.bar

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L74)

___

### coordinate

• `get` **coordinate**(): `number`

#### Returns

`number`

#### Inherited from

DChartAxisBase.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L58)

• `set` **coordinate**(`coordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | `number` |

#### Returns

`void`

#### Inherited from

DChartAxisBase.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L62)

___

### guide

• `get` **guide**(): [`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Inherited from

DChartAxisBase.guide

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L98)

___

### padding

• `get` **padding**(): `number`

#### Returns

`number`

#### Inherited from

DChartAxisBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L66)

• `set` **padding**(`padding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `padding` | `number` |

#### Returns

`void`

#### Inherited from

DChartAxisBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L70)

___

### position

• `get` **position**(): [`DChartAxisPosition`](../index.md#dchartaxisposition-1)

#### Returns

[`DChartAxisPosition`](../index.md#dchartaxisposition-1)

#### Inherited from

DChartAxisBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L50)

• `set` **position**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition-1) |

#### Returns

`void`

#### Inherited from

DChartAxisBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L54)

___

### tick

• `get` **tick**(): [`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Inherited from

DChartAxisBase.tick

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L86)

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

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[bind](DChartAxisBase.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L115)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[destroy](DChartAxisBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L149)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[getThemeDefault](DChartAxisBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L160)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DChartAxisBase](DChartAxisBase.md).[getType](DChartAxisBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-y.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-y.ts#L21)

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

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[newBar](DChartAxisBase.md#newbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L78)

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

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[newGuide](DChartAxisBase.md#newguide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L102)

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

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[newParser](DChartAxisBase.md#newparser)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L46)

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

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[newTick](DChartAxisBase.md#newtick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L90)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[onRender](DChartAxisBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L143)

___

### toTheme

▸ **toTheme**(`options?`): `THEME`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\> |

#### Returns

`THEME`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[toTheme](DChartAxisBase.md#totheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L156)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[unbind](DChartAxisBase.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L123)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisBase](DChartAxisBase.md).[update](DChartAxisBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L131)
