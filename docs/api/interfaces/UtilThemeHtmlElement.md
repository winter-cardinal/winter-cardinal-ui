[Winter Cardinal UI - v0.164.0](../index.md) / UtilThemeHtmlElement

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L97)

___

### getBeforeCreator

▸ **getBeforeCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L95)

___

### getClipperCreator

▸ **getClipperCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLDivElement`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L86)

___

### getElementCreator

▸ **getElementCreator**(): [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`ELEMENT`\>

#### Returns

[`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`ELEMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L77)

___

### getSelect

▸ **getSelect**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L100)

___

### getWhen

▸ **getWhen**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L99)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L98)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L96)

___

### setClipperStyle

▸ **setClipperStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L87)

___

### setElementStyle

▸ **setElementStyle**(`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ELEMENT` |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L78)
