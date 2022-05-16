[Winter Cardinal UI - v0.165.0](../index.md) / DTreeDataSelectionNone

# Class: DTreeDataSelectionNone<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`DTreeDataSelectionNone`**

## Implements

- [`DTreeDataSelection`](../interfaces/DTreeDataSelection.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTreeDataSelectionNone.md#constructor)

### Properties

- [\_parent](DTreeDataSelectionNone.md#_parent)

### Accessors

- [first](DTreeDataSelectionNone.md#first)
- [last](DTreeDataSelectionNone.md#last)
- [type](DTreeDataSelectionNone.md#type)

### Methods

- [add](DTreeDataSelectionNone.md#add)
- [addListener](DTreeDataSelectionNone.md#addlistener)
- [clear](DTreeDataSelectionNone.md#clear)
- [clearAndAdd](DTreeDataSelectionNone.md#clearandadd)
- [clearAndAddAll](DTreeDataSelectionNone.md#clearandaddall)
- [contains](DTreeDataSelectionNone.md#contains)
- [each](DTreeDataSelectionNone.md#each)
- [emit](DTreeDataSelectionNone.md#emit)
- [eventNames](DTreeDataSelectionNone.md#eventnames)
- [get](DTreeDataSelectionNone.md#get)
- [isEmpty](DTreeDataSelectionNone.md#isempty)
- [listenerCount](DTreeDataSelectionNone.md#listenercount)
- [listeners](DTreeDataSelectionNone.md#listeners)
- [off](DTreeDataSelectionNone.md#off)
- [on](DTreeDataSelectionNone.md#on)
- [onNodeChange](DTreeDataSelectionNone.md#onnodechange)
- [once](DTreeDataSelectionNone.md#once)
- [remove](DTreeDataSelectionNone.md#remove)
- [removeAllListeners](DTreeDataSelectionNone.md#removealllisteners)
- [removeListener](DTreeDataSelectionNone.md#removelistener)
- [size](DTreeDataSelectionNone.md#size)
- [toArray](DTreeDataSelectionNone.md#toarray)
- [toggle](DTreeDataSelectionNone.md#toggle)

## Constructors

### constructor

• **new DTreeDataSelectionNone**<`NODE`\>(`parent`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTreeDataSelectionParent`](../interfaces/DTreeDataSelectionParent.md)<`NODE`\> |
| `options?` | [`DTreeDataSelectionOptions`](../interfaces/DTreeDataSelectionOptions.md)<`NODE`, `any`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L21)

## Properties

### \_parent

• `Protected` **\_parent**: [`DTreeDataSelectionParent`](../interfaces/DTreeDataSelectionParent.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L19)

## Accessors

### first

• `get` **first**(): ``null`` \| `NODE`

A first selected node or null.

#### Returns

``null`` \| `NODE`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[first](../interfaces/DTreeDataSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L41)

___

### last

• `get` **last**(): ``null`` \| `NODE`

A last selected node or null.

#### Returns

``null`` \| `NODE`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[last](../interfaces/DTreeDataSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L45)

___

### type

• `get` **type**(): [`DTreeDataSelectionType`](../index.md#dtreedataselectiontype)

A type.

#### Returns

[`DTreeDataSelectionType`](../index.md#dtreedataselectiontype)

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[type](../interfaces/DTreeDataSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L37)

## Methods

### add

▸ **add**(`target`): `boolean`

Adds the given node

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[add](../interfaces/DTreeDataSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L53)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[addListener](../interfaces/DTreeDataSelection.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### clear

▸ **clear**(): `boolean`

Clears all the nodes.

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[clear](../interfaces/DTreeDataSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L65)

___

### clearAndAdd

▸ **clearAndAdd**(`target`): `boolean`

Clears all the exisint nodes and adds the given node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[clearAndAdd](../interfaces/DTreeDataSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L69)

___

### clearAndAddAll

▸ **clearAndAddAll**(`targets`): `boolean`

Clears the exising nodes and add all the given nodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `targets` | `NODE`[] |

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[clearAndAddAll](../interfaces/DTreeDataSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L73)

___

### contains

▸ **contains**(`target`): `boolean`

Returns true if the given node is selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[contains](../interfaces/DTreeDataSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L77)

___

### each

▸ **each**(`iteratee`): `void`

Iterates over selected nodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`node`: `NODE`) => `boolean` \| `void` |

#### Returns

`void`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[each](../interfaces/DTreeDataSelection.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L89)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[emit](../interfaces/DTreeDataSelection.md#emit)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[eventNames](../interfaces/DTreeDataSelection.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### get

▸ **get**(`index`): ``null`` \| `NODE`

Returns a node at the given index or null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `NODE`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[get](../interfaces/DTreeDataSelection.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L49)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the selection is empty.

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[isEmpty](../interfaces/DTreeDataSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L85)

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

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[listeners](../interfaces/DTreeDataSelection.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[off](../interfaces/DTreeDataSelection.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

`this`.

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[on](../interfaces/DTreeDataSelection.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

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

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L97)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

`this`.

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[once](../interfaces/DTreeDataSelection.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### remove

▸ **remove**(`target`): `boolean`

Removes the given node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[remove](../interfaces/DTreeDataSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L57)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

`this`.

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[removeAllListeners](../interfaces/DTreeDataSelection.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTreeDataSelectionNone`](DTreeDataSelectionNone.md)<`NODE`\>

`this`.

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[removeListener](../interfaces/DTreeDataSelection.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

Returns the number of selected nodes.

#### Returns

`number`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[size](../interfaces/DTreeDataSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L81)

___

### toArray

▸ **toArray**(): `NODE`[]

Returns an array of selected nodes.

#### Returns

`NODE`[]

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[toArray](../interfaces/DTreeDataSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L93)

___

### toggle

▸ **toggle**(`target`): `boolean`

Toggles the given node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NODE` |

#### Returns

`boolean`

#### Implementation of

[DTreeDataSelection](../interfaces/DTreeDataSelection.md).[toggle](../interfaces/DTreeDataSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-data-selection-none.ts#L61)
