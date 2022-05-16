[Winter Cardinal UI - v0.167.0](../index.md) / DTableDataList

# Class: DTableDataList<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataList`**

## Implements

- [`DTableData`](../interfaces/DTableData.md)<`ROW`\>

## Table of contents

### Constructors

- [constructor](DTableDataList.md#constructor)

### Properties

- [\_filter](DTableDataList.md#_filter)
- [\_mapped](DTableDataList.md#_mapped)
- [\_parent](DTableDataList.md#_parent)
- [\_rows](DTableDataList.md#_rows)
- [\_selection](DTableDataList.md#_selection)
- [\_sorter](DTableDataList.md#_sorter)

### Accessors

- [filter](DTableDataList.md#filter)
- [mapped](DTableDataList.md#mapped)
- [rows](DTableDataList.md#rows)
- [selection](DTableDataList.md#selection)
- [sorter](DTableDataList.md#sorter)

### Methods

- [add](DTableDataList.md#add)
- [addAll](DTableDataList.md#addall)
- [addListener](DTableDataList.md#addlistener)
- [bind](DTableDataList.md#bind)
- [clear](DTableDataList.md#clear)
- [clearAndAdd](DTableDataList.md#clearandadd)
- [clearAndAddAll](DTableDataList.md#clearandaddall)
- [each](DTableDataList.md#each)
- [emit](DTableDataList.md#emit)
- [eventNames](DTableDataList.md#eventnames)
- [get](DTableDataList.md#get)
- [listenerCount](DTableDataList.md#listenercount)
- [listeners](DTableDataList.md#listeners)
- [lock](DTableDataList.md#lock)
- [newSelection](DTableDataList.md#newselection)
- [off](DTableDataList.md#off)
- [on](DTableDataList.md#on)
- [once](DTableDataList.md#once)
- [remove](DTableDataList.md#remove)
- [removeAllListeners](DTableDataList.md#removealllisteners)
- [removeListener](DTableDataList.md#removelistener)
- [set](DTableDataList.md#set)
- [size](DTableDataList.md#size)
- [toRows](DTableDataList.md#torows)
- [toSelection](DTableDataList.md#toselection)
- [unlock](DTableDataList.md#unlock)
- [update](DTableDataList.md#update)

## Constructors

### constructor

• **new DTableDataList**<`ROW`\>(`options?`)

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTableDataListOptions`](../interfaces/DTableDataListOptions.md)<`ROW`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L28)

## Properties

### \_filter

• `Protected` **\_filter**: [`DTableDataListFilter`](DTableDataListFilter.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L23)

___

### \_mapped

• `Protected` **\_mapped**: [`DTableDataMapped`](../interfaces/DTableDataMapped.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L26)

___

### \_parent

• `Protected` **\_parent**: ``null`` \| [`DTableDataParent`](../interfaces/DTableDataParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L21)

___

### \_rows

• `Protected` **\_rows**: `ROW`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L22)

___

### \_selection

• `Protected` **\_selection**: [`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L25)

___

### \_sorter

• `Protected` **\_sorter**: [`DTableDataListSorter`](DTableDataListSorter.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L24)

## Accessors

### filter

• `get` **filter**(): [`DTableDataFilter`](../interfaces/DTableDataFilter.md)<`ROW`\>

A data filter.

#### Returns

[`DTableDataFilter`](../interfaces/DTableDataFilter.md)<`ROW`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[filter](../interfaces/DTableData.md#filter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L266)

___

### mapped

• `get` **mapped**(): [`DTableDataMapped`](../interfaces/DTableDataMapped.md)<`ROW`\>

Sorted and filtered data.

#### Returns

[`DTableDataMapped`](../interfaces/DTableDataMapped.md)<`ROW`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[mapped](../interfaces/DTableData.md#mapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L274)

___

### rows

• `get` **rows**(): `ROW`[]

#### Returns

`ROW`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L95)

___

### selection

• `get` **selection**(): [`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\>

A data selection.

#### Returns

[`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[selection](../interfaces/DTableData.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L262)

___

### sorter

• `get` **sorter**(): [`DTableDataSorter`](../interfaces/DTableDataSorter.md)<`ROW`\>

A data sorter.

#### Returns

[`DTableDataSorter`](../interfaces/DTableDataSorter.md)<`ROW`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[sorter](../interfaces/DTableData.md#sorter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L270)

## Methods

### add

▸ **add**(`row`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `ROW` |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L161)

___

### addAll

▸ **addAll**(`newRows`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newRows` | `ROW`[] |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L182)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataList`](DTableDataList.md)<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataList`](DTableDataList.md)<`ROW`\>

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

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L81)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L125)

___

### clearAndAdd

▸ **clearAndAdd**(`row`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `ROW` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L137)

___

### clearAndAddAll

▸ **clearAndAddAll**(`newRows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newRows` | `ROW`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L148)

___

### each

▸ **each**(`iteratee`, `ifrom?`, `ito?`): `void`

Calls the specified iteratee on each datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`row`: `ROW`, `index`: `number`) => `boolean` \| `void` |
| `ifrom?` | `number` |
| `ito?` | `number` |

#### Returns

`void`

#### Implementation of

[DTableData](../interfaces/DTableData.md).[each](../interfaces/DTableData.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L246)

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

### get

▸ **get**(`index`): ``null`` \| `ROW`

Returns a row data at the specified index.
The index is an index on rows filters and sorters are not applied.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `ROW`

#### Implementation of

[DTableData](../interfaces/DTableData.md).[get](../interfaces/DTableData.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L210)

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

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L106)

___

### newSelection

▸ `Protected` **newSelection**(`options?`): [`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTableDataSelectionOptions`](../interfaces/DTableDataSelectionOptions.md) |

#### Returns

[`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L77)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataList`](DTableDataList.md)<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataList`](DTableDataList.md)<`ROW`\>

#### Implementation of

[DTableData](../interfaces/DTableData.md).[off](../interfaces/DTableData.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataList`](DTableDataList.md)<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataList`](DTableDataList.md)<`ROW`\>

`this`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[on](../interfaces/DTableData.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataList`](DTableDataList.md)<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataList`](DTableDataList.md)<`ROW`\>

`this`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[once](../interfaces/DTableData.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### remove

▸ **remove**(`index`): ``null`` \| `ROW`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L232)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataList`](DTableDataList.md)<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataList`](DTableDataList.md)<`ROW`\>

`this`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[removeAllListeners](../interfaces/DTableData.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataList`](DTableDataList.md)<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataList`](DTableDataList.md)<`ROW`\>

`this`.

#### Implementation of

[DTableData](../interfaces/DTableData.md).[removeListener](../interfaces/DTableData.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### set

▸ **set**(`index`, `row`): ``null`` \| `ROW`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `row` | `ROW` |

#### Returns

``null`` \| `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L218)

___

### size

▸ **size**(): `number`

Returns a size of rows.

#### Returns

`number`

#### Implementation of

[DTableData](../interfaces/DTableData.md).[size](../interfaces/DTableData.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L121)

___

### toRows

▸ `Protected` **toRows**(`row?`): `ROW`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `row?` | `ROW`[] |

#### Returns

`ROW`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L85)

___

### toSelection

▸ `Protected` **toSelection**(`options?`): [`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTableDataSelectionOptions`](../interfaces/DTableDataSelectionOptions.md) \| [`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\> \| [`DTableDataSelectionCreator`](../index.md#dtabledataselectioncreator)<`ROW`\> |

#### Returns

[`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L63)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L113)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-list.ts#L99)
