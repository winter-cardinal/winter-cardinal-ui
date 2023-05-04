[Winter Cardinal UI - v0.310.1](../index.md) / DBasePaddingAdjustable

# Class: DBasePaddingAdjustable

## Implements

- [`DPadding`](../interfaces/DPadding.md)

## Table of contents

### Constructors

- [constructor](DBasePaddingAdjustable.md#constructor)

### Properties

- [\_bottom](DBasePaddingAdjustable.md#_bottom)
- [\_callback](DBasePaddingAdjustable.md#_callback)
- [\_left](DBasePaddingAdjustable.md#_left)
- [\_right](DBasePaddingAdjustable.md#_right)
- [\_target](DBasePaddingAdjustable.md#_target)
- [\_top](DBasePaddingAdjustable.md#_top)

### Accessors

- [bottom](DBasePaddingAdjustable.md#bottom)
- [left](DBasePaddingAdjustable.md#left)
- [right](DBasePaddingAdjustable.md#right)
- [top](DBasePaddingAdjustable.md#top)

### Methods

- [adjBottom](DBasePaddingAdjustable.md#adjbottom)
- [adjLeft](DBasePaddingAdjustable.md#adjleft)
- [adjRight](DBasePaddingAdjustable.md#adjright)
- [adjTop](DBasePaddingAdjustable.md#adjtop)
- [getBottom](DBasePaddingAdjustable.md#getbottom)
- [getLeft](DBasePaddingAdjustable.md#getleft)
- [getRight](DBasePaddingAdjustable.md#getright)
- [getTheme](DBasePaddingAdjustable.md#gettheme)
- [getTop](DBasePaddingAdjustable.md#gettop)
- [set](DBasePaddingAdjustable.md#set)
- [setTheme](DBasePaddingAdjustable.md#settheme)

## Constructors

### constructor

• **new DBasePaddingAdjustable**(`target`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DPadding`](../interfaces/DPadding.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L25)

## Properties

### \_bottom

• `Protected` **\_bottom**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L21)

___

### \_callback

• `Protected` `Optional` **\_callback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L23)

___

### \_left

• `Protected` **\_left**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L22)

___

### \_right

• `Protected` **\_right**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L20)

___

### \_target

• `Protected` **\_target**: [`DPadding`](../interfaces/DPadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L18)

___

### \_top

• `Protected` **\_top**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L19)

## Accessors

### bottom

• `get` **bottom**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[bottom](../interfaces/DPadding.md#bottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L124)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L128)

___

### left

• `get` **left**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[left](../interfaces/DPadding.md#left)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L58)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L62)

___

### right

• `get` **right**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[right](../interfaces/DPadding.md#right)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L102)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L106)

___

### top

• `get` **top**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[top](../interfaces/DPadding.md#top)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L80)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L84)

## Methods

### adjBottom

▸ **adjBottom**(`bottom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bottom` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L114)

___

### adjLeft

▸ **adjLeft**(`left`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L48)

___

### adjRight

▸ **adjRight**(`right`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L92)

___

### adjTop

▸ **adjTop**(`top`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L70)

___

### getBottom

▸ **getBottom**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getBottom](../interfaces/DPadding.md#getbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L110)

___

### getLeft

▸ **getLeft**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getLeft](../interfaces/DPadding.md#getleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L44)

___

### getRight

▸ **getRight**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getRight](../interfaces/DPadding.md#getright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L88)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getTheme](../interfaces/DPadding.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L36)

___

### getTop

▸ **getTop**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getTop](../interfaces/DPadding.md#gettop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L66)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L132)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L133)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L134)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L135)

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

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L40)
