[Winter Cardinal UI - v0.199.0](../index.md) / BuilderImageSdf

# Class: BuilderImageSdf

## Hierarchy

- [`BuilderBase`](BuilderBase.md)

  ↳ **`BuilderImageSdf`**

## Table of contents

### Constructors

- [constructor](BuilderImageSdf.md#constructor)

### Properties

- [alphaFill](BuilderImageSdf.md#alphafill)
- [alphaStroke](BuilderImageSdf.md#alphastroke)
- [colorFill](BuilderImageSdf.md#colorfill)
- [colorStroke](BuilderImageSdf.md#colorstroke)
- [indexCount](BuilderImageSdf.md#indexcount)
- [indexOffset](BuilderImageSdf.md#indexoffset)
- [sizeX](BuilderImageSdf.md#sizex)
- [sizeY](BuilderImageSdf.md#sizey)
- [strokeAlign](BuilderImageSdf.md#strokealign)
- [strokeSide](BuilderImageSdf.md#strokeside)
- [strokeStyle](BuilderImageSdf.md#strokestyle)
- [strokeWidth](BuilderImageSdf.md#strokewidth)
- [texture](BuilderImageSdf.md#texture)
- [textureHeight](BuilderImageSdf.md#textureheight)
- [textureTransformId](BuilderImageSdf.md#texturetransformid)
- [textureWidth](BuilderImageSdf.md#texturewidth)
- [transformLocalId](BuilderImageSdf.md#transformlocalid)
- [vertexCount](BuilderImageSdf.md#vertexcount)
- [vertexOffset](BuilderImageSdf.md#vertexoffset)

### Methods

- [buildUnit](BuilderImageSdf.md#buildunit)
- [init](BuilderImageSdf.md#init)
- [isCompatible](BuilderImageSdf.md#iscompatible)
- [update](BuilderImageSdf.md#update)
- [updateColorFill](BuilderImageSdf.md#updatecolorfill)
- [updateColorStroke](BuilderImageSdf.md#updatecolorstroke)
- [updateUv](BuilderImageSdf.md#updateuv)
- [updateVertexAndStep](BuilderImageSdf.md#updatevertexandstep)

## Constructors

### constructor

• **new BuilderImageSdf**(`vertexOffset`, `indexOffset`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Overrides

[BuilderBase](BuilderBase.md).[constructor](BuilderBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts#L25)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[alphaFill](BuilderBase.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L32)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[alphaStroke](BuilderBase.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[colorFill](BuilderBase.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[colorStroke](BuilderBase.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[indexCount](BuilderBase.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[indexOffset](BuilderBase.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[sizeX](BuilderBase.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[sizeY](BuilderBase.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L22)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeAlign](BuilderBase.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeSide](BuilderBase.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeStyle](BuilderBase.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeWidth](BuilderBase.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L27)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderBase](BuilderBase.md).[texture](BuilderBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### textureHeight

• `Protected` **textureHeight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts#L23)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[textureTransformId](BuilderBase.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L37)

___

### textureWidth

• `Protected` **textureWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts#L22)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[transformLocalId](BuilderBase.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[vertexCount](BuilderBase.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[vertexOffset](BuilderBase.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L105)

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

[BuilderBase](BuilderBase.md).[init](BuilderBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts#L31)

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

[BuilderBase](BuilderBase.md).[isCompatible](BuilderBase.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L71)

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

[BuilderBase](BuilderBase.md).[update](BuilderBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts#L39)

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

[BuilderBase](BuilderBase.md).[updateColorFill](BuilderBase.md#updatecolorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L77)

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

[BuilderBase](BuilderBase.md).[updateColorStroke](BuilderBase.md#updatecolorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L91)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts#L108)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/builder-image-sdf.ts#L46)
