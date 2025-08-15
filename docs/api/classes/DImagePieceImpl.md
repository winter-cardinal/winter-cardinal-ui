[Winter Cardinal UI - v0.457.0](../index.md) / DImagePieceImpl

# Class: DImagePieceImpl

## Implements

- [`DImagePiece`](../interfaces/DImagePiece.md)

## Table of contents

### Constructors

- [constructor](DImagePieceImpl.md#constructor)

### Properties

- [\_align](DImagePieceImpl.md#_align)
- [\_computed](DImagePieceImpl.md#_computed)
- [\_margin](DImagePieceImpl.md#_margin)
- [\_object](DImagePieceImpl.md#_object)
- [\_onUpdateBound](DImagePieceImpl.md#_onupdatebound)
- [\_parent](DImagePieceImpl.md#_parent)
- [\_rotation](DImagePieceImpl.md#_rotation)
- [\_source](DImagePieceImpl.md#_source)
- [\_theme](DImagePieceImpl.md#_theme)
- [\_tint](DImagePieceImpl.md#_tint)

### Accessors

- [align](DImagePieceImpl.md#align)
- [margin](DImagePieceImpl.md#margin)
- [object](DImagePieceImpl.md#object)
- [rotation](DImagePieceImpl.md#rotation)
- [source](DImagePieceImpl.md#source)
- [tint](DImagePieceImpl.md#tint)

### Methods

- [computeSource](DImagePieceImpl.md#computesource)
- [destroy](DImagePieceImpl.md#destroy)
- [isRefitable](DImagePieceImpl.md#isrefitable)
- [isTintAware](DImagePieceImpl.md#istintaware)
- [onStateChange](DImagePieceImpl.md#onstatechange)
- [onUpdate](DImagePieceImpl.md#onupdate)
- [toRotation](DImagePieceImpl.md#torotation)
- [updateRotation](DImagePieceImpl.md#updaterotation)
- [updateSource](DImagePieceImpl.md#updatesource)
- [updateTint](DImagePieceImpl.md#updatetint)

## Constructors

### constructor

• **new DImagePieceImpl**(`parent`, `theme`, `options?`): [`DImagePieceImpl`](DImagePieceImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DImagePieceImplParent`](../interfaces/DImagePieceImplParent.md) |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

[`DImagePieceImpl`](DImagePieceImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L37)

## Properties

### \_align

• `Protected` **\_align**: [`DImagePieceAlignImpl`](DImagePieceAlignImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L30)

___

### \_computed

• `Protected` **\_computed**: ``null`` \| `DisplayObject` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L28)

___

### \_margin

• `Protected` **\_margin**: [`DImagePieceMarginImpl`](DImagePieceMarginImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L31)

___

### \_object

• `Protected` **\_object**: ``null`` \| `DisplayObject`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L27)

___

### \_onUpdateBound

• `Protected` **\_onUpdateBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L35)

___

### \_parent

• `Protected` **\_parent**: [`DImagePieceImplParent`](../interfaces/DImagePieceImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L24)

___

### \_rotation

• `Protected` **\_rotation**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L33)

___

### \_source

• `Protected` **\_source**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L29)

___

### \_theme

• `Protected` **\_theme**: [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L25)

___

### \_tint

• `Protected` **\_tint**: [`DImagePieceTint`](../interfaces/DImagePieceTint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L32)

## Accessors

### align

• `get` **align**(): [`DImagePieceAlign`](../interfaces/DImagePieceAlign.md)

#### Returns

[`DImagePieceAlign`](../interfaces/DImagePieceAlign.md)

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[align](../interfaces/DImagePiece.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L62)

___

### margin

• `get` **margin**(): [`DImagePieceMargin`](../interfaces/DImagePieceMargin.md)

#### Returns

[`DImagePieceMargin`](../interfaces/DImagePieceMargin.md)

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[margin](../interfaces/DImagePiece.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L66)

___

### object

• `get` **object**(): ``null`` \| `DisplayObject`

#### Returns

``null`` \| `DisplayObject`

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[object](../interfaces/DImagePiece.md#object)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L58)

___

### rotation

• `get` **rotation**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[rotation](../interfaces/DImagePiece.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L87)

• `set` **rotation**(`rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[rotation](../interfaces/DImagePiece.md#rotation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L91)

___

### source

• `get` **source**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[source](../interfaces/DImagePiece.md#source)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L74)

• `set` **source**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[source](../interfaces/DImagePiece.md#source)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L78)

___

### tint

• `get` **tint**(): [`DImagePieceTint`](../interfaces/DImagePieceTint.md)

#### Returns

[`DImagePieceTint`](../interfaces/DImagePieceTint.md)

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[tint](../interfaces/DImagePiece.md#tint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L70)

## Methods

### computeSource

▸ **computeSource**(): ``null`` \| `DisplayObject` \| `Texture`

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L100)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DImagePiece](../interfaces/DImagePiece.md).[destroy](../interfaces/DImagePiece.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L259)

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

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L255)

___

### isTintAware

▸ **isTintAware**(`target`): target is DisplayObject & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `DisplayObject` |

#### Returns

target is DisplayObject & Object

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L120)

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

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L115)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L263)

___

### toRotation

▸ **toRotation**(`theme`, `state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L162)

___

### updateRotation

▸ **updateRotation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L177)

___

### updateSource

▸ **updateSource**(): `boolean`

Updates the computed source.

#### Returns

`boolean`

True if the computed source is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L199)

___

### updateTint

▸ **updateTint**(): `boolean`

Updates the tint.

#### Returns

`boolean`

True if the tint is changed.

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-impl.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-impl.ts#L131)
