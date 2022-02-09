[Winter Cardinal UI - v0.154.0](../index.md) / DTableDataOptions

# Interface: DTableDataOptions<ROW, EMITTER\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `EMITTER` | `any` |

## Hierarchy

- **`DTableDataOptions`**

  ↳ [`DTableDataListOptions`](DTableDataListOptions.md)

## Table of contents

### Properties

- [comparator](DTableDataOptions.md#comparator)
- [filter](DTableDataOptions.md#filter)
- [on](DTableDataOptions.md#on)
- [selection](DTableDataOptions.md#selection)

## Properties

### comparator

• `Optional` **comparator**: [`DTableDataComparator`](../index.md#dtabledatacomparator)<`ROW`\>

A comparator.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L78)

___

### filter

• `Optional` **filter**: [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\>

A filter.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L73)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`EMITTER`\>

Mappings of event names and event handlers.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L83)

___

### selection

• `Optional` **selection**: [`DTableDataSelectionOptions`](DTableDataSelectionOptions.md) \| [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\> \| [`DTableDataSelectionCreator`](../index.md#dtabledataselectioncreator)<`ROW`\>

Selection options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L65)
