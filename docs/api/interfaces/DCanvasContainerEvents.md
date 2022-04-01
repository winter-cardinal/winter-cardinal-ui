[Winter Cardinal UI - v0.160.0](../index.md) / DCanvasContainerEvents

# Interface: DCanvasContainerEvents<CANVAS, EMITTER\>

[DCanvasContainer](../classes/DCanvasContainer.md) events.

## Type parameters

| Name |
| :------ |
| `CANVAS` |
| `EMITTER` |

## Hierarchy

- [`DBaseEvents`](DBaseEvents.md)<`EMITTER`\>

  ↳ **`DCanvasContainerEvents`**

  ↳↳ [`DDiagramBaseEvents`](DDiagramBaseEvents.md)

## Table of contents

### Methods

- [added](DCanvasContainerEvents.md#added)
- [dblclick](DCanvasContainerEvents.md#dblclick)
- [down](DCanvasContainerEvents.md#down)
- [init](DCanvasContainerEvents.md#init)
- [keydown](DCanvasContainerEvents.md#keydown)
- [keyup](DCanvasContainerEvents.md#keyup)
- [move](DCanvasContainerEvents.md#move)
- [out](DCanvasContainerEvents.md#out)
- [over](DCanvasContainerEvents.md#over)
- [removed](DCanvasContainerEvents.md#removed)
- [resize](DCanvasContainerEvents.md#resize)
- [scale](DCanvasContainerEvents.md#scale)
- [set](DCanvasContainerEvents.md#set)
- [skew](DCanvasContainerEvents.md#skew)
- [statechange](DCanvasContainerEvents.md#statechange)
- [unset](DCanvasContainerEvents.md#unset)
- [up](DCanvasContainerEvents.md#up)
- [wheel](DCanvasContainerEvents.md#wheel)

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

[DBaseEvents](DBaseEvents.md).[added](DBaseEvents.md#added)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L102)

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

[DBaseEvents](DBaseEvents.md).[dblclick](DBaseEvents.md#dblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L235)

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

[DBaseEvents](DBaseEvents.md).[down](DBaseEvents.md#down)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L218)

___

### init

▸ **init**(`emitter`): `void`

Triggered when an initialization is finished.

    on( "init", ( emitter ) => {} )

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DBaseEvents](DBaseEvents.md).[init](DBaseEvents.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L95)

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

[DBaseEvents](DBaseEvents.md).[keydown](DBaseEvents.md#keydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L186)

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

[DBaseEvents](DBaseEvents.md).[keyup](DBaseEvents.md#keyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L194)

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

[DBaseEvents](DBaseEvents.md).[move](DBaseEvents.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L120)

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

[DBaseEvents](DBaseEvents.md).[out](DBaseEvents.md#out)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L210)

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

[DBaseEvents](DBaseEvents.md).[over](DBaseEvents.md#over)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L202)

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

[DBaseEvents](DBaseEvents.md).[removed](DBaseEvents.md#removed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L109)

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

[DBaseEvents](DBaseEvents.md).[resize](DBaseEvents.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L131)

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

[DBaseEvents](DBaseEvents.md).[scale](DBaseEvents.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L148)

___

### set

▸ **set**(`canvas`, `emitter`): `void`

Triggered when a canvas is set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `CANVAS` | a new canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L34)

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

[DBaseEvents](DBaseEvents.md).[skew](DBaseEvents.md#skew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L159)

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

[DBaseEvents](DBaseEvents.md).[statechange](DBaseEvents.md#statechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L168)

___

### unset

▸ **unset**(`canvas`, `emitter`): `void`

Triggered when a canvas is removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `CANVAS` | a removed canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L26)

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

[DBaseEvents](DBaseEvents.md).[up](DBaseEvents.md#up)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L226)

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

[DBaseEvents](DBaseEvents.md).[wheel](DBaseEvents.md#wheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L178)
