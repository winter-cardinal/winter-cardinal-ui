[Winter Cardinal UI - v0.407.0](../index.md) / DTreeData

# Interface: DTreeData\<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) |

## Hierarchy

- [`DTreeDataLike`](DTreeDataLike.md)\<`NODE`\>

  ↳ **`DTreeData`**

## Implemented by

- [`DTreeDataImpl`](../classes/DTreeDataImpl.md)

## Table of contents

### Properties

- [accessor](DTreeData.md#accessor)
- [mapped](DTreeData.md#mapped)
- [nodes](DTreeData.md#nodes)
- [selection](DTreeData.md#selection)

### Methods

- [add](DTreeData.md#add)
- [addAfter](DTreeData.md#addafter)
- [addBefore](DTreeData.md#addbefore)
- [clear](DTreeData.md#clear)
- [collapse](DTreeData.md#collapse)
- [collapseAll](DTreeData.md#collapseall)
- [each](DTreeData.md#each)
- [expand](DTreeData.md#expand)
- [expandAll](DTreeData.md#expandall)
- [isCollapsed](DTreeData.md#iscollapsed)
- [isExpanded](DTreeData.md#isexpanded)
- [remove](DTreeData.md#remove)
- [toggle](DTreeData.md#toggle)
- [update](DTreeData.md#update)

## Properties

### accessor

• `Readonly` **accessor**: [`DTreeNodeAccessor`](DTreeNodeAccessor.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L144)

___

### mapped

• **mapped**: [`DTreeDataMapped`](DTreeDataMapped.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L143)

___

### nodes

• **nodes**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L142)

___

### selection

• `Readonly` **selection**: [`DTreeDataSelection`](DTreeDataSelection.md)\<`NODE`\>

A selection.

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[selection](DTreeDataLike.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L32)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[add](DTreeDataLike.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L112)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[addAfter](DTreeDataLike.md#addafter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L130)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[addBefore](DTreeDataLike.md#addbefore)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L121)

___

### clear

▸ **clear**(): `boolean`

Clears all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[clear](DTreeDataLike.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L95)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[collapse](DTreeDataLike.md#collapse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L58)

___

### collapseAll

▸ **collapseAll**(): `boolean`

Collapses all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[collapseAll](DTreeDataLike.md#collapseall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L72)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[each](DTreeDataLike.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L138)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[expand](DTreeDataLike.md#expand)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L50)

___

### expandAll

▸ **expandAll**(): `boolean`

Expands all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[expandAll](DTreeDataLike.md#expandall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L65)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[isCollapsed](DTreeDataLike.md#iscollapsed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L80)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[isExpanded](DTreeDataLike.md#isexpanded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L88)

___

### remove

▸ **remove**(`target`): `boolean`

Removes the given node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

`boolean`

true if succeeded

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[remove](DTreeDataLike.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L103)

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

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[toggle](DTreeDataLike.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L42)

___

### update

▸ **update**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DTreeDataLike](DTreeDataLike.md).[update](DTreeDataLike.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L34)
