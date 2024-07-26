[Winter Cardinal UI - v0.442.0](../index.md) / DTableCellEdgeCell

# Interface: DTableCellEdgeCell

## Hierarchy

- [`DApplicationTarget`](DApplicationTarget.md)

- `EventEmitter`

  ↳ **`DTableCellEdgeCell`**

## Table of contents

### Properties

- [column](DTableCellEdgeCell.md#column)
- [columnIndex](DTableCellEdgeCell.md#columnindex)
- [cursor](DTableCellEdgeCell.md#cursor)
- [parent](DTableCellEdgeCell.md#parent)
- [state](DTableCellEdgeCell.md#state)
- [weight](DTableCellEdgeCell.md#weight)
- [width](DTableCellEdgeCell.md#width)

### Methods

- [addListener](DTableCellEdgeCell.md#addlistener)
- [emit](DTableCellEdgeCell.md#emit)
- [eventNames](DTableCellEdgeCell.md#eventnames)
- [listenerCount](DTableCellEdgeCell.md#listenercount)
- [listeners](DTableCellEdgeCell.md#listeners)
- [off](DTableCellEdgeCell.md#off)
- [on](DTableCellEdgeCell.md#on)
- [once](DTableCellEdgeCell.md#once)
- [removeAllListeners](DTableCellEdgeCell.md#removealllisteners)
- [removeListener](DTableCellEdgeCell.md#removelistener)
- [toLocal](DTableCellEdgeCell.md#tolocal)

## Properties

### column

• `Readonly` **column**: [`DTableCellEdgeColumn`](DTableCellEdgeColumn.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L56)

___

### columnIndex

• `Readonly` **columnIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L57)

___

### cursor

• `Readonly` **cursor**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L58)

___

### parent

• `Optional` **parent**: ``null`` \| [`DApplicationTarget`](DApplicationTarget.md)

#### Inherited from

[DApplicationTarget](DApplicationTarget.md).[parent](DApplicationTarget.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L11)

___

### state

• `Readonly` **state**: [`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L55)

___

### weight

• `Readonly` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L60)

___

### width

• `Readonly` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L59)

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

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPointData` |
| `from?` | `DisplayObject` |
| `point?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L62)
