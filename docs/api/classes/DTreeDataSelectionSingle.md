[Winter Cardinal UI - v0.414.0](../index.md) / DTreeDataSelectionSingle

# Class: DTreeDataSelectionSingle\<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`DTreeDataSelectionSingle`**

## Implements

- [`DTreeDataSelection`](../interfaces/DTreeDataSelection.md)\<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTreeDataSelectionSingle.md#constructor)

### Properties

- [\_node](DTreeDataSelectionSingle.md#_node)
- [\_parent](DTreeDataSelectionSingle.md#_parent)

### Accessors

- [first](DTreeDataSelectionSingle.md#first)
- [last](DTreeDataSelectionSingle.md#last)
- [type](DTreeDataSelectionSingle.md#type)

### Methods

- [add](DTreeDataSelectionSingle.md#add)
- [addListener](DTreeDataSelectionSingle.md#addlistener)
- [clear](DTreeDataSelectionSingle.md#clear)
- [clearAndAdd](DTreeDataSelectionSingle.md#clearandadd)
- [clearAndAddAll](DTreeDataSelectionSingle.md#clearandaddall)
- [contains](DTreeDataSelectionSingle.md#contains)
- [each](DTreeDataSelectionSingle.md#each)
- [emit](DTreeDataSelectionSingle.md#emit)
- [eventNames](DTreeDataSelectionSingle.md#eventnames)
- [get](DTreeDataSelectionSingle.md#get)
- [isEmpty](DTreeDataSelectionSingle.md#isempty)
- [listenerCount](DTreeDataSelectionSingle.md#listenercount)
- [listeners](DTreeDataSelectionSingle.md#listeners)
- [newNode](DTreeDataSelectionSingle.md#newnode)
- [off](DTreeDataSelectionSingle.md#off)
- [on](DTreeDataSelectionSingle.md#on)
- [onChange](DTreeDataSelectionSingle.md#onchange)
- [onNodeChange](DTreeDataSelectionSingle.md#onnodechange)
- [once](DTreeDataSelectionSingle.md#once)
- [remove](DTreeDataSelectionSingle.md#remove)
- [removeAllListeners](DTreeDataSelectionSingle.md#removealllisteners)
- [removeListener](DTreeDataSelectionSingle.md#removelistener)
- [size](DTreeDataSelectionSingle.md#size)
- [toArray](DTreeDataSelectionSingle.md#toarray)
- [toggle](DTreeDataSelectionSingle.md#toggle)

## Constructors

### constructor

• **new DTreeDataSelectionSingle**\<`NODE`\>(`parent`, `options?`): [`DTreeDataSelectionSingle`](DTreeDataSelectionSingle.md)\<`NODE`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTreeDataSelectionParent`](../interfaces/DTreeDataSelectionParent.md)\<`NODE`\> |
| `options?` | [`DTreeDataSelectionOptions`](../interfaces/DTreeDataSelectionOptions.md)\<`NODE`, `any`\> |

#### Returns

[`DTreeDataSelectionSingle`](DTreeDataSelectionSingle.md)\<`NODE`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L22)

## Properties

### \_node

• `Protected` **\_node**: ``null`` \| `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L20)

___

### \_parent

• `Protected` **\_parent**: [`DTreeDataSelectionParent`](../interfaces/DTreeDataSelectionParent.md)\<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L19)

## Accessors

### first

• `get` **first**(): ``null`` \| `NODE`

A first selected node or null.

#### Returns

``null`` \| `NODE`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[first](../interfaces/DTreeDataSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L43)

___

### last

• `get` **last**(): ``null`` \| `NODE`

A last selected node or null.

#### Returns

``null`` \| `NODE`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[last](../interfaces/DTreeDataSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L47)

___

### type

• `get` **type**(): [`DTreeDataSelectionType`](../index.md#dtreedataselectiontype)

A type.

#### Returns

[`DTreeDataSelectionType`](../index.md#dtreedataselectiontype)

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[type](../interfaces/DTreeDataSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L39)

## Methods

### add

▸ **add**(`target`): `boolean`

Adds the given node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node |

#### Returns

`boolean`

true if succeeded.

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[add](../interfaces/DTreeDataSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L58)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[addListener](../interfaces/DTreeDataSelection.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### clear

▸ **clear**(): `boolean`

Clears all the nodes.

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[clear](../interfaces/DTreeDataSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L86)

___

### clearAndAdd

▸ **clearAndAdd**(`target`): `boolean`

Clears all the exisint nodes and adds the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be added |

#### Returns

`boolean`

true if the selection is changed

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[clearAndAdd](../interfaces/DTreeDataSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L95)

___

### clearAndAddAll

▸ **clearAndAddAll**(`targets`): `boolean`

Clears the exising nodes and add all the given nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targets` | `NODE`[] | nodes to be added |

#### Returns

`boolean`

true if the selection is changed

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[clearAndAddAll](../interfaces/DTreeDataSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L105)

___

### contains

▸ **contains**(`target`): `boolean`

Returns true if the given node is selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be checked |

#### Returns

`boolean`

true if the given node is selected

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[contains](../interfaces/DTreeDataSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L114)

___

### each

▸ **each**(`iteratee`): `void`

Iterates over selected nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | (`node`: `NODE`) => `boolean` \| `void` | an iteratee |

#### Returns

`void`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[each](../interfaces/DTreeDataSelection.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L126)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[emit](../interfaces/DTreeDataSelection.md#emit)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[eventNames](../interfaces/DTreeDataSelection.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### get

▸ **get**(`index`): ``null`` \| `NODE`

Returns a node at the given index or null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index |

#### Returns

``null`` \| `NODE`

a node at the given index or null

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[get](../interfaces/DTreeDataSelection.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L51)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the selection is empty.

#### Returns

`boolean`

true if the selection is empty

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[isEmpty](../interfaces/DTreeDataSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L122)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[listenerCount](../interfaces/DTreeDataSelection.md#listenercount)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[listeners](../interfaces/DTreeDataSelection.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newNode

▸ **newNode**(`items`, `existing`): ``null`` \| `NODE`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `NODE`[] |
| `existing` | ``null`` \| `NODE` |

#### Returns

``null`` \| `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L157)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[off](../interfaces/DTreeDataSelection.md#off)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[on](../interfaces/DTreeDataSelection.md#on)

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

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L141)

___

### onNodeChange

▸ **onNodeChange**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NODE`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L146)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[once](../interfaces/DTreeDataSelection.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### remove

▸ **remove**(`target`): `boolean`

Removes the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node |

#### Returns

`boolean`

true if succeeded

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[remove](../interfaces/DTreeDataSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L67)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[removeAllListeners](../interfaces/DTreeDataSelection.md#removealllisteners)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[removeListener](../interfaces/DTreeDataSelection.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### size

▸ **size**(): `number`

Returns the number of selected nodes.

#### Returns

`number`

the number of selected nodes

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[size](../interfaces/DTreeDataSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L118)

___

### toArray

▸ **toArray**(): `NODE`[]

Returns an array of selected nodes.

#### Returns

`NODE`[]

an array of selected nodes.

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[toArray](../interfaces/DTreeDataSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L133)

___

### toggle

▸ **toggle**(`target`): `boolean`

Toggles the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node |

#### Returns

`boolean`

true if succeeded.

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[toggle](../interfaces/DTreeDataSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-single.ts#L76)
