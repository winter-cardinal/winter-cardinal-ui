[Winter Cardinal UI - v0.160.0](../index.md) / DTreeDataMapped

# Interface: DTreeDataMapped<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Hierarchy

- [`DItemUpdaterDataMapped`](DItemUpdaterDataMapped.md)<`NODE`\>

  ↳ **`DTreeDataMapped`**

## Implemented by

- [`DTreeDataMappedImpl`](../classes/DTreeDataMappedImpl.md)

## Table of contents

### Properties

- [levels](DTreeDataMapped.md#levels)
- [nodes](DTreeDataMapped.md#nodes)

### Methods

- [each](DTreeDataMapped.md#each)
- [size](DTreeDataMapped.md#size)
- [toDirty](DTreeDataMapped.md#todirty)

## Properties

### levels

• `Readonly` **levels**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped.ts#L10)

___

### nodes

• `Readonly` **nodes**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped.ts#L9)

## Methods

### each

▸ **each**(`iteratee`, `from?`, `to?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`node`: `NODE`, `index`: `number`) => `boolean` \| `void` |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`void`

#### Overrides

[DItemUpdaterDataMapped](DItemUpdaterDataMapped.md).[each](DItemUpdaterDataMapped.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped.ts#L13)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Inherited from

[DItemUpdaterDataMapped](DItemUpdaterDataMapped.md).[size](DItemUpdaterDataMapped.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L47)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped.ts#L12)
