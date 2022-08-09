[Winter Cardinal UI - v0.205.1](../index.md) / DTableDataSelection

# Interface: DTableDataSelection<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataSelection`**

  ↳↳ [`DTableDataTreeSelection`](DTableDataTreeSelection.md)

## Implemented by

- [`DTableDataListSelection`](../classes/DTableDataListSelection.md)

## Table of contents

### Properties

- [first](DTableDataSelection.md#first)
- [indices](DTableDataSelection.md#indices)
- [last](DTableDataSelection.md#last)
- [rows](DTableDataSelection.md#rows)
- [type](DTableDataSelection.md#type)

### Methods

- [add](DTableDataSelection.md#add)
- [addAll](DTableDataSelection.md#addall)
- [addListener](DTableDataSelection.md#addlistener)
- [addRange](DTableDataSelection.md#addrange)
- [addTo](DTableDataSelection.md#addto)
- [clear](DTableDataSelection.md#clear)
- [clearAndAdd](DTableDataSelection.md#clearandadd)
- [clearAndAddAll](DTableDataSelection.md#clearandaddall)
- [contains](DTableDataSelection.md#contains)
- [emit](DTableDataSelection.md#emit)
- [eventNames](DTableDataSelection.md#eventnames)
- [isEmpty](DTableDataSelection.md#isempty)
- [listenerCount](DTableDataSelection.md#listenercount)
- [listeners](DTableDataSelection.md#listeners)
- [off](DTableDataSelection.md#off)
- [on](DTableDataSelection.md#on)
- [once](DTableDataSelection.md#once)
- [remove](DTableDataSelection.md#remove)
- [removeAllListeners](DTableDataSelection.md#removealllisteners)
- [removeListener](DTableDataSelection.md#removelistener)
- [shift](DTableDataSelection.md#shift)
- [size](DTableDataSelection.md#size)
- [toArray](DTableDataSelection.md#toarray)
- [toMap](DTableDataSelection.md#tomap)
- [toObject](DTableDataSelection.md#toobject)
- [toSortedArray](DTableDataSelection.md#tosortedarray)
- [toggle](DTableDataSelection.md#toggle)

## Properties

### first

• `Readonly` **first**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L37)

___

### indices

• `Readonly` **indices**: `number`[]

Returns a copy of an index array of selected rows.
The order of indices is an insertion order.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L27)

___

### last

• `Readonly` **last**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L38)

___

### rows

• `Readonly` **rows**: `ROW`[]

Returns a copy of an array of selected row value.
The order is an insertion order.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L33)

___

### type

• `Readonly` **type**: [`DTableDataSelectionType`](../index.md#dtabledataselectiontype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L35)

## Methods

### add

▸ **add**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L41)

___

### addAll

▸ **addAll**(`rowIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndices` | `number`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L44)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### addRange

▸ **addRange**(`from`, `includeFrom`, `to`, `includeTo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `includeFrom` | `boolean` |
| `to` | `number` |
| `includeTo` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L43)

___

### addTo

▸ **addTo**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L42)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L47)

___

### clearAndAdd

▸ **clearAndAdd**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L48)

___

### clearAndAddAll

▸ **clearAndAddAll**(`rowIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndices` | `number`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L49)

___

### contains

▸ **contains**(`rowIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L45)

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

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L52)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### remove

▸ **remove**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L46)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataSelection`](DTableDataSelection.md)<`ROW`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### shift

▸ **shift**(`rowIndex`, `amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L50)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L51)

___

### toArray

▸ **toArray**(): [`number`, `ROW`][]

Returns an array of the (index, row value) pairs of selected rows.
The order of pairs is an insertion order.

#### Returns

[`number`, `ROW`][]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L58)

___

### toMap

▸ **toMap**(): `Map`<`number`, `ROW`\>

#### Returns

`Map`<`number`, `ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L67)

___

### toObject

▸ **toObject**(): `Record`<`number`, `ROW`\>

#### Returns

`Record`<`number`, `ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L65)

___

### toSortedArray

▸ **toSortedArray**(): [`number`, `ROW`][]

Returns an sorted array of the (index, row value) pairs of selected rows.

#### Returns

[`number`, `ROW`][]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L63)

___

### toggle

▸ **toggle**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L40)
