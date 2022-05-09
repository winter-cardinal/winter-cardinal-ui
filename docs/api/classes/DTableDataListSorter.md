[Winter Cardinal UI - v0.164.0](../index.md) / DTableDataListSorter

# Class: DTableDataListSorter<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataListSorter`**

## Implements

- [`DTableDataSorter`](../interfaces/DTableDataSorter.md)<`ROW`\>

## Table of contents

### Constructors

- [constructor](DTableDataListSorter.md#constructor)

### Properties

- [\_comparator](DTableDataListSorter.md#_comparator)
- [\_id](DTableDataListSorter.md#_id)
- [\_idUpdated](DTableDataListSorter.md#_idupdated)
- [\_isApplied](DTableDataListSorter.md#_isapplied)
- [\_order](DTableDataListSorter.md#_order)
- [\_parent](DTableDataListSorter.md#_parent)
- [\_sorted](DTableDataListSorter.md#_sorted)

### Accessors

- [id](DTableDataListSorter.md#id)
- [indices](DTableDataListSorter.md#indices)
- [order](DTableDataListSorter.md#order)

### Methods

- [addListener](DTableDataListSorter.md#addlistener)
- [apply](DTableDataListSorter.md#apply)
- [emit](DTableDataListSorter.md#emit)
- [eventNames](DTableDataListSorter.md#eventnames)
- [get](DTableDataListSorter.md#get)
- [isApplied](DTableDataListSorter.md#isapplied)
- [listenerCount](DTableDataListSorter.md#listenercount)
- [listeners](DTableDataListSorter.md#listeners)
- [map](DTableDataListSorter.md#map)
- [newSorted](DTableDataListSorter.md#newsorted)
- [off](DTableDataListSorter.md#off)
- [on](DTableDataListSorter.md#on)
- [once](DTableDataListSorter.md#once)
- [removeAllListeners](DTableDataListSorter.md#removealllisteners)
- [removeListener](DTableDataListSorter.md#removelistener)
- [set](DTableDataListSorter.md#set)
- [toComparator](DTableDataListSorter.md#tocomparator)
- [toDirty](DTableDataListSorter.md#todirty)
- [unapply](DTableDataListSorter.md#unapply)
- [unmap](DTableDataListSorter.md#unmap)
- [update](DTableDataListSorter.md#update)

## Constructors

### constructor

• **new DTableDataListSorter**<`ROW`\>(`parent`)

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataListSorterParent`](../interfaces/DTableDataListSorterParent.md)<`ROW`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L24)

## Properties

### \_comparator

• `Protected` **\_comparator**: ``null`` \| [`DTableDataComparator`](../index.md#dtabledatacomparator)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L20)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L16)

___

### \_idUpdated

• `Protected` **\_idUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L17)

___

### \_isApplied

• `Protected` **\_isApplied**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L18)

___

### \_order

• `Protected` **\_order**: [`DTableDataOrder`](../index.md#dtabledataorder)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L22)

___

### \_parent

• `Protected` **\_parent**: [`DTableDataListSorterParent`](../interfaces/DTableDataListSorterParent.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L19)

___

### \_sorted

• `Protected` **\_sorted**: ``null`` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L21)

## Accessors

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[id](../interfaces/DTableDataSorter.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L36)

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

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L137)

___

### order

• `get` **order**(): [`DTableDataOrder`](../index.md#dtabledataorder)

A sort order.

#### Returns

[`DTableDataOrder`](../index.md#dtabledataorder)

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[order](../interfaces/DTableDataSorter.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L40)

• `set` **order**(`order`): `void`

A sort order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | [`DTableDataOrder`](../index.md#dtabledataorder) |

#### Returns

`void`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[order](../interfaces/DTableDataSorter.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L44)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

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

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L48)

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

▸ **get**(): ``null`` \| [`DTableDataComparator`](../index.md#dtabledatacomparator)<`ROW`\>

Returns a current comparator.

#### Returns

``null`` \| [`DTableDataComparator`](../index.md#dtabledatacomparator)<`ROW`\>

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[get](../interfaces/DTableDataSorter.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L110)

___

### isApplied

▸ **isApplied**(): `boolean`

Returns true if a sorting is applied.

#### Returns

`boolean`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[isApplied](../interfaces/DTableDataSorter.md#isapplied)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L62)

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

| Name | Type |
| :------ | :------ |
| `unmappedIndex` | `number` |

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[map](../interfaces/DTableDataSorter.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L142)

___

### newSorted

▸ `Protected` **newSorted**(): ``null`` \| `number`[]

#### Returns

``null`` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L66)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[off](../interfaces/DTableDataSorter.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[on](../interfaces/DTableDataSorter.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[once](../interfaces/DTableDataSorter.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[removeAllListeners](../interfaces/DTableDataSorter.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

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

| Name | Type |
| :------ | :------ |
| `comparator` | ``null`` \| [`DTableDataComparator`](../index.md#dtabledatacomparator)<`ROW`\> |

#### Returns

`void`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[set](../interfaces/DTableDataSorter.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L114)

___

### toComparator

▸ `Protected` **toComparator**(`rows`, `comparator`): (`indexA`: `number`, `indexB`: `number`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `ROW`[] |
| `comparator` | [`DTableDataComparator`](../index.md#dtabledatacomparator)<`ROW`\> |

#### Returns

`fn`

▸ (`indexA`, `indexB`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `indexA` | `number` |
| `indexB` | `number` |

##### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L82)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L120)

___

### unapply

▸ **unapply**(): `void`

Unapplys a sorting.

#### Returns

`void`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[unapply](../interfaces/DTableDataSorter.md#unapply)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L54)

___

### unmap

▸ **unmap**(`index`): `number`

Returns an unmapped index of the specified sorted index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Implementation of

[DTableDataSorter](../interfaces/DTableDataSorter.md).[unmap](../interfaces/DTableDataSorter.md#unmap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L158)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-list-sorter.ts#L124)
