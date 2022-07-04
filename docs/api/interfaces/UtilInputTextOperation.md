[Winter Cardinal UI - v0.194.0](../index.md) / UtilInputTextOperation

# Interface: UtilInputTextOperation

## Hierarchy

- [`UtilInputInputOperation`](UtilInputInputOperation.md)<`string`\>

  ↳ **`UtilInputTextOperation`**

## Table of contents

### Methods

- [applyTitle](UtilInputTextOperation.md#applytitle)
- [containsPoint](UtilInputTextOperation.md#containspoint)
- [getClipperExRects](UtilInputTextOperation.md#getclipperexrects)
- [getClipperRect](UtilInputTextOperation.md#getclipperrect)
- [getElementMatrix](UtilInputTextOperation.md#getelementmatrix)
- [getElementRect](UtilInputTextOperation.md#getelementrect)
- [getPadding](UtilInputTextOperation.md#getpadding)
- [getValue](UtilInputTextOperation.md#getvalue)
- [onCancel](UtilInputTextOperation.md#oncancel)
- [onEnd](UtilInputTextOperation.md#onend)
- [onEnter](UtilInputTextOperation.md#onenter)
- [onStart](UtilInputTextOperation.md#onstart)
- [onValueChange](UtilInputTextOperation.md#onvaluechange)
- [onValueInput](UtilInputTextOperation.md#onvalueinput)

## Methods

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInputOperation](UtilInputInputOperation.md).[applyTitle](UtilInputInputOperation.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L22)

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

[UtilInputInputOperation](UtilInputInputOperation.md).[containsPoint](UtilInputInputOperation.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L156)

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

[UtilInputInputOperation](UtilInputInputOperation.md).[getClipperExRects](UtilInputInputOperation.md#getclipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L154)

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

[UtilInputInputOperation](UtilInputInputOperation.md).[getClipperRect](UtilInputInputOperation.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L153)

___

### getElementMatrix

▸ **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Inherited from

[UtilInputInputOperation](UtilInputInputOperation.md).[getElementMatrix](UtilInputInputOperation.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L152)

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

[UtilInputInputOperation](UtilInputInputOperation.md).[getElementRect](UtilInputInputOperation.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L151)

___

### getPadding

▸ **getPadding**(): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Inherited from

[UtilInputInputOperation](UtilInputInputOperation.md).[getPadding](UtilInputInputOperation.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L155)

___

### getValue

▸ **getValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[UtilInputInputOperation](UtilInputInputOperation.md).[getValue](UtilInputInputOperation.md#getvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L21)

___

### onCancel

▸ **onCancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInputOperation](UtilInputInputOperation.md).[onCancel](UtilInputInputOperation.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L158)

___

### onEnd

▸ **onEnd**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInputOperation](UtilInputInputOperation.md).[onEnd](UtilInputInputOperation.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L159)

___

### onEnter

▸ **onEnter**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInputOperation](UtilInputInputOperation.md).[onEnter](UtilInputInputOperation.md#onenter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L26)

___

### onStart

▸ **onStart**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInputOperation](UtilInputInputOperation.md).[onStart](UtilInputInputOperation.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L157)

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

[UtilInputInputOperation](UtilInputInputOperation.md).[onValueChange](UtilInputInputOperation.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L25)

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

[UtilInputInputOperation](UtilInputInputOperation.md).[onValueInput](UtilInputInputOperation.md#onvalueinput)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L24)
