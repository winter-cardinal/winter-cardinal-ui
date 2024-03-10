[Winter Cardinal UI - v0.414.0](../index.md) / DTableDataOptions

# Interface: DTableDataOptions\<ROW, EMITTER\>

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

• `Optional` **comparator**: [`DTableDataComparator`](../index.md#dtabledatacomparator)\<`ROW`\>

A comparator.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L85)

___

### filter

• `Optional` **filter**: [`DTableDataFilterer`](../index.md#dtabledatafilterer)\<`ROW`\>

A filter.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L80)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`EMITTER`\>

Mappings of event names and event handlers.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L90)

___

### selection

• `Optional` **selection**: [`DTableDataSelection`](DTableDataSelection.md)\<`ROW`\> \| [`DTableDataSelectionCreator`](../index.md#dtabledataselectioncreator)\<`ROW`\> \| [`DTableDataSelectionOptions`](DTableDataSelectionOptions.md)\<`any`\>

Selection options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L72)
