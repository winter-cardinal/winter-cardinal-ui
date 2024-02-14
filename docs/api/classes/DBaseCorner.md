[Winter Cardinal UI - v0.407.0](../index.md) / DBaseCorner

# Class: DBaseCorner

## Implements

- [`DCorner`](../interfaces/DCorner.md)

## Table of contents

### Constructors

- [constructor](DBaseCorner.md#constructor)

### Properties

- [\_callback](DBaseCorner.md#_callback)
- [\_mask](DBaseCorner.md#_mask)
- [\_radius](DBaseCorner.md#_radius)
- [\_theme](DBaseCorner.md#_theme)

### Accessors

- [mask](DBaseCorner.md#mask)
- [radius](DBaseCorner.md#radius)

### Methods

- [getMask](DBaseCorner.md#getmask)
- [getRadius](DBaseCorner.md#getradius)
- [getTheme](DBaseCorner.md#gettheme)
- [set](DBaseCorner.md#set)
- [setTheme](DBaseCorner.md#settheme)

## Constructors

### constructor

• **new DBaseCorner**(`theme`, `options?`, `callback?`): [`DBaseCorner`](DBaseCorner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)\<`any`, `any`\> |
| `callback?` | () => `void` |

#### Returns

[`DBaseCorner`](DBaseCorner.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L18)

## Properties

### \_callback

• `Protected` `Optional` **\_callback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L16)

___

### \_mask

• `Protected` `Optional` **\_mask**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L15)

___

### \_radius

• `Protected` `Optional` **\_radius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L14)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L13)

## Accessors

### mask

• `get` **mask**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[mask](../interfaces/DCorner.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L63)

• `set` **mask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[mask](../interfaces/DCorner.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L67)

___

### radius

• `get` **radius**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[radius](../interfaces/DCorner.md#radius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L45)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[radius](../interfaces/DCorner.md#radius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L49)

## Methods

### getMask

▸ **getMask**(): `number`

#### Returns

`number`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[getMask](../interfaces/DCorner.md#getmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L59)

___

### getRadius

▸ **getRadius**(): `number`

#### Returns

`number`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[getRadius](../interfaces/DCorner.md#getradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L41)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DCorner](../interfaces/DCorner.md).[getTheme](../interfaces/DCorner.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L33)

___

### set

▸ **set**(`radius?`, `mask?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius?` | `number` |
| `mask?` | `number` |

#### Returns

`void`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[set](../interfaces/DCorner.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L77)

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

[DCorner](../interfaces/DCorner.md).[setTheme](../interfaces/DCorner.md#settheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L37)
