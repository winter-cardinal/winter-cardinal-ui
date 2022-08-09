[Winter Cardinal UI - v0.205.1](../index.md) / DThemeWhite

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
- [set](DThemeWhite.md#set)

## Constructors

### constructor

• **new DThemeWhite**()

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L14)

## Properties

### \_instances

• `Protected` **\_instances**: `Record`<`string`, [`DTheme`](../interfaces/DTheme.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L12)

___

### \_classes

▪ `Static` `Protected` **\_classes**: `Record`<`string`, () => `any`\> = `{}`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L11)

## Methods

### get

▸ **get**<`THEME`\>(`type`): `THEME`

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

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L18)

___

### getAtlas

▸ **getAtlas**(): [`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Returns

[`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Implementation of

[DTheme](../interfaces/DTheme.md).[getAtlas](../interfaces/DTheme.md#getatlas)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L33)

___

### set

▸ `Static` **set**<`THEME`\>(`type`, `themeClass`): `void`

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

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L37)
