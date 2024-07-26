[Winter Cardinal UI - v0.442.0](../index.md) / BuilderMarkerRectangle

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
- [buffer](BuilderMarkerRectangle.md#buffer)
- [colorFill](BuilderMarkerRectangle.md#colorfill)
- [colorStroke](BuilderMarkerRectangle.md#colorstroke)
- [indexCount](BuilderMarkerRectangle.md#indexcount)
- [indexOffset](BuilderMarkerRectangle.md#indexoffset)
- [inited](BuilderMarkerRectangle.md#inited)
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
- [reinit](BuilderMarkerRectangle.md#reinit)
- [toMarker](BuilderMarkerRectangle.md#tomarker)
- [update](BuilderMarkerRectangle.md#update)
- [updateColor](BuilderMarkerRectangle.md#updatecolor)
- [updateVertexStepAndUv](BuilderMarkerRectangle.md#updatevertexstepanduv)

## Constructors

### constructor

• **new BuilderMarkerRectangle**(`buffer`, `vertexOffset`, `indexOffset`): [`BuilderMarkerRectangle`](BuilderMarkerRectangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

[`BuilderMarkerRectangle`](BuilderMarkerRectangle.md)

#### Overrides

BuilderMarkerBase.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L25)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

BuilderMarkerBase.alphaFill

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

BuilderMarkerBase.alphaStroke

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

BuilderMarkerBase.buffer

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

BuilderMarkerBase.colorFill

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

BuilderMarkerBase.colorStroke

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

BuilderMarkerBase.indexCount

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

BuilderMarkerBase.indexOffset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

BuilderMarkerBase.inited

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### pointId

• `Protected` **pointId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L23)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

BuilderMarkerBase.sizeX

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

BuilderMarkerBase.sizeY

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

BuilderMarkerBase.strokeAlign

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

BuilderMarkerBase.strokeSide

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

BuilderMarkerBase.strokeStyle

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

BuilderMarkerBase.strokeWidth

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

BuilderMarkerBase.texture

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

BuilderMarkerBase.textureTransformId

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

BuilderMarkerBase.transformLocalId

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

BuilderMarkerBase.vertexCount

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

BuilderMarkerBase.vertexOffset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L22)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L146)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

BuilderMarkerBase.init

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L30)

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

BuilderMarkerBase.reinit

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

#### Inherited from

BuilderMarkerBase.toMarker

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L58)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L37)

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

BuilderMarkerBase.updateColor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-base.ts#L14)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-marker-rectangle.ts#L43)
