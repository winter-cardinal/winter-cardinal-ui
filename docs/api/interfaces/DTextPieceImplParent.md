[Winter Cardinal UI - v0.414.0](../index.md) / DTextPieceImplParent

# Interface: DTextPieceImplParent

## Hierarchy

- [`DApplicationTarget`](DApplicationTarget.md)

  ↳ **`DTextPieceImplParent`**

## Table of contents

### Properties

- [parent](DTextPieceImplParent.md#parent)
- [state](DTextPieceImplParent.md#state)

### Methods

- [addChild](DTextPieceImplParent.md#addchild)
- [getOverflowMask](DTextPieceImplParent.md#getoverflowmask)
- [removeChild](DTextPieceImplParent.md#removechild)
- [toDirty](DTextPieceImplParent.md#todirty)

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

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L22)

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

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L23)

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L26)

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

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L24)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L25)
