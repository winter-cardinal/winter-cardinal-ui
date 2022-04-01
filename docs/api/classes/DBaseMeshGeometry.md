[Winter Cardinal UI - v0.160.0](../index.md) / DBaseMeshGeometry

# Class: DBaseMeshGeometry

## Hierarchy

- `MeshGeometry`

  ↳ **`DBaseMeshGeometry`**

  ↳↳ [`DBaseBackgroundMeshGeometry`](DBaseBackgroundMeshGeometry.md)

  ↳↳ [`DBaseBorderMeshGeometry`](DBaseBorderMeshGeometry.md)

## Table of contents

### Constructors

- [constructor](DBaseMeshGeometry.md#constructor)

### Properties

- [\_cornerMask](DBaseMeshGeometry.md#_cornermask)
- [\_cornerRadius](DBaseMeshGeometry.md#_cornerradius)
- [\_height](DBaseMeshGeometry.md#_height)
- [\_indexBuffer](DBaseMeshGeometry.md#_indexbuffer)
- [\_indices](DBaseMeshGeometry.md#_indices)
- [\_isDirty](DBaseMeshGeometry.md#_isdirty)
- [\_resolution](DBaseMeshGeometry.md#_resolution)
- [\_uvBuffer](DBaseMeshGeometry.md#_uvbuffer)
- [\_uvs](DBaseMeshGeometry.md#_uvs)
- [\_vertexBuffer](DBaseMeshGeometry.md#_vertexbuffer)
- [\_vertices](DBaseMeshGeometry.md#_vertices)
- [\_width](DBaseMeshGeometry.md#_width)
- [glVertexArrayObjects](DBaseMeshGeometry.md#glvertexarrayobjects)
- [instanceCount](DBaseMeshGeometry.md#instancecount)
- [refCount](DBaseMeshGeometry.md#refcount)
- [N](DBaseMeshGeometry.md#n)
- [TABLES](DBaseMeshGeometry.md#tables)

### Accessors

- [cornerMask](DBaseMeshGeometry.md#cornermask)
- [cornerRadius](DBaseMeshGeometry.md#cornerradius)
- [height](DBaseMeshGeometry.md#height)
- [width](DBaseMeshGeometry.md#width)

### Methods

- [addAttribute](DBaseMeshGeometry.md#addattribute)
- [addIndex](DBaseMeshGeometry.md#addindex)
- [clone](DBaseMeshGeometry.md#clone)
- [destroy](DBaseMeshGeometry.md#destroy)
- [dispose](DBaseMeshGeometry.md#dispose)
- [getAttribute](DBaseMeshGeometry.md#getattribute)
- [getBuffer](DBaseMeshGeometry.md#getbuffer)
- [getIndex](DBaseMeshGeometry.md#getindex)
- [getTables](DBaseMeshGeometry.md#gettables)
- [interleave](DBaseMeshGeometry.md#interleave)
- [newTable](DBaseMeshGeometry.md#newtable)
- [newTables](DBaseMeshGeometry.md#newtables)
- [merge](DBaseMeshGeometry.md#merge)

## Constructors

### constructor

• **new DBaseMeshGeometry**(`vertices`, `uvs`, `indices`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertices` | `number`[] \| `Float32Array` |
| `uvs` | `number`[] \| `Float32Array` |
| `indices` | `number`[] \| `Uint16Array` |

#### Overrides

MeshGeometry.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L31)

## Properties

### \_cornerMask

• `Protected` **\_cornerMask**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L21)

___

### \_cornerRadius

• `Protected` **\_cornerRadius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L20)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L19)

___

### \_indexBuffer

• `Protected` **\_indexBuffer**: `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L28)

___

### \_indices

• `Protected` **\_indices**: `Uint16Array`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L25)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L22)

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L29)

___

### \_uvBuffer

• `Protected` **\_uvBuffer**: `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L27)

___

### \_uvs

• `Protected` **\_uvs**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L24)

___

### \_vertexBuffer

• `Protected` **\_vertexBuffer**: `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L26)

___

### \_vertices

• `Protected` **\_vertices**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L23)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L18)

___

### glVertexArrayObjects

• `Protected` **glVertexArrayObjects**: `any`

A map of renderer IDs to webgl VAOs

#### Inherited from

MeshGeometry.glVertexArrayObjects

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13799

___

### instanceCount

• **instanceCount**: `number`

Number of instances in this geometry, pass it to `GeometrySystem.draw()`

**`member`** {number} PIXI.Geometry#instanceCount

**`default`** 1

#### Inherited from

MeshGeometry.instanceCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13805

___

### refCount

• **refCount**: `number`

Count of existing (not destroyed) meshes that reference this geometry

**`member`** {number} PIXI.Geometry#refCount

#### Inherited from

MeshGeometry.refCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13810

___

### N

▪ `Static` `Protected` **N**: `number` = `4`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L15)

___

### TABLES

▪ `Static` `Protected` `Optional` **TABLES**: [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L16)

## Accessors

### cornerMask

• `get` **cornerMask**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L86)

• `set` **cornerMask**(`cornerMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cornerMask` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L90)

___

### cornerRadius

• `get` **cornerRadius**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L75)

• `set` **cornerRadius**(`borderSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `borderSize` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L79)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L64)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L68)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L53)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L57)

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

MeshGeometry.addAttribute

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

MeshGeometry.addIndex

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

MeshGeometry.clone

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13875

___

### destroy

▸ **destroy**(): `void`

Destroys the geometry.

#### Returns

`void`

#### Inherited from

MeshGeometry.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13869

___

### dispose

▸ **dispose**(): `void`

disposes WebGL resources that are connected to this geometry

#### Returns

`void`

#### Inherited from

MeshGeometry.dispose

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13865

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

MeshGeometry.getAttribute

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

MeshGeometry.getBuffer

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

MeshGeometry.getIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13854

___

### getTables

▸ `Protected` **getTables**(): [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Returns

[`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L97)

___

### interleave

▸ **interleave**(): `Geometry`

this function modifies the structure so that all current attributes become interleaved into a single buffer
This can be useful if your model remains static as it offers a little performance boost

#### Returns

`Geometry`

returns self, useful for chaining.

#### Inherited from

MeshGeometry.interleave

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L117)

___

### newTables

▸ `Protected` **newTables**(`n`): [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L106)

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

MeshGeometry.merge

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:3012
