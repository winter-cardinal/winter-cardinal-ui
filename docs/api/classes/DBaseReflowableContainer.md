[Winter Cardinal UI - v0.205.1](../index.md) / DBaseReflowableContainer

# Class: DBaseReflowableContainer

## Implements

- [`DBaseReflowable`](../interfaces/DBaseReflowable.md)

## Table of contents

### Constructors

- [constructor](DBaseReflowableContainer.md#constructor)

### Properties

- [\_list](DBaseReflowableContainer.md#_list)

### Methods

- [add](DBaseReflowableContainer.md#add)
- [onReflow](DBaseReflowableContainer.md#onreflow)
- [remove](DBaseReflowableContainer.md#remove)

## Constructors

### constructor

• **new DBaseReflowableContainer**()

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts#L12)

## Properties

### \_list

• `Protected` **\_list**: [`DBaseReflowable`](../interfaces/DBaseReflowable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts#L10)

## Methods

### add

▸ **add**(`reflowable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reflowable` | [`DBaseReflowable`](../interfaces/DBaseReflowable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts#L16)

___

### onReflow

▸ **onReflow**(`base`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Implementation of

[DBaseReflowable](../interfaces/DBaseReflowable.md).[onReflow](../interfaces/DBaseReflowable.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts#L28)

___

### remove

▸ **remove**(`reflowable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reflowable` | [`DBaseReflowable`](../interfaces/DBaseReflowable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-reflowable-container.ts#L20)
