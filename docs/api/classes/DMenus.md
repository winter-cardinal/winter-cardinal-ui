[Winter Cardinal UI - v0.414.0](../index.md) / DMenus

# Class: DMenus

## Table of contents

### Constructors

- [constructor](DMenus.md#constructor)

### Properties

- [CREATORS](DMenus.md#creators)
- [CREATOR\_DEFAULT](DMenus.md#creator_default)
- [MENU\_CREATOR](DMenus.md#menu_creator)

### Methods

- [addItemCreator](DMenus.md#additemcreator)
- [newItem](DMenus.md#newitem)
- [newItemOf](DMenus.md#newitemof)
- [newItems](DMenus.md#newitems)
- [newItemsOf](DMenus.md#newitemsof)
- [newMenu](DMenus.md#newmenu)
- [setItemCreatorDefault](DMenus.md#setitemcreatordefault)
- [setMenuCreator](DMenus.md#setmenucreator)

## Constructors

### constructor

• **new DMenus**(): [`DMenus`](DMenus.md)

#### Returns

[`DMenus`](DMenus.md)

## Properties

### CREATORS

▪ `Static` `Protected` **CREATORS**: [`DMenuItemCreator`](../index.md#dmenuitemcreator)[] = `[]`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L18)

___

### CREATOR\_DEFAULT

▪ `Static` `Protected` **CREATOR\_DEFAULT**: ``null`` \| [`DMenuItemCreator`](../index.md#dmenuitemcreator) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L19)

___

### MENU\_CREATOR

▪ `Static` `Protected` `Optional` **MENU\_CREATOR**: [`DMenuMenuCreator`](../index.md#dmenumenucreator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L20)

## Methods

### addItemCreator

▸ **addItemCreator**(`creator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | [`DMenuItemCreator`](../index.md#dmenuitemcreator) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L22)

___

### newItem

▸ **newItem**\<`VALUE`\>(`options`, `sticky`): ``null`` \| `DisplayObject`

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)\<`VALUE`\> |
| `sticky` | `boolean` |

#### Returns

``null`` \| `DisplayObject`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L52)

___

### newItemOf

▸ **newItemOf**\<`VALUE`\>(`creators`, `creatorDefault`, `options`, `sticky`): ``null`` \| `DisplayObject`

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `creators` | [`DMenuItemCreator`](../index.md#dmenuitemcreator)[] |
| `creatorDefault` | ``null`` \| [`DMenuItemCreator`](../index.md#dmenuitemcreator) |
| `options` | [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)\<`VALUE`\> |
| `sticky` | `boolean` |

#### Returns

``null`` \| `DisplayObject`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L34)

___

### newItems

▸ **newItems**\<`VALUE`\>(`parent`, `items`, `sticky`): `void`

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Container` |
| `items` | (`undefined` \| ``null`` \| `DisplayObject` \| [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)\<`VALUE`\>)[] |
| `sticky` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L82)

___

### newItemsOf

▸ **newItemsOf**\<`VALUE`\>(`creator`, `parent`, `items`, `sticky`): `void`

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `Object` |
| `creator.newItem` | (`options`: [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)\<`VALUE`\>, `sticky`: `boolean`) => ``null`` \| `DisplayObject` |
| `parent` | `Container` |
| `items` | (`undefined` \| ``null`` \| `DisplayObject` \| [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)\<`VALUE`\>)[] |
| `sticky` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L59)

___

### newMenu

▸ **newMenu**\<`VALUE`\>(`options?`): [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\> |

#### Returns

[`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L90)

___

### setItemCreatorDefault

▸ **setItemCreatorDefault**(`creator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | [`DMenuItemCreator`](../index.md#dmenuitemcreator) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L26)

___

### setMenuCreator

▸ **setMenuCreator**(`creator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | [`DMenuMenuCreator`](../index.md#dmenumenucreator) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menus.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menus.ts#L30)
