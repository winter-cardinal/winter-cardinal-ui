[Winter Cardinal UI - v0.374.0](../index.md) / DTableColumn

# Interface: DTableColumn\<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

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
- [update](DTableColumn.md#update)
- [weight](DTableColumn.md#weight)
- [width](DTableColumn.md#width)

## Properties

### align

• **align**: [`DAlignHorizontal`](../index.md#dalignhorizontal-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L118)

___

### body

• `Optional` **body**: [`DTableBodyCellOptions`](../index.md#dtablebodycelloptions)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L126)

___

### category

• `Optional` **category**: `string` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L130)

___

### editing

• **editing**: [`DTableColumnEditing`](DTableColumnEditing.md)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L122)

___

### formatter

• `Optional` **formatter**: [`DTableColumnFormatter`](../index.md#dtablecolumnformatter)\<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L117)

___

### frozen

• `Optional` **frozen**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L131)

___

### getter

• **getter**: [`DTableColumnGetter`](../index.md#dtablecolumngetter)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L115)

___

### header

• `Optional` **header**: [`DTableHeaderCellOptions`](DTableHeaderCellOptions.md)\<`ROW_VALUE`, [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L125)

___

### label

• **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L114)

___

### link

• `Optional` **link**: [`DTableBodyCellLinkLinkOptions`](DTableBodyCellLinkLinkOptions.md)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L134)

___

### offset

• **offset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L132)

___

### renderable

• **renderable**: `boolean` \| [`DTableColumnRenderable`](../index.md#dtablecolumnrenderable)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L120)

___

### selecting

• **selecting**: [`DTableColumnSelecting`](DTableColumnSelecting.md)\<`CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L128)

___

### setter

• **setter**: [`DTableColumnSetter`](../index.md#dtablecolumnsetter)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L116)

___

### sorting

• **sorting**: [`DTableColumnSorting`](DTableColumnSorting.md)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L123)

___

### state

• **state**: [`DTableColumnState`](DTableColumnState.md)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L119)

___

### type

• **type**: [`DTableColumnType`](../index.md#dtablecolumntype-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L113)

___

### update

• **update**: [`DTableColumnUpdate`](../index.md#dtablecolumnupdate-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L136)

___

### weight

• **weight**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L110)

___

### width

• **width**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-column.ts#L111)
