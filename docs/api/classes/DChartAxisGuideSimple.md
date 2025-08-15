[Winter Cardinal UI - v0.457.0](../index.md) / DChartAxisGuideSimple

# Class: DChartAxisGuideSimple\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisGuide`](../interfaces/DChartAxisGuide.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisGuideSimple.md#constructor)

### Properties

- [\_axis](DChartAxisGuideSimple.md#_axis)
- [\_container](DChartAxisGuideSimple.md#_container)
- [\_fixed](DChartAxisGuideSimple.md#_fixed)
- [\_index](DChartAxisGuideSimple.md#_index)
- [\_isShown](DChartAxisGuideSimple.md#_isshown)
- [\_options](DChartAxisGuideSimple.md#_options)
- [\_position](DChartAxisGuideSimple.md#_position)
- [\_shape](DChartAxisGuideSimple.md#_shape)
- [WORK\_POINT](DChartAxisGuideSimple.md#work_point)
- [WORK\_REGION](DChartAxisGuideSimple.md#work_region)

### Accessors

- [position](DChartAxisGuideSimple.md#position)
- [shape](DChartAxisGuideSimple.md#shape)

### Methods

- [bind](DChartAxisGuideSimple.md#bind)
- [destroy](DChartAxisGuideSimple.md#destroy)
- [getPositionX](DChartAxisGuideSimple.md#getpositionx)
- [getPositionY](DChartAxisGuideSimple.md#getpositiony)
- [hide](DChartAxisGuideSimple.md#hide)
- [isHidden](DChartAxisGuideSimple.md#ishidden)
- [isShown](DChartAxisGuideSimple.md#isshown)
- [newShape](DChartAxisGuideSimple.md#newshape)
- [show](DChartAxisGuideSimple.md#show)
- [unbind](DChartAxisGuideSimple.md#unbind)
- [update](DChartAxisGuideSimple.md#update)

## Constructors

### constructor

• **new DChartAxisGuideSimple**\<`CHART`\>(`options?`): [`DChartAxisGuideSimple`](DChartAxisGuideSimple.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleOptions`](../interfaces/DChartAxisGuideSimpleOptions.md) |

#### Returns

[`DChartAxisGuideSimple`](DChartAxisGuideSimple.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L34)

## Properties

### \_axis

• `Protected` `Optional` **\_axis**: [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L25)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L27)

___

### \_fixed

• `Protected` **\_fixed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L31)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L28)

___

### \_isShown

• `Protected` **\_isShown**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L32)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartAxisGuideSimpleOptions`](../interfaces/DChartAxisGuideSimpleOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L26)

___

### \_position

• `Protected` **\_position**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L30)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L29)

___

### WORK\_POINT

▪ `Static` `Protected` `Optional` **WORK\_POINT**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L22)

___

### WORK\_REGION

▪ `Static` `Protected` `Optional` **WORK\_REGION**: [`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L23)

## Accessors

### position

• `get` **position**(): `number`

#### Returns

`number`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[position](../interfaces/DChartAxisGuide.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L60)

• `set` **position**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`void`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[position](../interfaces/DChartAxisGuide.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L64)

___

### shape

• `get` **shape**(): [`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Returns

[`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L47)

## Methods

### bind

▸ **bind**(`container`, `index`, `axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\> |
| `index` | `number` |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[bind](../interfaces/DChartAxisGuide.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L86)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[destroy](../interfaces/DChartAxisGuide.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L193)

___

### getPositionX

▸ **getPositionX**(`axis`, `plotArea`, `plotAreaX`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\> |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `plotAreaX` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L149)

___

### getPositionY

▸ **getPositionY**(`axis`, `plotArea`, `plotAreaY`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\> |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `plotAreaY` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L171)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[hide](../interfaces/DChartAxisGuide.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L77)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[isHidden](../interfaces/DChartAxisGuide.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L82)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[isShown](../interfaces/DChartAxisGuide.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L73)

___

### newShape

▸ **newShape**(): [`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Returns

[`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L56)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[show](../interfaces/DChartAxisGuide.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L68)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[unbind](../interfaces/DChartAxisGuide.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L93)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[update](../interfaces/DChartAxisGuide.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L103)
