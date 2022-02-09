[Winter Cardinal UI - v0.154.0](../index.md) / BuilderMarkerCircleHead

# Class: BuilderMarkerCircleHead

## Hierarchy

- [`BuilderMarkerCircle`](BuilderMarkerCircle.md)

  ↳ **`BuilderMarkerCircleHead`**

## Table of contents

### Constructors

- [constructor](BuilderMarkerCircleHead.md#constructor)

### Properties

- [alphaFill](BuilderMarkerCircleHead.md#alphafill)
- [alphaStroke](BuilderMarkerCircleHead.md#alphastroke)
- [colorFill](BuilderMarkerCircleHead.md#colorfill)
- [colorStroke](BuilderMarkerCircleHead.md#colorstroke)
- [indexCount](BuilderMarkerCircleHead.md#indexcount)
- [indexOffset](BuilderMarkerCircleHead.md#indexoffset)
- [pointId](BuilderMarkerCircleHead.md#pointid)
- [sizeX](BuilderMarkerCircleHead.md#sizex)
- [sizeY](BuilderMarkerCircleHead.md#sizey)
- [strokeAlign](BuilderMarkerCircleHead.md#strokealign)
- [strokeSide](BuilderMarkerCircleHead.md#strokeside)
- [strokeStyle](BuilderMarkerCircleHead.md#strokestyle)
- [strokeWidth](BuilderMarkerCircleHead.md#strokewidth)
- [texture](BuilderMarkerCircleHead.md#texture)
- [textureTransformId](BuilderMarkerCircleHead.md#texturetransformid)
- [transformLocalId](BuilderMarkerCircleHead.md#transformlocalid)
- [vertexCount](BuilderMarkerCircleHead.md#vertexcount)
- [vertexOffset](BuilderMarkerCircleHead.md#vertexoffset)
- [WORK](BuilderMarkerCircleHead.md#work)

### Methods

- [buildUnit](BuilderMarkerCircleHead.md#buildunit)
- [init](BuilderMarkerCircleHead.md#init)
- [isCompatible](BuilderMarkerCircleHead.md#iscompatible)
- [toMarker](BuilderMarkerCircleHead.md#tomarker)
- [update](BuilderMarkerCircleHead.md#update)
- [updateColorFill](BuilderMarkerCircleHead.md#updatecolorfill)
- [updateColorStroke](BuilderMarkerCircleHead.md#updatecolorstroke)
- [updateUv](BuilderMarkerCircleHead.md#updateuv)
- [updateVertexAndStep](BuilderMarkerCircleHead.md#updatevertexandstep)

## Constructors

### constructor

• **new BuilderMarkerCircleHead**(`vertexOffset`, `indexOffset`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[constructor](BuilderMarkerCircle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L26)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[alphaFill](BuilderMarkerCircle.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L32)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[alphaStroke](BuilderMarkerCircle.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[colorFill](BuilderMarkerCircle.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[colorStroke](BuilderMarkerCircle.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[indexCount](BuilderMarkerCircle.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[indexOffset](BuilderMarkerCircle.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[pointId](BuilderMarkerCircle.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L24)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[sizeX](BuilderMarkerCircle.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[sizeY](BuilderMarkerCircle.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L22)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[strokeAlign](BuilderMarkerCircle.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[strokeSide](BuilderMarkerCircle.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[strokeStyle](BuilderMarkerCircle.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[strokeWidth](BuilderMarkerCircle.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L27)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[texture](BuilderMarkerCircle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[textureTransformId](BuilderMarkerCircle.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L37)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[transformLocalId](BuilderMarkerCircle.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[vertexCount](BuilderMarkerCircle.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[vertexOffset](BuilderMarkerCircle.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[WORK](BuilderMarkerCircle.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L23)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[buildUnit](BuilderMarkerCircle.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L105)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[init](BuilderMarkerCircle.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L31)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[isCompatible](BuilderMarkerCircle.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L71)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[toMarker](BuilderMarkerCircle.md#tomarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle-head.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle-head.ts#L11)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[update](BuilderMarkerCircle.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L39)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[updateColorFill](BuilderMarkerCircle.md#updatecolorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L14)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[updateColorStroke](BuilderMarkerCircle.md#updatecolorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L91)

___

### updateUv

▸ `Protected` **updateUv**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[updateUv](BuilderMarkerCircle.md#updateuv)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L113)

___

### updateVertexAndStep

▸ `Protected` **updateVertexAndStep**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[updateVertexAndStep](BuilderMarkerCircle.md#updatevertexandstep)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L46)
