[Winter Cardinal UI - v0.227.0](../index.md) / ESnapperTarget

# Class: ESnapperTarget

## Hierarchy

- `EventEmitter`

  ↳ **`ESnapperTarget`**

## Table of contents

### Constructors

- [constructor](ESnapperTarget.md#constructor)

### Properties

- [\_isEnabled](ESnapperTarget.md#_isenabled)
- [\_isVisible](ESnapperTarget.md#_isvisible)
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

• **new ESnapperTarget**()

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L19)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L17)

___

### \_isVisible

• `Protected` **\_isVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L16)

___

### values

• **values**: [`ESnapperTargetValue`](ESnapperTargetValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L15)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L26)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L30)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L48)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L37)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L41)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L52)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`ESnapperTarget`](ESnapperTarget.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`ESnapperTarget`](ESnapperTarget.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L120)

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

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

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

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`ESnapperTarget`](ESnapperTarget.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`ESnapperTarget`](ESnapperTarget.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`ESnapperTarget`](ESnapperTarget.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`ESnapperTarget`](ESnapperTarget.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`ESnapperTarget`](ESnapperTarget.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`ESnapperTarget`](ESnapperTarget.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L61)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ESnapperTarget`](ESnapperTarget.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`ESnapperTarget`](ESnapperTarget.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`ESnapperTarget`](ESnapperTarget.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`ESnapperTarget`](ESnapperTarget.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L69)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L104)

___

### serialize

▸ **serialize**(): [`DDiagramSerializedSnapTarget`](../interfaces/DDiagramSerializedSnapTarget.md)

#### Returns

[`DDiagramSerializedSnapTarget`](../interfaces/DDiagramSerializedSnapTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L111)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L90)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/snapper/e-snapper-target.ts#L80)
