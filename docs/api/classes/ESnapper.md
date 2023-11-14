[Winter Cardinal UI - v0.374.0](../index.md) / ESnapper

# Class: ESnapper

## Hierarchy

- `EventEmitter`

  ↳ **`ESnapper`**

## Table of contents

### Constructors

- [constructor](ESnapper.md#constructor)

### Properties

- [\_isEnabled](ESnapper.md#_isenabled)
- [\_isEnabledDefault](ESnapper.md#_isenableddefault)
- [\_lengths](ESnapper.md#_lengths)
- [\_normals](ESnapper.md#_normals)
- [\_parent](ESnapper.md#_parent)
- [\_points](ESnapper.md#_points)
- [\_workScale](ESnapper.md#_workscale)
- [\_workScaleResult](ESnapper.md#_workscaleresult)
- [\_workSnap](ESnapper.md#_worksnap)
- [\_workSnapRectangle](ESnapper.md#_worksnaprectangle)
- [\_workSnapResultX](ESnapper.md#_worksnapresultx)
- [\_workSnapResultY](ESnapper.md#_worksnapresulty)
- [\_workTranslate](ESnapper.md#_worktranslate)
- [grid](ESnapper.md#grid)
- [target](ESnapper.md#target)

### Accessors

- [enable](ESnapper.md#enable)

### Methods

- [addListener](ESnapper.md#addlistener)
- [calcNormalizedVector](ESnapper.md#calcnormalizedvector)
- [calcScaleSnapped1D](ESnapper.md#calcscalesnapped1d)
- [calcScaleSnapped2D](ESnapper.md#calcscalesnapped2d)
- [calcScaleSnappedX](ESnapper.md#calcscalesnappedx)
- [calcScaleSnappedXY](ESnapper.md#calcscalesnappedxy)
- [calcScaleSnappedY](ESnapper.md#calcscalesnappedy)
- [deserialize](ESnapper.md#deserialize)
- [emit](ESnapper.md#emit)
- [eventNames](ESnapper.md#eventnames)
- [getGridSizeRotation](ESnapper.md#getgridsizerotation)
- [listenerCount](ESnapper.md#listenercount)
- [listeners](ESnapper.md#listeners)
- [off](ESnapper.md#off)
- [on](ESnapper.md#on)
- [once](ESnapper.md#once)
- [prepare](ESnapper.md#prepare)
- [prepareForRotate](ESnapper.md#prepareforrotate)
- [prepareForScale](ESnapper.md#prepareforscale)
- [prepareForTranslate](ESnapper.md#preparefortranslate)
- [removeAllListeners](ESnapper.md#removealllisteners)
- [removeListener](ESnapper.md#removelistener)
- [reset](ESnapper.md#reset)
- [serialize](ESnapper.md#serialize)
- [setScaleSnappedResult](ESnapper.md#setscalesnappedresult)
- [snap](ESnapper.md#snap)
- [toDegree](ESnapper.md#todegree)
- [toRadian](ESnapper.md#toradian)
- [toRotationSnapped](ESnapper.md#torotationsnapped)
- [toScaleSnapped](ESnapper.md#toscalesnapped)
- [toSnapped](ESnapper.md#tosnapped)
- [toTranslationSnapped](ESnapper.md#totranslationsnapped)

## Constructors

### constructor

• **new ESnapper**(`parent`, `theme`, `options?`): [`ESnapper`](ESnapper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ESnapperParent`](../interfaces/ESnapperParent.md) |
| `theme` | [`EThemeSnapper`](../interfaces/EThemeSnapper.md) |
| `options?` | [`ESnapperOptions`](../interfaces/ESnapperOptions.md) |

#### Returns

[`ESnapper`](ESnapper.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L84)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L77)

___

### \_isEnabledDefault

• `Protected` **\_isEnabledDefault**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L78)

___

### \_lengths

• `Protected` **\_lengths**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L63)

___

### \_normals

• `Protected` **\_normals**: `Point`[]

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L62)

___

### \_parent

• `Protected` **\_parent**: [`ESnapperParent`](../interfaces/ESnapperParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L75)

___

### \_points

• `Protected` **\_points**: `Point`[]

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L61)

___

### \_workScale

• `Protected` **\_workScale**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L65)

___

### \_workScaleResult

• `Protected` **\_workScaleResult**: [`ESnapperResultScale`](ESnapperResultScale.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L66)

___

### \_workSnap

• `Protected` **\_workSnap**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L70)

___

### \_workSnapRectangle

• `Protected` **\_workSnapRectangle**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L71)

___

### \_workSnapResultX

• `Protected` **\_workSnapResultX**: [`ESnapperResult`](ESnapperResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L72)

___

### \_workSnapResultY

• `Protected` **\_workSnapResultY**: [`ESnapperResult`](ESnapperResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L73)

___

### \_workTranslate

• `Protected` **\_workTranslate**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L68)

___

### grid

• **grid**: [`ESnapperGrid`](ESnapperGrid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L80)

___

### target

• **target**: [`ESnapperTarget`](ESnapperTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L82)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L121)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L125)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`ESnapper`](ESnapper.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`ESnapper`](ESnapper.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### calcNormalizedVector

▸ **calcNormalizedVector**(`p0`, `p1`, `result`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p0` | `IPoint` |
| `p1` | `IPoint` |
| `result` | `Point` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L284)

___

### calcScaleSnapped1D

▸ **calcScaleSnapped1D**(`transform`, `point`, `normal`, `length`, `axis`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `point` | `Point` |
| `normal` | `IPoint` |
| `length` | `number` |
| `axis` | `boolean` |
| `result` | [`ESnapperResultScale`](ESnapperResultScale.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L361)

___

### calcScaleSnapped2D

▸ **calcScaleSnapped2D**(`transform`, `point`, `normals`, `lengths`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `point` | `Point` |
| `normals` | `IPoint`[] |
| `lengths` | `number`[] |
| `result` | [`ESnapperResultScale`](ESnapperResultScale.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L420)

___

### calcScaleSnappedX

▸ **calcScaleSnappedX**(`transform`, `point`, `normal`, `length`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `point` | `Point` |
| `normal` | `IPoint` |
| `length` | `number` |
| `result` | [`ESnapperResultScale`](ESnapperResultScale.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L400)

___

### calcScaleSnappedXY

▸ **calcScaleSnappedXY**(`transform`, `pointO`, `pointX`, `pointY`, `normals`, `lengths`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `pointO` | `Point` |
| `pointX` | `Point` |
| `pointY` | `Point` |
| `normals` | `IPoint`[] |
| `lengths` | `number`[] |
| `result` | [`ESnapperResultScale`](ESnapperResultScale.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L474)

___

### calcScaleSnappedY

▸ **calcScaleSnappedY**(`transform`, `point`, `normal`, `length`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `point` | `Point` |
| `normal` | `IPoint` |
| `length` | `number` |
| `result` | [`ESnapperResultScale`](ESnapperResultScale.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L410)

___

### deserialize

▸ **deserialize**(`serialized`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:605](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L605)

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

### getGridSizeRotation

▸ **getGridSizeRotation**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:245](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L245)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`ESnapper`](ESnapper.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`ESnapper`](ESnapper.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`ESnapper`](ESnapper.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`ESnapper`](ESnapper.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`ESnapper`](ESnapper.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`ESnapper`](ESnapper.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### prepare

▸ **prepare**(`modifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modifier` | [`ESnapperModifier`](../interfaces/ESnapperModifier.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L132)

___

### prepareForRotate

▸ **prepareForRotate**(`modifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modifier` | [`ESnapperModifier`](../interfaces/ESnapperModifier.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L241)

___

### prepareForScale

▸ **prepareForScale**(`modifier`, `anchor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modifier` | [`ESnapperModifier`](../interfaces/ESnapperModifier.md) |
| `anchor` | [`ESnapperModifierAnchor`](../index.md#esnappermodifieranchor-1) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L299)

___

### prepareForTranslate

▸ **prepareForTranslate**(`modifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modifier` | [`ESnapperModifier`](../interfaces/ESnapperModifier.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L152)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ESnapper`](ESnapper.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`ESnapper`](ESnapper.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`ESnapper`](ESnapper.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`ESnapper`](ESnapper.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:595](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L595)

___

### serialize

▸ **serialize**(): [`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md)

#### Returns

[`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L601)

___

### setScaleSnappedResult

▸ **setScaleSnappedResult**(`distance`, `length`, `move`, `axis`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |
| `length` | `number` |
| `move` | `number` |
| `axis` | `boolean` |
| `result` | [`ESnapperResultScale`](ESnapperResultScale.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:341](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L341)

___

### snap

▸ **snap**(`point`, `result`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `IPoint` |
| `result` | `IPoint` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L158)

___

### toDegree

▸ **toDegree**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L253)

___

### toRadian

▸ **toRadian**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L249)

___

### toRotationSnapped

▸ **toRotationSnapped**(`baseRotation`, `deltaRotation`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseRotation` | `number` |
| `deltaRotation` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L257)

___

### toScaleSnapped

▸ **toScaleSnapped**(`transform`, `anchor`, `keepRatio`, `scale`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `anchor` | [`ESnapperModifierAnchor`](../index.md#esnappermodifieranchor-1) |
| `keepRatio` | `boolean` |
| `scale` | `IPoint` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L488)

___

### toSnapped

▸ **toSnapped**(`point`, `result`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `IPoint` |
| `result` | `IPoint` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L192)

___

### toTranslationSnapped

▸ **toTranslationSnapped**(`delta`, `result`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `IPoint` |
| `result` | `IPoint` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L206)
