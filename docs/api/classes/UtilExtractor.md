[Winter Cardinal UI - v0.407.0](../index.md) / UtilExtractor

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

• **new UtilExtractor**(): [`UtilExtractor`](UtilExtractor.md)

#### Returns

[`UtilExtractor`](UtilExtractor.md)

## Methods

### toBase64

▸ **toBase64**(`canvas`, `format?`, `quality?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `format?` | `string` |
| `quality?` | `number` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L105)

___

### toCanvas

▸ **toCanvas**(`pixels`, `scale?`, `ignorePremutipliedAlpha?`): `CanvasRenderTarget`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md) |
| `scale?` | `number` |
| `ignorePremutipliedAlpha?` | `boolean` |

#### Returns

`CanvasRenderTarget`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L68)

___

### toPixels

▸ **toPixels**(`renderTexture`, `renderer`): [`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderTexture` | `RenderTexture` |
| `renderer` | `Renderer` |

#### Returns

[`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L40)

___

### toTexture

▸ **toTexture**(`target`, `resolution?`, `clear?`, `skipUpdateTransform?`): `RenderTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `resolution?` | `number` |
| `clear?` | `boolean` |
| `skipUpdateTransform?` | `boolean` |

#### Returns

`RenderTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L12)
