[Winter Cardinal UI - v0.310.1](../index.md) / UtilThemeHtmlElement

# Interface: UtilThemeHtmlElement<ELEMENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ELEMENT` | extends `HTMLElement` |

## Hierarchy

- **`UtilThemeHtmlElement`**

  ↳ [`UtilThemeInput`](UtilThemeInput.md)

  ↳ [`DThemeHtmlElement`](DThemeHtmlElement.md)

## Table of contents

### Methods

- [getAfterCreator](UtilThemeHtmlElement.md#getaftercreator)
- [getBeforeCreator](UtilThemeHtmlElement.md#getbeforecreator)
- [getClipperCreator](UtilThemeHtmlElement.md#getclippercreator)
- [getElementCreator](UtilThemeHtmlElement.md#getelementcreator)
- [getSelect](UtilThemeHtmlElement.md#getselect)
- [getWhen](UtilThemeHtmlElement.md#getwhen)
- [isClipperExEnabled](UtilThemeHtmlElement.md#isclipperexenabled)
- [setAfterStyle](UtilThemeHtmlElement.md#setafterstyle)
- [setBeforeStyle](UtilThemeHtmlElement.md#setbeforestyle)
- [setClipperStyle](UtilThemeHtmlElement.md#setclipperstyle)
- [setElementStyle](UtilThemeHtmlElement.md#setelementstyle)

## Methods

### getAfterCreator

▸ **getAfterCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L106)

___

### getBeforeCreator

▸ **getBeforeCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L104)

___

### getClipperCreator

▸ **getClipperCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L93)

___

### getElementCreator

▸ **getElementCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`ELEMENT`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`ELEMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L83)

___

### getSelect

▸ **getSelect**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L109)

___

### getWhen

▸ **getWhen**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L108)

___

### isClipperExEnabled

▸ **isClipperExEnabled**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L84)
