[Winter Cardinal UI - v0.155.0](../index.md) / DMenuItemExpandables

# Class: DMenuItemExpandables

## Table of contents

### Constructors

- [constructor](DMenuItemExpandables.md#constructor)

### Properties

- [CREATORS](DMenuItemExpandables.md#creators)
- [CREATOR\_DEFAULT](DMenuItemExpandables.md#creator_default)

### Methods

- [addItemCreator](DMenuItemExpandables.md#additemcreator)
- [newItem](DMenuItemExpandables.md#newitem)
- [newItems](DMenuItemExpandables.md#newitems)
- [setItemCreatorDefault](DMenuItemExpandables.md#setitemcreatordefault)

## Constructors

### constructor

• **new DMenuItemExpandables**()

## Properties

### CREATORS

▪ `Static` `Protected` **CREATORS**: [`DMenuItemCreator`](../index.md#dmenuitemcreator)[] = `[]`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts#L11)

___

### CREATOR\_DEFAULT

▪ `Static` `Protected` **CREATOR\_DEFAULT**: ``null`` \| [`DMenuItemCreator`](../index.md#dmenuitemcreator) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts#L12)

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

[src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts#L14)

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

[src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts#L22)

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

[src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts#L32)

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

[src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-menu-item-expandables.ts#L18)
