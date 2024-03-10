[Winter Cardinal UI - v0.414.0](../index.md) / DChartCoordinateContainerSubImpl

# Class: DChartCoordinateContainerSubImpl\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartCoordinateContainerSubImpl.md#constructor)

### Properties

- [\_container](DChartCoordinateContainerSubImpl.md#_container)
- [\_direction](DChartCoordinateContainerSubImpl.md#_direction)
- [\_list](DChartCoordinateContainerSubImpl.md#_list)

### Accessors

- [container](DChartCoordinateContainerSubImpl.md#container)

### Methods

- [add](DChartCoordinateContainerSubImpl.md#add)
- [blend](DChartCoordinateContainerSubImpl.md#blend)
- [clear](DChartCoordinateContainerSubImpl.md#clear)
- [destroy](DChartCoordinateContainerSubImpl.md#destroy)
- [fit](DChartCoordinateContainerSubImpl.md#fit)
- [get](DChartCoordinateContainerSubImpl.md#get)
- [indexOf](DChartCoordinateContainerSubImpl.md#indexof)
- [mark](DChartCoordinateContainerSubImpl.md#mark)
- [remove](DChartCoordinateContainerSubImpl.md#remove)
- [size](DChartCoordinateContainerSubImpl.md#size)

## Constructors

### constructor

• **new DChartCoordinateContainerSubImpl**\<`CHART`\>(`container`, `direction`): [`DChartCoordinateContainerSubImpl`](DChartCoordinateContainerSubImpl.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\> |
| `direction` | [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection) |

#### Returns

[`DChartCoordinateContainerSubImpl`](DChartCoordinateContainerSubImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L20)

## Properties

### \_container

• `Protected` **\_container**: [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L18)

___

### \_direction

• `Protected` **\_direction**: [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L17)

___

### \_list

• `Protected` **\_list**: [`DChartCoordinate`](../interfaces/DChartCoordinate.md)\<`CHART`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L16)

## Accessors

### container

• `get` **container**(): [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[container](../interfaces/DChartCoordinateContainerSub.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L26)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L30)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L111)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[clear](../interfaces/DChartCoordinateContainerSub.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L78)

___

### destroy

▸ **destroy**(): `this`

#### Returns

`this`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[destroy](../interfaces/DChartCoordinateContainerSub.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L87)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L95)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L43)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L51)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L103)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L55)

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

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L56)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DChartCoordinateContainerSub](../interfaces/DChartCoordinateContainerSub.md).[size](../interfaces/DChartCoordinateContainerSub.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-container-sub-impl.ts#L91)
