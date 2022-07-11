[Winter Cardinal UI - v0.199.0](../index.md) / DControllerCommand

# Interface: DControllerCommand

## Hierarchy

- `EventEmitter`

  ↳ **`DControllerCommand`**

## Implemented by

- [`DControllerDefaultCommand`](../classes/DControllerDefaultCommand.md)

## Table of contents

### Methods

- [addListener](DControllerCommand.md#addlistener)
- [clear](DControllerCommand.md#clear)
- [emit](DControllerCommand.md#emit)
- [eventNames](DControllerCommand.md#eventnames)
- [isRedoable](DControllerCommand.md#isredoable)
- [isUndoable](DControllerCommand.md#isundoable)
- [last](DControllerCommand.md#last)
- [listenerCount](DControllerCommand.md#listenercount)
- [listeners](DControllerCommand.md#listeners)
- [off](DControllerCommand.md#off)
- [on](DControllerCommand.md#on)
- [once](DControllerCommand.md#once)
- [push](DControllerCommand.md#push)
- [redo](DControllerCommand.md#redo)
- [removeAllListeners](DControllerCommand.md#removealllisteners)
- [removeListener](DControllerCommand.md#removelistener)
- [size](DControllerCommand.md#size)
- [undo](DControllerCommand.md#undo)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DControllerCommand`](DControllerCommand.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DControllerCommand`](DControllerCommand.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-controller-command.ts#L15)

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

### isRedoable

▸ **isRedoable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-controller-command.ts#L20)

___

### isUndoable

▸ **isUndoable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-controller-command.ts#L21)

___

### last

▸ **last**(): ``null`` \| [`DCommand`](DCommand.md)

#### Returns

``null`` \| [`DCommand`](DCommand.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-controller-command.ts#L12)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DControllerCommand`](DControllerCommand.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DControllerCommand`](DControllerCommand.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DControllerCommand`](DControllerCommand.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DControllerCommand`](DControllerCommand.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DControllerCommand`](DControllerCommand.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DControllerCommand`](DControllerCommand.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### push

▸ **push**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-controller-command.ts#L10)

___

### redo

▸ **redo**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-controller-command.ts#L17)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DControllerCommand`](DControllerCommand.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DControllerCommand`](DControllerCommand.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DControllerCommand`](DControllerCommand.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DControllerCommand`](DControllerCommand.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-controller-command.ts#L14)

___

### undo

▸ **undo**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-controller-command.ts#L18)
