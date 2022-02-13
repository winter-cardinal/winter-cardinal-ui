[Winter Cardinal UI - v0.155.0](../index.md) / DMenuSidedItemExpandables

# Class: DMenuSidedItemExpandables

## Table of contents

### Constructors

- [constructor](DMenuSidedItemExpandables.md#constructor)

### Properties

- [CREATORS](DMenuSidedItemExpandables.md#creators)
- [CREATOR\_DEFAULT](DMenuSidedItemExpandables.md#creator_default)

### Methods

- [addItemCreator](DMenuSidedItemExpandables.md#additemcreator)
- [newItem](DMenuSidedItemExpandables.md#newitem)
- [newItems](DMenuSidedItemExpandables.md#newitems)
- [setItemCreatorDefault](DMenuSidedItemExpandables.md#setitemcreatordefault)

## Constructors

### constructor

• **new DMenuSidedItemExpandables**()

## Properties

### CREATORS

▪ `Static` `Protected` **CREATORS**: [`DMenuItemCreator`](../index.md#dmenuitemcreator)[] = `[]`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts#L12)

___

### CREATOR\_DEFAULT

▪ `Static` `Protected` **CREATOR\_DEFAULT**: ``null`` \| [`DMenuItemCreator`](../index.md#dmenuitemcreator) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts#L13)

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

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts#L15)

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

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts#L23)

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

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts#L33)

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

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandables.ts#L19)
