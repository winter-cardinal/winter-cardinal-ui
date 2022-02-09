[Winter Cardinal UI](../README.md) / DDialogCommandEvents

# Interface: DDialogCommandEvents<VALUE, EMITTER\>

[DDialogCommand](../classes/DDialogCommand.md) events.

## Type parameters

| Name |
| :------ |
| `VALUE` |
| `EMITTER` |

## Hierarchy

- [`DDialogEvents`](DDialogEvents.md)<`EMITTER`\>

  ↳ **`DDialogCommandEvents`**

  ↳↳ [`DDialogSelectEvents`](DDialogSelectEvents.md)

## Table of contents

### Methods

- [added](DDialogCommandEvents.md#added)
- [cancel](DDialogCommandEvents.md#cancel)
- [close](DDialogCommandEvents.md#close)
- [dblclick](DDialogCommandEvents.md#dblclick)
- [down](DDialogCommandEvents.md#down)
- [init](DDialogCommandEvents.md#init)
- [keydown](DDialogCommandEvents.md#keydown)
- [keyup](DDialogCommandEvents.md#keyup)
- [move](DDialogCommandEvents.md#move)
- [ok](DDialogCommandEvents.md#ok)
- [open](DDialogCommandEvents.md#open)
- [out](DDialogCommandEvents.md#out)
- [over](DDialogCommandEvents.md#over)
- [removed](DDialogCommandEvents.md#removed)
- [resize](DDialogCommandEvents.md#resize)
- [scale](DDialogCommandEvents.md#scale)
- [skew](DDialogCommandEvents.md#skew)
- [statechange](DDialogCommandEvents.md#statechange)
- [up](DDialogCommandEvents.md#up)
- [wheel](DDialogCommandEvents.md#wheel)

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

[DDialogEvents](DDialogEvents.md).[added](DDialogEvents.md#added)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L102)

___

### cancel

▸ **cancel**(`reason`, `emitter`): `void`

Triggered when a dialog is canceled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | `any` | a reason why canceled |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L34)

___

### close

▸ **close**(`emitter`): `void`

Triggered when a dialog is closed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | this |

#### Returns

`void`

#### Inherited from

[DDialogEvents](DDialogEvents.md).[close](DDialogEvents.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L39)

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

[DDialogEvents](DDialogEvents.md).[dblclick](DDialogEvents.md#dblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L235)

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

[DDialogEvents](DDialogEvents.md).[down](DDialogEvents.md#down)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L218)

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

[DDialogEvents](DDialogEvents.md).[init](DDialogEvents.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L95)

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

[DDialogEvents](DDialogEvents.md).[keydown](DDialogEvents.md#keydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L186)

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

[DDialogEvents](DDialogEvents.md).[keyup](DDialogEvents.md#keyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L194)

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

[DDialogEvents](DDialogEvents.md).[move](DDialogEvents.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L120)

___

### ok

▸ **ok**(`value`, `emitter`): `void`

Triggered when a dialog is successfully finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `VALUE` | a value |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L26)

___

### open

▸ **open**(`emitter`): `void`

Triggered when a dialog is opened.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | this |

#### Returns

`void`

#### Inherited from

[DDialogEvents](DDialogEvents.md).[open](DDialogEvents.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L32)

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

[DDialogEvents](DDialogEvents.md).[out](DDialogEvents.md#out)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L210)

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

[DDialogEvents](DDialogEvents.md).[over](DDialogEvents.md#over)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L202)

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

[DDialogEvents](DDialogEvents.md).[removed](DDialogEvents.md#removed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L109)

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

[DDialogEvents](DDialogEvents.md).[resize](DDialogEvents.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L131)

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

[DDialogEvents](DDialogEvents.md).[scale](DDialogEvents.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L148)

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

[DDialogEvents](DDialogEvents.md).[skew](DDialogEvents.md#skew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L159)

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

[DDialogEvents](DDialogEvents.md).[statechange](DDialogEvents.md#statechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L168)

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

[DDialogEvents](DDialogEvents.md).[up](DDialogEvents.md#up)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L226)

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

[DDialogEvents](DDialogEvents.md).[wheel](DDialogEvents.md#wheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L178)
