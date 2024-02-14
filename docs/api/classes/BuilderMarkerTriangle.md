[Winter Cardinal UI - v0.407.0](../index.md) / BuilderMarkerTriangle

# Class: BuilderMarkerTriangle

## Hierarchy

- `BuilderMarkerBase`

  ↳ **`BuilderMarkerTriangle`**

  ↳↳ [`BuilderMarkerTriangleHead`](BuilderMarkerTriangleHead.md)

  ↳↳ [`BuilderMarkerTriangleTail`](BuilderMarkerTriangleTail.md)

## Table of contents

### Constructors

- [constructor](BuilderMarkerTriangle.md#constructor)

### Properties

- [alphaFill](BuilderMarkerTriangle.md#alphafill)
- [alphaStroke](BuilderMarkerTriangle.md#alphastroke)
- [buffer](BuilderMarkerTriangle.md#buffer)
- [colorFill](BuilderMarkerTriangle.md#colorfill)
- [colorStroke](BuilderMarkerTriangle.md#colorstroke)
- [indexCount](BuilderMarkerTriangle.md#indexcount)
- [indexOffset](BuilderMarkerTriangle.md#indexoffset)
- [inited](BuilderMarkerTriangle.md#inited)
- [pointId](BuilderMarkerTriangle.md#pointid)
- [sizeX](BuilderMarkerTriangle.md#sizex)
- [sizeY](BuilderMarkerTriangle.md#sizey)
- [strokeAlign](BuilderMarkerTriangle.md#strokealign)
- [strokeSide](BuilderMarkerTriangle.md#strokeside)
- [strokeStyle](BuilderMarkerTriangle.md#strokestyle)
- [strokeWidth](BuilderMarkerTriangle.md#strokewidth)
- [texture](BuilderMarkerTriangle.md#texture)
- [textureTransformId](BuilderMarkerTriangle.md#texturetransformid)
- [transformLocalId](BuilderMarkerTriangle.md#transformlocalid)
- [vertexCount](BuilderMarkerTriangle.md#vertexcount)
- [vertexOffset](BuilderMarkerTriangle.md#vertexoffset)
- [WORK](BuilderMarkerTriangle.md#work)

### Methods

- [buildUnit](BuilderMarkerTriangle.md#buildunit)
- [init](BuilderMarkerTriangle.md#init)
- [isCompatible](BuilderMarkerTriangle.md#iscompatible)
- [reinit](BuilderMarkerTriangle.md#reinit)
- [toMarker](BuilderMarkerTriangle.md#tomarker)
- [update](BuilderMarkerTriangle.md#update)
- [updateColorFill](BuilderMarkerTriangle.md#updatecolorfill)
- [updateColorStroke](BuilderMarkerTriangle.md#updatecolorstroke)
- [updateVertexStepAndUv](BuilderMarkerTriangle.md#updatevertexstepanduv)

## Constructors

### constructor

• **new BuilderMarkerTriangle**(`buffer`, `vertexOffset`, `indexOffset`): [`BuilderMarkerTriangle`](BuilderMarkerTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

[`BuilderMarkerTriangle`](BuilderMarkerTriangle.md)

#### Overrides

BuilderMarkerBase.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L26)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

BuilderMarkerBase.alphaFill

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

BuilderMarkerBase.alphaStroke

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

BuilderMarkerBase.buffer

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

BuilderMarkerBase.colorFill

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

BuilderMarkerBase.colorStroke

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

BuilderMarkerBase.indexCount

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

BuilderMarkerBase.indexOffset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

BuilderMarkerBase.inited

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### pointId

• `Protected` **pointId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L24)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

BuilderMarkerBase.sizeX

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

BuilderMarkerBase.sizeY

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

BuilderMarkerBase.strokeAlign

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

BuilderMarkerBase.strokeSide

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

BuilderMarkerBase.strokeStyle

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

BuilderMarkerBase.strokeWidth

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

BuilderMarkerBase.texture

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

BuilderMarkerBase.textureTransformId

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

BuilderMarkerBase.transformLocalId

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

BuilderMarkerBase.vertexCount

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

BuilderMarkerBase.vertexOffset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

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

BuilderMarkerBase.buildUnit

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L139)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

BuilderMarkerBase.init

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

BuilderMarkerBase.isCompatible

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

BuilderMarkerBase.reinit

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

#### Inherited from

BuilderMarkerBase.toMarker

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L39)

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

BuilderMarkerBase.update

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

BuilderMarkerBase.updateColorFill

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

BuilderMarkerBase.updateColorStroke

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-triangle.ts#L47)
