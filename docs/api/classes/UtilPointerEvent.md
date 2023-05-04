[Winter Cardinal UI - v0.310.1](../index.md) / UtilPointerEvent

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

• **new UtilPointerEvent**()

## Properties

### CLICK\_DISTANCE\_THRESHOLD

▪ `Static` **CLICK\_DISTANCE\_THRESHOLD**: `number` = `10`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L19)

___

### DBLCLICK\_INTERVAL\_THRESHOLD

▪ `Static` **DBLCLICK\_INTERVAL\_THRESHOLD**: `number` = `333`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L20)

___

### LONG\_CLICK\_THRESHOLD

▪ `Static` **LONG\_CLICK\_THRESHOLD**: `number` = `750`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L21)

## Accessors

### cancel

• `Static` `get` **cancel**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L63)

___

### down

• `Static` `get` **down**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L31)

___

### enter

• `Static` `get` **enter**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L35)

___

### leave

• `Static` `get` **leave**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L39)

___

### move

• `Static` `get` **move**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L43)

___

### out

• `Static` `get` **out**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L47)

___

### over

• `Static` `get` **over**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L51)

___

### rightdown

• `Static` `get` **rightdown**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L71)

___

### righttap

• `Static` `get` **righttap**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L67)

___

### rightup

• `Static` `get` **rightup**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L75)

___

### rightupoutside

• `Static` `get` **rightupoutside**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L79)

___

### tap

• `Static` `get` **tap**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L27)

___

### touchable

• `Static` `get` **touchable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L23)

___

### up

• `Static` `get` **up**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L55)

___

### upoutside

• `Static` `get` **upoutside**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L59)

## Methods

### contains

▸ `Static` **contains**(`target`, `targetOrChild`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `targetOrChild` | ``null`` \| `DisplayObject` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L175)

___

### onDblClick

▸ `Static` **onDblClick**(`target`, `onDblClick`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLElement` |
| `onDblClick` | [`UtilPointerEventOnDblClick`](../index.md#utilpointereventondblclick) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L102)

___

### toGlobal

▸ `Static` **toGlobal**(`e`, `interactionManager`, `result`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |
| `result` | `Point` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L83)
