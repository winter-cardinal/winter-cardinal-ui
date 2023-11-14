[Winter Cardinal UI - v0.374.0](../index.md) / DTableDataTreeSelectionImpl

# Class: DTableDataTreeSelectionImpl\<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataTreeSelectionImpl`**

## Implements

- [`DTableDataTreeSelection`](../interfaces/DTableDataTreeSelection.md)\<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTableDataTreeSelectionImpl.md#constructor)

### Properties

- [\_parent](DTableDataTreeSelectionImpl.md#_parent)
- [\_rows](DTableDataTreeSelectionImpl.md#_rows)
- [\_type](DTableDataTreeSelectionImpl.md#_type)

### Accessors

- [first](DTableDataTreeSelectionImpl.md#first)
- [indices](DTableDataTreeSelectionImpl.md#indices)
- [last](DTableDataTreeSelectionImpl.md#last)
- [parent](DTableDataTreeSelectionImpl.md#parent)
- [rows](DTableDataTreeSelectionImpl.md#rows)
- [type](DTableDataTreeSelectionImpl.md#type)

### Methods

- [add](DTableDataTreeSelectionImpl.md#add)
- [addAll](DTableDataTreeSelectionImpl.md#addall)
- [addListener](DTableDataTreeSelectionImpl.md#addlistener)
- [addRange](DTableDataTreeSelectionImpl.md#addrange)
- [addTo](DTableDataTreeSelectionImpl.md#addto)
- [clear](DTableDataTreeSelectionImpl.md#clear)
- [clearAndAdd](DTableDataTreeSelectionImpl.md#clearandadd)
- [clearAndAddAll](DTableDataTreeSelectionImpl.md#clearandaddall)
- [contains](DTableDataTreeSelectionImpl.md#contains)
- [each](DTableDataTreeSelectionImpl.md#each)
- [emit](DTableDataTreeSelectionImpl.md#emit)
- [eventNames](DTableDataTreeSelectionImpl.md#eventnames)
- [getFirst](DTableDataTreeSelectionImpl.md#getfirst)
- [getLast](DTableDataTreeSelectionImpl.md#getlast)
- [isEmpty](DTableDataTreeSelectionImpl.md#isempty)
- [listenerCount](DTableDataTreeSelectionImpl.md#listenercount)
- [listeners](DTableDataTreeSelectionImpl.md#listeners)
- [newRows](DTableDataTreeSelectionImpl.md#newrows)
- [off](DTableDataTreeSelectionImpl.md#off)
- [on](DTableDataTreeSelectionImpl.md#on)
- [onChange](DTableDataTreeSelectionImpl.md#onchange)
- [onNodeChange](DTableDataTreeSelectionImpl.md#onnodechange)
- [once](DTableDataTreeSelectionImpl.md#once)
- [remove](DTableDataTreeSelectionImpl.md#remove)
- [removeAllListeners](DTableDataTreeSelectionImpl.md#removealllisteners)
- [removeListener](DTableDataTreeSelectionImpl.md#removelistener)
- [shift](DTableDataTreeSelectionImpl.md#shift)
- [size](DTableDataTreeSelectionImpl.md#size)
- [toArray](DTableDataTreeSelectionImpl.md#toarray)
- [toIndex](DTableDataTreeSelectionImpl.md#toindex)
- [toMap](DTableDataTreeSelectionImpl.md#tomap)
- [toObject](DTableDataTreeSelectionImpl.md#toobject)
- [toSortedArray](DTableDataTreeSelectionImpl.md#tosortedarray)
- [toggle](DTableDataTreeSelectionImpl.md#toggle)

## Constructors

### constructor

• **new DTableDataTreeSelectionImpl**\<`NODE`\>(`parent`, `options?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

#### Type parameters

| Name |
| :------ |
| `NODE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataTreeSelectionParent`](../interfaces/DTableDataTreeSelectionParent.md)\<`NODE`\> |
| `options?` | [`DTableDataSelectionOptions`](../interfaces/DTableDataSelectionOptions.md)\<`any`\> |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L35)

## Properties

### \_parent

• `Protected` **\_parent**: [`DTableDataTreeSelectionParent`](../interfaces/DTableDataTreeSelectionParent.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L31)

___

### \_rows

• `Protected` **\_rows**: `Set`\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L33)

___

### \_type

• `Protected` **\_type**: [`DTableDataSelectionType`](../index.md#dtabledataselectiontype-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L32)

## Accessors

### first

• `get` **first**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[first](../interfaces/DTableDataTreeSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L158)

___

### indices

• `get` **indices**(): `number`[]

Returns a copy of an index array of selected rows.
The order of indices is an insertion order.

#### Returns

`number`[]

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[indices](../interfaces/DTableDataTreeSelection.md#indices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L97)

___

### last

• `get` **last**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[last](../interfaces/DTableDataTreeSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L166)

___

### parent

• `get` **parent**(): [`DTableData`](../interfaces/DTableData.md)\<`NODE`\>

#### Returns

[`DTableData`](../interfaces/DTableData.md)\<`NODE`\>

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[parent](../interfaces/DTableDataTreeSelection.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L53)

___

### rows

• `get` **rows**(): `NODE`[]

Returns a copy of an array of selected row value.
The order is an insertion order.

#### Returns

`NODE`[]

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[rows](../interfaces/DTableDataTreeSelection.md#rows)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L108)

___

### type

• `get` **type**(): [`DTableDataSelectionType`](../index.md#dtabledataselectiontype-1)

#### Returns

[`DTableDataSelectionType`](../index.md#dtabledataselectiontype-1)

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[type](../interfaces/DTableDataTreeSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L116)

## Methods

### add

▸ **add**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[add](../interfaces/DTableDataTreeSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L192)

___

### addAll

▸ **addAll**(`rowIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndices` | `number`[] |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[addAll](../interfaces/DTableDataTreeSelection.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L237)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[addListener](../interfaces/DTableDataTreeSelection.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### addRange

▸ **addRange**(`from`, `includeFrom`, `to`, `includeTo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `includeFrom` | `boolean` |
| `to` | `number` |
| `includeTo` | `boolean` |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[addRange](../interfaces/DTableDataTreeSelection.md#addrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L210)

___

### addTo

▸ **addTo**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[addTo](../interfaces/DTableDataTreeSelection.md#addto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L203)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[clear](../interfaces/DTableDataTreeSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L270)

___

### clearAndAdd

▸ **clearAndAdd**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[clearAndAdd](../interfaces/DTableDataTreeSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L278)

___

### clearAndAddAll

▸ **clearAndAddAll**(`rowIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndices` | `number`[] |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[clearAndAddAll](../interfaces/DTableDataTreeSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L296)

___

### contains

▸ **contains**(`rowIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[contains](../interfaces/DTableDataTreeSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L251)

___

### each

▸ **each**(`iteratee`): `void`

Calls the specified iteratee on each indices.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTableDataSelectionEachIteratee`](../index.md#dtabledataselectioneachiteratee) | an function called on each indices |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[each](../interfaces/DTableDataTreeSelection.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L323)

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[emit](../interfaces/DTableDataTreeSelection.md#emit)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[eventNames](../interfaces/DTableDataTreeSelection.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### getFirst

▸ **getFirst**(): ``null`` \| `NODE`

#### Returns

``null`` \| `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L120)

___

### getLast

▸ **getLast**(): ``null`` \| `NODE`

#### Returns

``null`` \| `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L134)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[isEmpty](../interfaces/DTableDataTreeSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L319)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[listenerCount](../interfaces/DTableDataTreeSelection.md#listenercount)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[listeners](../interfaces/DTableDataTreeSelection.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newRows

▸ **newRows**(`nodes`, `toChildren`, `hasChildren`, `rows`, `result`): `Set`\<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NODE`[] |
| `toChildren` | [`DTableDataTreeItemAccessorToChildren`](../index.md#dtabledatatreeitemaccessortochildren)\<`NODE`\> |
| `hasChildren` | [`DTableDataTreeItemAccessorHasChildren`](../index.md#dtabledatatreeitemaccessorhaschildren)\<`NODE`\> |
| `rows` | `Set`\<`NODE`\> |
| `result` | `Set`\<`NODE`\> |

#### Returns

`Set`\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L77)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[off](../interfaces/DTableDataTreeSelection.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

`this`.

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[on](../interfaces/DTableDataTreeSelection.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L174)

___

### onNodeChange

▸ **onNodeChange**(`nodes?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes?` | `NODE`[] |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[onNodeChange](../interfaces/DTableDataTreeSelection.md#onnodechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L57)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

`this`.

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[once](../interfaces/DTableDataTreeSelection.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### remove

▸ **remove**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[remove](../interfaces/DTableDataTreeSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L259)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

`this`.

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[removeAllListeners](../interfaces/DTableDataTreeSelection.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)\<`NODE`\>

`this`.

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[removeListener](../interfaces/DTableDataTreeSelection.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### shift

▸ **shift**(`rowIndex`, `amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `amount` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[shift](../interfaces/DTableDataTreeSelection.md#shift)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L311)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[size](../interfaces/DTableDataTreeSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L315)

___

### toArray

▸ **toArray**(): [`number`, `NODE`][]

Returns an array of the (index, row value) pairs of selected rows.
The order of pairs is an insertion order.

#### Returns

[`number`, `NODE`][]

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toArray](../interfaces/DTableDataTreeSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L335)

___

### toIndex

▸ **toIndex**(`target`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L146)

___

### toMap

▸ **toMap**(): `Map`\<`number`, `NODE`\>

#### Returns

`Map`\<`number`, `NODE`\>

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toMap](../interfaces/DTableDataTreeSelection.md#tomap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L361)

___

### toObject

▸ **toObject**(): `Record`\<`number`, `NODE`\>

#### Returns

`Record`\<`number`, `NODE`\>

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toObject](../interfaces/DTableDataTreeSelection.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L350)

___

### toSortedArray

▸ **toSortedArray**(): [`number`, `NODE`][]

Returns an sorted array of the (index, row value) pairs of selected rows.

#### Returns

[`number`, `NODE`][]

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toSortedArray](../interfaces/DTableDataTreeSelection.md#tosortedarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L346)

___

### toggle

▸ **toggle**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toggle](../interfaces/DTableDataTreeSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L179)
