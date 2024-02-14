[Winter Cardinal UI - v0.407.0](../index.md) / DItemUpdaterOptions

# Interface: DItemUpdaterOptions\<VALUE, DATA, ITEM\>

Item updater options.

## Type parameters

| Name |
| :------ |
| `VALUE` |
| `DATA` |
| `ITEM` |

## Hierarchy

- **`DItemUpdaterOptions`**

  ↳ [`DListItemUpdaterOptions`](DListItemUpdaterOptions.md)

  ↳ [`DTreeItemUpdaterOptions`](DTreeItemUpdaterOptions.md)

## Table of contents

### Properties

- [initItem](DItemUpdaterOptions.md#inititem)
- [newItem](DItemUpdaterOptions.md#newitem)
- [stripe](DItemUpdaterOptions.md#stripe)

## Properties

### initItem

• `Optional` **initItem**: [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)\<`DATA`, `ITEM`\>

Called to initialize items.

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L34)

___

### newItem

• `Optional` **newItem**: [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)\<`DATA`, `ITEM`\>

Called to create items.

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L29)

___

### stripe

• `Optional` **stripe**: `boolean`

True to make stripe-colored items. Defaults to true.

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L39)
