[Winter Cardinal UI - v0.407.0](../index.md) / DImagePieceContainerImpl

# Class: DImagePieceContainerImpl

## Implements

- [`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

## Table of contents

### Constructors

- [constructor](DImagePieceContainerImpl.md#constructor)

### Properties

- [\_parent](DImagePieceContainerImpl.md#_parent)
- [\_pieces](DImagePieceContainerImpl.md#_pieces)
- [\_theme](DImagePieceContainerImpl.md#_theme)

### Accessors

- [align](DImagePieceContainerImpl.md#align)
- [margin](DImagePieceContainerImpl.md#margin)
- [object](DImagePieceContainerImpl.md#object)
- [rotation](DImagePieceContainerImpl.md#rotation)
- [source](DImagePieceContainerImpl.md#source)
- [tint](DImagePieceContainerImpl.md#tint)

### Methods

- [add](DImagePieceContainerImpl.md#add)
- [destroy](DImagePieceContainerImpl.md#destroy)
- [get](DImagePieceContainerImpl.md#get)
- [isRefitable](DImagePieceContainerImpl.md#isrefitable)
- [newImage](DImagePieceContainerImpl.md#newimage)
- [onStateChange](DImagePieceContainerImpl.md#onstatechange)
- [remove](DImagePieceContainerImpl.md#remove)
- [size](DImagePieceContainerImpl.md#size)
- [update](DImagePieceContainerImpl.md#update)

## Constructors

### constructor

• **new DImagePieceContainerImpl**(`parent`, `theme`, `options?`): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DImagePieceImplParent`](../interfaces/DImagePieceImplParent.md) |
| `theme` | [`DThemeImagePieceContainer`](../interfaces/DThemeImagePieceContainer.md) |
| `options?` | [`DImagePieceContainerImplOptions`](../interfaces/DImagePieceContainerImplOptions.md) |

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L25)

## Properties

### \_parent

• `Protected` **\_parent**: [`DImagePieceImplParent`](../interfaces/DImagePieceImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L21)

___

### \_pieces

• `Protected` **\_pieces**: [`DImagePieceImpl`](DImagePieceImpl.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L23)

___

### \_theme

• `Protected` **\_theme**: [`DThemeImagePieceContainer`](../interfaces/DThemeImagePieceContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L22)

## Accessors

### align

• `get` **align**(): [`DImagePieceAlign`](../interfaces/DImagePieceAlign.md)

#### Returns

[`DImagePieceAlign`](../interfaces/DImagePieceAlign.md)

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[align](../interfaces/DImagePieceContainer.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L111)

___

### margin

• `get` **margin**(): [`DImagePieceMargin`](../interfaces/DImagePieceMargin.md)

#### Returns

[`DImagePieceMargin`](../interfaces/DImagePieceMargin.md)

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[margin](../interfaces/DImagePieceContainer.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L115)

___

### object

• `get` **object**(): ``null`` \| `DisplayObject`

#### Returns

``null`` \| `DisplayObject`

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[object](../interfaces/DImagePieceContainer.md#object)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L107)

___

### rotation

• `get` **rotation**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[rotation](../interfaces/DImagePieceContainer.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L131)

• `set` **rotation**(`rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[rotation](../interfaces/DImagePieceContainer.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L135)

___

### source

• `get` **source**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[source](../interfaces/DImagePieceContainer.md#source)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L123)

• `set` **source**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[source](../interfaces/DImagePieceContainer.md#source)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L127)

___

### tint

• `get` **tint**(): [`DImagePieceTint`](../interfaces/DImagePieceTint.md)

#### Returns

[`DImagePieceTint`](../interfaces/DImagePieceTint.md)

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[tint](../interfaces/DImagePieceContainer.md#tint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L119)

## Methods

### add

▸ **add**(`options?`): [`DImagePiece`](../interfaces/DImagePiece.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

[`DImagePiece`](../interfaces/DImagePiece.md)

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[add](../interfaces/DImagePieceContainer.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L139)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[destroy](../interfaces/DImagePieceContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L166)

___

### get

▸ **get**(`index`): ``null`` \| [`DImagePiece`](../interfaces/DImagePiece.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DImagePiece`](../interfaces/DImagePiece.md)

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[get](../interfaces/DImagePieceContainer.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L145)

___

### isRefitable

▸ **isRefitable**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L86)

___

### newImage

▸ **newImage**(`theme`, `options?`): [`DImagePieceImpl`](DImagePieceImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

[`DImagePieceImpl`](DImagePieceImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L75)

___

### onStateChange

▸ **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L79)

___

### remove

▸ **remove**(`index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`boolean`

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[remove](../interfaces/DImagePieceContainer.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L153)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DImagePieceContainer](../interfaces/DImagePieceContainer.md).[size](../interfaces/DImagePieceContainer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L162)

___

### update

▸ **update**(`layouter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layouter` | [`DImagePieceLayouter`](DImagePieceLayouter.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-container-impl.ts#L96)
