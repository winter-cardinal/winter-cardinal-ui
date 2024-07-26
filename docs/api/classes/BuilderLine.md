[Winter Cardinal UI - v0.442.0](../index.md) / BuilderLine

# Class: BuilderLine

## Hierarchy

- [`BuilderBase`](BuilderBase.md)

  ↳ **`BuilderLine`**

## Table of contents

### Constructors

- [constructor](BuilderLine.md#constructor)

### Properties

- [alphaFill](BuilderLine.md#alphafill)
- [alphaStroke](BuilderLine.md#alphastroke)
- [buffer](BuilderLine.md#buffer)
- [colorFill](BuilderLine.md#colorfill)
- [colorStroke](BuilderLine.md#colorstroke)
- [indexCount](BuilderLine.md#indexcount)
- [indexOffset](BuilderLine.md#indexoffset)
- [inited](BuilderLine.md#inited)
- [length](BuilderLine.md#length)
- [pointCount](BuilderLine.md#pointcount)
- [pointId](BuilderLine.md#pointid)
- [pointsClosed](BuilderLine.md#pointsclosed)
- [sizeX](BuilderLine.md#sizex)
- [sizeY](BuilderLine.md#sizey)
- [strokeAlign](BuilderLine.md#strokealign)
- [strokeSide](BuilderLine.md#strokeside)
- [strokeStyle](BuilderLine.md#strokestyle)
- [strokeWidth](BuilderLine.md#strokewidth)
- [texture](BuilderLine.md#texture)
- [textureTransformId](BuilderLine.md#texturetransformid)
- [transformLocalId](BuilderLine.md#transformlocalid)
- [vertexCount](BuilderLine.md#vertexcount)
- [vertexOffset](BuilderLine.md#vertexoffset)

### Methods

- [buildUnit](BuilderLine.md#buildunit)
- [init](BuilderLine.md#init)
- [isCompatible](BuilderLine.md#iscompatible)
- [reinit](BuilderLine.md#reinit)
- [update](BuilderLine.md#update)
- [updateColor](BuilderLine.md#updatecolor)
- [updateLineUv](BuilderLine.md#updatelineuv)
- [updateLineVertexStep](BuilderLine.md#updatelinevertexstep)

## Constructors

### constructor

• **new BuilderLine**(`buffer`, `vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`): [`BuilderLine`](BuilderLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |

#### Returns

[`BuilderLine`](BuilderLine.md)

#### Overrides

[BuilderBase](BuilderBase.md).[constructor](BuilderBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L26)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[alphaFill](BuilderBase.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[alphaStroke](BuilderBase.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Inherited from

[BuilderBase](BuilderBase.md).[buffer](BuilderBase.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L15)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[colorFill](BuilderBase.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[colorStroke](BuilderBase.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L35)

___

### indexCount

• **indexCount**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[indexCount](BuilderBase.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• **indexOffset**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[indexOffset](BuilderBase.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### inited

• `Protected` **inited**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[inited](BuilderBase.md#inited)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### length

• `Protected` **length**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L24)

___

### pointCount

• `Protected` **pointCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L21)

___

### pointId

• `Protected` **pointId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L22)

___

### pointsClosed

• `Protected` **pointsClosed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L23)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[sizeX](BuilderBase.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L23)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[sizeY](BuilderBase.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeAlign](BuilderBase.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeSide](BuilderBase.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L30)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeStyle](BuilderBase.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeWidth](BuilderBase.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderBase](BuilderBase.md).[texture](BuilderBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[textureTransformId](BuilderBase.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[transformLocalId](BuilderBase.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### vertexCount

• **vertexCount**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[vertexCount](BuilderBase.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• **vertexOffset**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[vertexOffset](BuilderBase.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L146)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[BuilderBase](BuilderBase.md).[init](BuilderBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L40)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L80)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L47)

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

[BuilderBase](BuilderBase.md).[update](BuilderBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L85)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L109)

___

### updateLineUv

▸ **updateLineUv**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L148)

___

### updateLineVertexStep

▸ **updateLineVertexStep**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-line.ts#L92)
