[Winter Cardinal UI - v0.407.0](../index.md) / DImagePieceTintImpl

# Class: DImagePieceTintImpl

## Implements

- [`DImagePieceTint`](../interfaces/DImagePieceTint.md)

## Table of contents

### Constructors

- [constructor](DImagePieceTintImpl.md#constructor)

### Properties

- [\_alpha](DImagePieceTintImpl.md#_alpha)
- [\_color](DImagePieceTintImpl.md#_color)
- [\_parent](DImagePieceTintImpl.md#_parent)
- [\_theme](DImagePieceTintImpl.md#_theme)

### Accessors

- [alpha](DImagePieceTintImpl.md#alpha)
- [color](DImagePieceTintImpl.md#color)

### Methods

- [getAlpha](DImagePieceTintImpl.md#getalpha)
- [getColor](DImagePieceTintImpl.md#getcolor)
- [onChange](DImagePieceTintImpl.md#onchange)
- [set](DImagePieceTintImpl.md#set)

## Constructors

### constructor

• **new DImagePieceTintImpl**(`parent`, `theme`, `options?`): [`DImagePieceTintImpl`](DImagePieceTintImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DImagePieceTintParent`](../interfaces/DImagePieceTintParent.md) |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `options?` | [`DImagePieceTintOptions`](../interfaces/DImagePieceTintOptions.md) |

#### Returns

[`DImagePieceTintImpl`](DImagePieceTintImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L19)

## Properties

### \_alpha

• `Protected` `Optional` **\_alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L16)

___

### \_color

• `Protected` `Optional` **\_color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L15)

___

### \_parent

• `Protected` **\_parent**: [`DImagePieceTintParent`](../interfaces/DImagePieceTintParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L14)

___

### \_theme

• `Protected` **\_theme**: [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L17)

## Accessors

### alpha

• `get` **alpha**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DImagePieceTint](../interfaces/DImagePieceTint.md).[alpha](../interfaces/DImagePieceTint.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L58)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DImagePieceTint](../interfaces/DImagePieceTint.md).[alpha](../interfaces/DImagePieceTint.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L62)

___

### color

• `get` **color**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\>

#### Implementation of

[DImagePieceTint](../interfaces/DImagePieceTint.md).[color](../interfaces/DImagePieceTint.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L32)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\> |

#### Returns

`void`

#### Implementation of

[DImagePieceTint](../interfaces/DImagePieceTint.md).[color](../interfaces/DImagePieceTint.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L36)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DImagePieceTint](../interfaces/DImagePieceTint.md).[getAlpha](../interfaces/DImagePieceTint.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L69)

___

### getColor

▸ **getColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DImagePieceTint](../interfaces/DImagePieceTint.md).[getColor](../interfaces/DImagePieceTint.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L43)

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L103)

___

### set

▸ **set**(`color?`, `alpha?`): [`DImagePieceTintImpl`](DImagePieceTintImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color?` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\> |
| `alpha?` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

[`DImagePieceTintImpl`](DImagePieceTintImpl.md)

#### Implementation of

[DImagePieceTint](../interfaces/DImagePieceTint.md).[set](../interfaces/DImagePieceTint.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-tint-impl.ts#L84)
