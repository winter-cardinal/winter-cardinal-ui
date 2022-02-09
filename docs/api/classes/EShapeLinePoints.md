[Winter Cardinal UI](../README.md) / EShapeLinePoints

# Class: EShapeLinePoints

## Implements

- [`EShapePoints`](../interfaces/EShapePoints.md)

## Table of contents

### Constructors

- [constructor](EShapeLinePoints.md#constructor)

### Properties

- [\_formatted](EShapeLinePoints.md#_formatted)
- [\_formattedBoundaryBase](EShapeLinePoints.md#_formattedboundarybase)
- [\_formattedId](EShapeLinePoints.md#_formattedid)
- [\_formattedValuesBase](EShapeLinePoints.md#_formattedvaluesbase)
- [\_formatter](EShapeLinePoints.md#_formatter)
- [\_id](EShapeLinePoints.md#_id)
- [\_marker](EShapeLinePoints.md#_marker)
- [\_parent](EShapeLinePoints.md#_parent)
- [\_parentSizeBase](EShapeLinePoints.md#_parentsizebase)
- [\_parentSizeFitted](EShapeLinePoints.md#_parentsizefitted)
- [\_segments](EShapeLinePoints.md#_segments)
- [\_style](EShapeLinePoints.md#_style)
- [\_values](EShapeLinePoints.md#_values)
- [\_valuesBase](EShapeLinePoints.md#_valuesbase)
- [\_valuesBaseLength](EShapeLinePoints.md#_valuesbaselength)
- [WORK\_RANGE](EShapeLinePoints.md#work_range)

### Accessors

- [formatted](EShapeLinePoints.md#formatted)
- [formatter](EShapeLinePoints.md#formatter)
- [id](EShapeLinePoints.md#id)
- [length](EShapeLinePoints.md#length)
- [marker](EShapeLinePoints.md#marker)
- [segments](EShapeLinePoints.md#segments)
- [style](EShapeLinePoints.md#style)
- [values](EShapeLinePoints.md#values)

### Methods

- [calcHitPointAbs](EShapeLinePoints.md#calchitpointabs)
- [clone](EShapeLinePoints.md#clone)
- [copy](EShapeLinePoints.md#copy)
- [deserialize](EShapeLinePoints.md#deserialize)
- [fit](EShapeLinePoints.md#fit)
- [getMarker](EShapeLinePoints.md#getmarker)
- [newMarker](EShapeLinePoints.md#newmarker)
- [onMarkerFillChange](EShapeLinePoints.md#onmarkerfillchange)
- [onMarkerSizeChange](EShapeLinePoints.md#onmarkersizechange)
- [onMarkerTypeChange](EShapeLinePoints.md#onmarkertypechange)
- [serialize](EShapeLinePoints.md#serialize)
- [set](EShapeLinePoints.md#set)
- [toDirty](EShapeLinePoints.md#todirty)
- [toFitted](EShapeLinePoints.md#tofitted)
- [toPoints](EShapeLinePoints.md#topoints)
- [toScaled](EShapeLinePoints.md#toscaled)

## Constructors

### constructor

• **new EShapeLinePoints**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L48)

## Properties

### \_formatted

• `Protected` `Optional` **\_formatted**: [`EShapePointsFormattedWithBoundary`](../interfaces/EShapePointsFormattedWithBoundary.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L42)

___

### \_formattedBoundaryBase

• `Protected` `Optional` **\_formattedBoundaryBase**: [`EShapePointsFormattedBoundary`](../README.md#eshapepointsformattedboundary)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L44)

___

### \_formattedId

• `Protected` **\_formattedId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L40)

___

### \_formattedValuesBase

• `Protected` `Optional` **\_formattedValuesBase**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L43)

___

### \_formatter

• `Protected` `Optional` **\_formatter**: ``null`` \| [`EShapePointsFormatter`](../README.md#eshapepointsformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L41)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L38)

___

### \_marker

• `Protected` `Optional` **\_marker**: [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L46)

___

### \_parent

• `Protected` **\_parent**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L31)

___

### \_parentSizeBase

• `Protected` **\_parentSizeBase**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L36)

___

### \_parentSizeFitted

• `Protected` **\_parentSizeFitted**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L37)

___

### \_segments

• `Protected` **\_segments**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L35)

___

### \_style

• `Protected` **\_style**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L39)

___

### \_values

• `Protected` **\_values**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L34)

___

### \_valuesBase

• `Protected` `Optional` **\_valuesBase**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L32)

___

### \_valuesBaseLength

• `Protected` **\_valuesBaseLength**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L33)

___

### WORK\_RANGE

▪ `Static` `Protected` **WORK\_RANGE**: [`number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L29)

## Accessors

### formatted

• `get` **formatted**(): [`EShapePointsFormatted`](../README.md#eshapepointsformatted)

#### Returns

[`EShapePointsFormatted`](../README.md#eshapepointsformatted)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatted](../interfaces/EShapePoints.md#formatted)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L244)

___

### formatter

• `get` **formatter**(): ``null`` \| [`EShapePointsFormatter`](../README.md#eshapepointsformatter)

#### Returns

``null`` \| [`EShapePointsFormatter`](../README.md#eshapepointsformatter)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatter](../interfaces/EShapePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L232)

• `set` **formatter**(`formatter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | ``null`` \| [`EShapePointsFormatter`](../README.md#eshapepointsformatter) |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatter](../interfaces/EShapePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L236)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[id](../interfaces/EShapePoints.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L168)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[length](../interfaces/EShapePoints.md#length)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L63)

___

### marker

• `get` **marker**(): [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[marker](../interfaces/EShapePoints.md#marker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L201)

___

### segments

• `get` **segments**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[segments](../interfaces/EShapePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L182)

• `set` **segments**(`segments`): `void`

Must be sorted in ascending order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `segments` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[segments](../interfaces/EShapePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L189)

___

### style

• `get` **style**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[style](../interfaces/EShapePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L193)

• `set` **style**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[style](../interfaces/EShapePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L197)

___

### values

• `get` **values**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[values](../interfaces/EShapePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L173)

• `set` **values**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[values](../interfaces/EShapePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L178)

## Methods

### calcHitPointAbs

▸ **calcHitPointAbs**<`RESULT`\>(`x`, `y`, `ax`, `ay`, `threshold`, `toRange`, `tester`, `result`): `boolean`

#### Type parameters

| Name |
| :------ |
| `RESULT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `threshold` | `number` |
| `toRange` | ``null`` \| [`EShapeLineBasePointsHitTesterToRange`](../README.md#eshapelinebasepointshittestertorange) |
| `tester` | [`EShapeLineBasePointsHitTester`](../README.md#eshapelinebasepointshittester)<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:517](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L517)

___

### clone

▸ **clone**(`parent`): [`EShapeLinePoints`](EShapeLinePoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeLinePoints`](EShapeLinePoints.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[clone](../interfaces/EShapePoints.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L475)

___

### copy

▸ **copy**(`source`): [`EShapeLinePoints`](EShapeLinePoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

[`EShapeLinePoints`](EShapeLinePoints.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[copy](../interfaces/EShapePoints.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L340)

___

### deserialize

▸ **deserialize**(`resourceId`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:501](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L501)

___

### fit

▸ `Protected` **fit**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L74)

___

### getMarker

▸ **getMarker**(): `undefined` \| [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

This method is more appropriate than the `marker` property in some situations
where the EShapePointsMarkerContainer instance do not need to be created.

#### Returns

`undefined` \| [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[getMarker](../interfaces/EShapePoints.md#getmarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L210)

___

### newMarker

▸ `Protected` **newMarker**(): [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L214)

___

### onMarkerFillChange

▸ **onMarkerFillChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L228)

___

### onMarkerSizeChange

▸ **onMarkerSizeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L224)

___

### onMarkerTypeChange

▸ **onMarkerTypeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L218)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[serialize](../interfaces/EShapePoints.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:489](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L489)

___

### set

▸ **set**(`newValues?`, `newSegments?`, `newStyle?`): [`EShapeLinePoints`](EShapeLinePoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValues?` | `number`[] |
| `newSegments?` | `number`[] |
| `newStyle?` | `number` |

#### Returns

[`EShapeLinePoints`](EShapeLinePoints.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[set](../interfaces/EShapePoints.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:349](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L349)

___

### toDirty

▸ `Protected` **toDirty**(`revalidate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `revalidate` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L454)

___

### toFitted

▸ **toFitted**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L67)

___

### toPoints

▸ **toPoints**(`transform`): `Point`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |

#### Returns

`Point`[]

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[toPoints](../interfaces/EShapePoints.md#topoints)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L479)

___

### toScaled

▸ `Protected` **toScaled**(`values`, `valuesBase`, `boundary`, `boundaryBase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |
| `valuesBase` | `number`[] |
| `boundary` | [`EShapePointsFormattedBoundary`](../README.md#eshapepointsformattedboundary) |
| `boundaryBase` | [`EShapePointsFormattedBoundary`](../README.md#eshapepointsformattedboundary) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:313](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L313)
