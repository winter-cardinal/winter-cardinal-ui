[Winter Cardinal UI - v0.155.0](../index.md) / DTableDataTreeItemAccessor

# Class: DTableDataTreeItemAccessor<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Table of contents

### Constructors

- [constructor](DTableDataTreeItemAccessor.md#constructor)

### Properties

- [toChildren](DTableDataTreeItemAccessor.md#tochildren)
- [toParent](DTableDataTreeItemAccessor.md#toparent)

## Constructors

### constructor

• **new DTableDataTreeItemAccessor**<`NODE`\>(`options?`)

#### Type parameters

| Name |
| :------ |
| `NODE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTableDataTreeItemAccessorOptions`](../interfaces/DTableDataTreeItemAccessorOptions.md)<`NODE`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L23)

## Properties

### toChildren

• **toChildren**: (`node`: `NODE`) => `undefined` \| ``null`` \| `NODE`[]

#### Type declaration

▸ (`node`): `undefined` \| ``null`` \| `NODE`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L21)

___

### toParent

• **toParent**: (`node`: `NODE`) => `undefined` \| ``null`` \| `NODE`

#### Type declaration

▸ (`node`): `undefined` \| ``null`` \| `NODE`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L20)
