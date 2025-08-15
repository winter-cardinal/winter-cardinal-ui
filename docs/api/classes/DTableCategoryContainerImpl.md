[Winter Cardinal UI - v0.457.0](../index.md) / DTableCategoryContainerImpl

# Class: DTableCategoryContainerImpl\<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

## Implements

- [`DTableCategoryContainer`](../interfaces/DTableCategoryContainer.md)

## Table of contents

### Constructors

- [constructor](DTableCategoryContainerImpl.md#constructor)

### Properties

- [items](DTableCategoryContainerImpl.md#items)

### Methods

- [isEqual](DTableCategoryContainerImpl.md#isequal)
- [toColumns](DTableCategoryContainerImpl.md#tocolumns)
- [toCount](DTableCategoryContainerImpl.md#tocount)

## Constructors

### constructor

• **new DTableCategoryContainerImpl**\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>(`columns`, `frozen`, `options?`): [`DTableCategoryContainerImpl`](DTableCategoryContainerImpl.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>[] |
| `frozen` | `number` |
| `options?` | [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)\<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\> |

#### Returns

[`DTableCategoryContainerImpl`](DTableCategoryContainerImpl.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts#L19)

## Properties

### items

• `Readonly` **items**: [`DTableCategory`](DTableCategory.md)\<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md), [`DTableCategoryOptions`](../interfaces/DTableCategoryOptions.md)\<[`DThemeTableCategory`](../interfaces/DThemeTableCategory.md)\>\>[]

#### Implementation of

[DTableCategoryContainer](../interfaces/DTableCategoryContainer.md).[items](../interfaces/DTableCategoryContainer.md#items)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts#L17)

## Methods

### isEqual

▸ **isEqual**(`index`, `a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `a` | `undefined` \| `string` \| `string`[] |
| `b` | `undefined` \| `string` \| `string`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts#L54)

___

### toColumns

▸ **toColumns**(`index`, `columns`, `frozen`): [`DTableCategoryColumn`](../interfaces/DTableCategoryColumn.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>[] |
| `frozen` | `number` |

#### Returns

[`DTableCategoryColumn`](../interfaces/DTableCategoryColumn.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts#L132)

___

### toCount

▸ **toCount**(`columns`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columns` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>[] |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-container-impl.ts#L40)
