[Winter Cardinal UI - v0.199.0](../index.md) / DAnimationFadeIn

# Class: DAnimationFadeIn<TARGET\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DAnimationBase`](DAnimationBase.md)<`TARGET`\>

  ↳ **`DAnimationFadeIn`**

## Table of contents

### Constructors

- [constructor](DAnimationFadeIn.md#constructor)

### Properties

- [\_duration](DAnimationFadeIn.md#_duration)
- [\_durationInverse](DAnimationFadeIn.md#_durationinverse)
- [\_id](DAnimationFadeIn.md#_id)
- [\_layer](DAnimationFadeIn.md#_layer)
- [\_onEnd](DAnimationFadeIn.md#_onend)
- [\_onPostrenderBound](DAnimationFadeIn.md#_onpostrenderbound)
- [\_onPrerenderBound](DAnimationFadeIn.md#_onprerenderbound)
- [\_onStart](DAnimationFadeIn.md#_onstart)
- [\_onTime](DAnimationFadeIn.md#_ontime)
- [\_onTimeBaseBound](DAnimationFadeIn.md#_ontimebasebound)
- [\_reverse](DAnimationFadeIn.md#_reverse)
- [\_shiftX](DAnimationFadeIn.md#_shiftx)
- [\_shiftY](DAnimationFadeIn.md#_shifty)
- [\_startTime](DAnimationFadeIn.md#_starttime)
- [\_storedAlpha](DAnimationFadeIn.md#_storedalpha)
- [\_storedTarget](DAnimationFadeIn.md#_storedtarget)
- [\_storedTime](DAnimationFadeIn.md#_storedtime)
- [\_storedX](DAnimationFadeIn.md#_storedx)
- [\_storedY](DAnimationFadeIn.md#_storedy)
- [\_target](DAnimationFadeIn.md#_target)
- [\_timing](DAnimationFadeIn.md#_timing)

### Accessors

- [duration](DAnimationFadeIn.md#duration)
- [target](DAnimationFadeIn.md#target)

### Methods

- [addEventListeners](DAnimationFadeIn.md#addeventlisteners)
- [addListener](DAnimationFadeIn.md#addlistener)
- [emit](DAnimationFadeIn.md#emit)
- [end](DAnimationFadeIn.md#end)
- [eventNames](DAnimationFadeIn.md#eventnames)
- [isReverse](DAnimationFadeIn.md#isreverse)
- [isStarted](DAnimationFadeIn.md#isstarted)
- [listenerCount](DAnimationFadeIn.md#listenercount)
- [listeners](DAnimationFadeIn.md#listeners)
- [off](DAnimationFadeIn.md#off)
- [on](DAnimationFadeIn.md#on)
- [onEnd](DAnimationFadeIn.md#onend)
- [onPostrender](DAnimationFadeIn.md#onpostrender)
- [onPrerender](DAnimationFadeIn.md#onprerender)
- [onStart](DAnimationFadeIn.md#onstart)
- [onTime](DAnimationFadeIn.md#ontime)
- [onTimeBase](DAnimationFadeIn.md#ontimebase)
- [once](DAnimationFadeIn.md#once)
- [removeAllListeners](DAnimationFadeIn.md#removealllisteners)
- [removeEventListeners](DAnimationFadeIn.md#removeeventlisteners)
- [removeListener](DAnimationFadeIn.md#removelistener)
- [start](DAnimationFadeIn.md#start)
- [stop](DAnimationFadeIn.md#stop)
- [toTime](DAnimationFadeIn.md#totime)

## Constructors

### constructor

• **new DAnimationFadeIn**<`TARGET`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `TARGET`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DAnimationFadeInOptions`](../interfaces/DAnimationFadeInOptions.md)<`TARGET`\> |

#### Overrides

[DAnimationBase](DAnimationBase.md).[constructor](DAnimationBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L36)

## Properties

### \_duration

• `Protected` **\_duration**: `number`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_duration](DAnimationBase.md#_duration)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L22)

___

### \_durationInverse

• `Protected` **\_durationInverse**: `number`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_durationInverse](DAnimationBase.md#_durationinverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L23)

___

### \_id

• `Protected` **\_id**: ``null`` \| `number`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_id](DAnimationBase.md#_id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L20)

___

### \_layer

• `Protected` **\_layer**: ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L31)

___

### \_onEnd

• `Protected` **\_onEnd**: `undefined` \| [`DAnimationOnEnd`](../index.md#danimationonend)<`TARGET`\>

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_onEnd](DAnimationBase.md#_onend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L28)

___

### \_onPostrenderBound

• `Protected` **\_onPostrenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L34)

___

### \_onPrerenderBound

• `Protected` **\_onPrerenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L33)

___

### \_onStart

• `Protected` **\_onStart**: `undefined` \| [`DAnimationOnEnd`](../index.md#danimationonend)<`TARGET`\>

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_onStart](DAnimationBase.md#_onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L27)

___

### \_onTime

• `Protected` **\_onTime**: `undefined` \| [`DAnimationOnTime`](../index.md#danimationontime)<`TARGET`\>

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_onTime](DAnimationBase.md#_ontime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L25)

___

### \_onTimeBaseBound

• `Protected` **\_onTimeBaseBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_onTimeBaseBound](DAnimationBase.md#_ontimebasebound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L26)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_reverse](DAnimationBase.md#_reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L24)

___

### \_shiftX

• `Protected` **\_shiftX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L22)

___

### \_shiftY

• `Protected` **\_shiftY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L23)

___

### \_startTime

• `Protected` **\_startTime**: `number`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_startTime](DAnimationBase.md#_starttime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L21)

___

### \_storedAlpha

• `Protected` **\_storedAlpha**: `number` = `0`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L27)

___

### \_storedTarget

• `Protected` **\_storedTarget**: ``null`` \| `TARGET` = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L29)

___

### \_storedTime

• `Protected` **\_storedTime**: `number` = `0`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L28)

___

### \_storedX

• `Protected` **\_storedX**: `number` = `0`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L25)

___

### \_storedY

• `Protected` **\_storedY**: `number` = `0`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L26)

___

### \_target

• `Protected` **\_target**: ``null`` \| `TARGET`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_target](DAnimationBase.md#_target)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L30)

___

### \_timing

• `Protected` **\_timing**: [`DAnimationTiming`](../index.md#danimationtiming)<`TARGET`\>

#### Inherited from

[DAnimationBase](DAnimationBase.md).[_timing](DAnimationBase.md#_timing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L29)

## Accessors

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Inherited from

DAnimationBase.duration

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L69)

• `set` **duration**(`duration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

`void`

#### Inherited from

DAnimationBase.duration

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L73)

___

### target

• `get` **target**(): ``null`` \| `TARGET`

#### Returns

``null`` \| `TARGET`

#### Inherited from

DAnimationBase.target

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L61)

• `set` **target**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `TARGET` |

#### Returns

`void`

#### Inherited from

DAnimationBase.target

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L65)

## Methods

### addEventListeners

▸ `Protected` **addEventListeners**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L59)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

#### Inherited from

[DAnimationBase](DAnimationBase.md).[addListener](DAnimationBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

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

[DAnimationBase](DAnimationBase.md).[emit](DAnimationBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### end

▸ **end**(): `void`

Moves an animation frame to the end.

#### Returns

`void`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[end](DAnimationBase.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L161)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DAnimationBase](DAnimationBase.md).[eventNames](DAnimationBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### isReverse

▸ **isReverse**(): `boolean`

Returns true if an animation is in a reverse mode.

#### Returns

`boolean`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[isReverse](DAnimationBase.md#isreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L121)

___

### isStarted

▸ **isStarted**(): `boolean`

Returns true if an animation is playing.

#### Returns

`boolean`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[isStarted](DAnimationBase.md#isstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L117)

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

[DAnimationBase](DAnimationBase.md).[listenerCount](DAnimationBase.md#listenercount)

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

[DAnimationBase](DAnimationBase.md).[listeners](DAnimationBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

#### Inherited from

[DAnimationBase](DAnimationBase.md).[off](DAnimationBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

`this`.

#### Inherited from

[DAnimationBase](DAnimationBase.md).[on](DAnimationBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onEnd

▸ `Protected` **onEnd**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Overrides

[DAnimationBase](DAnimationBase.md).[onEnd](DAnimationBase.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L107)

___

### onPostrender

▸ `Protected` **onPostrender**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L138)

___

### onPrerender

▸ `Protected` **onPrerender**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L118)

___

### onStart

▸ `Protected` **onStart**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Overrides

[DAnimationBase](DAnimationBase.md).[onStart](DAnimationBase.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L79)

___

### onTime

▸ `Protected` **onTime**(`time`, `isReverse`, `elapsedTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `isReverse` | `boolean` |
| `elapsedTime` | `number` |

#### Returns

`void`

#### Overrides

[DAnimationBase](DAnimationBase.md).[onTime](DAnimationBase.md#ontime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L92)

___

### onTimeBase

▸ `Protected` **onTimeBase**(): `void`

#### Returns

`void`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[onTimeBase](DAnimationBase.md#ontimebase)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L125)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

`this`.

#### Inherited from

[DAnimationBase](DAnimationBase.md).[once](DAnimationBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

`this`.

#### Inherited from

[DAnimationBase](DAnimationBase.md).[removeAllListeners](DAnimationBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeEventListeners

▸ `Protected` **removeEventListeners**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L69)

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DAnimationFadeIn`](DAnimationFadeIn.md)<`TARGET`\>

`this`.

#### Inherited from

[DAnimationBase](DAnimationBase.md).[removeListener](DAnimationBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### start

▸ **start**(`reverse?`): `void`

Starts an animation.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reverse` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[start](DAnimationBase.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L78)

___

### stop

▸ **stop**(): `void`

Stops an animation as is.

#### Returns

`void`

#### Overrides

[DAnimationBase](DAnimationBase.md).[stop](DAnimationBase.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L53)

___

### toTime

▸ `Protected` **toTime**(`elapsedTime`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elapsedTime` | `number` |

#### Returns

`number`

#### Inherited from

[DAnimationBase](DAnimationBase.md).[toTime](DAnimationBase.md#totime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-animation-base.ts#L149)
