[Winter Cardinal UI - v0.205.1](../index.md) / DTreeItemUpdaterOptions

# Interface: DTreeItemUpdaterOptions<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Hierarchy

- [`DItemUpdaterOptions`](DItemUpdaterOptions.md)<`NODE`, [`DTreeData`](DTreeData.md)<`NODE`\>, [`DTreeItem`](DTreeItem.md)<`NODE`\>\>

  ↳ **`DTreeItemUpdaterOptions`**

## Table of contents

### Properties

- [initItem](DTreeItemUpdaterOptions.md#inititem)
- [newItem](DTreeItemUpdaterOptions.md#newitem)
- [stripe](DTreeItemUpdaterOptions.md#stripe)

## Properties

### initItem

• `Optional` **initItem**: [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<[`DTreeData`](DTreeData.md)<`NODE`\>, [`DTreeItem`](DTreeItem.md)<`NODE`\>\>

Called to initialize items.

#### Inherited from

[DItemUpdaterOptions](DItemUpdaterOptions.md).[initItem](DItemUpdaterOptions.md#inititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L34)

___

### newItem

• `Optional` **newItem**: [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<[`DTreeData`](DTreeData.md)<`NODE`\>, [`DTreeItem`](DTreeItem.md)<`NODE`\>\>

Called to create items.

#### Inherited from

[DItemUpdaterOptions](DItemUpdaterOptions.md).[newItem](DItemUpdaterOptions.md#newitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L29)

___

### stripe

• `Optional` **stripe**: `boolean`

True to make stripe-colored items. Defaults to true.

#### Inherited from

[DItemUpdaterOptions](DItemUpdaterOptions.md).[stripe](DItemUpdaterOptions.md#stripe)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L39)
