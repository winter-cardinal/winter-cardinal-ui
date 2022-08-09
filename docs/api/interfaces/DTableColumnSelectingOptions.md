[Winter Cardinal UI - v0.205.1](../index.md) / DTableColumnSelectingOptions

# Interface: DTableColumnSelectingOptions<CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `DIALOG_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)<`DIALOG_VALUE`\> |

## Table of contents

### Properties

- [dialog](DTableColumnSelectingOptions.md#dialog)
- [getter](DTableColumnSelectingOptions.md#getter)
- [menu](DTableColumnSelectingOptions.md#menu)
- [multiple](DTableColumnSelectingOptions.md#multiple)
- [setter](DTableColumnSelectingOptions.md#setter)

### Methods

- [promise](DTableColumnSelectingOptions.md#promise)

## Properties

### dialog

• `Optional` **dialog**: `DIALOG` \| [`DDialogSelectOptions`](DDialogSelectOptions.md)<`DIALOG_VALUE`, [`DThemeDialogSelect`](DThemeDialogSelect.md)<`DIALOG_VALUE`\>, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L31)

___

### getter

• `Optional` **getter**: [`DTableColumnSelectingGetter`](../index.md#dtablecolumnselectinggetter)<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L26)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L29)

___

### multiple

• `Optional` **multiple**: [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L30)

___

### setter

• `Optional` **setter**: [`DTableColumnSelectingSetter`](../index.md#dtablecolumnselectingsetter)<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L27)

## Methods

### promise

▸ `Optional` **promise**(): `Promise`<`CELL_VALUE`\>

#### Returns

`Promise`<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L32)
