[Winter Cardinal UI - v0.407.0](../index.md) / DChartAxisGuideSimpleShapeImpl

# Class: DChartAxisGuideSimpleShapeImpl\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisGuideSimpleShape`](../interfaces/DChartAxisGuideSimpleShape.md)\<`CHART`\>

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

• **new DChartAxisGuideSimpleShapeImpl**\<`CHART`\>(`options?`): [`DChartAxisGuideSimpleShapeImpl`](DChartAxisGuideSimpleShapeImpl.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleShapeOptions`](../interfaces/DChartAxisGuideSimpleShapeOptions.md) |

#### Returns

[`DChartAxisGuideSimpleShapeImpl`](DChartAxisGuideSimpleShapeImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L37)

## Properties

### \_bar

• `Protected` `Optional` **\_bar**: ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L31)

___

### \_label

• `Protected` `Optional` **\_label**: ``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L32)

___

### \_labelMargin

• `Protected` `Optional` **\_labelMargin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L33)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartAxisGuideSimpleShapeOptions`](../interfaces/DChartAxisGuideSimpleShapeOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L30)

___

### \_tick

• `Protected` `Optional` **\_tick**: ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L34)

___

### \_tickMargin

• `Protected` `Optional` **\_tickMargin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L35)

## Accessors

### bar

• `get` **bar**(): ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Returns

``null`` \| [`EShapeBar`](EShapeBar.md)

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[bar](../interfaces/DChartAxisGuideSimpleShape.md#bar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L41)

___

### label

• `get` **label**(): ``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Returns

``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[label](../interfaces/DChartAxisGuideSimpleShape.md#label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L120)

___

### labelMargin

• `get` **labelMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L142)

___

### tick

• `get` **tick**(): ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Returns

``null`` \| [`EShapeBar`](EShapeBar.md)

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[tick](../interfaces/DChartAxisGuideSimpleShape.md#tick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L165)

___

### tickMargin

• `get` **tickMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L187)

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

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[bind](../interfaces/DChartAxisGuideSimpleShape.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L220)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[destroy](../interfaces/DChartAxisGuideSimpleShape.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L345)

___

### newBar

▸ **newBar**(): ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Returns

``null`` \| [`EShapeBar`](EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L50)

___

### newLabel

▸ **newLabel**(): ``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Returns

``null`` \| [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L129)

___

### newLabelMargin

▸ **newLabelMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L151)

___

### newTick

▸ **newTick**(): ``null`` \| [`EShapeBar`](EShapeBar.md)

#### Returns

``null`` \| [`EShapeBar`](EShapeBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L174)

___

### newTickMargin

▸ **newTickMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L196)

___

### toBarPosition

▸ **toBarPosition**(`axis`): [`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\> |

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L110)

___

### toStrokeOptions

▸ **toStrokeOptions**(`options?`, `style?`): `Partial`\<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleShapeStrokeOptions`](../interfaces/DChartAxisGuideSimpleShapeStrokeOptions.md) |
| `style?` | `number` |

#### Returns

`Partial`\<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L61)

___

### toTextAlignOptions

▸ **toTextAlignOptions**(`options?`): `Partial`\<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleShapeTextAlignOptions`](../interfaces/DChartAxisGuideSimpleShapeTextAlignOptions.md) |

#### Returns

`Partial`\<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L100)

___

### toTextOptions

▸ **toTextOptions**(`options?`): [`DeepPartial`](../index.md#deeppartial)\<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartAxisGuideSimpleShapeTextOptions`](../interfaces/DChartAxisGuideSimpleShapeTextOptions.md) |

#### Returns

[`DeepPartial`](../index.md#deeppartial)\<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L77)

___

### toTickPosition

▸ **toTickPosition**(`axis`): [`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\> |

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L210)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuideSimpleShape](../interfaces/DChartAxisGuideSimpleShape.md).[unbind](../interfaces/DChartAxisGuideSimpleShape.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L237)

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

[src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-axis-guide-simple-shape-impl.ts#L252)
