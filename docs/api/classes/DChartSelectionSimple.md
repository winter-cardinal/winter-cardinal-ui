[Winter Cardinal UI - v0.407.0](../index.md) / DChartSelectionSimple

# Class: DChartSelectionSimple\<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`DChartSelectionSimple`**

## Implements

- [`DChartSelection`](../interfaces/DChartSelection.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartSelectionSimple.md#constructor)

### Properties

- [\_container](DChartSelectionSimple.md#_container)
- [\_hovered](DChartSelectionSimple.md#_hovered)
- [\_onClickBound](DChartSelectionSimple.md#_onclickbound)
- [\_onMoveBound](DChartSelectionSimple.md#_onmovebound)
- [\_selected](DChartSelectionSimple.md#_selected)
- [WORK\_SELECT](DChartSelectionSimple.md#work_select)

### Accessors

- [hovered](DChartSelectionSimple.md#hovered)
- [selected](DChartSelectionSimple.md#selected)

### Methods

- [addListener](DChartSelectionSimple.md#addlistener)
- [bind](DChartSelectionSimple.md#bind)
- [emit](DChartSelectionSimple.md#emit)
- [eventNames](DChartSelectionSimple.md#eventnames)
- [listenerCount](DChartSelectionSimple.md#listenercount)
- [listeners](DChartSelectionSimple.md#listeners)
- [newHovered](DChartSelectionSimple.md#newhovered)
- [newSelected](DChartSelectionSimple.md#newselected)
- [off](DChartSelectionSimple.md#off)
- [on](DChartSelectionSimple.md#on)
- [onClick](DChartSelectionSimple.md#onclick)
- [onMove](DChartSelectionSimple.md#onmove)
- [onRender](DChartSelectionSimple.md#onrender)
- [once](DChartSelectionSimple.md#once)
- [removeAllListeners](DChartSelectionSimple.md#removealllisteners)
- [removeListener](DChartSelectionSimple.md#removelistener)
- [toHoveredOptions](DChartSelectionSimple.md#tohoveredoptions)
- [toSelectedOptions](DChartSelectionSimple.md#toselectedoptions)
- [toSubOptions](DChartSelectionSimple.md#tosuboptions)
- [unbind](DChartSelectionSimple.md#unbind)
- [update](DChartSelectionSimple.md#update)

## Constructors

### constructor

• **new DChartSelectionSimple**\<`CHART`\>(`options?`): [`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionSimpleOptions`](../interfaces/DChartSelectionSimpleOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L38)

## Properties

### \_container

• `Protected` **\_container**: ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L31)

___

### \_hovered

• `Protected` **\_hovered**: [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L33)

___

### \_onClickBound

• `Protected` **\_onClickBound**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L35)

___

### \_onMoveBound

• `Protected` **\_onMoveBound**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L36)

___

### \_selected

• `Protected` **\_selected**: [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L32)

___

### WORK\_SELECT

▪ `Static` `Protected` **WORK\_SELECT**: [`DChartSeriesHitResult`](DChartSeriesHitResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L29)

## Accessors

### hovered

• `get` **hovered**(): [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Returns

[`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L199)

___

### selected

• `get` **selected**(): [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Returns

[`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L195)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[addListener](../interfaces/DChartSelection.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### bind

▸ **bind**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |

#### Returns

`void`

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[bind](../interfaces/DChartSelection.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L174)

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

[DChartSelection](../interfaces/DChartSelection.md).[emit](../interfaces/DChartSelection.md#emit)

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

[DChartSelection](../interfaces/DChartSelection.md).[eventNames](../interfaces/DChartSelection.md#eventnames)

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

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[listenerCount](../interfaces/DChartSelection.md#listenercount)

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

[DChartSelection](../interfaces/DChartSelection.md).[listeners](../interfaces/DChartSelection.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newHovered

▸ **newHovered**(`point`, `options?`): [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint-1) |
| `options?` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L74)

___

### newSelected

▸ **newSelected**(`point`, `options?`): [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint-1) |
| `options?` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L67)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[off](../interfaces/DChartSelection.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

`this`.

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[on](../interfaces/DChartSelection.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onClick

▸ **onClick**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L140)

___

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L155)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[onRender](../interfaces/DChartSelection.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L214)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

`this`.

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[once](../interfaces/DChartSelection.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

`this`.

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[removeAllListeners](../interfaces/DChartSelection.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSelectionSimple`](DChartSelectionSimple.md)\<`CHART`\>

`this`.

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[removeListener](../interfaces/DChartSelection.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### toHoveredOptions

▸ **toHoveredOptions**(`point`, `options?`): [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint-1) |
| `options?` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L88)

___

### toSelectedOptions

▸ **toSelectedOptions**(`point`, `options?`): [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint-1) |
| `options?` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L81)

___

### toSubOptions

▸ **toSubOptions**(`point`, `options`, `state`): [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint-1) |
| `options` | `undefined` \| [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |
| `state` | `string` |

#### Returns

[`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L95)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[unbind](../interfaces/DChartSelection.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L183)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[update](../interfaces/DChartSelection.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L203)
