[Winter Cardinal UI - v0.414.0](../index.md) / DColorRecent

# Class: DColorRecent

## Hierarchy

- `EventEmitter`

  ↳ **`DColorRecent`**

## Table of contents

### Constructors

- [constructor](DColorRecent.md#constructor)

### Properties

- [\_capacity](DColorRecent.md#_capacity)
- [\_recents](DColorRecent.md#_recents)

### Methods

- [add](DColorRecent.md#add)
- [addAll](DColorRecent.md#addall)
- [addListener](DColorRecent.md#addlistener)
- [clear](DColorRecent.md#clear)
- [clearAndAddAll](DColorRecent.md#clearandaddall)
- [contains](DColorRecent.md#contains)
- [emit](DColorRecent.md#emit)
- [eventNames](DColorRecent.md#eventnames)
- [get](DColorRecent.md#get)
- [listenerCount](DColorRecent.md#listenercount)
- [listeners](DColorRecent.md#listeners)
- [off](DColorRecent.md#off)
- [on](DColorRecent.md#on)
- [once](DColorRecent.md#once)
- [pop](DColorRecent.md#pop)
- [removeAllListeners](DColorRecent.md#removealllisteners)
- [removeListener](DColorRecent.md#removelistener)
- [set](DColorRecent.md#set)
- [size](DColorRecent.md#size)

## Constructors

### constructor

• **new DColorRecent**(`recents`, `capacity`): [`DColorRecent`](DColorRecent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `recents` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)[] |
| `capacity` | `number` |

#### Returns

[`DColorRecent`](DColorRecent.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L18)

## Properties

### \_capacity

• `Protected` **\_capacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L16)

___

### \_recents

• `Protected` **\_recents**: [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L15)

## Methods

### add

▸ **add**(`colorAndAlpha`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorAndAlpha` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L67)

___

### addAll

▸ **addAll**(`colorAndAlphas`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorAndAlphas` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L80)

___

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

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L58)

___

### clearAndAddAll

▸ **clearAndAddAll**(`colorAndAlphas`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorAndAlphas` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L99)

___

### contains

▸ **contains**(`colorAndAlpha`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorAndAlpha` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L47)

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

▸ **get**(`index`): ``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L25)

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

### pop

▸ **pop**(): ``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Returns

``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L130)

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

### set

▸ **set**(`index`, `colorAndAlpha`): ``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `colorAndAlpha` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md) |

#### Returns

``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L33)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-recent.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-color-recent.ts#L140)
