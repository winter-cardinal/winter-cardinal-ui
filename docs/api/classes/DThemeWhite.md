[Winter Cardinal UI - v0.442.0](../index.md) / DThemeWhite

# Class: DThemeWhite

## Implements

- [`DTheme`](../interfaces/DTheme.md)

## Table of contents

### Constructors

- [constructor](DThemeWhite.md#constructor)

### Properties

- [\_instances](DThemeWhite.md#_instances)
- [\_classes](DThemeWhite.md#_classes)

### Methods

- [get](DThemeWhite.md#get)
- [getAtlas](DThemeWhite.md#getatlas)
- [getClass](DThemeWhite.md#getclass)
- [set](DThemeWhite.md#set)
- [setClass](DThemeWhite.md#setclass)
- [set](DThemeWhite.md#set-1)

## Constructors

### constructor

• **new DThemeWhite**(): [`DThemeWhite`](DThemeWhite.md)

#### Returns

[`DThemeWhite`](DThemeWhite.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L14)

## Properties

### \_instances

• `Protected` **\_instances**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L12)

___

### \_classes

▪ `Static` `Protected` **\_classes**: `Record`\<`string`, () => `any`\> = `{}`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L11)

## Methods

### get

▸ **get**\<`THEME`\>(`type`): `THEME`

#### Type parameters

| Name |
| :------ |
| `THEME` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`THEME`

#### Implementation of

[DTheme](../interfaces/DTheme.md).[get](../interfaces/DTheme.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L18)

___

### getAtlas

▸ **getAtlas**(): [`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Returns

[`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Implementation of

[DTheme](../interfaces/DTheme.md).[getAtlas](../interfaces/DTheme.md#getatlas)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L52)

___

### getClass

▸ **getClass**\<`THEME`\>(`type`): () => `THEME`

#### Type parameters

| Name |
| :------ |
| `THEME` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`fn`

• **new getClass**(): `THEME`

##### Returns

`THEME`

#### Implementation of

[DTheme](../interfaces/DTheme.md).[getClass](../interfaces/DTheme.md#getclass)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L38)

___

### set

▸ **set**\<`THEME`\>(`type`, `instance`): `this`

#### Type parameters

| Name |
| :------ |
| `THEME` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `instance` | `THEME` |

#### Returns

`this`

#### Implementation of

[DTheme](../interfaces/DTheme.md).[set](../interfaces/DTheme.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L33)

___

### setClass

▸ **setClass**\<`THEME`\>(`type`, `themeClass`): `this`

#### Type parameters

| Name |
| :------ |
| `THEME` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `themeClass` | () => `THEME` |

#### Returns

`this`

#### Implementation of

[DTheme](../interfaces/DTheme.md).[setClass](../interfaces/DTheme.md#setclass)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L47)

___

### set

▸ **set**\<`THEME`\>(`type`, `themeClass`): `void`

#### Type parameters

| Name |
| :------ |
| `THEME` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `themeClass` | () => `THEME` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L56)
