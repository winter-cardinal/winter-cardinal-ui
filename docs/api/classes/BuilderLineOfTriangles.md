[Winter Cardinal UI - v0.227.0](../index.md) / BuilderLineOfTriangles

# Class: BuilderLineOfTriangles

## Hierarchy

- [`BuilderLineOfAny`](BuilderLineOfAny.md)

  ↳ **`BuilderLineOfTriangles`**

## Table of contents

### Constructors

- [constructor](BuilderLineOfTriangles.md#constructor)

### Properties

- [alphaFill](BuilderLineOfTriangles.md#alphafill)
- [alphaStroke](BuilderLineOfTriangles.md#alphastroke)
- [colorFill](BuilderLineOfTriangles.md#colorfill)
- [colorStroke](BuilderLineOfTriangles.md#colorstroke)
- [indexCount](BuilderLineOfTriangles.md#indexcount)
- [indexOffset](BuilderLineOfTriangles.md#indexoffset)
- [pointCount](BuilderLineOfTriangles.md#pointcount)
- [pointCountReserved](BuilderLineOfTriangles.md#pointcountreserved)
- [pointFillId](BuilderLineOfTriangles.md#pointfillid)
- [pointId](BuilderLineOfTriangles.md#pointid)
- [pointOffsetId](BuilderLineOfTriangles.md#pointoffsetid)
- [pointSizeId](BuilderLineOfTriangles.md#pointsizeid)
- [pointStrokeId](BuilderLineOfTriangles.md#pointstrokeid)
- [sizeX](BuilderLineOfTriangles.md#sizex)
- [sizeY](BuilderLineOfTriangles.md#sizey)
- [strokeAlign](BuilderLineOfTriangles.md#strokealign)
- [strokeSide](BuilderLineOfTriangles.md#strokeside)
- [strokeStyle](BuilderLineOfTriangles.md#strokestyle)
- [strokeWidth](BuilderLineOfTriangles.md#strokewidth)
- [texture](BuilderLineOfTriangles.md#texture)
- [textureTransformId](BuilderLineOfTriangles.md#texturetransformid)
- [transformLocalId](BuilderLineOfTriangles.md#transformlocalid)
- [vertexCount](BuilderLineOfTriangles.md#vertexcount)
- [vertexOffset](BuilderLineOfTriangles.md#vertexoffset)

### Methods

- [buildUnit](BuilderLineOfTriangles.md#buildunit)
- [init](BuilderLineOfTriangles.md#init)
- [isCompatible](BuilderLineOfTriangles.md#iscompatible)
- [update](BuilderLineOfTriangles.md#update)
- [updateColorFill](BuilderLineOfTriangles.md#updatecolorfill)
- [updateColorStroke](BuilderLineOfTriangles.md#updatecolorstroke)
- [updateLineOfAnyColorFill](BuilderLineOfTriangles.md#updatelineofanycolorfill)
- [updateLineOfAnyColorStroke](BuilderLineOfTriangles.md#updatelineofanycolorstroke)
- [updateVertexStepAndUvs](BuilderLineOfTriangles.md#updatevertexstepanduvs)

## Constructors

### constructor

• **new BuilderLineOfTriangles**(`vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`, `pointCountReserved`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |
| `pointCountReserved` | `number` |

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[constructor](BuilderLineOfAny.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L22)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[alphaFill](BuilderLineOfAny.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L32)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[alphaStroke](BuilderLineOfAny.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[colorFill](BuilderLineOfAny.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[colorStroke](BuilderLineOfAny.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[indexCount](BuilderLineOfAny.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[indexOffset](BuilderLineOfAny.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### pointCount

• `Protected` **pointCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointCount](BuilderLineOfAny.md#pointcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L15)

___

### pointCountReserved

• `Protected` **pointCountReserved**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointCountReserved](BuilderLineOfAny.md#pointcountreserved)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L16)

___

### pointFillId

• `Protected` **pointFillId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointFillId](BuilderLineOfAny.md#pointfillid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L19)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointId](BuilderLineOfAny.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L14)

___

### pointOffsetId

• `Protected` **pointOffsetId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointOffsetId](BuilderLineOfAny.md#pointoffsetid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L18)

___

### pointSizeId

• `Protected` **pointSizeId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointSizeId](BuilderLineOfAny.md#pointsizeid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L17)

___

### pointStrokeId

• `Protected` **pointStrokeId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointStrokeId](BuilderLineOfAny.md#pointstrokeid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L20)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[sizeX](BuilderLineOfAny.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[sizeY](BuilderLineOfAny.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L22)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeAlign](BuilderLineOfAny.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeSide](BuilderLineOfAny.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeStyle](BuilderLineOfAny.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeWidth](BuilderLineOfAny.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L27)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[texture](BuilderLineOfAny.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[textureTransformId](BuilderLineOfAny.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L37)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[transformLocalId](BuilderLineOfAny.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[vertexCount](BuilderLineOfAny.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[vertexOffset](BuilderLineOfAny.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

## Methods

### buildUnit

▸ **buildUnit**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`EShapeBufferUnitBuilder`](EShapeBufferUnitBuilder.md) |

#### Returns

`void`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[buildUnit](BuilderLineOfAny.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L105)

___

### init

▸ **init**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |

#### Returns

`void`

#### Overrides

[BuilderLineOfAny](BuilderLineOfAny.md).[init](BuilderLineOfAny.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts#L30)

___

### isCompatible

▸ **isCompatible**(`shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`boolean`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[isCompatible](BuilderLineOfAny.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L39)

___

### update

▸ **update**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Overrides

[BuilderLineOfAny](BuilderLineOfAny.md).[update](BuilderLineOfAny.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts#L52)

___

### updateColorFill

▸ `Protected` **updateColorFill**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[updateColorFill](BuilderLineOfAny.md#updatecolorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L77)

___

### updateColorStroke

▸ `Protected` **updateColorStroke**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[updateColorStroke](BuilderLineOfAny.md#updatecolorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L91)

___

### updateLineOfAnyColorFill

▸ `Protected` **updateLineOfAnyColorFill**(`buffer`, `shape`, `points`, `vcountPerPoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `points` | [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md) |
| `vcountPerPoint` | `number` |

#### Returns

`void`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[updateLineOfAnyColorFill](BuilderLineOfAny.md#updatelineofanycolorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L44)

___

### updateLineOfAnyColorStroke

▸ `Protected` **updateLineOfAnyColorStroke**(`buffer`, `shape`, `points`, `vcountPerPoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `points` | [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md) |
| `vcountPerPoint` | `number` |

#### Returns

`void`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[updateLineOfAnyColorStroke](BuilderLineOfAny.md#updatelineofanycolorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L78)

___

### updateVertexStepAndUvs

▸ `Protected` **updateVertexStepAndUvs**(`buffer`, `shape`, `points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `points` | [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts#L61)
