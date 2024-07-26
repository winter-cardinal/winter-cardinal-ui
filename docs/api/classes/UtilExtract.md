[Winter Cardinal UI - v0.442.0](../index.md) / UtilExtract

# Class: UtilExtract

## Table of contents

### Constructors

- [constructor](UtilExtract.md#constructor)

### Properties

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

### WORK\_RENDER\_TEXTURE

▪ `Static` `Protected` `Optional` **WORK\_RENDER\_TEXTURE**: `RenderTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L109)

## Methods

### base64

▸ **base64**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UtilExtractBase64Options`](../interfaces/UtilExtractBase64Options.md) |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L189)

___

### canvas

▸ **canvas**(`options`): `CanvasRenderTarget`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UtilExtractCanvasOptions`](../interfaces/UtilExtractCanvasOptions.md) |

#### Returns

`CanvasRenderTarget`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L182)

___

### destroy

▸ **destroy**(): `void`

Clears all the memories.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-extract.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L207)

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

[src/main/typescript/wcardinal/ui/util/util-extract.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L200)

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

[src/main/typescript/wcardinal/ui/util/util-extract.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L126)

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

[src/main/typescript/wcardinal/ui/util/util-extract.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-extract.ts#L111)
