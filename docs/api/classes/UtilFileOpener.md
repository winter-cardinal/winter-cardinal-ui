[Winter Cardinal UI - v0.442.0](../index.md) / UtilFileOpener

# Class: UtilFileOpener

An utility class for opening files.

## Table of contents

### Constructors

- [constructor](UtilFileOpener.md#constructor)

### Properties

- [\_as](UtilFileOpener.md#_as)
- [\_facade](UtilFileOpener.md#_facade)
- [\_input](UtilFileOpener.md#_input)

### Methods

- [getOrCreateInput](UtilFileOpener.md#getorcreateinput)
- [onAboart](UtilFileOpener.md#onaboart)
- [onCancel](UtilFileOpener.md#oncancel)
- [onInputChange](UtilFileOpener.md#oninputchange)
- [onOpen](UtilFileOpener.md#onopen)
- [open](UtilFileOpener.md#open)

## Constructors

### constructor

• **new UtilFileOpener**(`as`, `facade`): [`UtilFileOpener`](UtilFileOpener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `as` | [`UtilFileAs`](../index.md#utilfileas) |
| `facade` | [`UtilFileFacade`](../interfaces/UtilFileFacade.md) |

#### Returns

[`UtilFileOpener`](UtilFileOpener.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L72)

## Properties

### \_as

• `Protected` **\_as**: [`UtilFileAs`](../index.md#utilfileas)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L69)

___

### \_facade

• `Protected` **\_facade**: [`UtilFileFacade`](../interfaces/UtilFileFacade.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L70)

___

### \_input

• `Protected` **\_input**: ``null`` \| `HTMLInputElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L68)

## Methods

### getOrCreateInput

▸ **getOrCreateInput**(): ``null`` \| `HTMLInputElement`

#### Returns

``null`` \| `HTMLInputElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L87)

___

### onAboart

▸ **onAboart**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `ProgressEvent`\<`EventTarget`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L149)

___

### onCancel

▸ **onCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L154)

___

### onInputChange

▸ **onInputChange**(`input`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `HTMLInputElement` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L104)

___

### onOpen

▸ **onOpen**(`result`, `file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `string` \| `ArrayBuffer` \| `File` |
| `file` | `File` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L144)

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L78)
