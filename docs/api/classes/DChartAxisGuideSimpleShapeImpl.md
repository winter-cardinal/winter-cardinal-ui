[Winter Cardinal UI - v0.310.1](../index.md) / DChartAxisGuideSimpleShapeImpl

# Class: DChartAxisGuideSimpleShapeImpl<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisGuideSimpleShapeImpl.md#constructor)

### Properties

- [\_bar](DChartAxisGuideSimpleShapeImpl.md#_bar)
- [\_label](DChartAxisGuideSimpleShapeImpl.md#_label)
- [\_labelMargin](DChartAxisGuideSimpleShapeImpl.md#_labelmargin)
- [\_options](DChartAxisGuideSimpleShapeImpl.md#_options)
- [\_tick](DChartAxisGuideSimpleShapeImpl.md#_tick)
- [\_tickMargin](DChartAxisGuideSimpleShapeImpl.md#_tickmargin)

### Accessors

- [bar](DChartAxisGuideSimpleShapeImpl.md#bar)
- [label](DChartAxisGuideSimpleShapeImpl.md#label)
- [labelMargin](DChartAxisGuideSimpleShapeImpl.md#labelmargin)
- [tick](DChartAxisGuideSimpleShapeImpl.md#tick)
- [tickMargin](DChartAxisGuideSimpleShapeImpl.md#tickmargin)

### Methods

- [bind](DChartAxisGuideSimpleShapeImpl.md#bind)
- [destroy](DChartAxisGuideSimpleShapeImpl.md#destroy)
- [newBar](DChartAxisGuideSimpleShapeImpl.md#newbar)
- [newLabel](DChartAxisGuideSimpleShapeImpl.md#newlabel)
- [newLabelMargin](DChartAxisGuideSimpleShapeImpl.md#newlabelmargin)
- [newTick](DChartAxisGuideSimpleShapeImpl.md#newtick)
- [newTickMargin](DChartAxisGuideSimpleShapeImpl.md#newtickmargin)
- [toBarPosition](DChartAxisGuideSimpleShapeImpl.md#tobarposition)
- [toStrokeOptions](DChartAxisGuideSimpleShapeImpl.md#tostrokeoptions)
- [toTextAlignOptions](DChartAxisGuideSimpleShapeImpl.md#totextalignoptions)
- [toTextOptions](DChartAxisGuideSimpleShapeImpl.md#totextoptions)
- [toTickPosition](DChartAxisGuideSimpleShapeImpl.md#totickposition)
- [unbind](DChartAxisGuideSimpleShapeImpl.md#unbind)
- [update](DChartAxisGuideSimpleShapeImpl.md#update)

## Constructors

### constructor

• **new DChartAxisGuideSimpleShapeImpl**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleShapeOptions`](../interfaces/DChartAxisGuideSimpleShapeOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L36)

## Properties

### \_bar

• `Protected` `Optional` **\_bar**: ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L30)

___

### \_label

• `Protected` `Optional` **\_label**: ``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L31)

___

### \_labelMargin

• `Protected` `Optional` **\_labelMargin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L32)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartAxisGuideSimpleShapeOptions`](../interfaces/DChartAxisGuideSimpleShapeOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L29)

___

### \_tick

• `Protected` `Optional` **\_tick**: ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L33)

___

### \_tickMargin

• `Protected` `Optional` **\_tickMargin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L34)

## Accessors

### bar

• `get` **bar**(): ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Returns

``null`` \| [`EShapeBar`](EShapeBar.md)

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[bar](../interfaces/DChartAxisGuideSimpleShape.md#bar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L40)

___

### label

• `get` **label**(): ``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Returns

``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[label](../interfaces/DChartAxisGuideSimpleShape.md#label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L119)

___

### labelMargin

• `get` **labelMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L141)

___

### tick

• `get` **tick**(): ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Returns

``null`` \| [`EShapeBar`](EShapeBar.md)

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[tick](../interfaces/DChartAxisGuideSimpleShape.md#tick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L164)

___

### tickMargin

• `get` **tickMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L186)

## Methods

### bind

▸ **bind**(`container`, `index`, `axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\> |
| `index` | `number` |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[bind](../interfaces/DChartAxisGuideSimpleShape.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L219)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[destroy](../interfaces/DChartAxisGuideSimpleShape.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:344](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L344)

___

### newBar

▸ `Protected` **newBar**(): ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Returns

``null`` \| [`EShapeBar`](EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L49)

___

### newLabel

▸ `Protected` **newLabel**(): ``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Returns

``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L128)

___

### newLabelMargin

▸ `Protected` **newLabelMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L150)

___

### newTick

▸ `Protected` **newTick**(): ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Returns

``null`` \| [`EShapeBar`](EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L173)

___

### newTickMargin

▸ `Protected` **newTickMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L195)

___

### toBarPosition

▸ `Protected` **toBarPosition**(`axis`): [`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\> |

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L109)

___

### toStrokeOptions

▸ `Protected` **toStrokeOptions**(`options?`, `style?`): `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleShapeStrokeOptions`](../interfaces/DChartAxisGuideSimpleShapeStrokeOptions.md) |
| `style?` | `number` |

#### Returns

`Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L60)

___

### toTextAlignOptions

▸ `Protected` **toTextAlignOptions**(`options?`): `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleShapeTextAlignOptions`](../interfaces/DChartAxisGuideSimpleShapeTextAlignOptions.md) |

#### Returns

`Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L99)

___

### toTextOptions

▸ `Protected` **toTextOptions**(`options?`): [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleShapeTextOptions`](../interfaces/DChartAxisGuideSimpleShapeTextOptions.md) |

#### Returns

[`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L76)

___

### toTickPosition

▸ `Protected` **toTickPosition**(`axis`): [`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)<`CHART`\> |

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L209)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[unbind](../interfaces/DChartAxisGuideSimpleShape.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L236)

___

### update

▸ **update**(`position`, `x`, `y`, `visible`, `width`, `height`, `offset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition-1) |
| `x` | `number` |
| `y` | `number` |
| `visible` | `boolean` |
| `width` | `number` |
| `height` | `number` |
| `offset` | `number` |

#### Returns

`boolean`

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[update](../interfaces/DChartAxisGuideSimpleShape.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L251)
