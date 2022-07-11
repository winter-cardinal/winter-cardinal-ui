[Winter Cardinal UI - v0.200.0](../index.md) / DTableDataTreeFilter

# Class: DTableDataTreeFilter<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTableDataTreeNode`](../interfaces/DTableDataTreeNode.md)<`NODE`, `NODE`\> |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataTreeFilter`**

## Implements

- [`DTableDataFilter`](../interfaces/DTableDataFilter.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTableDataTreeFilter.md#constructor)

### Properties

- [\_filter](DTableDataTreeFilter.md#_filter)
- [\_filtered](DTableDataTreeFilter.md#_filtered)
- [\_id](DTableDataTreeFilter.md#_id)
- [\_idUpdated](DTableDataTreeFilter.md#_idupdated)
- [\_isApplied](DTableDataTreeFilter.md#_isapplied)
- [\_parent](DTableDataTreeFilter.md#_parent)

### Accessors

- [id](DTableDataTreeFilter.md#id)
- [indices](DTableDataTreeFilter.md#indices)

### Methods

- [addAllToFiltered](DTableDataTreeFilter.md#addalltofiltered)
- [addListener](DTableDataTreeFilter.md#addlistener)
- [apply](DTableDataTreeFilter.md#apply)
- [emit](DTableDataTreeFilter.md#emit)
- [eventNames](DTableDataTreeFilter.md#eventnames)
- [get](DTableDataTreeFilter.md#get)
- [hasFiltered](DTableDataTreeFilter.md#hasfiltered)
- [isApplied](DTableDataTreeFilter.md#isapplied)
- [isFiltered](DTableDataTreeFilter.md#isfiltered)
- [listenerCount](DTableDataTreeFilter.md#listenercount)
- [listeners](DTableDataTreeFilter.md#listeners)
- [map](DTableDataTreeFilter.md#map)
- [newFiltered](DTableDataTreeFilter.md#newfiltered)
- [newFilteredSub](DTableDataTreeFilter.md#newfilteredsub)
- [off](DTableDataTreeFilter.md#off)
- [on](DTableDataTreeFilter.md#on)
- [once](DTableDataTreeFilter.md#once)
- [removeAllListeners](DTableDataTreeFilter.md#removealllisteners)
- [removeListener](DTableDataTreeFilter.md#removelistener)
- [set](DTableDataTreeFilter.md#set)
- [toDirty](DTableDataTreeFilter.md#todirty)
- [unapply](DTableDataTreeFilter.md#unapply)
- [unmap](DTableDataTreeFilter.md#unmap)
- [update](DTableDataTreeFilter.md#update)

## Constructors

### constructor

• **new DTableDataTreeFilter**<`NODE`\>(`parent`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTableDataTreeNode`](../interfaces/DTableDataTreeNode.md)<`NODE`, `NODE`, `NODE`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataTreeFilterParent`](../interfaces/DTableDataTreeFilterParent.md)<`NODE`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L30)

## Properties

### \_filter

• `Protected` **\_filter**: ``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L27)

___

### \_filtered

• `Protected` **\_filtered**: ``null`` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L28)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L23)

___

### \_idUpdated

• `Protected` **\_idUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L24)

___

### \_isApplied

• `Protected` **\_isApplied**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L25)

___

### \_parent

• `Protected` **\_parent**: [`DTableDataTreeFilterParent`](../interfaces/DTableDataTreeFilterParent.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L26)

## Accessors

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[id](../interfaces/DTableDataFilter.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L42)

___

### indices

• `get` **indices**(): ``null`` \| `number`[]

An indices of filtered rows.
Must not change this indices directly.

#### Returns

``null`` \| `number`[]

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[indices](../interfaces/DTableDataFilter.md#indices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L195)

## Methods

### addAllToFiltered

▸ `Protected` **addAllToFiltered**(`parent`, `nodes`, `filtered`, `cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataTreeFilterParent`](../interfaces/DTableDataTreeFilterParent.md)<`NODE`\> |
| `nodes` | `NODE`[] |
| `filtered` | `number`[] |
| `cursor` | [`number`] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L95)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[addListener](../interfaces/DTableDataFilter.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### apply

▸ **apply**(): `void`

Applys a filter.

#### Returns

`void`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[apply](../interfaces/DTableDataFilter.md#apply)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L46)

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

[DTableDataFilter](../interfaces/DTableDataFilter.md).[emit](../interfaces/DTableDataFilter.md#emit)

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

[DTableDataFilter](../interfaces/DTableDataFilter.md).[eventNames](../interfaces/DTableDataFilter.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### get

▸ **get**(): ``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`NODE`\>

Returns a current filter.

#### Returns

``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`NODE`\>

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[get](../interfaces/DTableDataFilter.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L168)

___

### hasFiltered

▸ `Protected` **hasFiltered**(`parent`, `nodes`, `filter`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataTreeFilterParent`](../interfaces/DTableDataTreeFilterParent.md)<`NODE`\> |
| `nodes` | `NODE`[] |
| `filter` | [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`NODE`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L72)

___

### isApplied

▸ **isApplied**(): `boolean`

Returns true if a filter is applied.

#### Returns

`boolean`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[isApplied](../interfaces/DTableDataFilter.md#isapplied)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L60)

___

### isFiltered

▸ `Protected` **isFiltered**(`node`, `index`, `filter`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |
| `index` | `number` |
| `filter` | [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`NODE`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L64)

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

[DTableDataFilter](../interfaces/DTableDataFilter.md).[listenerCount](../interfaces/DTableDataFilter.md#listenercount)

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

[DTableDataFilter](../interfaces/DTableDataFilter.md).[listeners](../interfaces/DTableDataFilter.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### map

▸ **map**(`sortedIndex`): ``null`` \| `number`

Returns a mapped index of the specified sorted index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortedIndex` | `number` |

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[map](../interfaces/DTableDataFilter.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L200)

___

### newFiltered

▸ `Protected` **newFiltered**(): ``null`` \| `number`[]

#### Returns

``null`` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L153)

___

### newFilteredSub

▸ `Protected` **newFilteredSub**(`parent`, `nodes`, `filter`, `filtered`, `cursor`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataTreeFilterParent`](../interfaces/DTableDataTreeFilterParent.md)<`NODE`\> |
| `nodes` | `NODE`[] |
| `filter` | [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`NODE`\> |
| `filtered` | `number`[] |
| `cursor` | [`number`] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L113)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[off](../interfaces/DTableDataFilter.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[on](../interfaces/DTableDataFilter.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[once](../interfaces/DTableDataFilter.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[removeAllListeners](../interfaces/DTableDataFilter.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataTreeFilter`](DTableDataTreeFilter.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[removeListener](../interfaces/DTableDataFilter.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### set

▸ **set**(`filter`): `void`

Sets to the given filter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | ``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`NODE`\> |

#### Returns

`void`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[set](../interfaces/DTableDataFilter.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L172)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L178)

___

### unapply

▸ **unapply**(): `void`

Unapplys a filter.

#### Returns

`void`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[unapply](../interfaces/DTableDataFilter.md#unapply)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L52)

___

### unmap

▸ **unmap**(`index`): `number`

Returns an sorted index of the specified mapped index.
A mapped index is an index on rows filters and sorters are applied.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[unmap](../interfaces/DTableDataFilter.md#unmap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L216)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-table-data-tree-filter.ts#L182)
