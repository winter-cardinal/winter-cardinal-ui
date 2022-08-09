[Winter Cardinal UI - v0.205.1](../index.md) / DTableColumnSelecting

# Interface: DTableColumnSelecting<CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `DIALOG_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)<`DIALOG_VALUE`\> |

## Table of contents

### Properties

- [dialog](DTableColumnSelecting.md#dialog)
- [getter](DTableColumnSelecting.md#getter)
- [menu](DTableColumnSelecting.md#menu)
- [multiple](DTableColumnSelecting.md#multiple)
- [setter](DTableColumnSelecting.md#setter)

### Methods

- [promise](DTableColumnSelecting.md#promise)

## Properties

### dialog

• `Optional` **dialog**: `DIALOG`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L45)

___

### getter

• **getter**: [`DTableColumnSelectingGetter`](../index.md#dtablecolumnselectinggetter)<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L40)

___

### menu

• `Optional` **menu**: [`DMenu`](../classes/DMenu.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L43)

___

### multiple

• `Optional` **multiple**: [`DMenu`](../classes/DMenu.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L44)

___

### setter

• **setter**: [`DTableColumnSelectingSetter`](../index.md#dtablecolumnselectingsetter)<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L41)

## Methods

### promise

▸ `Optional` **promise**(): `Promise`<`CELL_VALUE`\>

#### Returns

`Promise`<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L46)
