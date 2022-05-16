[Winter Cardinal UI - v0.167.0](../index.md) / DTableDataTreeSelection

# Interface: DTableDataTreeSelection<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Hierarchy

- [`DTableDataSelection`](DTableDataSelection.md)<`NODE`\>

  ↳ **`DTableDataTreeSelection`**

## Implemented by

- [`DTableDataTreeSelectionImpl`](../classes/DTableDataTreeSelectionImpl.md)

## Table of contents

### Properties

- [first](DTableDataTreeSelection.md#first)
- [indices](DTableDataTreeSelection.md#indices)
- [last](DTableDataTreeSelection.md#last)
- [rows](DTableDataTreeSelection.md#rows)
- [type](DTableDataTreeSelection.md#type)

### Methods

- [add](DTableDataTreeSelection.md#add)
- [addAll](DTableDataTreeSelection.md#addall)
- [addListener](DTableDataTreeSelection.md#addlistener)
- [addRange](DTableDataTreeSelection.md#addrange)
- [addTo](DTableDataTreeSelection.md#addto)
- [clear](DTableDataTreeSelection.md#clear)
- [clearAndAdd](DTableDataTreeSelection.md#clearandadd)
- [clearAndAddAll](DTableDataTreeSelection.md#clearandaddall)
- [contains](DTableDataTreeSelection.md#contains)
- [emit](DTableDataTreeSelection.md#emit)
- [eventNames](DTableDataTreeSelection.md#eventnames)
- [isEmpty](DTableDataTreeSelection.md#isempty)
- [listenerCount](DTableDataTreeSelection.md#listenercount)
- [listeners](DTableDataTreeSelection.md#listeners)
- [off](DTableDataTreeSelection.md#off)
- [on](DTableDataTreeSelection.md#on)
- [onNodeChange](DTableDataTreeSelection.md#onnodechange)
- [once](DTableDataTreeSelection.md#once)
- [remove](DTableDataTreeSelection.md#remove)
- [removeAllListeners](DTableDataTreeSelection.md#removealllisteners)
- [removeListener](DTableDataTreeSelection.md#removelistener)
- [shift](DTableDataTreeSelection.md#shift)
- [size](DTableDataTreeSelection.md#size)
- [toArray](DTableDataTreeSelection.md#toarray)
- [toMap](DTableDataTreeSelection.md#tomap)
- [toObject](DTableDataTreeSelection.md#toobject)
- [toSortedArray](DTableDataTreeSelection.md#tosortedarray)
- [toggle](DTableDataTreeSelection.md#toggle)

## Properties

### first

• `Readonly` **first**: ``null`` \| `number`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[first](DTableDataSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L37)

___

### indices

• `Readonly` **indices**: `number`[]

Returns a copy of an index array of selected rows.
The order of indices is an insertion order.

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[indices](DTableDataSelection.md#indices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L27)

___

### last

• `Readonly` **last**: ``null`` \| `number`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[last](DTableDataSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L38)

___

### rows

• `Readonly` **rows**: `NODE`[]

Returns a copy of an array of selected row value.
The order is an insertion order.

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[rows](DTableDataSelection.md#rows)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L33)

___

### type

• `Readonly` **type**: [`DTableDataSelectionType`](../index.md#dtabledataselectiontype)

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[type](DTableDataSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L35)

## Methods

### add

▸ **add**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[add](DTableDataSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L41)

___

### addAll

▸ **addAll**(`rowIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndices` | `number`[] |

#### Returns

`void`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[addAll](DTableDataSelection.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L44)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[addListener](DTableDataSelection.md#addlistener)

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

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[addRange](DTableDataSelection.md#addrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L43)

___

### addTo

▸ **addTo**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[addTo](DTableDataSelection.md#addto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L42)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[clear](DTableDataSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L47)

___

### clearAndAdd

▸ **clearAndAdd**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[clearAndAdd](DTableDataSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L48)

___

### clearAndAddAll

▸ **clearAndAddAll**(`rowIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndices` | `number`[] |

#### Returns

`void`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[clearAndAddAll](DTableDataSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L49)

___

### contains

▸ **contains**(`rowIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`boolean`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[contains](DTableDataSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L45)

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

[DTableDataSelection](DTableDataSelection.md).[emit](DTableDataSelection.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[eventNames](DTableDataSelection.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[isEmpty](DTableDataSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L52)

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

[DTableDataSelection](DTableDataSelection.md).[listenerCount](DTableDataSelection.md#listenercount)

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

[DTableDataSelection](DTableDataSelection.md).[listeners](DTableDataSelection.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[off](DTableDataSelection.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

`this`.

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[on](DTableDataSelection.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onNodeChange

▸ **onNodeChange**(`nodes?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes?` | `NODE`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection.ts#L16)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

`this`.

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[once](DTableDataSelection.md#once)

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

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[remove](DTableDataSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L46)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

`this`.

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[removeAllListeners](DTableDataSelection.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataTreeSelection`](DTableDataTreeSelection.md)<`NODE`\>

`this`.

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[removeListener](DTableDataSelection.md#removelistener)

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

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[shift](DTableDataSelection.md#shift)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L50)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[size](DTableDataSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L51)

___

### toArray

▸ **toArray**(): [`number`, `NODE`][]

Returns an array of the (index, row value) pairs of selected rows.
The order of pairs is an insertion order.

#### Returns

[`number`, `NODE`][]

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[toArray](DTableDataSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L58)

___

### toMap

▸ **toMap**(): `Map`<`number`, `NODE`\>

#### Returns

`Map`<`number`, `NODE`\>

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[toMap](DTableDataSelection.md#tomap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L67)

___

### toObject

▸ **toObject**(): `Record`<`number`, `NODE`\>

#### Returns

`Record`<`number`, `NODE`\>

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[toObject](DTableDataSelection.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L65)

___

### toSortedArray

▸ **toSortedArray**(): [`number`, `NODE`][]

Returns an sorted array of the (index, row value) pairs of selected rows.

#### Returns

[`number`, `NODE`][]

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[toSortedArray](DTableDataSelection.md#tosortedarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L63)

___

### toggle

▸ **toggle**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Inherited from

[DTableDataSelection](DTableDataSelection.md).[toggle](DTableDataSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-selection.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-table-data-selection.ts#L40)
