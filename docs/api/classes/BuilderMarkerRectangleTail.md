[Winter Cardinal UI - v0.457.0](../index.md) / BuilderMarkerRectangleTail

# Class: BuilderMarkerRectangleTail

## Hierarchy

- [`BuilderMarkerRectangle`](BuilderMarkerRectangle.md)

  ↳ **`BuilderMarkerRectangleTail`**

## Table of contents

### Constructors

- [constructor](BuilderMarkerRectangleTail.md#constructor)

### Properties

- [alphaFill](BuilderMarkerRectangleTail.md#alphafill)
- [alphaStroke](BuilderMarkerRectangleTail.md#alphastroke)
- [buffer](BuilderMarkerRectangleTail.md#buffer)
- [colorFill](BuilderMarkerRectangleTail.md#colorfill)
- [colorStroke](BuilderMarkerRectangleTail.md#colorstroke)
- [indexCount](BuilderMarkerRectangleTail.md#indexcount)
- [indexOffset](BuilderMarkerRectangleTail.md#indexoffset)
- [inited](BuilderMarkerRectangleTail.md#inited)
- [pointId](BuilderMarkerRectangleTail.md#pointid)
- [sizeX](BuilderMarkerRectangleTail.md#sizex)
- [sizeY](BuilderMarkerRectangleTail.md#sizey)
- [strokeAlign](BuilderMarkerRectangleTail.md#strokealign)
- [strokeSide](BuilderMarkerRectangleTail.md#strokeside)
- [strokeStyle](BuilderMarkerRectangleTail.md#strokestyle)
- [strokeWidth](BuilderMarkerRectangleTail.md#strokewidth)
- [texture](BuilderMarkerRectangleTail.md#texture)
- [textureTransformId](BuilderMarkerRectangleTail.md#texturetransformid)
- [transformLocalId](BuilderMarkerRectangleTail.md#transformlocalid)
- [vertexCount](BuilderMarkerRectangleTail.md#vertexcount)
- [vertexOffset](BuilderMarkerRectangleTail.md#vertexoffset)
- [WORK](BuilderMarkerRectangleTail.md#work)

### Methods

- [buildUnit](BuilderMarkerRectangleTail.md#buildunit)
- [init](BuilderMarkerRectangleTail.md#init)
- [isCompatible](BuilderMarkerRectangleTail.md#iscompatible)
- [reinit](BuilderMarkerRectangleTail.md#reinit)
- [toMarker](BuilderMarkerRectangleTail.md#tomarker)
- [update](BuilderMarkerRectangleTail.md#update)
- [updateColor](BuilderMarkerRectangleTail.md#updatecolor)
- [updateVertexStepAndUv](BuilderMarkerRectangleTail.md#updatevertexstepanduv)

## Constructors

### constructor

• **new BuilderMarkerRectangleTail**(`buffer`, `vertexOffset`, `indexOffset`): [`BuilderMarkerRectangleTail`](BuilderMarkerRectangleTail.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

[`BuilderMarkerRectangleTail`](BuilderMarkerRectangleTail.md)

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[constructor](BuilderMarkerRectangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L25)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[alphaFill](BuilderMarkerRectangle.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[alphaStroke](BuilderMarkerRectangle.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[buffer](BuilderMarkerRectangle.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[colorFill](BuilderMarkerRectangle.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[colorStroke](BuilderMarkerRectangle.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[indexCount](BuilderMarkerRectangle.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[indexOffset](BuilderMarkerRectangle.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[inited](BuilderMarkerRectangle.md#inited)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[pointId](BuilderMarkerRectangle.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L23)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[sizeX](BuilderMarkerRectangle.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[sizeY](BuilderMarkerRectangle.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[strokeAlign](BuilderMarkerRectangle.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[strokeSide](BuilderMarkerRectangle.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[strokeStyle](BuilderMarkerRectangle.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[strokeWidth](BuilderMarkerRectangle.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[texture](BuilderMarkerRectangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[textureTransformId](BuilderMarkerRectangle.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[transformLocalId](BuilderMarkerRectangle.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[vertexCount](BuilderMarkerRectangle.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[vertexOffset](BuilderMarkerRectangle.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[WORK](BuilderMarkerRectangle.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L22)

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

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[buildUnit](BuilderMarkerRectangle.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L146)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[init](BuilderMarkerRectangle.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L30)

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

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[isCompatible](BuilderMarkerRectangle.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L103)

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

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[reinit](BuilderMarkerRectangle.md#reinit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L77)

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

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[toMarker](BuilderMarkerRectangle.md#tomarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle-tail.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle-tail.ts#L11)

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

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[update](BuilderMarkerRectangle.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L37)

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

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[updateColor](BuilderMarkerRectangle.md#updatecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L14)

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

[BuilderMarkerRectangle](BuilderMarkerRectangle.md).[updateVertexStepAndUv](BuilderMarkerRectangle.md#updatevertexstepanduv)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L43)
