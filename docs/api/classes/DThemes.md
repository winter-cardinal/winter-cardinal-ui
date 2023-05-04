[Winter Cardinal UI - v0.310.1](../index.md) / DThemes

# Class: DThemes

## Table of contents

### Constructors

- [constructor](DThemes.md#constructor)

### Methods

- [get](DThemes.md#get)
- [getAtlas](DThemes.md#getatlas)
- [getClass](DThemes.md#getclass)
- [getDefaultThemeClass](DThemes.md#getdefaultthemeclass)
- [getInstance](DThemes.md#getinstance)
- [set](DThemes.md#set)
- [setClass](DThemes.md#setclass)
- [setDefaultThemeClass](DThemes.md#setdefaultthemeclass)
- [setInstance](DThemes.md#setinstance)

## Constructors

### constructor

• **new DThemes**()

## Methods

### get

▸ `Static` **get**<`THEME`\>(`type`): `THEME`

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

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L38)

___

### getAtlas

▸ `Static` **getAtlas**(): [`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Returns

[`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L54)

___

### getClass

▸ `Static` **getClass**<`THEME`\>(`type`): () => `THEME`

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

• **new getClass**()

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L46)

___

### getDefaultThemeClass

▸ `Static` **getDefaultThemeClass**(): ``null`` \| () => [`DTheme`](../interfaces/DTheme.md)

#### Returns

``null`` \| () => [`DTheme`](../interfaces/DTheme.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L17)

___

### getInstance

▸ `Static` **getInstance**(): [`DTheme`](../interfaces/DTheme.md)

#### Returns

[`DTheme`](../interfaces/DTheme.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L21)

___

### set

▸ `Static` **set**<`THEME`\>(`type`, `instance`): `void`

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

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L42)

___

### setClass

▸ `Static` **setClass**<`THEME`\>(`type`, `themeClass`): `void`

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

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L50)

___

### setDefaultThemeClass

▸ `Static` **setDefaultThemeClass**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | () => [`DTheme`](../interfaces/DTheme.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L13)

___

### setInstance

▸ `Static` **setInstance**(`instance`): ``null`` \| [`DTheme`](../interfaces/DTheme.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DTheme`](../interfaces/DTheme.md) |

#### Returns

``null`` \| [`DTheme`](../interfaces/DTheme.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-themes.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/theme/d-themes.ts#L32)
