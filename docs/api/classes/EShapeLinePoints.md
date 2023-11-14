[Winter Cardinal UI - v0.374.0](../index.md) / EShapeLinePoints

# Class: EShapeLinePoints

## Implements

- [`EShapePoints`](../interfaces/EShapePoints.md)

## Table of contents

### Constructors

- [constructor](EShapeLinePoints.md#constructor)

### Properties

- [\_formatted](EShapeLinePoints.md#_formatted)
- [\_formattedId](EShapeLinePoints.md#_formattedid)
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
- [onSizeChange](EShapeLinePoints.md#onsizechange)
- [serialize](EShapeLinePoints.md#serialize)
- [set](EShapeLinePoints.md#set)
- [toDirty](EShapeLinePoints.md#todirty)
- [toFitted](EShapeLinePoints.md#tofitted)
- [toPoints](EShapeLinePoints.md#topoints)
- [toScaled](EShapeLinePoints.md#toscaled)

## Constructors

### constructor

• **new EShapeLinePoints**(`parent`): [`EShapeLinePoints`](EShapeLinePoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeLinePoints`](EShapeLinePoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L46)

## Properties

### \_formatted

• `Protected` `Optional` **\_formatted**: [`EShapePointsFormattedWithBoundary`](../interfaces/EShapePointsFormattedWithBoundary.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L42)

___

### \_formattedId

• `Protected` **\_formattedId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L40)

___

### \_formatter

• `Protected` `Optional` **\_formatter**: ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L41)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L38)

___

### \_marker

• `Protected` `Optional` **\_marker**: [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L44)

___

### \_parent

• `Protected` **\_parent**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L31)

___

### \_parentSizeBase

• `Protected` **\_parentSizeBase**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L36)

___

### \_parentSizeFitted

• `Protected` **\_parentSizeFitted**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L37)

___

### \_segments

• `Protected` **\_segments**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L35)

___

### \_style

• `Protected` **\_style**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L39)

___

### \_values

• `Protected` **\_values**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L34)

___

### \_valuesBase

• `Protected` `Optional` **\_valuesBase**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L32)

___

### \_valuesBaseLength

• `Protected` **\_valuesBaseLength**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L33)

___

### WORK\_RANGE

▪ `Static` `Protected` **WORK\_RANGE**: [`number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L29)

## Accessors

### formatted

• `get` **formatted**(): [`EShapePointsFormatted`](../index.md#eshapepointsformatted)

#### Returns

[`EShapePointsFormatted`](../index.md#eshapepointsformatted)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatted](../interfaces/EShapePoints.md#formatted)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L205)

___

### formatter

• `get` **formatter**(): ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Returns

``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatter](../interfaces/EShapePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L193)

• `set` **formatter**(`formatter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter) |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatter](../interfaces/EShapePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L197)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[id](../interfaces/EShapePoints.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L129)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[length](../interfaces/EShapePoints.md#length)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L61)

___

### marker

• `get` **marker**(): [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[marker](../interfaces/EShapePoints.md#marker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L162)

___

### segments

• `get` **segments**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[segments](../interfaces/EShapePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L143)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L150)

___

### style

• `get` **style**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[style](../interfaces/EShapePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L154)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L158)

___

### values

• `get` **values**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[values](../interfaces/EShapePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L134)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L139)

## Methods

### calcHitPointAbs

▸ **calcHitPointAbs**\<`RESULT`\>(`x`, `y`, `ax`, `ay`, `threshold`, `toRange`, `tester`, `result`): `boolean`

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
| `toRange` | ``null`` \| [`EShapeLineBasePointsHitTesterToRange`](../index.md#eshapelinebasepointshittestertorange) |
| `tester` | [`EShapeLineBasePointsHitTester`](../index.md#eshapelinebasepointshittester)\<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L442)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L400)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L264)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L426)

___

### fit

▸ **fit**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L75)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L171)

___

### newMarker

▸ **newMarker**(): [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L175)

___

### onMarkerFillChange

▸ **onMarkerFillChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L189)

___

### onMarkerSizeChange

▸ **onMarkerSizeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L185)

___

### onMarkerTypeChange

▸ **onMarkerTypeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L179)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[onSizeChange](../interfaces/EShapePoints.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L71)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L414)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L273)

___

### toDirty

▸ **toDirty**(`revalidate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `revalidate` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:379](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L379)

___

### toFitted

▸ **toFitted**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L65)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L404)

___

### toScaled

▸ **toScaled**(`values`, `valuesBase`, `boundary`, `boundaryBase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |
| `valuesBase` | `number`[] |
| `boundary` | [`EShapePointsFormattedBoundary`](../index.md#eshapepointsformattedboundary) |
| `boundaryBase` | [`EShapePointsFormattedBoundary`](../index.md#eshapepointsformattedboundary) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-points.ts#L237)
