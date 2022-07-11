[Winter Cardinal UI - v0.199.0](../index.md) / DOutline

# Interface: DOutline

## Hierarchy

- [`DOutlineLike`](DOutlineLike.md)

  ↳ **`DOutline`**

## Implemented by

- [`DBaseOutline`](../classes/DBaseOutline.md)

## Table of contents

### Properties

- [align](DOutline.md#align)
- [alpha](DOutline.md#alpha)
- [color](DOutline.md#color)
- [mask](DOutline.md#mask)
- [offset](DOutline.md#offset)
- [width](DOutline.md#width)

### Methods

- [getAlign](DOutline.md#getalign)
- [getAlpha](DOutline.md#getalpha)
- [getColor](DOutline.md#getcolor)
- [getMask](DOutline.md#getmask)
- [getOffset](DOutline.md#getoffset)
- [getTheme](DOutline.md#gettheme)
- [getWidth](DOutline.md#getwidth)
- [setTheme](DOutline.md#settheme)

## Properties

### align

• `Optional` **align**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DOutlineLike](DOutlineLike.md).[align](DOutlineLike.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L16)

___

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DOutlineLike](DOutlineLike.md).[alpha](DOutlineLike.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L13)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Inherited from

[DOutlineLike](DOutlineLike.md).[color](DOutlineLike.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L12)

___

### mask

• `Optional` **mask**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DOutlineLike](DOutlineLike.md).[mask](DOutlineLike.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L17)

___

### offset

• `Optional` **offset**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DOutlineLike](DOutlineLike.md).[offset](DOutlineLike.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L15)

___

### width

• `Optional` **width**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DOutlineLike](DOutlineLike.md).[width](DOutlineLike.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L14)

## Methods

### getAlign

▸ **getAlign**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L27)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L24)

___

### getColor

▸ **getColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L23)

___

### getMask

▸ **getMask**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L28)

___

### getOffset

▸ **getOffset**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L26)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](DThemeBase.md)

#### Returns

[`DThemeBase`](DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L21)

___

### getWidth

▸ **getWidth**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L25)

___

### setTheme

▸ **setTheme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](DThemeBase.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-outline.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-outline.ts#L22)
