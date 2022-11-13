[Winter Cardinal UI - v0.227.0](../index.md) / BuilderMarkerRectangle

# Class: BuilderMarkerRectangle

## Hierarchy

- `BuilderMarkerBase`

  ↳ **`BuilderMarkerRectangle`**

  ↳↳ [`BuilderMarkerRectangleHead`](BuilderMarkerRectangleHead.md)

  ↳↳ [`BuilderMarkerRectangleTail`](BuilderMarkerRectangleTail.md)

## Table of contents

### Constructors

- [constructor](BuilderMarkerRectangle.md#constructor)

### Properties

- [alphaFill](BuilderMarkerRectangle.md#alphafill)
- [alphaStroke](BuilderMarkerRectangle.md#alphastroke)
- [colorFill](BuilderMarkerRectangle.md#colorfill)
- [colorStroke](BuilderMarkerRectangle.md#colorstroke)
- [indexCount](BuilderMarkerRectangle.md#indexcount)
- [indexOffset](BuilderMarkerRectangle.md#indexoffset)
- [pointId](BuilderMarkerRectangle.md#pointid)
- [sizeX](BuilderMarkerRectangle.md#sizex)
- [sizeY](BuilderMarkerRectangle.md#sizey)
- [strokeAlign](BuilderMarkerRectangle.md#strokealign)
- [strokeSide](BuilderMarkerRectangle.md#strokeside)
- [strokeStyle](BuilderMarkerRectangle.md#strokestyle)
- [strokeWidth](BuilderMarkerRectangle.md#strokewidth)
- [texture](BuilderMarkerRectangle.md#texture)
- [textureTransformId](BuilderMarkerRectangle.md#texturetransformid)
- [transformLocalId](BuilderMarkerRectangle.md#transformlocalid)
- [vertexCount](BuilderMarkerRectangle.md#vertexcount)
- [vertexOffset](BuilderMarkerRectangle.md#vertexoffset)
- [WORK](BuilderMarkerRectangle.md#work)

### Methods

- [buildUnit](BuilderMarkerRectangle.md#buildunit)
- [init](BuilderMarkerRectangle.md#init)
- [isCompatible](BuilderMarkerRectangle.md#iscompatible)
- [toMarker](BuilderMarkerRectangle.md#tomarker)
- [update](BuilderMarkerRectangle.md#update)
- [updateColorFill](BuilderMarkerRectangle.md#updatecolorfill)
- [updateColorStroke](BuilderMarkerRectangle.md#updatecolorstroke)
- [updateVertexClippingStepAndUv](BuilderMarkerRectangle.md#updatevertexclippingstepanduv)

## Constructors

### constructor

• **new BuilderMarkerRectangle**(`vertexOffset`, `indexOffset`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Overrides

BuilderMarkerBase.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L26)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

BuilderMarkerBase.alphaFill

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L32)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

BuilderMarkerBase.alphaStroke

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

BuilderMarkerBase.colorFill

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

BuilderMarkerBase.colorStroke

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Inherited from

BuilderMarkerBase.indexCount

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Inherited from

BuilderMarkerBase.indexOffset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### pointId

• `Protected` **pointId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L24)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

BuilderMarkerBase.sizeX

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

BuilderMarkerBase.sizeY

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L22)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

BuilderMarkerBase.strokeAlign

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

BuilderMarkerBase.strokeSide

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

BuilderMarkerBase.strokeStyle

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

BuilderMarkerBase.strokeWidth

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L27)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

BuilderMarkerBase.texture

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

BuilderMarkerBase.textureTransformId

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L37)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

BuilderMarkerBase.transformLocalId

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Inherited from

BuilderMarkerBase.vertexCount

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Inherited from

BuilderMarkerBase.vertexOffset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L23)

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

BuilderMarkerBase.init

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L71)

___

### toMarker

▸ `Protected` `Abstract` **toMarker**(`container`): [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md) |

#### Returns

[`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Inherited from

BuilderMarkerBase.toMarker

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L37)

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

BuilderMarkerBase.update

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L36)

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

BuilderMarkerBase.updateColorFill

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L14)

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

BuilderMarkerBase.updateColorStroke

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L91)

___

### updateVertexClippingStepAndUv

▸ `Protected` **updateVertexClippingStepAndUv**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L42)
