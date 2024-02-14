[Winter Cardinal UI - v0.407.0](../index.md) / DImagePieceAlignImpl

# Class: DImagePieceAlignImpl

## Implements

- [`DImagePieceAlign`](../interfaces/DImagePieceAlign.md)

## Table of contents

### Constructors

- [constructor](DImagePieceAlignImpl.md#constructor)

### Properties

- [\_horizontal](DImagePieceAlignImpl.md#_horizontal)
- [\_parent](DImagePieceAlignImpl.md#_parent)
- [\_vertical](DImagePieceAlignImpl.md#_vertical)
- [\_with](DImagePieceAlignImpl.md#_with)

### Accessors

- [horizontal](DImagePieceAlignImpl.md#horizontal)
- [vertical](DImagePieceAlignImpl.md#vertical)
- [with](DImagePieceAlignImpl.md#with)

### Methods

- [onChange](DImagePieceAlignImpl.md#onchange)
- [set](DImagePieceAlignImpl.md#set)

## Constructors

### constructor

• **new DImagePieceAlignImpl**(`parent`, `theme`, `options?`): [`DImagePieceAlignImpl`](DImagePieceAlignImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DImagePieceAlignImplParent`](../interfaces/DImagePieceAlignImplParent.md) |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `options?` | [`DImagePieceAlignOptions`](../interfaces/DImagePieceAlignOptions.md) |

#### Returns

[`DImagePieceAlignImpl`](DImagePieceAlignImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L18)

## Properties

### \_horizontal

• `Protected` **\_horizontal**: [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L16)

___

### \_parent

• `Protected` **\_parent**: [`DImagePieceAlignImplParent`](../interfaces/DImagePieceAlignImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L13)

___

### \_vertical

• `Protected` **\_vertical**: [`DAlignVertical`](../index.md#dalignvertical-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L15)

___

### \_with

• `Protected` **\_with**: [`DAlignWith`](../index.md#dalignwith-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L14)

## Accessors

### horizontal

• `get` **horizontal**(): [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Returns

[`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Implementation of

[DImagePieceAlign](../interfaces/DImagePieceAlign.md).[horizontal](../interfaces/DImagePieceAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L56)

• `set` **horizontal**(`horizontal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | ``"RIGHT"`` \| ``"LEFT"`` \| ``"CENTER"`` \| [`DAlignHorizontal`](../index.md#dalignhorizontal-1) |

#### Returns

`void`

#### Implementation of

[DImagePieceAlign](../interfaces/DImagePieceAlign.md).[horizontal](../interfaces/DImagePieceAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L60)

___

### vertical

• `get` **vertical**(): [`DAlignVertical`](../index.md#dalignvertical-1)

#### Returns

[`DAlignVertical`](../index.md#dalignvertical-1)

#### Implementation of

[DImagePieceAlign](../interfaces/DImagePieceAlign.md).[vertical](../interfaces/DImagePieceAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L44)

• `set` **vertical**(`vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical` | ``"TOP"`` \| ``"BOTTOM"`` \| ``"MIDDLE"`` \| [`DAlignVertical`](../index.md#dalignvertical-1) |

#### Returns

`void`

#### Implementation of

[DImagePieceAlign](../interfaces/DImagePieceAlign.md).[vertical](../interfaces/DImagePieceAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L48)

___

### with

• `get` **with**(): [`DAlignWith`](../index.md#dalignwith-1)

#### Returns

[`DAlignWith`](../index.md#dalignwith-1)

#### Implementation of

[DImagePieceAlign](../interfaces/DImagePieceAlign.md).[with](../interfaces/DImagePieceAlign.md#with)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L32)

• `set` **with**(`w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | ``"PADDING"`` \| ``"TEXT"`` \| ``"BORDER"`` \| [`DAlignWith`](../index.md#dalignwith-1) |

#### Returns

`void`

#### Implementation of

[DImagePieceAlign](../interfaces/DImagePieceAlign.md).[with](../interfaces/DImagePieceAlign.md#with)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L36)

## Methods

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L101)

___

### set

▸ **set**(`w?`, `vertical?`, `horizontal?`): [`DImagePieceAlignImpl`](DImagePieceAlignImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w?` | ``"PADDING"`` \| ``"TEXT"`` \| ``"BORDER"`` \| [`DAlignWith`](../index.md#dalignwith-1) |
| `vertical?` | ``"TOP"`` \| ``"BOTTOM"`` \| ``"MIDDLE"`` \| [`DAlignVertical`](../index.md#dalignvertical-1) |
| `horizontal?` | ``"RIGHT"`` \| ``"LEFT"`` \| ``"CENTER"`` \| [`DAlignHorizontal`](../index.md#dalignhorizontal-1) |

#### Returns

[`DImagePieceAlignImpl`](DImagePieceAlignImpl.md)

#### Implementation of

[DImagePieceAlign](../interfaces/DImagePieceAlign.md).[set](../interfaces/DImagePieceAlign.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-align-impl.ts#L68)
