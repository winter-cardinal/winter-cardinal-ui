[Winter Cardinal UI - v0.205.1](../index.md) / UtilHtmlElementOperation

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
- [getClipperExRects](UtilHtmlElementOperation.md#getclipperexrects)
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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L156)

___

### getClipperExRects

▸ `Optional` **getClipperExRects**(`result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`UtilHtmlElementClipperExRects`](UtilHtmlElementClipperExRects.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L154)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L153)

___

### getElementMatrix

▸ **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L152)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L151)

___

### getPadding

▸ **getPadding**(): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L155)

___

### onCancel

▸ **onCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L158)

___

### onEnd

▸ **onEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L159)

___

### onStart

▸ **onStart**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L157)
