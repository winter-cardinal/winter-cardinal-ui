[Winter Cardinal UI - v0.155.0](../index.md) / DTableDataTreeSelectionParent

# Interface: DTableDataTreeSelectionParent<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Hierarchy

- [`DTableDataSelectionParent`](DTableDataSelectionParent.md)<`NODE`\>

  ↳ **`DTableDataTreeSelectionParent`**

## Table of contents

### Properties

- [accessor](DTableDataTreeSelectionParent.md#accessor)
- [filter](DTableDataTreeSelectionParent.md#filter)
- [mapped](DTableDataTreeSelectionParent.md#mapped)
- [selection](DTableDataTreeSelectionParent.md#selection)
- [sorter](DTableDataTreeSelectionParent.md#sorter)

### Methods

- [addListener](DTableDataTreeSelectionParent.md#addlistener)
- [bind](DTableDataTreeSelectionParent.md#bind)
- [each](DTableDataTreeSelectionParent.md#each)
- [emit](DTableDataTreeSelectionParent.md#emit)
- [eventNames](DTableDataTreeSelectionParent.md#eventnames)
- [get](DTableDataTreeSelectionParent.md#get)
- [listenerCount](DTableDataTreeSelectionParent.md#listenercount)
- [listeners](DTableDataTreeSelectionParent.md#listeners)
- [off](DTableDataTreeSelectionParent.md#off)
- [on](DTableDataTreeSelectionParent.md#on)
- [once](DTableDataTreeSelectionParent.md#once)
- [removeAllListeners](DTableDataTreeSelectionParent.md#removealllisteners)
- [removeListener](DTableDataTreeSelectionParent.md#removelistener)
- [size](DTableDataTreeSelectionParent.md#size)
- [update](DTableDataTreeSelectionParent.md#update)

## Properties

### accessor

• `Readonly` **accessor**: [`DTableDataTreeItemAccessor`](../classes/DTableDataTreeItemAccessor.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection.ts#L20)

___

### filter

• `Readonly` **filter**: [`DTableDataFilter`](DTableDataFilter.md)<`NODE`\>

A data filter.

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[filter](DTableDataSelectionParent.md#filter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L101)

___

### mapped

• `Readonly` **mapped**: [`DTableDataMapped`](DTableDataMapped.md)<`NODE`\>

Sorted and filtered data.

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[mapped](DTableDataSelectionParent.md#mapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L111)

___

### selection

• `Readonly` **selection**: [`DTableDataSelection`](DTableDataSelection.md)<`NODE`\>

A data selection.

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[selection](DTableDataSelectionParent.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L96)

___

### sorter

• `Readonly` **sorter**: [`DTableDataSorter`](DTableDataSorter.md)<`NODE`\>

A data sorter.

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[sorter](DTableDataSelectionParent.md#sorter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L106)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[addListener](DTableDataSelectionParent.md#addlistener)

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

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[bind](DTableDataSelectionParent.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L113)

___

### each

▸ **each**(`iteratee`, `ifrom?`, `ito?`): `void`

Calls the specified iteratee on each datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DTableDataEachIteratee`](../index.md#dtabledataeachiteratee)<`NODE`\> | an function called on each datum |
| `ifrom?` | `number` | an index to start an iteration |
| `ito?` | `number` | an index before which an interation stops |

#### Returns

`void`

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[each](DTableDataSelectionParent.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L136)

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

[DTableDataSelectionParent](DTableDataSelectionParent.md).[emit](DTableDataSelectionParent.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[eventNames](DTableDataSelectionParent.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### get

▸ **get**(`index`): ``null`` \| `NODE`

Returns a row data at the specified index.
The index is an index on rows filters and sorters are not applied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index on rows filters and sorters are not applied |

#### Returns

``null`` \| `NODE`

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[get](DTableDataSelectionParent.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L126)

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

[DTableDataSelectionParent](DTableDataSelectionParent.md).[listenerCount](DTableDataSelectionParent.md#listenercount)

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

[DTableDataSelectionParent](DTableDataSelectionParent.md).[listeners](DTableDataSelectionParent.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[off](DTableDataSelectionParent.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

`this`.

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[on](DTableDataSelectionParent.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

`this`.

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[once](DTableDataSelectionParent.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

`this`.

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[removeAllListeners](DTableDataSelectionParent.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataTreeSelectionParent`](DTableDataTreeSelectionParent.md)<`NODE`\>

`this`.

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[removeListener](DTableDataSelectionParent.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

Returns a size of rows.

#### Returns

`number`

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[size](DTableDataSelectionParent.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data.ts#L118)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[DTableDataSelectionParent](DTableDataSelectionParent.md).[update](DTableDataSelectionParent.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L71)
