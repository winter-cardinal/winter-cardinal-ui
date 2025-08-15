[Winter Cardinal UI - v0.457.0](../index.md) / DViewImpl

# Class: DViewImpl

## Hierarchy

- `EventEmitter`

  ↳ **`DViewImpl`**

## Implements

- [`DView`](../interfaces/DView.md)

## Table of contents

### Constructors

- [constructor](DViewImpl.md#constructor)

### Properties

- [\_constraint](DViewImpl.md#_constraint)
- [\_dblClickZoomChecker](DViewImpl.md#_dblclickzoomchecker)
- [\_dblClickZoomModifier](DViewImpl.md#_dblclickzoommodifier)
- [\_dblClickZoomSpeed](DViewImpl.md#_dblclickzoomspeed)
- [\_dblclickZoomDuration](DViewImpl.md#_dblclickzoomduration)
- [\_gesture](DViewImpl.md#_gesture)
- [\_isDblClickZoomEnabled](DViewImpl.md#_isdblclickzoomenabled)
- [\_isWheelTranslationEnabled](DViewImpl.md#_iswheeltranslationenabled)
- [\_isWheelZoomEnabled](DViewImpl.md#_iswheelzoomenabled)
- [\_parent](DViewImpl.md#_parent)
- [\_toTarget](DViewImpl.md#_totarget)
- [\_transform](DViewImpl.md#_transform)
- [\_wheelTranslationChecker](DViewImpl.md#_wheeltranslationchecker)
- [\_wheelTranslationModifier](DViewImpl.md#_wheeltranslationmodifier)
- [\_wheelTranslationSpeed](DViewImpl.md#_wheeltranslationspeed)
- [\_wheelZoomChecker](DViewImpl.md#_wheelzoomchecker)
- [\_wheelZoomModifier](DViewImpl.md#_wheelzoommodifier)
- [\_wheelZoomSpeed](DViewImpl.md#_wheelzoomspeed)
- [\_workRect](DViewImpl.md#_workrect)
- [\_zoomKeepRatio](DViewImpl.md#_zoomkeepratio)
- [\_zoomMax](DViewImpl.md#_zoommax)
- [\_zoomMin](DViewImpl.md#_zoommin)
- [\_zoomPoint](DViewImpl.md#_zoompoint)
- [CONSTRAINT](DViewImpl.md#constraint)

### Accessors

- [gesture](DViewImpl.md#gesture)
- [position](DViewImpl.md#position)
- [scale](DViewImpl.md#scale)

### Methods

- [addListener](DViewImpl.md#addlistener)
- [emit](DViewImpl.md#emit)
- [eventNames](DViewImpl.md#eventnames)
- [fit](DViewImpl.md#fit)
- [getThemeDefault](DViewImpl.md#getthemedefault)
- [getType](DViewImpl.md#gettype)
- [listenerCount](DViewImpl.md#listenercount)
- [listeners](DViewImpl.md#listeners)
- [moveTo](DViewImpl.md#moveto)
- [off](DViewImpl.md#off)
- [on](DViewImpl.md#on)
- [onDblClick](DViewImpl.md#ondblclick)
- [onDown](DViewImpl.md#ondown)
- [onWheel](DViewImpl.md#onwheel)
- [once](DViewImpl.md#once)
- [removeAllListeners](DViewImpl.md#removealllisteners)
- [removeListener](DViewImpl.md#removelistener)
- [reset](DViewImpl.md#reset)
- [stop](DViewImpl.md#stop)
- [toGlobal](DViewImpl.md#toglobal)
- [toLocal](DViewImpl.md#tolocal)
- [toNormalizedScale](DViewImpl.md#tonormalizedscale)
- [toTheme](DViewImpl.md#totheme)
- [transform](DViewImpl.md#transform)
- [zoom](DViewImpl.md#zoom)
- [zoomAt](DViewImpl.md#zoomat)
- [zoomAtGlobal](DViewImpl.md#zoomatglobal)
- [zoomIn](DViewImpl.md#zoomin)
- [zoomOut](DViewImpl.md#zoomout)

## Constructors

### constructor

• **new DViewImpl**(`parent`, `toTarget`, `options`): [`DViewImpl`](DViewImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `toTarget` | [`DViewToTarget`](../index.md#dviewtotarget) |
| `options` | `undefined` \| [`DViewOptions`](../interfaces/DViewOptions.md) |

#### Returns

[`DViewImpl`](DViewImpl.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L58)

## Properties

### \_constraint

• `Protected` **\_constraint**: [`DViewConstraint`](../index.md#dviewconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L30)

___

### \_dblClickZoomChecker

• `Protected` **\_dblClickZoomChecker**: [`DViewChecker`](../index.md#dviewchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L45)

___

### \_dblClickZoomModifier

• `Protected` **\_dblClickZoomModifier**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L44)

___

### \_dblClickZoomSpeed

• `Protected` **\_dblClickZoomSpeed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L43)

___

### \_dblclickZoomDuration

• `Protected` **\_dblclickZoomDuration**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L46)

___

### \_gesture

• `Protected` **\_gesture**: [`DViewGestureImpl`](DViewGestureImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L54)

___

### \_isDblClickZoomEnabled

• `Protected` **\_isDblClickZoomEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L42)

___

### \_isWheelTranslationEnabled

• `Protected` **\_isWheelTranslationEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L48)

___

### \_isWheelZoomEnabled

• `Protected` **\_isWheelZoomEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L37)

___

### \_parent

• `Protected` **\_parent**: [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L28)

___

### \_toTarget

• `Protected` **\_toTarget**: [`DViewToTarget`](../index.md#dviewtotarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L29)

___

### \_transform

• `Protected` **\_transform**: [`DViewTransformImpl`](DViewTransformImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L53)

___

### \_wheelTranslationChecker

• `Protected` **\_wheelTranslationChecker**: [`DViewChecker`](../index.md#dviewchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L51)

___

### \_wheelTranslationModifier

• `Protected` **\_wheelTranslationModifier**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L50)

___

### \_wheelTranslationSpeed

• `Protected` **\_wheelTranslationSpeed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L49)

___

### \_wheelZoomChecker

• `Protected` **\_wheelZoomChecker**: [`DViewChecker`](../index.md#dviewchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L40)

___

### \_wheelZoomModifier

• `Protected` **\_wheelZoomModifier**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L39)

___

### \_wheelZoomSpeed

• `Protected` **\_wheelZoomSpeed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L38)

___

### \_workRect

• `Protected` **\_workRect**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L56)

___

### \_zoomKeepRatio

• `Protected` **\_zoomKeepRatio**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L35)

___

### \_zoomMax

• `Protected` **\_zoomMax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L34)

___

### \_zoomMin

• `Protected` **\_zoomMin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L33)

___

### \_zoomPoint

• `Protected` **\_zoomPoint**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L32)

___

### CONSTRAINT

▪ `Static` `Protected` **CONSTRAINT**: [`DViewConstraint`](../index.md#dviewconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L23)

## Accessors

### gesture

• `get` **gesture**(): [`DViewGesture`](../interfaces/DViewGesture.md)

#### Returns

[`DViewGesture`](../interfaces/DViewGesture.md)

#### Implementation of

[DView](../interfaces/DView.md).[gesture](../interfaces/DView.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L141)

___

### position

• `get` **position**(): [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Returns

[`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Implementation of

[DView](../interfaces/DView.md).[position](../interfaces/DView.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L298)

• `set` **position**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md) |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[position](../interfaces/DView.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L306)

___

### scale

• `get` **scale**(): [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Returns

[`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Implementation of

[DView](../interfaces/DView.md).[scale](../interfaces/DView.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:272](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L272)

• `set` **scale**(`scale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md) |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[scale](../interfaces/DView.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L280)

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

[DView](../interfaces/DView.md).[addListener](../interfaces/DView.md#addlistener)

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

[DView](../interfaces/DView.md).[emit](../interfaces/DView.md#emit)

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

#### Implementation of

[DView](../interfaces/DView.md).[eventNames](../interfaces/DView.md#eventnames)

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

#### Implementation of

[DView](../interfaces/DView.md).[fit](../interfaces/DView.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L174)

___

### getThemeDefault

▸ **getThemeDefault**(): [`DThemeView`](../interfaces/DThemeView.md)

#### Returns

[`DThemeView`](../interfaces/DThemeView.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L426)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:430](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L430)

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

[DView](../interfaces/DView.md).[listenerCount](../interfaces/DView.md#listenercount)

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

[DView](../interfaces/DView.md).[listeners](../interfaces/DView.md#listeners)

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

#### Implementation of

[DView](../interfaces/DView.md).[moveTo](../interfaces/DView.md#moveto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:290](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L290)

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

[DView](../interfaces/DView.md).[off](../interfaces/DView.md#off)

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

[DView](../interfaces/DView.md).[on](../interfaces/DView.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L389)

___

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:385](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L385)

___

### onWheel

▸ **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L340)

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

[DView](../interfaces/DView.md).[once](../interfaces/DView.md#once)

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

[DView](../interfaces/DView.md).[removeAllListeners](../interfaces/DView.md#removealllisteners)

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

[DView](../interfaces/DView.md).[removeListener](../interfaces/DView.md#removelistener)

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

#### Implementation of

[DView](../interfaces/DView.md).[reset](../interfaces/DView.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L150)

___

### stop

▸ **stop**(): `void`

Stops an animation if exits.

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[stop](../interfaces/DView.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L145)

___

### toGlobal

▸ **toGlobal**(`local`, `global`, `skipUpdate?`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | `IPoint` |
| `global` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`IPoint`

#### Implementation of

[DView](../interfaces/DView.md).[toGlobal](../interfaces/DView.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L332)

___

### toLocal

▸ **toLocal**(`global`, `local`, `skipUpdate?`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `IPoint` |
| `local` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`IPoint`

#### Implementation of

[DView](../interfaces/DView.md).[toLocal](../interfaces/DView.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L328)

___

### toNormalizedScale

▸ **toNormalizedScale**(`scale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L336)

___

### toTheme

▸ **toTheme**(`options?`): ``null`` \| [`DThemeView`](../interfaces/DThemeView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DViewOptions`](../interfaces/DViewOptions.md) |

#### Returns

``null`` \| [`DThemeView`](../interfaces/DThemeView.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L414)

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

#### Implementation of

[DView](../interfaces/DView.md).[transform](../interfaces/DView.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L314)

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

#### Implementation of

[DView](../interfaces/DView.md).[zoom](../interfaces/DView.md#zoom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L267)

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

#### Implementation of

[DView](../interfaces/DView.md).[zoomAt](../interfaces/DView.md#zoomat)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L226)

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

#### Implementation of

[DView](../interfaces/DView.md).[zoomAtGlobal](../interfaces/DView.md#zoomatglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L253)

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

#### Implementation of

[DView](../interfaces/DView.md).[zoomIn](../interfaces/DView.md#zoomin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L208)

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

#### Implementation of

[DView](../interfaces/DView.md).[zoomOut](../interfaces/DView.md#zoomout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L217)
