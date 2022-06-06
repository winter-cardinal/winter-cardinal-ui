[Winter Cardinal UI - v0.179.0](../index.md) / DMenuSideds

# Class: DMenuSideds

## Table of contents

### Constructors

- [constructor](DMenuSideds.md#constructor)

### Properties

- [CREATORS](DMenuSideds.md#creators)
- [CREATOR\_DEFAULT](DMenuSideds.md#creator_default)

### Methods

- [addItemCreator](DMenuSideds.md#additemcreator)
- [newItem](DMenuSideds.md#newitem)
- [newItems](DMenuSideds.md#newitems)
- [setItemCreatorDefault](DMenuSideds.md#setitemcreatordefault)

## Constructors

### constructor

• **new DMenuSideds**()

## Properties

### CREATORS

▪ `Static` `Protected` **CREATORS**: [`DMenuItemCreator`](../index.md#dmenuitemcreator)[] = `[]`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sideds.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-menu-sideds.ts#L11)

___

### CREATOR\_DEFAULT

▪ `Static` `Protected` **CREATOR\_DEFAULT**: ``null`` \| [`DMenuItemCreator`](../index.md#dmenuitemcreator) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sideds.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-menu-sideds.ts#L12)

## Methods

### addItemCreator

▸ `Static` **addItemCreator**(`creator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | [`DMenuItemCreator`](../index.md#dmenuitemcreator) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sideds.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-menu-sideds.ts#L14)

___

### newItem

▸ `Static` **newItem**<`VALUE`\>(`options`, `sticky`): ``null`` \| `DisplayObject`

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)<`VALUE`\> |
| `sticky` | `boolean` |

#### Returns

``null`` \| `DisplayObject`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sideds.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-menu-sideds.ts#L22)

___

### newItems

▸ `Static` **newItems**<`VALUE`\>(`parent`, `items`, `sticky`): `void`

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Container` |
| `items` | (`DisplayObject` \| [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)<`VALUE`\>)[] |
| `sticky` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sideds.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-menu-sideds.ts#L32)

___

### setItemCreatorDefault

▸ `Static` **setItemCreatorDefault**(`creator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | [`DMenuItemCreator`](../index.md#dmenuitemcreator) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sideds.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-menu-sideds.ts#L18)
