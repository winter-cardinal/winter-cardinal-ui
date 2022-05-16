[Winter Cardinal UI - v0.165.0](../index.md) / DTableColumn

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
- [type](DTableColumn.md#type)
- [weight](DTableColumn.md#weight)
- [width](DTableColumn.md#width)

## Properties

### align

• **align**: [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L211)

___

### body

• `Optional` **body**: [`DTableBodyCellOptionsUnion`](../index.md#dtablebodycelloptionsunion)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L218)

___

### category

• `Optional` **category**: `string` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L222)

___

### editing

• **editing**: [`DTableColumnEditing`](DTableColumnEditing.md)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L214)

___

### formatter

• `Optional` **formatter**: [`DTableFormatter`](../index.md#dtableformatter)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L210)

___

### frozen

• `Optional` **frozen**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L223)

___

### getter

• **getter**: [`DTableGetter`](../index.md#dtablegetter)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L208)

___

### header

• `Optional` **header**: [`DTableHeaderCellOptions`](DTableHeaderCellOptions.md)<`ROW_VALUE`, [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L217)

___

### label

• **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L207)

___

### link

• `Optional` **link**: [`DTableBodyCellLinkLinkOptions`](DTableBodyCellLinkLinkOptions.md)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L226)

___

### offset

• **offset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L224)

___

### renderable

• **renderable**: `boolean` \| [`DTableRenderable`](../index.md#dtablerenderable)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L212)

___

### selecting

• **selecting**: [`DTableColumnSelecting`](DTableColumnSelecting.md)<`CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L220)

___

### setter

• **setter**: [`DTableSetter`](../index.md#dtablesetter)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L209)

___

### sorting

• **sorting**: [`DTableColumnSorting`](DTableColumnSorting.md)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L215)

___

### type

• **type**: [`DTableColumnType`](../index.md#dtablecolumntype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L206)

___

### weight

• **weight**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L203)

___

### width

• **width**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L204)
