[Winter Cardinal UI](../README.md) / DTableDataTreeSelectionImpl

# Class: DTableDataTreeSelectionImpl<NODE\>

## Type parameters

| Name |
| :------ |
| `NODE` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableDataTreeSelectionImpl`**

## Implements

- [`DTableDataTreeSelection`](../interfaces/DTableDataTreeSelection.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTableDataTreeSelectionImpl.md#constructor)

### Properties

- [\_parent](DTableDataTreeSelectionImpl.md#_parent)
- [\_rows](DTableDataTreeSelectionImpl.md#_rows)
- [\_type](DTableDataTreeSelectionImpl.md#_type)

### Accessors

- [first](DTableDataTreeSelectionImpl.md#first)
- [indices](DTableDataTreeSelectionImpl.md#indices)
- [last](DTableDataTreeSelectionImpl.md#last)
- [rows](DTableDataTreeSelectionImpl.md#rows)
- [type](DTableDataTreeSelectionImpl.md#type)

### Methods

- [add](DTableDataTreeSelectionImpl.md#add)
- [addAll](DTableDataTreeSelectionImpl.md#addall)
- [addListener](DTableDataTreeSelectionImpl.md#addlistener)
- [addRange](DTableDataTreeSelectionImpl.md#addrange)
- [addTo](DTableDataTreeSelectionImpl.md#addto)
- [clear](DTableDataTreeSelectionImpl.md#clear)
- [clearAndAdd](DTableDataTreeSelectionImpl.md#clearandadd)
- [clearAndAddAll](DTableDataTreeSelectionImpl.md#clearandaddall)
- [contains](DTableDataTreeSelectionImpl.md#contains)
- [emit](DTableDataTreeSelectionImpl.md#emit)
- [eventNames](DTableDataTreeSelectionImpl.md#eventnames)
- [getFirst](DTableDataTreeSelectionImpl.md#getfirst)
- [getLast](DTableDataTreeSelectionImpl.md#getlast)
- [isEmpty](DTableDataTreeSelectionImpl.md#isempty)
- [listenerCount](DTableDataTreeSelectionImpl.md#listenercount)
- [listeners](DTableDataTreeSelectionImpl.md#listeners)
- [newRows](DTableDataTreeSelectionImpl.md#newrows)
- [off](DTableDataTreeSelectionImpl.md#off)
- [on](DTableDataTreeSelectionImpl.md#on)
- [onChange](DTableDataTreeSelectionImpl.md#onchange)
- [onNodeChange](DTableDataTreeSelectionImpl.md#onnodechange)
- [once](DTableDataTreeSelectionImpl.md#once)
- [remove](DTableDataTreeSelectionImpl.md#remove)
- [removeAllListeners](DTableDataTreeSelectionImpl.md#removealllisteners)
- [removeListener](DTableDataTreeSelectionImpl.md#removelistener)
- [shift](DTableDataTreeSelectionImpl.md#shift)
- [size](DTableDataTreeSelectionImpl.md#size)
- [toArray](DTableDataTreeSelectionImpl.md#toarray)
- [toIndex](DTableDataTreeSelectionImpl.md#toindex)
- [toMap](DTableDataTreeSelectionImpl.md#tomap)
- [toObject](DTableDataTreeSelectionImpl.md#toobject)
- [toSortedArray](DTableDataTreeSelectionImpl.md#tosortedarray)
- [toggle](DTableDataTreeSelectionImpl.md#toggle)

## Constructors

### constructor

• **new DTableDataTreeSelectionImpl**<`NODE`\>(`parent`, `options?`)

#### Type parameters

| Name |
| :------ |
| `NODE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableDataTreeSelectionParent`](../interfaces/DTableDataTreeSelectionParent.md)<`NODE`\> |
| `options?` | [`DTableDataSelectionOptions`](../interfaces/DTableDataSelectionOptions.md) |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L26)

## Properties

### \_parent

• `Protected` **\_parent**: [`DTableDataTreeSelectionParent`](../interfaces/DTableDataTreeSelectionParent.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L22)

___

### \_rows

• `Protected` **\_rows**: `Set`<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L24)

___

### \_type

• `Protected` **\_type**: [`DTableDataSelectionType`](../README.md#dtabledataselectiontype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L23)

## Accessors

### first

• `get` **first**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[first](../interfaces/DTableDataTreeSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L131)

___

### indices

• `get` **indices**(): `number`[]

Returns a copy of an index array of selected rows.
The order of indices is an insertion order.

#### Returns

`number`[]

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[indices](../interfaces/DTableDataTreeSelection.md#indices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L70)

___

### last

• `get` **last**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[last](../interfaces/DTableDataTreeSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L139)

___

### rows

• `get` **rows**(): `NODE`[]

Returns a copy of an array of selected row value.
The order is an insertion order.

#### Returns

`NODE`[]

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[rows](../interfaces/DTableDataTreeSelection.md#rows)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L81)

___

### type

• `get` **type**(): [`DTableDataSelectionType`](../README.md#dtabledataselectiontype)

#### Returns

[`DTableDataSelectionType`](../README.md#dtabledataselectiontype)

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[type](../interfaces/DTableDataTreeSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L89)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[add](../interfaces/DTableDataTreeSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L165)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[addAll](../interfaces/DTableDataTreeSelection.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L210)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[addListener](../interfaces/DTableDataTreeSelection.md#addlistener)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[addRange](../interfaces/DTableDataTreeSelection.md#addrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L183)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[addTo](../interfaces/DTableDataTreeSelection.md#addto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L176)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[clear](../interfaces/DTableDataTreeSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L243)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[clearAndAdd](../interfaces/DTableDataTreeSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L251)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[clearAndAddAll](../interfaces/DTableDataTreeSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:269](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L269)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[contains](../interfaces/DTableDataTreeSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L224)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[emit](../interfaces/DTableDataTreeSelection.md#emit)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[eventNames](../interfaces/DTableDataTreeSelection.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### getFirst

▸ `Protected` **getFirst**(): ``null`` \| `NODE`

#### Returns

``null`` \| `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L93)

