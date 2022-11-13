[Winter Cardinal UI - v0.227.0](../index.md) / DDialogSelectSearh

# Class: DDialogSelectSearh<SEARCH_RESULT\>

## Type parameters

| Name |
| :------ |
| `SEARCH_RESULT` |

## Hierarchy

- `EventEmitter`

  ↳ **`DDialogSelectSearh`**

## Table of contents

### Constructors

- [constructor](DDialogSelectSearh.md#constructor)

### Properties

- [\_id](DDialogSelectSearh.md#_id)
- [\_idCompleted](DDialogSelectSearh.md#_idcompleted)
- [\_result](DDialogSelectSearh.md#_result)
- [\_search](DDialogSelectSearh.md#_search)

### Methods

- [addListener](DDialogSelectSearh.md#addlistener)
- [create](DDialogSelectSearh.md#create)
- [emit](DDialogSelectSearh.md#emit)
- [eventNames](DDialogSelectSearh.md#eventnames)
- [getResult](DDialogSelectSearh.md#getresult)
- [isDone](DDialogSelectSearh.md#isdone)
- [listenerCount](DDialogSelectSearh.md#listenercount)
- [listeners](DDialogSelectSearh.md#listeners)
- [off](DDialogSelectSearh.md#off)
- [on](DDialogSelectSearh.md#on)
- [once](DDialogSelectSearh.md#once)
- [removeAllListeners](DDialogSelectSearh.md#removealllisteners)
- [removeListener](DDialogSelectSearh.md#removelistener)

## Constructors

### constructor

• **new DDialogSelectSearh**<`SEARCH_RESULT`\>(`search?`)

#### Type parameters

| Name |
| :------ |
| `SEARCH_RESULT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `search?` | (`word`: `string`) => `Promise`<`SEARCH_RESULT`[]\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L14)

## Properties

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L10)

___

### \_idCompleted

• `Protected` **\_idCompleted**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L11)

___

### \_result

• `Protected` **\_result**: ``null`` \| `SEARCH_RESULT`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L12)

___

### \_search

• `Protected` **\_search**: (`word`: `string`) => `Promise`<`SEARCH_RESULT`[]\>

#### Type declaration

▸ (`word`): `Promise`<`SEARCH_RESULT`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |

##### Returns

`Promise`<`SEARCH_RESULT`[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L9)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L23)

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

### getResult

▸ **getResult**(): ``null`` \| `SEARCH_RESULT`[]

#### Returns

``null`` \| `SEARCH_RESULT`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L50)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L46)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DDialogSelectSearh`](DDialogSelectSearh.md)<`SEARCH_RESULT`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056
