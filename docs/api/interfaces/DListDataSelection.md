[Winter Cardinal UI](../README.md) / DListDataSelection

# Interface: DListDataSelection<ITEM\>

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Hierarchy

- `EventEmitter`

  ↳ **`DListDataSelection`**

  ↳↳ [`DListDataImplSelection`](DListDataImplSelection.md)

## Implemented by

- [`DListDataSelectionMultiple`](../classes/DListDataSelectionMultiple.md)
- [`DListDataSelectionNone`](../classes/DListDataSelectionNone.md)
- [`DListDataSelectionSingle`](../classes/DListDataSelectionSingle.md)

## Table of contents

### Properties

- [first](DListDataSelection.md#first)
- [last](DListDataSelection.md#last)
- [type](DListDataSelection.md#type)

### Methods

- [add](DListDataSelection.md#add)
- [addListener](DListDataSelection.md#addlistener)
- [clear](DListDataSelection.md#clear)
- [clearAndAdd](DListDataSelection.md#clearandadd)
- [clearAndAddAll](DListDataSelection.md#clearandaddall)
- [contains](DListDataSelection.md#contains)
- [each](DListDataSelection.md#each)
- [emit](DListDataSelection.md#emit)
- [eventNames](DListDataSelection.md#eventnames)
- [get](DListDataSelection.md#get)
- [isEmpty](DListDataSelection.md#isempty)
- [listenerCount](DListDataSelection.md#listenercount)
- [listeners](DListDataSelection.md#listeners)
- [off](DListDataSelection.md#off)
- [on](DListDataSelection.md#on)
- [once](DListDataSelection.md#once)
- [remove](DListDataSelection.md#remove)
- [removeAllListeners](DListDataSelection.md#removealllisteners)
- [removeListener](DListDataSelection.md#removelistener)
- [size](DListDataSelection.md#size)
- [toArray](DListDataSelection.md#toarray)
- [toggle](DListDataSelection.md#toggle)

## Properties

### first

• `Readonly` **first**: ``null`` \| `ITEM`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L59)

___

### last

• `Readonly` **last**: ``null`` \| `ITEM`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L60)

___

### type

• `Readonly` **type**: [`DListDataSelectionType`](../README.md#dlistdataselectiontype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L58)

## Methods

### add

▸ **add**(`target`): `boolean`

Adds the given item

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `ITEM` | an item |

#### Returns

`boolean`

true if succeeded.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L76)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### clear

▸ **clear**(): `void`

Clears all the items.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L97)

___

### clearAndAdd

▸ **clearAndAdd**(`target`): `boolean`

Clears all the existing items and adds the given item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `ITEM` | an item to be added |

#### Returns

`boolean`

true if the selection is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L105)

___

### clearAndAddAll

▸ **clearAndAddAll**(`targets`): `boolean`

Clears the existing items and add all the given items.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targets` | `ITEM`[] | items to be added |

#### Returns

`boolean`

true if the selection is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L113)

___

### contains

▸ **contains**(`target`): `boolean`

Returns true if the given item is selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `ITEM` | an item to be checked |

#### Returns

`boolean`

true if the given item is selected

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L121)

___

### each

▸ **each**(`iteratee`): `void`

Iterates over selected items.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | (`item`: `ITEM`) => `boolean` \| `void` | an iteratee |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L142)

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

▸ **get**(`index`): ``null`` \| `ITEM`

Returns an item at the given index or null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index |

#### Returns

``null`` \| `ITEM`

an item at the given index or null

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L68)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the selection is empty.

#### Returns

`boolean`

true if the selection is empty

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L135)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### remove

▸ **remove**(`target`): `boolean`

Removes the given item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `ITEM` | an item |

#### Returns

`boolean`

true if succeeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L84)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

Returns the number of selected items.

#### Returns

`number`

the number of selected items

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L128)

___

### toArray

▸ **toArray**(): `ITEM`[]

Returns an array of selected items.

#### Returns

`ITEM`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L147)

___

### toggle

▸ **toggle**(`target`): `boolean`

Toggles the given item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `ITEM` | an item |

#### Returns

`boolean`

true if succeeded.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L92)
