[Winter Cardinal UI - v0.167.0](../index.md) / DTableColumnEditingOptions

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

• `Optional` **enable**: `boolean` \| ``"auto"`` \| ``"AUTO"`` \| [`DTableEditable`](../index.md#dtableeditable)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L88)

___

### formatter

• `Optional` **formatter**: [`DTableEditingFormatter`](../index.md#dtableeditingformatter)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L89)

___

### unformatter

• `Optional` **unformatter**: [`DTableEditingUnformatter`](../index.md#dtableeditingunformatter)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L90)

___

### validator

• `Optional` **validator**: [`DTableEditingValidator`](../index.md#dtableeditingvalidator)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L91)
