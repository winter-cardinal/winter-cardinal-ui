[Winter Cardinal UI - v0.442.0](../index.md) / DBaseBackgroundSnippet

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

• **new DBaseBackgroundSnippet**(): [`DBaseBackgroundSnippet`](DBaseBackgroundSnippet.md)

#### Returns

[`DBaseBackgroundSnippet`](DBaseBackgroundSnippet.md)

## Properties

### \_mesh

• `Protected` `Optional` **\_mesh**: [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L14)

## Methods

### get

▸ **get**(`base`, `theme`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L16)

___

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L26)

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

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L33)

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

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L63)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DBaseSnippet](../interfaces/DBaseSnippet.md).[updateTransform](../interfaces/DBaseSnippet.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-snippet.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-background-snippet.ts#L67)
