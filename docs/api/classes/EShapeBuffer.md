[Winter Cardinal UI - v0.407.0](../index.md) / EShapeBuffer

# Class: EShapeBuffer

## Table of contents

### Constructors

- [constructor](EShapeBuffer.md#constructor)

### Properties

- [\_builder](EShapeBuffer.md#_builder)
- [\_clippingBuffer](EShapeBuffer.md#_clippingbuffer)
- [\_colorFillBuffer](EShapeBuffer.md#_colorfillbuffer)
- [\_colorStrokeBuffer](EShapeBuffer.md#_colorstrokebuffer)
- [\_geometry](EShapeBuffer.md#_geometry)
- [\_indexBuffer](EShapeBuffer.md#_indexbuffer)
- [\_indexCapacity](EShapeBuffer.md#_indexcapacity)
- [\_indexCount](EShapeBuffer.md#_indexcount)
- [\_renderer](EShapeBuffer.md#_renderer)
- [\_stepBuffer](EShapeBuffer.md#_stepbuffer)
- [\_uvBuffer](EShapeBuffer.md#_uvbuffer)
- [\_vertexBuffer](EShapeBuffer.md#_vertexbuffer)
- [\_vertexCapacity](EShapeBuffer.md#_vertexcapacity)
- [\_vertexCount](EShapeBuffer.md#_vertexcount)
- [clippings](EShapeBuffer.md#clippings)
- [colorFills](EShapeBuffer.md#colorfills)
- [colorStrokes](EShapeBuffer.md#colorstrokes)
- [indexCountRequested](EShapeBuffer.md#indexcountrequested)
- [indices](EShapeBuffer.md#indices)
- [steps](EShapeBuffer.md#steps)
- [uvs](EShapeBuffer.md#uvs)
- [vertices](EShapeBuffer.md#vertices)

### Methods

- [check](EShapeBuffer.md#check)
- [destroy](EShapeBuffer.md#destroy)
- [getGeometry](EShapeBuffer.md#getgeometry)
- [render](EShapeBuffer.md#render)
- [update](EShapeBuffer.md#update)
- [updateClippings](EShapeBuffer.md#updateclippings)
- [updateColorFills](EShapeBuffer.md#updatecolorfills)
- [updateColorStrokes](EShapeBuffer.md#updatecolorstrokes)
- [updateIndices](EShapeBuffer.md#updateindices)
- [updateSteps](EShapeBuffer.md#updatesteps)
- [updateUvs](EShapeBuffer.md#updateuvs)
- [updateVertices](EShapeBuffer.md#updatevertices)
- [upload](EShapeBuffer.md#upload)

## Constructors

### constructor

• **new EShapeBuffer**(`ntriangles`, `renderer`): [`EShapeBuffer`](EShapeBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ntriangles` | `number` |
| `renderer` | `Renderer` |

#### Returns

[`EShapeBuffer`](EShapeBuffer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L44)

## Properties

### \_builder

• `Protected` **\_builder**: [`EShapeBufferUnitBuilder`](EShapeBufferUnitBuilder.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L42)

___

### \_clippingBuffer

• `Protected` **\_clippingBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L19)

___

### \_colorFillBuffer

• `Protected` **\_colorFillBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L25)

___

### \_colorStrokeBuffer

• `Protected` **\_colorStrokeBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L28)

___

### \_geometry

• `Protected` **\_geometry**: ``null`` \| `Geometry`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L40)

___

### \_indexBuffer

• `Protected` **\_indexBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L37)

___

### \_indexCapacity

• `Protected` **\_indexCapacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L34)

___

### \_indexCount

• `Protected` **\_indexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L35)

___

### \_renderer

• `Protected` **\_renderer**: `Renderer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L39)

___

### \_stepBuffer

• `Protected` **\_stepBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L22)

___

### \_uvBuffer

• `Protected` **\_uvBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L31)

___

### \_vertexBuffer

• `Protected` **\_vertexBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L16)

___

### \_vertexCapacity

• `Protected` **\_vertexCapacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L14)

___

### \_vertexCount

• `Protected` **\_vertexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L15)

___

### clippings

• **clippings**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L18)

___

### colorFills

• **colorFills**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L24)

___

### colorStrokes

• **colorStrokes**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L27)

___

### indexCountRequested

• **indexCountRequested**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L36)

___

### indices

• **indices**: `Uint16Array` \| `Uint32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L33)

___

### steps

• **steps**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L21)

___

### uvs

• **uvs**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L30)

___

### vertices

• **vertices**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L13)

## Methods

### check

▸ **check**(`vindex`, `ioffset`, `vcount`, `icount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vindex` | `number` |
| `ioffset` | `number` |
| `vcount` | `number` |
| `icount` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L239)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L244)

___

### getGeometry

▸ **getGeometry**(): `Geometry`

#### Returns

`Geometry`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L131)

___

### render

▸ **render**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | `Shader` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L159)

___

### update

▸ **update**(`iterator`, `antialiasWeight`, `noMoreThanOne`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | [`EShapeRendererIterator`](EShapeRendererIterator.md) |
| `antialiasWeight` | `number` |
| `noMoreThanOne` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L196)

___

### updateClippings

▸ **updateClippings**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L89)

___

### updateColorFills

▸ **updateColorFills**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L103)

___

### updateColorStrokes

▸ **updateColorStrokes**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L110)

___

### updateIndices

▸ **updateIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L124)

___

### updateSteps

▸ **updateSteps**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L96)

___

### updateUvs

▸ **updateUvs**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L117)

___

### updateVertices

▸ **updateVertices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L82)

___

### upload

▸ **upload**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L155)
