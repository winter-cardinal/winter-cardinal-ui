[Winter Cardinal UI - v0.442.0](../index.md) / DControllerCommandImpl

# Class: DControllerCommandImpl

## Hierarchy

- `EventEmitter`

  ↳ **`DControllerCommandImpl`**

## Implements

- [`DControllerCommand`](../interfaces/DControllerCommand.md)

## Table of contents

### Constructors

- [constructor](DControllerCommandImpl.md#constructor)

### Properties

- [\_done](DControllerCommandImpl.md#_done)
- [\_position](DControllerCommandImpl.md#_position)

### Methods

- [addListener](DControllerCommandImpl.md#addlistener)
- [cleanup](DControllerCommandImpl.md#cleanup)
- [clear](DControllerCommandImpl.md#clear)
- [doRedo](DControllerCommandImpl.md#doredo)
- [doUndo](DControllerCommandImpl.md#doundo)
- [emit](DControllerCommandImpl.md#emit)
- [eventNames](DControllerCommandImpl.md#eventnames)
- [execute](DControllerCommandImpl.md#execute)
- [isRedoable](DControllerCommandImpl.md#isredoable)
- [isUndoable](DControllerCommandImpl.md#isundoable)
- [last](DControllerCommandImpl.md#last)
- [listenerCount](DControllerCommandImpl.md#listenercount)
- [listeners](DControllerCommandImpl.md#listeners)
- [merge](DControllerCommandImpl.md#merge)
- [off](DControllerCommandImpl.md#off)
- [on](DControllerCommandImpl.md#on)
- [onFail](DControllerCommandImpl.md#onfail)
- [onRedoFail](DControllerCommandImpl.md#onredofail)
- [onRedoSuccess](DControllerCommandImpl.md#onredosuccess)
- [onSuccess](DControllerCommandImpl.md#onsuccess)
- [onUndoFail](DControllerCommandImpl.md#onundofail)
- [onUndoSuccess](DControllerCommandImpl.md#onundosuccess)
- [once](DControllerCommandImpl.md#once)
- [push](DControllerCommandImpl.md#push)
- [redo](DControllerCommandImpl.md#redo)
- [remove](DControllerCommandImpl.md#remove)
- [removeAllListeners](DControllerCommandImpl.md#removealllisteners)
- [removeListener](DControllerCommandImpl.md#removelistener)
- [size](DControllerCommandImpl.md#size)
- [undo](DControllerCommandImpl.md#undo)

## Constructors

### constructor

• **new DControllerCommandImpl**(): [`DControllerCommandImpl`](DControllerCommandImpl.md)

#### Returns

[`DControllerCommandImpl`](DControllerCommandImpl.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L15)

## Properties

### \_done

• `Protected` **\_done**: [`DCommand`](../interfaces/DCommand.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L13)

___

### \_position

• `Protected` **\_position**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L12)

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

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[addListener](../interfaces/DControllerCommand.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L82)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[clear](../interfaces/DControllerCommand.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L114)

___

### doRedo

▸ **doRedo**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L124)

___

### doUndo

▸ **doUndo**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L162)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[emit](../interfaces/DControllerCommand.md#emit)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[eventNames](../interfaces/DControllerCommand.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### execute

▸ **execute**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L55)

___

### isRedoable

▸ **isRedoable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[isRedoable](../interfaces/DControllerCommand.md#isredoable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L152)

___

### isUndoable

▸ **isUndoable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[isUndoable](../interfaces/DControllerCommand.md#isundoable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L190)

___

### last

▸ **last**(): ``null`` \| [`DCommand`](../interfaces/DCommand.md)

#### Returns

``null`` \| [`DCommand`](../interfaces/DCommand.md)

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[last](../interfaces/DControllerCommand.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L21)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[listenerCount](../interfaces/DControllerCommand.md#listenercount)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[listeners](../interfaces/DControllerCommand.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### merge

▸ **merge**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L36)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[off](../interfaces/DControllerCommand.md#off)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[on](../interfaces/DControllerCommand.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onFail

▸ **onFail**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L77)

___

### onRedoFail

▸ **onRedoFail**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L148)

___

### onRedoSuccess

▸ **onRedoSuccess**(`redoed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `redoed` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L140)

___

### onSuccess

▸ **onSuccess**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L64)

___

### onUndoFail

▸ **onUndoFail**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L186)

___

### onUndoSuccess

▸ **onUndoSuccess**(`undoed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `undoed` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L178)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[once](../interfaces/DControllerCommand.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### push

▸ **push**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[push](../interfaces/DControllerCommand.md#push)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L31)

___

### redo

▸ **redo**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[redo](../interfaces/DControllerCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L118)

___

### remove

▸ **remove**(`size`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L93)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[removeAllListeners](../interfaces/DControllerCommand.md#removealllisteners)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[removeListener](../interfaces/DControllerCommand.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[size](../interfaces/DControllerCommand.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L110)

___

### undo

▸ **undo**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[undo](../interfaces/DControllerCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L156)
