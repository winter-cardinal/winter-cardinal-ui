[Winter Cardinal UI - v0.407.0](../index.md) / DButtonGroup

# Class: DButtonGroup\<BUTTON, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `BUTTON` | extends [`DButtonBase`](DButtonBase.md)\<`any`, `any`, `any`\> = [`DButtonBase`](DButtonBase.md)\<`any`, `any`, `any`\> |
| `OPTIONS` | extends [`DButtonGroupOptions`](../interfaces/DButtonGroupOptions.md)\<`BUTTON`\> = [`DButtonGroupOptions`](../interfaces/DButtonGroupOptions.md)\<`BUTTON`\> |

## Hierarchy

- `EventEmitter`

  ↳ **`DButtonGroup`**

## Table of contents

### Constructors

- [constructor](DButtonGroup.md#constructor)

### Properties

- [\_active](DButtonGroup.md#_active)
- [\_buttons](DButtonGroup.md#_buttons)
- [\_isEnabled](DButtonGroup.md#_isenabled)
- [\_onActiveBound](DButtonGroup.md#_onactivebound)

### Accessors

- [active](DButtonGroup.md#active)

### Methods

- [add](DButtonGroup.md#add)
- [addListener](DButtonGroup.md#addlistener)
- [clear](DButtonGroup.md#clear)
- [contains](DButtonGroup.md#contains)
- [destroy](DButtonGroup.md#destroy)
- [disable](DButtonGroup.md#disable)
- [each](DButtonGroup.md#each)
- [emit](DButtonGroup.md#emit)
- [enable](DButtonGroup.md#enable)
- [eventNames](DButtonGroup.md#eventnames)
- [listenerCount](DButtonGroup.md#listenercount)
- [listeners](DButtonGroup.md#listeners)
- [off](DButtonGroup.md#off)
- [on](DButtonGroup.md#on)
- [once](DButtonGroup.md#once)
- [remove](DButtonGroup.md#remove)
- [removeAllListeners](DButtonGroup.md#removealllisteners)
- [removeListener](DButtonGroup.md#removelistener)
- [size](DButtonGroup.md#size)

## Constructors

### constructor

• **new DButtonGroup**\<`BUTTON`, `OPTIONS`\>(`options?`): [`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BUTTON` | extends [`DButtonBase`](DButtonBase.md)\<`any`, `any`, `any`\> = [`DButtonBase`](DButtonBase.md)\<`any`, `any`, `any`\> |
| `OPTIONS` | extends [`DButtonGroupOptions`](../interfaces/DButtonGroupOptions.md)\<`BUTTON`, `any`\> = [`DButtonGroupOptions`](../interfaces/DButtonGroupOptions.md)\<`BUTTON`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L45)

## Properties

### \_active

• `Protected` **\_active**: ``null`` \| `BUTTON`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L41)

___

### \_buttons

• `Protected` **\_buttons**: `BUTTON`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L40)

___

### \_isEnabled

• `Protected` `Optional` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L43)

___

### \_onActiveBound

• `Protected` **\_onActiveBound**: (`button`: `BUTTON`) => `void`

#### Type declaration

▸ (`button`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `button` | `BUTTON` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L42)

## Accessors

### active

• `get` **active**(): ``null`` \| `BUTTON`

#### Returns

``null`` \| `BUTTON`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L86)

• `set` **active**(`newActive`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newActive` | ``null`` \| `BUTTON` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L90)

## Methods

### add

▸ **add**(`button`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `button` | `BUTTON` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L69)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L124)

___

### contains

▸ **contains**(`button`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `button` | `BUTTON` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L118)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L163)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L147)

___

### each

▸ **each**(`iteratee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`button`: `BUTTON`) => `boolean` \| `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L137)

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

### enable

▸ **enable**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L155)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### remove

▸ **remove**(`button`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `button` | `BUTTON` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L105)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DButtonGroup`](DButtonGroup.md)\<`BUTTON`, `OPTIONS`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L133)
