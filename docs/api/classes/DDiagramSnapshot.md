[Winter Cardinal UI - v0.407.0](../index.md) / DDiagramSnapshot

# Class: DDiagramSnapshot\<CANVAS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CANVAS` | extends [`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md) = [`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`DDiagramSnapshot`**

## Table of contents

### Constructors

- [constructor](DDiagramSnapshot.md#constructor)

### Properties

- [\_parent](DDiagramSnapshot.md#_parent)

### Methods

- [addListener](DDiagramSnapshot.md#addlistener)
- [create](DDiagramSnapshot.md#create)
- [createAsFile](DDiagramSnapshot.md#createasfile)
- [createAsUrl](DDiagramSnapshot.md#createasurl)
- [emit](DDiagramSnapshot.md#emit)
- [eventNames](DDiagramSnapshot.md#eventnames)
- [listenerCount](DDiagramSnapshot.md#listenercount)
- [listeners](DDiagramSnapshot.md#listeners)
- [off](DDiagramSnapshot.md#off)
- [on](DDiagramSnapshot.md#on)
- [once](DDiagramSnapshot.md#once)
- [removeAllListeners](DDiagramSnapshot.md#removealllisteners)
- [removeListener](DDiagramSnapshot.md#removelistener)
- [toCleanupBackground](DDiagramSnapshot.md#tocleanupbackground)
- [toCleanupReflow](DDiagramSnapshot.md#tocleanupreflow)
- [toCleanupSnap](DDiagramSnapshot.md#tocleanupsnap)
- [toScale](DDiagramSnapshot.md#toscale)

## Constructors

### constructor

• **new DDiagramSnapshot**\<`CANVAS`\>(`parent`, `options?`): [`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CANVAS` | extends [`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md) = [`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DDiagramSnapshotParent`](../interfaces/DDiagramSnapshotParent.md)\<`CANVAS`\> |
| `options?` | [`DDiagramSnapshotOptions`](../interfaces/DDiagramSnapshotOptions.md)\<`CANVAS`, `any`\> |

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L88)

## Properties

### \_parent

• `Protected` **\_parent**: [`DDiagramSnapshotParent`](../interfaces/DDiagramSnapshotParent.md)\<`CANVAS`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L86)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### create

▸ **create**\<`DATA`\>(`options`): `undefined` \| `DATA`

#### Type parameters

| Name |
| :------ |
| `DATA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DDiagramSnapshotCreateOptions`](../interfaces/DDiagramSnapshotCreateOptions.md)\<`CANVAS`, `DATA`\> |

#### Returns

`undefined` \| `DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L234)

___

### createAsFile

▸ **createAsFile**(`filename`): `void`

Creates and downloads a snapshot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | a filename |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L144)

▸ **createAsFile**(`size`, `filename`): `void`

Creates and downloads a snapshot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | ``null`` \| `number` | a maximum image size |
| `filename` | `string` | a filename |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L152)

▸ **createAsFile**(`options`): `void`

Creates and downloads a snapshot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`DDiagramSnapshotCreateAsFileOptions`](../interfaces/DDiagramSnapshotCreateAsFileOptions.md) | options |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L159)

___

### createAsUrl

▸ **createAsUrl**(`size?`): `undefined` \| `string`

Creates a snapshot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | ``null`` \| `number` | a maximum image size |

#### Returns

`undefined` \| `string`

an URL of a created image or undefined

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L108)

▸ **createAsUrl**(`options`): `undefined` \| `string`

Creates a snapshot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`DDiagramSnapshotCreateAsUrlOptions`](../interfaces/DDiagramSnapshotCreateAsUrlOptions.md) | options |

#### Returns

`undefined` \| `string`

an URL of a created image or undefined

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L116)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)\<`CANVAS`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### toCleanupBackground

▸ **toCleanupBackground**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DDiagramSnapshotCreateOptions`](../interfaces/DDiagramSnapshotCreateOptions.md)\<`CANVAS`, `unknown`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L210)

___

### toCleanupReflow

▸ **toCleanupReflow**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DDiagramSnapshotCreateOptions`](../interfaces/DDiagramSnapshotCreateOptions.md)\<`CANVAS`, `unknown`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L223)

___

### toCleanupSnap

▸ **toCleanupSnap**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DDiagramSnapshotCreateOptions`](../interfaces/DDiagramSnapshotCreateOptions.md)\<`CANVAS`, `unknown`\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L199)

___

### toScale

▸ **toScale**(`size`, `canvas`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `undefined` \| ``null`` \| `number` |
| `canvas` | `CANVAS` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L192)
