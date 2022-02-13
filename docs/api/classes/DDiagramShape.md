[Winter Cardinal UI - v0.155.0](../index.md) / DDiagramShape

# Class: DDiagramShape

A shape helper class for diagrams.

## Hierarchy

- `EventEmitter`

  ↳ **`DDiagramShape`**

## Table of contents

### Constructors

- [constructor](DDiagramShape.md#constructor)

### Properties

- [\_diagram](DDiagramShape.md#_diagram)
- [\_updateBound](DDiagramShape.md#_updatebound)

### Methods

- [addListener](DDiagramShape.md#addlistener)
- [each](DDiagramShape.md#each)
- [emit](DDiagramShape.md#emit)
- [eventNames](DDiagramShape.md#eventnames)
- [get](DDiagramShape.md#get)
- [getAll](DDiagramShape.md#getall)
- [listenerCount](DDiagramShape.md#listenercount)
- [listeners](DDiagramShape.md#listeners)
- [off](DDiagramShape.md#off)
- [on](DDiagramShape.md#on)
- [onRender](DDiagramShape.md#onrender)
- [once](DDiagramShape.md#once)
- [removeAllListeners](DDiagramShape.md#removealllisteners)
- [removeListener](DDiagramShape.md#removelistener)
- [update](DDiagramShape.md#update)

## Constructors

### constructor

• **new DDiagramShape**(`diagram`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `diagram` | [`DDiagramShapeDiagram`](../interfaces/DDiagramShapeDiagram.md) |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-shape.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-shape.ts#L37)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramShapeDiagram`](../interfaces/DDiagramShapeDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-shape.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-shape.ts#L34)

___

### \_updateBound

• `Protected` **\_updateBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-shape.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-shape.ts#L35)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramShape`](DDiagramShape.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramShape`](DDiagramShape.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### each

▸ **each**(`callback`, `reverse?`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `callback` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` \| `void` | `undefined` |
| `reverse` | `boolean` | `false` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-shape.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-shape.ts#L106)

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

▸ **get**(`id`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-shape.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-shape.ts#L97)

___

### getAll

▸ **getAll**(`id`): [`EShape`](../interfaces/EShape.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-shape.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-shape.ts#L102)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DDiagramShape`](DDiagramShape.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DDiagramShape`](DDiagramShape.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDiagramShape`](DDiagramShape.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DDiagramShape`](DDiagramShape.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onRender

▸ **onRender**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-shape.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-shape.ts#L71)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDiagramShape`](DDiagramShape.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DDiagramShape`](DDiagramShape.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDiagramShape`](DDiagramShape.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DDiagramShape`](DDiagramShape.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DDiagramShape`](DDiagramShape.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DDiagramShape`](DDiagramShape.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-shape.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-shape.ts#L45)
