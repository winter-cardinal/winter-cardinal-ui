[Winter Cardinal UI - v0.457.0](../index.md) / UtilExtract

# Class: UtilExtract

## Table of contents

### Constructors

- [constructor](UtilExtract.md#constructor)

### Properties

- [WORK\_CANVAS](UtilExtract.md#work_canvas)
- [WORK\_RENDER\_TEXTURE](UtilExtract.md#work_render_texture)

### Methods

- [base64](UtilExtract.md#base64)
- [canvas](UtilExtract.md#canvas)
- [destroy](UtilExtract.md#destroy)
- [file](UtilExtract.md#file)
- [pixels](UtilExtract.md#pixels)
- [texture](UtilExtract.md#texture)

## Constructors

### constructor

• **new UtilExtract**(): [`UtilExtract`](UtilExtract.md)

#### Returns

[`UtilExtract`](UtilExtract.md)

## Properties

### WORK\_CANVAS

▪ `Static` `Protected` `Optional` **WORK\_CANVAS**: [`UtilExtractorCanvas`](UtilExtractorCanvas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L111)

___

### WORK\_RENDER\_TEXTURE

▪ `Static` `Protected` `Optional` **WORK\_RENDER\_TEXTURE**: `RenderTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L110)

## Methods

### base64

▸ **base64**(`options`): `string`

Extracts Base64 data URL from the target.
This method internally creates a render texture and a canvas render target.
They are used to extract pixels from the target.
To free the allocated render texture and canvas render target, please call [()](UtilExtract.md#destroy).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UtilExtractBase64Options`](../interfaces/UtilExtractBase64Options.md) | an extraction options |

#### Returns

`string`

extracted Base64 data URL

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L208)

___

### canvas

▸ **canvas**(`options`): [`UtilExtractorCanvas`](UtilExtractorCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UtilExtractCanvasOptions`](../interfaces/UtilExtractCanvasOptions.md) |

#### Returns

[`UtilExtractorCanvas`](UtilExtractorCanvas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L192)

___

### destroy

▸ **destroy**(): `void`

Clears all the memories.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L228)

___

### file

▸ **file**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UtilExtractFileOptions`](../interfaces/UtilExtractFileOptions.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:221](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L221)

___

### pixels

▸ **pixels**(`options`): [`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md)

Extracts pixels from the target.
This method internally creates one render texture and use that to extract pixels from the target.
To free the allocated render texture, please call [()](UtilExtract.md#destroy).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UtilExtractPixelsOptions`](../interfaces/UtilExtractPixelsOptions.md) | an extraction options |

#### Returns

[`UtilExtractorPixels`](../interfaces/UtilExtractorPixels.md)

extracted pixels

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L128)

___

### texture

▸ **texture**(`options`): `RenderTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UtilExtractTextureOptions`](../interfaces/UtilExtractTextureOptions.md) |

#### Returns

`RenderTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L113)
