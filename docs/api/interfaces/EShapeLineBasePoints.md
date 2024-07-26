[Winter Cardinal UI - v0.442.0](../index.md) / EShapeLineBasePoints

# Interface: EShapeLineBasePoints

## Hierarchy

- [`EShapePoints`](EShapePoints.md)

  ↳ **`EShapeLineBasePoints`**

## Implemented by

- [`EShapeBarPoints`](../classes/EShapeBarPoints.md)

## Table of contents

### Properties

- [formatted](EShapeLineBasePoints.md#formatted)
- [formatter](EShapeLineBasePoints.md#formatter)
- [id](EShapeLineBasePoints.md#id)
- [length](EShapeLineBasePoints.md#length)
- [marker](EShapeLineBasePoints.md#marker)
- [plength](EShapeLineBasePoints.md#plength)
- [segments](EShapeLineBasePoints.md#segments)
- [style](EShapeLineBasePoints.md#style)
- [values](EShapeLineBasePoints.md#values)

### Methods

- [calcHitPointAbs](EShapeLineBasePoints.md#calchitpointabs)
- [clone](EShapeLineBasePoints.md#clone)
- [copy](EShapeLineBasePoints.md#copy)
- [getMarker](EShapeLineBasePoints.md#getmarker)
- [onSizeChange](EShapeLineBasePoints.md#onsizechange)
- [serialize](EShapeLineBasePoints.md#serialize)
- [set](EShapeLineBasePoints.md#set)
- [toPoints](EShapeLineBasePoints.md#topoints)

## Properties

### formatted

• `Readonly` **formatted**: `Readonly`\<[`EShapePointsFormatted`](../index.md#eshapepointsformatted)\>

#### Inherited from

[EShapePoints](EShapePoints.md).[formatted](EShapePoints.md#formatted)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L31)

___

### formatter

• **formatter**: ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Inherited from

[EShapePoints](EShapePoints.md).[formatter](EShapePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L30)

___

### id

• `Readonly` **id**: `number`

#### Inherited from

[EShapePoints](EShapePoints.md).[id](EShapePoints.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L18)

___

### length

• `Readonly` **length**: `number`

#### Inherited from

[EShapePoints](EShapePoints.md).[length](EShapePoints.md#length)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L15)

___

### marker

• **marker**: [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Inherited from

[EShapePoints](EShapePoints.md).[marker](EShapePoints.md#marker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L22)

___

### plength

• `Readonly` **plength**: `number`

Peak length

#### Inherited from

[EShapePoints](EShapePoints.md).[plength](EShapePoints.md#plength)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L17)

___

### segments

• **segments**: `number`[]

#### Inherited from

[EShapePoints](EShapePoints.md).[segments](EShapePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L20)

___

### style

• **style**: `number`

#### Inherited from

[EShapePoints](EShapePoints.md).[style](EShapePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L21)

___

### values

• **values**: `number`[]

#### Inherited from

[EShapePoints](EShapePoints.md).[values](EShapePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L19)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base-points.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base-points.ts#L11)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L36)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L28)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapePoints](EShapePoints.md).[onSizeChange](EShapePoints.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L32)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L38)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L34)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L37)
