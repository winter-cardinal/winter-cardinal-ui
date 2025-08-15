[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaTwofoldAxisContainer

# Class: DChartPlotAreaTwofoldAxisContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartPlotAreaTwofoldAxisContainer.md#constructor)

### Properties

- [\_container](DChartPlotAreaTwofoldAxisContainer.md#_container)
- [\_list](DChartPlotAreaTwofoldAxisContainer.md#_list)
- [\_plotArea](DChartPlotAreaTwofoldAxisContainer.md#_plotarea)
- [\_primary](DChartPlotAreaTwofoldAxisContainer.md#_primary)
- [\_secondary](DChartPlotAreaTwofoldAxisContainer.md#_secondary)

### Accessors

- [container](DChartPlotAreaTwofoldAxisContainer.md#container)
- [plotArea](DChartPlotAreaTwofoldAxisContainer.md#plotarea)

### Methods

- [add](DChartPlotAreaTwofoldAxisContainer.md#add)
- [clear](DChartPlotAreaTwofoldAxisContainer.md#clear)
- [destroy](DChartPlotAreaTwofoldAxisContainer.md#destroy)
- [get](DChartPlotAreaTwofoldAxisContainer.md#get)
- [indexOf](DChartPlotAreaTwofoldAxisContainer.md#indexof)
- [onRender](DChartPlotAreaTwofoldAxisContainer.md#onrender)
- [size](DChartPlotAreaTwofoldAxisContainer.md#size)
- [update](DChartPlotAreaTwofoldAxisContainer.md#update)

## Constructors

### constructor

• **new DChartPlotAreaTwofoldAxisContainer**\<`CHART`\>(`plotArea`, `container`, `primary`, `secondary`): [`DChartPlotAreaTwofoldAxisContainer`](DChartPlotAreaTwofoldAxisContainer.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plotArea` | [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\> |
| `container` | [`EShapeContainer`](EShapeContainer.md) |
| `primary` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\> |
| `secondary` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\> |

#### Returns

[`DChartPlotAreaTwofoldAxisContainer`](DChartPlotAreaTwofoldAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L24)

## Properties

### \_container

• `Protected` **\_container**: [`EShapeContainer`](EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L18)

___

### \_list

• `Protected` **\_list**: `Map`\<[`DChartAxisPosition`](../index.md#dchartaxisposition), [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\>[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L19)

___

### \_plotArea

• `Protected` **\_plotArea**: [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L17)

___

### \_primary

• `Protected` **\_primary**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L21)

___

### \_secondary

• `Protected` **\_secondary**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L22)

## Accessors

### container

• `get` **container**(): [`EShapeContainer`](EShapeContainer.md)

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[container](../interfaces/DChartAxisContainer.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L37)

___

### plotArea

• `get` **plotArea**(): [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Returns

[`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[plotArea](../interfaces/DChartAxisContainer.md#plotarea)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L41)

## Methods

### add

▸ **add**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[add](../interfaces/DChartAxisContainer.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L45)

___

### clear

▸ **clear**(`position`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`this`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[clear](../interfaces/DChartAxisContainer.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L102)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[destroy](../interfaces/DChartAxisContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L146)

___

### get

▸ **get**(`position`, `index`): ``null`` \| [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| [`DChartAxisPosition`](../index.md#dchartaxisposition) |
| `index` | `number` |

#### Returns

``null`` \| [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\>

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[get](../interfaces/DChartAxisContainer.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L56)

___

### indexOf

▸ **indexOf**(`axis`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\> |

#### Returns

`number`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[indexOf](../interfaces/DChartAxisContainer.md#indexof)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L83)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[onRender](../interfaces/DChartAxisContainer.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L136)

___

### size

▸ **size**(`position`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`number`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[size](../interfaces/DChartAxisContainer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L116)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisContainer](../interfaces/DChartAxisContainer.md).[update](../interfaces/DChartAxisContainer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-twofold-axis-container.ts#L126)
