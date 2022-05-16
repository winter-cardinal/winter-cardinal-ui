[Winter Cardinal UI - v0.167.0](../index.md) / DButtonTimeEvents

# Interface: DButtonTimeEvents<EMITTER\>

[DButtonTime](../classes/DButtonTime.md) events.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Hierarchy

- [`DButtonEvents`](DButtonEvents.md)<`Date`, `EMITTER`\>

  ↳ **`DButtonTimeEvents`**

## Table of contents

### Methods

- [active](DButtonTimeEvents.md#active)
- [added](DButtonTimeEvents.md#added)
- [change](DButtonTimeEvents.md#change)
- [dblclick](DButtonTimeEvents.md#dblclick)
- [down](DButtonTimeEvents.md#down)
- [inactive](DButtonTimeEvents.md#inactive)
- [init](DButtonTimeEvents.md#init)
- [keydown](DButtonTimeEvents.md#keydown)
- [keyup](DButtonTimeEvents.md#keyup)
- [move](DButtonTimeEvents.md#move)
- [out](DButtonTimeEvents.md#out)
- [over](DButtonTimeEvents.md#over)
- [removed](DButtonTimeEvents.md#removed)
- [resize](DButtonTimeEvents.md#resize)
- [scale](DButtonTimeEvents.md#scale)
- [skew](DButtonTimeEvents.md#skew)
- [statechange](DButtonTimeEvents.md#statechange)
- [up](DButtonTimeEvents.md#up)
- [wheel](DButtonTimeEvents.md#wheel)

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

[src/main/typescript/wcardinal/ui/d-button-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L25)

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

[src/main/typescript/wcardinal/ui/d-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L102)

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

[src/main/typescript/wcardinal/ui/d-button-time.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-button-time.ts#L22)

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

[src/main/typescript/wcardinal/ui/d-base.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L235)

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

[src/main/typescript/wcardinal/ui/d-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L218)

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

[src/main/typescript/wcardinal/ui/d-button-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L32)

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

[DButtonEvents](DButtonEvents.md).[init](DButtonEvents.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L95)

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

[src/main/typescript/wcardinal/ui/d-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L186)

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

[src/main/typescript/wcardinal/ui/d-base.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L194)

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

[src/main/typescript/wcardinal/ui/d-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L120)

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

[src/main/typescript/wcardinal/ui/d-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L210)

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

[src/main/typescript/wcardinal/ui/d-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L202)

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

[src/main/typescript/wcardinal/ui/d-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L109)

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

[src/main/typescript/wcardinal/ui/d-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L131)

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

[src/main/typescript/wcardinal/ui/d-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L148)

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

[src/main/typescript/wcardinal/ui/d-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L159)

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

[src/main/typescript/wcardinal/ui/d-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L168)

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

[src/main/typescript/wcardinal/ui/d-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L226)

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

[src/main/typescript/wcardinal/ui/d-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L178)
