[Winter Cardinal UI - v0.442.0](../index.md) / DDiagramEditorEvents

# Interface: DDiagramEditorEvents\<EMITTER\>

[DDiagramEditor](../classes/DDiagramEditor.md) events.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Hierarchy

- [`DDiagramBaseEvents`](DDiagramBaseEvents.md)\<[`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md), `EMITTER`\>

  ↳ **`DDiagramEditorEvents`**

## Table of contents

### Methods

- [added](DDiagramEditorEvents.md#added)
- [change](DDiagramEditorEvents.md#change)
- [click](DDiagramEditorEvents.md#click)
- [dblclick](DDiagramEditorEvents.md#dblclick)
- [deleted](DDiagramEditorEvents.md#deleted)
- [deleting](DDiagramEditorEvents.md#deleting)
- [down](DDiagramEditorEvents.md#down)
- [init](DDiagramEditorEvents.md#init)
- [keydown](DDiagramEditorEvents.md#keydown)
- [keyup](DDiagramEditorEvents.md#keyup)
- [move](DDiagramEditorEvents.md#move)
- [opened](DDiagramEditorEvents.md#opened)
- [opening](DDiagramEditorEvents.md#opening)
- [out](DDiagramEditorEvents.md#out)
- [over](DDiagramEditorEvents.md#over)
- [ready](DDiagramEditorEvents.md#ready)
- [removed](DDiagramEditorEvents.md#removed)
- [resize](DDiagramEditorEvents.md#resize)
- [saved](DDiagramEditorEvents.md#saved)
- [saving](DDiagramEditorEvents.md#saving)
- [scale](DDiagramEditorEvents.md#scale)
- [serialized](DDiagramEditorEvents.md#serialized)
- [serializing](DDiagramEditorEvents.md#serializing)
- [set](DDiagramEditorEvents.md#set)
- [shortcut](DDiagramEditorEvents.md#shortcut)
- [skew](DDiagramEditorEvents.md#skew)
- [statechange](DDiagramEditorEvents.md#statechange)
- [unset](DDiagramEditorEvents.md#unset)
- [up](DDiagramEditorEvents.md#up)
- [wheel](DDiagramEditorEvents.md#wheel)

## Methods

### added

▸ **added**(`container`): `void`

Triggered when added to a container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | a container added to |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[added](DDiagramBaseEvents.md#added)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L100)

___

### change

▸ **change**(`emitter`): `void`

Triggered when a serialized data is changed without using the set / unset methods.
This happens, for instance, when the name or the ID of the serialized data is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L43)

___

### click

▸ **click**(`e`, `emitter`): `void`

Triggered when an emitter is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[click](DDiagramBaseEvents.md#click)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L232)

___

### dblclick

▸ **dblclick**(`e`, `interactionManager`, `emitter`): `void`

Triggered when an emitter is double clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` | an event |
| `interactionManager` | `InteractionManager` | an interaction manager |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[dblclick](DDiagramBaseEvents.md#dblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L241)

___

### deleted

▸ **deleted**(`reason`, `emitter`): `void`

Triggered when deleted successfully or when failed to delete.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter. |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L105)

___

### deleting

▸ **deleting**(`emitter`): `void`

Triggered before deleting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L97)

___

### down

▸ **down**(`e`, `emitter`): `void`

