[Winter Cardinal UI - v0.407.0](../index.md) / DThemeDark

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
- [getClass](DThemeDark.md#getclass)
- [set](DThemeDark.md#set)
- [setClass](DThemeDark.md#setclass)
- [set](DThemeDark.md#set-1)

## Constructors

### constructor

• **new DThemeDark**(): [`DThemeDark`](DThemeDark.md)

#### Returns

[`DThemeDark`](DThemeDark.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L14)

## Properties

### \_instances

• `Protected` **\_instances**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L12)

___

### \_classes

▪ `Static` `Protected` **\_classes**: `Record`\<`string`, () => `any`\> = `{}`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L11)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L18)

___

### getAtlas

▸ **getAtlas**(): [`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Returns

[`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Implementation of

[DTheme](../interfaces/DTheme.md).[getAtlas](../interfaces/DTheme.md#getatlas)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L52)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L38)

___

### set

▸ **set**\<`THEME`\>(`type`, `instance`): [`DThemeDark`](DThemeDark.md)

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

[`DThemeDark`](DThemeDark.md)

#### Implementation of

[DTheme](../interfaces/DTheme.md).[set](../interfaces/DTheme.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L33)

___

### setClass

▸ **setClass**\<`THEME`\>(`type`, `themeClass`): [`DThemeDark`](DThemeDark.md)

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

[`DThemeDark`](DThemeDark.md)

#### Implementation of

[DTheme](../interfaces/DTheme.md).[setClass](../interfaces/DTheme.md#setclass)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L47)

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

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark.ts#L56)
