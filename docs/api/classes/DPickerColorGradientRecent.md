[Winter Cardinal UI - v0.407.0](../index.md) / DPickerColorGradientRecent

# Class: DPickerColorGradientRecent

## Hierarchy

- `EventEmitter`

  ↳ **`DPickerColorGradientRecent`**

## Table of contents

### Constructors

- [constructor](DPickerColorGradientRecent.md#constructor)

### Properties

- [\_capacity](DPickerColorGradientRecent.md#_capacity)
- [\_recents](DPickerColorGradientRecent.md#_recents)

### Methods

- [add](DPickerColorGradientRecent.md#add)
- [addListener](DPickerColorGradientRecent.md#addlistener)
- [contains](DPickerColorGradientRecent.md#contains)
- [emit](DPickerColorGradientRecent.md#emit)
- [eventNames](DPickerColorGradientRecent.md#eventnames)
- [get](DPickerColorGradientRecent.md#get)
- [getCapacity](DPickerColorGradientRecent.md#getcapacity)
- [listenerCount](DPickerColorGradientRecent.md#listenercount)
- [listeners](DPickerColorGradientRecent.md#listeners)
- [off](DPickerColorGradientRecent.md#off)
- [on](DPickerColorGradientRecent.md#on)
- [once](DPickerColorGradientRecent.md#once)
- [pop](DPickerColorGradientRecent.md#pop)
- [removeAllListeners](DPickerColorGradientRecent.md#removealllisteners)
- [removeListener](DPickerColorGradientRecent.md#removelistener)
- [set](DPickerColorGradientRecent.md#set)
- [size](DPickerColorGradientRecent.md#size)

## Constructors

### constructor

• **new DPickerColorGradientRecent**(`recents`, `capacity`): [`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `recents` | [`DColorGradient`](../interfaces/DColorGradient.md)[] |
| `capacity` | `number` |

#### Returns

[`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L35)

## Properties

### \_capacity

• `Protected` **\_capacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L33)

___

### \_recents

• `Protected` **\_recents**: [`DColorGradient`](../interfaces/DColorGradient.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L32)

## Methods

### add

▸ **add**(`points`): [`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`DColorGradient`](../interfaces/DColorGradient.md) |

#### Returns

[`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L75)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### contains

▸ **contains**(`points`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`DColorGradient`](../interfaces/DColorGradient.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L65)

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

▸ **get**(`index`): ``null`` \| [`DColorGradient`](../interfaces/DColorGradient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DColorGradient`](../interfaces/DColorGradient.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L46)

___

### getCapacity

▸ **getCapacity**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L42)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### pop

▸ **pop**(): ``null`` \| [`DColorGradient`](../interfaces/DColorGradient.md)

#### Returns

``null`` \| [`DColorGradient`](../interfaces/DColorGradient.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L85)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DPickerColorGradientRecent`](DPickerColorGradientRecent.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### set

▸ **set**(`index`, `points`): ``null`` \| [`DColorGradient`](../interfaces/DColorGradient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `points` | [`DColorGradient`](../interfaces/DColorGradient.md) |

#### Returns

``null`` \| [`DColorGradient`](../interfaces/DColorGradient.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L54)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-picker-color-gradient-recent.ts#L95)
