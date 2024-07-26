[Winter Cardinal UI - v0.442.0](../index.md) / DChartSelectionShapeBase

# Class: DChartSelectionShapeBase\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- **`DChartSelectionShapeBase`**

  ↳ [`DChartSelectionGridlineX`](DChartSelectionGridlineX.md)

  ↳ [`DChartSelectionGridlineY`](DChartSelectionGridlineY.md)

  ↳ [`DChartSelectionMarker`](DChartSelectionMarker.md)

## Implements

- [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSelectionShapeBase.md#constructor)

### Properties

- [\_isEnabled](DChartSelectionShapeBase.md#_isenabled)
- [\_newShape](DChartSelectionShapeBase.md#_newshape)
- [\_options](DChartSelectionShapeBase.md#_options)
- [\_shape](DChartSelectionShapeBase.md#_shape)
- [\_state](DChartSelectionShapeBase.md#_state)
- [\_style](DChartSelectionShapeBase.md#_style)
- [\_theme](DChartSelectionShapeBase.md#_theme)

### Methods

- [bind](DChartSelectionShapeBase.md#bind)
- [getTheme](DChartSelectionShapeBase.md#gettheme)
- [getType](DChartSelectionShapeBase.md#gettype)
- [newShape](DChartSelectionShapeBase.md#newshape)
- [set](DChartSelectionShapeBase.md#set)
- [setStyle](DChartSelectionShapeBase.md#setstyle)
- [toTheme](DChartSelectionShapeBase.md#totheme)
- [unbind](DChartSelectionShapeBase.md#unbind)
- [unset](DChartSelectionShapeBase.md#unset)
- [update](DChartSelectionShapeBase.md#update)

## Constructors

### constructor

• **new DChartSelectionShapeBase**\<`CHART`\>(`options?`): [`DChartSelectionShapeBase`](DChartSelectionShapeBase.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)\<`CHART`\> |

#### Returns

[`DChartSelectionShapeBase`](DChartSelectionShapeBase.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L35)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L28)

___

### \_newShape

• `Protected` `Optional` **\_newShape**: (`state`: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)) => [`EShape`](../interfaces/EShape.md)

#### Type declaration

▸ (`state`): [`EShape`](../interfaces/EShape.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

##### Returns

[`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L30)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L27)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L29)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L32)

___

### \_style

• `Protected` **\_style**: [`DChartSelectionStyle`](../index.md#dchartselectionstyle)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L31)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L33)

## Methods

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[bind](../interfaces/DChartSelectionShape.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L54)

___

### getTheme

▸ **getTheme**(`type`): [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L126)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L130)

___

### newShape

▸ **newShape**(`state`, `theme`): [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `theme` | [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md) |

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L79)

___

### set

▸ **set**(`container`, `position`, `mappedPosition`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |
| `series` | ``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[set](../interfaces/DChartSelectionShape.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L83)

___

### setStyle

▸ **setStyle**(`this`, `shape`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `series` | ``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L97)

___

### toTheme

▸ **toTheme**(`options?`): [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)\<`CHART`\> |

#### Returns

[`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L115)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[unbind](../interfaces/DChartSelectionShape.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L72)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[unset](../interfaces/DChartSelectionShape.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L101)

___

### update

▸ **update**(`container`, `position`, `mappedPosition`, `series`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `position` | `IPoint` |
| `mappedPosition` | `IPoint` |
| `series` | ``null`` \| [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\> |

#### Returns

`boolean`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[update](../interfaces/DChartSelectionShape.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L108)
