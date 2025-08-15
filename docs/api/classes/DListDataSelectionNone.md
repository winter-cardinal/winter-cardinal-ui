[Winter Cardinal UI - v0.457.0](../index.md) / DListDataSelectionNone

# Class: DListDataSelectionNone\<ITEM\>

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Hierarchy

- `EventEmitter`

  ↳ **`DListDataSelectionNone`**

## Implements

- [`DListDataSelection`](../interfaces/DListDataSelection.md)\<`ITEM`\>

## Table of contents

### Constructors

- [constructor](DListDataSelectionNone.md#constructor)

### Properties

- [\_parent](DListDataSelectionNone.md#_parent)

### Accessors

- [first](DListDataSelectionNone.md#first)
- [last](DListDataSelectionNone.md#last)
- [type](DListDataSelectionNone.md#type)

### Methods

- [add](DListDataSelectionNone.md#add)
- [addListener](DListDataSelectionNone.md#addlistener)
- [clear](DListDataSelectionNone.md#clear)
- [clearAndAdd](DListDataSelectionNone.md#clearandadd)
- [clearAndAddAll](DListDataSelectionNone.md#clearandaddall)
- [contains](DListDataSelectionNone.md#contains)
- [each](DListDataSelectionNone.md#each)
- [emit](DListDataSelectionNone.md#emit)
- [eventNames](DListDataSelectionNone.md#eventnames)
- [get](DListDataSelectionNone.md#get)
- [isEmpty](DListDataSelectionNone.md#isempty)
- [listenerCount](DListDataSelectionNone.md#listenercount)
- [listeners](DListDataSelectionNone.md#listeners)
- [off](DListDataSelectionNone.md#off)
- [on](DListDataSelectionNone.md#on)
- [onChange](DListDataSelectionNone.md#onchange)
- [onItemChange](DListDataSelectionNone.md#onitemchange)
- [once](DListDataSelectionNone.md#once)
- [remove](DListDataSelectionNone.md#remove)
- [removeAllListeners](DListDataSelectionNone.md#removealllisteners)
- [removeListener](DListDataSelectionNone.md#removelistener)
- [size](DListDataSelectionNone.md#size)
- [toArray](DListDataSelectionNone.md#toarray)
- [toggle](DListDataSelectionNone.md#toggle)

## Constructors

### constructor

• **new DListDataSelectionNone**\<`ITEM`\>(`parent`, `accessor`, `options?`): [`DListDataSelectionNone`](DListDataSelectionNone.md)\<`ITEM`\>

#### Type parameters

| Name |
| :------ |
| `ITEM` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DListDataSelectionParent`](../interfaces/DListDataSelectionParent.md)\<`ITEM`\> |
| `accessor` | [`DListItemAccessor`](../interfaces/DListItemAccessor.md)\<`ITEM`\> |
| `options?` | [`DListDataSelectionOptions`](../interfaces/DListDataSelectionOptions.md)\<`ITEM`, `any`\> |

#### Returns

[`DListDataSelectionNone`](DListDataSelectionNone.md)\<`ITEM`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L21)

## Properties

### \_parent

• `Protected` **\_parent**: [`DListDataSelectionParent`](../interfaces/DListDataSelectionParent.md)\<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L19)

## Accessors

### first

• `get` **first**(): ``null`` \| `ITEM`

#### Returns

``null`` \| `ITEM`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[first](../interfaces/DListDataSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L46)

___

### last

• `get` **last**(): ``null`` \| `ITEM`

#### Returns

``null`` \| `ITEM`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[last](../interfaces/DListDataSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L50)

___

### type

• `get` **type**(): [`DListDataSelectionType`](../index.md#dlistdataselectiontype)

#### Returns

[`DListDataSelectionType`](../index.md#dlistdataselectiontype)

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[type](../interfaces/DListDataSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L42)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[add](../interfaces/DListDataSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L58)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): `this`

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[addListener](../interfaces/DListDataSelection.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### clear

▸ **clear**(): `void`

Clears all the items.

#### Returns

`void`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[clear](../interfaces/DListDataSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L70)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[clearAndAdd](../interfaces/DListDataSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L74)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[clearAndAddAll](../interfaces/DListDataSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L78)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[contains](../interfaces/DListDataSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L82)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[each](../interfaces/DListDataSelection.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L94)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[emit](../interfaces/DListDataSelection.md#emit)

#### Inherited from

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

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

node_modules/pixi.js/pixi.js.d.ts:25415

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[get](../interfaces/DListDataSelection.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L54)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the selection is empty.

#### Returns

`boolean`

true if the selection is empty

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[isEmpty](../interfaces/DListDataSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L90)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[listeners](../interfaces/DListDataSelection.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): `this`

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

`this`

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[off](../interfaces/DListDataSelection.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): `this`

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

`this`

`this`.

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[on](../interfaces/DListDataSelection.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L102)

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

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L107)

___

### once

▸ **once**(`event`, `fn`, `context?`): `this`

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

`this`

`this`.

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[once](../interfaces/DListDataSelection.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[remove](../interfaces/DListDataSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L62)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

`this`

`this`.

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[removeAllListeners](../interfaces/DListDataSelection.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): `this`

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

`this`

`this`.

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[removeListener](../interfaces/DListDataSelection.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### size

▸ **size**(): `number`

Returns the number of selected items.

#### Returns

`number`

the number of selected items

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[size](../interfaces/DListDataSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L86)

___

### toArray

▸ **toArray**(): `ITEM`[]

Returns an array of selected items.

#### Returns

`ITEM`[]

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[toArray](../interfaces/DListDataSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L98)

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

#### Implementation of

[DListDataSelection](../interfaces/DListDataSelection.md).[toggle](../interfaces/DListDataSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-list-data-selection-none.ts#L66)
