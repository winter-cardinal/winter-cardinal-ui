[Winter Cardinal UI - v0.414.0](../index.md) / ESnapperTarget

# Class: ESnapperTarget

## Hierarchy

- `EventEmitter`

  ↳ **`ESnapperTarget`**

## Table of contents

### Constructors

- [constructor](ESnapperTarget.md#constructor)

### Properties

- [\_isEnabled](ESnapperTarget.md#_isenabled)
- [\_isEnabledDefault](ESnapperTarget.md#_isenableddefault)
- [\_isVisible](ESnapperTarget.md#_isvisible)
- [\_isVisibleDefault](ESnapperTarget.md#_isvisibledefault)
- [values](ESnapperTarget.md#values)

### Accessors

- [enable](ESnapperTarget.md#enable)
- [size](ESnapperTarget.md#size)
- [visible](ESnapperTarget.md#visible)

### Methods

- [add](ESnapperTarget.md#add)
- [addListener](ESnapperTarget.md#addlistener)
- [deserialize](ESnapperTarget.md#deserialize)
- [emit](ESnapperTarget.md#emit)
- [eventNames](ESnapperTarget.md#eventnames)
- [listenerCount](ESnapperTarget.md#listenercount)
- [listeners](ESnapperTarget.md#listeners)
- [off](ESnapperTarget.md#off)
- [on](ESnapperTarget.md#on)
- [once](ESnapperTarget.md#once)
- [remove](ESnapperTarget.md#remove)
- [removeAllListeners](ESnapperTarget.md#removealllisteners)
- [removeListener](ESnapperTarget.md#removelistener)
- [replace](ESnapperTarget.md#replace)
- [reset](ESnapperTarget.md#reset)
- [serialize](ESnapperTarget.md#serialize)
- [snap](ESnapperTarget.md#snap)
- [swap](ESnapperTarget.md#swap)

## Constructors

### constructor

• **new ESnapperTarget**(`theme`, `options?`): [`ESnapperTarget`](ESnapperTarget.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`EThemeSnapperTarget`](../interfaces/EThemeSnapperTarget.md) |
| `options?` | [`ESnapperTargetOptions`](../interfaces/ESnapperTargetOptions.md) |

#### Returns

[`ESnapperTarget`](ESnapperTarget.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L31)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L28)

___

### \_isEnabledDefault

• `Protected` **\_isEnabledDefault**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L29)

___

### \_isVisible

• `Protected` **\_isVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L26)

___

### \_isVisibleDefault

• `Protected` **\_isVisibleDefault**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L27)

___

### values

• **values**: [`ESnapperTargetValue`](ESnapperTargetValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L25)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L40)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L44)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L62)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L51)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L55)

## Methods

### add

▸ **add**(`target`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ESnapperTargetValue`](ESnapperTargetValue.md) |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L66)

___

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
| `serialized` | [`DDiagramSerializedSnapTarget`](../interfaces/DDiagramSerializedSnapTarget.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L134)

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

### remove

▸ **remove**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L75)

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

### replace

▸ **replace**(`index`, `value`): ``null`` \| [`ESnapperTargetValue`](ESnapperTargetValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`ESnapperTargetValue`](ESnapperTargetValue.md) |

#### Returns

``null`` \| [`ESnapperTargetValue`](ESnapperTargetValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L83)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L118)

___

### serialize

▸ **serialize**(): [`DDiagramSerializedSnapTarget`](../interfaces/DDiagramSerializedSnapTarget.md)

#### Returns

[`DDiagramSerializedSnapTarget`](../interfaces/DDiagramSerializedSnapTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L125)

___

### snap

▸ **snap**(`px`, `py`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `px` | `number` |
| `py` | `number` |
| `x` | [`ESnapperResult`](ESnapperResult.md) |
| `y` | [`ESnapperResult`](ESnapperResult.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L104)

___

### swap

▸ **swap**(`indexA`, `indexB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexA` | `number` |
| `indexB` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L94)
