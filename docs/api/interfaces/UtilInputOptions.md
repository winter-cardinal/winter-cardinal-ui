[Winter Cardinal UI - v0.227.0](../index.md) / UtilInputOptions

# Interface: UtilInputOptions<VALUE, ELEMENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `VALUE` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` |

## Hierarchy

- [`UtilHtmlElementOptions`](UtilHtmlElementOptions.md)<`ELEMENT`\>

  ↳ **`UtilInputOptions`**

  ↳↳ [`UtilInputInputOptions`](UtilInputInputOptions.md)

  ↳↳ [`UtilInputTextAreaOptions`](UtilInputTextAreaOptions.md)

  ↳↳ [`DInputOptions`](DInputOptions.md)

## Table of contents

### Properties

- [after](UtilInputOptions.md#after)
- [before](UtilInputOptions.md#before)
- [clipper](UtilInputOptions.md#clipper)
- [description](UtilInputOptions.md#description)
- [editing](UtilInputOptions.md#editing)
- [element](UtilInputOptions.md#element)
- [select](UtilInputOptions.md#select)
- [when](UtilInputOptions.md#when)

## Properties

### after

• `Optional` **after**: [`UtilHtmlElementAfterOptions`](UtilHtmlElementAfterOptions.md)

#### Inherited from

[UtilHtmlElementOptions](UtilHtmlElementOptions.md).[after](UtilHtmlElementOptions.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L77)

___

### before

• `Optional` **before**: [`UtilHtmlElementBeforeOptions`](UtilHtmlElementBeforeOptions.md)

#### Inherited from

[UtilHtmlElementOptions](UtilHtmlElementOptions.md).[before](UtilHtmlElementOptions.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L76)

___

### clipper

• `Optional` **clipper**: [`UtilHtmlElementClipperOptions`](UtilHtmlElementClipperOptions.md)

#### Inherited from

[UtilHtmlElementOptions](UtilHtmlElementOptions.md).[clipper](UtilHtmlElementOptions.md#clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L75)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L37)

___

### editing

• `Optional` **editing**: [`UtilInputEditingOptions`](UtilInputEditingOptions.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L38)

___

### element

• `Optional` **element**: [`UtilHtmlElementElementOptions`](UtilHtmlElementElementOptions.md)<`ELEMENT`\>

#### Inherited from

[UtilHtmlElementOptions](UtilHtmlElementOptions.md).[element](UtilHtmlElementOptions.md#element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L74)

___

### select

• `Optional` **select**: `boolean`

#### Inherited from

[UtilHtmlElementOptions](UtilHtmlElementOptions.md).[select](UtilHtmlElementOptions.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L79)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| ``"FOCUSED"`` \| ``"ALWAYS"`` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Inherited from

[UtilHtmlElementOptions](UtilHtmlElementOptions.md).[when](UtilHtmlElementOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L78)
