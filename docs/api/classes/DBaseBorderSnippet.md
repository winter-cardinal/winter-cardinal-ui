[Winter Cardinal UI - v0.457.0](../index.md) / DBaseBorderSnippet

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

• **new DBaseBorderSnippet**(): [`DBaseBorderSnippet`](DBaseBorderSnippet.md)

#### Returns

[`DBaseBorderSnippet`](DBaseBorderSnippet.md)

## Properties

### \_mesh

• `Protected` `Optional` **\_mesh**: [`DBaseBorderMesh`](DBaseBorderMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L14)

## Methods

### get

▸ **get**(`base`, `theme`): [`DBaseBorderMesh`](DBaseBorderMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

[`DBaseBorderMesh`](DBaseBorderMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L16)

___

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L26)

___

### onReflow

▸ **onReflow**(`base`, `width`, `height`, `theme`, `state`, `cornerRadius`, `cornerMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `width` | `number` |
| `height` | `number` |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `cornerRadius` | `number` |
| `cornerMask` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L33)

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

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L70)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DBaseSnippet](../interfaces/DBaseSnippet.md).[updateTransform](../interfaces/DBaseSnippet.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-snippet.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base-border-snippet.ts#L74)
