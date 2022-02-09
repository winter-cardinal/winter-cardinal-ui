[Winter Cardinal UI](../README.md) / DTableDataTreeOptions

# Interface: DTableDataTreeOptions<NODE, EMITTER\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | `NODE` |
| `EMITTER` | `any` |

## Hierarchy

- [`DTableDataTreeItemAccessorOptions`](DTableDataTreeItemAccessorOptions.md)<`NODE`\>

  ↳ **`DTableDataTreeOptions`**

## Table of contents

### Properties

- [comparator](DTableDataTreeOptions.md#comparator)
- [filter](DTableDataTreeOptions.md#filter)
- [nodes](DTableDataTreeOptions.md#nodes)
- [on](DTableDataTreeOptions.md#on)
- [reverse](DTableDataTreeOptions.md#reverse)
- [selection](DTableDataTreeOptions.md#selection)

### Methods

- [toChildren](DTableDataTreeOptions.md#tochildren)
- [toParent](DTableDataTreeOptions.md#toparent)

## Properties

### comparator

• `Optional` **comparator**: [`DTableDataComparator`](../README.md#dtabledatacomparator)<`NODE`\>

A comparator.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L48)

___

### filter

• `Optional` **filter**: [`DTableDataFilterer`](../README.md#dtabledatafilterer)<`NODE`\>

A filter.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L43)

___

### nodes

• `Optional` **nodes**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L30)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`EMITTER`\>

Mappings of event names and event handlers.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L58)

___

### reverse

• `Optional` **reverse**: `boolean`

True to list up nodes in the given node array in the reverse order.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L53)

___

### selection

• `Optional` **selection**: [`DTableDataTreeSelectionOptions`](DTableDataTreeSelectionOptions.md) \| [`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\> \| [`DTableDataTreeSelectionCreator`](../README.md#dtabledatatreeselectioncreator)<`NODE`\>

Selection options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L35)

## Methods

### toChildren

▸ `Optional` **toChildren**(`node`): `undefined` \| ``null`` \| `NODE`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Inherited from

[DTableDataTreeItemAccessorOptions](DTableDataTreeItemAccessorOptions.md).[toChildren](DTableDataTreeItemAccessorOptions.md#tochildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L8)

___

### toParent

▸ `Optional` **toParent**(`node`): `undefined` \| ``null`` \| `NODE`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| ``null`` \| `NODE`

#### Inherited from

[DTableDataTreeItemAccessorOptions](DTableDataTreeItemAccessorOptions.md).[toParent](DTableDataTreeItemAccessorOptions.md#toparent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L7)
