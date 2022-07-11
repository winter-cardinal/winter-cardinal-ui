[Winter Cardinal UI - v0.199.0](../index.md) / EShapeBuffer

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
- [isCompatible](EShapeBuffer.md#iscompatible)
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

• **new EShapeBuffer**(`ntriangles`, `renderer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ntriangles` | `number` |
| `renderer` | `Renderer` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L46)

## Properties

### \_builder

• `Protected` **\_builder**: [`EShapeBufferUnitBuilder`](EShapeBufferUnitBuilder.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L44)

___

### \_clippingBuffer

• `Protected` **\_clippingBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L21)

___

### \_colorFillBuffer

• `Protected` **\_colorFillBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L27)

___

### \_colorStrokeBuffer

• `Protected` **\_colorStrokeBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L30)

___

### \_geometry

• `Protected` **\_geometry**: ``null`` \| `Geometry`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L42)

___

### \_indexBuffer

• `Protected` **\_indexBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L39)

___

### \_indexCapacity

• `Protected` **\_indexCapacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L36)

___

### \_indexCount

• `Protected` **\_indexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L37)

___

### \_renderer

• `Protected` **\_renderer**: `Renderer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L41)

___

### \_stepBuffer

• `Protected` **\_stepBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L24)

___

### \_uvBuffer

• `Protected` **\_uvBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L33)

___

### \_vertexBuffer

• `Protected` **\_vertexBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L18)

___

### \_vertexCapacity

• `Protected` **\_vertexCapacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L16)

___

### \_vertexCount

• `Protected` **\_vertexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L17)

___

### clippings

• **clippings**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L20)

___

### colorFills

• **colorFills**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L26)

___

### colorStrokes

• **colorStrokes**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L29)

___

### indexCountRequested

• **indexCountRequested**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L38)

___

### indices

• **indices**: `Uint16Array` \| `Uint32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L35)

___

### steps

• **steps**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L23)

___

### uvs

• **uvs**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L32)

___

### vertices

• **vertices**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L15)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L266)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L271)

___

### getGeometry

▸ `Protected` **getGeometry**(): `Geometry`

#### Returns

`Geometry`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L133)

___

### isCompatible

▸ **isCompatible**(`shape`, `uploaded`, `vindex`, `iindex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `uploaded` | [`EShapeUploaded`](../interfaces/EShapeUploaded.md) |
| `vindex` | `number` |
| `iindex` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L198)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L161)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L207)

___

### updateClippings

▸ **updateClippings**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L91)

___

### updateColorFills

▸ **updateColorFills**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L105)

___

### updateColorStrokes

▸ **updateColorStrokes**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L112)

___

### updateIndices

▸ **updateIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L126)

___

### updateSteps

▸ **updateSteps**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L98)

___

### updateUvs

▸ **updateUvs**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L119)

___

### updateVertices

▸ **updateVertices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L84)

___

### upload

▸ **upload**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L157)
