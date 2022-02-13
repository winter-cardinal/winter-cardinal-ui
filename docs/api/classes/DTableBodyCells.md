[Winter Cardinal UI - v0.155.0](../index.md) / DTableBodyCells

# Class: DTableBodyCells

## Table of contents

### Constructors

- [constructor](DTableBodyCells.md#constructor)

### Methods

- [setReadOnly](DTableBodyCells.md#setreadonly)
- [setRenderable](DTableBodyCells.md#setrenderable)
- [toReadOnly](DTableBodyCells.md#toreadonly)
- [toRenderable](DTableBodyCells.md#torenderable)

## Constructors

### constructor

• **new DTableBodyCells**()

## Methods

### setReadOnly

▸ `Static` **setReadOnly**<`ROW`\>(`target`, `row`, `columnIndex`, `column`): `void`

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
| `column` | [`DTableBodyCellsColumn`](../interfaces/DTableBodyCellsColumn.md)<`ROW`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cells.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-body-cells.ts#L24)

___

### setRenderable

▸ `Static` **setRenderable**<`ROW`\>(`target`, `row`, `columnIndex`, `column`): `void`

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
| `column` | [`DTableBodyCellsColumn`](../interfaces/DTableBodyCellsColumn.md)<`ROW`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cells.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-body-cells.ts#L33)

___

### toReadOnly

▸ `Static` **toReadOnly**<`ROW`\>(`row`, `columnIndex`, `column`): `boolean`

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `ROW` |
| `columnIndex` | `number` |
| `column` | [`DTableBodyCellsColumn`](../interfaces/DTableBodyCellsColumn.md)<`ROW`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cells.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-body-cells.ts#L44)

___

### toRenderable

▸ `Static` **toRenderable**<`ROW`\>(`row`, `columnIndex`, `column`): `boolean`

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `ROW` |
| `columnIndex` | `number` |
| `column` | [`DTableBodyCellsColumn`](../interfaces/DTableBodyCellsColumn.md)<`ROW`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cells.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-body-cells.ts#L58)
