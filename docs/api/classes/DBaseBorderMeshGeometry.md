[Winter Cardinal UI - v0.167.0](../index.md) / DBaseBorderMeshGeometry

# Class: DBaseBorderMeshGeometry

## Hierarchy

- [`DBaseMeshGeometry`](DBaseMeshGeometry.md)

  ↳ **`DBaseBorderMeshGeometry`**

## Table of contents

### Constructors

- [constructor](DBaseBorderMeshGeometry.md#constructor)

### Properties

- [\_borderMask](DBaseBorderMeshGeometry.md#_bordermask)
- [\_borderWidth](DBaseBorderMeshGeometry.md#_borderwidth)
- [\_cornerMask](DBaseBorderMeshGeometry.md#_cornermask)
- [\_cornerRadius](DBaseBorderMeshGeometry.md#_cornerradius)
- [\_height](DBaseBorderMeshGeometry.md#_height)
- [\_indexBuffer](DBaseBorderMeshGeometry.md#_indexbuffer)
- [\_indices](DBaseBorderMeshGeometry.md#_indices)
- [\_isDirty](DBaseBorderMeshGeometry.md#_isdirty)
- [\_resolution](DBaseBorderMeshGeometry.md#_resolution)
- [\_uvBuffer](DBaseBorderMeshGeometry.md#_uvbuffer)
- [\_uvs](DBaseBorderMeshGeometry.md#_uvs)
- [\_vertexBuffer](DBaseBorderMeshGeometry.md#_vertexbuffer)
- [\_vertices](DBaseBorderMeshGeometry.md#_vertices)
- [\_width](DBaseBorderMeshGeometry.md#_width)
- [glVertexArrayObjects](DBaseBorderMeshGeometry.md#glvertexarrayobjects)
- [instanceCount](DBaseBorderMeshGeometry.md#instancecount)
- [refCount](DBaseBorderMeshGeometry.md#refcount)
- [N](DBaseBorderMeshGeometry.md#n)
- [TABLES](DBaseBorderMeshGeometry.md#tables)

### Accessors

- [borderMask](DBaseBorderMeshGeometry.md#bordermask)
- [borderWidth](DBaseBorderMeshGeometry.md#borderwidth)
- [cornerMask](DBaseBorderMeshGeometry.md#cornermask)
- [cornerRadius](DBaseBorderMeshGeometry.md#cornerradius)
- [height](DBaseBorderMeshGeometry.md#height)
- [width](DBaseBorderMeshGeometry.md#width)

### Methods

- [addAttribute](DBaseBorderMeshGeometry.md#addattribute)
- [addIndex](DBaseBorderMeshGeometry.md#addindex)
- [clone](DBaseBorderMeshGeometry.md#clone)
- [destroy](DBaseBorderMeshGeometry.md#destroy)
- [dispose](DBaseBorderMeshGeometry.md#dispose)
- [fillIndices](DBaseBorderMeshGeometry.md#fillindices)
- [fillVertices](DBaseBorderMeshGeometry.md#fillvertices)
- [getAttribute](DBaseBorderMeshGeometry.md#getattribute)
- [getBuffer](DBaseBorderMeshGeometry.md#getbuffer)
- [getIndex](DBaseBorderMeshGeometry.md#getindex)
- [getTables](DBaseBorderMeshGeometry.md#gettables)
- [interleave](DBaseBorderMeshGeometry.md#interleave)
- [newTable](DBaseBorderMeshGeometry.md#newtable)
- [newTables](DBaseBorderMeshGeometry.md#newtables)
- [update](DBaseBorderMeshGeometry.md#update)
- [merge](DBaseBorderMeshGeometry.md#merge)

## Constructors

### constructor

• **new DBaseBorderMeshGeometry**()

#### Overrides

[DBaseMeshGeometry](DBaseMeshGeometry.md).[constructor](DBaseMeshGeometry.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L15)

## Properties

### \_borderMask

• `Protected` **\_borderMask**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L13)

___

### \_borderWidth

• `Protected` **\_borderWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L12)

___

### \_cornerMask

• `Protected` **\_cornerMask**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_cornerMask](DBaseMeshGeometry.md#_cornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L21)

___

### \_cornerRadius

• `Protected` **\_cornerRadius**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_cornerRadius](DBaseMeshGeometry.md#_cornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L20)

___

### \_height

• `Protected` **\_height**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_height](DBaseMeshGeometry.md#_height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L19)

___

### \_indexBuffer

• `Protected` **\_indexBuffer**: `Buffer`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_indexBuffer](DBaseMeshGeometry.md#_indexbuffer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L28)

___

### \_indices

• `Protected` **\_indices**: `Uint16Array`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_indices](DBaseMeshGeometry.md#_indices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L25)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_isDirty](DBaseMeshGeometry.md#_isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L22)

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_resolution](DBaseMeshGeometry.md#_resolution)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L29)

___

### \_uvBuffer

• `Protected` **\_uvBuffer**: `Buffer`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_uvBuffer](DBaseMeshGeometry.md#_uvbuffer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L27)

___

### \_uvs

• `Protected` **\_uvs**: `Float32Array`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_uvs](DBaseMeshGeometry.md#_uvs)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L24)

___

### \_vertexBuffer

• `Protected` **\_vertexBuffer**: `Buffer`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_vertexBuffer](DBaseMeshGeometry.md#_vertexbuffer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L26)

___

### \_vertices

• `Protected` **\_vertices**: `Float32Array`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_vertices](DBaseMeshGeometry.md#_vertices)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L23)

___

### \_width

• `Protected` **\_width**: `number`

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[_width](DBaseMeshGeometry.md#_width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L18)

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

**`member`** {number} PIXI.Geometry#instanceCount

**`default`** 1

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[instanceCount](DBaseMeshGeometry.md#instancecount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13805

___

### refCount

• **refCount**: `number`

Count of existing (not destroyed) meshes that reference this geometry

**`member`** {number} PIXI.Geometry#refCount

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

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L15)

___

### TABLES

▪ `Static` `Protected` `Optional` **TABLES**: [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Inherited from

[DBaseMeshGeometry](DBaseMeshGeometry.md).[TABLES](DBaseMeshGeometry.md#tables)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L16)

## Accessors

### borderMask

• `get` **borderMask**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L37)

• `set` **borderMask**(`borderMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `borderMask` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L41)

___

### borderWidth

• `get` **borderWidth**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L26)

• `set` **borderWidth**(`borderWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `borderWidth` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L30)

___

### cornerMask

• `get` **cornerMask**(): `number`

#### Returns

`number`

#### Inherited from

DBaseMeshGeometry.cornerMask

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L86)

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

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L90)

___

### cornerRadius

• `get` **cornerRadius**(): `number`

#### Returns

`number`

#### Inherited from

DBaseMeshGeometry.cornerRadius

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L75)

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

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L79)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DBaseMeshGeometry.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L64)

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

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L68)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DBaseMeshGeometry.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L53)

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

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L57)

## Methods

### addAttribute

▸ **addAttribute**(`id`, `buffer?`, `size?`, `normalized?`, `type?`, `stride?`, `start?`): `Geometry`

Adds an attribute to the geometry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the name of the attribute (matching up to a shader) |
| `buffer?` | `number`[] \| `Buffer` | - |
| `size?` | `number` | - |
| `normalized?` | `boolean` | - |
| `type?` | `number` | - |
| `stride?` | `number` | - |
| `start?` | `number` | - |

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

| Name | Type |
| :------ | :------ |
| `buffer?` | `number`[] \| `Buffer` |

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

▸ `Protected` **fillIndices**(`indices`, `ia`, `ii`, `n`, `end`, `loop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `Uint16Array` |
| `ia` | `number` |
| `ii` | `number` |
| `n` | `number` |
| `end` | `boolean` |
| `loop` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L119)

___

### fillVertices

▸ `Protected` **fillVertices**(`vertices`, `uvs`, `iv`, `iuv`, `n`, `x`, `y`, `r`, `dr`, `borderWidth`, `table`): `void`

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
| `borderWidth` | `number` |
| `table` | [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L48)

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

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L97)

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

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L117)

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

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L106)

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

[src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-border-mesh-geometry.ts#L241)

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
