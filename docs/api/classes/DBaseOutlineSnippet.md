[Winter Cardinal UI - v0.205.1](../index.md) / DBaseOutlineSnippet

# Class: DBaseOutlineSnippet

## Implements

- [`DBaseSnippet`](../interfaces/DBaseSnippet.md)

## Table of contents

### Constructors

- [constructor](DBaseOutlineSnippet.md#constructor)

### Properties

- [\_mesh](DBaseOutlineSnippet.md#_mesh)

### Methods

- [get](DBaseOutlineSnippet.md#get)
- [hide](DBaseOutlineSnippet.md#hide)
- [onReflow](DBaseOutlineSnippet.md#onreflow)
- [render](DBaseOutlineSnippet.md#render)
- [updateTransform](DBaseOutlineSnippet.md#updatetransform)

## Constructors

### constructor

• **new DBaseOutlineSnippet**()

## Properties

### \_mesh

• `Protected` `Optional` **\_mesh**: [`DBaseBorderMesh`](DBaseBorderMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L13)

## Methods

### get

▸ `Protected` **get**(`base`, `theme`): [`DBaseBorderMesh`](DBaseBorderMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

[`DBaseBorderMesh`](DBaseBorderMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L15)

___

### hide

▸ `Protected` **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L25)

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

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L32)

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

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L70)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DBaseSnippet](../interfaces/DBaseSnippet.md).[updateTransform](../interfaces/DBaseSnippet.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L74)
