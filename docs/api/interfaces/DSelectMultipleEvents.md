[Winter Cardinal UI - v0.194.0](../index.md) / DSelectMultipleEvents

# Interface: DSelectMultipleEvents<VALUE, EMITTER\>

[DSelectMultiple](../classes/DSelectMultiple.md) events.

## Type parameters

| Name |
| :------ |
| `VALUE` |
| `EMITTER` |

## Hierarchy

- [`DDropdownBaseEvents`](DDropdownBaseEvents.md)<`VALUE`, [`DMenuItem`](../classes/DMenuItem.md)<`VALUE`\>[], `EMITTER`\>

  ↳ **`DSelectMultipleEvents`**

## Table of contents

### Methods

- [active](DSelectMultipleEvents.md#active)
- [added](DSelectMultipleEvents.md#added)
- [change](DSelectMultipleEvents.md#change)
- [dblclick](DSelectMultipleEvents.md#dblclick)
- [down](DSelectMultipleEvents.md#down)
- [inactive](DSelectMultipleEvents.md#inactive)
- [init](DSelectMultipleEvents.md#init)
- [keydown](DSelectMultipleEvents.md#keydown)
- [keyup](DSelectMultipleEvents.md#keyup)
- [move](DSelectMultipleEvents.md#move)
- [out](DSelectMultipleEvents.md#out)
- [over](DSelectMultipleEvents.md#over)
- [removed](DSelectMultipleEvents.md#removed)
- [resize](DSelectMultipleEvents.md#resize)
- [scale](DSelectMultipleEvents.md#scale)
- [select](DSelectMultipleEvents.md#select)
- [skew](DSelectMultipleEvents.md#skew)
- [statechange](DSelectMultipleEvents.md#statechange)
- [up](DSelectMultipleEvents.md#up)
- [wheel](DSelectMultipleEvents.md#wheel)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[active](DDropdownBaseEvents.md#active)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L25)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[added](DDropdownBaseEvents.md#added)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L102)

___

### change

▸ **change**(`newValues`, `oldValues`, `items`, `emitter`): `void`

Triggered when the selection is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValues` | `VALUE`[] | new selected values |
| `oldValues` | `VALUE`[] | old selected values |
| `items` | [`DMenuItem`](../classes/DMenuItem.md)<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md), [`DMenuItemOptions`](DMenuItemOptions.md)<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md)\>\>[] | selected items |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L31)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[dblclick](DDropdownBaseEvents.md#dblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L235)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[down](DDropdownBaseEvents.md#down)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L218)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[inactive](DDropdownBaseEvents.md#inactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L32)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[init](DDropdownBaseEvents.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L95)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[keydown](DDropdownBaseEvents.md#keydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L186)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[keyup](DDropdownBaseEvents.md#keyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L194)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[move](DDropdownBaseEvents.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L120)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[out](DDropdownBaseEvents.md#out)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L210)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[over](DDropdownBaseEvents.md#over)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L202)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[removed](DDropdownBaseEvents.md#removed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L109)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[resize](DDropdownBaseEvents.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L131)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[scale](DDropdownBaseEvents.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L148)

___

### select

▸ **select**(`value`, `item`, `emitter`): `void`

Triggered when a menu item is selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `VALUE` | a value of a selected menu item |
| `item` | [`DMenuItem`](../classes/DMenuItem.md)<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md), [`DMenuItemOptions`](DMenuItemOptions.md)<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md)\>\> | a selected menu item |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDropdownBaseEvents](DDropdownBaseEvents.md).[select](DDropdownBaseEvents.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L30)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[skew](DDropdownBaseEvents.md#skew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L159)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[statechange](DDropdownBaseEvents.md#statechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L168)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[up](DDropdownBaseEvents.md#up)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L226)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[wheel](DDropdownBaseEvents.md#wheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L178)
