[Winter Cardinal UI - v0.200.0](../index.md) / DTreeDataMappedImpl

# Class: DTreeDataMappedImpl<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Implements

- [`DTreeDataMapped`](../interfaces/DTreeDataMapped.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTreeDataMappedImpl.md#constructor)

### Properties

- [\_isDirty](DTreeDataMappedImpl.md#_isdirty)
- [\_levels](DTreeDataMappedImpl.md#_levels)
- [\_nodes](DTreeDataMappedImpl.md#_nodes)
- [\_parent](DTreeDataMappedImpl.md#_parent)
- [\_reverse](DTreeDataMappedImpl.md#_reverse)

### Accessors

- [levels](DTreeDataMappedImpl.md#levels)
- [nodes](DTreeDataMappedImpl.md#nodes)

### Methods

- [each](DTreeDataMappedImpl.md#each)
- [newNodes](DTreeDataMappedImpl.md#newnodes)
- [size](DTreeDataMappedImpl.md#size)
- [toDirty](DTreeDataMappedImpl.md#todirty)
- [update](DTreeDataMappedImpl.md#update)

## Constructors

### constructor

• **new DTreeDataMappedImpl**<`NODE`\>(`parent`, `reverse`)

#### Type parameters

| Name |
| :------ |
| `NODE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTreeDataMppedImplParent`](../interfaces/DTreeDataMppedImplParent.md)<`NODE`\> |
| `reverse` | `boolean` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L22)

## Properties

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L20)

___

### \_levels

• `Protected` `Readonly` **\_levels**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L18)

___

### \_nodes

• `Protected` `Readonly` **\_nodes**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L17)

___

### \_parent

• `Protected` `Readonly` **\_parent**: [`DTreeDataMppedImplParent`](../interfaces/DTreeDataMppedImplParent.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L16)

___

### \_reverse

• `Protected` `Readonly` **\_reverse**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L19)

## Accessors

### levels

• `get` **levels**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[DTreeDataMapped](../interfaces/DTreeDataMapped.md).[levels](../interfaces/DTreeDataMapped.md#levels)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L35)

___

### nodes

• `get` **nodes**(): `NODE`[]

#### Returns

`NODE`[]

#### Implementation of

[DTreeDataMapped](../interfaces/DTreeDataMapped.md).[nodes](../interfaces/DTreeDataMapped.md#nodes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L30)

## Methods

### each

▸ **each**(`iteratee`, `from?`, `to?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`value`: `NODE`, `index`: `number`) => `boolean` \| `void` |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`void`

#### Implementation of

[DTreeDataMapped](../interfaces/DTreeDataMapped.md).[each](../interfaces/DTreeDataMapped.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L49)

___

### newNodes

▸ `Protected` **newNodes**(`parent`, `parentNodes`, `index`, `level`, `nodes`, `levels`, `reverse`, `toChildren`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTreeDataMppedImplParent`](../interfaces/DTreeDataMppedImplParent.md)<`NODE`\> |
| `parentNodes` | `NODE`[] |
| `index` | `number` |
| `level` | `number` |
| `nodes` | `NODE`[] |
| `levels` | `number`[] |
| `reverse` | `boolean` |
| `toChildren` | (`node`: `NODE`) => `undefined` \| ``null`` \| `NODE`[] |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L91)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DTreeDataMapped](../interfaces/DTreeDataMapped.md).[size](../interfaces/DTreeDataMapped.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L44)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeDataMapped](../interfaces/DTreeDataMapped.md).[toDirty](../interfaces/DTreeDataMapped.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L40)

___

### update

▸ `Protected` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-data-mapped-impl.ts#L65)
