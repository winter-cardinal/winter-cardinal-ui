[Winter Cardinal UI - v0.205.1](../index.md) / DChartSelection

# Interface: DChartSelection<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`DChartSelection`**

## Implemented by

- [`DChartSelectionSimple`](../classes/DChartSelectionSimple.md)

## Table of contents

### Methods

- [addListener](DChartSelection.md#addlistener)
- [bind](DChartSelection.md#bind)
- [emit](DChartSelection.md#emit)
- [eventNames](DChartSelection.md#eventnames)
- [listenerCount](DChartSelection.md#listenercount)
- [listeners](DChartSelection.md#listeners)
- [off](DChartSelection.md#off)
- [on](DChartSelection.md#on)
- [once](DChartSelection.md#once)
- [removeAllListeners](DChartSelection.md#removealllisteners)
- [removeListener](DChartSelection.md#removelistener)
- [unbind](DChartSelection.md#unbind)
- [update](DChartSelection.md#update)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSelection`](DChartSelection.md)<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSelection`](DChartSelection.md)<`CHART`\>

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-selection.ts#L27)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSelection`](DChartSelection.md)<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSelection`](DChartSelection.md)<`CHART`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSelection`](DChartSelection.md)<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSelection`](DChartSelection.md)<`CHART`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSelection`](DChartSelection.md)<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DChartSelection`](DChartSelection.md)<`CHART`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSelection`](DChartSelection.md)<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSelection`](DChartSelection.md)<`CHART`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSelection`](DChartSelection.md)<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSelection`](DChartSelection.md)<`CHART`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-selection.ts#L28)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-selection.ts#L29)
