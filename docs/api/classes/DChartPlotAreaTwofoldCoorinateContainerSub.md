[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaTwofoldCoorinateContainerSub

# Class: DChartPlotAreaTwofoldCoorinateContainerSub\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartPlotAreaTwofoldCoorinateContainerSub.md#constructor)

### Properties

- [\_container](DChartPlotAreaTwofoldCoorinateContainerSub.md#_container)
- [\_primary](DChartPlotAreaTwofoldCoorinateContainerSub.md#_primary)
- [\_secondary](DChartPlotAreaTwofoldCoorinateContainerSub.md#_secondary)

### Accessors

- [container](DChartPlotAreaTwofoldCoorinateContainerSub.md#container)

### Methods

- [add](DChartPlotAreaTwofoldCoorinateContainerSub.md#add)
- [blend](DChartPlotAreaTwofoldCoorinateContainerSub.md#blend)
- [clear](DChartPlotAreaTwofoldCoorinateContainerSub.md#clear)
- [destroy](DChartPlotAreaTwofoldCoorinateContainerSub.md#destroy)
- [fit](DChartPlotAreaTwofoldCoorinateContainerSub.md#fit)
- [get](DChartPlotAreaTwofoldCoorinateContainerSub.md#get)
- [indexOf](DChartPlotAreaTwofoldCoorinateContainerSub.md#indexof)
- [mark](DChartPlotAreaTwofoldCoorinateContainerSub.md#mark)
- [remove](DChartPlotAreaTwofoldCoorinateContainerSub.md#remove)
- [size](DChartPlotAreaTwofoldCoorinateContainerSub.md#size)

## Constructors

### constructor

• **new DChartPlotAreaTwofoldCoorinateContainerSub**\<`CHART`\>(`container`, `primary`, `secondary`): [`DChartPlotAreaTwofoldCoorinateContainerSub`](DChartPlotAreaTwofoldCoorinateContainerSub.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\> |
| `primary` | [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\> |
| `secondary` | [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\> |

#### Returns

[`DChartPlotAreaTwofoldCoorinateContainerSub`](DChartPlotAreaTwofoldCoorinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L19)

## Properties

### \_container

• `Protected` **\_container**: [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L15)

___

### \_primary

• `Protected` **\_primary**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L16)

___

### \_secondary

• `Protected` **\_secondary**: [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L17)

## Accessors

### container

• `get` **container**(): [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[container](../interfaces/DChartCoordinateContainerSub.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L29)

## Methods

### add

▸ **add**(`coordinate`, `index?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `index?` | `number` |

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[add](../interfaces/DChartCoordinateContainerSub.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L33)

___

### blend

▸ **blend**(`ratio`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[blend](../interfaces/DChartCoordinateContainerSub.md#blend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L133)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[clear](../interfaces/DChartCoordinateContainerSub.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L107)

___

### destroy

▸ **destroy**(): `this`

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[destroy](../interfaces/DChartCoordinateContainerSub.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L113)

___

### fit

▸ **fit**(`from?`, `to?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[fit](../interfaces/DChartCoordinateContainerSub.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L121)

___

### get

▸ **get**(`index`): ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[get](../interfaces/DChartCoordinateContainerSub.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L51)

___

### indexOf

▸ **indexOf**(`coordinate`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`number`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[indexOf](../interfaces/DChartCoordinateContainerSub.md#indexof)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L65)

___

### mark

▸ **mark**(`from?`, `to?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[mark](../interfaces/DChartCoordinateContainerSub.md#mark)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L127)

___

### remove

▸ **remove**(`coordinate`): ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[remove](../interfaces/DChartCoordinateContainerSub.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L78)

▸ **remove**(`index`): ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[remove](../interfaces/DChartCoordinateContainerSub.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L79)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[size](../interfaces/DChartCoordinateContainerSub.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-coordinate-container-sub.ts#L117)
