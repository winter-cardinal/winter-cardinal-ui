[Winter Cardinal UI - v0.442.0](../index.md) / EShapeBuffer

# Class: EShapeBuffer

## Table of contents

### Constructors

- [constructor](EShapeBuffer.md#constructor)

### Properties

- [\_builder](EShapeBuffer.md#_builder)
- [\_colorBuffer](EShapeBuffer.md#_colorbuffer)
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
- [colors](EShapeBuffer.md#colors)
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
- [updateColors](EShapeBuffer.md#updatecolors)
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

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L38)

## Properties

### \_builder

• `Protected` **\_builder**: [`EShapeBufferUnitBuilder`](EShapeBufferUnitBuilder.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L36)

___

### \_colorBuffer

• `Protected` **\_colorBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L22)

___

### \_geometry

• `Protected` **\_geometry**: ``null`` \| `Geometry`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L34)

___

### \_indexBuffer

• `Protected` **\_indexBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L31)

___

### \_indexCapacity

• `Protected` **\_indexCapacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L28)

___

### \_indexCount

• `Protected` **\_indexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L29)

___

### \_renderer

• `Protected` **\_renderer**: `Renderer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L33)

___

### \_stepBuffer

• `Protected` **\_stepBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L19)

___

### \_uvBuffer

• `Protected` **\_uvBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L25)

___

### \_vertexBuffer

• `Protected` **\_vertexBuffer**: ``null`` \| `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L16)

___

### \_vertexCapacity

• `Protected` **\_vertexCapacity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L14)

___

### \_vertexCount

• `Protected` **\_vertexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L15)

___

### colors

• **colors**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L21)

___

### indexCountRequested

• **indexCountRequested**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L30)

___

### indices

• **indices**: `Uint16Array` \| `Uint32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L27)

___

### steps

• **steps**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L18)

___

### uvs

• **uvs**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L24)

___

### vertices

• **vertices**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L13)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L209)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L214)

___

### getGeometry

▸ **getGeometry**(): `Geometry`

#### Returns

`Geometry`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L105)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L129)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L166)

___

### updateColors

▸ **updateColors**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L84)

___

### updateIndices

▸ **updateIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L98)

___

### updateSteps

▸ **updateSteps**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L77)

___

### updateUvs

▸ **updateUvs**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L91)

___

### updateVertices

▸ **updateVertices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L70)

___

### upload

▸ **upload**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-buffer.ts#L125)
