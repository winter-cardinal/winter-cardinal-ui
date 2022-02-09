[Winter Cardinal UI - v0.154.0](../index.md) / DTableColumnSelecting

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

[src/main/typescript/wcardinal/ui/d-table-column.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L139)

___

### getter

• **getter**: [`DTableSelectingGetter`](../index.md#dtableselectinggetter)<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L134)

___

### menu

• `Optional` **menu**: [`DMenu`](../classes/DMenu.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L137)

___

### multiple

• `Optional` **multiple**: [`DMenu`](../classes/DMenu.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`CELL_VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L138)

___

### setter

• **setter**: [`DTableSelectingSetter`](../index.md#dtableselectingsetter)<`CELL_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L135)

## Methods

### promise

▸ `Optional` **promise**(): `Promise`<`CELL_VALUE`\>

#### Returns

`Promise`<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L140)
