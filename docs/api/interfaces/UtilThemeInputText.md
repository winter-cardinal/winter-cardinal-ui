[Winter Cardinal UI](../README.md) / UtilThemeInputText

# Interface: UtilThemeInputText

## Hierarchy

- [`UtilThemeInputInput`](UtilThemeInputInput.md)<`string`\>

  ↳ **`UtilThemeInputText`**

  ↳↳ [`DThemeInputText`](DThemeInputText.md)

## Table of contents

### Methods

- [getAfterCreator](UtilThemeInputText.md#getaftercreator)
- [getBeforeCreator](UtilThemeInputText.md#getbeforecreator)
- [getClipperCreator](UtilThemeInputText.md#getclippercreator)
- [getEditingFormatter](UtilThemeInputText.md#geteditingformatter)
- [getEditingUnformatter](UtilThemeInputText.md#geteditingunformatter)
- [getEditingValidator](UtilThemeInputText.md#geteditingvalidator)
- [getElementCreator](UtilThemeInputText.md#getelementcreator)
- [getSelect](UtilThemeInputText.md#getselect)
- [getWhen](UtilThemeInputText.md#getwhen)
- [setAfterStyle](UtilThemeInputText.md#setafterstyle)
- [setBeforeStyle](UtilThemeInputText.md#setbeforestyle)
- [setClipperStyle](UtilThemeInputText.md#setclipperstyle)
- [setElementStyle](UtilThemeInputText.md#setelementstyle)

## Methods

### getAfterCreator

▸ **getAfterCreator**(): [`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getAfterCreator](UtilThemeInputInput.md#getaftercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L97)

___

### getBeforeCreator

▸ **getBeforeCreator**(): [`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getBeforeCreator](UtilThemeInputInput.md#getbeforecreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L95)

___

### getClipperCreator

▸ **getClipperCreator**(): [`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getClipperCreator](UtilThemeInputInput.md#getclippercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L86)

___

### getEditingFormatter

▸ **getEditingFormatter**(): (`value`: `string`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getEditingFormatter](UtilThemeInputInput.md#geteditingformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L43)

___

### getEditingUnformatter

▸ **getEditingUnformatter**(): (`text`: `string`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`text`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getEditingUnformatter](UtilThemeInputInput.md#geteditingunformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L44)

___

### getEditingValidator

▸ **getEditingValidator**(): (`value`: `string`, `caller`: `any`) => ``null`` \| `string`

#### Returns

`fn`

▸ (`value`, `caller`): ``null`` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `caller` | `any` |

##### Returns

``null`` \| `string`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getEditingValidator](UtilThemeInputInput.md#geteditingvalidator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L45)

___

### getElementCreator

▸ **getElementCreator**(): [`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLInputElement`\>

#### Returns

[`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLInputElement`\>

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getElementCreator](UtilThemeInputInput.md#getelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L77)

___

### getSelect

▸ **getSelect**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getSelect](UtilThemeInputInput.md#getselect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L100)

___

### getWhen

▸ **getWhen**(): [`UtilHtmlElementWhen`](../README.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../README.md#utilhtmlelementwhen)

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getWhen](UtilThemeInputInput.md#getwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L99)

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

[UtilThemeInputInput](UtilThemeInputInput.md).[setAfterStyle](UtilThemeInputInput.md#setafterstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L98)

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

[UtilThemeInputInput](UtilThemeInputInput.md).[setBeforeStyle](UtilThemeInputInput.md#setbeforestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L96)

___

### setClipperStyle

▸ **setClipperStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../README.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |

#### Returns

`void`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[setClipperStyle](UtilThemeInputInput.md#setclipperstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L87)

___

### setElementStyle

▸ **setElementStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLInputElement` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../README.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |

#### Returns

`void`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[setElementStyle](UtilThemeInputInput.md#setelementstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L78)
