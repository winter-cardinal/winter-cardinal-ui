[Winter Cardinal UI - v0.457.0](../index.md) / UtilFileEvents

# Interface: UtilFileEvents\<EMITTER\>

[UtilFileOpener](../classes/UtilFileOpener.md) events.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Hierarchy

- **`UtilFileEvents`**

  ↳ [`DButtonFileEvents`](DButtonFileEvents.md)

## Table of contents

### Properties

- [open](UtilFileEvents.md#open)

### Methods

- [abort](UtilFileEvents.md#abort)
- [cancel](UtilFileEvents.md#cancel)

## Properties

### open

• **open**: [`UtilFileOnOpen`](../index.md#utilfileonopen)\<`string`, `EMITTER`\> \| [`UtilFileOnOpen`](../index.md#utilfileonopen)\<`ArrayBuffer`, `EMITTER`\> \| [`UtilFileOnOpen`](../index.md#utilfileonopen)\<`File`, `EMITTER`\>

Triggered when a file is opened.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L43)

## Methods

### abort

▸ **abort**(`e`, `emitter`): `void`

Triggered when an operation is aborted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `ProgressEvent`\<`EventTarget`\> | an event object |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L54)

___

### cancel

▸ **cancel**(`emitter`): `void`

Triggered when an operation is canceled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-file-opener.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-file-opener.ts#L61)
