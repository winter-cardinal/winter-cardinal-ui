[Winter Cardinal UI - v0.414.0](../index.md) / UtilThemeInputNumber

# Interface: UtilThemeInputNumber

## Hierarchy

- [`UtilThemeInputInput`](UtilThemeInputInput.md)\<`number`\>

  ↳ **`UtilThemeInputNumber`**

  ↳↳ [`DThemeInputNumber`](DThemeInputNumber.md)

## Table of contents

### Methods

- [getAfterCreator](UtilThemeInputNumber.md#getaftercreator)
- [getBeforeCreator](UtilThemeInputNumber.md#getbeforecreator)
- [getClipperCreator](UtilThemeInputNumber.md#getclippercreator)
- [getEditingFormatter](UtilThemeInputNumber.md#geteditingformatter)
- [getEditingUnformatter](UtilThemeInputNumber.md#geteditingunformatter)
- [getEditingValidator](UtilThemeInputNumber.md#geteditingvalidator)
- [getElementCreator](UtilThemeInputNumber.md#getelementcreator)
- [getMax](UtilThemeInputNumber.md#getmax)
- [getMin](UtilThemeInputNumber.md#getmin)
- [getSelect](UtilThemeInputNumber.md#getselect)
- [getStep](UtilThemeInputNumber.md#getstep)
- [getWhen](UtilThemeInputNumber.md#getwhen)
- [isClipperExEnabled](UtilThemeInputNumber.md#isclipperexenabled)
- [setAfterStyle](UtilThemeInputNumber.md#setafterstyle)
- [setBeforeStyle](UtilThemeInputNumber.md#setbeforestyle)
- [setClipperStyle](UtilThemeInputNumber.md#setclipperstyle)
- [setElementStyle](UtilThemeInputNumber.md#setelementstyle)

## Methods

### getAfterCreator

▸ **getAfterCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getAfterCreator](UtilThemeInputInput.md#getaftercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L106)

___

### getBeforeCreator

▸ **getBeforeCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getBeforeCreator](UtilThemeInputInput.md#getbeforecreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L104)

___

### getClipperCreator

▸ **getClipperCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLDivElement`\>

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getClipperCreator](UtilThemeInputInput.md#getclippercreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L93)

___

### getEditingFormatter

▸ **getEditingFormatter**(): (`value`: `number`, `caller`: `any`) => `string`

#### Returns

`fn`

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getEditingFormatter](UtilThemeInputInput.md#geteditingformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L43)

___

### getEditingUnformatter

▸ **getEditingUnformatter**(): (`text`: `string`, `caller`: `any`) => `number`

#### Returns

`fn`

▸ (`text`, `caller`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `caller` | `any` |

##### Returns

`number`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getEditingUnformatter](UtilThemeInputInput.md#geteditingunformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L44)

___

### getEditingValidator

▸ **getEditingValidator**(): (`value`: `number`, `caller`: `any`) => ``null`` \| `string`

#### Returns

`fn`

▸ (`value`, `caller`): ``null`` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `caller` | `any` |

##### Returns

``null`` \| `string`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getEditingValidator](UtilThemeInputInput.md#geteditingvalidator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L45)

___

### getElementCreator

▸ **getElementCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLInputElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLInputElement`\>

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getElementCreator](UtilThemeInputInput.md#getelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L83)

___

### getMax

▸ **getMax**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L27)

___

### getMin

▸ **getMin**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L26)

___

### getSelect

▸ **getSelect**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getSelect](UtilThemeInputInput.md#getselect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L109)

___

### getStep

▸ **getStep**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L25)

___

### getWhen

▸ **getWhen**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[getWhen](UtilThemeInputInput.md#getwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L108)

___

### isClipperExEnabled

▸ **isClipperExEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[isClipperExEnabled](UtilThemeInputInput.md#isclipperexenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L103)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L107)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L105)

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

[UtilThemeInputInput](UtilThemeInputInput.md).[setClipperStyle](UtilThemeInputInput.md#setclipperstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L94)

___

### setElementStyle

▸ **setElementStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`, `clipperEx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLInputElement` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |
| `clipperEx` | `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](UtilHtmlElementClipperEx.md) |

#### Returns

`void`

#### Inherited from

[UtilThemeInputInput](UtilThemeInputInput.md).[setElementStyle](UtilThemeInputInput.md#setelementstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L84)
