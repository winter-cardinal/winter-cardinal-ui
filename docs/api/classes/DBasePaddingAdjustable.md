[Winter Cardinal UI - v0.407.0](../index.md) / DBasePaddingAdjustable

# Class: DBasePaddingAdjustable

## Hierarchy

- [`DBasePadding`](DBasePadding.md)

  ↳ **`DBasePaddingAdjustable`**

## Table of contents

### Constructors

- [constructor](DBasePaddingAdjustable.md#constructor)

### Properties

- [\_abottom](DBasePaddingAdjustable.md#_abottom)
- [\_aleft](DBasePaddingAdjustable.md#_aleft)
- [\_aright](DBasePaddingAdjustable.md#_aright)
- [\_atop](DBasePaddingAdjustable.md#_atop)
- [\_bottom](DBasePaddingAdjustable.md#_bottom)
- [\_callback](DBasePaddingAdjustable.md#_callback)
- [\_left](DBasePaddingAdjustable.md#_left)
- [\_right](DBasePaddingAdjustable.md#_right)
- [\_theme](DBasePaddingAdjustable.md#_theme)
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
- [getCallback](DBasePaddingAdjustable.md#getcallback)
- [getLeft](DBasePaddingAdjustable.md#getleft)
- [getRight](DBasePaddingAdjustable.md#getright)
- [getTheme](DBasePaddingAdjustable.md#gettheme)
- [getTop](DBasePaddingAdjustable.md#gettop)
- [set](DBasePaddingAdjustable.md#set)
- [setTheme](DBasePaddingAdjustable.md#settheme)

## Constructors

### constructor

• **new DBasePaddingAdjustable**(`theme`, `options?`, `callback?`): [`DBasePaddingAdjustable`](DBasePaddingAdjustable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)\<`any`, `any`\> |
| `callback?` | () => `void` |

#### Returns

[`DBasePaddingAdjustable`](DBasePaddingAdjustable.md)

#### Overrides

[DBasePadding](DBasePadding.md).[constructor](DBasePadding.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L15)

## Properties

### \_abottom

• `Protected` **\_abottom**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L12)

___

### \_aleft

• `Protected` **\_aleft**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L13)

___

### \_aright

• `Protected` **\_aright**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L11)

___

### \_atop

• `Protected` **\_atop**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L10)

___

### \_bottom

• `Protected` `Optional` **\_bottom**: `number`

#### Inherited from

[DBasePadding](DBasePadding.md).[_bottom](DBasePadding.md#_bottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L15)

___

### \_callback

• `Protected` `Optional` **\_callback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DBasePadding](DBasePadding.md).[_callback](DBasePadding.md#_callback)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L16)

___

### \_left

• `Protected` `Optional` **\_left**: `number`

#### Inherited from

[DBasePadding](DBasePadding.md).[_left](DBasePadding.md#_left)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L12)

___

### \_right

• `Protected` `Optional` **\_right**: `number`

#### Inherited from

[DBasePadding](DBasePadding.md).[_right](DBasePadding.md#_right)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L14)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Inherited from

[DBasePadding](DBasePadding.md).[_theme](DBasePadding.md#_theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L11)

___

### \_top

• `Protected` `Optional` **\_top**: `number`

#### Inherited from

[DBasePadding](DBasePadding.md).[_top](DBasePadding.md#_top)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L13)

## Accessors

### bottom

• `get` **bottom**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

DBasePadding.bottom

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L104)

• `set` **bottom**(`bottom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bottom` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

DBasePadding.bottom

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L108)

___

### left

• `get` **left**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

DBasePadding.left

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L53)

• `set` **left**(`left`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

DBasePadding.left

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L57)

___

### right

• `get` **right**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

DBasePadding.right

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L87)

• `set` **right**(`right`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

DBasePadding.right

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L91)

___

### top

• `get` **top**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

DBasePadding.top

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L70)

• `set` **top**(`top`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

DBasePadding.top

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L74)

## Methods

### adjBottom

▸ **adjBottom**(`abottom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `abottom` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L69)

___

### adjLeft

▸ **adjLeft**(`aleft`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aleft` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L27)

___

### adjRight

▸ **adjRight**(`aright`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aright` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L55)

___

### adjTop

▸ **adjTop**(`atop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `atop` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L41)

___

### getBottom

▸ **getBottom**(): `number`

#### Returns

`number`

#### Overrides

[DBasePadding](DBasePadding.md).[getBottom](DBasePadding.md#getbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L65)

___

### getCallback

▸ **getCallback**(): `undefined` \| () => `void`

#### Returns

`undefined` \| () => `void`

#### Inherited from

[DBasePadding](DBasePadding.md).[getCallback](DBasePadding.md#getcallback)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L45)

___

### getLeft

▸ **getLeft**(): `number`

#### Returns

`number`

#### Overrides

[DBasePadding](DBasePadding.md).[getLeft](DBasePadding.md#getleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L23)

___

### getRight

▸ **getRight**(): `number`

#### Returns

`number`

#### Overrides

[DBasePadding](DBasePadding.md).[getRight](DBasePadding.md#getright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L51)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Inherited from

[DBasePadding](DBasePadding.md).[getTheme](DBasePadding.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L37)

___

### getTop

▸ **getTop**(): `number`

#### Returns

`number`

#### Overrides

[DBasePadding](DBasePadding.md).[getTop](DBasePadding.md#gettop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding-adjustable.ts#L37)

___

### set

▸ **set**(`padding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `padding` | `number` |

#### Returns

`void`

#### Inherited from

[DBasePadding](DBasePadding.md).[set](DBasePadding.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L117)

▸ **set**(`topAndBottom`, `leftAndRight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topAndBottom` | `number` |
| `leftAndRight` | `number` |

#### Returns

`void`

#### Inherited from

[DBasePadding](DBasePadding.md).[set](DBasePadding.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L118)

▸ **set**(`top`, `leftAndRight`, `bottom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top` | `number` |
| `leftAndRight` | `number` |
| `bottom` | `number` |

#### Returns

`void`

#### Inherited from

[DBasePadding](DBasePadding.md).[set](DBasePadding.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L119)

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

#### Inherited from

[DBasePadding](DBasePadding.md).[set](DBasePadding.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L120)

___

### setTheme

▸ **setTheme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

`void`

#### Inherited from

[DBasePadding](DBasePadding.md).[setTheme](DBasePadding.md#settheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L41)
