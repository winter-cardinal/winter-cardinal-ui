[Winter Cardinal UI - v0.310.1](../index.md) / DBaseBackgroundMeshGeometry

# Class: DBaseBackgroundMeshGeometry

## Hierarchy

- [`DBaseMeshGeometry`](DBaseMeshGeometry.md)

  ↳ **`DBaseBackgroundMeshGeometry`**

## Table of contents

### Constructors

- [constructor](DBaseBackgroundMeshGeometry.md#constructor)

### Properties

- [\_cornerMask](DBaseBackgroundMeshGeometry.md#_cornermask)
- [\_cornerRadius](DBaseBackgroundMeshGeometry.md#_cornerradius)
- [\_height](DBaseBackgroundMeshGeometry.md#_height)
- [\_indexBuffer](DBaseBackgroundMeshGeometry.md#_indexbuffer)
- [\_indices](DBaseBackgroundMeshGeometry.md#_indices)
- [\_isDirty](DBaseBackgroundMeshGeometry.md#_isdirty)
- [\_resolution](DBaseBackgroundMeshGeometry.md#_resolution)
- [\_uvBuffer](DBaseBackgroundMeshGeometry.md#_uvbuffer)
- [\_uvs](DBaseBackgroundMeshGeometry.md#_uvs)
- [\_vertexBuffer](DBaseBackgroundMeshGeometry.md#_vertexbuffer)
- [\_vertices](DBaseBackgroundMeshGeometry.md#_vertices)
- [\_width](DBaseBackgroundMeshGeometry.md#_width)
- [glVertexArrayObjects](DBaseBackgroundMeshGeometry.md#glvertexarrayobjects)
- [instanceCount](DBaseBackgroundMeshGeometry.md#instancecount)
- [refCount](DBaseBackgroundMeshGeometry.md#refcount)
- [N](DBaseBackgroundMeshGeometry.md#n)
- [TABLES](DBaseBackgroundMeshGeometry.md#tables)

### Accessors

- [cornerMask](DBaseBackgroundMeshGeometry.md#cornermask)
- [cornerRadius](DBaseBackgroundMeshGeometry.md#cornerradius)
- [height](DBaseBackgroundMeshGeometry.md#height)
- [width](DBaseBackgroundMeshGeometry.md#width)

### Methods

- [addAttribute](DBaseBackgroundMeshGeometry.md#addattribute)
- [addIndex](DBaseBackgroundMeshGeometry.md#addindex)
- [clone](DBaseBackgroundMeshGeometry.md#clone)
- [destroy](DBaseBackgroundMeshGeometry.md#destroy)
- [dispose](DBaseBackgroundMeshGeometry.md#dispose)
- [fillIndices](DBaseBackgroundMeshGeometry.md#fillindices)
- [fillIndicesEnd](DBaseBackgroundMeshGeometry.md#fillindicesend)
- [fillVertices](DBaseBackgroundMeshGeometry.md#fillvertices)
- [getAttribute](DBaseBackgroundMeshGeometry.md#getattribute)
- [getBuffer](DBaseBackgroundMeshGeometry.md#getbuffer)
- [getIndex](DBaseBackgroundMeshGeometry.md#getindex)
- [getTables](DBaseBackgroundMeshGeometry.md#gettables)
- [interleave](DBaseBackgroundMeshGeometry.md#interleave)
- [newTable](DBaseBackgroundMeshGeometry.md#newtable)
- [newTables](DBaseBackgroundMeshGeometry.md#newtables)
- [update](DBaseBackgroundMeshGeometry.md#update)
- [merge](DBaseBackgroundMeshGeometry.md#merge)

## Constructors

### constructor

• **new DBaseBackgroundMeshGeometry**()

#### Overrides

[DBaseMeshGeometry](DBaseMeshGeometry.md).[constructor](DBaseMeshGeometry.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts#L11)

## Properties

### \_cornerMask

• `Protected` **\_cornerMask**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_cornerMask](DBaseMeshGeometry.md#_cornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L21)

___

### \_cornerRadius

• `Protected` **\_cornerRadius**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_cornerRadius](DBaseMeshGeometry.md#_cornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L20)

___

### \_height

• `Protected` **\_height**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_height](DBaseMeshGeometry.md#_height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L19)

___

### \_indexBuffer

• `Protected` **\_indexBuffer**: `Buffer`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_indexBuffer](DBaseMeshGeometry.md#_indexbuffer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L28)

___

### \_indices

• `Protected` **\_indices**: `Uint16Array`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_indices](DBaseMeshGeometry.md#_indices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L25)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_isDirty](DBaseMeshGeometry.md#_isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L22)

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_resolution](DBaseMeshGeometry.md#_resolution)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L29)

___

### \_uvBuffer

• `Protected` **\_uvBuffer**: `Buffer`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_uvBuffer](DBaseMeshGeometry.md#_uvbuffer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L27)

___

### \_uvs

• `Protected` **\_uvs**: `Float32Array`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_uvs](DBaseMeshGeometry.md#_uvs)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L24)

___

### \_vertexBuffer

• `Protected` **\_vertexBuffer**: `Buffer`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_vertexBuffer](DBaseMeshGeometry.md#_vertexbuffer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L26)

___

### \_vertices

• `Protected` **\_vertices**: `Float32Array`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_vertices](DBaseMeshGeometry.md#_vertices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L23)

___

### \_width

• `Protected` **\_width**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_width](DBaseMeshGeometry.md#_width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L18)

___

### glVertexArrayObjects

• `Protected` **glVertexArrayObjects**: `any`

A map of renderer IDs to webgl VAOs

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[glVertexArrayObjects](DBaseMeshGeometry.md#glvertexarrayobjects)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13799

___

### instanceCount

• **instanceCount**: `number`

Number of instances in this geometry, pass it to `GeometrySystem.draw()`

**`Member`**

PIXI.Geometry#instanceCount

**`Default`**

1

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[instanceCount](DBaseMeshGeometry.md#instancecount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13805

___

### refCount

• **refCount**: `number`

Count of existing (not destroyed) meshes that reference this geometry

**`Member`**

PIXI.Geometry#refCount

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[refCount](DBaseMeshGeometry.md#refcount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13810

___

### N

▪ `Static` `Protected` **N**: `number` = `4`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[N](DBaseMeshGeometry.md#n)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L15)

___

### TABLES

▪ `Static` `Protected` `Optional` **TABLES**: [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[TABLES](DBaseMeshGeometry.md#tables)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L16)

## Accessors

### cornerMask

• `get` **cornerMask**(): `number`

#### Returns

`number`

#### Inherited from

DBaseMeshGeometry.cornerMask

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L86)

• `set` **cornerMask**(`cornerMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cornerMask` | `number` |

#### Returns

`void`

#### Inherited from

DBaseMeshGeometry.cornerMask

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L90)

___

### cornerRadius

• `get` **cornerRadius**(): `number`

#### Returns

`number`

#### Inherited from

DBaseMeshGeometry.cornerRadius

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L75)

• `set` **cornerRadius**(`borderSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `borderSize` | `number` |

#### Returns

`void`

#### Inherited from

DBaseMeshGeometry.cornerRadius

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L79)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DBaseMeshGeometry.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L64)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

DBaseMeshGeometry.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L68)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DBaseMeshGeometry.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L53)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

DBaseMeshGeometry.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L57)

## Methods

### addAttribute

▸ **addAttribute**(`id`, `buffer?`, `size?`, `normalized?`, `type?`, `stride?`, `start?`): `Geometry`

Adds an attribute to the geometry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the name of the attribute (matching up to a shader) |
| `buffer?` | `number`[] \| `Buffer` | the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it. |
| `size?` | `number` | the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2 |
| `normalized?` | `boolean` | should the data be normalized. |
| `type?` | `number` | what type of number is the attribute. Check {PIXI.TYPES} to see the ones available |
| `stride?` | `number` | How far apart (in floats) the start of each value is. (used for interleaving data) |
| `start?` | `number` | How far into the array to start reading values (used for interleaving data) |

#### Returns

`Geometry`

returns self, useful for chaining.

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[addAttribute](DBaseMeshGeometry.md#addattribute)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13825

___

### addIndex

▸ **addIndex**(`buffer?`): `Geometry`

Adds an index buffer to the geometry
The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer?` | `number`[] \| `Buffer` | the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it. |

#### Returns

`Geometry`

returns self, useful for chaining.

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[addIndex](DBaseMeshGeometry.md#addindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13848

___

### clone

▸ **clone**(): `Geometry`

returns a clone of the geometry

#### Returns

`Geometry`

a new clone of this geometry

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[clone](DBaseMeshGeometry.md#clone)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13875

___

### destroy

▸ **destroy**(): `void`

Destroys the geometry.

#### Returns

`void`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[destroy](DBaseMeshGeometry.md#destroy)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13869

___

### dispose

▸ **dispose**(): `void`

disposes WebGL resources that are connected to this geometry

#### Returns

`void`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[dispose](DBaseMeshGeometry.md#dispose)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13865

___

### fillIndices

▸ `Protected` **fillIndices**(`indices`, `ia`, `ii`, `n`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `Uint16Array` |
| `ia` | `number` |
| `ii` | `number` |
| `n` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts#L63)

___

### fillIndicesEnd

▸ `Protected` **fillIndicesEnd**(`indices`, `ia`, `ii`, `n`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `Uint16Array` |
| `ia` | `number` |
| `ii` | `number` |
| `n` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts#L76)

___

### fillVertices

▸ `Protected` **fillVertices**(`vertices`, `uvs`, `iv`, `iuv`, `n`, `x`, `y`, `r`, `dr`, `table`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertices` | `Float32Array` |
| `uvs` | `Float32Array` |
| `iv` | `number` |
| `iuv` | `number` |
| `n` | `number` |
| `x` | `number` |
| `y` | `number` |
| `r` | `number` |
| `dr` | `number` |
| `table` | [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts#L19)

___

### getAttribute

▸ **getAttribute**(`id`): `Attribute`

returns the requested attribute

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the name of the attribute required |

#### Returns

`Attribute`

the attribute requested.

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[getAttribute](DBaseMeshGeometry.md#getattribute)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13832

___

### getBuffer

▸ **getBuffer**(`id`): `Buffer`

returns the requested buffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the name of the buffer required |

#### Returns

`Buffer`

the buffer requested.

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[getBuffer](DBaseMeshGeometry.md#getbuffer)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13839

___

### getIndex

▸ **getIndex**(): `Buffer`

returns the index buffer

#### Returns

`Buffer`

the index buffer.

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[getIndex](DBaseMeshGeometry.md#getindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13854

___

### getTables

▸ `Protected` **getTables**(): [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Returns

[`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[getTables](DBaseMeshGeometry.md#gettables)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L97)

___

### interleave

▸ **interleave**(): `Geometry`

this function modifies the structure so that all current attributes become interleaved into a single buffer
This can be useful if your model remains static as it offers a little performance boost

#### Returns

`Geometry`

returns self, useful for chaining.

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[interleave](DBaseMeshGeometry.md#interleave)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13861

___

### newTable

▸ `Protected` **newTable**(`n`, `a0`, `da`): [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `a0` | `number` |
| `da` | `number` |

#### Returns

[`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[newTable](DBaseMeshGeometry.md#newtable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L117)

___

### newTables

▸ `Protected` **newTables**(`n`): [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[newTables](DBaseMeshGeometry.md#newtables)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L106)

___

### update

▸ **update**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-background-mesh-geometry.ts#L98)

___

### merge

▸ `Static` **merge**(`geometries`): `Geometry`

merges an array of geometries into a new single one
geometry attribute styles must match for this operation to work

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometries` | `Geometry`[] | array of geometries to merge |

#### Returns

`Geometry`

shiny new geometry!

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[merge](DBaseMeshGeometry.md#merge)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:3012
