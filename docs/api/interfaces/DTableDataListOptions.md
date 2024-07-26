[Winter Cardinal UI - v0.442.0](../index.md) / DTableDataListOptions

# Interface: DTableDataListOptions\<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- [`DTableDataOptions`](DTableDataOptions.md)\<`ROW`\>

  ↳ **`DTableDataListOptions`**

## Table of contents

### Properties

- [comparator](DTableDataListOptions.md#comparator)
- [filter](DTableDataListOptions.md#filter)
- [on](DTableDataListOptions.md#on)
- [rows](DTableDataListOptions.md#rows)
- [selection](DTableDataListOptions.md#selection)

## Properties

### comparator

• `Optional` **comparator**: [`DTableDataComparator`](../index.md#dtabledatacomparator)\<`ROW`\>

A comparator.

#### Inherited from

[DTableDataOptions](DTableDataOptions.md).[comparator](DTableDataOptions.md#comparator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L85)

___

### filter

• `Optional` **filter**: [`DTableDataFilterer`](../index.md#dtabledatafilterer)\<`ROW`\>

A filter.

#### Inherited from

[DTableDataOptions](DTableDataOptions.md).[filter](DTableDataOptions.md#filter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L80)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DTableDataOptions](DTableDataOptions.md).[on](DTableDataOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L90)

___

### rows

• `Optional` **rows**: `ROW`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L17)

___

### selection

• `Optional` **selection**: [`DTableDataSelectionOptions`](DTableDataSelectionOptions.md)\<`any`\> \| [`DTableDataSelection`](DTableDataSelection.md)\<`ROW`\> \| [`DTableDataSelectionCreator`](../index.md#dtabledataselectioncreator)\<`ROW`\>

Selection options.

#### Inherited from

[DTableDataOptions](DTableDataOptions.md).[selection](DTableDataOptions.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L72)
