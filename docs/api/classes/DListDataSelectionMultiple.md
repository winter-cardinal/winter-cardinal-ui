[Winter Cardinal UI - v0.160.0](../index.md) / DListDataSelectionMultiple

# Class: DListDataSelectionMultiple<ITEM\>

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Hierarchy

- `EventEmitter`

  ↳ **`DListDataSelectionMultiple`**

## Implements

- [`DListDataSelection`](../interfaces/DListDataSelection.md)<`ITEM`\>

## Table of contents

### Constructors

- [constructor](DListDataSelectionMultiple.md#constructor)

### Properties

- [\_accessor](DListDataSelectionMultiple.md#_accessor)
- [\_items](DListDataSelectionMultiple.md#_items)
- [\_parent](DListDataSelectionMultiple.md#_parent)

### Accessors

- [first](DListDataSelectionMultiple.md#first)
- [last](DListDataSelectionMultiple.md#last)
- [type](DListDataSelectionMultiple.md#type)

### Methods

- [add](DListDataSelectionMultiple.md#add)
- [addListener](DListDataSelectionMultiple.md#addlistener)
- [clear](DListDataSelectionMultiple.md#clear)
- [clearAndAdd](DListDataSelectionMultiple.md#clearandadd)
- [clearAndAddAll](DListDataSelectionMultiple.md#clearandaddall)
- [contains](DListDataSelectionMultiple.md#contains)
- [each](DListDataSelectionMultiple.md#each)
- [emit](DListDataSelectionMultiple.md#emit)
- [eventNames](DListDataSelectionMultiple.md#eventnames)
- [get](DListDataSelectionMultiple.md#get)
- [isEmpty](DListDataSelectionMultiple.md#isempty)
- [listenerCount](DListDataSelectionMultiple.md#listenercount)
- [listeners](DListDataSelectionMultiple.md#listeners)
- [newItems](DListDataSelectionMultiple.md#newitems)
- [off](DListDataSelectionMultiple.md#off)
- [on](DListDataSelectionMultiple.md#on)
- [onChange](DListDataSelectionMultiple.md#onchange)
- [onItemChange](DListDataSelectionMultiple.md#onitemchange)
- [once](DListDataSelectionMultiple.md#once)
- [remove](DListDataSelectionMultiple.md#remove)
- [removeAllListeners](DListDataSelectionMultiple.md#removealllisteners)
- [removeListener](DListDataSelectionMultiple.md#removelistener)
- [size](DListDataSelectionMultiple.md#size)
- [toArray](DListDataSelectionMultiple.md#toarray)
- [toItemIdMap](DListDataSelectionMultiple.md#toitemidmap)
- [toItemSet](DListDataSelectionMultiple.md#toitemset)
- [toggle](DListDataSelectionMultiple.md#toggle)

## Constructors

### constructor

• **new DListDataSelectionMultiple**<`ITEM`\>(`parent`, `accessor`, `options?`)

#### Type parameters

| Name |
| :------ |
| `ITEM` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DListDataSelectionParent`](../interfaces/DListDataSelectionParent.md)<`ITEM`\> |
| `accessor` | [`DListItemAccessor`](../interfaces/DListItemAccessor.md)<`ITEM`\> |
| `options?` | [`DListDataSelectionOptions`](../interfaces/DListDataSelectionOptions.md)<`ITEM`, `any`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L23)

## Properties

### \_accessor

• `Protected` **\_accessor**: [`DListItemAccessor`](../interfaces/DListItemAccessor.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L20)

___

### \_items

• `Protected` **\_items**: `Set`<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L21)

___

### \_parent

• `Protected` **\_parent**: [`DListDataSelectionParent`](../interfaces/DListDataSelectionParent.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L19)

## Accessors

### first

• `get` **first**(): ``null`` \| `ITEM`

#### Returns

``null`` \| `ITEM`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[first](../interfaces/DListDataSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L50)

___

### last

• `get` **last**(): ``null`` \| `ITEM`

#### Returns

``null`` \| `ITEM`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[last](../interfaces/DListDataSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L54)

___

### type

• `get` **type**(): [`DListDataSelectionType`](../index.md#dlistdataselectiontype)

#### Returns

[`DListDataSelectionType`](../index.md#dlistdataselectiontype)

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[type](../interfaces/DListDataSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L46)

## Methods

### add

▸ **add**(`target`): `boolean`

Adds the given item

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ITEM` |

#### Returns

`boolean`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[add](../interfaces/DListDataSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L74)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[addListener](../interfaces/DListDataSelection.md#addlistener)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[clear](../interfaces/DListDataSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L105)

___

### clearAndAdd

▸ **clearAndAdd**(`target`): `boolean`

Clears all the existing items and adds the given item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ITEM` |

#### Returns

`boolean`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[clearAndAdd](../interfaces/DListDataSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L113)

___

### clearAndAddAll

▸ **clearAndAddAll**(`targets`): `boolean`

Clears the existing items and add all the given items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `targets` | `ITEM`[] |

#### Returns

`boolean`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[clearAndAddAll](../interfaces/DListDataSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L133)

___

### contains

▸ **contains**(`target`): `boolean`

Returns true if the given item is selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ITEM` |

#### Returns

`boolean`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[contains](../interfaces/DListDataSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L158)

___

### each

▸ **each**(`iteratee`): `void`

Iterates over selected items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`item`: `ITEM`) => `boolean` \| `void` |

#### Returns

`void`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[each](../interfaces/DListDataSelection.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L170)

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

[DListDataSelection](../interfaces/DListDataSelection.md).[emit](../interfaces/DListDataSelection.md#emit)

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

[DListDataSelection](../interfaces/DListDataSelection.md).[eventNames](../interfaces/DListDataSelection.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### get

▸ **get**(`index`): ``null`` \| `ITEM`

Returns an item at the given index or null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `ITEM`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[get](../interfaces/DListDataSelection.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L58)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the selection is empty.

#### Returns

`boolean`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[isEmpty](../interfaces/DListDataSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L166)

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

[DListDataSelection](../interfaces/DListDataSelection.md).[listenerCount](../interfaces/DListDataSelection.md#listenercount)

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

[DListDataSelection](../interfaces/DListDataSelection.md).[listeners](../interfaces/DListDataSelection.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newItems

▸ `Protected` **newItems**(`items`, `existing`, `result`): `Set`<`ITEM`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `ITEM`[] |
| `existing` | `Set`<`ITEM`\> |
| `result` | `Set`<`ITEM`\> |

#### Returns

`Set`<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L246)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[off](../interfaces/DListDataSelection.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

`this`.

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[on](../interfaces/DListDataSelection.md#on)

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

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L189)

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

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L211)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

`this`.

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[once](../interfaces/DListDataSelection.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### remove

▸ **remove**(`target`): `boolean`

Removes the given item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ITEM` |

#### Returns

`boolean`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[remove](../interfaces/DListDataSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L84)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

`this`.

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[removeAllListeners](../interfaces/DListDataSelection.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DListDataSelectionMultiple`](DListDataSelectionMultiple.md)<`ITEM`\>

`this`.

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[removeListener](../interfaces/DListDataSelection.md#removelistener)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[size](../interfaces/DListDataSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L162)

___

### toArray

▸ **toArray**(): `ITEM`[]

Returns an array of selected items.

#### Returns

`ITEM`[]

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[toArray](../interfaces/DListDataSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L181)

___

### toItemIdMap

▸ `Protected` **toItemIdMap**(`items`, `toId`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `ITEM`[] |
| `toId` | [`DListItemToId`](../index.md#dlistitemtoid)<`ITEM`\> |
| `result` | `Map`<`unknown`, `ITEM`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L194)

___

### toItemSet

▸ `Protected` **toItemSet**(`items`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `ITEM`[] |
| `result` | `Set`<`ITEM`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L205)

___

### toggle

▸ **toggle**(`target`): `boolean`

Toggles the given item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ITEM` |

#### Returns

`boolean`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[toggle](../interfaces/DListDataSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-list-data-selection-multiple.ts#L94)
