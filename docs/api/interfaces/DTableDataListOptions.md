[Winter Cardinal UI - v0.165.0](../index.md) / DTableDataListOptions

# Interface: DTableDataListOptions<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- [`DTableDataOptions`](DTableDataOptions.md)<`ROW`\>

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

• `Optional` **comparator**: [`DTableDataComparator`](../index.md#dtabledatacomparator)<`ROW`\>

A comparator.

#### Inherited from

[DTableDataOptions](DTableDataOptions.md).[comparator](DTableDataOptions.md#comparator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L78)

___

### filter

• `Optional` **filter**: [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\>

A filter.

#### Inherited from

[DTableDataOptions](DTableDataOptions.md).[filter](DTableDataOptions.md#filter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L73)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DTableDataOptions](DTableDataOptions.md).[on](DTableDataOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L83)

___

### rows

• `Optional` **rows**: `ROW`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L17)

___

### selection

• `Optional` **selection**: [`DTableDataSelectionOptions`](DTableDataSelectionOptions.md) \| [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\> \| [`DTableDataSelectionCreator`](../index.md#dtabledataselectioncreator)<`ROW`\>

Selection options.

#### Inherited from

[DTableDataOptions](DTableDataOptions.md).[selection](DTableDataOptions.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L65)
