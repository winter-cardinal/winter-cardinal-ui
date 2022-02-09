[Winter Cardinal UI - v0.154.0](../index.md) / DThemeDark

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L22)

## Properties

### \_instances

• `Protected` **\_instances**: `INSTANCES`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L20)

___

### \_classes

▪ `Static` `Protected` **\_classes**: `CLASSES` = `{}`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L19)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L26)

___

### getAtlas

▸ **getAtlas**(): [`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Returns

[`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Implementation of

[DTheme](../interfaces/DTheme.md).[getAtlas](../interfaces/DTheme.md#getatlas)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L41)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L45)
