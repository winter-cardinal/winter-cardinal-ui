[Winter Cardinal UI - v0.457.0](../index.md) / EShapeLineOfAnyPoints

# Interface: EShapeLineOfAnyPoints

## Hierarchy

- [`EShapePoints`](EShapePoints.md)

  ↳ **`EShapeLineOfAnyPoints`**

## Implemented by

- [`EShapeLineOfAnyPointsImpl`](../classes/EShapeLineOfAnyPointsImpl.md)

## Table of contents

### Properties

- [fill](EShapeLineOfAnyPoints.md#fill)
- [formatted](EShapeLineOfAnyPoints.md#formatted)
- [formatter](EShapeLineOfAnyPoints.md#formatter)
- [id](EShapeLineOfAnyPoints.md#id)
- [length](EShapeLineOfAnyPoints.md#length)
- [marker](EShapeLineOfAnyPoints.md#marker)
- [offset](EShapeLineOfAnyPoints.md#offset)
- [plength](EShapeLineOfAnyPoints.md#plength)
- [segments](EShapeLineOfAnyPoints.md#segments)
- [size](EShapeLineOfAnyPoints.md#size)
- [stroke](EShapeLineOfAnyPoints.md#stroke)
- [style](EShapeLineOfAnyPoints.md#style)
- [values](EShapeLineOfAnyPoints.md#values)

### Methods

- [calcHitPointAbs](EShapeLineOfAnyPoints.md#calchitpointabs)
- [clone](EShapeLineOfAnyPoints.md#clone)
- [copy](EShapeLineOfAnyPoints.md#copy)
- [getMarker](EShapeLineOfAnyPoints.md#getmarker)
- [onSizeChange](EShapeLineOfAnyPoints.md#onsizechange)
- [serialize](EShapeLineOfAnyPoints.md#serialize)
- [set](EShapeLineOfAnyPoints.md#set)
- [toFitted](EShapeLineOfAnyPoints.md#tofitted)
- [toPoints](EShapeLineOfAnyPoints.md#topoints)

## Properties

### fill

• `Readonly` **fill**: [`EShapeLineOfAnyPointsFill`](EShapeLineOfAnyPointsFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts#L16)

___

### formatted

• `Readonly` **formatted**: `Readonly`\<[`EShapePointsFormatted`](../index.md#eshapepointsformatted)\>

#### Inherited from

[EShapePoints](EShapePoints.md).[formatted](EShapePoints.md#formatted)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L31)

___

### formatter

• **formatter**: ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Inherited from

[EShapePoints](EShapePoints.md).[formatter](EShapePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L30)

___

### id

• `Readonly` **id**: `number`

#### Inherited from

[EShapePoints](EShapePoints.md).[id](EShapePoints.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L18)

___

### length

• `Readonly` **length**: `number`

#### Inherited from

[EShapePoints](EShapePoints.md).[length](EShapePoints.md#length)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L15)

___

### marker

• **marker**: [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Inherited from

[EShapePoints](EShapePoints.md).[marker](EShapePoints.md#marker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L22)

___

### offset

• `Readonly` **offset**: [`EShapeLineOfAnyPointsPoint`](EShapeLineOfAnyPointsPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts#L15)

___

### plength

• `Readonly` **plength**: `number`

Peak length

#### Inherited from

[EShapePoints](EShapePoints.md).[plength](EShapePoints.md#plength)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L17)

___

### segments

• **segments**: `number`[]

#### Inherited from

[EShapePoints](EShapePoints.md).[segments](EShapePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L20)

___

### size

• `Readonly` **size**: [`EShapeLineOfAnyPointsPoint`](EShapeLineOfAnyPointsPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts#L14)

___

### stroke

• `Readonly` **stroke**: [`EShapeLineOfAnyPointsStroke`](EShapeLineOfAnyPointsStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts#L17)

___

### style

• **style**: `number`

#### Inherited from

[EShapePoints](EShapePoints.md).[style](EShapePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L21)

___

### values

• **values**: `number`[]

#### Inherited from

[EShapePoints](EShapePoints.md).[values](EShapePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L19)

## Methods

### calcHitPointAbs

▸ **calcHitPointAbs**\<`RESULT`\>(`x`, `y`, `sw`, `ss`, `sa`, `threshold`, `toRange`, `tester`, `result`): `boolean`

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
| `tester` | [`EShapeLineOfAnyPointsHitTester`](../index.md#eshapelineofanypointshittester)\<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts#L19)

___

### clone

▸ **clone**(`parent`): [`EShapePoints`](EShapePoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](EShape.md) |

#### Returns

[`EShapePoints`](EShapePoints.md)

#### Inherited from

[EShapePoints](EShapePoints.md).[clone](EShapePoints.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L36)

___

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePoints`](EShapePoints.md) |

#### Returns

`this`

#### Inherited from

[EShapePoints](EShapePoints.md).[copy](EShapePoints.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L35)

___

### getMarker

▸ **getMarker**(): `undefined` \| [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

This method is more appropriate than the `marker` property in some situations
where the EShapePointsMarkerContainer instance do not need to be created.

#### Returns

`undefined` \| [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Inherited from

[EShapePoints](EShapePoints.md).[getMarker](EShapePoints.md#getmarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L28)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapePoints](EShapePoints.md).[onSizeChange](EShapePoints.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L32)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapePoints](EShapePoints.md).[serialize](EShapePoints.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L38)

___

### set

▸ **set**(`values?`, `segments?`, `style?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `number`[] |
| `segments?` | `number`[] |
| `style?` | `number` |

#### Returns

`this`

#### Inherited from

[EShapePoints](EShapePoints.md).[set](EShapePoints.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L34)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points.ts#L18)

___

### toPoints

▸ **toPoints**(`transform`): `Point`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |

#### Returns

`Point`[]

#### Inherited from

[EShapePoints](EShapePoints.md).[toPoints](EShapePoints.md#topoints)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L37)
