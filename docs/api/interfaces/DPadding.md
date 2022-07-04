[Winter Cardinal UI - v0.194.0](../index.md) / DPadding

# Interface: DPadding

## Hierarchy

- [`DPaddingLike`](DPaddingLike.md)

  ↳ **`DPadding`**

## Implemented by

- [`DApplicationPadding`](../classes/DApplicationPadding.md)
- [`DBasePadding`](../classes/DBasePadding.md)
- [`DBasePaddingAdjustable`](../classes/DBasePaddingAdjustable.md)

## Table of contents

### Properties

- [bottom](DPadding.md#bottom)
- [left](DPadding.md#left)
- [right](DPadding.md#right)
- [top](DPadding.md#top)

### Methods

- [getBottom](DPadding.md#getbottom)
- [getLeft](DPadding.md#getleft)
- [getRight](DPadding.md#getright)
- [getTheme](DPadding.md#gettheme)
- [getTop](DPadding.md#gettop)
- [set](DPadding.md#set)
- [setTheme](DPadding.md#settheme)

## Properties

### bottom

• `Optional` **bottom**: `number`

#### Inherited from

[DPaddingLike](DPaddingLike.md).[bottom](DPaddingLike.md#bottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L12)

___

### left

• `Optional` **left**: `number`

#### Inherited from

[DPaddingLike](DPaddingLike.md).[left](DPaddingLike.md#left)

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L9)

___

### right

• `Optional` **right**: `number`

#### Inherited from

[DPaddingLike](DPaddingLike.md).[right](DPaddingLike.md#right)

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L11)

___

### top

• `Optional` **top**: `number`

#### Inherited from

[DPaddingLike](DPaddingLike.md).[top](DPaddingLike.md#top)

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L10)

## Methods

### getBottom

▸ **getBottom**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L25)

___

### getLeft

▸ **getLeft**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L22)

___

### getRight

▸ **getRight**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L24)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](DThemeBase.md)

#### Returns

[`DThemeBase`](DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L20)

___

### getTop

▸ **getTop**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L23)

___

### set

▸ **set**(`padding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `padding` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L16)

▸ **set**(`topAndBottom`, `leftAndRight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topAndBottom` | `number` |
| `leftAndRight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L17)

▸ **set**(`top`, `leftAndRight`, `bottom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top` | `number` |
| `leftAndRight` | `number` |
| `bottom` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L18)

▸ **set**(`top`, `right`, `bottom`, `left`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top` | `number` |
| `right` | `number` |
| `bottom` | `number` |
| `left` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-padding.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L19)

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

[src/main/typescript/wcardinal/ui/d-padding.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-padding.ts#L21)
