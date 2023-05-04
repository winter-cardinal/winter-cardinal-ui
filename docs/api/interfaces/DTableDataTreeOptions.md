[Winter Cardinal UI - v0.310.1](../index.md) / DTableDataTreeOptions

# Interface: DTableDataTreeOptions<NODE, EMITTER\>

[DTableDataTree](../classes/DTableDataTree.md) options.

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
- [hasChildren](DTableDataTreeOptions.md#haschildren)
- [nodes](DTableDataTreeOptions.md#nodes)
- [on](DTableDataTreeOptions.md#on)
- [reverse](DTableDataTreeOptions.md#reverse)
- [selection](DTableDataTreeOptions.md#selection)
- [toChildren](DTableDataTreeOptions.md#tochildren)
- [toParent](DTableDataTreeOptions.md#toparent)

## Properties

### comparator

• `Optional` **comparator**: [`DTableDataComparator`](../index.md#dtabledatacomparator)<`NODE`\>

A comparator.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L82)

___

### filter

• `Optional` **filter**: [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`NODE`\>

A filter.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L77)

___

### hasChildren

• `Optional` **hasChildren**: [`DTableDataTreeItemAccessorHasChildren`](../index.md#dtabledatatreeitemaccessorhaschildren)<`NODE`\>

#### Inherited from

[DTableDataTreeItemAccessorOptions](DTableDataTreeItemAccessorOptions.md).[hasChildren](DTableDataTreeItemAccessorOptions.md#haschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L18)

___

### nodes

• `Optional` **nodes**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L64)

___

### on

• `Optional` **on**: [`DTableDataTreeOnOptions`](DTableDataTreeOnOptions.md)<`NODE`, `EMITTER`\>

Mappings of event names and event handlers.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L92)

___

### reverse

• `Optional` **reverse**: `boolean`

True to list up nodes in the given node array in the reverse order.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L87)

___

### selection

• `Optional` **selection**: [`DTableDataTreeSelectionOptions`](DTableDataTreeSelectionOptions.md) \| [`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\> \| [`DTableDataTreeSelectionCreator`](../index.md#dtabledatatreeselectioncreator)<`NODE`\>

Selection options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L69)

___

### toChildren

• `Optional` **toChildren**: [`DTableDataTreeItemAccessorToChildren`](../index.md#dtabledatatreeitemaccessortochildren)<`NODE`\>

#### Inherited from

[DTableDataTreeItemAccessorOptions](DTableDataTreeItemAccessorOptions.md).[toChildren](DTableDataTreeItemAccessorOptions.md#tochildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L17)

___

### toParent

• `Optional` **toParent**: [`DTableDataTreeItemAccessorToParent`](../index.md#dtabledatatreeitemaccessortoparent)<`NODE`\>

#### Inherited from

[DTableDataTreeItemAccessorOptions](DTableDataTreeItemAccessorOptions.md).[toParent](DTableDataTreeItemAccessorOptions.md#toparent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-item-accessor.ts#L16)
