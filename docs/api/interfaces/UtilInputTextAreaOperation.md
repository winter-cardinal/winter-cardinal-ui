[Winter Cardinal UI - v0.205.1](../index.md) / UtilInputTextAreaOperation

# Interface: UtilInputTextAreaOperation

## Hierarchy

- [`UtilInputOperation`](UtilInputOperation.md)<`string`, `HTMLTextAreaElement`\>

  ↳ **`UtilInputTextAreaOperation`**

## Table of contents

### Methods

- [applyTitle](UtilInputTextAreaOperation.md#applytitle)
- [containsPoint](UtilInputTextAreaOperation.md#containspoint)
- [getClipperExRects](UtilInputTextAreaOperation.md#getclipperexrects)
- [getClipperRect](UtilInputTextAreaOperation.md#getclipperrect)
- [getElementMatrix](UtilInputTextAreaOperation.md#getelementmatrix)
- [getElementRect](UtilInputTextAreaOperation.md#getelementrect)
- [getPadding](UtilInputTextAreaOperation.md#getpadding)
- [getValue](UtilInputTextAreaOperation.md#getvalue)
- [onCancel](UtilInputTextAreaOperation.md#oncancel)
- [onEnd](UtilInputTextAreaOperation.md#onend)
- [onEnter](UtilInputTextAreaOperation.md#onenter)
- [onStart](UtilInputTextAreaOperation.md#onstart)
- [onValueChange](UtilInputTextAreaOperation.md#onvaluechange)
- [onValueInput](UtilInputTextAreaOperation.md#onvalueinput)

## Methods

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[applyTitle](UtilInputOperation.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L22)

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

[UtilInputOperation](UtilInputOperation.md).[containsPoint](UtilInputOperation.md#containspoint)

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

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getClipperExRects](UtilInputOperation.md#getclipperexrects)

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

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getClipperRect](UtilInputOperation.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L153)

___

### getElementMatrix

▸ **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getElementMatrix](UtilInputOperation.md#getelementmatrix)

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

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getElementRect](UtilInputOperation.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L151)

___

### getPadding

▸ **getPadding**(): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getPadding](UtilInputOperation.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L155)

___

### getValue

▸ **getValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getValue](UtilInputOperation.md#getvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L21)

___

### onCancel

▸ **onCancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onCancel](UtilInputOperation.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L158)

___

### onEnd

▸ **onEnd**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onEnd](UtilInputOperation.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L159)

___

### onEnter

▸ **onEnter**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onEnter](UtilInputOperation.md#onenter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L26)

___

### onStart

▸ **onStart**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onStart](UtilInputOperation.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L157)

___

### onValueChange

▸ **onValueChange**(`newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |
| `oldValue` | `string` |

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onValueChange](UtilInputOperation.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L25)

___

### onValueInput

▸ **onValueInput**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onValueInput](UtilInputOperation.md#onvalueinput)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L24)
