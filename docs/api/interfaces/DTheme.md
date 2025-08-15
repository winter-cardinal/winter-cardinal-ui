[Winter Cardinal UI - v0.457.0](../index.md) / DTheme

# Interface: DTheme

## Implemented by

- [`DThemeDark`](../classes/DThemeDark.md)
- [`DThemeWhite`](../classes/DThemeWhite.md)

## Table of contents

### Methods

- [get](DTheme.md#get)
- [getAtlas](DTheme.md#getatlas)
- [getClass](DTheme.md#getclass)
- [set](DTheme.md#set)
- [setClass](DTheme.md#setclass)

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

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-theme.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/d-theme.ts#L9)

___

### getAtlas

▸ **getAtlas**(): [`UtilSvgAtlasBuilder`](../classes/UtilSvgAtlasBuilder.md)

#### Returns

[`UtilSvgAtlasBuilder`](../classes/UtilSvgAtlasBuilder.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-theme.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/d-theme.ts#L13)

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

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-theme.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/d-theme.ts#L11)

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

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-theme.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/d-theme.ts#L10)

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

#### Defined in

[src/main/typescript/wcardinal/ui/theme/d-theme.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/theme/d-theme.ts#L12)
