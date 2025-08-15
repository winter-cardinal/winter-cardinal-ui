[Winter Cardinal UI - v0.457.0](../index.md) / UtilExtractor

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

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L114)

___

### toCanvas

▸ **toCanvas**(`pixels`, `scale?`, `ignorePremutipliedAlpha?`, `result?`): [`UtilExtractorCanvas`](UtilExtractorCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md) |
| `scale?` | `number` |
| `ignorePremutipliedAlpha?` | `boolean` |
| `result?` | [`UtilExtractorCanvas`](UtilExtractorCanvas.md) |

#### Returns

[`UtilExtractorCanvas`](UtilExtractorCanvas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L70)

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

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L43)

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

[src/main/typescript/wcardinal/ui/util/util-extractor.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extractor.ts#L13)
