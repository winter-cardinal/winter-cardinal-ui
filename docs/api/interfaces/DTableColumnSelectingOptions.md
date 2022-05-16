[Winter Cardinal UI - v0.167.0](../index.md) / DTableColumnSelectingOptions

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

[src/main/typescript/wcardinal/ui/d-table-column.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L126)

___

### getter

• `Optional` **getter**: [`DTableSelectingGetter`](../index.md#dtableselectinggetter)<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L121)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L124)

___

### multiple

• `Optional` **multiple**: [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L125)

___

### setter

• `Optional` **setter**: [`DTableSelectingSetter`](../index.md#dtableselectingsetter)<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L122)

## Methods

### promise

▸ `Optional` **promise**(): `Promise`<`CELL_VALUE`\>

#### Returns

`Promise`<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L127)
