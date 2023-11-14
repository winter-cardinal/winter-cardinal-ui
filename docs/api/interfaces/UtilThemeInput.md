[Winter Cardinal UI - v0.374.0](../index.md) / UtilThemeInput

# Interface: UtilThemeInput\<VALUE, ELEMENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `VALUE` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` |

## Hierarchy

- [`UtilThemeHtmlElement`](UtilThemeHtmlElement.md)\<`ELEMENT`\>

  ↳ **`UtilThemeInput`**

  ↳↳ [`UtilThemeInputInput`](UtilThemeInputInput.md)

  ↳↳ [`UtilThemeInputTextArea`](UtilThemeInputTextArea.md)

  ↳↳ [`DThemeInput`](DThemeInput.md)

## Table of contents

### Methods

- [getAfterCreator](UtilThemeInput.md#getaftercreator)
- [getBeforeCreator](UtilThemeInput.md#getbeforecreator)
- [getClipperCreator](UtilThemeInput.md#getclippercreator)
- [getEditingFormatter](UtilThemeInput.md#geteditingformatter)
- [getEditingUnformatter](UtilThemeInput.md#geteditingunformatter)
- [getEditingValidator](UtilThemeInput.md#geteditingvalidator)
- [getElementCreator](UtilThemeInput.md#getelementcreator)
- [getSelect](UtilThemeInput.md#getselect)
- [getWhen](UtilThemeInput.md#getwhen)
- [isClipperExEnabled](UtilThemeInput.md#isclipperexenabled)
- [setAfterStyle](UtilThemeInput.md#setafterstyle)
- [setBeforeStyle](UtilThemeInput.md#setbeforestyle)
- [setClipperStyle](UtilThemeInput.md#setclipperstyle)
- [setElementStyle](UtilThemeInput.md#setelementstyle)

## Methods

### getAfterCreator

▸ **getAfterCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[getAfterCreator](UtilThemeHtmlElement.md#getaftercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L106)

___

### getBeforeCreator

▸ **getBeforeCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[getBeforeCreator](UtilThemeHtmlElement.md#getbeforecreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L104)

___

### getClipperCreator

▸ **getClipperCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[getClipperCreator](UtilThemeHtmlElement.md#getclippercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L93)

___

### getEditingFormatter

▸ **getEditingFormatter**(): (`value`: `VALUE`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L43)

___

### getEditingUnformatter

▸ **getEditingUnformatter**(): (`text`: `string`, `caller`: `any`) => `VALUE`

#### Returns

`fn`

▸ (`text`, `caller`): `VALUE`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `caller` | `any` |

##### Returns

`VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L44)

___

### getEditingValidator

▸ **getEditingValidator**(): (`value`: `VALUE`, `caller`: `any`) => ``null`` \| `string`

#### Returns

`fn`

▸ (`value`, `caller`): ``null`` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L45)

___

### getElementCreator

▸ **getElementCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`ELEMENT`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`ELEMENT`\>

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[getElementCreator](UtilThemeHtmlElement.md#getelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L83)

___

### getSelect

▸ **getSelect**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[getSelect](UtilThemeHtmlElement.md#getselect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L109)

___

### getWhen

▸ **getWhen**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[getWhen](UtilThemeHtmlElement.md#getwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L108)

___

### isClipperExEnabled

▸ **isClipperExEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[isClipperExEnabled](UtilThemeHtmlElement.md#isclipperexenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L103)

___

### setAfterStyle

▸ **setAfterStyle**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |

#### Returns

`void`

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[setAfterStyle](UtilThemeHtmlElement.md#setafterstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L107)

___

### setBeforeStyle

▸ **setBeforeStyle**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |

#### Returns

`void`

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[setBeforeStyle](UtilThemeHtmlElement.md#setbeforestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L105)

___

### setClipperStyle

▸ **setClipperStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`, `clipperEx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |
| `clipperEx` | `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](UtilHtmlElementClipperEx.md) |

#### Returns

`void`

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[setClipperStyle](UtilThemeHtmlElement.md#setclipperstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L94)

___

### setElementStyle

▸ **setElementStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`, `clipperEx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ELEMENT` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |
| `clipperEx` | `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](UtilHtmlElementClipperEx.md) |

#### Returns

`void`

#### Inherited from

[UtilThemeHtmlElement](UtilThemeHtmlElement.md).[setElementStyle](UtilThemeHtmlElement.md#setelementstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L84)
