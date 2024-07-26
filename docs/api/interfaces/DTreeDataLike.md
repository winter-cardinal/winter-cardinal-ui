[Winter Cardinal UI - v0.442.0](../index.md) / DTreeDataLike

# Interface: DTreeDataLike\<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) |

## Hierarchy

- **`DTreeDataLike`**

  ↳ [`DTreeData`](DTreeData.md)

## Implemented by

- [`DTree`](../classes/DTree.md)

## Table of contents

### Properties

- [selection](DTreeDataLike.md#selection)

### Methods

- [add](DTreeDataLike.md#add)
- [addAfter](DTreeDataLike.md#addafter)
- [addBefore](DTreeDataLike.md#addbefore)
- [clear](DTreeDataLike.md#clear)
- [collapse](DTreeDataLike.md#collapse)
- [collapseAll](DTreeDataLike.md#collapseall)
- [each](DTreeDataLike.md#each)
- [expand](DTreeDataLike.md#expand)
- [expandAll](DTreeDataLike.md#expandall)
- [isCollapsed](DTreeDataLike.md#iscollapsed)
- [isExpanded](DTreeDataLike.md#isexpanded)
- [remove](DTreeDataLike.md#remove)
- [toggle](DTreeDataLike.md#toggle)
- [update](DTreeDataLike.md#update)

## Properties

### selection

• `Readonly` **selection**: [`DTreeDataSelection`](DTreeDataSelection.md)\<`NODE`\>

A selection.

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L32)

## Methods

### add

▸ **add**(`target`, `parent?`): `boolean`

Inserts a node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a new node |
| `parent?` | `NODE` | a parent node |

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L112)

___

### addAfter

▸ **addAfter**(`target`, `sibling`): `boolean`

Inserts the given node after the given sibling.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a new node |
| `sibling` | `NODE` | a sibling node |

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L130)

___

### addBefore

▸ **addBefore**(`target`, `sibling`): `boolean`

Inserts the given node before the given sibling.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a new node |
| `sibling` | `NODE` | a sibling node |

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L121)

___

### clear

▸ **clear**(): `boolean`

Clears all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L95)

___

### collapse

▸ **collapse**(`target`): `boolean`

Collapses the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be collapsed |

#### Returns

`boolean`

true if succeeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L58)

___

### collapseAll

▸ **collapseAll**(): `boolean`

Collapses all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L72)

___

### each

▸ **each**(`iteratee`): `void`

Iterates over all the nodes.
If the iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTreeNodeIteratee`](../index.md#dtreenodeiteratee)\<`NODE`\> | an iteratee |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L138)

___

### expand

▸ **expand**(`target`): `boolean`

Expands the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be expanded |

#### Returns

`boolean`

true if succeeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L50)

___

### expandAll

▸ **expandAll**(): `boolean`

Expands all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L65)

___

### isCollapsed

▸ **isCollapsed**(`target`): `boolean`

Returns true if the given node is collapsed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be checked. |

#### Returns

`boolean`

true if the given node is collapsed

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L80)

___

### isExpanded

▸ **isExpanded**(`target`): `boolean`

Returns true if the given item is expanded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | an item to be checked |

#### Returns

`boolean`

true if the given item is expanded

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L88)

___

### remove

▸ **remove**(`target`): `boolean`

Removes the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be removed |

#### Returns

`boolean`

true if succeeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L103)

___

### toggle

▸ **toggle**(`target`): `boolean`

Toggles the given node,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node |

#### Returns

`boolean`

**`Retrn`**

true if succeeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L42)

___

### update

▸ **update**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L34)
