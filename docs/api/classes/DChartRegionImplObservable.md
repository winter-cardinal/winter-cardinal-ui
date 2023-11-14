[Winter Cardinal UI - v0.374.0](../index.md) / DChartRegionImplObservable

# Class: DChartRegionImplObservable

## Implements

- [`DChartRegion`](../interfaces/DChartRegion.md)

## Table of contents

### Constructors

- [constructor](DChartRegionImplObservable.md#constructor)

### Properties

- [\_from](DChartRegionImplObservable.md#_from)
- [\_onChange](DChartRegionImplObservable.md#_onchange)
- [\_to](DChartRegionImplObservable.md#_to)

### Accessors

- [from](DChartRegionImplObservable.md#from)
- [to](DChartRegionImplObservable.md#to)

### Methods

- [add](DChartRegionImplObservable.md#add)
- [clear](DChartRegionImplObservable.md#clear)
- [set](DChartRegionImplObservable.md#set)

## Constructors

### constructor

• **new DChartRegionImplObservable**(`from`, `to`, `onChange`): [`DChartRegionImplObservable`](DChartRegionImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |
| `onChange` | () => `void` |

#### Returns

[`DChartRegionImplObservable`](DChartRegionImplObservable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L14)

## Properties

### \_from

• `Protected` **\_from**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L10)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L12)

___

### \_to

• `Protected` **\_to**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L11)

## Accessors

### from

• `get` **from**(): `number`

#### Returns

`number`

#### Implementation of

[DChartRegion](../interfaces/DChartRegion.md).[from](../interfaces/DChartRegion.md#from)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L20)

• `set` **from**(`from`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |

#### Returns

`void`

#### Implementation of

[DChartRegion](../interfaces/DChartRegion.md).[from](../interfaces/DChartRegion.md#from)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L24)

___

### to

• `get` **to**(): `number`

#### Returns

`number`

#### Implementation of

[DChartRegion](../interfaces/DChartRegion.md).[to](../interfaces/DChartRegion.md#to)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L28)

• `set` **to**(`to`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `number` |

#### Returns

`void`

#### Implementation of

[DChartRegion](../interfaces/DChartRegion.md).[to](../interfaces/DChartRegion.md#to)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L32)

## Methods

### add

▸ **add**(`from`, `to`): [`DChartRegionImplObservable`](DChartRegionImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |

#### Returns

[`DChartRegionImplObservable`](DChartRegionImplObservable.md)

#### Implementation of

[DChartRegion](../interfaces/DChartRegion.md).[add](../interfaces/DChartRegion.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L59)

___

### clear

▸ **clear**(): [`DChartRegionImplObservable`](DChartRegionImplObservable.md)

#### Returns

[`DChartRegionImplObservable`](DChartRegionImplObservable.md)

#### Implementation of

[DChartRegion](../interfaces/DChartRegion.md).[clear](../interfaces/DChartRegion.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L73)

___

### set

▸ **set**(`from?`, `to?`): [`DChartRegionImplObservable`](DChartRegionImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

[`DChartRegionImplObservable`](DChartRegionImplObservable.md)

#### Implementation of

[DChartRegion](../interfaces/DChartRegion.md).[set](../interfaces/DChartRegion.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-region-impl-observable.ts#L36)
