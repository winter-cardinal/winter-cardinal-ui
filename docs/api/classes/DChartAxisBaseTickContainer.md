[Winter Cardinal UI - v0.442.0](../index.md) / DChartAxisBaseTickContainer

# Class: DChartAxisBaseTickContainer\<CHART, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `OPTIONS` | extends [`DChartAxisBaseTickContainerOptions`](../interfaces/DChartAxisBaseTickContainerOptions.md) = [`DChartAxisBaseTickContainerOptions`](../interfaces/DChartAxisBaseTickContainerOptions.md) |

## Implements

- [`DChartAxisTickContainer`](../interfaces/DChartAxisTickContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisBaseTickContainer.md#constructor)

### Properties

- [\_container](DChartAxisBaseTickContainer.md#_container)
- [\_index](DChartAxisBaseTickContainer.md#_index)
- [\_major](DChartAxisBaseTickContainer.md#_major)
- [\_majorTicks](DChartAxisBaseTickContainer.md#_majorticks)
- [\_minor](DChartAxisBaseTickContainer.md#_minor)
- [\_minorTicks](DChartAxisBaseTickContainer.md#_minorticks)
- [\_parser](DChartAxisBaseTickContainer.md#_parser)
- [\_work](DChartAxisBaseTickContainer.md#_work)

### Accessors

- [major](DChartAxisBaseTickContainer.md#major)
- [minor](DChartAxisBaseTickContainer.md#minor)

### Methods

- [bind](DChartAxisBaseTickContainer.md#bind)
- [destroy](DChartAxisBaseTickContainer.md#destroy)
- [getDomain](DChartAxisBaseTickContainer.md#getdomain)
- [getDomainVisible](DChartAxisBaseTickContainer.md#getdomainvisible)
- [getRange](DChartAxisBaseTickContainer.md#getrange)
- [getRangeVisible](DChartAxisBaseTickContainer.md#getrangevisible)
- [hideMajor](DChartAxisBaseTickContainer.md#hidemajor)
- [hideMajorGridline](DChartAxisBaseTickContainer.md#hidemajorgridline)
- [hideMinor](DChartAxisBaseTickContainer.md#hideminor)
- [newMajor](DChartAxisBaseTickContainer.md#newmajor)
- [newMinor](DChartAxisBaseTickContainer.md#newminor)
- [newTicks](DChartAxisBaseTickContainer.md#newticks)
- [showMajor](DChartAxisBaseTickContainer.md#showmajor)
- [showMajorGridline](DChartAxisBaseTickContainer.md#showmajorgridline)
- [showMinor](DChartAxisBaseTickContainer.md#showminor)
- [unbind](DChartAxisBaseTickContainer.md#unbind)
- [update](DChartAxisBaseTickContainer.md#update)
- [updateX](DChartAxisBaseTickContainer.md#updatex)
- [updateY](DChartAxisBaseTickContainer.md#updatey)

## Constructors

### constructor

• **new DChartAxisBaseTickContainer**\<`CHART`, `OPTIONS`\>(`parser`, `options?`): [`DChartAxisBaseTickContainer`](DChartAxisBaseTickContainer.md)\<`CHART`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `OPTIONS` | extends [`DChartAxisBaseTickContainerOptions`](../interfaces/DChartAxisBaseTickContainerOptions.md) = [`DChartAxisBaseTickContainerOptions`](../interfaces/DChartAxisBaseTickContainerOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\> |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisBaseTickContainer`](DChartAxisBaseTickContainer.md)\<`CHART`, `OPTIONS`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L36)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L28)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L29)

___

### \_major

• `Protected` **\_major**: [`DChartAxisTickMajor`](../interfaces/DChartAxisTickMajor.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L30)

___

### \_majorTicks

• `Protected` **\_majorTicks**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L32)

___

### \_minor

• `Protected` **\_minor**: [`DChartAxisTickMinor`](../interfaces/DChartAxisTickMinor.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L31)

___

### \_minorTicks

• `Protected` **\_minorTicks**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L33)

___

### \_parser

• `Protected` **\_parser**: [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L27)

___

### \_work

• `Protected` **\_work**: [`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L34)

## Accessors

### major

• `get` **major**(): [`DChartAxisTickMajor`](../interfaces/DChartAxisTickMajor.md)\<`CHART`\>

#### Returns

[`DChartAxisTickMajor`](../interfaces/DChartAxisTickMajor.md)\<`CHART`\>

#### Implementation of

[DChartAxisTickContainer](../interfaces/DChartAxisTickContainer.md).[major](../interfaces/DChartAxisTickContainer.md#major)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L46)

___

### minor

• `get` **minor**(): [`DChartAxisTickMinor`](../interfaces/DChartAxisTickMinor.md)\<`CHART`\>

#### Returns

[`DChartAxisTickMinor`](../interfaces/DChartAxisTickMinor.md)\<`CHART`\>

#### Implementation of

[DChartAxisTickContainer](../interfaces/DChartAxisTickContainer.md).[minor](../interfaces/DChartAxisTickContainer.md#minor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L57)

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

#### Implementation of

[DChartAxisTickContainer](../interfaces/DChartAxisTickContainer.md).[bind](../interfaces/DChartAxisTickContainer.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L68)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisTickContainer](../interfaces/DChartAxisTickContainer.md).[destroy](../interfaces/DChartAxisTickContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:518](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L518)

___

### getDomain

▸ **getDomain**(`plotArea`, `coordinate`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L206)

___

### getDomainVisible

▸ **getDomainVisible**(`plotArea`, `coordinate`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L219)

___

### getRange

▸ **getRange**(`plotArea`, `coordinate`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L227)

___

### getRangeVisible

▸ **getRangeVisible**(`plotArea`, `coordinate`, `result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> \| [`DChartPlotAreaLike`](../interfaces/DChartPlotAreaLike.md)\<`CHART`\> |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L240)

___

### hideMajor

▸ **hideMajor**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L467)

___

### hideMajorGridline

▸ **hideMajorGridline**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L471)

___

### hideMinor

▸ **hideMinor**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L483)

___

### newMajor

▸ **newMajor**(`parser`, `options?`): [`DChartAxisTickMajor`](../interfaces/DChartAxisTickMajor.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\> |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisTickMajor`](../interfaces/DChartAxisTickMajor.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L50)

___

### newMinor

▸ **newMinor**(`parser`, `options?`): [`DChartAxisTickMinor`](../interfaces/DChartAxisTickMinor.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`DChartAxisBaseOptionParser`](DChartAxisBaseOptionParser.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md), [`DChartAxisBaseOptions`](../interfaces/DChartAxisBaseOptions.md)\<[`DThemeChartAxisBase`](../interfaces/DThemeChartAxisBase.md)\>\> |
| `options?` | `OPTIONS` |

#### Returns

[`DChartAxisTickMinor`](../interfaces/DChartAxisTickMinor.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L61)

___

### newTicks

▸ **newTicks**(`coordinate`, `domainFrom`, `domainTo`, `domainVisibleFrom`, `domainVisibleTo`, `majorCount`, `majorCapacity`, `majorStep`, `minorCountPerMajor`, `minorCount`, `minorStep`, `majorResult`, `minorResult`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `domainFrom` | `number` |
| `domainTo` | `number` |
| `domainVisibleFrom` | `number` |
| `domainVisibleTo` | `number` |
| `majorCount` | `number` |
| `majorCapacity` | `number` |
| `majorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMajorStepFunction`](../index.md#dchartcoordinatetickmajorstepfunction) |
| `minorCountPerMajor` | `number` |
| `minorCount` | `number` |
| `minorStep` | `undefined` \| `number` \| [`DChartCoordinateTickMinorStepFunction`](../index.md#dchartcoordinatetickminorstepfunction) |
| `majorResult` | `number`[] |
| `minorResult` | `number`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L487)

___

### showMajor

▸ **showMajor**(`shape`, `x`, `y`, `text?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `x` | `number` |
| `y` | `number` |
| `text?` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L444)

___

### showMajorGridline

▸ **showMajorGridline**(`shape`, `value`, `x`, `y`, `sx`, `sy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `value` | `number` |
| `x` | `number` |
| `y` | `number` |
| `sx` | `number` |
| `sy` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:452](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L452)

___

### showMinor

▸ **showMinor**(`shape`, `x`, `y`, `text?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `x` | `number` |
| `y` | `number` |
| `text?` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L475)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisTickContainer](../interfaces/DChartAxisTickContainer.md).[unbind](../interfaces/DChartAxisTickContainer.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L75)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisTickContainer](../interfaces/DChartAxisTickContainer.md).[update](../interfaces/DChartAxisTickContainer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L82)

___

### updateX

▸ **updateX**(`domainFrom`, `domainTo`, `domainVisibleFrom`, `domainVisibleTo`, `coordinate`, `majorShapes`, `minorShapes`, `gridlineShapes`, `shapePositionY`, `transform`, `plotAreaY`, `plotAreaHeight`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainFrom` | `number` |
| `domainTo` | `number` |
| `domainVisibleFrom` | `number` |
| `domainVisibleTo` | `number` |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `majorShapes` | [`EShape`](../interfaces/EShape.md)[] |
| `minorShapes` | [`EShape`](../interfaces/EShape.md)[] |
| `gridlineShapes` | [`EShape`](../interfaces/EShape.md)[] |
| `shapePositionY` | `number` |
| `transform` | `Matrix` |
| `plotAreaY` | `number` |
| `plotAreaHeight` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L248)

___

### updateY

▸ **updateY**(`rangeFrom`, `rangeTo`, `rangeVisibleFrom`, `rangeVisibleTo`, `coordinate`, `majorShapes`, `minorShapes`, `gridlineShapes`, `shapePositionX`, `transform`, `plotAreaX`, `plotAreaWidth`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rangeFrom` | `number` |
| `rangeTo` | `number` |
| `rangeVisibleFrom` | `number` |
| `rangeVisibleTo` | `number` |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `majorShapes` | [`EShape`](../interfaces/EShape.md)[] |
| `minorShapes` | [`EShape`](../interfaces/EShape.md)[] |
| `gridlineShapes` | [`EShape`](../interfaces/EShape.md)[] |
| `shapePositionX` | `number` |
| `transform` | `Matrix` |
| `plotAreaX` | `number` |
| `plotAreaWidth` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-axis-base-tick-container.ts#L346)
