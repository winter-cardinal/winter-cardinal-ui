[Winter Cardinal UI - v0.167.0](../index.md) / UtilInputTextAreaOperation

# Interface: UtilInputTextAreaOperation

## Hierarchy

- [`UtilInputOperation`](UtilInputOperation.md)<`string`, `HTMLTextAreaElement`\>

  ↳ **`UtilInputTextAreaOperation`**

## Table of contents

### Methods

- [applyTitle](UtilInputTextAreaOperation.md#applytitle)
- [containsPoint](UtilInputTextAreaOperation.md#containspoint)
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

[src/main/typescript/wcardinal/ui/util/util-input.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L22)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L145)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L143)

___

### getElementMatrix

▸ **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getElementMatrix](UtilInputOperation.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L142)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L141)

___

### getPadding

▸ **getPadding**(): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getPadding](UtilInputOperation.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L144)

___

### getValue

▸ **getValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[getValue](UtilInputOperation.md#getvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L21)

___

### onCancel

▸ **onCancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onCancel](UtilInputOperation.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L147)

___

### onEnd

▸ **onEnd**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onEnd](UtilInputOperation.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L148)

___

### onEnter

▸ **onEnter**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onEnter](UtilInputOperation.md#onenter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L26)

___

### onStart

▸ **onStart**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputOperation](UtilInputOperation.md).[onStart](UtilInputOperation.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L146)

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

[src/main/typescript/wcardinal/ui/util/util-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L25)

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

[src/main/typescript/wcardinal/ui/util/util-input.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L24)
