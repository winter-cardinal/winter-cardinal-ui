[Winter Cardinal UI - v0.155.0](../index.md) / DListItemUpdaterOptions

# Interface: DListItemUpdaterOptions<VALUE\>

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Hierarchy

- [`DItemUpdaterOptions`](DItemUpdaterOptions.md)<`VALUE`, [`DListData`](DListData.md)<`VALUE`\>, [`DListItem`](../classes/DListItem.md)<`VALUE`\>\>

  ↳ **`DListItemUpdaterOptions`**

## Table of contents

### Properties

- [initItem](DListItemUpdaterOptions.md#inititem)
- [newItem](DListItemUpdaterOptions.md#newitem)
- [stripe](DListItemUpdaterOptions.md#stripe)

## Properties

### initItem

• `Optional` **initItem**: [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<[`DListData`](DListData.md)<`VALUE`\>, [`DListItem`](../classes/DListItem.md)<`VALUE`, [`DThemeListItem`](DThemeListItem.md), [`DListItemOptions`](DListItemOptions.md)<`VALUE`, [`DThemeListItem`](DThemeListItem.md), `any`\>\>\>

Called to initialize items.

#### Inherited from

[DItemUpdaterOptions](DItemUpdaterOptions.md).[initItem](DItemUpdaterOptions.md#inititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L34)

___

### newItem

• `Optional` **newItem**: [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<[`DListData`](DListData.md)<`VALUE`\>, [`DListItem`](../classes/DListItem.md)<`VALUE`, [`DThemeListItem`](DThemeListItem.md), [`DListItemOptions`](DListItemOptions.md)<`VALUE`, [`DThemeListItem`](DThemeListItem.md), `any`\>\>\>

Called to create items.

#### Inherited from

[DItemUpdaterOptions](DItemUpdaterOptions.md).[newItem](DItemUpdaterOptions.md#newitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L29)

___

### stripe

• `Optional` **stripe**: `boolean`

True to make stripe-colored items. Defaults to true.

#### Inherited from

[DItemUpdaterOptions](DItemUpdaterOptions.md).[stripe](DItemUpdaterOptions.md#stripe)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L39)
