[Winter Cardinal UI - v0.442.0](../index.md) / DTreeDataImpl

# Class: DTreeDataImpl\<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) |

## Implements

- [`DTreeData`](../interfaces/DTreeData.md)\<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTreeDataImpl.md#constructor)

### Properties

- [\_accessor](DTreeDataImpl.md#_accessor)
- [\_mapped](DTreeDataImpl.md#_mapped)
- [\_nodeToFlag](DTreeDataImpl.md#_nodetoflag)
- [\_nodes](DTreeDataImpl.md#_nodes)
- [\_parent](DTreeDataImpl.md#_parent)
- [\_selection](DTreeDataImpl.md#_selection)

### Accessors

- [accessor](DTreeDataImpl.md#accessor)
- [mapped](DTreeDataImpl.md#mapped)
- [nodes](DTreeDataImpl.md#nodes)
- [selection](DTreeDataImpl.md#selection)

### Methods

- [add](DTreeDataImpl.md#add)
- [addAfter](DTreeDataImpl.md#addafter)
- [addBefore](DTreeDataImpl.md#addbefore)
- [clear](DTreeDataImpl.md#clear)
- [collapse](DTreeDataImpl.md#collapse)
- [collapseAll](DTreeDataImpl.md#collapseall)
- [each](DTreeDataImpl.md#each)
- [each\_](DTreeDataImpl.md#each_)
- [expand](DTreeDataImpl.md#expand)
- [expandAll](DTreeDataImpl.md#expandall)
- [isCollapsed](DTreeDataImpl.md#iscollapsed)
- [isExpanded](DTreeDataImpl.md#isexpanded)
- [remove](DTreeDataImpl.md#remove)
- [toSelection](DTreeDataImpl.md#toselection)
- [toggle](DTreeDataImpl.md#toggle)
- [update](DTreeDataImpl.md#update)

## Constructors

### constructor

• **new DTreeDataImpl**\<`NODE`\>(`parent`, `options?`): [`DTreeDataImpl`](DTreeDataImpl.md)\<`NODE`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTreeDataImplParent`](../interfaces/DTreeDataImplParent.md) |
| `options?` | [`DTreeDataOptions`](../interfaces/DTreeDataOptions.md)\<`NODE`\> |

#### Returns

[`DTreeDataImpl`](DTreeDataImpl.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L34)

## Properties

### \_accessor

• `Protected` **\_accessor**: [`DTreeNodeAccessor`](../interfaces/DTreeNodeAccessor.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L31)

___

### \_mapped

• `Protected` **\_mapped**: [`DTreeDataMapped`](../interfaces/DTreeDataMapped.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L32)

___

### \_nodeToFlag

• `Protected` **\_nodeToFlag**: `WeakMap`\<`NODE`, `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L28)

___

### \_nodes

• `Protected` **\_nodes**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L30)

___

### \_parent

• `Protected` **\_parent**: [`DTreeDataImplParent`](../interfaces/DTreeDataImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L27)

___

### \_selection

• `Protected` **\_selection**: [`DTreeDataImplSelection`](../interfaces/DTreeDataImplSelection.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L29)

## Accessors

### accessor

• `get` **accessor**(): [`DTreeNodeAccessor`](../interfaces/DTreeNodeAccessor.md)\<`NODE`\>

#### Returns

[`DTreeNodeAccessor`](../interfaces/DTreeNodeAccessor.md)\<`NODE`\>

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[accessor](../interfaces/DTreeData.md#accessor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L78)

___

### mapped

• `get` **mapped**(): [`DTreeDataMapped`](../interfaces/DTreeDataMapped.md)\<`NODE`\>

#### Returns

[`DTreeDataMapped`](../interfaces/DTreeDataMapped.md)\<`NODE`\>

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[mapped](../interfaces/DTreeData.md#mapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L74)

___

### nodes

• `get` **nodes**(): `NODE`[]

#### Returns

`NODE`[]

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[nodes](../interfaces/DTreeData.md#nodes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L65)

• `set` **nodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NODE`[] |

#### Returns

`void`

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[nodes](../interfaces/DTreeData.md#nodes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L69)

___

### selection

• `get` **selection**(): [`DTreeDataSelection`](../interfaces/DTreeDataSelection.md)\<`NODE`\>

A selection.

#### Returns

[`DTreeDataSelection`](../interfaces/DTreeDataSelection.md)\<`NODE`\>

a selection

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[selection](../interfaces/DTreeData.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L82)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[add](../interfaces/DTreeData.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L201)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[addAfter](../interfaces/DTreeData.md#addafter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L249)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[addBefore](../interfaces/DTreeData.md#addbefore)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L232)

___

### clear

▸ **clear**(): `boolean`

Clears all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[clear](../interfaces/DTreeData.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L170)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[collapse](../interfaces/DTreeData.md#collapse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L117)

___

### collapseAll

▸ **collapseAll**(): `boolean`

Collapses all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[collapseAll](../interfaces/DTreeData.md#collapseall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L145)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[each](../interfaces/DTreeData.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L266)

___

### each\_

▸ **each_**(`nodes`, `parent`, `iteratee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NODE`[] |
| `parent` | ``null`` \| `NODE` |
| `iteratee` | [`DTreeNodeIteratee`](../index.md#dtreenodeiteratee)\<`NODE`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L273)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[expand](../interfaces/DTreeData.md#expand)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L106)

___

### expandAll

▸ **expandAll**(): `boolean`

Expands all the nodes.

#### Returns

`boolean`

true if the data is changed

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[expandAll](../interfaces/DTreeData.md#expandall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L128)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[isCollapsed](../interfaces/DTreeData.md#iscollapsed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L162)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[isExpanded](../interfaces/DTreeData.md#isexpanded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L166)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[remove](../interfaces/DTreeData.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L182)

___

### toSelection

▸ **toSelection**(`options?`): [`DTreeDataImplSelection`](../interfaces/DTreeDataImplSelection.md)\<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTreeDataOptions`](../interfaces/DTreeDataOptions.md)\<`NODE`\> |

#### Returns

[`DTreeDataImplSelection`](../interfaces/DTreeDataImplSelection.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L51)

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

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[toggle](../interfaces/DTreeData.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L94)

___

### update

▸ **update**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DTreeData](../interfaces/DTreeData.md).[update](../interfaces/DTreeData.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L86)
