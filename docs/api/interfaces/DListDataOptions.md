[Winter Cardinal UI - v0.205.1](../index.md) / DListDataOptions

# Interface: DListDataOptions<ITEM\>

[DListData](DListData.md) options.

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Hierarchy

- [`DListItemAccessorOptions`](DListItemAccessorOptions.md)<`ITEM`\>

  ↳ **`DListDataOptions`**

## Table of contents

### Properties

- [after](DListDataOptions.md#after)
- [before](DListDataOptions.md#before)
- [items](DListDataOptions.md#items)
- [link](DListDataOptions.md#link)
- [selection](DListDataOptions.md#selection)
- [toId](DListDataOptions.md#toid)
- [toImage](DListDataOptions.md#toimage)
- [toLabel](DListDataOptions.md#tolabel)
- [toTitle](DListDataOptions.md#totitle)

## Properties

### after

• `Optional` **after**: `ITEM`[]

Items inserted after the items spacified by the option [items](DListDataOptions.md#items).

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-data.ts#L29)

___

### before

• `Optional` **before**: `ITEM`[]

Items inserted before the items specified by the option [items](DListDataOptions.md#items).

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-data.ts#L19)

___

### items

• `Optional` **items**: `ITEM`[]

List of items.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-data.ts#L24)

___

### link

• `Optional` **link**: [`DListItemAccessorLinkOptions`](DListItemAccessorLinkOptions.md)<`ITEM`\>

#### Inherited from

[DListItemAccessorOptions](DListItemAccessorOptions.md).[link](DListItemAccessorOptions.md#link)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-item-accessor.ts#L38)

___

### selection

• `Optional` **selection**: [`DListDataSelectionOptions`](DListDataSelectionOptions.md)<`ITEM`, `any`\>

A selection options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-data.ts#L34)

___

### toId

• `Optional` **toId**: [`DListItemToId`](../index.md#dlistitemtoid)<`ITEM`\>

#### Inherited from

[DListItemAccessorOptions](DListItemAccessorOptions.md).[toId](DListItemAccessorOptions.md#toid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-item-accessor.ts#L37)

___

### toImage

• `Optional` **toImage**: [`DListItemToImage`](../index.md#dlistitemtoimage)<`ITEM`\>

#### Inherited from

[DListItemAccessorOptions](DListItemAccessorOptions.md).[toImage](DListItemAccessorOptions.md#toimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-item-accessor.ts#L36)

___

### toLabel

• `Optional` **toLabel**: [`DListItemToLabel`](../index.md#dlistitemtolabel)<`ITEM`\>

#### Inherited from

[DListItemAccessorOptions](DListItemAccessorOptions.md).[toLabel](DListItemAccessorOptions.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-item-accessor.ts#L34)

___

### toTitle

• `Optional` **toTitle**: [`DListItemToTitle`](../index.md#dlistitemtotitle)<`ITEM`\>

#### Inherited from

[DListItemAccessorOptions](DListItemAccessorOptions.md).[toTitle](DListItemAccessorOptions.md#totitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-item-accessor.ts#L35)
