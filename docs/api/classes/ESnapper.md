[Winter Cardinal UI - v0.154.0](../index.md) / ESnapper

# Class: ESnapper

## Hierarchy

- `EventEmitter`

  ↳ **`ESnapper`**

## Table of contents

### Constructors

- [constructor](ESnapper.md#constructor)

### Properties

- [\_isEnabled](ESnapper.md#_isenabled)
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

• **new ESnapper**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ESnapperParent`](../interfaces/ESnapperParent.md) |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L73)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L67)

___

### \_lengths

• `Protected` **\_lengths**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L53)

___

### \_normals

• `Protected` **\_normals**: `Point`[]

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L52)

___

### \_parent

• `Protected` **\_parent**: [`ESnapperParent`](../interfaces/ESnapperParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L65)

___

### \_points

• `Protected` **\_points**: `Point`[]

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L51)

___

### \_workScale

• `Protected` **\_workScale**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L55)

___

### \_workScaleResult

• `Protected` **\_workScaleResult**: [`ESnapperResultScale`](ESnapperResultScale.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L56)

___

### \_workSnap

• `Protected` **\_workSnap**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L60)

___

### \_workSnapRectangle

• `Protected` **\_workSnapRectangle**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L61)

___

### \_workSnapResultX

• `Protected` **\_workSnapResultX**: [`ESnapperResult`](ESnapperResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L62)

___

### \_workSnapResultY

• `Protected` **\_workSnapResultY**: [`ESnapperResult`](ESnapperResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L63)

___

### \_workTranslate

• `Protected` **\_workTranslate**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L58)

___

### grid

• **grid**: [`ESnapperGrid`](ESnapperGrid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L69)

___

### target

• **target**: [`ESnapperTarget`](ESnapperTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L71)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L112)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L116)

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

▸ `Protected` **calcNormalizedVector**(`p0`, `p1`, `result`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p0` | `IPoint` |
| `p1` | `IPoint` |
| `result` | `Point` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:275](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L275)

___

### calcScaleSnapped1D

▸ `Protected` **calcScaleSnapped1D**(`transform`, `point`, `normal`, `length`, `axis`, `result`): `void`

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L352)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L411)

___

### calcScaleSnappedX

▸ `Protected` **calcScaleSnappedX**(`transform`, `point`, `normal`, `length`, `result`): `void`

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L391)

___

### calcScaleSnappedXY

▸ `Protected` **calcScaleSnappedXY**(`transform`, `pointO`, `pointX`, `pointY`, `normals`, `lengths`, `result`): `void`

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L465)

___

### calcScaleSnappedY

▸ `Protected` **calcScaleSnappedY**(`transform`, `point`, `normal`, `length`, `result`): `void`

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:401](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L401)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L596)

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

### getGridSizeRotation

▸ `Protected` **getGridSizeRotation**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L236)

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
| `context?` | `any` | - |

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
| `context?` | `any` | - |

#### Returns

[`ESnapper`](ESnapper.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### prepare

▸ `Protected` **prepare**(`modifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modifier` | [`ESnapperModifier`](../interfaces/ESnapperModifier.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L123)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L232)

___

### prepareForScale

▸ **prepareForScale**(`modifier`, `anchor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modifier` | [`ESnapperModifier`](../interfaces/ESnapperModifier.md) |
| `anchor` | [`ESnapperModifierAnchor`](../index.md#esnappermodifieranchor) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:290](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L290)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L143)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L586)

___

### serialize

▸ **serialize**(): [`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md)

#### Returns

[`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L592)

___

### setScaleSnappedResult

▸ `Protected` **setScaleSnappedResult**(`distance`, `length`, `move`, `axis`, `result`): `void`

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L332)

___

### snap

▸ `Protected` **snap**(`point`, `result`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `IPoint` |
| `result` | `IPoint` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L149)

___

### toDegree

▸ `Protected` **toDegree**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L244)

___

### toRadian

▸ `Protected` **toRadian**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L240)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L248)

___

### toScaleSnapped

▸ **toScaleSnapped**(`transform`, `anchor`, `keepRatio`, `scale`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `anchor` | [`ESnapperModifierAnchor`](../index.md#esnappermodifieranchor) |
| `keepRatio` | `boolean` |
| `scale` | `IPoint` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L479)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L183)

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

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L197)
