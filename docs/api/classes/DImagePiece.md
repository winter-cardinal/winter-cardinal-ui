[Winter Cardinal UI - v0.164.0](../index.md) / DImagePiece

# Class: DImagePiece

## Table of contents

### Constructors

- [constructor](DImagePiece.md#constructor)

### Properties

- [\_align](DImagePiece.md#_align)
- [\_bound](DImagePiece.md#_bound)
- [\_computed](DImagePiece.md#_computed)
- [\_image](DImagePiece.md#_image)
- [\_margin](DImagePiece.md#_margin)
- [\_onUpdateBound](DImagePiece.md#_onupdatebound)
- [\_parent](DImagePiece.md#_parent)
- [\_source](DImagePiece.md#_source)
- [\_textAlign](DImagePiece.md#_textalign)
- [\_theme](DImagePiece.md#_theme)
- [\_tint](DImagePiece.md#_tint)

### Accessors

- [align](DImagePiece.md#align)
- [bound](DImagePiece.md#bound)
- [image](DImagePiece.md#image)
- [margin](DImagePiece.md#margin)
- [source](DImagePiece.md#source)

### Methods

- [computeSource](DImagePiece.md#computesource)
- [destroy](DImagePiece.md#destroy)
- [isRefitable](DImagePiece.md#isrefitable)
- [isTintAware](DImagePiece.md#istintaware)
- [onStateChange](DImagePiece.md#onstatechange)
- [onUpdate](DImagePiece.md#onupdate)
- [toTintAlpha](DImagePiece.md#totintalpha)
- [toTintColor](DImagePiece.md#totintcolor)
- [updateBound](DImagePiece.md#updatebound)
- [updateSource](DImagePiece.md#updatesource)
- [updateTint](DImagePiece.md#updatetint)

## Constructors

### constructor

• **new DImagePiece**(`parent`, `theme`, `textAlign`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DImagePieceParent`](../interfaces/DImagePieceParent.md) |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `textAlign` | [`DImagePieceTextAlign`](../interfaces/DImagePieceTextAlign.md) |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L105)

## Properties

### \_align

• `Protected` **\_align**: [`DImagePieceAlign`](../interfaces/DImagePieceAlign.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L98)

___

### \_bound

• `Protected` **\_bound**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L101)

___

### \_computed

• `Protected` **\_computed**: ``null`` \| `DisplayObject` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L96)

___

### \_image

• `Protected` **\_image**: ``null`` \| `DisplayObject`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L95)

___

### \_margin

• `Protected` **\_margin**: [`DImagePieceMargin`](../interfaces/DImagePieceMargin.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L99)

___

### \_onUpdateBound

• `Protected` **\_onUpdateBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L103)

___

### \_parent

• `Protected` **\_parent**: [`DImagePieceParent`](../interfaces/DImagePieceParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L91)

___

### \_source

• `Protected` **\_source**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L97)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DImagePieceTextAlign`](../interfaces/DImagePieceTextAlign.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L93)

___

### \_theme

• `Protected` **\_theme**: [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L92)

___

### \_tint

• `Protected` **\_tint**: `undefined` \| [`DImagePieceTintOptions`](../interfaces/DImagePieceTintOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L100)

## Accessors

### align

• `get` **align**(): [`DImagePieceAlign`](../interfaces/DImagePieceAlign.md)

#### Returns

[`DImagePieceAlign`](../interfaces/DImagePieceAlign.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L132)

___

### bound

• `get` **bound**(): `Rectangle`

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L140)

___

### image

• `get` **image**(): ``null`` \| `DisplayObject`

#### Returns

``null`` \| `DisplayObject`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L128)

___

### margin

• `get` **margin**(): [`DImagePieceMargin`](../interfaces/DImagePieceMargin.md)

#### Returns

[`DImagePieceMargin`](../interfaces/DImagePieceMargin.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L136)

___

### source

• `get` **source**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L144)

• `set` **source**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L148)

## Methods

### computeSource

▸ `Protected` **computeSource**(): ``null`` \| `DisplayObject` \| `Texture`

#### Returns

``null`` \| `DisplayObject` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L155)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:353](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L353)

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

[src/main/typescript/wcardinal/ui/d-image-piece.ts:349](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L349)

___

### isTintAware

▸ `Protected` **isTintAware**(`target`): target is DisplayObject & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `DisplayObject` |

#### Returns

target is DisplayObject & Object

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L217)

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

[src/main/typescript/wcardinal/ui/d-image-piece.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L170)

___

### onUpdate

▸ `Protected` **onUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L365)

___

### toTintAlpha

▸ `Protected` **toTintAlpha**(`theme`, `state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L241)

___

### toTintColor

▸ `Protected` **toTintColor**(`theme`, `state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L223)

___

### updateBound

▸ **updateBound**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L174)

___

### updateSource

▸ **updateSource**(): `boolean`

Updates the computed source.

#### Returns

`boolean`

True if the computed source is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L294)

___

### updateTint

▸ **updateTint**(): `boolean`

Updates the tint.

#### Returns

`boolean`

True if the tint is changed.

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-piece.ts#L264)
