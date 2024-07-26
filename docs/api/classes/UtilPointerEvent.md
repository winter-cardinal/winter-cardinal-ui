[Winter Cardinal UI - v0.442.0](../index.md) / UtilPointerEvent

# Class: UtilPointerEvent

## Table of contents

### Constructors

- [constructor](UtilPointerEvent.md#constructor)

### Properties

- [CLICK\_DISTANCE\_THRESHOLD](UtilPointerEvent.md#click_distance_threshold)
- [DBLCLICK\_INTERVAL\_THRESHOLD](UtilPointerEvent.md#dblclick_interval_threshold)
- [LONG\_CLICK\_THRESHOLD](UtilPointerEvent.md#long_click_threshold)

### Accessors

- [cancel](UtilPointerEvent.md#cancel)
- [down](UtilPointerEvent.md#down)
- [enter](UtilPointerEvent.md#enter)
- [leave](UtilPointerEvent.md#leave)
- [move](UtilPointerEvent.md#move)
- [out](UtilPointerEvent.md#out)
- [over](UtilPointerEvent.md#over)
- [rightdown](UtilPointerEvent.md#rightdown)
- [righttap](UtilPointerEvent.md#righttap)
- [rightup](UtilPointerEvent.md#rightup)
- [rightupoutside](UtilPointerEvent.md#rightupoutside)
- [tap](UtilPointerEvent.md#tap)
- [touchable](UtilPointerEvent.md#touchable)
- [up](UtilPointerEvent.md#up)
- [upoutside](UtilPointerEvent.md#upoutside)

### Methods

- [contains](UtilPointerEvent.md#contains)
- [onDblClick](UtilPointerEvent.md#ondblclick)
- [toGlobal](UtilPointerEvent.md#toglobal)

## Constructors

### constructor

• **new UtilPointerEvent**(): [`UtilPointerEvent`](UtilPointerEvent.md)

#### Returns

[`UtilPointerEvent`](UtilPointerEvent.md)

## Properties

### CLICK\_DISTANCE\_THRESHOLD

▪ `Static` **CLICK\_DISTANCE\_THRESHOLD**: `number` = `10`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L18)

___

### DBLCLICK\_INTERVAL\_THRESHOLD

▪ `Static` **DBLCLICK\_INTERVAL\_THRESHOLD**: `number` = `333`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L19)

___

### LONG\_CLICK\_THRESHOLD

▪ `Static` **LONG\_CLICK\_THRESHOLD**: `number` = `750`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L20)

## Accessors

### cancel

• `get` **cancel**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L62)

___

### down

• `get` **down**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L30)

___

### enter

• `get` **enter**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L34)

___

### leave

• `get` **leave**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L38)

___

### move

• `get` **move**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L42)

___

### out

• `get` **out**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L46)

___

### over

• `get` **over**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L50)

___

### rightdown

• `get` **rightdown**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L70)

___

### righttap

• `get` **righttap**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L66)

___

### rightup

• `get` **rightup**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L74)

___

### rightupoutside

• `get` **rightupoutside**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L78)

___

### tap

• `get` **tap**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L26)

___

### touchable

• `get` **touchable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L22)

___

### up

• `get` **up**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L54)

___

### upoutside

• `get` **upoutside**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L58)

## Methods

### contains

▸ **contains**(`target`, `targetOrChild`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `targetOrChild` | ``null`` \| `DisplayObject` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L174)

___

### onDblClick

▸ **onDblClick**(`target`, `onDblClick`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLElement` |
| `onDblClick` | [`UtilPointerEventOnDblClick`](../index.md#utilpointereventondblclick) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L101)

___

### toGlobal

▸ **toGlobal**(`e`, `interactionManager`, `result`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |
| `result` | `Point` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L82)
