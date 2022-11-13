[Winter Cardinal UI - v0.227.0](../index.md) / DImagePieceParent

# Interface: DImagePieceParent

## Hierarchy

- [`DApplicationTarget`](DApplicationTarget.md)

  ↳ **`DImagePieceParent`**

## Table of contents

### Properties

- [parent](DImagePieceParent.md#parent)
- [state](DImagePieceParent.md#state)

### Methods

- [addChild](DImagePieceParent.md#addchild)
- [getOverflowMask](DImagePieceParent.md#getoverflowmask)
- [removeChild](DImagePieceParent.md#removechild)
- [toDirty](DImagePieceParent.md#todirty)

## Properties

### parent

• `Optional` **parent**: ``null`` \| [`DApplicationTarget`](DApplicationTarget.md)

#### Inherited from

[DApplicationTarget](DApplicationTarget.md).[parent](DApplicationTarget.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L11)

___

### state

• `Readonly` **state**: [`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L52)

## Methods

### addChild

▸ **addChild**(`displayObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayObject` | `DisplayObject` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L53)

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L56)

___

### removeChild

▸ **removeChild**(`displayObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayObject` | `DisplayObject` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L54)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L55)
