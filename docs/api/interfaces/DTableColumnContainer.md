[Winter Cardinal UI - v0.442.0](../index.md) / DTableColumnContainer

# Interface: DTableColumnContainer\<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `unknown` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableColumnContainer`**

## Implemented by

- [`DTableColumnContainerImpl`](../classes/DTableColumnContainerImpl.md)

## Table of contents

### Properties

- [frozen](DTableColumnContainer.md#frozen)
- [items](DTableColumnContainer.md#items)
- [width](DTableColumnContainer.md#width)

### Methods

- [addListener](DTableColumnContainer.md#addlistener)
- [each](DTableColumnContainer.md#each)
- [emit](DTableColumnContainer.md#emit)
- [eventNames](DTableColumnContainer.md#eventnames)
- [get](DTableColumnContainer.md#get)
- [listenerCount](DTableColumnContainer.md#listenercount)
- [listeners](DTableColumnContainer.md#listeners)
- [off](DTableColumnContainer.md#off)
- [on](DTableColumnContainer.md#on)
- [once](DTableColumnContainer.md#once)
- [removeAllListeners](DTableColumnContainer.md#removealllisteners)
- [removeListener](DTableColumnContainer.md#removelistener)
- [size](DTableColumnContainer.md#size)

## Properties

### frozen

• `Readonly` **frozen**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-container.ts#L22)

___

### items

• `Readonly` **items**: [`DTableColumn`](DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-container.ts#L23)

___

### width

• `Readonly` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-container.ts#L24)

## Methods

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

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### each

▸ **each**(`iteratee`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | [`DTableColumnIteratee`](../index.md#dtablecolumniteratee)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-container.ts#L27)

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

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### get

▸ **get**(`index`): ``null`` \| [`DTableColumn`](DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DTableColumn`](DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-container.ts#L26)

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

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

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

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

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

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-container.ts#L28)
