[Winter Cardinal UI - v0.227.0](../index.md) / UtilHtmlElementClipperExImpl

# Class: UtilHtmlElementClipperExImpl

## Implements

- [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)

## Table of contents

### Constructors

- [constructor](UtilHtmlElementClipperExImpl.md#constructor)

### Accessors

- [id](UtilHtmlElementClipperExImpl.md#id)

### Methods

- [toD](UtilHtmlElementClipperExImpl.md#tod)
- [toRects](UtilHtmlElementClipperExImpl.md#torects)
- [update](UtilHtmlElementClipperExImpl.md#update)

## Constructors

### constructor

• **new UtilHtmlElementClipperExImpl**(`container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `HTMLElement` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts#L18)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

[UtilHtmlElementClipperEx](../interfaces/UtilHtmlElementClipperEx.md).[id](../interfaces/UtilHtmlElementClipperEx.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts#L41)

## Methods

### toD

▸ `Protected` **toD**(`elementRect`, `elementMatrix`, `clipperExRects`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperExRects` | [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md) |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts#L57)

___

### toRects

▸ `Protected` **toRects**(`clipperExRects`, `result`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipperExRects` | [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md) |
| `result` | `number`[] |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts#L136)

___

### update

▸ **update**(`elementRect`, `elementMatrix`, `clipperExRects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperExRects` | [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md) |

#### Returns

`void`

#### Implementation of

[UtilHtmlElementClipperEx](../interfaces/UtilHtmlElementClipperEx.md).[update](../interfaces/UtilHtmlElementClipperEx.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element-clipper-ex-impl.ts#L45)
