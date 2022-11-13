[Winter Cardinal UI - v0.227.0](../index.md) / UtilFileDownloader

# Class: UtilFileDownloader

## Table of contents

### Constructors

- [constructor](UtilFileDownloader.md#constructor)

### Methods

- [download](UtilFileDownloader.md#download)
- [downloadUrl](UtilFileDownloader.md#downloadurl)

## Constructors

### constructor

• **new UtilFileDownloader**()

## Methods

### download

▸ `Static` **download**(`filename`, `contents`, `insertBom?`): `void`

Downloads a file of the given name with the given contents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | a file name |
| `contents` | `string` | file contents |
| `insertBom?` | `boolean` | false to stop the BOM insertion |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-downloader.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-file-downloader.ts#L38)

___

### downloadUrl

▸ `Static` **downloadUrl**(`filename`, `url`): `void`

Downloads a file of the given name and URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | a file name |
| `url` | `string` | a file URL |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-downloader.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-file-downloader.ts#L13)
