[Winter Cardinal UI - v0.407.0](../index.md) / DSelectEvents

# Interface: DSelectEvents\<VALUE, EMITTER\>

[DSelect](../classes/DSelect.md) events.

## Type parameters

| Name |
| :------ |
| `VALUE` |
| `EMITTER` |

## Hierarchy

- [`DDropdownBaseEvents`](DDropdownBaseEvents.md)\<`VALUE`, [`DMenuItem`](../classes/DMenuItem.md)\<`VALUE`\> \| ``null``, `EMITTER`\>

  ↳ **`DSelectEvents`**

## Table of contents

### Methods

- [active](DSelectEvents.md#active)
- [added](DSelectEvents.md#added)
- [change](DSelectEvents.md#change)
- [click](DSelectEvents.md#click)
- [dblclick](DSelectEvents.md#dblclick)
- [down](DSelectEvents.md#down)
- [inactive](DSelectEvents.md#inactive)
- [init](DSelectEvents.md#init)
- [keydown](DSelectEvents.md#keydown)
- [keyup](DSelectEvents.md#keyup)
- [move](DSelectEvents.md#move)
- [open](DSelectEvents.md#open)
- [out](DSelectEvents.md#out)
- [over](DSelectEvents.md#over)
- [press](DSelectEvents.md#press)
- [removed](DSelectEvents.md#removed)
- [resize](DSelectEvents.md#resize)
- [scale](DSelectEvents.md#scale)
- [select](DSelectEvents.md#select)
- [shortcut](DSelectEvents.md#shortcut)
- [skew](DSelectEvents.md#skew)
- [statechange](DSelectEvents.md#statechange)
- [unpress](DSelectEvents.md#unpress)
- [up](DSelectEvents.md#up)
- [wheel](DSelectEvents.md#wheel)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[added](DDropdownBaseEvents.md#added)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L100)

___

### change

▸ **change**(`newValue`, `oldValue`, `item`, `emitter`): `void`

Triggered when a selection is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValue` | ``null`` \| `VALUE` | - |
| `oldValue` | ``null`` \| `VALUE` | a previously-selected value |
| `item` | ``null`` \| [`DMenuItem`](../classes/DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md), [`DMenuItemOptions`](DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md)\>\> | a newly-selected item |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-select.ts#L30)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[click](DDropdownBaseEvents.md#click)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[dblclick](DDropdownBaseEvents.md#dblclick)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[down](DDropdownBaseEvents.md#down)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[inactive](DDropdownBaseEvents.md#inactive)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[init](DDropdownBaseEvents.md#init)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[keydown](DDropdownBaseEvents.md#keydown)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[keyup](DDropdownBaseEvents.md#keyup)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[move](DDropdownBaseEvents.md#move)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L118)

___

### open

▸ **open**(`menu`, `emitter`): `void`

Triggered when a menu is opened.

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | [`DMenu`](../classes/DMenu.md)\<`VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\> |
| `emitter` | `EMITTER` |

#### Returns

`void`

#### Inherited from

[DDropdownBaseEvents](DDropdownBaseEvents.md).[open](DDropdownBaseEvents.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L35)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[over](DDropdownBaseEvents.md#over)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[press](DDropdownBaseEvents.md#press)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[removed](DDropdownBaseEvents.md#removed)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[resize](DDropdownBaseEvents.md#resize)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[scale](DDropdownBaseEvents.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L146)

___

### select

▸ **select**(`value`, `item`, `emitter`): `void`

Triggered when a menu item is selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `VALUE` | a value of a selected menu item |
| `item` | [`DMenuItem`](../classes/DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md), [`DMenuItemOptions`](DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md)\>\> | a selected menu item |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

[DDropdownBaseEvents](DDropdownBaseEvents.md).[select](DDropdownBaseEvents.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L30)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[shortcut](DDropdownBaseEvents.md#shortcut)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[skew](DDropdownBaseEvents.md#skew)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[statechange](DDropdownBaseEvents.md#statechange)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[unpress](DDropdownBaseEvents.md#unpress)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[up](DDropdownBaseEvents.md#up)

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

[DDropdownBaseEvents](DDropdownBaseEvents.md).[wheel](DDropdownBaseEvents.md#wheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L176)
