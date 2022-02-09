[Winter Cardinal UI](../README.md) / DThemeWhite

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

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L22)

## Properties

### \_instances

• `Protected` **\_instances**: `INSTANCES`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L20)

___

### \_classes

▪ `Static` `Protected` **\_classes**: `CLASSES` = `{}`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L19)

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

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L26)

___

### getAtlas

▸ **getAtlas**(): [`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Returns

[`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Implementation of

[DTheme](../interfaces/DTheme.md).[getAtlas](../interfaces/DTheme.md#getatlas)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L41)

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

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white.ts#L45)
