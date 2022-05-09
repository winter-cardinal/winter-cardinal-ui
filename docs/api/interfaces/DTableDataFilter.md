[Winter Cardinal UI - v0.164.0](../index.md) / DTableDataFilter

# Interface: DTableDataFilter<ROW\>

Table data filter.

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataFilter`**

## Implemented by

- [`DTableDataListFilter`](../classes/DTableDataListFilter.md)
- [`DTableDataTreeFilter`](../classes/DTableDataTreeFilter.md)

## Table of contents

### Properties

- [id](DTableDataFilter.md#id)
- [indices](DTableDataFilter.md#indices)

### Methods

- [addListener](DTableDataFilter.md#addlistener)
- [apply](DTableDataFilter.md#apply)
- [emit](DTableDataFilter.md#emit)
- [eventNames](DTableDataFilter.md#eventnames)
- [get](DTableDataFilter.md#get)
- [isApplied](DTableDataFilter.md#isapplied)
- [listenerCount](DTableDataFilter.md#listenercount)
- [listeners](DTableDataFilter.md#listeners)
- [map](DTableDataFilter.md#map)
- [off](DTableDataFilter.md#off)
- [on](DTableDataFilter.md#on)
- [once](DTableDataFilter.md#once)
- [removeAllListeners](DTableDataFilter.md#removealllisteners)
- [removeListener](DTableDataFilter.md#removelistener)
- [set](DTableDataFilter.md#set)
- [unapply](DTableDataFilter.md#unapply)
- [unmap](DTableDataFilter.md#unmap)

## Properties

### id

• `Readonly` **id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L29)

___

### indices

• `Readonly` **indices**: ``null`` \| `number`[]

An indices of filtered rows.
Must not change this indices directly.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L35)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L40)

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

▸ **get**(): ``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\>

Returns a current filter.

#### Returns

``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L55)

___

### isApplied

▸ **isApplied**(): `boolean`

Returns true if a filter is applied.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L50)

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

▸ **map**(`sortedIndex`): ``null`` \| `number`

Returns a mapped index of the specified sorted index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sortedIndex` | `number` | an sorted index |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L69)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### set

▸ **set**(`filter`): `void`

Sets to the given filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | ``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\> | A filter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L62)

___

### unapply

▸ **unapply**(): `void`

Unapplys a filter.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L45)

___

### unmap

▸ **unmap**(`index`): `number`

Returns an sorted index of the specified mapped index.
A mapped index is an index on rows filters and sorters are applied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | a mapped index |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-filter.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-table-data-filter.ts#L77)
