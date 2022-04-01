[Winter Cardinal UI - v0.160.0](../index.md) / DBaseBackgroundSnippet

# Class: DBaseBackgroundSnippet

## Implements

- [`DBaseSnippet`](../interfaces/DBaseSnippet.md)

## Table of contents

### Constructors

- [constructor](DBaseBackgroundSnippet.md#constructor)

### Properties

- [\_mesh](DBaseBackgroundSnippet.md#_mesh)

### Methods

- [get](DBaseBackgroundSnippet.md#get)
- [hide](DBaseBackgroundSnippet.md#hide)
- [onReflow](DBaseBackgroundSnippet.md#onreflow)
- [render](DBaseBackgroundSnippet.md#render)
- [updateTransform](DBaseBackgroundSnippet.md#updatetransform)

## Constructors

### constructor

• **new DBaseBackgroundSnippet**()

## Properties

### \_mesh

• `Protected` `Optional` **\_mesh**: [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L13)

## Methods

### get

▸ `Protected` **get**(`base`, `theme`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L15)

___

### hide

▸ `Protected` **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L25)

___

### onReflow

▸ **onReflow**(`base`, `width`, `height`, `theme`, `state`, `cornerRadius`, `cornerMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `width` | `number` |
| `height` | `number` |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `cornerRadius` | `number` |
| `cornerMask` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L32)

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Implementation of

[DBaseSnippet](../interfaces/DBaseSnippet.md).[render](../interfaces/DBaseSnippet.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L62)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DBaseSnippet](../interfaces/DBaseSnippet.md).[updateTransform](../interfaces/DBaseSnippet.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L66)
