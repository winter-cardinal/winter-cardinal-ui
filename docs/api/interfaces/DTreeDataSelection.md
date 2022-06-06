[Winter Cardinal UI - v0.179.0](../index.md) / DTreeDataSelection

# Interface: DTreeDataSelection<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`DTreeDataSelection`**

  ↳↳ [`DTreeDataImplSelection`](DTreeDataImplSelection.md)

## Implemented by

- [`DTreeDataSelectionMultiple`](../classes/DTreeDataSelectionMultiple.md)
- [`DTreeDataSelectionNone`](../classes/DTreeDataSelectionNone.md)
- [`DTreeDataSelectionSingle`](../classes/DTreeDataSelectionSingle.md)

## Table of contents

### Properties

- [first](DTreeDataSelection.md#first)
- [last](DTreeDataSelection.md#last)
- [type](DTreeDataSelection.md#type)

### Methods

- [add](DTreeDataSelection.md#add)
- [addListener](DTreeDataSelection.md#addlistener)
- [clear](DTreeDataSelection.md#clear)
- [clearAndAdd](DTreeDataSelection.md#clearandadd)
- [clearAndAddAll](DTreeDataSelection.md#clearandaddall)
- [contains](DTreeDataSelection.md#contains)
- [each](DTreeDataSelection.md#each)
- [emit](DTreeDataSelection.md#emit)
- [eventNames](DTreeDataSelection.md#eventnames)
- [get](DTreeDataSelection.md#get)
- [isEmpty](DTreeDataSelection.md#isempty)
- [listenerCount](DTreeDataSelection.md#listenercount)
- [listeners](DTreeDataSelection.md#listeners)
- [off](DTreeDataSelection.md#off)
- [on](DTreeDataSelection.md#on)
- [once](DTreeDataSelection.md#once)
- [remove](DTreeDataSelection.md#remove)
- [removeAllListeners](DTreeDataSelection.md#removealllisteners)
- [removeListener](DTreeDataSelection.md#removelistener)
- [size](DTreeDataSelection.md#size)
- [toArray](DTreeDataSelection.md#toarray)
- [toggle](DTreeDataSelection.md#toggle)

## Properties

### first

• `Readonly` **first**: ``null`` \| `NODE`

A first selected node or null.

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L62)

___

### last

• `Readonly` **last**: ``null`` \| `NODE`

A last selected node or null.

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L67)

___

### type

• `Readonly` **type**: [`DTreeDataSelectionType`](../index.md#dtreedataselectiontype)

A type.

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L57)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L83)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L104)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L112)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L120)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L128)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L149)

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

▸ **get**(`index`): ``null`` \| `NODE`

Returns a node at the given index or null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index |

#### Returns

``null`` \| `NODE`

a node at the given index or null

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L75)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the selection is empty.

#### Returns

`boolean`

true if the selection is empty

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L142)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L91)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

`this`.

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

the number of selected nodes

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L135)

___

### toArray

▸ **toArray**(): `NODE`[]

Returns an array of selected nodes.

#### Returns

`NODE`[]

an array of selected nodes.

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L156)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L99)
