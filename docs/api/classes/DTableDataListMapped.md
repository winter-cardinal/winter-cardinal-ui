[Winter Cardinal UI - v0.414.0](../index.md) / DTableDataListMapped

# Class: DTableDataListMapped\<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Implements

- [`DTableDataMapped`](../interfaces/DTableDataMapped.md)\<`ROW`\>

## Table of contents

### Constructors

- [constructor](DTableDataListMapped.md#constructor)

### Properties

- [\_parent](DTableDataListMapped.md#_parent)

### Accessors

- [rows](DTableDataListMapped.md#rows)

### Methods

- [each](DTableDataListMapped.md#each)
- [get](DTableDataListMapped.md#get)
- [map](DTableDataListMapped.md#map)
- [size](DTableDataListMapped.md#size)
- [unmap](DTableDataListMapped.md#unmap)

## Constructors

### constructor

• **new DTableDataListMapped**\<`ROW`\>(`parent`): [`DTableDataListMapped`](DTableDataListMapped.md)\<`ROW`\>

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataListMappedParent`](../interfaces/DTableDataListMappedParent.md)\<`ROW`\> |

#### Returns

[`DTableDataListMapped`](DTableDataListMapped.md)\<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L16)

## Properties

### \_parent

• `Protected` **\_parent**: [`DTableDataListMappedParent`](../interfaces/DTableDataListMappedParent.md)\<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L14)

## Accessors

### rows

• `get` **rows**(): `ROW`[]

Mapped rows.

#### Returns

`ROW`[]

#### Implementation of

[DTableDataMapped](../interfaces/DTableDataMapped.md).[rows](../interfaces/DTableDataMapped.md#rows)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L20)

## Methods

### each

▸ **each**(`iteratee`, `ifrom?`, `ito?`): `void`

Calls the specified iteratee on each mapped datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTableDataMappedEachIteratee`](../index.md#dtabledatamappedeachiteratee)\<`ROW`\> | an function called on each mapped datum |
| `ifrom?` | `number` | an index to start an iteration |
| `ito?` | `number` | an index before which an interation stops |

#### Returns

`void`

#### Implementation of

[DTableDataMapped](../interfaces/DTableDataMapped.md).[each](../interfaces/DTableDataMapped.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L53)

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

#### Implementation of

[DTableDataMapped](../interfaces/DTableDataMapped.md).[get](../interfaces/DTableDataMapped.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L48)

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

#### Implementation of

[DTableDataMapped](../interfaces/DTableDataMapped.md).[map](../interfaces/DTableDataMapped.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L28)

___

### size

▸ **size**(): `number`

Returns a size of rows.

#### Returns

`number`

#### Implementation of

[DTableDataMapped](../interfaces/DTableDataMapped.md).[size](../interfaces/DTableDataMapped.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L42)

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

#### Implementation of

[DTableDataMapped](../interfaces/DTableDataMapped.md).[unmap](../interfaces/DTableDataMapped.md#unmap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L37)
