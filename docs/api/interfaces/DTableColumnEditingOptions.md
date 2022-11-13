[Winter Cardinal UI - v0.227.0](../index.md) / DTableColumnEditingOptions

# Interface: DTableColumnEditingOptions<ROW_VALUE, CELL_VALUE\>

## Type parameters

| Name |
| :------ |
| `ROW_VALUE` |
| `CELL_VALUE` |

## Table of contents

### Properties

- [enable](DTableColumnEditingOptions.md#enable)
- [formatter](DTableColumnEditingOptions.md#formatter)
- [unformatter](DTableColumnEditingOptions.md#unformatter)
- [validator](DTableColumnEditingOptions.md#validator)

## Properties

### enable

• `Optional` **enable**: `boolean` \| ``"auto"`` \| ``"AUTO"`` \| [`DTableColumnEditable`](../index.md#dtablecolumneditable)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-editing.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-column-editing.ts#L12)

___

### formatter

• `Optional` **formatter**: [`DTableColumnEditingFormatter`](../index.md#dtablecolumneditingformatter)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-editing.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-column-editing.ts#L13)

___

### unformatter

• `Optional` **unformatter**: [`DTableColumnEditingUnformatter`](../index.md#dtablecolumneditingunformatter)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-editing.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-column-editing.ts#L14)

___

### validator

• `Optional` **validator**: [`DTableColumnEditingValidator`](../index.md#dtablecolumneditingvalidator)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-editing.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-column-editing.ts#L15)
