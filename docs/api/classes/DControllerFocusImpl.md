[Winter Cardinal UI - v0.457.0](../index.md) / DControllerFocusImpl

# Class: DControllerFocusImpl

## Hierarchy

- `EventEmitter`

  ↳ **`DControllerFocusImpl`**

## Implements

- [`DControllerFocus`](../interfaces/DControllerFocus.md)

## Table of contents

### Constructors

- [constructor](DControllerFocusImpl.md#constructor)

### Methods

- [addListener](DControllerFocusImpl.md#addlistener)
- [blur](DControllerFocusImpl.md#blur)
- [clear](DControllerFocusImpl.md#clear)
- [emit](DControllerFocusImpl.md#emit)
- [eventNames](DControllerFocusImpl.md#eventnames)
- [find](DControllerFocusImpl.md#find)
- [findNext](DControllerFocusImpl.md#findnext)
- [findParent](DControllerFocusImpl.md#findparent)
- [findPrevious](DControllerFocusImpl.md#findprevious)
- [focus](DControllerFocusImpl.md#focus)
- [get](DControllerFocusImpl.md#get)
- [isFocusReverse](DControllerFocusImpl.md#isfocusreverse)
- [isFocusRoot](DControllerFocusImpl.md#isfocusroot)
- [isFocusable](DControllerFocusImpl.md#isfocusable)
- [isFocusableContainer](DControllerFocusImpl.md#isfocusablecontainer)
- [listenerCount](DControllerFocusImpl.md#listenercount)
- [listeners](DControllerFocusImpl.md#listeners)
- [off](DControllerFocusImpl.md#off)
- [on](DControllerFocusImpl.md#on)
- [once](DControllerFocusImpl.md#once)
- [removeAllListeners](DControllerFocusImpl.md#removealllisteners)
- [removeListener](DControllerFocusImpl.md#removelistener)
- [set](DControllerFocusImpl.md#set)

## Constructors

### constructor

• **new DControllerFocusImpl**(): [`DControllerFocusImpl`](DControllerFocusImpl.md)

#### Returns

[`DControllerFocusImpl`](DControllerFocusImpl.md)

#### Inherited from

utils.EventEmitter.constructor

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

[DControllerFocus](../interfaces/DControllerFocus.md).[addListener](../interfaces/DControllerFocus.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### blur

▸ **blur**(`focusable`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](../interfaces/DFocusable.md) |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[blur](../interfaces/DControllerFocus.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L36)

___

### clear

▸ **clear**(): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[clear](../interfaces/DControllerFocus.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L46)

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

[DControllerFocus](../interfaces/DControllerFocus.md).[emit](../interfaces/DControllerFocus.md#emit)

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

[DControllerFocus](../interfaces/DControllerFocus.md).[eventNames](../interfaces/DControllerFocus.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### find

▸ **find**(`target`, `includesTarget`, `includesTargetChildren`, `direction`, `root?`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

Searches a focusable and returns a firstly-found focusable.
If no focusable is found, returns null.
The search starts from the given target in the depth-first manner.
If the root is given, the search will be limited to the root's children.
The root itself will not be checked.
This method assumes the root is the one of the parents of the given target.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DFocusableMightBe`](../interfaces/DFocusableMightBe.md) | a target where a search starts at |
| `includesTarget` | `boolean` | true to check the target itself |
| `includesTargetChildren` | `boolean` | true to check the target's children |
| `direction` | `boolean` | true to search in the descending order |
| `root?` | `unknown` | a root of a search |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[find](../interfaces/DControllerFocus.md#find)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L74)

___

### findNext

▸ **findNext**(`target`, `includesTarget`, `includesTargetChildren`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DFocusableMightBe`](../interfaces/DFocusableMightBe.md) |
| `includesTarget` | `boolean` |
| `includesTargetChildren` | `boolean` |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L193)

___

### findParent

▸ **findParent**(`mightBeFocusable`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

Returns the closest focusable parent of the specified target.
If the specified target is focusable, returns the specified target.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mightBeFocusable` | ``null`` \| [`DFocusableMightBe`](../interfaces/DFocusableMightBe.md) | the node a search starts from |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[findParent](../interfaces/DControllerFocus.md#findparent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L62)

___

### findPrevious

▸ **findPrevious**(`target`, `includesTarget`, `includesTargetChildren`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DFocusableMightBe`](../interfaces/DFocusableMightBe.md) |
| `includesTarget` | `boolean` |
| `includesTargetChildren` | `boolean` |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L230)

___

### focus

▸ **focus**(`focusable`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](../interfaces/DFocusable.md) |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[focus](../interfaces/DControllerFocus.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L17)

___

### get

▸ **get**(): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[get](../interfaces/DControllerFocus.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L58)

___

### isFocusReverse

▸ **isFocusReverse**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L288)

___

### isFocusRoot

▸ **isFocusRoot**(`target`, `root`): target is DFocusable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `root` | `unknown` |

#### Returns

target is DFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L281)

___

### isFocusable

▸ **isFocusable**(`target`): target is DFocusable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L267)

___

### isFocusableContainer

▸ **isFocusableContainer**(`target`): target is DFocusableContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DFocusableContainer

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L277)

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

[DControllerFocus](../interfaces/DControllerFocus.md).[listenerCount](../interfaces/DControllerFocus.md#listenercount)

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

[DControllerFocus](../interfaces/DControllerFocus.md).[listeners](../interfaces/DControllerFocus.md#listeners)

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

[DControllerFocus](../interfaces/DControllerFocus.md).[off](../interfaces/DControllerFocus.md#off)

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

[DControllerFocus](../interfaces/DControllerFocus.md).[on](../interfaces/DControllerFocus.md#on)

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

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[once](../interfaces/DControllerFocus.md#once)

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

[DControllerFocus](../interfaces/DControllerFocus.md).[removeAllListeners](../interfaces/DControllerFocus.md#removealllisteners)

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

[DControllerFocus](../interfaces/DControllerFocus.md).[removeListener](../interfaces/DControllerFocus.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### set

▸ **set**(`focusable`, `isFocused`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](../interfaces/DFocusable.md) |
| `isFocused` | `boolean` |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[set](../interfaces/DControllerFocus.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus-impl.ts#L50)
