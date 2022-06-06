[Winter Cardinal UI - v0.179.0](../index.md) / DTableDataMapped

# Interface: DTableDataMapped<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Implemented by

- [`DTableDataListMapped`](../classes/DTableDataListMapped.md)

## Table of contents

### Methods

- [each](DTableDataMapped.md#each)
- [get](DTableDataMapped.md#get)
- [map](DTableDataMapped.md#map)
- [size](DTableDataMapped.md#size)
- [unmap](DTableDataMapped.md#unmap)

## Methods

### each

▸ **each**(`iteratee`, `ifrom?`, `iend?`): `void`

Calls the specified iteratee on each mapped datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTableDataMappedEachIteratee`](../index.md#dtabledatamappedeachiteratee)<`ROW`\> | an function called on each mapped datum |
| `ifrom?` | `number` | an index to start an iteration |
| `iend?` | `number` | - |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L56)

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

[src/main/typescript/wcardinal/ui/d-table-data.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L46)

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

[src/main/typescript/wcardinal/ui/d-table-data.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L25)

___

### size

▸ **size**(): `number`

Returns a size of rows.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L38)

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

[src/main/typescript/wcardinal/ui/d-table-data.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L33)
