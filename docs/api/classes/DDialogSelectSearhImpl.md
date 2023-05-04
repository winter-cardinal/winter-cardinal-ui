[Winter Cardinal UI - v0.310.1](../index.md) / DDialogSelectSearhImpl

# Class: DDialogSelectSearhImpl<VALUE\>

[DDialogSelect](DDialogSelect.md) search object.

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Hierarchy

- `EventEmitter`

  ↳ **`DDialogSelectSearhImpl`**

## Implements

- [`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DDialogSelectSearhImpl.md#constructor)

### Properties

- [\_id](DDialogSelectSearhImpl.md#_id)
- [\_idCompleted](DDialogSelectSearhImpl.md#_idcompleted)
- [\_search](DDialogSelectSearhImpl.md#_search)

### Methods

- [addListener](DDialogSelectSearhImpl.md#addlistener)
- [create](DDialogSelectSearhImpl.md#create)
- [emit](DDialogSelectSearhImpl.md#emit)
- [eventNames](DDialogSelectSearhImpl.md#eventnames)
- [isDone](DDialogSelectSearhImpl.md#isdone)
- [listenerCount](DDialogSelectSearhImpl.md#listenercount)
- [listeners](DDialogSelectSearhImpl.md#listeners)
- [off](DDialogSelectSearhImpl.md#off)
- [on](DDialogSelectSearhImpl.md#on)
- [once](DDialogSelectSearhImpl.md#once)
- [removeAllListeners](DDialogSelectSearhImpl.md#removealllisteners)
- [removeListener](DDialogSelectSearhImpl.md#removelistener)

## Constructors

### constructor

• **new DDialogSelectSearhImpl**<`VALUE`\>(`search?`)

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `search?` | (`word`: `string`) => `Promise`<`VALUE`[]\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts#L17)

## Properties

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts#L14)

___

### \_idCompleted

• `Protected` **\_idCompleted**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts#L15)

___

### \_search

• `Protected` **\_search**: (`word`: `string`) => `Promise`<`VALUE`[]\>

#### Type declaration

▸ (`word`): `Promise`<`VALUE`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |

##### Returns

`Promise`<`VALUE`[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts#L13)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### create

▸ **create**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`string`] |

#### Returns

`void`

#### Implementation of

[DDialogSelectSearch](../interfaces/DDialogSelectSearch.md).[create](../interfaces/DDialogSelectSearch.md#create)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts#L25)

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

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DDialogSelectSearch](../interfaces/DDialogSelectSearch.md).[isDone](../interfaces/DDialogSelectSearch.md#isdone)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-impl.ts#L46)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

`this`.

#### Implementation of

[DDialogSelectSearch](../interfaces/DDialogSelectSearch.md).[on](../interfaces/DDialogSelectSearch.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DDialogSelectSearhImpl`](DDialogSelectSearhImpl.md)<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056
