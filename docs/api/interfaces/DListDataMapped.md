[Winter Cardinal UI - v0.414.0](../index.md) / DListDataMapped

# Interface: DListDataMapped\<ITEM\>

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Hierarchy

- [`DItemUpdaterDataMapped`](DItemUpdaterDataMapped.md)\<`ITEM`\>

  ↳ **`DListDataMapped`**

## Implemented by

- [`DListDataMappedImpl`](../classes/DListDataMappedImpl.md)

## Table of contents

### Methods

- [each](DListDataMapped.md#each)
- [size](DListDataMapped.md#size)

## Methods

### each

▸ **each**(`iteratee`, `from?`, `to?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`item`: `ITEM`, `index`: `number`) => `boolean` \| `void` |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`void`

#### Overrides

[DItemUpdaterDataMapped](DItemUpdaterDataMapped.md).[each](DItemUpdaterDataMapped.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-mapped.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-list-data-mapped.ts#L9)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Inherited from

[DItemUpdaterDataMapped](DItemUpdaterDataMapped.md).[size](DItemUpdaterDataMapped.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L47)
