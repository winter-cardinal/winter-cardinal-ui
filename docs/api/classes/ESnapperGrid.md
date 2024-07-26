[Winter Cardinal UI - v0.442.0](../index.md) / ESnapperGrid

# Class: ESnapperGrid

## Hierarchy

- `EventEmitter`

  ↳ **`ESnapperGrid`**

## Table of contents

### Constructors

- [constructor](ESnapperGrid.md#constructor)

### Properties

- [\_isEnabled](ESnapperGrid.md#_isenabled)
- [\_isEnabledDefault](ESnapperGrid.md#_isenableddefault)
- [\_isVisible](ESnapperGrid.md#_isvisible)
- [\_isVisibleDefault](ESnapperGrid.md#_isvisibledefault)
- [\_size](ESnapperGrid.md#_size)
- [\_sizeDefault](ESnapperGrid.md#_sizedefault)

### Accessors

- [enable](ESnapperGrid.md#enable)
- [size](ESnapperGrid.md#size)
- [visible](ESnapperGrid.md#visible)

### Methods

- [addListener](ESnapperGrid.md#addlistener)
- [deserialize](ESnapperGrid.md#deserialize)
- [emit](ESnapperGrid.md#emit)
- [eventNames](ESnapperGrid.md#eventnames)
- [listenerCount](ESnapperGrid.md#listenercount)
- [listeners](ESnapperGrid.md#listeners)
- [off](ESnapperGrid.md#off)
- [on](ESnapperGrid.md#on)
- [once](ESnapperGrid.md#once)
- [removeAllListeners](ESnapperGrid.md#removealllisteners)
- [removeListener](ESnapperGrid.md#removelistener)
- [reset](ESnapperGrid.md#reset)
- [serialize](ESnapperGrid.md#serialize)
- [snap](ESnapperGrid.md#snap)

## Constructors

### constructor

• **new ESnapperGrid**(`theme`, `options?`): [`ESnapperGrid`](ESnapperGrid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`EThemeSnapperGrid`](../interfaces/EThemeSnapperGrid.md) |
| `options?` | [`ESnapperGridOptions`](../interfaces/ESnapperGridOptions.md) |

#### Returns

[`ESnapperGrid`](ESnapperGrid.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L29)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L22)

___

### \_isEnabledDefault

• `Protected` **\_isEnabledDefault**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L23)

___

### \_isVisible

• `Protected` **\_isVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L26)

___

### \_isVisibleDefault

• `Protected` **\_isVisibleDefault**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L27)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L24)

___

### \_sizeDefault

• `Protected` **\_sizeDefault**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L25)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L50)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L54)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L61)

• `set` **size**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L65)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L39)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L43)

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

### deserialize

▸ **deserialize**(`serialized`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerializedSnapGrid`](../index.md#ddiagramserializedsnapgrid) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L90)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L79)

___

### serialize

▸ **serialize**(): [`DDiagramSerializedSnapGrid`](../index.md#ddiagramserializedsnapgrid)

#### Returns

[`DDiagramSerializedSnapGrid`](../index.md#ddiagramserializedsnapgrid)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L86)

___

### snap

▸ **snap**(`value`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `result` | [`ESnapperResult`](ESnapperResult.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-grid.ts#L72)
