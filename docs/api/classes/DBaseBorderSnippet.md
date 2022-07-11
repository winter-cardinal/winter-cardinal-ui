[Winter Cardinal UI - v0.200.0](../index.md) / DBaseBorderSnippet

# Class: DBaseBorderSnippet

## Implements

- [`DBaseSnippet`](../interfaces/DBaseSnippet.md)

## Table of contents

### Constructors

- [constructor](DBaseBorderSnippet.md#constructor)

### Properties

- [\_mesh](DBaseBorderSnippet.md#_mesh)

### Methods

- [get](DBaseBorderSnippet.md#get)
- [hide](DBaseBorderSnippet.md#hide)
- [onReflow](DBaseBorderSnippet.md#onreflow)
- [render](DBaseBorderSnippet.md#render)
- [updateTransform](DBaseBorderSnippet.md#updatetransform)

## Constructors

### constructor

• **new DBaseBorderSnippet**()

## Properties

### \_mesh

• `Protected` `Optional` **\_mesh**: [`DBaseBorderMesh`](DBaseBorderMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L13)

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

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L15)

___

### hide

▸ `Protected` **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L25)

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

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L32)

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

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L69)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DBaseSnippet](../interfaces/DBaseSnippet.md).[updateTransform](../interfaces/DBaseSnippet.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L73)
