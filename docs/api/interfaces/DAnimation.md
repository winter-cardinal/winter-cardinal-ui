[Winter Cardinal UI - v0.414.0](../index.md) / DAnimation

# Interface: DAnimation\<TARGET\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | `unknown` |

## Hierarchy

- `EventEmitter`

  ↳ **`DAnimation`**

## Implemented by

- [`DAnimationBase`](../classes/DAnimationBase.md)
- [`DAnimationEmpty`](../classes/DAnimationEmpty.md)

## Table of contents

### Properties

- [duration](DAnimation.md#duration)
- [target](DAnimation.md#target)

### Methods

- [addListener](DAnimation.md#addlistener)
- [emit](DAnimation.md#emit)
- [end](DAnimation.md#end)
- [eventNames](DAnimation.md#eventnames)
- [isReverse](DAnimation.md#isreverse)
- [isStarted](DAnimation.md#isstarted)
- [listenerCount](DAnimation.md#listenercount)
- [listeners](DAnimation.md#listeners)
- [off](DAnimation.md#off)
- [on](DAnimation.md#on)
- [once](DAnimation.md#once)
- [removeAllListeners](DAnimation.md#removealllisteners)
- [removeListener](DAnimation.md#removelistener)
- [start](DAnimation.md#start)
- [stop](DAnimation.md#stop)

## Properties

### duration

• **duration**: `number`

An animation duration.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L153)

___

### target

• **target**: ``null`` \| `TARGET`

An animation target.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L148)

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

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`DAnimationEvents`](DAnimationEvents.md)\<`this`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<[`DAnimationEvents`](DAnimationEvents.md)\<[`DAnimation`](DAnimation.md)\<`TARGET`\>\>[`E`]\> |

#### Returns

`boolean`

#### Overrides

utils.EventEmitter.emit

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L196)

▸ **emit**(`event`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any` |

#### Returns

`boolean`

#### Overrides

utils.EventEmitter.emit

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L200)

___

### end

▸ **end**(): `void`

Moves an animation frame to the end.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L180)

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

### isReverse

▸ **isReverse**(): `boolean`

Returns true if an animation is in a reverse mode.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L170)

___

### isStarted

▸ **isStarted**(): `boolean`

Returns true if an animation is playing.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L165)

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

▸ **on**\<`E`\>(`event`, `handler`, `context?`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`DAnimationEvents`](DAnimationEvents.md)\<`this`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `handler` | [`DAnimationEvents`](DAnimationEvents.md)\<[`DAnimation`](DAnimation.md)\<`TARGET`\>\>[`E`] |
| `context?` | `any` |

#### Returns

`this`

#### Overrides

utils.EventEmitter.on

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L182)

▸ **on**(`event`, `handler`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | (...`args`: `any`[]) => `any` |
| `context?` | `any` |

#### Returns

`this`

#### Overrides

utils.EventEmitter.on

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L187)

___

### once

▸ **once**\<`E`\>(`event`, `handler`, `context?`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`DAnimationEvents`](DAnimationEvents.md)\<`this`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `handler` | [`DAnimationEvents`](DAnimationEvents.md)\<[`DAnimation`](DAnimation.md)\<`TARGET`\>\>[`E`] |
| `context?` | `any` |

#### Returns

`this`

#### Overrides

utils.EventEmitter.once

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L189)

▸ **once**(`event`, `handler`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | (...`args`: `any`[]) => `any` |
| `context?` | `any` |

#### Returns

`this`

#### Overrides

utils.EventEmitter.once

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L194)

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

### start

▸ **start**(`reverse?`): `void`

Starts an animation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reverse?` | `boolean` | true to play in reverse. |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L160)

___

### stop

▸ **stop**(): `void`

Stops an animation as is.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation.ts#L175)
