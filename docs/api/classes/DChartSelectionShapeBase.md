[Winter Cardinal UI - v0.164.0](../index.md) / DChartSelectionShapeBase

# Class: DChartSelectionShapeBase<CHART\>

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

- [`DChartSelectionShape`](../interfaces/DChartSelectionShape.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSelectionShapeBase.md#constructor)

### Properties

- [\_isEnabled](DChartSelectionShapeBase.md#_isenabled)
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

• **new DChartSelectionShapeBase**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)<`CHART`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L32)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L26)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L27)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L29)

___

### \_style

• `Protected` **\_style**: [`DChartSelectionStyle`](../index.md#dchartselectionstyle)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L28)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L30)

## Methods

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[bind](../interfaces/DChartSelectionShape.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L42)

___

### getTheme

▸ `Protected` **getTheme**(`type`): [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L102)

___

### getType

▸ `Protected` `Abstract` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L106)

___

### newShape

▸ `Protected` **newShape**(`theme`): [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md) |

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L58)

___

### set

▸ **set**(`container`, `mappedPosition`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `mappedPosition` | `IPoint` |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[set](../interfaces/DChartSelectionShape.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L62)

___

### setStyle

▸ `Protected` **setStyle**(`this`, `shape`, `series`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `series` | [`DChartSeries`](../interfaces/DChartSeries.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L75)

___

### toTheme

▸ `Protected` **toTheme**(`options?`): [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)<`CHART`\> |

#### Returns

[`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L91)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[unbind](../interfaces/DChartSelectionShape.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L51)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[unset](../interfaces/DChartSelectionShape.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L82)

___

### update

▸ `Abstract` **update**(`container`, `mappedPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `mappedPosition` | `IPoint` |

#### Returns

`void`

#### Implementation of

[DChartSelectionShape](../interfaces/DChartSelectionShape.md).[update](../interfaces/DChartSelectionShape.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L89)