Triggered when a pointer gets down on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[down](DDiagramBaseEvents.md#down)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L216)

___

### init

▸ **init**(`emitter`): `void`

Triggered when an initialization is finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[init](DDiagramBaseEvents.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L93)

___

### keydown

▸ **keydown**(`e`, `emitter`): `void`

Triggered when a key gets down.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | a keyboard event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[keydown](DDiagramBaseEvents.md#keydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L184)

___

### keyup

▸ **keyup**(`e`, `emitter`): `void`

Triggered when a key gets up.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | a keyboard event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[keyup](DDiagramBaseEvents.md#keyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L192)

___

### move

▸ **move**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

Triggered when moved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new x |
| `newY` | `number` | a new y |
| `oldX` | `number` | an old x |
| `oldY` | `number` | an old y |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[move](DDiagramBaseEvents.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L118)

___

### opened

▸ **opened**(`reason`, `emitter`): `void`

Triggered when opened successfully or when failed to open.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L90)

___

### opening

▸ **opening**(`emitter`): `void`

Triggered before opening.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L82)

___

### out

▸ **out**(`e`, `emitter`): `void`

Triggered when a pointer gets out of an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[out](DDiagramBaseEvents.md#out)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L208)

___

### over

▸ **over**(`e`, `emitter`): `void`

Triggered when a pointer gets on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[over](DDiagramBaseEvents.md#over)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L200)

___

### ready

▸ **ready**(`emitter`): `void`

Triggered when all the shape initializations are finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[ready](DDiagramBaseEvents.md#ready)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L42)

___

### removed

▸ **removed**(`container`): `void`

Triggered when removed from a container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | a container removed from |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[removed](DDiagramBaseEvents.md#removed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L107)

___

### resize

▸ **resize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`, `emitter`): `void`

Triggered when resized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newWidth` | `number` | a new width |
| `newHeight` | `number` | a new height |
| `oldWidth` | `number` | an old width |
| `oldHeight` | `number` | an old height |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[resize](DDiagramBaseEvents.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L129)

___

### saved

▸ **saved**(`reason`, `emitter`): `void`

Triggered when saved successfully or when failed to save.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L75)

___

### saving

▸ **saving**(`simple`, `emitter`): `void`

Triggered before saving.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `simple` | [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md) | a serialized data |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L67)

___

### scale

▸ **scale**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

Triggered when scaled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new x |
| `newY` | `number` | a new y |
| `oldX` | `number` | an old x |
| `oldY` | `number` | an old y |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[scale](DDiagramBaseEvents.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L146)

___

### serialized

▸ **serialized**(`canvas`, `reason`, `emitter`): `void`

Triggered when serialized successfully or when failed to serialize.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md)\>\> | - |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L59)

___

### serializing

▸ **serializing**(`canvas`, `emitter`): `void`

Triggered before serializing a canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md)\>\> | a canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L51)

___

### set

▸ **set**(`canvas`, `emitter`): `void`

Triggered when a canvas is set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md)\>\> | a new canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[set](DDiagramBaseEvents.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L34)

___

### shortcut

▸ **shortcut**(`e`, `emitter`): `void`

Triggered when a shortcut is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | an event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[shortcut](DDiagramBaseEvents.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L253)

___

### skew

▸ **skew**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

Triggered when skewed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new x |
| `newY` | `number` | a new y |
| `oldX` | `number` | an old x |
| `oldY` | `number` | an old y |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[skew](DDiagramBaseEvents.md#skew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L157)

___

### statechange

▸ **statechange**(`newState`, `oldState`, `emitter`): `void`

Triggered when a state is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | [`DBaseStateSet`](DBaseStateSet.md) | a new state |
| `oldState` | [`DBaseStateSet`](DBaseStateSet.md) | an old state |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[statechange](DDiagramBaseEvents.md#statechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L166)

___

### unset

▸ **unset**(`canvas`, `emitter`): `void`

Triggered when a canvas is removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md)\>\> | a removed canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[unset](DDiagramBaseEvents.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L26)

___

### up

▸ **up**(`e`, `emitter`): `void`

Triggered when a pointer gets up on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[up](DDiagramBaseEvents.md#up)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L224)

___

### wheel

▸ **wheel**(`e`, `deltas`, `global`, `emitter`): `void`

Triggered when a wheel moves.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `WheelEvent` | a wheel event |
| `deltas` | [`UtilWheelEventDeltas`](UtilWheelEventDeltas.md) | wheel move amounts |
| `global` | `Point` | a point wheel moved |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDiagramBaseEvents](DDiagramBaseEvents.md).[wheel](DDiagramBaseEvents.md#wheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L176)
