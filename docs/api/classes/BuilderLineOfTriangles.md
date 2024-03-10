[Winter Cardinal UI - v0.414.0](../index.md) / BuilderLineOfTriangles

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
- [buffer](BuilderLineOfTriangles.md#buffer)
- [colorFill](BuilderLineOfTriangles.md#colorfill)
- [colorStroke](BuilderLineOfTriangles.md#colorstroke)
- [icountPerPoint](BuilderLineOfTriangles.md#icountperpoint)
- [indexCount](BuilderLineOfTriangles.md#indexcount)
- [indexOffset](BuilderLineOfTriangles.md#indexoffset)
- [inited](BuilderLineOfTriangles.md#inited)
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
- [vcountPerPoint](BuilderLineOfTriangles.md#vcountperpoint)
- [vertexCount](BuilderLineOfTriangles.md#vertexcount)
- [vertexOffset](BuilderLineOfTriangles.md#vertexoffset)

### Methods

- [buildUnit](BuilderLineOfTriangles.md#buildunit)
- [init](BuilderLineOfTriangles.md#init)
- [isCompatible](BuilderLineOfTriangles.md#iscompatible)
- [reinit](BuilderLineOfTriangles.md#reinit)
- [update](BuilderLineOfTriangles.md#update)
- [updateColor](BuilderLineOfTriangles.md#updatecolor)
- [updateLineOfAnyColor](BuilderLineOfTriangles.md#updatelineofanycolor)
- [updateVertexStepAndUvs](BuilderLineOfTriangles.md#updatevertexstepanduvs)

## Constructors

### constructor

• **new BuilderLineOfTriangles**(`buffer`, `vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`, `pointCountReserved`, `vcountPerPoint`, `icountPerPoint`): [`BuilderLineOfTriangles`](BuilderLineOfTriangles.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |
| `pointCountReserved` | `number` |
| `vcountPerPoint` | `number` |
| `icountPerPoint` | `number` |

#### Returns

[`BuilderLineOfTriangles`](BuilderLineOfTriangles.md)

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[constructor](BuilderLineOfAny.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L24)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[alphaFill](BuilderLineOfAny.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[alphaStroke](BuilderLineOfAny.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[buffer](BuilderLineOfAny.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[colorFill](BuilderLineOfAny.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[colorStroke](BuilderLineOfAny.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### icountPerPoint

• `Protected` **icountPerPoint**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[icountPerPoint](BuilderLineOfAny.md#icountperpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L22)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[indexCount](BuilderLineOfAny.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[indexOffset](BuilderLineOfAny.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[inited](BuilderLineOfAny.md#inited)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### pointCount

• `Protected` **pointCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointCount](BuilderLineOfAny.md#pointcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L15)

___

### pointCountReserved

• `Protected` **pointCountReserved**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointCountReserved](BuilderLineOfAny.md#pointcountreserved)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L16)

___

### pointFillId

• `Protected` **pointFillId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointFillId](BuilderLineOfAny.md#pointfillid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L19)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointId](BuilderLineOfAny.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L14)

___

### pointOffsetId

• `Protected` **pointOffsetId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointOffsetId](BuilderLineOfAny.md#pointoffsetid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L18)

___

### pointSizeId

• `Protected` **pointSizeId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointSizeId](BuilderLineOfAny.md#pointsizeid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L17)

___

### pointStrokeId

• `Protected` **pointStrokeId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointStrokeId](BuilderLineOfAny.md#pointstrokeid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L20)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[sizeX](BuilderLineOfAny.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[sizeY](BuilderLineOfAny.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeAlign](BuilderLineOfAny.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeSide](BuilderLineOfAny.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeStyle](BuilderLineOfAny.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeWidth](BuilderLineOfAny.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[texture](BuilderLineOfAny.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[textureTransformId](BuilderLineOfAny.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[transformLocalId](BuilderLineOfAny.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vcountPerPoint

• `Protected` **vcountPerPoint**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[vcountPerPoint](BuilderLineOfAny.md#vcountperpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L21)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[vertexCount](BuilderLineOfAny.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[vertexOffset](BuilderLineOfAny.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L146)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[BuilderLineOfAny](BuilderLineOfAny.md).[init](BuilderLineOfAny.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts#L28)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L79)

___

### reinit

▸ **reinit**(`buffer`, `shape`, `vertexOffset`, `indexOffset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

`boolean`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[reinit](BuilderLineOfAny.md#reinit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L46)

___

### update

▸ **update**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Overrides

[BuilderLineOfAny](BuilderLineOfAny.md).[update](BuilderLineOfAny.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts#L48)

___

### updateColor

▸ **updateColor**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[updateColor](BuilderLineOfAny.md#updatecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L109)

___

### updateLineOfAnyColor

▸ **updateLineOfAnyColor**(`buffer`, `shape`, `points`, `vcountPerPoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `points` | [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md) |
| `vcountPerPoint` | `number` |

#### Returns

`void`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[updateLineOfAnyColor](BuilderLineOfAny.md#updatelineofanycolor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L84)

___

### updateVertexStepAndUvs

▸ **updateVertexStepAndUvs**(`buffer`, `shape`, `points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `points` | [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-triangles.ts#L57)
