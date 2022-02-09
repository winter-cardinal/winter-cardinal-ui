[Winter Cardinal UI - v0.154.0](../index.md) / EShapePoints

# Interface: EShapePoints

## Hierarchy

- **`EShapePoints`**

  ↳ [`EShapeLineBasePoints`](EShapeLineBasePoints.md)

  ↳ [`EShapeLineOfAnyPoints`](EShapeLineOfAnyPoints.md)

## Implemented by

- [`EShapeGroupPoints`](../classes/EShapeGroupPoints.md)
- [`EShapeLinePoints`](../classes/EShapeLinePoints.md)

## Table of contents

### Properties

- [formatted](EShapePoints.md#formatted)
- [formatter](EShapePoints.md#formatter)
- [id](EShapePoints.md#id)
- [length](EShapePoints.md#length)
- [marker](EShapePoints.md#marker)
- [segments](EShapePoints.md#segments)
- [style](EShapePoints.md#style)
- [values](EShapePoints.md#values)

### Methods

- [clone](EShapePoints.md#clone)
- [copy](EShapePoints.md#copy)
- [getMarker](EShapePoints.md#getmarker)
- [serialize](EShapePoints.md#serialize)
- [set](EShapePoints.md#set)
- [toPoints](EShapePoints.md#topoints)

## Properties

### formatted

• `Readonly` **formatted**: `Readonly`<[`EShapePointsFormatted`](../index.md#eshapepointsformatted)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L29)

___

### formatter

• **formatter**: ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L28)

___

### id

• `Readonly` **id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L16)

___

### length

• `Readonly` **length**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L15)

___

### marker

• **marker**: [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L20)

___

### segments

• **segments**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L18)

___

### style

• **style**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L19)

___

### values

• **values**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L17)

## Methods

### clone

▸ **clone**(`parent`): [`EShapePoints`](EShapePoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](EShape.md) |

#### Returns

[`EShapePoints`](EShapePoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L33)

___

### copy

▸ **copy**(`source`): [`EShapePoints`](EShapePoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePoints`](EShapePoints.md) |

#### Returns

[`EShapePoints`](EShapePoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L32)

___

### getMarker

▸ **getMarker**(): `undefined` \| [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

This method is more appropriate than the `marker` property in some situations
where the EShapePointsMarkerContainer instance do not need to be created.

#### Returns

`undefined` \| [`EShapePointsMarkerContainer`](EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L26)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L35)

___

### set

▸ **set**(`values?`, `segments?`, `style?`): [`EShapePoints`](EShapePoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `number`[] |
| `segments?` | `number`[] |
| `style?` | `number` |

#### Returns

[`EShapePoints`](EShapePoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L31)

___

### toPoints

▸ **toPoints**(`transform`): `Point`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |

#### Returns

`Point`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-points.ts#L34)
