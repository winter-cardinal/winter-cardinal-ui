[Winter Cardinal UI - v0.442.0](../index.md) / DChartSelectionGridlineX

# Class: DChartSelectionGridlineX\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSelectionShapeBase`](DChartSelectionShapeBase.md)\<`CHART`\>

  ↳ **`DChartSelectionGridlineX`**

## Table of contents

### Constructors

- [constructor](DChartSelectionGridlineX.md#constructor)

### Properties

- [\_isEnabled](DChartSelectionGridlineX.md#_isenabled)
- [\_newShape](DChartSelectionGridlineX.md#_newshape)
- [\_options](DChartSelectionGridlineX.md#_options)
- [\_shape](DChartSelectionGridlineX.md#_shape)
- [\_state](DChartSelectionGridlineX.md#_state)
- [\_style](DChartSelectionGridlineX.md#_style)
- [\_theme](DChartSelectionGridlineX.md#_theme)

### Methods

- [bind](DChartSelectionGridlineX.md#bind)
- [getTheme](DChartSelectionGridlineX.md#gettheme)
- [getType](DChartSelectionGridlineX.md#gettype)
- [newShape](DChartSelectionGridlineX.md#newshape)
- [set](DChartSelectionGridlineX.md#set)
- [setStyle](DChartSelectionGridlineX.md#setstyle)
- [toTheme](DChartSelectionGridlineX.md#totheme)
- [unbind](DChartSelectionGridlineX.md#unbind)
- [unset](DChartSelectionGridlineX.md#unset)
- [update](DChartSelectionGridlineX.md#update)

## Constructors

### constructor

• **new DChartSelectionGridlineX**\<`CHART`\>(`options?`): [`DChartSelectionGridlineX`](DChartSelectionGridlineX.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)\<`CHART`\> |

#### Returns

[`DChartSelectionGridlineX`](DChartSelectionGridlineX.md)\<`CHART`\>

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[constructor](DChartSelectionShapeBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L35)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_isEnabled](DChartSelectionShapeBase.md#_isenabled)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_newShape](DChartSelectionShapeBase.md#_newshape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L30)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)\<`CHART`\>

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_options](DChartSelectionShapeBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L27)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`EShape`](../interfaces/EShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_shape](DChartSelectionShapeBase.md#_shape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L29)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_state](DChartSelectionShapeBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L32)

___

### \_style

• `Protected` **\_style**: [`DChartSelectionStyle`](../index.md#dchartselectionstyle)\<`CHART`\>

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_style](DChartSelectionShapeBase.md#_style)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L31)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_theme](DChartSelectionShapeBase.md#_theme)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[bind](DChartSelectionShapeBase.md#bind)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[getTheme](DChartSelectionShapeBase.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L126)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[getType](DChartSelectionShapeBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-x.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-x.ts#L34)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[newShape](DChartSelectionShapeBase.md#newshape)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[set](DChartSelectionShapeBase.md#set)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[setStyle](DChartSelectionShapeBase.md#setstyle)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[toTheme](DChartSelectionShapeBase.md#totheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L115)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[unbind](DChartSelectionShapeBase.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L72)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[unset](DChartSelectionShapeBase.md#unset)

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

#### Overrides

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[update](DChartSelectionShapeBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-x.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-x.ts#L15)
