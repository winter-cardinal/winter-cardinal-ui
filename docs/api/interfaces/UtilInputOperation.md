[Winter Cardinal UI - v0.155.0](../index.md) / UtilInputOperation

# Interface: UtilInputOperation<VALUE, ELEMENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `VALUE` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` |

## Hierarchy

- [`UtilHtmlElementOperation`](UtilHtmlElementOperation.md)<`ELEMENT`\>

  ↳ **`UtilInputOperation`**

  ↳↳ [`UtilInputInputOperation`](UtilInputInputOperation.md)

  ↳↳ [`UtilInputTextAreaOperation`](UtilInputTextAreaOperation.md)

## Table of contents

### Methods

- [applyTitle](UtilInputOperation.md#applytitle)
- [containsPoint](UtilInputOperation.md#containspoint)
- [getClipperRect](UtilInputOperation.md#getclipperrect)
- [getElementMatrix](UtilInputOperation.md#getelementmatrix)
- [getElementRect](UtilInputOperation.md#getelementrect)
- [getPadding](UtilInputOperation.md#getpadding)
- [getValue](UtilInputOperation.md#getvalue)
- [onCancel](UtilInputOperation.md#oncancel)
- [onEnd](UtilInputOperation.md#onend)
- [onEnter](UtilInputOperation.md#onenter)
- [onStart](UtilInputOperation.md#onstart)
- [onValueChange](UtilInputOperation.md#onvaluechange)
- [onValueInput](UtilInputOperation.md#onvalueinput)

## Methods

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L22)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[UtilHtmlElementOperation](UtilHtmlElementOperation.md).[containsPoint](UtilHtmlElementOperation.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L145)

___

### getClipperRect

▸ **getClipperRect**(`resolution`, `work`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |
| `work` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[UtilHtmlElementOperation](UtilHtmlElementOperation.md).[getClipperRect](UtilHtmlElementOperation.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L143)

___

### getElementMatrix

▸ **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Inherited from

[UtilHtmlElementOperation](UtilHtmlElementOperation.md).[getElementMatrix](UtilHtmlElementOperation.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L142)

___

### getElementRect

▸ **getElementRect**(`resolution`, `work`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |
| `work` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[UtilHtmlElementOperation](UtilHtmlElementOperation.md).[getElementRect](UtilHtmlElementOperation.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L141)

___

### getPadding

▸ **getPadding**(): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Inherited from

[UtilHtmlElementOperation](UtilHtmlElementOperation.md).[getPadding](UtilHtmlElementOperation.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L144)

___

### getValue

▸ **getValue**(): `undefined` \| `VALUE`

#### Returns

`undefined` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L21)

___

### onCancel

▸ **onCancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElementOperation](UtilHtmlElementOperation.md).[onCancel](UtilHtmlElementOperation.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L147)

___

### onEnd

▸ **onEnd**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElementOperation](UtilHtmlElementOperation.md).[onEnd](UtilHtmlElementOperation.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L148)

___

### onEnter

▸ **onEnter**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L26)

___

### onStart

▸ **onStart**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElementOperation](UtilHtmlElementOperation.md).[onStart](UtilHtmlElementOperation.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L146)

___

### onValueChange

▸ **onValueChange**(`newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `VALUE` |
| `oldValue` | `VALUE` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L25)

___

### onValueInput

▸ **onValueInput**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `VALUE` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L24)
