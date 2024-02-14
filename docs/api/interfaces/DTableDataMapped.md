[Winter Cardinal UI - v0.407.0](../index.md) / DTableDataMapped

# Interface: DTableDataMapped\<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Implemented by

- [`DTableDataListMapped`](../classes/DTableDataListMapped.md)

## Table of contents

### Properties

- [rows](DTableDataMapped.md#rows)

### Methods

- [each](DTableDataMapped.md#each)
- [get](DTableDataMapped.md#get)
- [map](DTableDataMapped.md#map)
- [size](DTableDataMapped.md#size)
- [unmap](DTableDataMapped.md#unmap)

## Properties

### rows

• `Readonly` **rows**: `ROW`[]

Mapped rows.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L24)

## Methods

### each

▸ **each**(`iteratee`, `ifrom?`, `iend?`): `void`

Calls the specified iteratee on each mapped datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTableDataMappedEachIteratee`](../index.md#dtabledatamappedeachiteratee)\<`ROW`\> | an function called on each mapped datum |
| `ifrom?` | `number` | an index to start an iteration |
| `iend?` | `number` | - |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L63)

___

### get

▸ **get**(`index`): ``null`` \| `ROW`

Returns a row data at the specified index.
The index is an index on rows filters and sorters are applied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | a mapped index |

#### Returns

``null`` \| `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L53)

___

### map

▸ **map**(`unmappedIndex`): ``null`` \| `number`

Returns an mapped index of the specified unmapped index.
A mapped index is an index on rows filters and sorters are applied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unmappedIndex` | `number` | a unmapped index |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L32)

___

### size

▸ **size**(): `number`

Returns a size of rows.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L45)

___

### unmap

▸ **unmap**(`index`): `number`

Returns an unmapped index of the specified mapped index.
A mapped index is an index on rows filters and sorters are applied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | a mapped index |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L40)
