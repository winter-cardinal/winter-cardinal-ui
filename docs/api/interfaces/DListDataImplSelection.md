[Winter Cardinal UI - v0.179.0](../index.md) / DListDataImplSelection

# Interface: DListDataImplSelection<ITEM\>

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Hierarchy

- [`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

  ↳ **`DListDataImplSelection`**

## Table of contents

### Properties

- [first](DListDataImplSelection.md#first)
- [last](DListDataImplSelection.md#last)
- [type](DListDataImplSelection.md#type)

### Methods

- [add](DListDataImplSelection.md#add)
- [addListener](DListDataImplSelection.md#addlistener)
- [clear](DListDataImplSelection.md#clear)
- [clearAndAdd](DListDataImplSelection.md#clearandadd)
- [clearAndAddAll](DListDataImplSelection.md#clearandaddall)
- [contains](DListDataImplSelection.md#contains)
- [each](DListDataImplSelection.md#each)
- [emit](DListDataImplSelection.md#emit)
- [eventNames](DListDataImplSelection.md#eventnames)
- [get](DListDataImplSelection.md#get)
- [isEmpty](DListDataImplSelection.md#isempty)
- [listenerCount](DListDataImplSelection.md#listenercount)
- [listeners](DListDataImplSelection.md#listeners)
- [off](DListDataImplSelection.md#off)
- [on](DListDataImplSelection.md#on)
- [onItemChange](DListDataImplSelection.md#onitemchange)
- [once](DListDataImplSelection.md#once)
- [remove](DListDataImplSelection.md#remove)
- [removeAllListeners](DListDataImplSelection.md#removealllisteners)
- [removeListener](DListDataImplSelection.md#removelistener)
- [size](DListDataImplSelection.md#size)
- [toArray](DListDataImplSelection.md#toarray)
- [toggle](DListDataImplSelection.md#toggle)

## Properties

### first

• `Readonly` **first**: ``null`` \| `ITEM`

#### Inherited from

[DListDataSelection](DListDataSelection.md).[first](DListDataSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L59)

___

### last

• `Readonly` **last**: ``null`` \| `ITEM`

#### Inherited from

[DListDataSelection](DListDataSelection.md).[last](DListDataSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L60)

___

### type

• `Readonly` **type**: [`DListDataSelectionType`](../index.md#dlistdataselectiontype)

#### Inherited from

[DListDataSelection](DListDataSelection.md).[type](DListDataSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L58)

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

#### Inherited from

[DListDataSelection](DListDataSelection.md).[add](DListDataSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L76)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

#### Inherited from

[DListDataSelection](DListDataSelection.md).[addListener](DListDataSelection.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### clear

▸ **clear**(): `void`

Clears all the items.

#### Returns

`void`

#### Inherited from

[DListDataSelection](DListDataSelection.md).[clear](DListDataSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L97)

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

#### Inherited from

[DListDataSelection](DListDataSelection.md).[clearAndAdd](DListDataSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L105)

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

#### Inherited from

[DListDataSelection](DListDataSelection.md).[clearAndAddAll](DListDataSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L113)

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

#### Inherited from

[DListDataSelection](DListDataSelection.md).[contains](DListDataSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L121)

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

#### Inherited from

[DListDataSelection](DListDataSelection.md).[each](DListDataSelection.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L142)

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

[DListDataSelection](DListDataSelection.md).[emit](DListDataSelection.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DListDataSelection](DListDataSelection.md).[eventNames](DListDataSelection.md#eventnames)

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

#### Inherited from

[DListDataSelection](DListDataSelection.md).[get](DListDataSelection.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L68)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the selection is empty.

#### Returns

`boolean`

true if the selection is empty

#### Inherited from

[DListDataSelection](DListDataSelection.md).[isEmpty](DListDataSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L135)

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

[DListDataSelection](DListDataSelection.md).[listenerCount](DListDataSelection.md#listenercount)

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

[DListDataSelection](DListDataSelection.md).[listeners](DListDataSelection.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

#### Inherited from

[DListDataSelection](DListDataSelection.md).[off](DListDataSelection.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

`this`.

#### Inherited from

[DListDataSelection](DListDataSelection.md).[on](DListDataSelection.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onItemChange

▸ **onItemChange**(`before`, `items`, `after`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `before` | `ITEM`[] |
| `items` | `ITEM`[] |
| `after` | `ITEM`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L21)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

`this`.

#### Inherited from

[DListDataSelection](DListDataSelection.md).[once](DListDataSelection.md#once)

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

#### Inherited from

[DListDataSelection](DListDataSelection.md).[remove](DListDataSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L84)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

`this`.

#### Inherited from

[DListDataSelection](DListDataSelection.md).[removeAllListeners](DListDataSelection.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DListDataImplSelection`](DListDataImplSelection.md)<`ITEM`\>

`this`.

#### Inherited from

[DListDataSelection](DListDataSelection.md).[removeListener](DListDataSelection.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

Returns the number of selected items.

#### Returns

`number`

the number of selected items

#### Inherited from

[DListDataSelection](DListDataSelection.md).[size](DListDataSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L128)

___

### toArray

▸ **toArray**(): `ITEM`[]

Returns an array of selected items.

#### Returns

`ITEM`[]

#### Inherited from

[DListDataSelection](DListDataSelection.md).[toArray](DListDataSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L147)

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

#### Inherited from

[DListDataSelection](DListDataSelection.md).[toggle](DListDataSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L92)
