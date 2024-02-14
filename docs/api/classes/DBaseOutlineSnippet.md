[Winter Cardinal UI - v0.407.0](../index.md) / DBaseOutlineSnippet

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

• **new DBaseOutlineSnippet**(): [`DBaseOutlineSnippet`](DBaseOutlineSnippet.md)

#### Returns

[`DBaseOutlineSnippet`](DBaseOutlineSnippet.md)

## Properties

### \_mesh

• `Protected` `Optional` **\_mesh**: [`DBaseBorderMesh`](DBaseBorderMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L14)

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

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L16)

___

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L26)

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

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L33)

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

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L71)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DBaseSnippet](../interfaces/DBaseSnippet.md).[updateTransform](../interfaces/DBaseSnippet.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-outline-snippet.ts#L75)
