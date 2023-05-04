[Winter Cardinal UI - v0.310.1](../index.md) / DTableDataTree

# Class: DTableDataTree<NODE\>

Please note that this data class does not support the sorter.

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTableDataTreeNode`](../interfaces/DTableDataTreeNode.md)<`NODE`, `NODE`\> |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataTree`**

## Implements

- [`DTableData`](../interfaces/DTableData.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTableDataTree.md#constructor)

### Properties

- [\_accessor](DTableDataTree.md#_accessor)
- [\_filter](DTableDataTree.md#_filter)
- [\_flags](DTableDataTree.md#_flags)
- [\_isRowsDirty](DTableDataTree.md#_isrowsdirty)
- [\_mapped](DTableDataTree.md#_mapped)
- [\_nodes](DTableDataTree.md#_nodes)
- [\_parent](DTableDataTree.md#_parent)
- [\_reverse](DTableDataTree.md#_reverse)
- [\_rows](DTableDataTree.md#_rows)
- [\_selection](DTableDataTree.md#_selection)
- [\_sorter](DTableDataTree.md#_sorter)
- [\_supplimentals](DTableDataTree.md#_supplimentals)

### Accessors

- [accessor](DTableDataTree.md#accessor)
- [filter](DTableDataTree.md#filter)
- [mapped](DTableDataTree.md#mapped)
- [nodes](DTableDataTree.md#nodes)
- [rows](DTableDataTree.md#rows)
- [selection](DTableDataTree.md#selection)
- [sorter](DTableDataTree.md#sorter)
- [supplimentals](DTableDataTree.md#supplimentals)

### Methods

- [addListener](DTableDataTree.md#addlistener)
- [bind](DTableDataTree.md#bind)
- [close](DTableDataTree.md#close)
- [collapse](DTableDataTree.md#collapse)
- [each](DTableDataTree.md#each)
- [emit](DTableDataTree.md#emit)
- [eventNames](DTableDataTree.md#eventnames)
- [expand](DTableDataTree.md#expand)
- [get](DTableDataTree.md#get)
- [isCollapsed](DTableDataTree.md#iscollapsed)
- [isExpanded](DTableDataTree.md#isexpanded)
- [isOpened](DTableDataTree.md#isopened)
- [listenerCount](DTableDataTree.md#listenercount)
- [listeners](DTableDataTree.md#listeners)
- [newRows](DTableDataTree.md#newrows)
- [newSelection](DTableDataTree.md#newselection)
- [off](DTableDataTree.md#off)
- [on](DTableDataTree.md#on)
- [once](DTableDataTree.md#once)
- [open](DTableDataTree.md#open)
- [removeAllListeners](DTableDataTree.md#removealllisteners)
- [removeListener](DTableDataTree.md#removelistener)
- [size](DTableDataTree.md#size)
- [toAccessor](DTableDataTree.md#toaccessor)
- [toSelection](DTableDataTree.md#toselection)
- [toSupplimental](DTableDataTree.md#tosupplimental)
- [toggle](DTableDataTree.md#toggle)
- [update](DTableDataTree.md#update)
- [updateRows](DTableDataTree.md#updaterows)

## Constructors

### constructor

• **new DTableDataTree**<`NODE`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTableDataTreeNode`](../interfaces/DTableDataTreeNode.md)<`NODE`, `NODE`, `NODE`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTableDataTreeOptions`](../interfaces/DTableDataTreeOptions.md)<`NODE`, `any`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L115)

## Properties

### \_accessor

• `Protected` **\_accessor**: [`DTableDataTreeItemAccessor`](DTableDataTreeItemAccessor.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L112)

___

### \_filter

• `Protected` **\_filter**: [`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L108)

___

### \_flags

• `Protected` **\_flags**: `WeakMap`<`NODE`, `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L107)

___

### \_isRowsDirty

• `Protected` **\_isRowsDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L105)

___

### \_mapped

• `Protected` **\_mapped**: [`DTableDataMapped`](../interfaces/DTableDataMapped.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L111)

___

### \_nodes

• `Protected` `Optional` **\_nodes**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L103)

___

### \_parent

• `Protected` **\_parent**: ``null`` \| [`DTableDataParent`](../interfaces/DTableDataParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L102)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L113)

___

### \_rows

• `Protected` **\_rows**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L104)

___

### \_selection

• `Protected` **\_selection**: [`DTableDataTreeSelection`](../interfaces/DTableDataTreeSelection.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L110)

___

### \_sorter

• `Protected` **\_sorter**: [`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L109)

___

### \_supplimentals

• `Protected` **\_supplimentals**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L106)

## Accessors

### accessor

• `get` **accessor**(): [`DTableDataTreeItemAccessor`](DTableDataTreeItemAccessor.md)<`NODE`\>

#### Returns

[`DTableDataTreeItemAccessor`](DTableDataTreeItemAccessor.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L205)

___

### filter

• `get` **filter**(): [`DTableDataFilter`](../interfaces/DTableDataFilter.md)<`NODE`\>

A data filter.

#### Returns

[`DTableDataFilter`](../interfaces/DTableDataFilter.md)<`NODE`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[filter](../interfaces/DTableData.md#filter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:379](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L379)

___

### mapped

• `get` **mapped**(): [`DTableDataMapped`](../interfaces/DTableDataMapped.md)<`NODE`\>

Sorted and filtered data.

#### Returns

[`DTableDataMapped`](../interfaces/DTableDataMapped.md)<`NODE`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[mapped](../interfaces/DTableData.md#mapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L387)

___

### nodes

• `get` **nodes**(): `undefined` \| `NODE`[]

#### Returns

`undefined` \| `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L181)

• `set` **nodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `undefined` \| `NODE`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L185)

___

### rows

• `get` **rows**(): `NODE`[]

#### Returns

`NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L193)

___

### selection

• `get` **selection**(): [`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`NODE`\>

A data selection.

#### Returns

[`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`NODE`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[selection](../interfaces/DTableData.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L375)

___

### sorter

• `get` **sorter**(): [`DTableDataSorter`](../interfaces/DTableDataSorter.md)<`NODE`\>

A data sorter.

#### Returns

[`DTableDataSorter`](../interfaces/DTableDataSorter.md)<`NODE`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[sorter](../interfaces/DTableData.md#sorter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L383)

___

### supplimentals

• `get` **supplimentals**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L201)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataTree`](DTableDataTree.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataTree`](DTableDataTree.md)<`NODE`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[addListener](../interfaces/DTableData.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### bind

▸ **bind**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataParent`](../interfaces/DTableDataParent.md) |

#### Returns

`void`

#### Implementation of

[DTableData](../interfaces/DTableData.md).[bind](../interfaces/DTableData.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L177)

___

### close

▸ **close**(`node`): `boolean`

**`Deprecated`**

in favor of [collapse](DTableDataTree.md#collapse).

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L350)

___

### collapse

▸ **collapse**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L316)

___

### each

▸ **each**(`iteratee`, `ifrom?`, `ito?`): `void`

Calls the specified iteratee on each datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | (`node`: `NODE`, `index`: `number`) => `boolean` \| `void` | an function called on each datum |
| `ifrom?` | `number` | an index to start an iteration |
| `ito?` | `number` | an index before which an interation stops |

#### Returns

`void`

#### Implementation of

[DTableData](../interfaces/DTableData.md).[each](../interfaces/DTableData.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L359)

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[emit](../interfaces/DTableData.md#emit)

#### Inherited from

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DTableData](../interfaces/DTableData.md).[eventNames](../interfaces/DTableData.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### expand

▸ **expand**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:304](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L304)

___

### get

▸ **get**(`index`): ``null`` \| `NODE`

Returns a row data at the specified index.
The index is an index on rows filters and sorters are not applied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index on rows filters and sorters are not applied |

#### Returns

``null`` \| `NODE`

#### Implementation of

[DTableData](../interfaces/DTableData.md).[get](../interfaces/DTableData.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L296)

___

### isCollapsed

▸ **isCollapsed**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L328)

___

### isExpanded

▸ **isExpanded**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L332)

___

### isOpened

▸ **isOpened**(`node`): `boolean`

**`Deprecated`**

in favor of [isExpanded](DTableDataTree.md#isexpanded).

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L355)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Implementation of

[DTableData](../interfaces/DTableData.md).[listenerCount](../interfaces/DTableData.md#listenercount)

#### Inherited from

utils.EventEmitter.listenerCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Implementation of

[DTableData](../interfaces/DTableData.md).[listeners](../interfaces/DTableData.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newRows

▸ `Protected` **newRows**(`nodes`, `irows`, `ilevel`, `rows`, `supplimentals`, `flags`, `reverse`, `toChildren`, `hasChildren`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NODE`[] |
| `irows` | `number` |
| `ilevel` | `number` |
| `rows` | `NODE`[] |
| `supplimentals` | `number`[] |
| `flags` | `WeakMap`<`NODE`, `number`\> |
| `reverse` | `boolean` |
| `toChildren` | [`DTableDataTreeItemAccessorToChildren`](../index.md#dtabledatatreeitemaccessortochildren)<`NODE`\> |
| `hasChildren` | [`DTableDataTreeItemAccessorHasChildren`](../index.md#dtabledatatreeitemaccessorhaschildren)<`NODE`\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L240)

___

### newSelection

▸ `Protected` **newSelection**(`options?`): [`DTableDataTreeSelection`](../interfaces/DTableDataTreeSelection.md)<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTableDataTreeSelectionOptions`](../interfaces/DTableDataTreeSelectionOptions.md) |

#### Returns

[`DTableDataTreeSelection`](../interfaces/DTableDataTreeSelection.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L167)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTree`](DTableDataTree.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataTree`](DTableDataTree.md)<`NODE`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[off](../interfaces/DTableData.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataTree`](DTableDataTree.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTableDataTree`](DTableDataTree.md)<`NODE`\>

`this`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[on](../interfaces/DTableData.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataTree`](DTableDataTree.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTableDataTree`](DTableDataTree.md)<`NODE`\>

`this`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[once](../interfaces/DTableData.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### open

▸ **open**(`node`): `boolean`

**`Deprecated`**

in favor of [expand](DTableDataTree.md#expand).

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L345)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataTree`](DTableDataTree.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataTree`](DTableDataTree.md)<`NODE`\>

`this`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[removeAllListeners](../interfaces/DTableData.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTree`](DTableDataTree.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataTree`](DTableDataTree.md)<`NODE`\>

`this`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[removeListener](../interfaces/DTableData.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

Returns a size of rows.

#### Returns

`number`

#### Implementation of

[DTableData](../interfaces/DTableData.md).[size](../interfaces/DTableData.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L292)

___

### toAccessor

▸ `Protected` **toAccessor**(`options?`): [`DTableDataTreeItemAccessor`](DTableDataTreeItemAccessor.md)<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTableDataTreeOptions`](../interfaces/DTableDataTreeOptions.md)<`NODE`, `any`\> |

#### Returns

[`DTableDataTreeItemAccessor`](DTableDataTreeItemAccessor.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L173)

___

### toSelection

▸ `Protected` **toSelection**(`options?`): [`DTableDataTreeSelection`](../interfaces/DTableDataTreeSelection.md)<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTableDataTreeSelectionOptions`](../interfaces/DTableDataTreeSelectionOptions.md) \| [`DTableDataTreeSelection`](../interfaces/DTableDataTreeSelection.md)<`NODE`\> \| [`DTableDataTreeSelectionCreator`](../index.md#dtabledatatreeselectioncreator)<`NODE`\> |

#### Returns

[`DTableDataTreeSelection`](../interfaces/DTableDataTreeSelection.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L153)

___

### toSupplimental

▸ `Protected` **toSupplimental**(`ilevel`, `hasChildren`, `isOpened`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ilevel` | `number` |
| `hasChildren` | `boolean` |
| `isOpened` | `boolean` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L236)

___

### toggle

▸ **toggle**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L336)

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

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:285](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L285)

___

### updateRows

▸ `Protected` **updateRows**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `undefined` \| `NODE`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree.ts#L209)
