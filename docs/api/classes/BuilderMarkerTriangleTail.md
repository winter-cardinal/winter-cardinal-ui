[Winter Cardinal UI - v0.310.1](../index.md) / BuilderMarkerTriangleTail

# Class: BuilderMarkerTriangleTail

## Hierarchy

- [`BuilderMarkerTriangle`](BuilderMarkerTriangle.md)

  ↳ **`BuilderMarkerTriangleTail`**

## Table of contents

### Constructors

- [constructor](BuilderMarkerTriangleTail.md#constructor)

### Properties

- [alphaFill](BuilderMarkerTriangleTail.md#alphafill)
- [alphaStroke](BuilderMarkerTriangleTail.md#alphastroke)
- [colorFill](BuilderMarkerTriangleTail.md#colorfill)
- [colorStroke](BuilderMarkerTriangleTail.md#colorstroke)
- [indexCount](BuilderMarkerTriangleTail.md#indexcount)
- [indexOffset](BuilderMarkerTriangleTail.md#indexoffset)
- [pointId](BuilderMarkerTriangleTail.md#pointid)
- [sizeX](BuilderMarkerTriangleTail.md#sizex)
- [sizeY](BuilderMarkerTriangleTail.md#sizey)
- [strokeAlign](BuilderMarkerTriangleTail.md#strokealign)
- [strokeSide](BuilderMarkerTriangleTail.md#strokeside)
- [strokeStyle](BuilderMarkerTriangleTail.md#strokestyle)
- [strokeWidth](BuilderMarkerTriangleTail.md#strokewidth)
- [texture](BuilderMarkerTriangleTail.md#texture)
- [textureTransformId](BuilderMarkerTriangleTail.md#texturetransformid)
- [transformLocalId](BuilderMarkerTriangleTail.md#transformlocalid)
- [vertexCount](BuilderMarkerTriangleTail.md#vertexcount)
- [vertexOffset](BuilderMarkerTriangleTail.md#vertexoffset)
- [WORK](BuilderMarkerTriangleTail.md#work)

### Methods

- [buildUnit](BuilderMarkerTriangleTail.md#buildunit)
- [init](BuilderMarkerTriangleTail.md#init)
- [isCompatible](BuilderMarkerTriangleTail.md#iscompatible)
- [toMarker](BuilderMarkerTriangleTail.md#tomarker)
- [update](BuilderMarkerTriangleTail.md#update)
- [updateColorFill](BuilderMarkerTriangleTail.md#updatecolorfill)
- [updateColorStroke](BuilderMarkerTriangleTail.md#updatecolorstroke)
- [updateVertexStepAndUv](BuilderMarkerTriangleTail.md#updatevertexstepanduv)

## Constructors

### constructor

• **new BuilderMarkerTriangleTail**(`vertexOffset`, `indexOffset`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[constructor](BuilderMarkerTriangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L26)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[alphaFill](BuilderMarkerTriangle.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L32)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[alphaStroke](BuilderMarkerTriangle.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[colorFill](BuilderMarkerTriangle.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[colorStroke](BuilderMarkerTriangle.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[indexCount](BuilderMarkerTriangle.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[indexOffset](BuilderMarkerTriangle.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[pointId](BuilderMarkerTriangle.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L24)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[sizeX](BuilderMarkerTriangle.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[sizeY](BuilderMarkerTriangle.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L22)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[strokeAlign](BuilderMarkerTriangle.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[strokeSide](BuilderMarkerTriangle.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[strokeStyle](BuilderMarkerTriangle.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[strokeWidth](BuilderMarkerTriangle.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L27)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[texture](BuilderMarkerTriangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[textureTransformId](BuilderMarkerTriangle.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L37)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[transformLocalId](BuilderMarkerTriangle.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[vertexCount](BuilderMarkerTriangle.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[vertexOffset](BuilderMarkerTriangle.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[WORK](BuilderMarkerTriangle.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L23)

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

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[buildUnit](BuilderMarkerTriangle.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L105)

___

### init

▸ **init**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[init](BuilderMarkerTriangle.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L31)

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

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[isCompatible](BuilderMarkerTriangle.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L71)

___

### toMarker

▸ `Protected` **toMarker**(`container`): [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md) |

#### Returns

[`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Overrides

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[toMarker](BuilderMarkerTriangle.md#tomarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle-tail.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle-tail.ts#L11)

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

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[update](BuilderMarkerTriangle.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L38)

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

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[updateColorFill](BuilderMarkerTriangle.md#updatecolorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L14)

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

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[updateColorStroke](BuilderMarkerTriangle.md#updatecolorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L91)

___

### updateVertexStepAndUv

▸ `Protected` **updateVertexStepAndUv**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[updateVertexStepAndUv](BuilderMarkerTriangle.md#updatevertexstepanduv)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L44)
