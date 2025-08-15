[Winter Cardinal UI - v0.457.0](../index.md) / DTableBodyCells

# Class: DTableBodyCells

## Table of contents

### Constructors

- [constructor](DTableBodyCells.md#constructor)

### Methods

- [set](DTableBodyCells.md#set)
- [toReadOnly](DTableBodyCells.md#toreadonly)
- [toRenderable](DTableBodyCells.md#torenderable)

## Constructors

### constructor

• **new DTableBodyCells**(): [`DTableBodyCells`](DTableBodyCells.md)

#### Returns

[`DTableBodyCells`](DTableBodyCells.md)

## Methods

### set

▸ **set**\<`ROW`\>(`target`, `row`, `columnIndex`, `column`, `readOnly?`): `void`

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DTableBodyCellsTarget`](../interfaces/DTableBodyCellsTarget.md) |
| `row` | `ROW` |
| `columnIndex` | `number` |
| `column` | [`DTableBodyCellsColumn`](../interfaces/DTableBodyCellsColumn.md)\<`ROW`\> |
| `readOnly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cells.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cells.ts#L27)

___

### toReadOnly

▸ **toReadOnly**\<`ROW`\>(`row`, `columnIndex`, `column`): `boolean`

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `ROW` |
| `columnIndex` | `number` |
| `column` | [`DTableBodyCellsColumn`](../interfaces/DTableBodyCellsColumn.md)\<`ROW`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cells.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cells.ts#L50)

___

### toRenderable

▸ **toRenderable**\<`ROW`\>(`row`, `columnIndex`, `column`): `boolean`

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `ROW` |
| `columnIndex` | `number` |
| `column` | [`DTableBodyCellsColumn`](../interfaces/DTableBodyCellsColumn.md)\<`ROW`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cells.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cells.ts#L65)
