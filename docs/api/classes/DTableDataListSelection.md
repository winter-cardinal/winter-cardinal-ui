[Winter Cardinal UI - v0.205.1](../index.md) / DTableDataListSelection

# Class: DTableDataListSelection<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataListSelection`**

## Implements

- [`DTableDataSelection`](../interfaces/DTableDataSelection.md)<`ROW`\>

## Table of contents

### Constructors

- [constructor](DTableDataListSelection.md#constructor)

### Properties

- [\_indices](DTableDataListSelection.md#_indices)
- [\_parent](DTableDataListSelection.md#_parent)
- [\_type](DTableDataListSelection.md#_type)

### Accessors

- [first](DTableDataListSelection.md#first)
- [indices](DTableDataListSelection.md#indices)
- [last](DTableDataListSelection.md#last)
- [rows](DTableDataListSelection.md#rows)
- [type](DTableDataListSelection.md#type)

### Methods

- [add](DTableDataListSelection.md#add)
- [addAll](DTableDataListSelection.md#addall)
- [addListener](DTableDataListSelection.md#addlistener)
- [addRange](DTableDataListSelection.md#addrange)
- [addTo](DTableDataListSelection.md#addto)
- [clear](DTableDataListSelection.md#clear)
- [clearAndAdd](DTableDataListSelection.md#clearandadd)
- [clearAndAddAll](DTableDataListSelection.md#clearandaddall)
- [contains](DTableDataListSelection.md#contains)
- [emit](DTableDataListSelection.md#emit)
- [eventNames](DTableDataListSelection.md#eventnames)
- [isEmpty](DTableDataListSelection.md#isempty)
- [listenerCount](DTableDataListSelection.md#listenercount)
- [listeners](DTableDataListSelection.md#listeners)
- [off](DTableDataListSelection.md#off)
- [on](DTableDataListSelection.md#on)
- [onChange](DTableDataListSelection.md#onchange)
- [once](DTableDataListSelection.md#once)
- [remove](DTableDataListSelection.md#remove)
- [removeAllListeners](DTableDataListSelection.md#removealllisteners)
- [removeListener](DTableDataListSelection.md#removelistener)
- [shift](DTableDataListSelection.md#shift)
- [size](DTableDataListSelection.md#size)
- [toArray](DTableDataListSelection.md#toarray)
- [toMap](DTableDataListSelection.md#tomap)
- [toObject](DTableDataListSelection.md#toobject)
- [toSortedArray](DTableDataListSelection.md#tosortedarray)
- [toggle](DTableDataListSelection.md#toggle)

## Constructors

### constructor

• **new DTableDataListSelection**<`ROW`\>(`parent`, `options?`)

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataSelectionParent`](../interfaces/DTableDataSelectionParent.md)<`ROW`\> |
| `options?` | [`DTableDataSelectionOptions`](../interfaces/DTableDataSelectionOptions.md) |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L27)

## Properties

### \_indices

• `Protected` **\_indices**: `Set`<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L25)

___

### \_parent

• `Protected` **\_parent**: [`DTableDataSelectionParent`](../interfaces/DTableDataSelectionParent.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L23)

___

### \_type

• `Protected` **\_type**: [`DTableDataSelectionType`](../index.md#dtabledataselectiontype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L24)

## Accessors

### first

• `get` **first**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[first](../interfaces/DTableDataSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L64)

___

### indices

• `get` **indices**(): `number`[]

Returns a copy of an index array of selected rows.
The order of indices is an insertion order.

#### Returns

`number`[]

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[indices](../interfaces/DTableDataSelection.md#indices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L201)

___

### last

• `get` **last**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[last](../interfaces/DTableDataSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L78)

___

### rows

• `get` **rows**(): `ROW`[]

Returns a copy of an array of selected row value.
The order is an insertion order.

#### Returns

`ROW`[]

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[rows](../interfaces/DTableDataSelection.md#rows)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:213](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L213)

___

### type

• `get` **type**(): [`DTableDataSelectionType`](../index.md#dtabledataselectiontype)

#### Returns

[`DTableDataSelectionType`](../index.md#dtabledataselectiontype)

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[type](../interfaces/DTableDataSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L35)

## Methods

### add

▸ **add**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[add](../interfaces/DTableDataSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L54)

___

### addAll

▸ **addAll**(`rowIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndices` | `number`[] |

#### Returns

`void`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[addAll](../interfaces/DTableDataSelection.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L119)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[addListener](../interfaces/DTableDataSelection.md#addlistener)

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

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[addRange](../interfaces/DTableDataSelection.md#addrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L97)

___

### addTo

▸ **addTo**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[addTo](../interfaces/DTableDataSelection.md#addto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L90)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[clear](../interfaces/DTableDataSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L141)

___

### clearAndAdd

▸ **clearAndAdd**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[clearAndAdd](../interfaces/DTableDataSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L149)

___

### clearAndAddAll

▸ **clearAndAddAll**(`rowIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndices` | `number`[] |

#### Returns

`void`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[clearAndAddAll](../interfaces/DTableDataSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L158)

___

### contains

▸ **contains**(`rowIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[contains](../interfaces/DTableDataSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L131)

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

[DTableDataSelection](../interfaces/DTableDataSelection.md).[emit](../interfaces/DTableDataSelection.md#emit)

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

[DTableDataSelection](../interfaces/DTableDataSelection.md).[eventNames](../interfaces/DTableDataSelection.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[isEmpty](../interfaces/DTableDataSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L193)

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

[DTableDataSelection](../interfaces/DTableDataSelection.md).[listenerCount](../interfaces/DTableDataSelection.md#listenercount)

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

[DTableDataSelection](../interfaces/DTableDataSelection.md).[listeners](../interfaces/DTableDataSelection.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[off](../interfaces/DTableDataSelection.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[on](../interfaces/DTableDataSelection.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L39)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[once](../interfaces/DTableDataSelection.md#once)

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

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[remove](../interfaces/DTableDataSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L135)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[removeAllListeners](../interfaces/DTableDataSelection.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataListSelection`](DTableDataListSelection.md)<`ROW`\>

`this`.

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[removeListener](../interfaces/DTableDataSelection.md#removelistener)

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

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[shift](../interfaces/DTableDataSelection.md#shift)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L169)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[size](../interfaces/DTableDataSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L189)

___

### toArray

▸ **toArray**(): [`number`, `ROW`][]

Returns an array of the (index, row value) pairs of selected rows.
The order of pairs is an insertion order.

#### Returns

[`number`, `ROW`][]

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[toArray](../interfaces/DTableDataSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L226)

___

### toMap

▸ **toMap**(): `Map`<`number`, `ROW`\>

#### Returns

`Map`<`number`, `ROW`\>

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[toMap](../interfaces/DTableDataSelection.md#tomap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L251)

___

### toObject

▸ **toObject**(): `Record`<`number`, `ROW`\>

#### Returns

`Record`<`number`, `ROW`\>

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[toObject](../interfaces/DTableDataSelection.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L242)

___

### toSortedArray

▸ **toSortedArray**(): [`number`, `ROW`][]

Returns an sorted array of the (index, row value) pairs of selected rows.

#### Returns

[`number`, `ROW`][]

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[toSortedArray](../interfaces/DTableDataSelection.md#tosortedarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L238)

___

### toggle

▸ **toggle**(`rowIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`void`

#### Implementation of

[DTableDataSelection](../interfaces/DTableDataSelection.md).[toggle](../interfaces/DTableDataSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-table-data-list-selection.ts#L44)
