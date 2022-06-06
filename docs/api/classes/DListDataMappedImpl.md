[Winter Cardinal UI - v0.179.0](../index.md) / DListDataMappedImpl

# Class: DListDataMappedImpl<ITEM\>

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Implements

- [`DListDataMapped`](../interfaces/DListDataMapped.md)<`ITEM`\>

## Table of contents

### Constructors

- [constructor](DListDataMappedImpl.md#constructor)

### Properties

- [\_parent](DListDataMappedImpl.md#_parent)

### Methods

- [each](DListDataMappedImpl.md#each)
- [each\_](DListDataMappedImpl.md#each_)
- [size](DListDataMappedImpl.md#size)

## Constructors

### constructor

• **new DListDataMappedImpl**<`ITEM`\>(`parent`)

#### Type parameters

| Name |
| :------ |
| `ITEM` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DListDataMppedImplParent`](../interfaces/DListDataMppedImplParent.md)<`ITEM`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts#L17)

## Properties

### \_parent

• `Protected` `Readonly` **\_parent**: [`DListDataMppedImplParent`](../interfaces/DListDataMppedImplParent.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts#L15)

## Methods

### each

▸ **each**(`iteratee`, `from?`, `to?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`value`: `ITEM`, `index`: `number`) => `boolean` \| `void` |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`void`

#### Implementation of

[DListDataMapped](../interfaces/DListDataMapped.md).[each](../interfaces/DListDataMapped.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts#L26)

___

### each\_

▸ **each_**(`iteratee`, `items`, `start`, `from?`, `to?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`value`: `ITEM`, `index`: `number`) => `boolean` \| `void` |
| `items` | `ITEM`[] |
| `start` | `number` |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts#L43)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DListDataMapped](../interfaces/DListDataMapped.md).[size](../interfaces/DListDataMapped.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-mapped-impl.ts#L21)
