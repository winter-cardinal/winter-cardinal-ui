[Winter Cardinal UI - v0.414.0](../index.md) / DChartAxisGuideSimple

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
- [\_index](DChartAxisGuideSimple.md#_index)
- [\_isShown](DChartAxisGuideSimple.md#_isshown)
- [\_options](DChartAxisGuideSimple.md#_options)
- [\_position](DChartAxisGuideSimple.md#_position)
- [\_shape](DChartAxisGuideSimple.md#_shape)
- [\_work](DChartAxisGuideSimple.md#_work)

### Accessors

- [position](DChartAxisGuideSimple.md#position)
- [shape](DChartAxisGuideSimple.md#shape)

### Methods

- [bind](DChartAxisGuideSimple.md#bind)
- [destroy](DChartAxisGuideSimple.md#destroy)
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

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L27)

## Properties

### \_axis

• `Protected` `Optional` **\_axis**: [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L18)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L20)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L21)

___

### \_isShown

• `Protected` **\_isShown**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L25)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartAxisGuideSimpleOptions`](../interfaces/DChartAxisGuideSimpleOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L19)

___

### \_position

• `Protected` **\_position**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L23)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L22)

___

### \_work

• `Protected` **\_work**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L24)

## Accessors

### position

• `get` **position**(): `number`

#### Returns

`number`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[position](../interfaces/DChartAxisGuide.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L48)

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

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L52)

___

### shape

• `get` **shape**(): [`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Returns

[`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L74)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[destroy](../interfaces/DChartAxisGuide.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L167)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[hide](../interfaces/DChartAxisGuide.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L65)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[isHidden](../interfaces/DChartAxisGuide.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L70)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[isShown](../interfaces/DChartAxisGuide.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L61)

___

### newShape

▸ **newShape**(): [`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Returns

[`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L44)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[show](../interfaces/DChartAxisGuide.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L56)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[unbind](../interfaces/DChartAxisGuide.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L81)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisGuide](../interfaces/DChartAxisGuide.md).[update](../interfaces/DChartAxisGuide.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple.ts#L91)
