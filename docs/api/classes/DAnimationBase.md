[Winter Cardinal UI - v0.457.0](../index.md) / DAnimationBase

# Class: DAnimationBase\<TARGET\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | `unknown` |

## Hierarchy

- `EventEmitter`

  ↳ **`DAnimationBase`**

  ↳↳ [`DAnimationFadeIn`](DAnimationFadeIn.md)

## Implements

- [`DAnimation`](../interfaces/DAnimation.md)\<`TARGET`\>

## Table of contents

### Constructors

- [constructor](DAnimationBase.md#constructor)

### Properties

- [\_duration](DAnimationBase.md#_duration)
- [\_durationInverse](DAnimationBase.md#_durationinverse)
- [\_id](DAnimationBase.md#_id)
- [\_onEnd](DAnimationBase.md#_onend)
- [\_onStart](DAnimationBase.md#_onstart)
- [\_onStop](DAnimationBase.md#_onstop)
- [\_onTime](DAnimationBase.md#_ontime)
- [\_onTimeBaseBound](DAnimationBase.md#_ontimebasebound)
- [\_reverse](DAnimationBase.md#_reverse)
- [\_startTime](DAnimationBase.md#_starttime)
- [\_target](DAnimationBase.md#_target)
- [\_timing](DAnimationBase.md#_timing)

### Accessors

- [duration](DAnimationBase.md#duration)
- [target](DAnimationBase.md#target)

### Methods

- [addListener](DAnimationBase.md#addlistener)
- [emit](DAnimationBase.md#emit)
- [end](DAnimationBase.md#end)
- [eventNames](DAnimationBase.md#eventnames)
- [isReverse](DAnimationBase.md#isreverse)
- [isStarted](DAnimationBase.md#isstarted)
- [listenerCount](DAnimationBase.md#listenercount)
- [listeners](DAnimationBase.md#listeners)
- [off](DAnimationBase.md#off)
- [on](DAnimationBase.md#on)
- [onEnd](DAnimationBase.md#onend)
- [onStart](DAnimationBase.md#onstart)
- [onStop](DAnimationBase.md#onstop)
- [onTime](DAnimationBase.md#ontime)
- [onTimeBase](DAnimationBase.md#ontimebase)
- [once](DAnimationBase.md#once)
- [removeAllListeners](DAnimationBase.md#removealllisteners)
- [removeListener](DAnimationBase.md#removelistener)
- [start](DAnimationBase.md#start)
- [stop](DAnimationBase.md#stop)
- [toTime](DAnimationBase.md#totime)

## Constructors

### constructor

• **new DAnimationBase**\<`TARGET`\>(`options?`): [`DAnimationBase`](DAnimationBase.md)\<`TARGET`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DAnimationOptions`](../interfaces/DAnimationOptions.md)\<`TARGET`, [`DAnimation`](../interfaces/DAnimation.md)\<`TARGET`\>\> |

#### Returns

[`DAnimationBase`](DAnimationBase.md)\<`TARGET`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L34)

## Properties

### \_duration

• `Protected` **\_duration**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L23)

___

### \_durationInverse

• `Protected` **\_durationInverse**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L24)

___

### \_id

• `Protected` **\_id**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L21)

___

### \_onEnd

• `Protected` **\_onEnd**: `undefined` \| [`DAnimationOnEnd`](../index.md#danimationonend)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L29)

___

### \_onStart

• `Protected` **\_onStart**: `undefined` \| [`DAnimationOnEnd`](../index.md#danimationonend)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L28)

___

### \_onStop

• `Protected` **\_onStop**: `undefined` \| [`DAnimationOnStop`](../index.md#danimationonstop)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L30)

___

### \_onTime

• `Protected` **\_onTime**: `undefined` \| [`DAnimationOnTime`](../index.md#danimationontime)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L26)

___

### \_onTimeBaseBound

• `Protected` **\_onTimeBaseBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L27)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L25)

___

### \_startTime

• `Protected` **\_startTime**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L22)

___

### \_target

• `Protected` **\_target**: ``null`` \| `TARGET`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L32)

___

### \_timing

• `Protected` **\_timing**: [`DAnimationTiming`](../index.md#danimationtiming)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L31)

## Accessors

### duration

• `get` **duration**(): `number`

An animation duration.

#### Returns

`number`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[duration](../interfaces/DAnimation.md#duration)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L72)

• `set` **duration**(`duration`): `void`

An animation duration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

`void`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[duration](../interfaces/DAnimation.md#duration)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L76)

___

### target

• `get` **target**(): ``null`` \| `TARGET`

An animation target.

#### Returns

``null`` \| `TARGET`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[target](../interfaces/DAnimation.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L64)

• `set` **target**(`target`): `void`

An animation target.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `TARGET` |

#### Returns

`void`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[target](../interfaces/DAnimation.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L68)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[addListener](../interfaces/DAnimation.md#addlistener)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[emit](../interfaces/DAnimation.md#emit)

#### Inherited from

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### end

▸ **end**(): `void`

Moves an animation frame to the end.

#### Returns

`void`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[end](../interfaces/DAnimation.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L175)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[eventNames](../interfaces/DAnimation.md#eventnames)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[isReverse](../interfaces/DAnimation.md#isreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L132)

___

### isStarted

▸ **isStarted**(): `boolean`

Returns true if an animation is playing.

#### Returns

`boolean`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[isStarted](../interfaces/DAnimation.md#isstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L128)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[listenerCount](../interfaces/DAnimation.md#listenercount)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[listeners](../interfaces/DAnimation.md#listeners)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[off](../interfaces/DAnimation.md#off)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[on](../interfaces/DAnimation.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onEnd

▸ **onEnd**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L112)

___

### onStart

▸ **onStart**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L96)

___

### onStop

▸ **onStop**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L120)

___

### onTime

▸ **onTime**(`time`, `isReverse`, `elapsedTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `isReverse` | `boolean` |
| `elapsedTime` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L104)

___

### onTimeBase

▸ **onTimeBase**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L136)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[once](../interfaces/DAnimation.md#once)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[removeAllListeners](../interfaces/DAnimation.md#removealllisteners)

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

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[removeListener](../interfaces/DAnimation.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### start

▸ **start**(`reverse?`): `void`

Starts an animation.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `reverse` | `boolean` | `false` | true to play in reverse. |

#### Returns

`void`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[start](../interfaces/DAnimation.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L81)

___

### stop

▸ **stop**(): `void`

Stops an animation as is.

#### Returns

`void`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[stop](../interfaces/DAnimation.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L164)

___

### toTime

▸ **toTime**(`elapsedTime`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elapsedTime` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L160)
