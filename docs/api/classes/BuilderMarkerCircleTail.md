[Winter Cardinal UI - v0.442.0](../index.md) / BuilderMarkerCircleTail

# Class: BuilderMarkerCircleTail

## Hierarchy

- [`BuilderMarkerCircle`](BuilderMarkerCircle.md)

  ↳ **`BuilderMarkerCircleTail`**

## Table of contents

### Constructors

- [constructor](BuilderMarkerCircleTail.md#constructor)

### Properties

- [alphaFill](BuilderMarkerCircleTail.md#alphafill)
- [alphaStroke](BuilderMarkerCircleTail.md#alphastroke)
- [buffer](BuilderMarkerCircleTail.md#buffer)
- [colorFill](BuilderMarkerCircleTail.md#colorfill)
- [colorStroke](BuilderMarkerCircleTail.md#colorstroke)
- [indexCount](BuilderMarkerCircleTail.md#indexcount)
- [indexOffset](BuilderMarkerCircleTail.md#indexoffset)
- [inited](BuilderMarkerCircleTail.md#inited)
- [pointId](BuilderMarkerCircleTail.md#pointid)
- [sizeX](BuilderMarkerCircleTail.md#sizex)
- [sizeY](BuilderMarkerCircleTail.md#sizey)
- [strokeAlign](BuilderMarkerCircleTail.md#strokealign)
- [strokeSide](BuilderMarkerCircleTail.md#strokeside)
- [strokeStyle](BuilderMarkerCircleTail.md#strokestyle)
- [strokeWidth](BuilderMarkerCircleTail.md#strokewidth)
- [texture](BuilderMarkerCircleTail.md#texture)
- [textureTransformId](BuilderMarkerCircleTail.md#texturetransformid)
- [transformLocalId](BuilderMarkerCircleTail.md#transformlocalid)
- [vertexCount](BuilderMarkerCircleTail.md#vertexcount)
- [vertexOffset](BuilderMarkerCircleTail.md#vertexoffset)
- [WORK](BuilderMarkerCircleTail.md#work)

### Methods

- [buildUnit](BuilderMarkerCircleTail.md#buildunit)
- [init](BuilderMarkerCircleTail.md#init)
- [isCompatible](BuilderMarkerCircleTail.md#iscompatible)
- [reinit](BuilderMarkerCircleTail.md#reinit)
- [toMarker](BuilderMarkerCircleTail.md#tomarker)
- [update](BuilderMarkerCircleTail.md#update)
- [updateColor](BuilderMarkerCircleTail.md#updatecolor)
- [updateUv](BuilderMarkerCircleTail.md#updateuv)
- [updateVertexAndStep](BuilderMarkerCircleTail.md#updatevertexandstep)

## Constructors

### constructor

• **new BuilderMarkerCircleTail**(`buffer`, `vertexOffset`, `indexOffset`): [`BuilderMarkerCircleTail`](BuilderMarkerCircleTail.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

[`BuilderMarkerCircleTail`](BuilderMarkerCircleTail.md)

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[constructor](BuilderMarkerCircle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L25)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[alphaFill](BuilderMarkerCircle.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[alphaStroke](BuilderMarkerCircle.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[buffer](BuilderMarkerCircle.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[colorFill](BuilderMarkerCircle.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[colorStroke](BuilderMarkerCircle.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[indexCount](BuilderMarkerCircle.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[indexOffset](BuilderMarkerCircle.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[inited](BuilderMarkerCircle.md#inited)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[pointId](BuilderMarkerCircle.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L23)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[sizeX](BuilderMarkerCircle.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[sizeY](BuilderMarkerCircle.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[strokeAlign](BuilderMarkerCircle.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[strokeSide](BuilderMarkerCircle.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[strokeStyle](BuilderMarkerCircle.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[strokeWidth](BuilderMarkerCircle.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[texture](BuilderMarkerCircle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[textureTransformId](BuilderMarkerCircle.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[transformLocalId](BuilderMarkerCircle.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[vertexCount](BuilderMarkerCircle.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[vertexOffset](BuilderMarkerCircle.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[WORK](BuilderMarkerCircle.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L22)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L146)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[init](BuilderMarkerCircle.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L30)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L103)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[reinit](BuilderMarkerCircle.md#reinit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L77)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[toMarker](BuilderMarkerCircle.md#tomarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle-tail.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle-tail.ts#L11)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[update](BuilderMarkerCircle.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L38)

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

[BuilderMarkerCircle](BuilderMarkerCircle.md).[updateColor](BuilderMarkerCircle.md#updatecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L14)

___

### updateUv

▸ **updateUv**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[updateUv](BuilderMarkerCircle.md#updateuv)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L120)

___

### updateVertexAndStep

▸ **updateVertexAndStep**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderMarkerCircle](BuilderMarkerCircle.md).[updateVertexAndStep](BuilderMarkerCircle.md#updatevertexandstep)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-circle.ts#L45)
