[Winter Cardinal UI - v0.165.0](../index.md) / UtilExtractor

# Class: UtilExtractor

## Table of contents

### Constructors

- [constructor](UtilExtractor.md#constructor)

### Methods

- [toBase64](UtilExtractor.md#tobase64)
- [toCanvas](UtilExtractor.md#tocanvas)
- [toPixels](UtilExtractor.md#topixels)
- [toTexture](UtilExtractor.md#totexture)

## Constructors

### constructor

• **new UtilExtractor**()

## Methods

### toBase64

▸ `Static` **toBase64**(`canvas`, `format?`, `quality?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `format?` | `string` |
| `quality?` | `number` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L103)

___

### toCanvas

▸ `Static` **toCanvas**(`pixels`, `scale?`, `ignorePremutipliedAlpha?`): `CanvasRenderTarget`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md) |
| `scale?` | `number` |
| `ignorePremutipliedAlpha?` | `boolean` |

#### Returns

`CanvasRenderTarget`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L66)

___

### toPixels

▸ `Static` **toPixels**(`renderTexture`, `renderer`): [`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderTexture` | `RenderTexture` |
| `renderer` | `Renderer` |

#### Returns

[`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L40)

___

### toTexture

▸ `Static` **toTexture**(`target`, `resolution?`, `clear?`, `skipUpdateTransform?`): `RenderTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `resolution?` | `number` |
| `clear?` | `boolean` |
| `skipUpdateTransform?` | `boolean` |

#### Returns

`RenderTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L12)
