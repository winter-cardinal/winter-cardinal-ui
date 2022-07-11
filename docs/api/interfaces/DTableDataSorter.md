[Winter Cardinal UI - v0.199.0](../index.md) / DTableDataSorter

# Interface: DTableDataSorter<ROW\>

Table data sorter.

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataSorter`**

## Implemented by

- [`DTableDataListSorter`](../classes/DTableDataListSorter.md)
- [`DTableDataTreeSorter`](../classes/DTableDataTreeSorter.md)

## Table of contents

### Properties

- [id](DTableDataSorter.md#id)
- [indices](DTableDataSorter.md#indices)
- [order](DTableDataSorter.md#order)

### Methods

- [addListener](DTableDataSorter.md#addlistener)
- [apply](DTableDataSorter.md#apply)
- [emit](DTableDataSorter.md#emit)
- [eventNames](DTableDataSorter.md#eventnames)
- [get](DTableDataSorter.md#get)
- [isApplied](DTableDataSorter.md#isapplied)
- [listenerCount](DTableDataSorter.md#listenercount)
- [listeners](DTableDataSorter.md#listeners)
- [map](DTableDataSorter.md#map)
- [off](DTableDataSorter.md#off)
- [on](DTableDataSorter.md#on)
- [once](DTableDataSorter.md#once)
- [removeAllListeners](DTableDataSorter.md#removealllisteners)
- [removeListener](DTableDataSorter.md#removelistener)
- [set](DTableDataSorter.md#set)
- [unapply](DTableDataSorter.md#unapply)
- [unmap](DTableDataSorter.md#unmap)

## Properties

### id

• `Readonly` **id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L46)

___

### indices

• `Readonly` **indices**: ``null`` \| `number`[]

An indices of sorted rows.
Must not change this indices directly.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L52)

___

### order

• **order**: [`DTableDataOrder`](../index.md#dtabledataorder)

A sort order.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L57)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L62)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L77)

___

### isApplied

▸ **isApplied**(): `boolean`

Returns true if a sorting is applied.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L72)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L91)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

`this`.

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
| `comparator` | ``null`` \| [`DTableDataComparator`](../index.md#dtabledatacomparator)<`ROW`\> | A comparator |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L84)

___

### unapply

▸ **unapply**(): `void`

Unapplys a sorting.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L67)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-sorter.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-table-data-sorter.ts#L98)
