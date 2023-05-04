[Winter Cardinal UI - v0.310.1](../index.md) / DDialogSelectSearhDismissableImpl

# Class: DDialogSelectSearhDismissableImpl<VALUE\>

[DDialogSelect](DDialogSelect.md) dismissable search object.

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Hierarchy

- `EventEmitter`

  ↳ **`DDialogSelectSearhDismissableImpl`**

## Implements

- [`DDialogSelectSearchDismissable`](../interfaces/DDialogSelectSearchDismissable.md)<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DDialogSelectSearhDismissableImpl.md#constructor)

### Properties

- [\_args](DDialogSelectSearhDismissableImpl.md#_args)
- [\_filter](DDialogSelectSearhDismissableImpl.md#_filter)
- [\_target](DDialogSelectSearhDismissableImpl.md#_target)
- [\_value](DDialogSelectSearhDismissableImpl.md#_value)

### Methods

- [addListener](DDialogSelectSearhDismissableImpl.md#addlistener)
- [create](DDialogSelectSearhDismissableImpl.md#create)
- [emit](DDialogSelectSearhDismissableImpl.md#emit)
- [eventNames](DDialogSelectSearhDismissableImpl.md#eventnames)
- [isDone](DDialogSelectSearhDismissableImpl.md#isdone)
- [listenerCount](DDialogSelectSearhDismissableImpl.md#listenercount)
- [listeners](DDialogSelectSearhDismissableImpl.md#listeners)
- [off](DDialogSelectSearhDismissableImpl.md#off)
- [on](DDialogSelectSearhDismissableImpl.md#on)
- [once](DDialogSelectSearhDismissableImpl.md#once)
- [removeAllListeners](DDialogSelectSearhDismissableImpl.md#removealllisteners)
- [removeListener](DDialogSelectSearhDismissableImpl.md#removelistener)
- [toDismissValue](DDialogSelectSearhDismissableImpl.md#todismissvalue)
- [toDismissable](DDialogSelectSearhDismissableImpl.md#todismissable)

## Constructors

### constructor

• **new DDialogSelectSearhDismissableImpl**<`VALUE`\>(`target`, `options`)

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\> |
| `options` | [`DDialogSelectSearhDismissableOptions`](../interfaces/DDialogSelectSearhDismissableOptions.md)<`VALUE`\> |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L24)

## Properties

### \_args

• `Protected` `Optional` **\_args**: [`string`]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L20)

___

### \_filter

• `Protected` `Optional` **\_filter**: [`DDialogSelectSearhDismissableFilter`](../index.md#ddialogselectsearhdismissablefilter)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L22)

___

### \_target

• `Protected` **\_target**: [`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L18)

___

### \_value

• `Protected` `Optional` **\_value**: `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L21)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

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

[DDialogSelectSearchDismissable](../interfaces/DDialogSelectSearchDismissable.md).[create](../interfaces/DDialogSelectSearchDismissable.md#create)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L73)

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

[DDialogSelectSearchDismissable](../interfaces/DDialogSelectSearchDismissable.md).[isDone](../interfaces/DDialogSelectSearchDismissable.md#isdone)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L78)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

`this`.

#### Implementation of

[DDialogSelectSearchDismissable](../interfaces/DDialogSelectSearchDismissable.md).[on](../interfaces/DDialogSelectSearchDismissable.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DDialogSelectSearhDismissableImpl`](DDialogSelectSearhDismissableImpl.md)<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### toDismissValue

▸ `Protected` **toDismissValue**(`args?`): `undefined` \| `VALUE`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`string`] |

#### Returns

`undefined` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L45)

___

### toDismissable

▸ `Protected` **toDismissable**(`values`): `VALUE`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `VALUE`[] |

#### Returns

`VALUE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search-dismissable-impl.ts#L60)
