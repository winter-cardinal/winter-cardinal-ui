[Winter Cardinal UI - v0.457.0](../index.md) / DView

# Interface: DView

## Hierarchy

- `EventEmitter`

  ↳ **`DView`**

## Implemented by

- [`DViewImpl`](../classes/DViewImpl.md)

## Table of contents

### Properties

- [gesture](DView.md#gesture)
- [position](DView.md#position)
- [scale](DView.md#scale)

### Methods

- [addListener](DView.md#addlistener)
- [emit](DView.md#emit)
- [eventNames](DView.md#eventnames)
- [fit](DView.md#fit)
- [listenerCount](DView.md#listenercount)
- [listeners](DView.md#listeners)
- [moveTo](DView.md#moveto)
- [off](DView.md#off)
- [on](DView.md#on)
- [once](DView.md#once)
- [removeAllListeners](DView.md#removealllisteners)
- [removeListener](DView.md#removelistener)
- [reset](DView.md#reset)
- [stop](DView.md#stop)
- [toGlobal](DView.md#toglobal)
- [toLocal](DView.md#tolocal)
- [transform](DView.md#transform)
- [zoom](DView.md#zoom)
- [zoomAt](DView.md#zoomat)
- [zoomAtGlobal](DView.md#zoomatglobal)
- [zoomIn](DView.md#zoomin)
- [zoomOut](DView.md#zoomout)

## Properties

### gesture

• `Readonly` **gesture**: [`DViewGesture`](DViewGesture.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L256)

___

### position

• **position**: [`DViewTargetPoint`](DViewTargetPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L258)

___

### scale

• **scale**: [`DViewTargetPoint`](DViewTargetPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L257)

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

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

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

### fit

▸ **fit**(`duration?`, `stop?`): `void`

Fits into a screen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:279](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L279)

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

### moveTo

▸ **moveTo**(`x`, `y`, `duration?`, `stop?`): `void`

Moves to the given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | a local X coordinate position |
| `y` | `number` | a local Y coordinate position |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:353](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L353)

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

### reset

▸ **reset**(`duration?`, `stop?`): `void`

Resets a position and a scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L271)

___

### stop

▸ **stop**(): `void`

Stops an animation if exits.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L263)

___

### toGlobal

▸ **toGlobal**(`local`, `global`, `skipUpdate?`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | `IPoint` |
| `global` | `IPoint` |
| `skipUpdate?` | `boolean` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L375)

___

### toLocal

▸ **toLocal**(`global`, `local`, `skipUpdate?`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `IPoint` |
| `local` | `IPoint` |
| `skipUpdate?` | `boolean` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L374)

___

### transform

▸ **transform**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Sets to the specified position and scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | a local X coordinate position |
| `y` | `number` | a local Y coordinate position |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L365)

___

### zoom

▸ **zoom**(`scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms in / out at the current position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L343)

___

### zoomAt

▸ **zoomAt**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms into the given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | a local X coordinate position |
| `y` | `number` | a local Y coordinate position |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L307)

___

### zoomAtGlobal

▸ **zoomAtGlobal**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms into the specified global position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | a global X coordinate position |
| `y` | `number` | a global Y coordinate position |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L326)

___

### zoomIn

▸ **zoomIn**(`duration?`, `stop?`): `void`

Zooms in at the current position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L287)

___

### zoomOut

▸ **zoomOut**(`duration?`, `stop?`): `void`

Zooms out at the current position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view.ts#L295)
