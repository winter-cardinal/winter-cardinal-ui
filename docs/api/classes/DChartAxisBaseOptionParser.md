[Winter Cardinal UI - v0.165.0](../index.md) / DChartAxisBaseOptionParser

# Class: DChartAxisBaseOptionParser

## Table of contents

### Constructors

- [constructor](DChartAxisBaseOptionParser.md#constructor)

### Properties

- [\_bar](DChartAxisBaseOptionParser.md#_bar)
- [\_coordinateIndex](DChartAxisBaseOptionParser.md#_coordinateindex)
- [\_label](DChartAxisBaseOptionParser.md#_label)
- [\_padding](DChartAxisBaseOptionParser.md#_padding)
- [\_position](DChartAxisBaseOptionParser.md#_position)
- [\_tick](DChartAxisBaseOptionParser.md#_tick)

### Accessors

- [bar](DChartAxisBaseOptionParser.md#bar)
- [coordinateIndex](DChartAxisBaseOptionParser.md#coordinateindex)
- [label](DChartAxisBaseOptionParser.md#label)
- [padding](DChartAxisBaseOptionParser.md#padding)
- [position](DChartAxisBaseOptionParser.md#position)
- [tick](DChartAxisBaseOptionParser.md#tick)

### Methods

- [toBar](DChartAxisBaseOptionParser.md#tobar)
- [toBarStroke](DChartAxisBaseOptionParser.md#tobarstroke)
- [toLabel](DChartAxisBaseOptionParser.md#tolabel)
- [toLabelAlign](DChartAxisBaseOptionParser.md#tolabelalign)
- [toLabelColor](DChartAxisBaseOptionParser.md#tolabelcolor)
- [toLabelDirection](DChartAxisBaseOptionParser.md#tolabeldirection)
- [toLabelOffset](DChartAxisBaseOptionParser.md#tolabeloffset)
- [toLabelOutline](DChartAxisBaseOptionParser.md#tolabeloutline)
- [toLabelPadding](DChartAxisBaseOptionParser.md#tolabelpadding)
- [toLabelSpacing](DChartAxisBaseOptionParser.md#tolabelspacing)
- [toMajorTickFormatter](DChartAxisBaseOptionParser.md#tomajortickformatter)
- [toMajorTickText](DChartAxisBaseOptionParser.md#tomajorticktext)
- [toMajorTickTextAlign](DChartAxisBaseOptionParser.md#tomajorticktextalign)
- [toMajorTickTextColor](DChartAxisBaseOptionParser.md#tomajorticktextcolor)
- [toMajorTickTextOffset](DChartAxisBaseOptionParser.md#tomajorticktextoffset)
- [toMajorTickTextOutline](DChartAxisBaseOptionParser.md#tomajorticktextoutline)
- [toMajorTickTextPadding](DChartAxisBaseOptionParser.md#tomajorticktextpadding)
- [toMajorTickTextSpacing](DChartAxisBaseOptionParser.md#tomajorticktextspacing)
- [toMinorTick](DChartAxisBaseOptionParser.md#tominortick)
- [toPosition](DChartAxisBaseOptionParser.md#toposition)
- [toStroke](DChartAxisBaseOptionParser.md#tostroke)
- [toTickContainer](DChartAxisBaseOptionParser.md#totickcontainer)
- [toTickMajor](DChartAxisBaseOptionParser.md#totickmajor)
- [toTickMajorGridline](DChartAxisBaseOptionParser.md#totickmajorgridline)
- [toTickMajorGridlineStroke](DChartAxisBaseOptionParser.md#totickmajorgridlinestroke)
- [toTickMajorStroke](DChartAxisBaseOptionParser.md#totickmajorstroke)
- [toTickMajorTextDirection](DChartAxisBaseOptionParser.md#totickmajortextdirection)
- [toTickMinorStroke](DChartAxisBaseOptionParser.md#totickminorstroke)
- [toTickPosition](DChartAxisBaseOptionParser.md#totickposition)

## Constructors

### constructor

• **new DChartAxisBaseOptionParser**(`theme`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L86)

## Properties

### \_bar

• `Protected` **\_bar**: [`DChartAxisBaseBar`](../interfaces/DChartAxisBaseBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L84)

___

### \_coordinateIndex

• `Protected` **\_coordinateIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L79)

___

### \_label

• `Protected` **\_label**: `undefined` \| [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L82)

___

### \_padding

• `Protected` **\_padding**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L83)

___

### \_position

• `Protected` **\_position**: [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L80)

___

### \_tick

• `Protected` **\_tick**: [`DChartAxisBaseTickContainer`](../interfaces/DChartAxisBaseTickContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L81)

## Accessors

### bar

• `get` **bar**(): [`DChartAxisBaseBar`](../interfaces/DChartAxisBaseBar.md)

#### Returns

[`DChartAxisBaseBar`](../interfaces/DChartAxisBaseBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L107)

___

### coordinateIndex

• `get` **coordinateIndex**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L95)

___

### label

• `get` **label**(): `undefined` \| [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Returns

`undefined` \| [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L115)

___

### padding

• `get` **padding**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L99)

___

### position

• `get` **position**(): [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Returns

[`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L103)

___

### tick

• `get` **tick**(): [`DChartAxisBaseTickContainer`](../interfaces/DChartAxisBaseTickContainer.md)

#### Returns

[`DChartAxisBaseTickContainer`](../interfaces/DChartAxisBaseTickContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L111)

## Methods

### toBar

▸ `Protected` **toBar**(`theme`, `options?`): [`DChartAxisBaseBar`](../interfaces/DChartAxisBaseBar.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

#### Returns

[`DChartAxisBaseBar`](../interfaces/DChartAxisBaseBar.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L132)

___

### toBarStroke

▸ `Protected` **toBarStroke**(`theme`, `options?`): `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |

#### Returns

`Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L251)

___

### toLabel

▸ `Protected` **toLabel**(`theme`, `options?`): `undefined` \| [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

#### Returns

`undefined` \| [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:495](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L495)

___

### toLabelAlign

▸ `Protected` **toLabelAlign**(`theme`, `options?`): `undefined` \| `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\> |

#### Returns

`undefined` \| `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L534)

___

### toLabelColor

▸ `Protected` **toLabelColor**(`theme`, `options?`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `number` |

#### Returns

`undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L586)

___

### toLabelDirection

▸ `Protected` **toLabelDirection**(`theme`, `options?`): [`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`EShapeTextDirection`](../index.md#eshapetextdirection) |

#### Returns

[`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L579)

___

### toLabelOffset

▸ `Protected` **toLabelOffset**(`theme`, `options?`): `undefined` \| `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\> |

#### Returns

`undefined` \| `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L545)

___

### toLabelOutline

▸ `Protected` **toLabelOutline**(`theme`, `options?`): `undefined` \| `Partial`<[`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)\> |

#### Returns

`undefined` \| `Partial`<[`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L520)

___

### toLabelPadding

▸ `Protected` **toLabelPadding**(`theme`, `options?`): `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\> |

#### Returns

`Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L569)

___

### toLabelSpacing

▸ `Protected` **toLabelSpacing**(`theme`, `options?`): `undefined` \| `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\> |

#### Returns

`undefined` \| `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L557)

___

### toMajorTickFormatter

▸ `Protected` **toMajorTickFormatter**(`theme`, `options?`): [`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseTickMajorOptions`](../interfaces/DChartAxisBaseTickMajorOptions.md) |

#### Returns

[`NumberFormatter`](../interfaces/NumberFormatter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:378](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L378)

___

### toMajorTickText

▸ `Protected` **toMajorTickText**(`theme`, `options?`): `undefined` \| [`DChartAxisBaseTickMajorTextOptions`](../interfaces/DChartAxisBaseTickMajorTextOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseTickMajorTextOptions`](../interfaces/DChartAxisBaseTickMajorTextOptions.md) |

#### Returns

`undefined` \| [`DChartAxisBaseTickMajorTextOptions`](../interfaces/DChartAxisBaseTickMajorTextOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L399)

___

### toMajorTickTextAlign

▸ `Protected` **toMajorTickTextAlign**(`theme`, `options?`): `undefined` \| `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\> |

#### Returns

`undefined` \| `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L436)

___

### toMajorTickTextColor

▸ `Protected` **toMajorTickTextColor**(`theme`, `options?`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `number` |

#### Returns

`undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L488)

___

### toMajorTickTextOffset

▸ `Protected` **toMajorTickTextOffset**(`theme`, `options?`): `undefined` \| `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\> |

#### Returns

`undefined` \| `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L447)

___

### toMajorTickTextOutline

▸ `Protected` **toMajorTickTextOutline**(`theme`, `options?`): `undefined` \| `Partial`<[`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)\> |

#### Returns

`undefined` \| `Partial`<[`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L422)

___

### toMajorTickTextPadding

▸ `Protected` **toMajorTickTextPadding**(`theme`, `options?`): `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\> |

#### Returns

`Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L471)

___

### toMajorTickTextSpacing

▸ `Protected` **toMajorTickTextSpacing**(`theme`, `options?`): `undefined` \| `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\> |

#### Returns

`undefined` \| `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L459)

___

### toMinorTick

▸ `Protected` **toMinorTick**(`theme`, `options?`): [`DChartAxisBaseTickMinor`](../interfaces/DChartAxisBaseTickMinor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseTickContainerOptions`](../interfaces/DChartAxisBaseTickContainerOptions.md) |

#### Returns

[`DChartAxisBaseTickMinor`](../interfaces/DChartAxisBaseTickMinor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L231)

___

### toPosition

▸ `Protected` **toPosition**(`theme`, `options?`): [`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

#### Returns

[`DChartAxisPosition`](../index.md#dchartaxisposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L119)

___

### toStroke

▸ `Protected` **toStroke**(`optionsA`, `optionsB`, `enable`, `color`, `alpha`, `width`, `align`, `side`, `style`): `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsA` | `undefined` \| `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |
| `optionsB` | `undefined` \| `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |
| `enable` | `undefined` \| `boolean` |
| `color` | `undefined` \| `number` |
| `alpha` | `undefined` \| `number` |
| `width` | `undefined` \| `number` |
| `align` | `undefined` \| `number` |
| `side` | `undefined` \| `number` |
| `style` | `undefined` \| `number` |

#### Returns

`Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:322](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L322)

___

### toTickContainer

▸ `Protected` **toTickContainer**(`theme`, `options?`): [`DChartAxisBaseTickContainer`](../interfaces/DChartAxisBaseTickContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md) |

#### Returns

[`DChartAxisBaseTickContainer`](../interfaces/DChartAxisBaseTickContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L143)

___

### toTickMajor

▸ `Protected` **toTickMajor**(`theme`, `options?`): [`DChartAxisBaseTickMajor`](../interfaces/DChartAxisBaseTickMajor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`DChartAxisBaseTickContainerOptions`](../interfaces/DChartAxisBaseTickContainerOptions.md) |

#### Returns

[`DChartAxisBaseTickMajor`](../interfaces/DChartAxisBaseTickMajor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L155)

___

### toTickMajorGridline

▸ `Protected` **toTickMajorGridline**(`theme`, `options`, `optionsStyle`, `optionsStroke`): [`DChartAxisBaseGridline`](../interfaces/DChartAxisBaseGridline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options` | `undefined` \| [`DChartAxisBaseTickMajorGridlineOptions`](../interfaces/DChartAxisBaseTickMajorGridlineOptions.md) |
| `optionsStyle` | `undefined` \| [`EShapePointsStyleOption`](../index.md#eshapepointsstyleoption) |
| `optionsStroke` | `undefined` \| `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |

#### Returns

[`DChartAxisBaseGridline`](../interfaces/DChartAxisBaseGridline.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L181)

___

### toTickMajorGridlineStroke

▸ `Protected` **toTickMajorGridlineStroke**(`theme`, `optionsA?`, `optionsB?`): `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `optionsA?` | `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |
| `optionsB?` | `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |

#### Returns

`Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L286)

___

### toTickMajorStroke

▸ `Protected` **toTickMajorStroke**(`theme`, `optionsA?`, `optionsB?`): `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `optionsA?` | `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |
| `optionsB?` | `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |

#### Returns

`Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L268)

___

### toTickMajorTextDirection

▸ `Protected` **toTickMajorTextDirection**(`theme`, `options?`): [`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `options?` | [`EShapeTextDirection`](../index.md#eshapetextdirection) |

#### Returns

[`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:481](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L481)

___

### toTickMinorStroke

▸ `Protected` **toTickMinorStroke**(`theme`, `optionsA?`, `optionsB?`): `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md) |
| `optionsA?` | `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |
| `optionsB?` | `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |

#### Returns

`Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:304](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L304)

___

### toTickPosition

▸ `Protected` **toTickPosition**(`tickPosition`): [`EShapeBarPosition`](../index.md#eshapebarposition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tickPosition` | ``"INSIDE"`` \| ``"OUTSIDE"`` \| [`DChartAxisTickPosition`](../index.md#dchartaxistickposition) |

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-options-parser.ts#L198)
