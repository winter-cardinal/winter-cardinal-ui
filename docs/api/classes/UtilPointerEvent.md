[Winter Cardinal UI - v0.199.0](../index.md) / UtilPointerEvent

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
- [tap](UtilPointerEvent.md#tap)
- [touchable](UtilPointerEvent.md#touchable)
- [up](UtilPointerEvent.md#up)
- [upoutside](UtilPointerEvent.md#upoutside)

### Methods

- [contains](UtilPointerEvent.md#contains)
- [isValidDistance](UtilPointerEvent.md#isvaliddistance)
- [onClick](UtilPointerEvent.md#onclick)
- [onDblClick](UtilPointerEvent.md#ondblclick)
- [toGlobal](UtilPointerEvent.md#toglobal)

## Constructors

### constructor

• **new UtilPointerEvent**()

## Properties

### CLICK\_DISTANCE\_THRESHOLD

▪ `Static` **CLICK\_DISTANCE\_THRESHOLD**: `number` = `10`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L20)

___

### DBLCLICK\_INTERVAL\_THRESHOLD

▪ `Static` **DBLCLICK\_INTERVAL\_THRESHOLD**: `number` = `333`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L21)

___

### LONG\_CLICK\_THRESHOLD

▪ `Static` **LONG\_CLICK\_THRESHOLD**: `number` = `750`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L22)

## Accessors

### cancel

• `Static` `get` **cancel**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L64)

___

### down

• `Static` `get` **down**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L32)

___

### enter

• `Static` `get` **enter**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L36)

___

### leave

• `Static` `get` **leave**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L40)

___

### move

• `Static` `get` **move**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L44)

___

### out

• `Static` `get` **out**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L48)

___

### over

• `Static` `get` **over**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L52)

___

### tap

• `Static` `get` **tap**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L28)

___

### touchable

• `Static` `get` **touchable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L24)

___

### up

• `Static` `get` **up**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L56)

___

### upoutside

• `Static` `get` **upoutside**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L60)

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

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L233)

___

### isValidDistance

▸ `Static` `Protected` **isValidDistance**(`e`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L87)

___

### onClick

▸ `Static` **onClick**(`target`, `onClick`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`UtilPointerEventClickTarget`](../interfaces/UtilPointerEventClickTarget.md) |
| `onClick` | [`UtilPointerEventOnClick`](../index.md#utilpointereventonclick) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L95)

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

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L160)

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

[src/main/typescript/wcardinal/ui/util/util-pointer-event.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/util-pointer-event.ts#L68)
