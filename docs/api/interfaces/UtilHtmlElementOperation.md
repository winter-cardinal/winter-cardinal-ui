[Winter Cardinal UI - v0.165.0](../index.md) / UtilHtmlElementOperation

# Interface: UtilHtmlElementOperation<ELEMENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ELEMENT` | extends `HTMLElement` |

## Hierarchy

- **`UtilHtmlElementOperation`**

  ↳ [`UtilInputOperation`](UtilInputOperation.md)

## Table of contents

### Methods

- [containsPoint](UtilHtmlElementOperation.md#containspoint)
- [getClipperRect](UtilHtmlElementOperation.md#getclipperrect)
- [getElementMatrix](UtilHtmlElementOperation.md#getelementmatrix)
- [getElementRect](UtilHtmlElementOperation.md#getelementrect)
- [getPadding](UtilHtmlElementOperation.md#getpadding)
- [onCancel](UtilHtmlElementOperation.md#oncancel)
- [onEnd](UtilHtmlElementOperation.md#onend)
- [onStart](UtilHtmlElementOperation.md#onstart)

## Methods

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L145)

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

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L143)

___

### getElementMatrix

▸ **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L142)

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

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L141)

___

### getPadding

▸ **getPadding**(): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L144)

___

### onCancel

▸ **onCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L147)

___

### onEnd

▸ **onEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L148)

___

### onStart

▸ **onStart**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L146)
