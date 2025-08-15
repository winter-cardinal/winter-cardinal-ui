[Winter Cardinal UI - v0.457.0](../index.md) / DTreeItemUpdater

# Class: DTreeItemUpdater\<NODE\>

The primary purpose of this class is to minimize the number of rendered items (e.g., [DListItem](DListItem.md))
as low as possible and to update their positions and states. For this sake, the updater calculates the
required number of items whenever their container size changes and creates items if needed.

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |

## Hierarchy

- [`DItemUpdater`](DItemUpdater.md)\<`NODE`, [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeDataMapped`](../interfaces/DTreeDataMapped.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>, [`DTreeItemUpdaterOptions`](../interfaces/DTreeItemUpdaterOptions.md)\<`NODE`\>\>

  ↳ **`DTreeItemUpdater`**

## Table of contents

### Constructors

- [constructor](DTreeItemUpdater.md#constructor)

### Properties

- [\_container](DTreeItemUpdater.md#_container)
- [\_content](DTreeItemUpdater.md#_content)
- [\_data](DTreeItemUpdater.md#_data)
- [\_initItem](DTreeItemUpdater.md#_inititem)
- [\_isUpdateItemsCalled](DTreeItemUpdater.md#_isupdateitemscalled)
- [\_isUpdateItemsCalledForcibly](DTreeItemUpdater.md#_isupdateitemscalledforcibly)
- [\_itemHeight](DTreeItemUpdater.md#_itemheight)
- [\_itemIndexEnd](DTreeItemUpdater.md#_itemindexend)
- [\_itemIndexStart](DTreeItemUpdater.md#_itemindexstart)
- [\_itemWidth](DTreeItemUpdater.md#_itemwidth)
- [\_multiplicity](DTreeItemUpdater.md#_multiplicity)
- [\_newItem](DTreeItemUpdater.md#_newitem)
- [\_updateItemsCount](DTreeItemUpdater.md#_updateitemscount)
- [\_workItems](DTreeItemUpdater.md#_workitems)

### Accessors

- [multiplicity](DTreeItemUpdater.md#multiplicity)

### Methods

- [initItem](DTreeItemUpdater.md#inititem)
- [initItemNoStriping](DTreeItemUpdater.md#inititemnostriping)
- [lock](DTreeItemUpdater.md#lock)
- [moveFocus](DTreeItemUpdater.md#movefocus)
- [newItem](DTreeItemUpdater.md#newitem)
- [reset](DTreeItemUpdater.md#reset)
- [set](DTreeItemUpdater.md#set)
- [toInitItem](DTreeItemUpdater.md#toinititem)
- [toMapped](DTreeItemUpdater.md#tomapped)
- [toNewItem](DTreeItemUpdater.md#tonewitem)
- [unlock](DTreeItemUpdater.md#unlock)
- [unset](DTreeItemUpdater.md#unset)
- [update](DTreeItemUpdater.md#update)

## Constructors

### constructor

• **new DTreeItemUpdater**\<`NODE`\>(`data`, `content`, `container`, `options?`): [`DTreeItemUpdater`](DTreeItemUpdater.md)\<`NODE`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\> |
| `content` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `container` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `options?` | [`DTreeItemUpdaterOptions`](../interfaces/DTreeItemUpdaterOptions.md)\<`NODE`\> |

#### Returns

[`DTreeItemUpdater`](DTreeItemUpdater.md)\<`NODE`\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[constructor](DItemUpdater.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L82)

## Properties

### \_container

• `Protected` **\_container**: [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_container](DItemUpdater.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L78)

___

### \_content

• `Protected` **\_content**: [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_content](DItemUpdater.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L77)

___

### \_data

• `Protected` **\_data**: [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_data](DItemUpdater.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L76)

___

### \_initItem

• `Protected` **\_initItem**: [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)\<[`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_initItem](DItemUpdater.md#_inititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L80)

___

### \_isUpdateItemsCalled

• `Protected` **\_isUpdateItemsCalled**: `boolean`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_isUpdateItemsCalled](DItemUpdater.md#_isupdateitemscalled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L68)

___

### \_isUpdateItemsCalledForcibly

• `Protected` **\_isUpdateItemsCalledForcibly**: `boolean`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_isUpdateItemsCalledForcibly](DItemUpdater.md#_isupdateitemscalledforcibly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L69)

___

### \_itemHeight

• `Protected` **\_itemHeight**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_itemHeight](DItemUpdater.md#_itemheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L70)

___

### \_itemIndexEnd

• `Protected` **\_itemIndexEnd**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_itemIndexEnd](DItemUpdater.md#_itemindexend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L74)

___

### \_itemIndexStart

• `Protected` **\_itemIndexStart**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_itemIndexStart](DItemUpdater.md#_itemindexstart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L73)

___

### \_itemWidth

• `Protected` **\_itemWidth**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_itemWidth](DItemUpdater.md#_itemwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L71)

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_multiplicity](DItemUpdater.md#_multiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L72)

___

### \_newItem

• `Protected` **\_newItem**: [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)\<[`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_newItem](DItemUpdater.md#_newitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L79)

___

### \_updateItemsCount

• `Protected` **\_updateItemsCount**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_updateItemsCount](DItemUpdater.md#_updateitemscount)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L67)

___

### \_workItems

• `Protected` **\_workItems**: [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>[]

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_workItems](DItemUpdater.md#_workitems)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L75)

## Accessors

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Inherited from

DItemUpdater.multiplicity

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L132)

## Methods

### initItem

▸ **initItem**(`this`, `item`, `index`, `data`): [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `item` | [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\> |
| `index` | `number` |
| `data` | [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\> |

#### Returns

[`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[initItem](DItemUpdater.md#inititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L123)

___

### initItemNoStriping

▸ **initItemNoStriping**(`this`, `item`, `index`, `data`): [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `item` | [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\> |
| `index` | `number` |
| `data` | [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\> |

#### Returns

[`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[initItemNoStriping](DItemUpdater.md#inititemnostriping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L128)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[lock](DItemUpdater.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L136)

___

### moveFocus

▸ **moveFocus**(`e`, `target`, `moveVertically`, `moveHorizontally`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `target` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `moveVertically` | `boolean` |
| `moveHorizontally` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[moveFocus](DItemUpdater.md#movefocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L367)

___

### newItem

▸ **newItem**(`this`, `data`): [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `data` | [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\> |

#### Returns

[`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>

#### Overrides

[DItemUpdater](DItemUpdater.md).[newItem](DItemUpdater.md#newitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-updater.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-tree-item-updater.ts#L27)

___

### reset

▸ **reset**(`item`): [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\> |

#### Returns

[`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[reset](DItemUpdater.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L350)

___

### set

▸ **set**(`item`, `value`, `index`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\> |
| `value` | `NODE` |
| `index` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[set](DItemUpdater.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L342)

___

### toInitItem

▸ **toInitItem**(`options?`): [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)\<[`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)\<`NODE`, [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>\> |

#### Returns

[`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)\<[`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[toInitItem](DItemUpdater.md#toinititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L107)

___

### toMapped

▸ **toMapped**(`data`): [`DTreeDataMapped`](../interfaces/DTreeDataMapped.md)\<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\> |

#### Returns

[`DTreeDataMapped`](../interfaces/DTreeDataMapped.md)\<`NODE`\>

#### Overrides

[DItemUpdater](DItemUpdater.md).[toMapped](DItemUpdater.md#tomapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-updater.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-tree-item-updater.ts#L23)

___

### toNewItem

▸ **toNewItem**(`options?`): [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)\<[`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)\<`NODE`, [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>\> |

#### Returns

[`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)\<[`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>, [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[toNewItem](DItemUpdater.md#tonewitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L99)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[unlock](DItemUpdater.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L144)

___

### unset

▸ **unset**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DTreeItem`](../interfaces/DTreeItem.md)\<`NODE`\> |

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[unset](DItemUpdater.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L346)

___

### update

▸ **update**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[update](DItemUpdater.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L155)
