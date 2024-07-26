[Winter Cardinal UI - v0.442.0](../index.md) / DBaseReflowableImpl

# Class: DBaseReflowableImpl

## Implements

- [`DBaseReflowable`](../interfaces/DBaseReflowable.md)

## Table of contents

### Constructors

- [constructor](DBaseReflowableImpl.md#constructor)

### Properties

- [\_background](DBaseReflowableImpl.md#_background)
- [\_border](DBaseReflowableImpl.md#_border)
- [\_outline](DBaseReflowableImpl.md#_outline)

### Methods

- [onReflow](DBaseReflowableImpl.md#onreflow)

## Constructors

### constructor

• **new DBaseReflowableImpl**(`base`): [`DBaseReflowableImpl`](DBaseReflowableImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

[`DBaseReflowableImpl`](DBaseReflowableImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts#L17)

## Properties

### \_background

• `Protected` **\_background**: [`DBaseBackgroundSnippet`](DBaseBackgroundSnippet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts#L13)

___

### \_border

• `Protected` **\_border**: [`DBaseBorderSnippet`](DBaseBorderSnippet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts#L14)

___

### \_outline

• `Protected` **\_outline**: [`DBaseOutlineSnippet`](DBaseOutlineSnippet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts#L15)

## Methods

### onReflow

▸ **onReflow**(`base`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Implementation of

[DBaseReflowable](../interfaces/DBaseReflowable.md).[onReflow](../interfaces/DBaseReflowable.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-reflowable-impl.ts#L33)
