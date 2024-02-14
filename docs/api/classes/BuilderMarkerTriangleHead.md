[Winter Cardinal UI - v0.407.0](../index.md) / BuilderMarkerTriangleHead

# Class: BuilderMarkerTriangleHead

## Hierarchy

- [`BuilderMarkerTriangle`](BuilderMarkerTriangle.md)

  ↳ **`BuilderMarkerTriangleHead`**

## Table of contents

### Constructors

- [constructor](BuilderMarkerTriangleHead.md#constructor)

### Properties

- [alphaFill](BuilderMarkerTriangleHead.md#alphafill)
- [alphaStroke](BuilderMarkerTriangleHead.md#alphastroke)
- [buffer](BuilderMarkerTriangleHead.md#buffer)
- [colorFill](BuilderMarkerTriangleHead.md#colorfill)
- [colorStroke](BuilderMarkerTriangleHead.md#colorstroke)
- [indexCount](BuilderMarkerTriangleHead.md#indexcount)
- [indexOffset](BuilderMarkerTriangleHead.md#indexoffset)
- [inited](BuilderMarkerTriangleHead.md#inited)
- [pointId](BuilderMarkerTriangleHead.md#pointid)
- [sizeX](BuilderMarkerTriangleHead.md#sizex)
- [sizeY](BuilderMarkerTriangleHead.md#sizey)
- [strokeAlign](BuilderMarkerTriangleHead.md#strokealign)
- [strokeSide](BuilderMarkerTriangleHead.md#strokeside)
- [strokeStyle](BuilderMarkerTriangleHead.md#strokestyle)
- [strokeWidth](BuilderMarkerTriangleHead.md#strokewidth)
- [texture](BuilderMarkerTriangleHead.md#texture)
- [textureTransformId](BuilderMarkerTriangleHead.md#texturetransformid)
- [transformLocalId](BuilderMarkerTriangleHead.md#transformlocalid)
- [vertexCount](BuilderMarkerTriangleHead.md#vertexcount)
- [vertexOffset](BuilderMarkerTriangleHead.md#vertexoffset)
- [WORK](BuilderMarkerTriangleHead.md#work)

### Methods

- [buildUnit](BuilderMarkerTriangleHead.md#buildunit)
- [init](BuilderMarkerTriangleHead.md#init)
- [isCompatible](BuilderMarkerTriangleHead.md#iscompatible)
- [reinit](BuilderMarkerTriangleHead.md#reinit)
- [toMarker](BuilderMarkerTriangleHead.md#tomarker)
- [update](BuilderMarkerTriangleHead.md#update)
- [updateColorFill](BuilderMarkerTriangleHead.md#updatecolorfill)
- [updateColorStroke](BuilderMarkerTriangleHead.md#updatecolorstroke)
- [updateVertexStepAndUv](BuilderMarkerTriangleHead.md#updatevertexstepanduv)

## Constructors

### constructor

• **new BuilderMarkerTriangleHead**(`buffer`, `vertexOffset`, `indexOffset`): [`BuilderMarkerTriangleHead`](BuilderMarkerTriangleHead.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

[`BuilderMarkerTriangleHead`](BuilderMarkerTriangleHead.md)

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[constructor](BuilderMarkerTriangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L26)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[alphaFill](BuilderMarkerTriangle.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[alphaStroke](BuilderMarkerTriangle.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[buffer](BuilderMarkerTriangle.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[colorFill](BuilderMarkerTriangle.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[colorStroke](BuilderMarkerTriangle.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[indexCount](BuilderMarkerTriangle.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[indexOffset](BuilderMarkerTriangle.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[inited](BuilderMarkerTriangle.md#inited)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[pointId](BuilderMarkerTriangle.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L24)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[sizeX](BuilderMarkerTriangle.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[sizeY](BuilderMarkerTriangle.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[strokeAlign](BuilderMarkerTriangle.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[strokeSide](BuilderMarkerTriangle.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[strokeStyle](BuilderMarkerTriangle.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[strokeWidth](BuilderMarkerTriangle.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[texture](BuilderMarkerTriangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[textureTransformId](BuilderMarkerTriangle.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[transformLocalId](BuilderMarkerTriangle.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[vertexCount](BuilderMarkerTriangle.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[vertexOffset](BuilderMarkerTriangle.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[WORK](BuilderMarkerTriangle.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L23)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L139)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[init](BuilderMarkerTriangle.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L103)

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

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[reinit](BuilderMarkerTriangle.md#reinit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L77)

___

### toMarker

▸ **toMarker**(`container`): [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md) |

#### Returns

[`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Overrides

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[toMarker](BuilderMarkerTriangle.md#tomarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle-head.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle-head.ts#L11)

___

### update

▸ **update**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[update](BuilderMarkerTriangle.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L40)

___

### updateColorFill

▸ **updateColorFill**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[updateColorFill](BuilderMarkerTriangle.md#updatecolorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L14)

___

### updateColorStroke

▸ **updateColorStroke**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[updateColorStroke](BuilderMarkerTriangle.md#updatecolorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L124)

___

### updateVertexStepAndUv

▸ **updateVertexStepAndUv**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerTriangle](BuilderMarkerTriangle.md).[updateVertexStepAndUv](BuilderMarkerTriangle.md#updatevertexstepanduv)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L47)