___

### getLast

▸ `Protected` **getLast**(): ``null`` \| `NODE`

#### Returns

``null`` \| `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L107)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[isEmpty](../interfaces/DTableDataTreeSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L292)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[listenerCount](../interfaces/DTableDataTreeSelection.md#listenercount)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[listeners](../interfaces/DTableDataTreeSelection.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newRows

▸ `Protected` **newRows**(`nodes`, `toChildren`, `rows`, `result`): `Set`<`NODE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NODE`[] |
| `toChildren` | (`node`: `NODE`) => `undefined` \| ``null`` \| `NODE`[] |
| `rows` | `Set`<`NODE`\> |
| `result` | `Set`<`NODE`\> |

#### Returns

`Set`<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L51)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[off](../interfaces/DTableDataTreeSelection.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[on](../interfaces/DTableDataTreeSelection.md#on)

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

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L147)

___

### onNodeChange

▸ **onNodeChange**(`nodes?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes?` | `NODE`[] |

#### Returns

`void`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[onNodeChange](../interfaces/DTableDataTreeSelection.md#onnodechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L33)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[once](../interfaces/DTableDataTreeSelection.md#once)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[remove](../interfaces/DTableDataTreeSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L232)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[removeAllListeners](../interfaces/DTableDataTreeSelection.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTableDataTreeSelectionImpl`](DTableDataTreeSelectionImpl.md)<`NODE`\>

`this`.

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[removeListener](../interfaces/DTableDataTreeSelection.md#removelistener)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[shift](../interfaces/DTableDataTreeSelection.md#shift)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L284)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[size](../interfaces/DTableDataTreeSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L288)

___

### toArray

▸ **toArray**(): [`number`, `NODE`][]

Returns an array of the (index, row value) pairs of selected rows.
The order of pairs is an insertion order.

#### Returns

[`number`, `NODE`][]

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toArray](../interfaces/DTableDataTreeSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L296)

___

### toIndex

▸ `Protected` **toIndex**(`target`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L119)

___

### toMap

▸ **toMap**(): `Map`<`number`, `NODE`\>

#### Returns

`Map`<`number`, `NODE`\>

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toMap](../interfaces/DTableDataTreeSelection.md#tomap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:322](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L322)

___

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toObject](../interfaces/DTableDataTreeSelection.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L311)

___

### toSortedArray

▸ **toSortedArray**(): [`number`, `NODE`][]

Returns an sorted array of the (index, row value) pairs of selected rows.

#### Returns

[`number`, `NODE`][]

#### Implementation of

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toSortedArray](../interfaces/DTableDataTreeSelection.md#tosortedarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L307)

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

[DTableDataTreeSelection](../interfaces/DTableDataTreeSelection.md).[toggle](../interfaces/DTableDataTreeSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-data-tree-selection-impl.ts#L152)
