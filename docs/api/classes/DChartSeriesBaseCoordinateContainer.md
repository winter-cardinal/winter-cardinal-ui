[Winter Cardinal UI - v0.374.0](../index.md) / DChartSeriesBaseCoordinateContainer

# Class: DChartSeriesBaseCoordinateContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSeriesBaseCoordinateContainer.md#constructor)

### Properties

- [\_coordinateIdUpdatedX](DChartSeriesBaseCoordinateContainer.md#_coordinateidupdatedx)
- [\_coordinateIdUpdatedY](DChartSeriesBaseCoordinateContainer.md#_coordinateidupdatedy)
- [\_coordinateIndexX](DChartSeriesBaseCoordinateContainer.md#_coordinateindexx)
- [\_coordinateIndexY](DChartSeriesBaseCoordinateContainer.md#_coordinateindexy)
- [\_coordinateTransformIdUpdatedX](DChartSeriesBaseCoordinateContainer.md#_coordinatetransformidupdatedx)
- [\_coordinateTransformIdUpdatedY](DChartSeriesBaseCoordinateContainer.md#_coordinatetransformidupdatedy)
- [\_parent](DChartSeriesBaseCoordinateContainer.md#_parent)

### Accessors

- [x](DChartSeriesBaseCoordinateContainer.md#x)
- [y](DChartSeriesBaseCoordinateContainer.md#y)

### Methods

- [destroy](DChartSeriesBaseCoordinateContainer.md#destroy)
- [isDirty](DChartSeriesBaseCoordinateContainer.md#isdirty)
- [isTransformDirty](DChartSeriesBaseCoordinateContainer.md#istransformdirty)
- [reset](DChartSeriesBaseCoordinateContainer.md#reset)
- [toIndexX](DChartSeriesBaseCoordinateContainer.md#toindexx)
- [toIndexY](DChartSeriesBaseCoordinateContainer.md#toindexy)

## Constructors

### constructor

• **new DChartSeriesBaseCoordinateContainer**\<`CHART`\>(`parent`, `options?`): [`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DChartSeriesBaseCoordinateContainerParent`](../interfaces/DChartSeriesBaseCoordinateContainerParent.md)\<`CHART`\> |
| `options?` | [`DChartSeriesCoordinateContainerOptions`](../interfaces/DChartSeriesCoordinateContainerOptions.md) |

#### Returns

[`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L30)

## Properties

### \_coordinateIdUpdatedX

• `Protected` **\_coordinateIdUpdatedX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L25)

___

### \_coordinateIdUpdatedY

• `Protected` **\_coordinateIdUpdatedY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L26)

___

### \_coordinateIndexX

• `Protected` **\_coordinateIndexX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L23)

___

### \_coordinateIndexY

• `Protected` **\_coordinateIndexY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L24)

___

### \_coordinateTransformIdUpdatedX

• `Protected` **\_coordinateTransformIdUpdatedX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L27)

___

### \_coordinateTransformIdUpdatedY

• `Protected` **\_coordinateTransformIdUpdatedY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L28)

___

### \_parent

• `Protected` **\_parent**: [`DChartSeriesBaseCoordinateContainerParent`](../interfaces/DChartSeriesBaseCoordinateContainerParent.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L22)

## Accessors

### x

• `get` **x**(): ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Returns

``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Implementation of

DChartSeriesCoordinateContainer.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L43)

• `set` **x**(`coordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | ``null`` \| `number` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

DChartSeriesCoordinateContainer.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L51)

___

### y

• `get` **y**(): ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Returns

``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>

#### Implementation of

DChartSeriesCoordinateContainer.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L72)

• `set` **y**(`coordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | ``null`` \| `number` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

DChartSeriesCoordinateContainer.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L80)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L131)

___

### isDirty

▸ **isDirty**(`coordinateX`, `coordinateY`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateX` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `coordinateY` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L101)

___

### isTransformDirty

▸ **isTransformDirty**(`coordinateX`, `coordinateY`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateX` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |
| `coordinateY` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L111)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L126)

___

### toIndexX

▸ **toIndexX**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `number` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L60)

___

### toIndexY

▸ **toIndexY**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `number` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L89)
