[Winter Cardinal UI - v0.414.0](../index.md) / DImagePieceImplParent

# Interface: DImagePieceImplParent

## Hierarchy

- [`DApplicationTarget`](DApplicationTarget.md)

  ↳ **`DImagePieceImplParent`**

## Table of contents

### Properties

- [parent](DImagePieceImplParent.md#parent)
- [state](DImagePieceImplParent.md#state)

### Methods

- [addChild](DImagePieceImplParent.md#addchild)
- [getOverflowMask](DImagePieceImplParent.md#getoverflowmask)
- [removeChild](DImagePieceImplParent.md#removechild)
- [toDirty](DImagePieceImplParent.md#todirty)

## Properties

### parent

• `Optional` **parent**: ``null`` \| [`DApplicationTarget`](DApplicationTarget.md)

#### Inherited from

[DApplicationTarget](DApplicationTarget.md).[parent](DApplicationTarget.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L11)

___

### state

• `Readonly` **state**: [`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L16)

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

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L17)

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L20)

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

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L18)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L19)
