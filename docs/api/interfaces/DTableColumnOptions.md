[Winter Cardinal UI - v0.457.0](../index.md) / DTableColumnOptions

# Interface: DTableColumnOptions\<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `any` |
| `DIALOG_VALUE` | `any` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = `any` |

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
- [resizable](DTableColumnOptions.md#resizable)
- [selecting](DTableColumnOptions.md#selecting)
- [setter](DTableColumnOptions.md#setter)
- [sortable](DTableColumnOptions.md#sortable)
- [sorting](DTableColumnOptions.md#sorting)
- [state](DTableColumnOptions.md#state)
- [type](DTableColumnOptions.md#type)
- [update](DTableColumnOptions.md#update)
- [weight](DTableColumnOptions.md#weight)
- [width](DTableColumnOptions.md#width)

## Properties

### align

• `Optional` **align**: ``"RIGHT"`` \| ``"LEFT"`` \| ``"CENTER"`` \| [`DAlignHorizontal`](../index.md#dalignhorizontal)

A shortcut of body#text#align#horizontal.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L55)

___

### body

• `Optional` **body**: [`DTableBodyCellOptions`](../index.md#dtablebodycelloptions)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L87)

___

### category

• `Optional` **category**: `string` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L91)

___

### default

• `Optional` **default**: `CELL_VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L45)

___

### editable

• `Optional` **editable**: `boolean` \| ``"auto"`` \| ``"AUTO"`` \| [`DTableColumnEditable`](../index.md#dtablecolumneditable)\<`ROW_VALUE`\>

If the editable is

* true, cells get editable.
* false, cells do not get editable.
* a function, cells are editable only when that function returns true.
* "AUTO", cells are editable only when the cell data exist.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L80)

___

### editing

• `Optional` **editing**: [`DTableColumnEditingOptions`](DTableColumnEditingOptions.md)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L81)

___

### formatter

• `Optional` **formatter**: [`DTableColumnFormatter`](../index.md#dtablecolumnformatter)\<`CELL_VALUE`\>

A shortcut of body#text#formatter.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L50)

___

### frozen

• `Optional` **frozen**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L92)

___

### getter

• `Optional` **getter**: [`DTableColumnGetter`](../index.md#dtablecolumngetter)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L42)

___

### header

• `Optional` **header**: [`DTableHeaderCellOptions`](DTableHeaderCellOptions.md)\<`ROW_VALUE`, [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L86)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L41)

___

### link

• `Optional` **link**: [`DTableBodyCellLinkLinkOptions`](DTableBodyCellLinkLinkOptions.md)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L94)

___

### path

• `Optional` **path**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L44)

___

### renderable

• `Optional` **renderable**: `boolean` \| ``"auto"`` \| ``"AUTO"`` \| [`DTableColumnRenderable`](../index.md#dtablecolumnrenderable)\<`ROW_VALUE`\>

If the renderable is

* true, cells get rendered.
* false, cells do not get rendered.
* a function, cells get rendered only when that function returns true.
* "AUTO", cells get rendered only when the cell data exit.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L70)

___

### resizable

• `Optional` **resizable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L38)

___

### selecting

• `Optional` **selecting**: [`DTableColumnSelectingOptions`](DTableColumnSelectingOptions.md)\<`CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L89)

___

### setter

• `Optional` **setter**: [`DTableColumnSetter`](../index.md#dtablecolumnsetter)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L43)

___

### sortable

• `Optional` **sortable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L83)

___

### sorting

• `Optional` **sorting**: [`DTableColumnSortingOptions`](DTableColumnSortingOptions.md)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L84)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DTableColumnStateModifier`](../index.md#dtablecolumnstatemodifier)\<`ROW_VALUE`\>

A state option.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L60)

___

### type

• `Optional` **type**: ``"TEXT"`` \| ``"COLOR"`` \| ``"ACTION"`` \| ``"DATE"`` \| ``"TIME"`` \| ``"INDEX"`` \| ``"INTEGER"`` \| ``"REAL"`` \| ``"CHECK"`` \| ``"CHECK_SINGLE"`` \| ``"BUTTON"`` \| ``"SELECT"`` \| ``"DATETIME"`` \| ``"LINK"`` \| ``"TREE"`` \| ``"TEXT_AREA"`` \| [`DTableColumnType`](../index.md#dtablecolumntype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L40)

___

### update

• `Optional` **update**: ``"ALL"`` \| ``"CELL"`` \| ``"ROW"`` \| [`DTableColumnUpdate`](../index.md#dtablecolumnupdate)

An update region when cells get edited.

* CELL: Edited cells (Default).
* ROW: Rows that edited cells belongs to.
* ALL: All the rows.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L103)

___

### weight

• `Optional` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L36)

___

### width

• `Optional` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L37)
