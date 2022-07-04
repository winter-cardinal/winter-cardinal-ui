[Winter Cardinal UI - v0.194.0](../index.md) / DTableData

# Interface: DTableData<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableData`**

  ↳↳ [`DTableDataListMappedParent`](DTableDataListMappedParent.md)

  ↳↳ [`DTableDataSelectionParent`](DTableDataSelectionParent.md)

## Implemented by

- [`DTableDataList`](../classes/DTableDataList.md)
- [`DTableDataTree`](../classes/DTableDataTree.md)

## Table of contents

### Properties

- [filter](DTableData.md#filter)
- [mapped](DTableData.md#mapped)
- [selection](DTableData.md#selection)
- [sorter](DTableData.md#sorter)

### Methods

- [addListener](DTableData.md#addlistener)
- [bind](DTableData.md#bind)
- [each](DTableData.md#each)
- [emit](DTableData.md#emit)
- [eventNames](DTableData.md#eventnames)
- [get](DTableData.md#get)
- [listenerCount](DTableData.md#listenercount)
- [listeners](DTableData.md#listeners)
- [off](DTableData.md#off)
- [on](DTableData.md#on)
- [once](DTableData.md#once)
- [removeAllListeners](DTableData.md#removealllisteners)
- [removeListener](DTableData.md#removelistener)
- [size](DTableData.md#size)

## Properties

### filter

• `Readonly` **filter**: [`DTableDataFilter`](DTableDataFilter.md)<`ROW`\>

A data filter.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L101)

___

### mapped

• `Readonly` **mapped**: [`DTableDataMapped`](DTableDataMapped.md)<`ROW`\>

Sorted and filtered data.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L111)

___

### selection

• `Readonly` **selection**: [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

A data selection.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L96)

___

### sorter

• `Readonly` **sorter**: [`DTableDataSorter`](DTableDataSorter.md)<`ROW`\>

A data sorter.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L106)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableData`](DTableData.md)<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableData`](DTableData.md)<`ROW`\>

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
| `parent` | [`DTableDataParent`](DTableDataParent.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L113)

___

### each

▸ **each**(`iteratee`, `ifrom?`, `ito?`): `void`

Calls the specified iteratee on each datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTableDataEachIteratee`](../index.md#dtabledataeachiteratee)<`ROW`\> | an function called on each datum |
| `ifrom?` | `number` | an index to start an iteration |
| `ito?` | `number` | an index before which an interation stops |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L136)

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

▸ **get**(`index`): ``null`` \| `ROW`

Returns a row data at the specified index.
The index is an index on rows filters and sorters are not applied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index on rows filters and sorters are not applied |

#### Returns

``null`` \| `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L126)

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

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableData`](DTableData.md)<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableData`](DTableData.md)<`ROW`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableData`](DTableData.md)<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableData`](DTableData.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableData`](DTableData.md)<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableData`](DTableData.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableData`](DTableData.md)<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableData`](DTableData.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableData`](DTableData.md)<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableData`](DTableData.md)<`ROW`\>

`this`.

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L118)
