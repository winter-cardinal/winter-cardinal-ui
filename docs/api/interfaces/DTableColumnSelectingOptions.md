[Winter Cardinal UI - v0.442.0](../index.md) / DTableColumnSelectingOptions

# Interface: DTableColumnSelectingOptions\<CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `DIALOG_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

## Table of contents

### Properties

- [dialog](DTableColumnSelectingOptions.md#dialog)
- [getter](DTableColumnSelectingOptions.md#getter)
- [menu](DTableColumnSelectingOptions.md#menu)
- [multiple](DTableColumnSelectingOptions.md#multiple)
- [promise](DTableColumnSelectingOptions.md#promise)
- [setter](DTableColumnSelectingOptions.md#setter)

## Properties

### dialog

• `Optional` **dialog**: `DIALOG` \| [`DDialogSelectOptions`](DDialogSelectOptions.md)\<`DIALOG_VALUE`, `unknown`, [`DThemeDialogSelect`](DThemeDialogSelect.md)\<`DIALOG_VALUE`, `unknown`\>, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L31)

___

### getter

• `Optional` **getter**: [`DTableColumnSelectingGetter`](../index.md#dtablecolumnselectinggetter)\<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L26)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)\<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)\<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)\<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L29)

___

### multiple

• `Optional` **multiple**: [`DMenuOptions`](DMenuOptions.md)\<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)\<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)\<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L30)

___

### promise

• `Optional` **promise**: () => `Promise`\<`CELL_VALUE`\>

#### Type declaration

▸ (): `Promise`\<`CELL_VALUE`\>

##### Returns

`Promise`\<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L32)

___

### setter

• `Optional` **setter**: [`DTableColumnSelectingSetter`](../index.md#dtablecolumnselectingsetter)\<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-selecting.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-selecting.ts#L27)
