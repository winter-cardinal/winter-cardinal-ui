[Winter Cardinal UI - v0.407.0](../index.md) / DDialogSelectEvents

# Interface: DDialogSelectEvents\<VALUE, EMITTER\>

[DDialogSelect](../classes/DDialogSelect.md) events.

## Type parameters

| Name |
| :------ |
| `VALUE` |
| `EMITTER` |

## Hierarchy

- [`DDialogLayeredEvents`](DDialogLayeredEvents.md)\<`VALUE`, `EMITTER`\>

  ↳ **`DDialogSelectEvents`**

## Table of contents

### Methods

- [added](DDialogSelectEvents.md#added)
- [cancel](DDialogSelectEvents.md#cancel)
- [click](DDialogSelectEvents.md#click)
- [close](DDialogSelectEvents.md#close)
- [dblclick](DDialogSelectEvents.md#dblclick)
- [down](DDialogSelectEvents.md#down)
- [init](DDialogSelectEvents.md#init)
- [keydown](DDialogSelectEvents.md#keydown)
- [keyup](DDialogSelectEvents.md#keyup)
- [move](DDialogSelectEvents.md#move)
- [ok](DDialogSelectEvents.md#ok)
- [open](DDialogSelectEvents.md#open)
- [out](DDialogSelectEvents.md#out)
- [over](DDialogSelectEvents.md#over)
- [removed](DDialogSelectEvents.md#removed)
- [resize](DDialogSelectEvents.md#resize)
- [scale](DDialogSelectEvents.md#scale)
- [select](DDialogSelectEvents.md#select)
- [shortcut](DDialogSelectEvents.md#shortcut)
- [skew](DDialogSelectEvents.md#skew)
- [statechange](DDialogSelectEvents.md#statechange)
- [up](DDialogSelectEvents.md#up)
- [wheel](DDialogSelectEvents.md#wheel)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[added](DDialogLayeredEvents.md#added)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L100)

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

#### Inherited from

[DDialogLayeredEvents](DDialogLayeredEvents.md).[cancel](DDialogLayeredEvents.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L33)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[click](DDialogLayeredEvents.md#click)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L232)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[close](DDialogLayeredEvents.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L47)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[dblclick](DDialogLayeredEvents.md#dblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L241)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[down](DDialogLayeredEvents.md#down)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L216)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[init](DDialogLayeredEvents.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L93)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[keydown](DDialogLayeredEvents.md#keydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L184)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[keyup](DDialogLayeredEvents.md#keyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L192)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[move](DDialogLayeredEvents.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L118)

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

#### Inherited from

[DDialogLayeredEvents](DDialogLayeredEvents.md).[ok](DDialogLayeredEvents.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L25)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[open](DDialogLayeredEvents.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L40)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[out](DDialogLayeredEvents.md#out)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L208)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[over](DDialogLayeredEvents.md#over)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L200)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[removed](DDialogLayeredEvents.md#removed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L107)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[resize](DDialogLayeredEvents.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L129)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[scale](DDialogLayeredEvents.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L146)

___

### select

▸ **select**(`value`, `self`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `self` | `EMITTER` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L63)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[shortcut](DDialogLayeredEvents.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L253)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[skew](DDialogLayeredEvents.md#skew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L157)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[statechange](DDialogLayeredEvents.md#statechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L166)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[up](DDialogLayeredEvents.md#up)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L224)

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

[DDialogLayeredEvents](DDialogLayeredEvents.md).[wheel](DDialogLayeredEvents.md#wheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L176)
