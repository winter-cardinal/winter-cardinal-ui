[Winter Cardinal UI - v0.164.0](../index.md) / DChartSelectionGridlineY

# Class: DChartSelectionGridlineY<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSelectionShapeBase`](DChartSelectionShapeBase.md)<`CHART`\>

  ↳ **`DChartSelectionGridlineY`**

## Table of contents

### Constructors

- [constructor](DChartSelectionGridlineY.md#constructor)

### Properties

- [\_isEnabled](DChartSelectionGridlineY.md#_isenabled)
- [\_shape](DChartSelectionGridlineY.md#_shape)
- [\_state](DChartSelectionGridlineY.md#_state)
- [\_style](DChartSelectionGridlineY.md#_style)
- [\_theme](DChartSelectionGridlineY.md#_theme)

### Methods

- [bind](DChartSelectionGridlineY.md#bind)
- [getTheme](DChartSelectionGridlineY.md#gettheme)
- [getType](DChartSelectionGridlineY.md#gettype)
- [isVisible](DChartSelectionGridlineY.md#isvisible)
- [newShape](DChartSelectionGridlineY.md#newshape)
- [set](DChartSelectionGridlineY.md#set)
- [setStyle](DChartSelectionGridlineY.md#setstyle)
- [toTheme](DChartSelectionGridlineY.md#totheme)
- [unbind](DChartSelectionGridlineY.md#unbind)
- [unset](DChartSelectionGridlineY.md#unset)
- [update](DChartSelectionGridlineY.md#update)

## Constructors

### constructor

• **new DChartSelectionGridlineY**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionShapeOptions`](../interfaces/DChartSelectionShapeOptions.md)<`CHART`\> |

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[constructor](DChartSelectionShapeBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L32)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_isEnabled](DChartSelectionShapeBase.md#_isenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L26)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`EShape`](../interfaces/EShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_shape](DChartSelectionShapeBase.md#_shape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L27)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_state](DChartSelectionShapeBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L29)

___

### \_style

• `Protected` **\_style**: [`DChartSelectionStyle`](../index.md#dchartselectionstyle)<`CHART`\>

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_style](DChartSelectionShapeBase.md#_style)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L28)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[_theme](DChartSelectionShapeBase.md#_theme)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[bind](DChartSelectionShapeBase.md#bind)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[getTheme](DChartSelectionShapeBase.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L102)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[getType](DChartSelectionShapeBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-y.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-y.ts#L29)

___

### isVisible

▸ `Protected` **isVisible**(`container`, `mappedY`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `mappedY` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-y.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-y.ts#L25)

___

### newShape

▸ `Protected` **newShape**(`theme`): [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartSelectionShape`](../interfaces/DThemeChartSelectionShape.md) |

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[newShape](DChartSelectionShapeBase.md#newshape)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[set](DChartSelectionShapeBase.md#set)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[setStyle](DChartSelectionShapeBase.md#setstyle)

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

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[toTheme](DChartSelectionShapeBase.md#totheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L91)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[unbind](DChartSelectionShapeBase.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L51)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[unset](DChartSelectionShapeBase.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-shape-base.ts#L82)

___

### update

▸ **update**(`container`, `mappedPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `mappedPosition` | `IPoint` |

#### Returns

`void`

#### Overrides

[DChartSelectionShapeBase](DChartSelectionShapeBase.md).[update](DChartSelectionShapeBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-gridline-y.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-chart-selection-gridline-y.ts#L14)
