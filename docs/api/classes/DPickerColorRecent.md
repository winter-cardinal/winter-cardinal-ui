[Winter Cardinal UI - v0.199.0](../index.md) / DPickerColorRecent

# Class: DPickerColorRecent

## Hierarchy

- `EventEmitter`

  ↳ **`DPickerColorRecent`**

## Table of contents

### Constructors

- [constructor](DPickerColorRecent.md#constructor)

### Properties

- [\_capacity](DPickerColorRecent.md#_capacity)
- [\_recents](DPickerColorRecent.md#_recents)

### Methods

- [add](DPickerColorRecent.md#add)
- [addListener](DPickerColorRecent.md#addlistener)
- [contains](DPickerColorRecent.md#contains)
- [emit](DPickerColorRecent.md#emit)
- [eventNames](DPickerColorRecent.md#eventnames)
- [get](DPickerColorRecent.md#get)
- [listenerCount](DPickerColorRecent.md#listenercount)
- [listeners](DPickerColorRecent.md#listeners)
- [off](DPickerColorRecent.md#off)
- [on](DPickerColorRecent.md#on)
- [once](DPickerColorRecent.md#once)
- [pop](DPickerColorRecent.md#pop)
- [removeAllListeners](DPickerColorRecent.md#removealllisteners)
- [removeListener](DPickerColorRecent.md#removelistener)
- [set](DPickerColorRecent.md#set)
- [size](DPickerColorRecent.md#size)

## Constructors

### constructor

• **new DPickerColorRecent**(`recents`, `capacity`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `recents` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)[] |
| `capacity` | `number` |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L13)

## Properties

### \_capacity

• `Protected` **\_capacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L11)

___

### \_recents

• `Protected` **\_recents**: [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L10)

## Methods

### add

▸ **add**(`colorAndAlpha`): [`DPickerColorRecent`](DPickerColorRecent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorAndAlpha` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md) |

#### Returns

[`DPickerColorRecent`](DPickerColorRecent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L53)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DPickerColorRecent`](DPickerColorRecent.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DPickerColorRecent`](DPickerColorRecent.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

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

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L42)

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

### get

▸ **get**(`index`): ``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L20)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DPickerColorRecent`](DPickerColorRecent.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DPickerColorRecent`](DPickerColorRecent.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DPickerColorRecent`](DPickerColorRecent.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DPickerColorRecent`](DPickerColorRecent.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DPickerColorRecent`](DPickerColorRecent.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DPickerColorRecent`](DPickerColorRecent.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### pop

▸ **pop**(): ``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Returns

``null`` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L66)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DPickerColorRecent`](DPickerColorRecent.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DPickerColorRecent`](DPickerColorRecent.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DPickerColorRecent`](DPickerColorRecent.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DPickerColorRecent`](DPickerColorRecent.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

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

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L28)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-color-recent.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-picker-color-recent.ts#L76)
