[Winter Cardinal UI - v0.442.0](../index.md) / DChartSelectionSimple

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
- [\_dismiss](DChartSelectionSimple.md#_dismiss)
- [\_hovered](DChartSelectionSimple.md#_hovered)
- [\_onLongPressBound](DChartSelectionSimple.md#_onlongpressbound)
- [\_onMoveBound](DChartSelectionSimple.md#_onmovebound)
- [\_onTapBound](DChartSelectionSimple.md#_ontapbound)
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
- [onLongPress](DChartSelectionSimple.md#onlongpress)
- [onMove](DChartSelectionSimple.md#onmove)
- [onRender](DChartSelectionSimple.md#onrender)
- [onTap](DChartSelectionSimple.md#ontap)
- [once](DChartSelectionSimple.md#once)
- [removeAllListeners](DChartSelectionSimple.md#removealllisteners)
- [removeListener](DChartSelectionSimple.md#removelistener)
- [toDismiss](DChartSelectionSimple.md#todismiss)
- [toDismissLongPress](DChartSelectionSimple.md#todismisslongpress)
- [toDismissNoSeries](DChartSelectionSimple.md#todismissnoseries)
- [toDismissTap](DChartSelectionSimple.md#todismisstap)
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

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L83)

## Properties

### \_container

• `Protected` **\_container**: ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L74)

___

### \_dismiss

• `Protected` **\_dismiss**: [`DChartSelectionSimpleDismiss`](../interfaces/DChartSelectionSimpleDismiss.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L77)

___

### \_hovered

• `Protected` **\_hovered**: [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L76)

___

### \_onLongPressBound

• `Protected` **\_onLongPressBound**: (`target`: `unknown`, `e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`target`, `e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L81)

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

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L79)

___

### \_onTapBound

• `Protected` **\_onTapBound**: (`target`: `unknown`, `e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`target`, `e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L80)

___

### \_selected

• `Protected` **\_selected**: [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L75)

___

### WORK\_SELECT

▪ `Static` `Protected` **WORK\_SELECT**: [`DChartSeriesHitResult`](DChartSeriesHitResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L72)

## Accessors

### hovered

• `get` **hovered**(): [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Returns

[`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L327)

___

### selected

• `get` **selected**(): [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Returns

[`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L323)

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

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:297](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L297)

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
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint) |
| `options?` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L167)

___

### newSelected

▸ **newSelected**(`point`, `options?`): [`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint) |
| `options?` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSub`](../interfaces/DChartSelectionSub.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L160)

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

[DChartSelection](../interfaces/DChartSelection.md).[off](../interfaces/DChartSelection.md#off)

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

[DChartSelection](../interfaces/DChartSelection.md).[on](../interfaces/DChartSelection.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onLongPress

▸ **onLongPress**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L262)

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

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L273)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[onRender](../interfaces/DChartSelection.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L342)

___

### onTap

▸ **onTap**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L233)

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

[DChartSelection](../interfaces/DChartSelection.md).[once](../interfaces/DChartSelection.md#once)

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

[DChartSelection](../interfaces/DChartSelection.md).[removeAllListeners](../interfaces/DChartSelection.md#removealllisteners)

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

[DChartSelection](../interfaces/DChartSelection.md).[removeListener](../interfaces/DChartSelection.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### toDismiss

▸ **toDismiss**(`options?`): [`DChartSelectionSimpleDismiss`](../interfaces/DChartSelectionSimpleDismiss.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionSimpleOptions`](../interfaces/DChartSelectionSimpleOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSimpleDismiss`](../interfaces/DChartSelectionSimpleDismiss.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L113)

___

### toDismissLongPress

▸ **toDismissLongPress**(`options?`): [`DChartSelectionSimpleDismissLongPress`](../interfaces/DChartSelectionSimpleDismissLongPress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionSimpleDismissLongPressOptions`](../interfaces/DChartSelectionSimpleDismissLongPressOptions.md) |

#### Returns

[`DChartSelectionSimpleDismissLongPress`](../interfaces/DChartSelectionSimpleDismissLongPress.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L144)

___

### toDismissNoSeries

▸ **toDismissNoSeries**(`options?`): [`DChartSelectionSimpleDismissNoSeries`](../interfaces/DChartSelectionSimpleDismissNoSeries.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionSimpleDismissNoSeriesOptions`](../interfaces/DChartSelectionSimpleDismissNoSeriesOptions.md) |

#### Returns

[`DChartSelectionSimpleDismissNoSeries`](../interfaces/DChartSelectionSimpleDismissNoSeries.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L152)

___

### toDismissTap

▸ **toDismissTap**(`options?`): [`DChartSelectionSimpleDismissTap`](../interfaces/DChartSelectionSimpleDismissTap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSelectionSimpleDismissTapOptions`](../interfaces/DChartSelectionSimpleDismissTapOptions.md) |

#### Returns

[`DChartSelectionSimpleDismissTap`](../interfaces/DChartSelectionSimpleDismissTap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L135)

___

### toHoveredOptions

▸ **toHoveredOptions**(`point`, `options?`): [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint) |
| `options?` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L181)

___

### toSelectedOptions

▸ **toSelectedOptions**(`point`, `options?`): [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint) |
| `options?` | [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |

#### Returns

[`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L174)

___

### toSubOptions

▸ **toSubOptions**(`point`, `options`, `state`): [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`DChartSelectionPoint`](../index.md#dchartselectionpoint) |
| `options` | `undefined` \| [`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\> |
| `state` | `string` |

#### Returns

[`DChartSelectionSubOptions`](../interfaces/DChartSelectionSubOptions.md)\<`CHART`, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L188)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[unbind](../interfaces/DChartSelection.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L308)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DChartSelection](../interfaces/DChartSelection.md).[update](../interfaces/DChartSelection.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts:331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-selection-simple.ts#L331)
