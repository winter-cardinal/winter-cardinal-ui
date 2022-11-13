[Winter Cardinal UI - v0.227.0](../index.md) / DButtonColorGradientOnOptions

# Interface: DButtonColorGradientOnOptions<EMITTER\>

[DButtonColorGradient](../classes/DButtonColorGradient.md) "on" options.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Hierarchy

- `Partial`<[`DButtonColorGradientEvents`](DButtonColorGradientEvents.md)<`EMITTER`\>\>

- `DOnOptions`

  ↳ **`DButtonColorGradientOnOptions`**

## Table of contents

### Methods

- [active](DButtonColorGradientOnOptions.md#active)
- [added](DButtonColorGradientOnOptions.md#added)
- [change](DButtonColorGradientOnOptions.md#change)
- [click](DButtonColorGradientOnOptions.md#click)
- [dblclick](DButtonColorGradientOnOptions.md#dblclick)
- [down](DButtonColorGradientOnOptions.md#down)
- [inactive](DButtonColorGradientOnOptions.md#inactive)
- [init](DButtonColorGradientOnOptions.md#init)
- [keydown](DButtonColorGradientOnOptions.md#keydown)
- [keyup](DButtonColorGradientOnOptions.md#keyup)
- [move](DButtonColorGradientOnOptions.md#move)
- [out](DButtonColorGradientOnOptions.md#out)
- [over](DButtonColorGradientOnOptions.md#over)
- [removed](DButtonColorGradientOnOptions.md#removed)
- [resize](DButtonColorGradientOnOptions.md#resize)
- [scale](DButtonColorGradientOnOptions.md#scale)
- [shortcut](DButtonColorGradientOnOptions.md#shortcut)
- [skew](DButtonColorGradientOnOptions.md#skew)
- [statechange](DButtonColorGradientOnOptions.md#statechange)
- [up](DButtonColorGradientOnOptions.md#up)
- [wheel](DButtonColorGradientOnOptions.md#wheel)

## Methods

### active

▸ `Optional` **active**(`emitter`): `void`

Triggered when the button is activated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.active

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L25)

___

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

[src/main/typescript/wcardinal/ui/d-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L100)

___

### change

▸ `Optional` **change**(`newValue`, `oldValue`, `emitter`): `void`

Triggered when a selection is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValue` | [`DColorGradientObservable`](../classes/DColorGradientObservable.md) | a newly selected value |
| `oldValue` | [`DColorGradientObservable`](../classes/DColorGradientObservable.md) | a previously selected value |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.change

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color-gradient.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color-gradient.ts#L27)

___

### click

▸ `Optional` **click**(`e`, `emitter`): `void`

Triggered when an emitter is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `InteractionEvent` | an interaction event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.click

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L232)

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

[src/main/typescript/wcardinal/ui/d-base.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L241)

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

[src/main/typescript/wcardinal/ui/d-base.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L216)

___

### inactive

▸ `Optional` **inactive**(`emitter`): `void`

Triggered when the button is inactivated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.inactive

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L32)

___

### init

▸ `Optional` **init**(`emitter`): `void`

Triggered when an initialization is finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.init

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L93)

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

[src/main/typescript/wcardinal/ui/d-base.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L184)

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

[src/main/typescript/wcardinal/ui/d-base.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L192)

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

[src/main/typescript/wcardinal/ui/d-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L118)

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

[src/main/typescript/wcardinal/ui/d-base.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L208)

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

[src/main/typescript/wcardinal/ui/d-base.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L200)

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

[src/main/typescript/wcardinal/ui/d-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L107)

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

[src/main/typescript/wcardinal/ui/d-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L129)

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

[src/main/typescript/wcardinal/ui/d-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L146)

___

### shortcut

▸ `Optional` **shortcut**(`e`, `emitter`): `void`

Triggered when a shortcut is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | an event |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.shortcut

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L253)

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

[src/main/typescript/wcardinal/ui/d-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L157)

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

[src/main/typescript/wcardinal/ui/d-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L166)

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

[src/main/typescript/wcardinal/ui/d-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L224)

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

[src/main/typescript/wcardinal/ui/d-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L176)
