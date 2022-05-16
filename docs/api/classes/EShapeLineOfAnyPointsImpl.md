[Winter Cardinal UI - v0.167.0](../index.md) / EShapeLineOfAnyPointsImpl

# Class: EShapeLineOfAnyPointsImpl

## Implements

- [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

## Table of contents

### Constructors

- [constructor](EShapeLineOfAnyPointsImpl.md#constructor)

### Properties

- [\_fill](EShapeLineOfAnyPointsImpl.md#_fill)
- [\_id](EShapeLineOfAnyPointsImpl.md#_id)
- [\_marker](EShapeLineOfAnyPointsImpl.md#_marker)
- [\_offset](EShapeLineOfAnyPointsImpl.md#_offset)
- [\_parent](EShapeLineOfAnyPointsImpl.md#_parent)
- [\_segments](EShapeLineOfAnyPointsImpl.md#_segments)
- [\_size](EShapeLineOfAnyPointsImpl.md#_size)
- [\_stroke](EShapeLineOfAnyPointsImpl.md#_stroke)
- [\_values](EShapeLineOfAnyPointsImpl.md#_values)
- [\_valuesLength](EShapeLineOfAnyPointsImpl.md#_valueslength)
- [WORK\_RANGE](EShapeLineOfAnyPointsImpl.md#work_range)

### Accessors

- [fill](EShapeLineOfAnyPointsImpl.md#fill)
- [formatted](EShapeLineOfAnyPointsImpl.md#formatted)
- [formatter](EShapeLineOfAnyPointsImpl.md#formatter)
- [id](EShapeLineOfAnyPointsImpl.md#id)
- [length](EShapeLineOfAnyPointsImpl.md#length)
- [marker](EShapeLineOfAnyPointsImpl.md#marker)
- [offset](EShapeLineOfAnyPointsImpl.md#offset)
- [segments](EShapeLineOfAnyPointsImpl.md#segments)
- [size](EShapeLineOfAnyPointsImpl.md#size)
- [stroke](EShapeLineOfAnyPointsImpl.md#stroke)
- [style](EShapeLineOfAnyPointsImpl.md#style)
- [values](EShapeLineOfAnyPointsImpl.md#values)

### Methods

- [calcHitPointAbs](EShapeLineOfAnyPointsImpl.md#calchitpointabs)
- [clone](EShapeLineOfAnyPointsImpl.md#clone)
- [copy](EShapeLineOfAnyPointsImpl.md#copy)
- [getMarker](EShapeLineOfAnyPointsImpl.md#getmarker)
- [serialize](EShapeLineOfAnyPointsImpl.md#serialize)
- [set](EShapeLineOfAnyPointsImpl.md#set)
- [toPoints](EShapeLineOfAnyPointsImpl.md#topoints)
- [updateUploaded](EShapeLineOfAnyPointsImpl.md#updateuploaded)

## Constructors

### constructor

• **new EShapeLineOfAnyPointsImpl**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L39)

## Properties

### \_fill

• `Protected` **\_fill**: [`EShapeLineOfAnyPointsFill`](../interfaces/EShapeLineOfAnyPointsFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L34)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L36)

___

### \_marker

• `Protected` `Optional` **\_marker**: [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L37)

___

### \_offset

• `Protected` **\_offset**: [`EShapeLineOfAnyPointsPoint`](../interfaces/EShapeLineOfAnyPointsPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L33)

___

### \_parent

• `Protected` **\_parent**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L28)

___

### \_segments

• `Protected` **\_segments**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L31)

___

### \_size

• `Protected` **\_size**: [`EShapeLineOfAnyPointsPoint`](../interfaces/EShapeLineOfAnyPointsPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L32)

___

### \_stroke

• `Protected` **\_stroke**: [`EShapeLineOfAnyPointsStroke`](../interfaces/EShapeLineOfAnyPointsStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L35)

___

### \_values

• `Protected` **\_values**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L29)

___

### \_valuesLength

• `Protected` **\_valuesLength**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L30)

___

### WORK\_RANGE

▪ `Static` `Protected` **WORK\_RANGE**: [`number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L26)

## Accessors

### fill

• `get` **fill**(): [`EShapeLineOfAnyPointsFill`](../interfaces/EShapeLineOfAnyPointsFill.md)

#### Returns

[`EShapeLineOfAnyPointsFill`](../interfaces/EShapeLineOfAnyPointsFill.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[fill](../interfaces/EShapeLineOfAnyPoints.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L108)

___

### formatted

• `get` **formatted**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[formatted](../interfaces/EShapeLineOfAnyPoints.md#formatted)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L124)

___

### formatter

• `get` **formatter**(): ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Returns

``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[formatter](../interfaces/EShapeLineOfAnyPoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L116)

• `set` **formatter**(`formatter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter) |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[formatter](../interfaces/EShapeLineOfAnyPoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L120)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[id](../interfaces/EShapeLineOfAnyPoints.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L59)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[length](../interfaces/EShapeLineOfAnyPoints.md#length)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L55)

___

### marker

• `get` **marker**(): [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[marker](../interfaces/EShapeLineOfAnyPoints.md#marker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L87)

___

### offset

• `get` **offset**(): [`EShapeLineOfAnyPointsPoint`](../interfaces/EShapeLineOfAnyPointsPoint.md)

#### Returns

[`EShapeLineOfAnyPointsPoint`](../interfaces/EShapeLineOfAnyPointsPoint.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[offset](../interfaces/EShapeLineOfAnyPoints.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L104)

___

### segments

• `get` **segments**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[segments](../interfaces/EShapeLineOfAnyPoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L71)

• `set` **segments**(`segments`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segments` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[segments](../interfaces/EShapeLineOfAnyPoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L75)

___

### size

• `get` **size**(): [`EShapeLineOfAnyPointsPoint`](../interfaces/EShapeLineOfAnyPointsPoint.md)

#### Returns

[`EShapeLineOfAnyPointsPoint`](../interfaces/EShapeLineOfAnyPointsPoint.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[size](../interfaces/EShapeLineOfAnyPoints.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L100)

___

### stroke

• `get` **stroke**(): [`EShapeLineOfAnyPointsStroke`](../interfaces/EShapeLineOfAnyPointsStroke.md)

#### Returns

[`EShapeLineOfAnyPointsStroke`](../interfaces/EShapeLineOfAnyPointsStroke.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[stroke](../interfaces/EShapeLineOfAnyPoints.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L112)

___

### style

• `get` **style**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[style](../interfaces/EShapeLineOfAnyPoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L79)

• `set` **style**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[style](../interfaces/EShapeLineOfAnyPoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L83)

___

### values

• `get` **values**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[values](../interfaces/EShapeLineOfAnyPoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L63)

• `set` **values**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[values](../interfaces/EShapeLineOfAnyPoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L67)

## Methods

### calcHitPointAbs

▸ **calcHitPointAbs**<`RESULT`\>(`x`, `y`, `sw`, `ss`, `sa`, `threshold`, `toRange`, `tester`, `result`): `boolean`

#### Type parameters

| Name |
| :------ |
| `RESULT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `sw` | `number` |
| `ss` | `number` |
| `sa` | `number` |
| `threshold` | `number` |
| `toRange` | ``null`` \| [`EShapeLineOfAnyPointsHitTesterToRange`](../index.md#eshapelineofanypointshittestertorange) |
| `tester` | [`EShapeLineOfAnyPointsHitTester`](../index.md#eshapelineofanypointshittester)<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[calcHitPointAbs](../interfaces/EShapeLineOfAnyPoints.md#calchitpointabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L214)

___

### clone

▸ **clone**(`parent`): [`EShapeLineOfAnyPointsImpl`](EShapeLineOfAnyPointsImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeLineOfAnyPointsImpl`](EShapeLineOfAnyPointsImpl.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[clone](../interfaces/EShapeLineOfAnyPoints.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L196)

___

### copy

▸ **copy**(`source`): [`EShapeLineOfAnyPointsImpl`](EShapeLineOfAnyPointsImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

[`EShapeLineOfAnyPointsImpl`](EShapeLineOfAnyPointsImpl.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[copy](../interfaces/EShapeLineOfAnyPoints.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L128)

___

### getMarker

▸ **getMarker**(): `undefined` \| [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

This method is more appropriate than the `marker` property in some situations
where the EShapePointsMarkerContainer instance do not need to be created.

#### Returns

`undefined` \| [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[getMarker](../interfaces/EShapeLineOfAnyPoints.md#getmarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L96)

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

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[serialize](../interfaces/EShapeLineOfAnyPoints.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L210)

___

### set

▸ **set**(`newValues?`, `newSegments?`, `newStyle?`): [`EShapeLineOfAnyPointsImpl`](EShapeLineOfAnyPointsImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValues?` | `number`[] |
| `newSegments?` | `number`[] |
| `newStyle?` | `number` |

#### Returns

[`EShapeLineOfAnyPointsImpl`](EShapeLineOfAnyPointsImpl.md)

#### Implementation of

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[set](../interfaces/EShapeLineOfAnyPoints.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L132)

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

[EShapeLineOfAnyPoints](../interfaces/EShapeLineOfAnyPoints.md).[toPoints](../interfaces/EShapeLineOfAnyPoints.md#topoints)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L200)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-impl.ts#L192)
