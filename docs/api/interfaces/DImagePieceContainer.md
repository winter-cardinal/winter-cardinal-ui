[Winter Cardinal UI - v0.414.0](../index.md) / DImagePieceContainer

# Interface: DImagePieceContainer

## Implemented by

- [`DImagePieceContainerImpl`](../classes/DImagePieceContainerImpl.md)

## Table of contents

### Properties

- [align](DImagePieceContainer.md#align)
- [margin](DImagePieceContainer.md#margin)
- [object](DImagePieceContainer.md#object)
- [rotation](DImagePieceContainer.md#rotation)
- [source](DImagePieceContainer.md#source)
- [tint](DImagePieceContainer.md#tint)

### Methods

- [add](DImagePieceContainer.md#add)
- [destroy](DImagePieceContainer.md#destroy)
- [get](DImagePieceContainer.md#get)
- [remove](DImagePieceContainer.md#remove)
- [size](DImagePieceContainer.md#size)

## Properties

### align

• `Readonly` **align**: [`DImagePieceAlign`](DImagePieceAlign.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L17)

___

### margin

• `Readonly` **margin**: [`DImagePieceMargin`](DImagePieceMargin.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L18)

___

### object

• `Readonly` **object**: ``null`` \| `DisplayObject`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L16)

___

### rotation

• **rotation**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L21)

___

### source

• **source**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L20)

___

### tint

• `Readonly` **tint**: [`DImagePieceTint`](DImagePieceTint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L19)

## Methods

### add

▸ **add**(`options?`): [`DImagePiece`](DImagePiece.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DImagePieceOptions`](DImagePieceOptions.md) |

#### Returns

[`DImagePiece`](DImagePiece.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L23)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L27)

___

### get

▸ **get**(`index`): ``null`` \| [`DImagePiece`](DImagePiece.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DImagePiece`](DImagePiece.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L24)

___

### remove

▸ **remove**(`index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L25)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-piece-container.ts#L26)
