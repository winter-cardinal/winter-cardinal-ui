[Winter Cardinal UI - v0.310.1](../index.md) / DTableDataTreeSorter

# Class: DTableDataTreeSorter<NODE\>

Table data sorter.

## Type parameters

| Name |
| :------ |
| `NODE` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataTreeSorter`**

## Implements

- [`DTableDataSorter`](../interfaces/DTableDataSorter.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTableDataTreeSorter.md#constructor)

### Accessors

- [id](DTableDataTreeSorter.md#id)
- [indices](DTableDataTreeSorter.md#indices)
- [order](DTableDataTreeSorter.md#order)

### Methods

- [addListener](DTableDataTreeSorter.md#addlistener)
- [apply](DTableDataTreeSorter.md#apply)
- [emit](DTableDataTreeSorter.md#emit)
- [eventNames](DTableDataTreeSorter.md#eventnames)
- [get](DTableDataTreeSorter.md#get)
- [isApplied](DTableDataTreeSorter.md#isapplied)
- [listenerCount](DTableDataTreeSorter.md#listenercount)
- [listeners](DTableDataTreeSorter.md#listeners)
- [map](DTableDataTreeSorter.md#map)
- [off](DTableDataTreeSorter.md#off)
- [on](DTableDataTreeSorter.md#on)
- [once](DTableDataTreeSorter.md#once)
- [removeAllListeners](DTableDataTreeSorter.md#removealllisteners)
- [removeListener](DTableDataTreeSorter.md#removelistener)
- [set](DTableDataTreeSorter.md#set)
- [toDirty](DTableDataTreeSorter.md#todirty)
- [unapply](DTableDataTreeSorter.md#unapply)
- [unmap](DTableDataTreeSorter.md#unmap)
- [update](DTableDataTreeSorter.md#update)

## Constructors

### constructor

• **new DTableDataTreeSorter**<`NODE`\>()

#### Type parameters

| Name |
| :------ |
| `NODE` |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L13)

## Accessors

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[id](../interfaces/DTableDataSorter.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L17)

___

### indices

• `get` **indices**(): ``null`` \| `number`[]

An indices of sorted rows.
Must not change this indices directly.

#### Returns

``null`` \| `number`[]

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[indices](../interfaces/DTableDataSorter.md#indices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L57)

___

### order

• `get` **order**(): [`DTableDataOrder`](../index.md#dtabledataorder-1)

A sort order.

#### Returns

[`DTableDataOrder`](../index.md#dtabledataorder-1)

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[order](../interfaces/DTableDataSorter.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L21)

• `set` **order**(`order`): `void`

A sort order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | [`DTableDataOrder`](../index.md#dtabledataorder-1) |

#### Returns

`void`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[order](../interfaces/DTableDataSorter.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L25)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[addListener](../interfaces/DTableDataSorter.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### apply

▸ **apply**(): `void`

Applys a sorting.

#### Returns

`void`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[apply](../interfaces/DTableDataSorter.md#apply)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L29)

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

[DTableDataSorter](../interfaces/DTableDataSorter.md).[emit](../interfaces/DTableDataSorter.md#emit)

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

[DTableDataSorter](../interfaces/DTableDataSorter.md).[eventNames](../interfaces/DTableDataSorter.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### get

▸ **get**(): ``null`` \| [`DTableDataComparator`](../index.md#dtabledatacomparator)<`NODE`\>

Returns a current comparator.

#### Returns

``null`` \| [`DTableDataComparator`](../index.md#dtabledatacomparator)<`NODE`\>

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[get](../interfaces/DTableDataSorter.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L41)

___

### isApplied

▸ **isApplied**(): `boolean`

Returns true if a sorting is applied.

#### Returns

`boolean`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[isApplied](../interfaces/DTableDataSorter.md#isapplied)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L37)

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

[DTableDataSorter](../interfaces/DTableDataSorter.md).[listenerCount](../interfaces/DTableDataSorter.md#listenercount)

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

[DTableDataSorter](../interfaces/DTableDataSorter.md).[listeners](../interfaces/DTableDataSorter.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### map

▸ **map**(`unmappedIndex`): ``null`` \| `number`

Returns a sorted index of the specified unmapped index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unmappedIndex` | `number` | an unmapped index |

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[map](../interfaces/DTableDataSorter.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L61)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[off](../interfaces/DTableDataSorter.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[on](../interfaces/DTableDataSorter.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[once](../interfaces/DTableDataSorter.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[removeAllListeners](../interfaces/DTableDataSorter.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataTreeSorter`](DTableDataTreeSorter.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[removeListener](../interfaces/DTableDataSorter.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### set

▸ **set**(`comparator`): `void`

Sets to the given comparator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comparator` | ``null`` \| [`DTableDataComparator`](../index.md#dtabledatacomparator)<`NODE`\> | A comparator |

#### Returns

`void`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[set](../interfaces/DTableDataSorter.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L45)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L49)

___

### unapply

▸ **unapply**(): `void`

Unapplys a sorting.

#### Returns

`void`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[unapply](../interfaces/DTableDataSorter.md#unapply)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L33)

___

### unmap

▸ **unmap**(`index`): `number`

Returns an unmapped index of the specified sorted index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | a mapped index |

#### Returns

`number`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[unmap](../interfaces/DTableDataSorter.md#unmap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L65)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-data-tree-sorter.ts#L53)
