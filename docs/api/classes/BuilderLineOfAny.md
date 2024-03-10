[Winter Cardinal UI - v0.414.0](../index.md) / BuilderLineOfAny

# Class: BuilderLineOfAny

## Hierarchy

- [`BuilderBase`](BuilderBase.md)

  ↳ **`BuilderLineOfAny`**

  ↳↳ [`BuilderLineOfCircles`](BuilderLineOfCircles.md)

  ↳↳ [`BuilderLineOfRectangleRoundeds`](BuilderLineOfRectangleRoundeds.md)

  ↳↳ [`BuilderLineOfRectangles`](BuilderLineOfRectangles.md)

  ↳↳ [`BuilderLineOfTriangleRoundeds`](BuilderLineOfTriangleRoundeds.md)

  ↳↳ [`BuilderLineOfTriangles`](BuilderLineOfTriangles.md)

## Table of contents

### Constructors

- [constructor](BuilderLineOfAny.md#constructor)

### Properties

- [alphaFill](BuilderLineOfAny.md#alphafill)
- [alphaStroke](BuilderLineOfAny.md#alphastroke)
- [buffer](BuilderLineOfAny.md#buffer)
- [colorFill](BuilderLineOfAny.md#colorfill)
- [colorStroke](BuilderLineOfAny.md#colorstroke)
- [icountPerPoint](BuilderLineOfAny.md#icountperpoint)
- [indexCount](BuilderLineOfAny.md#indexcount)
- [indexOffset](BuilderLineOfAny.md#indexoffset)
- [inited](BuilderLineOfAny.md#inited)
- [pointCount](BuilderLineOfAny.md#pointcount)
- [pointCountReserved](BuilderLineOfAny.md#pointcountreserved)
- [pointFillId](BuilderLineOfAny.md#pointfillid)
- [pointId](BuilderLineOfAny.md#pointid)
- [pointOffsetId](BuilderLineOfAny.md#pointoffsetid)
- [pointSizeId](BuilderLineOfAny.md#pointsizeid)
- [pointStrokeId](BuilderLineOfAny.md#pointstrokeid)
- [sizeX](BuilderLineOfAny.md#sizex)
- [sizeY](BuilderLineOfAny.md#sizey)
- [strokeAlign](BuilderLineOfAny.md#strokealign)
- [strokeSide](BuilderLineOfAny.md#strokeside)
- [strokeStyle](BuilderLineOfAny.md#strokestyle)
- [strokeWidth](BuilderLineOfAny.md#strokewidth)
- [texture](BuilderLineOfAny.md#texture)
- [textureTransformId](BuilderLineOfAny.md#texturetransformid)
- [transformLocalId](BuilderLineOfAny.md#transformlocalid)
- [vcountPerPoint](BuilderLineOfAny.md#vcountperpoint)
- [vertexCount](BuilderLineOfAny.md#vertexcount)
- [vertexOffset](BuilderLineOfAny.md#vertexoffset)

### Methods

- [buildUnit](BuilderLineOfAny.md#buildunit)
- [init](BuilderLineOfAny.md#init)
- [isCompatible](BuilderLineOfAny.md#iscompatible)
- [reinit](BuilderLineOfAny.md#reinit)
- [update](BuilderLineOfAny.md#update)
- [updateColor](BuilderLineOfAny.md#updatecolor)
- [updateLineOfAnyColor](BuilderLineOfAny.md#updatelineofanycolor)

## Constructors

### constructor

• **new BuilderLineOfAny**(`buffer`, `vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`, `pointCountReserved`, `vcountPerPoint`, `icountPerPoint`): [`BuilderLineOfAny`](BuilderLineOfAny.md)

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

[`BuilderLineOfAny`](BuilderLineOfAny.md)

#### Overrides

[BuilderBase](BuilderBase.md).[constructor](BuilderBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L24)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[alphaFill](BuilderBase.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[alphaStroke](BuilderBase.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

[BuilderBase](BuilderBase.md).[buffer](BuilderBase.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[colorFill](BuilderBase.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[colorStroke](BuilderBase.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### icountPerPoint

• `Protected` **icountPerPoint**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L22)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[indexCount](BuilderBase.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[indexOffset](BuilderBase.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[inited](BuilderBase.md#inited)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### pointCount

• `Protected` **pointCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L15)

___

### pointCountReserved

• `Protected` **pointCountReserved**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L16)

___

### pointFillId

• `Protected` **pointFillId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L19)

___

### pointId

• `Protected` **pointId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L14)

___

### pointOffsetId

• `Protected` **pointOffsetId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L18)

___

### pointSizeId

• `Protected` **pointSizeId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L17)

___

### pointStrokeId

• `Protected` **pointStrokeId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L20)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[sizeX](BuilderBase.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[sizeY](BuilderBase.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeAlign](BuilderBase.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeSide](BuilderBase.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeStyle](BuilderBase.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeWidth](BuilderBase.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderBase](BuilderBase.md).[texture](BuilderBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[textureTransformId](BuilderBase.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[transformLocalId](BuilderBase.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vcountPerPoint

• `Protected` **vcountPerPoint**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L21)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[vertexCount](BuilderBase.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[vertexOffset](BuilderBase.md#vertexoffset)

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

[BuilderBase](BuilderBase.md).[buildUnit](BuilderBase.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L146)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[BuilderBase](BuilderBase.md).[init](BuilderBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L75)

___

### isCompatible

▸ **isCompatible**(`shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`boolean`

#### Overrides

[BuilderBase](BuilderBase.md).[isCompatible](BuilderBase.md#iscompatible)

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

#### Overrides

[BuilderBase](BuilderBase.md).[reinit](BuilderBase.md#reinit)

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

#### Inherited from

[BuilderBase](BuilderBase.md).[update](BuilderBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L107)

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

[BuilderBase](BuilderBase.md).[updateColor](BuilderBase.md#updatecolor)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L84)
