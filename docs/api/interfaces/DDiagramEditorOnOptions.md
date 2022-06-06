[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramEditorOnOptions

# Interface: DDiagramEditorOnOptions<EMITTER\>

[DDiagramEditor](../classes/DDiagramEditor.md) "on" options.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Hierarchy

- `Partial`<[`DDiagramEditorEvents`](DDiagramEditorEvents.md)<`EMITTER`\>\>

- `DOnOptions`

  ↳ **`DDiagramEditorOnOptions`**

## Table of contents

### Methods

- [added](DDiagramEditorOnOptions.md#added)
- [change](DDiagramEditorOnOptions.md#change)
- [dblclick](DDiagramEditorOnOptions.md#dblclick)
- [deleted](DDiagramEditorOnOptions.md#deleted)
- [deleting](DDiagramEditorOnOptions.md#deleting)
- [down](DDiagramEditorOnOptions.md#down)
- [init](DDiagramEditorOnOptions.md#init)
- [keydown](DDiagramEditorOnOptions.md#keydown)
- [keyup](DDiagramEditorOnOptions.md#keyup)
- [move](DDiagramEditorOnOptions.md#move)
- [opened](DDiagramEditorOnOptions.md#opened)
- [opening](DDiagramEditorOnOptions.md#opening)
- [out](DDiagramEditorOnOptions.md#out)
- [over](DDiagramEditorOnOptions.md#over)
- [ready](DDiagramEditorOnOptions.md#ready)
- [removed](DDiagramEditorOnOptions.md#removed)
- [resize](DDiagramEditorOnOptions.md#resize)
- [saved](DDiagramEditorOnOptions.md#saved)
- [saving](DDiagramEditorOnOptions.md#saving)
- [scale](DDiagramEditorOnOptions.md#scale)
- [serialized](DDiagramEditorOnOptions.md#serialized)
- [serializing](DDiagramEditorOnOptions.md#serializing)
- [set](DDiagramEditorOnOptions.md#set)
- [skew](DDiagramEditorOnOptions.md#skew)
- [statechange](DDiagramEditorOnOptions.md#statechange)
- [unset](DDiagramEditorOnOptions.md#unset)
- [up](DDiagramEditorOnOptions.md#up)
- [wheel](DDiagramEditorOnOptions.md#wheel)

## Methods

### added

▸ `Optional` **added**(`container`): `void`

Triggered when added to a container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | a container added to |

#### Returns

`void`

#### Inherited from

Partial.added

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L102)

___

### change

▸ `Optional` **change**(`emitter`): `void`

Triggered when a serialized data is changed without using the set / unset methods.
This happens, for instance, when the name or the ID of the serialized data is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.change

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L41)

___

### dblclick

▸ `Optional` **dblclick**(`e`, `interactionManager`, `emitter`): `void`

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

Partial.dblclick

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L235)

___

### deleted

▸ `Optional` **deleted**(`reason`, `emitter`): `void`

Triggered when deleted successfully or when failed to delete.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter. |

#### Returns

`void`

#### Inherited from

Partial.deleted

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L103)

___

### deleting

▸ `Optional` **deleting**(`emitter`): `void`

Triggered before deleting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.deleting

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L95)

___

### down

▸ `Optional` **down**(`e`, `emitter`): `void`

Triggered when a pointer gets down on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.down

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L218)

___

### init

▸ `Optional` **init**(`emitter`): `void`

Triggered when an initialization is finished.

    on( "init", ( emitter ) => {} )

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.init

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L95)

___

### keydown

▸ `Optional` **keydown**(`e`, `emitter`): `void`

Triggered when a key gets down.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | a keyboard event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.keydown

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L186)

___

### keyup

▸ `Optional` **keyup**(`e`, `emitter`): `void`

Triggered when a key gets up.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | a keyboard event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.keyup

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L194)

___

### move

▸ `Optional` **move**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

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

Partial.move

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L120)

___

### opened

▸ `Optional` **opened**(`reason`, `emitter`): `void`

Triggered when opened successfully or when failed to open.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.opened

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L88)

___

### opening

▸ `Optional` **opening**(`emitter`): `void`

Triggered before opening.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.opening

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L80)

___

### out

▸ `Optional` **out**(`e`, `emitter`): `void`

Triggered when a pointer gets out of an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.out

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L210)

___

### over

▸ `Optional` **over**(`e`, `emitter`): `void`

Triggered when a pointer gets on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.over

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L202)

___

### ready

▸ `Optional` **ready**(`emitter`): `void`

Triggered when all the shape initializations are finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.ready

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L41)

___

### removed

▸ `Optional` **removed**(`container`): `void`

Triggered when removed from a container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | a container removed from |

#### Returns

`void`

#### Inherited from

Partial.removed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L109)

___

### resize

▸ `Optional` **resize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`, `emitter`): `void`

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

Partial.resize

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L131)

___

### saved

▸ `Optional` **saved**(`reason`, `emitter`): `void`

Triggered when saved successfully or when failed to save.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.saved

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L73)

___

### saving

▸ `Optional` **saving**(`simple`, `emitter`): `void`

Triggered before saving.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `simple` | [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md) | a serialized data |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.saving

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L65)

___

### scale

▸ `Optional` **scale**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

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

Partial.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L148)

___

### serialized

▸ `Optional` **serialized**(`canvas`, `reason`, `emitter`): `void`

Triggered when serialized successfully or when failed to serialize.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md)<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md)\>\> | - |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.serialized

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L57)

___

### serializing

▸ `Optional` **serializing**(`canvas`, `emitter`): `void`

Triggered before serializing a canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md)<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md)\>\> | a canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.serializing

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L49)

___

### set

▸ `Optional` **set**(`canvas`, `emitter`): `void`

Triggered when a canvas is set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md)<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md)\>\> | a new canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.set

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L34)

___

### skew

▸ `Optional` **skew**(`newX`, `newY`, `oldX`, `oldY`, `emitter`): `void`

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

Partial.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L159)

___

### statechange

▸ `Optional` **statechange**(`newState`, `oldState`, `emitter`): `void`

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

Partial.statechange

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L168)

___

### unset

▸ `Optional` **unset**(`canvas`, `emitter`): `void`

Triggered when a canvas is removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](../classes/DDiagramCanvasEditor.md)<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)<[`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md)\>\> | a removed canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.unset

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L26)

___

### up

▸ `Optional` **up**(`e`, `emitter`): `void`

Triggered when a pointer gets up on an emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.up

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L226)

___

### wheel

▸ `Optional` **wheel**(`e`, `deltas`, `global`, `emitter`): `void`

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

Partial.wheel

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L178)
