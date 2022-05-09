[Winter Cardinal UI - v0.164.0](../index.md) / DControllerDefaultCommand

# Class: DControllerDefaultCommand

## Hierarchy

- `EventEmitter`

  ↳ **`DControllerDefaultCommand`**

## Implements

- [`DControllerCommand`](../interfaces/DControllerCommand.md)

## Table of contents

### Constructors

- [constructor](DControllerDefaultCommand.md#constructor)

### Properties

- [\_done](DControllerDefaultCommand.md#_done)
- [\_executing](DControllerDefaultCommand.md#_executing)
- [\_position](DControllerDefaultCommand.md#_position)
- [\_waiting](DControllerDefaultCommand.md#_waiting)

### Methods

- [addListener](DControllerDefaultCommand.md#addlistener)
- [cleanup](DControllerDefaultCommand.md#cleanup)
- [clear](DControllerDefaultCommand.md#clear)
- [emit](DControllerDefaultCommand.md#emit)
- [eventNames](DControllerDefaultCommand.md#eventnames)
- [isRedoable](DControllerDefaultCommand.md#isredoable)
- [isUndoable](DControllerDefaultCommand.md#isundoable)
- [last](DControllerDefaultCommand.md#last)
- [listenerCount](DControllerDefaultCommand.md#listenercount)
- [listeners](DControllerDefaultCommand.md#listeners)
- [next](DControllerDefaultCommand.md#next)
- [off](DControllerDefaultCommand.md#off)
- [on](DControllerDefaultCommand.md#on)
- [onFail](DControllerDefaultCommand.md#onfail)
- [onSuccess](DControllerDefaultCommand.md#onsuccess)
- [once](DControllerDefaultCommand.md#once)
- [push](DControllerDefaultCommand.md#push)
- [redo](DControllerDefaultCommand.md#redo)
- [remove](DControllerDefaultCommand.md#remove)
- [removeAllListeners](DControllerDefaultCommand.md#removealllisteners)
- [removeListener](DControllerDefaultCommand.md#removelistener)
- [size](DControllerDefaultCommand.md#size)
- [undo](DControllerDefaultCommand.md#undo)

## Constructors

### constructor

• **new DControllerDefaultCommand**()

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L28)

## Properties

### \_done

• `Protected` **\_done**: [`DCommand`](../interfaces/DCommand.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L24)

___

### \_executing

• `Protected` **\_executing**: ``null`` \| `Promise`<`void`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L26)

___

### \_position

• `Protected` **\_position**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L23)

___

### \_waiting

• `Protected` **\_waiting**: [`DCommand`](../interfaces/DCommand.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L25)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DControllerDefaultCommand`](DControllerDefaultCommand.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DControllerDefaultCommand`](DControllerDefaultCommand.md)

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[addListener](../interfaces/DControllerCommand.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### cleanup

▸ `Protected` **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L141)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[clear](../interfaces/DControllerCommand.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L196)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[emit](../interfaces/DControllerCommand.md#emit)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[eventNames](../interfaces/DControllerCommand.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### isRedoable

▸ **isRedoable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[isRedoable](../interfaces/DControllerCommand.md#isredoable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L214)

___

### isUndoable

▸ **isUndoable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[isUndoable](../interfaces/DControllerCommand.md#isundoable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L218)

___

### last

▸ **last**(): ``null`` \| [`DCommand`](../interfaces/DCommand.md)

#### Returns

``null`` \| [`DCommand`](../interfaces/DCommand.md)

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[last](../interfaces/DControllerCommand.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L37)

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

[DControllerCommand](../interfaces/DControllerCommand.md).[listeners](../interfaces/DControllerCommand.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### next

▸ **next**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L58)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DControllerDefaultCommand`](DControllerDefaultCommand.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DControllerDefaultCommand`](DControllerDefaultCommand.md)

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[off](../interfaces/DControllerCommand.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DControllerDefaultCommand`](DControllerDefaultCommand.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DControllerDefaultCommand`](DControllerDefaultCommand.md)

`this`.

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[on](../interfaces/DControllerCommand.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onFail

▸ `Protected` **onFail**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L181)

___

### onSuccess

▸ `Protected` **onSuccess**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L169)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DControllerDefaultCommand`](DControllerDefaultCommand.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DControllerDefaultCommand`](DControllerDefaultCommand.md)

`this`.

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[once](../interfaces/DControllerCommand.md#once)

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
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[push](../interfaces/DControllerCommand.md#push)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L52)

___

### redo

▸ **redo**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[redo](../interfaces/DControllerCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L200)

___

### remove

▸ `Protected` **remove**(`size`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L152)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DControllerDefaultCommand`](DControllerDefaultCommand.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DControllerDefaultCommand`](DControllerDefaultCommand.md)

`this`.

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[removeAllListeners](../interfaces/DControllerCommand.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DControllerDefaultCommand`](DControllerDefaultCommand.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DControllerDefaultCommand`](DControllerDefaultCommand.md)

`this`.

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[removeListener](../interfaces/DControllerCommand.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[size](../interfaces/DControllerCommand.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L192)

___

### undo

▸ **undo**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[undo](../interfaces/DControllerCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-command.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-controller-default-command.ts#L207)
