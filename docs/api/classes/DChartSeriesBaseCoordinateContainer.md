[Winter Cardinal UI](../README.md) / DChartSeriesBaseCoordinateContainer

# Class: DChartSeriesBaseCoordinateContainer<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

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

## Constructors

### constructor

• **new DChartSeriesBaseCoordinateContainer**<`CHART`\>(`parent`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `DChartSeriesBaseCoordinateContainerParent`<`CHART`\> |
| `options?` | [`DChartSeriesCoordinateOptions`](../interfaces/DChartSeriesCoordinateOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L29)

## Properties

### \_coordinateIdUpdatedX

• `Protected` **\_coordinateIdUpdatedX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L24)

___

### \_coordinateIdUpdatedY

• `Protected` **\_coordinateIdUpdatedY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L25)

___

### \_coordinateIndexX

• `Protected` **\_coordinateIndexX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L22)

___

### \_coordinateIndexY

• `Protected` **\_coordinateIndexY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L23)

___

### \_coordinateTransformIdUpdatedX

• `Protected` **\_coordinateTransformIdUpdatedX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L26)

___

### \_coordinateTransformIdUpdatedY

• `Protected` **\_coordinateTransformIdUpdatedY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L27)

___

### \_parent

• `Protected` **\_parent**: `DChartSeriesBaseCoordinateContainerParent`<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L21)

## Accessors

### x

• `get` **x**(): ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\>

#### Returns

``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\>

#### Implementation of

[DChartSeriesCoordinateContainer](../interfaces/DChartSeriesCoordinateContainer.md).[x](../interfaces/DChartSeriesCoordinateContainer.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L42)

___

### y

• `get` **y**(): ``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\>

#### Returns

``null`` \| [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\>

#### Implementation of

[DChartSeriesCoordinateContainer](../interfaces/DChartSeriesCoordinateContainer.md).[y](../interfaces/DChartSeriesCoordinateContainer.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L50)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L88)

___

### isDirty

▸ **isDirty**(`coordinateX`, `coordinateY`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateX` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `coordinateY` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L58)

___

### isTransformDirty

▸ **isTransformDirty**(`coordinateX`, `coordinateY`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateX` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `coordinateY` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L68)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-chart-series-base-coordinate-container.ts#L83)
