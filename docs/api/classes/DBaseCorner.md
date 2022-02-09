[Winter Cardinal UI](../README.md) / DBaseCorner

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

• **new DBaseCorner**(`theme`, `options?`, `callback?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)<`any`, `any`\> |
| `callback?` | () => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L20)

## Properties

### \_callback

• `Protected` **\_callback**: `undefined` \| `Callback`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L18)

___

### \_mask

• `Protected` `Optional` **\_mask**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L17)

___

### \_radius

• `Protected` `Optional` **\_radius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L16)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L15)

## Accessors

### mask

• `get` **mask**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[mask](../interfaces/DCorner.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L65)

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

[src/main/typescript/wcardinal/ui/d-base-corner.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L69)

___

### radius

• `get` **radius**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[radius](../interfaces/DCorner.md#radius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L47)

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

[src/main/typescript/wcardinal/ui/d-base-corner.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L51)

## Methods

### getMask

▸ **getMask**(): `number`

#### Returns

`number`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[getMask](../interfaces/DCorner.md#getmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L61)

___

### getRadius

▸ **getRadius**(): `number`

#### Returns

`number`

#### Implementation of

[DCorner](../interfaces/DCorner.md).[getRadius](../interfaces/DCorner.md#getradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L43)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DCorner](../interfaces/DCorner.md).[getTheme](../interfaces/DCorner.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-corner.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-base-corner.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L79)

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

[src/main/typescript/wcardinal/ui/d-base-corner.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-corner.ts#L39)
