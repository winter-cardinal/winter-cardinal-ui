[Winter Cardinal UI - v0.457.0](../index.md) / DTableCategoryColumn

# Interface: DTableCategoryColumn

## Hierarchy

- `EventEmitter`

  ↳ **`DTableCategoryColumn`**

## Implemented by

- [`DTableCategoryColumnImpl`](../classes/DTableCategoryColumnImpl.md)

## Table of contents

### Properties

- [label](DTableCategoryColumn.md#label)
- [minWeight](DTableCategoryColumn.md#minweight)
- [minWidth](DTableCategoryColumn.md#minwidth)
- [offset](DTableCategoryColumn.md#offset)
- [resizable](DTableCategoryColumn.md#resizable)
- [weight](DTableCategoryColumn.md#weight)
- [width](DTableCategoryColumn.md#width)

### Methods

- [addListener](DTableCategoryColumn.md#addlistener)
- [emit](DTableCategoryColumn.md#emit)
- [eventNames](DTableCategoryColumn.md#eventnames)
- [listenerCount](DTableCategoryColumn.md#listenercount)
- [listeners](DTableCategoryColumn.md#listeners)
- [off](DTableCategoryColumn.md#off)
- [on](DTableCategoryColumn.md#on)
- [once](DTableCategoryColumn.md#once)
- [removeAllListeners](DTableCategoryColumn.md#removealllisteners)
- [removeListener](DTableCategoryColumn.md#removelistener)

## Properties

### label

• `Optional` `Readonly` **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column.ts#L9)

___

### minWeight

• `Readonly` **minWeight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column.ts#L11)

___

### minWidth

• `Readonly` **minWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column.ts#L13)

___

### offset

• **offset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column.ts#L14)

___

### resizable

• `Readonly` **resizable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column.ts#L15)

___

### weight

• `Optional` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column.ts#L10)

___

### width

• `Optional` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column.ts#L12)

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
