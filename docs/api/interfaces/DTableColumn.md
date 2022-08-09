[Winter Cardinal UI - v0.205.1](../index.md) / DTableColumn

# Interface: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)<`DIALOG_VALUE`\> |

## Table of contents

### Properties

- [align](DTableColumn.md#align)
- [body](DTableColumn.md#body)
- [category](DTableColumn.md#category)
- [editing](DTableColumn.md#editing)
- [formatter](DTableColumn.md#formatter)
- [frozen](DTableColumn.md#frozen)
- [getter](DTableColumn.md#getter)
- [header](DTableColumn.md#header)
- [label](DTableColumn.md#label)
- [link](DTableColumn.md#link)
- [offset](DTableColumn.md#offset)
- [renderable](DTableColumn.md#renderable)
- [selecting](DTableColumn.md#selecting)
- [setter](DTableColumn.md#setter)
- [sorting](DTableColumn.md#sorting)
- [state](DTableColumn.md#state)
- [type](DTableColumn.md#type)
- [weight](DTableColumn.md#weight)
- [width](DTableColumn.md#width)

## Properties

### align

• **align**: [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L108)

___

### body

• `Optional` **body**: [`DTableBodyCellOptions`](../index.md#dtablebodycelloptions)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L116)

___

### category

• `Optional` **category**: `string` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L120)

___

### editing

• **editing**: [`DTableColumnEditing`](DTableColumnEditing.md)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L112)

___

### formatter

• `Optional` **formatter**: [`DTableColumnFormatter`](../index.md#dtablecolumnformatter)<`CELL_VALUE`, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L107)

___

### frozen

• `Optional` **frozen**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L121)

___

### getter

• **getter**: [`DTableColumnGetter`](../index.md#dtablecolumngetter)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L105)

___

### header

• `Optional` **header**: [`DTableHeaderCellOptions`](DTableHeaderCellOptions.md)<`ROW_VALUE`, [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L115)

___

### label

• **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L104)

___

### link

• `Optional` **link**: [`DTableBodyCellLinkLinkOptions`](DTableBodyCellLinkLinkOptions.md)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L124)

___

### offset

• **offset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L122)

___

### renderable

• **renderable**: `boolean` \| [`DTableColumnRenderable`](../index.md#dtablecolumnrenderable)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L110)

___

### selecting

• **selecting**: [`DTableColumnSelecting`](DTableColumnSelecting.md)<`CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L118)

___

### setter

• **setter**: [`DTableColumnSetter`](../index.md#dtablecolumnsetter)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L106)

___

### sorting

• **sorting**: [`DTableColumnSorting`](DTableColumnSorting.md)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L113)

___

### state

• **state**: [`DTableColumnState`](DTableColumnState.md)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L109)

___

### type

• **type**: [`DTableColumnType`](../index.md#dtablecolumntype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L103)

___

### weight

• **weight**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L100)

___

### width

• **width**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L101)
