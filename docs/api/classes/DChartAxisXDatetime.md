[Winter Cardinal UI - v0.374.0](../index.md) / DChartAxisXDatetime

# Class: DChartAxisXDatetime\<CHART, THEME, OPTIONS\>

An X axis for datetimes.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `THEME` | extends [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) = [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `OPTIONS` | extends [`DChartAxisXDatetimeOptions`](../interfaces/DChartAxisXDatetimeOptions.md)\<`THEME`\> = [`DChartAxisXDatetimeOptions`](../interfaces/DChartAxisXDatetimeOptions.md)\<`THEME`\> |

## Hierarchy

- [`DChartAxisX`](DChartAxisX.md)\<`CHART`, `THEME`, `OPTIONS`\>

  ↳ **`DChartAxisXDatetime`**

## Table of contents

### Constructors

- [constructor](DChartAxisXDatetime.md#constructor)

### Properties

- [\_bar](DChartAxisXDatetime.md#_bar)
- [\_container](DChartAxisXDatetime.md#_container)
- [\_guide](DChartAxisXDatetime.md#_guide)
- [\_index](DChartAxisXDatetime.md#_index)
- [\_parser](DChartAxisXDatetime.md#_parser)
- [\_theme](DChartAxisXDatetime.md#_theme)
- [\_tick](DChartAxisXDatetime.md#_tick)

### Accessors

- [bar](DChartAxisXDatetime.md#bar)
- [coordinate](DChartAxisXDatetime.md#coordinate)
- [guide](DChartAxisXDatetime.md#guide)
- [padding](DChartAxisXDatetime.md#padding)
- [position](DChartAxisXDatetime.md#position)
- [tick](DChartAxisXDatetime.md#tick)

### Methods

- [bind](DChartAxisXDatetime.md#bind)
- [destroy](DChartAxisXDatetime.md#destroy)
- [getThemeDefault](DChartAxisXDatetime.md#getthemedefault)
- [getType](DChartAxisXDatetime.md#gettype)
- [newBar](DChartAxisXDatetime.md#newbar)
- [newGuide](DChartAxisXDatetime.md#newguide)
- [newParser](DChartAxisXDatetime.md#newparser)
- [newTick](DChartAxisXDatetime.md#newtick)
- [onRender](DChartAxisXDatetime.md#onrender)
- [toTheme](DChartAxisXDatetime.md#totheme)
- [unbind](DChartAxisXDatetime.md#unbind)
- [update](DChartAxisXDatetime.md#update)

## Constructors

### constructor

• **new DChartAxisXDatetime**\<`CHART`, `THEME`, `OPTIONS`\>(`options?`): [`DChartAxisXDatetime`](DChartAxisXDatetime.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `THEME` | extends [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) = [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `OPTIONS` | extends [`DChartAxisXDatetimeOptions`](../interfaces/DChartAxisXDatetimeOptions.md)\<`THEME`\> = [`DChartAxisXDatetimeOptions`](../interfaces/DChartAxisXDatetimeOptions.md)\<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisXDatetime`](DChartAxisXDatetime.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Inherited from

[DChartAxisX](DChartAxisX.md).[constructor](DChartAxisX.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L35)

## Properties

### \_bar

• `Protected` **\_bar**: [`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_bar](DChartAxisX.md#_bar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L31)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_container](DChartAxisX.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L29)

___

### \_guide

• `Protected` **\_guide**: [`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_guide](DChartAxisX.md#_guide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L33)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_index](DChartAxisX.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L30)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<`THEME`, [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<`THEME`\>\>

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_parser](DChartAxisX.md#_parser)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L28)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_theme](DChartAxisX.md#_theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L27)

___

### \_tick

• `Protected` **\_tick**: [`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Inherited from

[DChartAxisX](DChartAxisX.md).[_tick](DChartAxisX.md#_tick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L32)

## Accessors

### bar

• `get` **bar**(): [`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Returns

[`DChartAxisBar`](../interfaces/DChartAxisBar.md)\<`CHART`\>

#### Inherited from

DChartAxisX.bar

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L74)

___

### coordinate

• `get` **coordinate**(): `number`

#### Returns

`number`

#### Inherited from

DChartAxisX.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L58)

• `set` **coordinate**(`coordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | `number` |

#### Returns

`void`

#### Inherited from

DChartAxisX.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L62)

___

### guide

• `get` **guide**(): [`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

#### Inherited from

DChartAxisX.guide

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L98)

___

### padding

• `get` **padding**(): `number`

#### Returns

`number`

#### Inherited from

DChartAxisX.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L66)

• `set` **padding**(`padding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `padding` | `number` |

#### Returns

`void`

#### Inherited from

DChartAxisX.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L70)

___

### position

• `get` **position**(): [`DChartAxisPosition`](../index.md#dchartaxisposition-1)

#### Returns

[`DChartAxisPosition`](../index.md#dchartaxisposition-1)

#### Inherited from

DChartAxisX.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L50)

• `set` **position**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition-1) |

#### Returns

`void`

#### Inherited from

DChartAxisX.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L54)

___

### tick

• `get` **tick**(): [`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

#### Inherited from

DChartAxisX.tick

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

#### Inherited from

[DChartAxisX](DChartAxisX.md).[bind](DChartAxisX.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L115)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[destroy](DChartAxisX.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L149)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[getThemeDefault](DChartAxisX.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L160)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DChartAxisX](DChartAxisX.md).[getType](DChartAxisX.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-x-datetime.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-x-datetime.ts#L21)

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

[DChartAxisX](DChartAxisX.md).[newBar](DChartAxisX.md#newbar)

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

#### Inherited from

[DChartAxisX](DChartAxisX.md).[newGuide](DChartAxisX.md#newguide)

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

#### Inherited from

[DChartAxisX](DChartAxisX.md).[newParser](DChartAxisX.md#newparser)

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

#### Inherited from

[DChartAxisX](DChartAxisX.md).[newTick](DChartAxisX.md#newtick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L90)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[onRender](DChartAxisX.md#onrender)

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

#### Inherited from

[DChartAxisX](DChartAxisX.md).[toTheme](DChartAxisX.md#totheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L156)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[unbind](DChartAxisX.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L123)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[DChartAxisX](DChartAxisX.md).[update](DChartAxisX.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base.ts#L131)
