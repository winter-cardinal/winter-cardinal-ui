[Winter Cardinal UI - v0.414.0](../index.md) / DAnimationEmpty

# Class: DAnimationEmpty\<TARGET\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | `unknown` |

## Hierarchy

- `EventEmitter`

  ↳ **`DAnimationEmpty`**

## Implements

- [`DAnimation`](../interfaces/DAnimation.md)\<`TARGET`\>

## Table of contents

### Constructors

- [constructor](DAnimationEmpty.md#constructor)

### Properties

- [\_isStarted](DAnimationEmpty.md#_isstarted)
- [\_onEnd](DAnimationEmpty.md#_onend)
- [\_onStart](DAnimationEmpty.md#_onstart)
- [\_onTime](DAnimationEmpty.md#_ontime)
- [\_reverse](DAnimationEmpty.md#_reverse)
- [\_target](DAnimationEmpty.md#_target)

### Accessors

- [duration](DAnimationEmpty.md#duration)
- [target](DAnimationEmpty.md#target)

### Methods

- [addListener](DAnimationEmpty.md#addlistener)
- [emit](DAnimationEmpty.md#emit)
- [end](DAnimationEmpty.md#end)
- [eventNames](DAnimationEmpty.md#eventnames)
- [isReverse](DAnimationEmpty.md#isreverse)
- [isStarted](DAnimationEmpty.md#isstarted)
- [listenerCount](DAnimationEmpty.md#listenercount)
- [listeners](DAnimationEmpty.md#listeners)
- [off](DAnimationEmpty.md#off)
- [on](DAnimationEmpty.md#on)
- [onEnd](DAnimationEmpty.md#onend)
- [onStart](DAnimationEmpty.md#onstart)
- [onTime](DAnimationEmpty.md#ontime)
- [once](DAnimationEmpty.md#once)
- [removeAllListeners](DAnimationEmpty.md#removealllisteners)
- [removeListener](DAnimationEmpty.md#removelistener)
- [start](DAnimationEmpty.md#start)
- [stop](DAnimationEmpty.md#stop)

## Constructors

### constructor

• **new DAnimationEmpty**\<`TARGET`\>(`options?`): [`DAnimationEmpty`](DAnimationEmpty.md)\<`TARGET`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DAnimationOptions`](../interfaces/DAnimationOptions.md)\<`TARGET`, [`DAnimation`](../interfaces/DAnimation.md)\<`TARGET`\>\> |

#### Returns

[`DAnimationEmpty`](DAnimationEmpty.md)\<`TARGET`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L20)

## Properties

### \_isStarted

• `Protected` **\_isStarted**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L18)

___

### \_onEnd

• `Protected` **\_onEnd**: `undefined` \| [`DAnimationOnEnd`](../index.md#danimationonend)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L16)

___

### \_onStart

• `Protected` **\_onStart**: `undefined` \| [`DAnimationOnEnd`](../index.md#danimationonend)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L15)

___

### \_onTime

• `Protected` **\_onTime**: `undefined` \| [`DAnimationOnTime`](../index.md#danimationontime)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L14)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L13)

___

### \_target

• `Protected` **\_target**: ``null`` \| `TARGET`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L17)

## Accessors

### duration

• `get` **duration**(): `number`

An animation duration.

#### Returns

`number`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[duration](../interfaces/DAnimation.md#duration)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L39)

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

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L43)

___

### target

• `get` **target**(): ``null`` \| `TARGET`

An animation target.

#### Returns

``null`` \| `TARGET`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[target](../interfaces/DAnimation.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L31)

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

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L109)

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

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L101)

___

### isStarted

▸ **isStarted**(): `boolean`

Returns true if an animation is playing.

#### Returns

`boolean`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[isStarted](../interfaces/DAnimation.md#isstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L97)

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

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L89)

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

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L73)

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

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L81)

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

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L47)

___

### stop

▸ **stop**(): `void`

Stops an animation as is.

#### Returns

`void`

#### Implementation of

[DAnimation](../interfaces/DAnimation.md).[stop](../interfaces/DAnimation.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-empty.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-animation-empty.ts#L105)
