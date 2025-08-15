[Winter Cardinal UI - v0.457.0](../index.md) / BuilderLineOfRectangleRoundeds

# Class: BuilderLineOfRectangleRoundeds

## Hierarchy

- [`BuilderLineOfAny`](BuilderLineOfAny.md)

  ↳ **`BuilderLineOfRectangleRoundeds`**

## Table of contents

### Constructors

- [constructor](BuilderLineOfRectangleRoundeds.md#constructor)

### Properties

- [alphaFill](BuilderLineOfRectangleRoundeds.md#alphafill)
- [alphaStroke](BuilderLineOfRectangleRoundeds.md#alphastroke)
- [buffer](BuilderLineOfRectangleRoundeds.md#buffer)
- [colorFill](BuilderLineOfRectangleRoundeds.md#colorfill)
- [colorStroke](BuilderLineOfRectangleRoundeds.md#colorstroke)
- [corner](BuilderLineOfRectangleRoundeds.md#corner)
- [icountPerPoint](BuilderLineOfRectangleRoundeds.md#icountperpoint)
- [indexCount](BuilderLineOfRectangleRoundeds.md#indexcount)
- [indexOffset](BuilderLineOfRectangleRoundeds.md#indexoffset)
- [inited](BuilderLineOfRectangleRoundeds.md#inited)
- [pointCount](BuilderLineOfRectangleRoundeds.md#pointcount)
- [pointCountReserved](BuilderLineOfRectangleRoundeds.md#pointcountreserved)
- [pointFillId](BuilderLineOfRectangleRoundeds.md#pointfillid)
- [pointId](BuilderLineOfRectangleRoundeds.md#pointid)
- [pointOffsetId](BuilderLineOfRectangleRoundeds.md#pointoffsetid)
- [pointSizeId](BuilderLineOfRectangleRoundeds.md#pointsizeid)
- [pointStrokeId](BuilderLineOfRectangleRoundeds.md#pointstrokeid)
- [radius](BuilderLineOfRectangleRoundeds.md#radius)
- [sizeX](BuilderLineOfRectangleRoundeds.md#sizex)
- [sizeY](BuilderLineOfRectangleRoundeds.md#sizey)
- [strokeAlign](BuilderLineOfRectangleRoundeds.md#strokealign)
- [strokeSide](BuilderLineOfRectangleRoundeds.md#strokeside)
- [strokeStyle](BuilderLineOfRectangleRoundeds.md#strokestyle)
- [strokeWidth](BuilderLineOfRectangleRoundeds.md#strokewidth)
- [texture](BuilderLineOfRectangleRoundeds.md#texture)
- [textureTransformId](BuilderLineOfRectangleRoundeds.md#texturetransformid)
- [transformLocalId](BuilderLineOfRectangleRoundeds.md#transformlocalid)
- [vcountPerPoint](BuilderLineOfRectangleRoundeds.md#vcountperpoint)
- [vertexCount](BuilderLineOfRectangleRoundeds.md#vertexcount)
- [vertexOffset](BuilderLineOfRectangleRoundeds.md#vertexoffset)

### Methods

- [buildUnit](BuilderLineOfRectangleRoundeds.md#buildunit)
- [init](BuilderLineOfRectangleRoundeds.md#init)
- [isCompatible](BuilderLineOfRectangleRoundeds.md#iscompatible)
- [reinit](BuilderLineOfRectangleRoundeds.md#reinit)
- [update](BuilderLineOfRectangleRoundeds.md#update)
- [updateColor](BuilderLineOfRectangleRoundeds.md#updatecolor)
- [updateLineOfAnyColor](BuilderLineOfRectangleRoundeds.md#updatelineofanycolor)
- [updateVertexStepAndUv](BuilderLineOfRectangleRoundeds.md#updatevertexstepanduv)

## Constructors

### constructor

• **new BuilderLineOfRectangleRoundeds**(`buffer`, `vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`, `pointCountReserved`, `vcountPerPoint`, `icountPerPoint`): [`BuilderLineOfRectangleRoundeds`](BuilderLineOfRectangleRoundeds.md)

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

[`BuilderLineOfRectangleRoundeds`](BuilderLineOfRectangleRoundeds.md)

#### Overrides

[BuilderLineOfAny](BuilderLineOfAny.md).[constructor](BuilderLineOfAny.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts#L32)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[alphaFill](BuilderLineOfAny.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[alphaStroke](BuilderLineOfAny.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[buffer](BuilderLineOfAny.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[colorFill](BuilderLineOfAny.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[colorStroke](BuilderLineOfAny.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### corner

• `Protected` **corner**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts#L30)

___

### icountPerPoint

• `Protected` **icountPerPoint**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[icountPerPoint](BuilderLineOfAny.md#icountperpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L22)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[indexCount](BuilderLineOfAny.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[indexOffset](BuilderLineOfAny.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[inited](BuilderLineOfAny.md#inited)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### pointCount

• `Protected` **pointCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointCount](BuilderLineOfAny.md#pointcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L15)

___

### pointCountReserved

• `Protected` **pointCountReserved**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointCountReserved](BuilderLineOfAny.md#pointcountreserved)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L16)

___

### pointFillId

• `Protected` **pointFillId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointFillId](BuilderLineOfAny.md#pointfillid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L19)

___

### pointId

• `Protected` **pointId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointId](BuilderLineOfAny.md#pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L14)

___

### pointOffsetId

• `Protected` **pointOffsetId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointOffsetId](BuilderLineOfAny.md#pointoffsetid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L18)

___

### pointSizeId

• `Protected` **pointSizeId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointSizeId](BuilderLineOfAny.md#pointsizeid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L17)

___

### pointStrokeId

• `Protected` **pointStrokeId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[pointStrokeId](BuilderLineOfAny.md#pointstrokeid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L20)

___

### radius

• `Protected` **radius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts#L29)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[sizeX](BuilderLineOfAny.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[sizeY](BuilderLineOfAny.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeAlign](BuilderLineOfAny.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeSide](BuilderLineOfAny.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeStyle](BuilderLineOfAny.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[strokeWidth](BuilderLineOfAny.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[texture](BuilderLineOfAny.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[textureTransformId](BuilderLineOfAny.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[transformLocalId](BuilderLineOfAny.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vcountPerPoint

• `Protected` **vcountPerPoint**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[vcountPerPoint](BuilderLineOfAny.md#vcountperpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L21)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[vertexCount](BuilderLineOfAny.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

[BuilderLineOfAny](BuilderLineOfAny.md).[vertexOffset](BuilderLineOfAny.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L146)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[BuilderLineOfAny](BuilderLineOfAny.md).[init](BuilderLineOfAny.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts#L56)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L79)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L46)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts#L76)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L109)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-any.ts#L84)

___

### updateVertexStepAndUv

▸ **updateVertexStepAndUv**(`buffer`, `shape`, `points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `points` | [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line-of-rectangle-roundeds.ts#L85)
