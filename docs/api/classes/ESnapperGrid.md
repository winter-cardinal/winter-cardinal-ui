[Winter Cardinal UI - v0.205.1](../index.md) / ESnapperGrid

# Class: ESnapperGrid

## Hierarchy

- `EventEmitter`

  ↳ **`ESnapperGrid`**

## Table of contents

### Constructors

- [constructor](ESnapperGrid.md#constructor)

### Properties

- [\_isEnabled](ESnapperGrid.md#_isenabled)
- [\_isVisible](ESnapperGrid.md#_isvisible)
- [\_size](ESnapperGrid.md#_size)

### Accessors

- [enable](ESnapperGrid.md#enable)
- [size](ESnapperGrid.md#size)
- [visible](ESnapperGrid.md#visible)

### Methods

- [addListener](ESnapperGrid.md#addlistener)
- [deserialize](ESnapperGrid.md#deserialize)
- [emit](ESnapperGrid.md#emit)
- [eventNames](ESnapperGrid.md#eventnames)
- [listenerCount](ESnapperGrid.md#listenercount)
- [listeners](ESnapperGrid.md#listeners)
- [off](ESnapperGrid.md#off)
- [on](ESnapperGrid.md#on)
- [once](ESnapperGrid.md#once)
- [removeAllListeners](ESnapperGrid.md#removealllisteners)
- [removeListener](ESnapperGrid.md#removelistener)
- [reset](ESnapperGrid.md#reset)
- [serialize](ESnapperGrid.md#serialize)
- [snap](ESnapperGrid.md#snap)

## Constructors

### constructor

• **new ESnapperGrid**()

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L15)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L11)

___

### \_isVisible

• `Protected` **\_isVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L13)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L12)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L33)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L37)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L44)

• `set` **size**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L48)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L22)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L26)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`ESnapperGrid`](ESnapperGrid.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`ESnapperGrid`](ESnapperGrid.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### deserialize

▸ **deserialize**(`serialized`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerializedSnapGrid`](../index.md#ddiagramserializedsnapgrid) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L72)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`ESnapperGrid`](ESnapperGrid.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`ESnapperGrid`](ESnapperGrid.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`ESnapperGrid`](ESnapperGrid.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`ESnapperGrid`](ESnapperGrid.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`ESnapperGrid`](ESnapperGrid.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`ESnapperGrid`](ESnapperGrid.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ESnapperGrid`](ESnapperGrid.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`ESnapperGrid`](ESnapperGrid.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`ESnapperGrid`](ESnapperGrid.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`ESnapperGrid`](ESnapperGrid.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L62)

___

### serialize

▸ **serialize**(): [`DDiagramSerializedSnapGrid`](../index.md#ddiagramserializedsnapgrid)

#### Returns

[`DDiagramSerializedSnapGrid`](../index.md#ddiagramserializedsnapgrid)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L68)

___

### snap

▸ **snap**(`value`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `result` | [`ESnapperResult`](ESnapperResult.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L55)
