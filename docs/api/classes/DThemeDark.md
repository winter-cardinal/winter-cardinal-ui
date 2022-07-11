[Winter Cardinal UI - v0.200.0](../index.md) / DThemeDark

# Class: DThemeDark

## Implements

- [`DTheme`](../interfaces/DTheme.md)

## Table of contents

### Constructors

- [constructor](DThemeDark.md#constructor)

### Properties

- [\_instances](DThemeDark.md#_instances)
- [\_classes](DThemeDark.md#_classes)

### Methods

- [get](DThemeDark.md#get)
- [getAtlas](DThemeDark.md#getatlas)
- [set](DThemeDark.md#set)

## Constructors

### constructor

• **new DThemeDark**()

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L14)

## Properties

### \_instances

• `Protected` **\_instances**: `Record`<`string`, [`DTheme`](../interfaces/DTheme.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L12)

___

### \_classes

▪ `Static` `Protected` **\_classes**: `Record`<`string`, () => `any`\> = `{}`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L11)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L18)

___

### getAtlas

▸ **getAtlas**(): [`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Returns

[`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Implementation of

[DTheme](../interfaces/DTheme.md).[getAtlas](../interfaces/DTheme.md#getatlas)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L33)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L37)
