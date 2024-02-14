[Winter Cardinal UI - v0.407.0](../index.md) / DTableDataListMappedParent

# Interface: DTableDataListMappedParent\<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- [`DTableData`](DTableData.md)\<`ROW`\>

  ↳ **`DTableDataListMappedParent`**

## Table of contents

### Properties

- [filter](DTableDataListMappedParent.md#filter)
- [mapped](DTableDataListMappedParent.md#mapped)
- [rows](DTableDataListMappedParent.md#rows)
- [selection](DTableDataListMappedParent.md#selection)
- [sorter](DTableDataListMappedParent.md#sorter)
- [supplimentals](DTableDataListMappedParent.md#supplimentals)

### Methods

- [addListener](DTableDataListMappedParent.md#addlistener)
- [bind](DTableDataListMappedParent.md#bind)
- [each](DTableDataListMappedParent.md#each)
- [emit](DTableDataListMappedParent.md#emit)
- [eventNames](DTableDataListMappedParent.md#eventnames)
- [get](DTableDataListMappedParent.md#get)
- [listenerCount](DTableDataListMappedParent.md#listenercount)
- [listeners](DTableDataListMappedParent.md#listeners)
- [lock](DTableDataListMappedParent.md#lock)
- [off](DTableDataListMappedParent.md#off)
- [on](DTableDataListMappedParent.md#on)
- [once](DTableDataListMappedParent.md#once)
- [removeAllListeners](DTableDataListMappedParent.md#removealllisteners)
- [removeListener](DTableDataListMappedParent.md#removelistener)
- [size](DTableDataListMappedParent.md#size)
- [unlock](DTableDataListMappedParent.md#unlock)
- [update](DTableDataListMappedParent.md#update)

## Properties

### filter

• `Readonly` **filter**: [`DTableDataFilter`](DTableDataFilter.md)\<`ROW`\>

A data filter.

#### Inherited from

[DTableData](DTableData.md).[filter](DTableData.md#filter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L108)

___

### mapped

• `Readonly` **mapped**: [`DTableDataMapped`](DTableDataMapped.md)\<`ROW`\>

Sorted and filtered data.

#### Inherited from

[DTableData](DTableData.md).[mapped](DTableData.md#mapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L118)

___

### rows

• `Readonly` **rows**: `ROW`[]

A list of rows.

#### Overrides

[DTableData](DTableData.md).[rows](DTableData.md#rows)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L9)

___

### selection

• `Readonly` **selection**: [`DTableDataSelection`](DTableDataSelection.md)\<`ROW`\>

A data selection.

#### Inherited from

[DTableData](DTableData.md).[selection](DTableData.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L103)

___

### sorter

• `Readonly` **sorter**: [`DTableDataSorter`](DTableDataSorter.md)\<`ROW`\>

A data sorter.

#### Inherited from

[DTableData](DTableData.md).[sorter](DTableData.md#sorter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L113)

___

### supplimentals

• `Optional` `Readonly` **supplimentals**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data-list-mapped.ts#L10)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

#### Inherited from

[DTableData](DTableData.md).[addListener](DTableData.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### bind

▸ **bind**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataParent`](DTableDataParent.md) |

#### Returns

`void`

#### Inherited from

[DTableData](DTableData.md).[bind](DTableData.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L123)

___

### each

▸ **each**(`iteratee`, `ifrom?`, `ito?`): `void`

Calls the specified iteratee on each datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTableDataEachIteratee`](../index.md#dtabledataeachiteratee)\<`ROW`\> | an function called on each datum |
| `ifrom?` | `number` | an index to start an iteration |
| `ito?` | `number` | an index before which an interation stops |

#### Returns

`void`

#### Inherited from

[DTableData](DTableData.md).[each](DTableData.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L152)

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

#### Inherited from

[DTableData](DTableData.md).[emit](DTableData.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTableData](DTableData.md).[eventNames](DTableData.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

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

#### Inherited from

[DTableData](DTableData.md).[get](DTableData.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L142)

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

[DTableData](DTableData.md).[listenerCount](DTableData.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25432

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

[DTableData](DTableData.md).[listeners](DTableData.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Inherited from

[DTableData](DTableData.md).[lock](DTableData.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L127)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

#### Inherited from

[DTableData](DTableData.md).[off](DTableData.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

`this`.

#### Inherited from

[DTableData](DTableData.md).[on](DTableData.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

`this`.

#### Inherited from

[DTableData](DTableData.md).[once](DTableData.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

`this`.

#### Inherited from

[DTableData](DTableData.md).[removeAllListeners](DTableData.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataListMappedParent`](DTableDataListMappedParent.md)\<`ROW`\>

`this`.

#### Inherited from

[DTableData](DTableData.md).[removeListener](DTableData.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### size

▸ **size**(): `number`

Returns a size of rows.

#### Returns

`number`

#### Inherited from

[DTableData](DTableData.md).[size](DTableData.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L134)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Inherited from

[DTableData](DTableData.md).[unlock](DTableData.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L129)

___

### update

▸ **update**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DTableData](DTableData.md).[update](DTableData.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L125)
