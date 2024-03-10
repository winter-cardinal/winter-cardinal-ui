[Winter Cardinal UI - v0.414.0](../index.md) / DBasePadding

# Class: DBasePadding

## Hierarchy

- **`DBasePadding`**

  ↳ [`DBasePaddingAdjustable`](DBasePaddingAdjustable.md)

## Implements

- [`DPadding`](../interfaces/DPadding.md)

## Table of contents

### Constructors

- [constructor](DBasePadding.md#constructor)

### Properties

- [\_bottom](DBasePadding.md#_bottom)
- [\_callback](DBasePadding.md#_callback)
- [\_left](DBasePadding.md#_left)
- [\_right](DBasePadding.md#_right)
- [\_theme](DBasePadding.md#_theme)
- [\_top](DBasePadding.md#_top)

### Accessors

- [bottom](DBasePadding.md#bottom)
- [left](DBasePadding.md#left)
- [right](DBasePadding.md#right)
- [top](DBasePadding.md#top)

### Methods

- [getBottom](DBasePadding.md#getbottom)
- [getCallback](DBasePadding.md#getcallback)
- [getLeft](DBasePadding.md#getleft)
- [getRight](DBasePadding.md#getright)
- [getTheme](DBasePadding.md#gettheme)
- [getTop](DBasePadding.md#gettop)
- [set](DBasePadding.md#set)
- [setTheme](DBasePadding.md#settheme)

## Constructors

### constructor

• **new DBasePadding**(`theme`, `options?`, `callback?`): [`DBasePadding`](DBasePadding.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)\<`any`, `any`\> |
| `callback?` | () => `void` |

#### Returns

[`DBasePadding`](DBasePadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L18)

## Properties

### \_bottom

• `Protected` `Optional` **\_bottom**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L15)

___

### \_callback

• `Protected` `Optional` **\_callback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L16)

___

### \_left

• `Protected` `Optional` **\_left**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L12)

___

### \_right

• `Protected` `Optional` **\_right**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L14)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L11)

___

### \_top

• `Protected` `Optional` **\_top**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L13)

## Accessors

### bottom

• `get` **bottom**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[bottom](../interfaces/DPadding.md#bottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L104)

• `set` **bottom**(`bottom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bottom` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[bottom](../interfaces/DPadding.md#bottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L108)

___

### left

• `get` **left**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[left](../interfaces/DPadding.md#left)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L53)

• `set` **left**(`left`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[left](../interfaces/DPadding.md#left)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L57)

___

### right

• `get` **right**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[right](../interfaces/DPadding.md#right)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L87)

• `set` **right**(`right`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[right](../interfaces/DPadding.md#right)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L91)

___

### top

• `get` **top**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[top](../interfaces/DPadding.md#top)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L70)

• `set` **top**(`top`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[top](../interfaces/DPadding.md#top)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L74)

## Methods

### getBottom

▸ **getBottom**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getBottom](../interfaces/DPadding.md#getbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L100)

___

### getCallback

▸ **getCallback**(): `undefined` \| () => `void`

#### Returns

`undefined` \| () => `void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L45)

___

### getLeft

▸ **getLeft**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getLeft](../interfaces/DPadding.md#getleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L49)

___

### getRight

▸ **getRight**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getRight](../interfaces/DPadding.md#getright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L83)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getTheme](../interfaces/DPadding.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L37)

___

### getTop

▸ **getTop**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getTop](../interfaces/DPadding.md#gettop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L66)

___

### set

▸ **set**(`padding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `padding` | `number` |

#### Returns

`void`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[set](../interfaces/DPadding.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L117)

▸ **set**(`topAndBottom`, `leftAndRight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topAndBottom` | `number` |
| `leftAndRight` | `number` |

#### Returns

`void`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[set](../interfaces/DPadding.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L118)

▸ **set**(`top`, `leftAndRight`, `bottom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top` | `number` |
| `leftAndRight` | `number` |
| `bottom` | `number` |

#### Returns

`void`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[set](../interfaces/DPadding.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L119)

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

#### Implementation of

[DPadding](../interfaces/DPadding.md).[set](../interfaces/DPadding.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L120)

___

### setTheme

▸ **setTheme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

`void`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[setTheme](../interfaces/DPadding.md#settheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L41)
