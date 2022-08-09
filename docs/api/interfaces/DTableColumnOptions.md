[Winter Cardinal UI - v0.205.1](../index.md) / DTableColumnOptions

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
- [state](DTableColumnOptions.md#state)
- [type](DTableColumnOptions.md#type)
- [weight](DTableColumnOptions.md#weight)
- [width](DTableColumnOptions.md#width)

## Properties

### align

• `Optional` **align**: ``"CENTER"`` \| ``"RIGHT"`` \| ``"LEFT"`` \| [`DAlignHorizontal`](../index.md#dalignhorizontal)

A shortcut of body#text#align#horizontal.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L52)

___

### body

• `Optional` **body**: [`DTableBodyCellOptions`](../index.md#dtablebodycelloptions)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L84)

___

### category

• `Optional` **category**: `string` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L88)

___

### default

• `Optional` **default**: `CELL_VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L42)

___

### editable

• `Optional` **editable**: `boolean` \| ``"auto"`` \| ``"AUTO"`` \| [`DTableColumnEditable`](../index.md#dtablecolumneditable)<`ROW_VALUE`\>

If the editable is

* true, cells get editable.
* false, cells do not get editable.
* a function, cells are editable only when that function returns true.
* "AUTO", cells are editable only when the cell data exist.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L77)

___

### editing

• `Optional` **editing**: [`DTableColumnEditingOptions`](DTableColumnEditingOptions.md)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L78)

___

### formatter

• `Optional` **formatter**: [`DTableColumnFormatter`](../index.md#dtablecolumnformatter)<`CELL_VALUE`, `any`\>

A shortcut of body#text#formatter.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L47)

___

### frozen

• `Optional` **frozen**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L89)

___

### getter

• `Optional` **getter**: [`DTableColumnGetter`](../index.md#dtablecolumngetter)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L39)

___

### header

• `Optional` **header**: [`DTableHeaderCellOptions`](DTableHeaderCellOptions.md)<`ROW_VALUE`, [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L83)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L38)

___

### link

• `Optional` **link**: [`DTableBodyCellLinkLinkOptions`](DTableBodyCellLinkLinkOptions.md)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L91)

___

### path

• `Optional` **path**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L41)

___

### renderable

• `Optional` **renderable**: `boolean` \| ``"auto"`` \| ``"AUTO"`` \| [`DTableColumnRenderable`](../index.md#dtablecolumnrenderable)<`ROW_VALUE`\>

If the renderable is

* true, cells get rendered.
* false, cells do not get rendered.
* a function, cells get rendered only when that function returns true.
* "AUTO", cells get rendered only when the cell data exit.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L67)

___

### selecting

• `Optional` **selecting**: [`DTableColumnSelectingOptions`](DTableColumnSelectingOptions.md)<`CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L86)

___

### setter

• `Optional` **setter**: [`DTableColumnSetter`](../index.md#dtablecolumnsetter)<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L40)

___

### sortable

• `Optional` **sortable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L80)

___

### sorting

• `Optional` **sorting**: [`DTableColumnSortingOptions`](DTableColumnSortingOptions.md)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L81)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DTableColumnStateModifier`](../index.md#dtablecolumnstatemodifier)<`ROW_VALUE`\>

A state option.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L57)

___

### type

• `Optional` **type**: ``"COLOR"`` \| ``"TEXT"`` \| ``"ACTION"`` \| ``"DATE"`` \| ``"TIME"`` \| ``"INDEX"`` \| ``"INTEGER"`` \| ``"REAL"`` \| ``"CHECK"`` \| ``"CHECK_SINGLE"`` \| ``"BUTTON"`` \| ``"SELECT"`` \| ``"DATETIME"`` \| ``"LINK"`` \| ``"TREE"`` \| [`DTableColumnType`](../index.md#dtablecolumntype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L37)

___

### weight

• `Optional` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L34)

___

### width

• `Optional` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L35)
