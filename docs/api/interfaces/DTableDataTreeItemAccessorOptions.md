[Winter Cardinal UI - v0.227.0](../index.md) / DTableDataTreeItemAccessorOptions

# Interface: DTableDataTreeItemAccessorOptions<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Hierarchy

- **`DTableDataTreeItemAccessorOptions`**

  ↳ [`DTableDataTreeOptions`](DTableDataTreeOptions.md)

## Table of contents

### Properties

- [toChildren](DTableDataTreeItemAccessorOptions.md#tochildren)
- [toParent](DTableDataTreeItemAccessorOptions.md#toparent)

## Properties

### toChildren

• `Optional` **toChildren**: (`node`: `NODE`) => `undefined` \| ``null`` \| `NODE`[]

#### Type declaration

▸ (`node`): `undefined` \| ``null`` \| `NODE`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L8)

___

### toParent

• `Optional` **toParent**: (`node`: `NODE`) => `undefined` \| ``null`` \| `NODE`

#### Type declaration

▸ (`node`): `undefined` \| ``null`` \| `NODE`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L7)
