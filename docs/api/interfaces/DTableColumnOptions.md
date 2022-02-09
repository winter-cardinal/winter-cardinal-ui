[Winter Cardinal UI - v0.154.0](../index.md) / DTableColumnOptions

# Interface: DTableColumnOptions<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `any` |
| `DIALOG_VALUE` | `any` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)<`DIALOG_VALUE`\> = `any` |

## Table of contents

### Properties

- [align](DTableColumnOptions.md#align)
- [body](DTableColumnOptions.md#body)
- [category](DTableColumnOptions.md#category)
- [default](DTableColumnOptions.md#default)
- [editable](DTableColumnOptions.md#editable)
- [editing](DTableColumnOptions.md#editing)
- [formatter](DTableColumnOptions.md#formatter)
- [frozen](DTableColumnOptions.md#frozen)
- [getter](DTableColumnOptions.md#getter)
- [header](DTableColumnOptions.md#header)
- [label](DTableColumnOptions.md#label)
- [link](DTableColumnOptions.md#link)
- [path](DTableColumnOptions.md#path)
- [renderable](DTableColumnOptions.md#renderable)
- [selecting](DTableColumnOptions.md#selecting)
- [setter](DTableColumnOptions.md#setter)
- [sortable](DTableColumnOptions.md#sortable)
- [sorting](DTableColumnOptions.md#sorting)
- [type](DTableColumnOptions.md#type)
- [weight](DTableColumnOptions.md#weight)
- [width](DTableColumnOptions.md#width)

## Properties

### align

• `Optional` **align**: ``"RIGHT"`` \| ``"LEFT"`` \| ``"CENTER"`` \| [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L159)

___

### body

• `Optional` **body**: [`DTableBodyCellOptionsUnion`](../index.md#dtablebodycelloptionsunion)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L186)

___

### category

• `Optional` **category**: `string` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L190)

___

### default

• `Optional` **default**: `CELL_VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L157)

___

### editable

• `Optional` **editable**: `boolean` \| ``"auto"`` \| ``"AUTO"`` \| [`DTableEditable`](../index.md#dtableeditable)<`ROW_VALUE`\>

If the editable is

* true, cells get editable.
* false, cells do not get editable.
* a function, cells are editable only when that function returns true.
* "AUTO", cells are editable only when the cell data exist.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L179)

___

### editing

• `Optional` **editing**: [`DTableColumnEditingOptions`](DTableColumnEditingOptions.md)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L180)

___

### formatter

• `Optional` **formatter**: [`DTableFormatter`](../index.md#dtableformatter)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L158)

___

### frozen

• `Optional` **frozen**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L191)

___

### getter

• `Optional` **getter**: [`DTableGetter`](../index.md#dtablegetter)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L154)

___

### header

• `Optional` **header**: [`DTableHeaderCellOptions`](DTableHeaderCellOptions.md)<`ROW_VALUE`, [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L185)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L153)

___

### link

• `Optional` **link**: [`DTableBodyCellLinkLinkOptions`](DTableBodyCellLinkLinkOptions.md)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L193)

___

### path

• `Optional` **path**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L156)

___

### renderable

• `Optional` **renderable**: `boolean` \| ``"auto"`` \| ``"AUTO"`` \| [`DTableRenderable`](../index.md#dtablerenderable)<`ROW_VALUE`\>

If the renderable is

* true, cells get rendered.
* false, cells do not get rendered.
* a function, cells get rendered only when that function returns true.
* "AUTO", cells get rendered only when the cell data exit.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L169)

___

### selecting

• `Optional` **selecting**: [`DTableColumnSelectingOptions`](DTableColumnSelectingOptions.md)<`CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L188)

___

### setter

• `Optional` **setter**: [`DTableSetter`](../index.md#dtablesetter)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L155)

___

### sortable

• `Optional` **sortable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L182)

___

### sorting

• `Optional` **sorting**: [`DTableColumnSortingOptions`](DTableColumnSortingOptions.md)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L183)

___

### type

• `Optional` **type**: ``"COLOR"`` \| ``"TEXT"`` \| ``"ACTION"`` \| ``"DATE"`` \| ``"TIME"`` \| ``"INDEX"`` \| ``"INTEGER"`` \| ``"REAL"`` \| ``"CHECK"`` \| ``"CHECK_SINGLE"`` \| ``"BUTTON"`` \| ``"SELECT"`` \| ``"DATETIME"`` \| ``"LINK"`` \| ``"TREE"`` \| [`DTableColumnType`](../index.md#dtablecolumntype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L152)

___

### weight

• `Optional` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L149)

___

### width

• `Optional` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L150)
