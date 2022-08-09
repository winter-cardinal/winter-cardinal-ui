[Winter Cardinal UI - v0.205.1](../index.md) / DTableDataListFilter

# Class: DTableDataListFilter<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataListFilter`**

## Implements

- [`DTableDataFilter`](../interfaces/DTableDataFilter.md)<`ROW`\>

## Table of contents

### Constructors

- [constructor](DTableDataListFilter.md#constructor)

### Properties

- [\_filter](DTableDataListFilter.md#_filter)
- [\_filtered](DTableDataListFilter.md#_filtered)
- [\_id](DTableDataListFilter.md#_id)
- [\_idUpdated](DTableDataListFilter.md#_idupdated)
- [\_isApplied](DTableDataListFilter.md#_isapplied)
- [\_parent](DTableDataListFilter.md#_parent)
- [\_sorterId](DTableDataListFilter.md#_sorterid)

### Accessors

- [id](DTableDataListFilter.md#id)
- [indices](DTableDataListFilter.md#indices)

### Methods

- [addListener](DTableDataListFilter.md#addlistener)
- [apply](DTableDataListFilter.md#apply)
- [emit](DTableDataListFilter.md#emit)
- [eventNames](DTableDataListFilter.md#eventnames)
- [get](DTableDataListFilter.md#get)
- [isApplied](DTableDataListFilter.md#isapplied)
- [listenerCount](DTableDataListFilter.md#listenercount)
- [listeners](DTableDataListFilter.md#listeners)
- [map](DTableDataListFilter.md#map)
- [newFiltered](DTableDataListFilter.md#newfiltered)
- [off](DTableDataListFilter.md#off)
- [on](DTableDataListFilter.md#on)
- [once](DTableDataListFilter.md#once)
- [removeAllListeners](DTableDataListFilter.md#removealllisteners)
- [removeListener](DTableDataListFilter.md#removelistener)
- [set](DTableDataListFilter.md#set)
- [toDirty](DTableDataListFilter.md#todirty)
- [unapply](DTableDataListFilter.md#unapply)
- [unmap](DTableDataListFilter.md#unmap)
- [update](DTableDataListFilter.md#update)

## Constructors

### constructor

• **new DTableDataListFilter**<`ROW`\>(`parent`)

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataListFilterParent`](../interfaces/DTableDataListFilterParent.md)<`ROW`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L26)

## Properties

### \_filter

• `Protected` **\_filter**: ``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L23)

___

### \_filtered

• `Protected` **\_filtered**: ``null`` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L24)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L18)

___

### \_idUpdated

• `Protected` **\_idUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L19)

___

### \_isApplied

• `Protected` **\_isApplied**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L20)

___

### \_parent

• `Protected` **\_parent**: [`DTableDataListFilterParent`](../interfaces/DTableDataListFilterParent.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L22)

___

### \_sorterId

• `Protected` **\_sorterId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L21)

## Accessors

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[id](../interfaces/DTableDataFilter.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L39)

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

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L135)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

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

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L43)

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

▸ **get**(): ``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\>

Returns a current filter.

#### Returns

``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\>

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[get](../interfaces/DTableDataFilter.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L107)

___

### isApplied

▸ **isApplied**(): `boolean`

Returns true if a filter is applied.

#### Returns

`boolean`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[isApplied](../interfaces/DTableDataFilter.md#isapplied)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L57)

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

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L140)

___

### newFiltered

▸ `Protected` **newFiltered**(): ``null`` \| `number`[]

#### Returns

``null`` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L61)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[off](../interfaces/DTableDataFilter.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[on](../interfaces/DTableDataFilter.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[once](../interfaces/DTableDataFilter.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[removeAllListeners](../interfaces/DTableDataFilter.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

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
| `filter` | ``null`` \| [`DTableDataFilterer`](../index.md#dtabledatafilterer)<`ROW`\> |

#### Returns

`void`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[set](../interfaces/DTableDataFilter.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L111)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L117)

___

### unapply

▸ **unapply**(): `void`

Unapplys a filter.

#### Returns

`void`

#### Implementation of

[DTableDataFilter](../interfaces/DTableDataFilter.md).[unapply](../interfaces/DTableDataFilter.md#unapply)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L49)

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

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L156)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-filter.ts#L121)
