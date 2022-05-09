[Winter Cardinal UI - v0.164.0](../index.md) / BuilderBase

# Class: BuilderBase

## Hierarchy

- **`BuilderBase`**

  ↳ [`BuilderBar`](BuilderBar.md)

  ↳ [`BuilderCircle`](BuilderCircle.md)

  ↳ [`BuilderImageSdf`](BuilderImageSdf.md)

  ↳ [`BuilderLineOfAny`](BuilderLineOfAny.md)

  ↳ [`BuilderLine`](BuilderLine.md)

  ↳ [`BuilderRectanglePivoted`](BuilderRectanglePivoted.md)

  ↳ [`BuilderRectangleRounded`](BuilderRectangleRounded.md)

  ↳ [`BuilderRectangle`](BuilderRectangle.md)

  ↳ [`BuilderTriangleRounded`](BuilderTriangleRounded.md)

  ↳ [`BuilderTriangle`](BuilderTriangle.md)

## Implements

- [`Builder`](../interfaces/Builder.md)

## Table of contents

### Constructors

- [constructor](BuilderBase.md#constructor)

### Properties

- [alphaFill](BuilderBase.md#alphafill)
- [alphaStroke](BuilderBase.md#alphastroke)
- [colorFill](BuilderBase.md#colorfill)
- [colorStroke](BuilderBase.md#colorstroke)
- [indexCount](BuilderBase.md#indexcount)
- [indexOffset](BuilderBase.md#indexoffset)
- [sizeX](BuilderBase.md#sizex)
- [sizeY](BuilderBase.md#sizey)
- [strokeAlign](BuilderBase.md#strokealign)
- [strokeSide](BuilderBase.md#strokeside)
- [strokeStyle](BuilderBase.md#strokestyle)
- [strokeWidth](BuilderBase.md#strokewidth)
- [texture](BuilderBase.md#texture)
- [textureTransformId](BuilderBase.md#texturetransformid)
- [transformLocalId](BuilderBase.md#transformlocalid)
- [vertexCount](BuilderBase.md#vertexcount)
- [vertexOffset](BuilderBase.md#vertexoffset)

### Methods

- [buildUnit](BuilderBase.md#buildunit)
- [init](BuilderBase.md#init)
- [isCompatible](BuilderBase.md#iscompatible)
- [update](BuilderBase.md#update)
- [updateColorFill](BuilderBase.md#updatecolorfill)
- [updateColorStroke](BuilderBase.md#updatecolorstroke)

## Constructors

### constructor

• **new BuilderBase**(`vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L39)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L32)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexCount](../interfaces/Builder.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexOffset](../interfaces/Builder.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L22)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L27)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L37)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexCount](../interfaces/Builder.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexOffset](../interfaces/Builder.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

## Methods

### buildUnit

▸ **buildUnit**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`EShapeBufferUnitBuilder`](EShapeBufferUnitBuilder.md) |

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/Builder.md).[buildUnit](../interfaces/Builder.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L105)

___

### init

▸ `Abstract` **init**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/Builder.md).[init](../interfaces/Builder.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L69)

___

### isCompatible

▸ **isCompatible**(`shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`boolean`

#### Implementation of

[Builder](../interfaces/Builder.md).[isCompatible](../interfaces/Builder.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L71)

___

### update

▸ `Abstract` **update**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/Builder.md).[update](../interfaces/Builder.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L75)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L77)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L91)
