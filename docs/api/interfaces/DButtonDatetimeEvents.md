[Winter Cardinal UI - v0.407.0](../index.md) / DButtonDatetimeEvents

# Interface: DButtonDatetimeEvents\<EMITTER\>

[DButtonDatetime](../classes/DButtonDatetime.md) events.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Hierarchy

- [`DButtonEvents`](DButtonEvents.md)\<`Date`, `EMITTER`\>

  ↳ **`DButtonDatetimeEvents`**

## Table of contents

### Methods

- [active](DButtonDatetimeEvents.md#active)
- [added](DButtonDatetimeEvents.md#added)
- [change](DButtonDatetimeEvents.md#change)
- [click](DButtonDatetimeEvents.md#click)
- [dblclick](DButtonDatetimeEvents.md#dblclick)
- [down](DButtonDatetimeEvents.md#down)
- [inactive](DButtonDatetimeEvents.md#inactive)
- [init](DButtonDatetimeEvents.md#init)
- [keydown](DButtonDatetimeEvents.md#keydown)
- [keyup](DButtonDatetimeEvents.md#keyup)
- [move](DButtonDatetimeEvents.md#move)
- [out](DButtonDatetimeEvents.md#out)
- [over](DButtonDatetimeEvents.md#over)
- [press](DButtonDatetimeEvents.md#press)
- [removed](DButtonDatetimeEvents.md#removed)
- [resize](DButtonDatetimeEvents.md#resize)
- [scale](DButtonDatetimeEvents.md#scale)
- [shortcut](DButtonDatetimeEvents.md#shortcut)
- [skew](DButtonDatetimeEvents.md#skew)
- [statechange](DButtonDatetimeEvents.md#statechange)
- [unpress](DButtonDatetimeEvents.md#unpress)
- [up](DButtonDatetimeEvents.md#up)
- [wheel](DButtonDatetimeEvents.md#wheel)

## Methods

### active

▸ **active**(`emitter`): `void`

Triggered when the button is activated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DButtonEvents](DButtonEvents.md).[active](DButtonEvents.md#active)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L26)

___

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

[DButtonEvents](DButtonEvents.md).[added](DButtonEvents.md#added)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L100)

___

### change

▸ **change**(`newValue`, `oldValue`, `emitter`): `void`

Triggered when a selection is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValue` | `Date` | - |
| `oldValue` | `Date` | - |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-datetime.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-datetime.ts#L22)

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

[DButtonEvents](DButtonEvents.md).[click](DButtonEvents.md#click)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L232)

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

[DButtonEvents](DButtonEvents.md).[dblclick](DButtonEvents.md#dblclick)

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

[DButtonEvents](DButtonEvents.md).[down](DButtonEvents.md#down)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L216)

___

### inactive

▸ **inactive**(`emitter`): `void`

Triggered when the button is inactivated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DButtonEvents](DButtonEvents.md).[inactive](DButtonEvents.md#inactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L33)

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

[DButtonEvents](DButtonEvents.md).[init](DButtonEvents.md#init)

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

[DButtonEvents](DButtonEvents.md).[keydown](DButtonEvents.md#keydown)

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

[DButtonEvents](DButtonEvents.md).[keyup](DButtonEvents.md#keyup)

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

[DButtonEvents](DButtonEvents.md).[move](DButtonEvents.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L118)

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

[DButtonEvents](DButtonEvents.md).[out](DButtonEvents.md#out)

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

[DButtonEvents](DButtonEvents.md).[over](DButtonEvents.md#over)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L200)

___

### press

▸ **press**(`emitter`): `void`

Triggered when the button is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DButtonEvents](DButtonEvents.md).[press](DButtonEvents.md#press)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L40)

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

[DButtonEvents](DButtonEvents.md).[removed](DButtonEvents.md#removed)

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

[DButtonEvents](DButtonEvents.md).[resize](DButtonEvents.md#resize)

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

[DButtonEvents](DButtonEvents.md).[scale](DButtonEvents.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L146)

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

[DButtonEvents](DButtonEvents.md).[shortcut](DButtonEvents.md#shortcut)

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

[DButtonEvents](DButtonEvents.md).[skew](DButtonEvents.md#skew)

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

[DButtonEvents](DButtonEvents.md).[statechange](DButtonEvents.md#statechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L166)

___

### unpress

▸ **unpress**(`emitter`): `void`

Triggered when the button is released.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DButtonEvents](DButtonEvents.md).[unpress](DButtonEvents.md#unpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L47)

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

[DButtonEvents](DButtonEvents.md).[up](DButtonEvents.md#up)

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

[DButtonEvents](DButtonEvents.md).[wheel](DButtonEvents.md#wheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L176)
