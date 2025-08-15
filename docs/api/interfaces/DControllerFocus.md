[Winter Cardinal UI - v0.457.0](../index.md) / DControllerFocus

# Interface: DControllerFocus

## Hierarchy

- `EventEmitter`

  ↳ **`DControllerFocus`**

## Implemented by

- [`DControllerFocusImpl`](../classes/DControllerFocusImpl.md)

## Table of contents

### Methods

- [addListener](DControllerFocus.md#addlistener)
- [blur](DControllerFocus.md#blur)
- [clear](DControllerFocus.md#clear)
- [emit](DControllerFocus.md#emit)
- [eventNames](DControllerFocus.md#eventnames)
- [find](DControllerFocus.md#find)
- [findParent](DControllerFocus.md#findparent)
- [focus](DControllerFocus.md#focus)
- [get](DControllerFocus.md#get)
- [listenerCount](DControllerFocus.md#listenercount)
- [listeners](DControllerFocus.md#listeners)
- [off](DControllerFocus.md#off)
- [on](DControllerFocus.md#on)
- [once](DControllerFocus.md#once)
- [removeAllListeners](DControllerFocus.md#removealllisteners)
- [removeListener](DControllerFocus.md#removelistener)
- [set](DControllerFocus.md#set)

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

### blur

▸ **blur**(`focusable`): ``null`` \| [`DFocusable`](DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | [`DFocusable`](DFocusable.md) |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L24)

___

### clear

▸ **clear**(): ``null`` \| [`DFocusable`](DFocusable.md)

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L25)

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

### find

▸ **find**(`target`, `includesTarget`, `includesTargetChildren`, `direction`, `root?`): ``null`` \| [`DFocusable`](DFocusable.md)

Searches a focusable and returns a firstly-found focusable.
If no focusable is found, returns null.
The search starts from the given target in the depth-first manner.
If the root is given, the search will be limited to the root's children.
The root itself will not be checked.
This method assumes the root is the one of the parents of the given target.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DFocusableMightBe`](DFocusableMightBe.md) | a target where a search starts at |
| `includesTarget` | `boolean` | true to check the target itself |
| `includesTargetChildren` | `boolean` | true to check the target's children |
| `direction` | `boolean` | true to search in the descending order |
| `root?` | `unknown` | a root of a search |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L44)

___

### findParent

▸ **findParent**(`mightBeFocusable`): ``null`` \| [`DFocusable`](DFocusable.md)

Returns the closest focusable parent of the specified target.
If the specified target is focusable, returns the specified target.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mightBeFocusable` | ``null`` \| [`DFocusableMightBe`](DFocusableMightBe.md) | the node a search starts from |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L58)

___

### focus

▸ **focus**(`focusable`): ``null`` \| [`DFocusable`](DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](DFocusable.md) |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L23)

___

### get

▸ **get**(): ``null`` \| [`DFocusable`](DFocusable.md)

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L28)

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

### set

▸ **set**(`focusable`, `isFocused`): ``null`` \| [`DFocusable`](DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](DFocusable.md) |
| `isFocused` | `boolean` |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L27)
