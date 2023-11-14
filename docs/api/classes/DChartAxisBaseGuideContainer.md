[Winter Cardinal UI - v0.374.0](../index.md) / DChartAxisBaseGuideContainer

# Class: DChartAxisBaseGuideContainer\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartAxisGuideContainer`](../interfaces/DChartAxisGuideContainer.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartAxisBaseGuideContainer.md#constructor)

### Properties

- [\_axis](DChartAxisBaseGuideContainer.md#_axis)
- [\_container](DChartAxisBaseGuideContainer.md#_container)
- [\_index](DChartAxisBaseGuideContainer.md#_index)
- [\_list](DChartAxisBaseGuideContainer.md#_list)

### Methods

- [add](DChartAxisBaseGuideContainer.md#add)
- [bind](DChartAxisBaseGuideContainer.md#bind)
- [clear](DChartAxisBaseGuideContainer.md#clear)
- [destroy](DChartAxisBaseGuideContainer.md#destroy)
- [get](DChartAxisBaseGuideContainer.md#get)
- [indexOf](DChartAxisBaseGuideContainer.md#indexof)
- [size](DChartAxisBaseGuideContainer.md#size)
- [unbind](DChartAxisBaseGuideContainer.md#unbind)
- [update](DChartAxisBaseGuideContainer.md#update)

## Constructors

### constructor

• **new DChartAxisBaseGuideContainer**\<`CHART`\>(`axis`): [`DChartAxisBaseGuideContainer`](DChartAxisBaseGuideContainer.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\> |

#### Returns

[`DChartAxisBaseGuideContainer`](DChartAxisBaseGuideContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L16)

## Properties

### \_axis

• `Protected` **\_axis**: [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L10)

___

### \_container

• `Protected` `Optional` **\_container**: [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L11)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L12)

___

### \_list

• `Protected` **\_list**: [`DChartAxisGuide`](../interfaces/DChartAxisGuide.md)\<`CHART`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L14)

## Methods

### add

▸ **add**(`guide`): [`DChartAxisBaseGuideContainer`](DChartAxisBaseGuideContainer.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guide` | [`DChartAxisGuide`](../interfaces/DChartAxisGuide.md)\<`CHART`\> |

#### Returns

[`DChartAxisBaseGuideContainer`](DChartAxisBaseGuideContainer.md)\<`CHART`\>

#### Implementation of

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[add](../interfaces/DChartAxisGuideContainer.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L22)

___

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

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[bind](../interfaces/DChartAxisGuideContainer.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L57)

___

### clear

▸ **clear**(): [`DChartAxisBaseGuideContainer`](DChartAxisBaseGuideContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisBaseGuideContainer`](DChartAxisBaseGuideContainer.md)\<`CHART`\>

#### Implementation of

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[clear](../interfaces/DChartAxisGuideContainer.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L44)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[destroy](../interfaces/DChartAxisGuideContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L87)

___

### get

▸ **get**(`index`): ``null`` \| [`DChartAxisGuide`](../interfaces/DChartAxisGuide.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DChartAxisGuide`](../interfaces/DChartAxisGuide.md)\<`CHART`\>

#### Implementation of

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[get](../interfaces/DChartAxisGuideContainer.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L32)

___

### indexOf

▸ **indexOf**(`guide`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guide` | [`DChartAxisGuide`](../interfaces/DChartAxisGuide.md)\<`CHART`\> |

#### Returns

`number`

#### Implementation of

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[indexOf](../interfaces/DChartAxisGuideContainer.md#indexof)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L40)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[size](../interfaces/DChartAxisGuideContainer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L53)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[unbind](../interfaces/DChartAxisGuideContainer.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L67)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartAxisGuideContainer](../interfaces/DChartAxisGuideContainer.md).[update](../interfaces/DChartAxisGuideContainer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-axis-base-guide-container.ts#L76)
