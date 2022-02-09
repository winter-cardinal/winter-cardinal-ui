[Winter Cardinal UI - v0.154.0](../index.md) / DBasePadding

# Class: DBasePadding

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

• **new DBasePadding**(`theme`, `options?`, `callback?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)<`any`, `any`\> |
| `callback?` | () => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L20)

## Properties

### \_bottom

• `Protected` `Optional` **\_bottom**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L17)

___

### \_callback

• `Protected` **\_callback**: `undefined` \| `Callback`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L18)

___

### \_left

• `Protected` `Optional` **\_left**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L14)

___

### \_right

• `Protected` `Optional` **\_right**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L16)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L13)

___

### \_top

• `Protected` `Optional` **\_top**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L15)

## Accessors

### bottom

• `get` **bottom**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[bottom](../interfaces/DPadding.md#bottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L106)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L110)

___

### left

• `get` **left**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[left](../interfaces/DPadding.md#left)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L55)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L59)

___

### right

• `get` **right**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[right](../interfaces/DPadding.md#right)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L89)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L93)

___

### top

• `get` **top**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[top](../interfaces/DPadding.md#top)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L72)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L76)

## Methods

### getBottom

▸ **getBottom**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getBottom](../interfaces/DPadding.md#getbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L102)

___

### getCallback

▸ **getCallback**(): `undefined` \| `Callback`

#### Returns

`undefined` \| `Callback`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L47)

___

### getLeft

▸ **getLeft**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getLeft](../interfaces/DPadding.md#getleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L51)

___

### getRight

▸ **getRight**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getRight](../interfaces/DPadding.md#getright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L85)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getTheme](../interfaces/DPadding.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L39)

___

### getTop

▸ **getTop**(): `number`

#### Returns

`number`

#### Implementation of

[DPadding](../interfaces/DPadding.md).[getTop](../interfaces/DPadding.md#gettop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-padding.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L68)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L119)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L120)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L121)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L122)

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

[src/main/typescript/wcardinal/ui/d-base-padding.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-padding.ts#L43)
