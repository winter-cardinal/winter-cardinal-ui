[Winter Cardinal UI - v0.442.0](../index.md) / DBaseMeshGeometry

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

• **new DBaseMeshGeometry**(`vertices`, `uvs`, `indices`): [`DBaseMeshGeometry`](DBaseMeshGeometry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertices` | `number`[] \| `Float32Array` |
| `uvs` | `number`[] \| `Float32Array` |
| `indices` | `number`[] \| `Uint16Array` |

#### Returns

[`DBaseMeshGeometry`](DBaseMeshGeometry.md)

#### Overrides

MeshGeometry.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L32)

## Properties

### \_cornerMask

• `Protected` **\_cornerMask**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L22)

___

### \_cornerRadius

• `Protected` **\_cornerRadius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L21)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L20)

___

### \_indexBuffer

• `Protected` **\_indexBuffer**: `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L29)

___

### \_indices

• `Protected` **\_indices**: `Uint16Array`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L26)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L23)

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L30)

___

### \_uvBuffer

• `Protected` **\_uvBuffer**: `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L28)

___

### \_uvs

• `Protected` **\_uvs**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L25)

___

### \_vertexBuffer

• `Protected` **\_vertexBuffer**: `Buffer`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L27)

___

### \_vertices

• `Protected` **\_vertices**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L24)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L19)

___

### glVertexArrayObjects

• `Protected` **glVertexArrayObjects**: `any`

A map of renderer IDs to webgl VAOs

#### Inherited from

MeshGeometry.glVertexArrayObjects

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14256

___

### instanceCount

• **instanceCount**: `number`

Number of instances in this geometry, pass it to `GeometrySystem.draw()`

**`Member`**

PIXI.Geometry#instanceCount

**`Default`**

```ts
1
```

#### Inherited from

MeshGeometry.instanceCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14262

___

### refCount

• **refCount**: `number`

Count of existing (not destroyed) meshes that reference this geometry

**`Member`**

PIXI.Geometry#refCount

#### Inherited from

MeshGeometry.refCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14267

___

### N

▪ `Static` `Protected` **N**: `number` = `5`

Note that this must be an odd number.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L16)

___

### TABLES

▪ `Static` `Protected` `Optional` **TABLES**: [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L17)

## Accessors

### cornerMask

• `get` **cornerMask**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L87)

• `set` **cornerMask**(`cornerMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cornerMask` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L91)

___

### cornerRadius

• `get` **cornerRadius**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L76)

• `set` **cornerRadius**(`borderSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `borderSize` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L80)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L65)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L69)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L54)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L58)

## Methods

### addAttribute

▸ **addAttribute**(`id`, `buffer?`, `size?`, `normalized?`, `type?`, `stride?`, `start?`, `instance?`): `Geometry`

Adds an attribute to the geometry
Note: `stride` and `start` should be `undefined` if you dont know them, not 0!

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
| `instance?` | `boolean` | Instancing flag |

#### Returns

`Geometry`

returns self, useful for chaining.

#### Inherited from

MeshGeometry.addAttribute

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14284

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

MeshGeometry.addIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14307

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

node_modules/pixi.js/pixi.js.d.ts:14334

___

### destroy

▸ **destroy**(): `void`

Destroys the geometry.

#### Returns

`void`

#### Inherited from

MeshGeometry.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14328

___

### dispose

▸ **dispose**(): `void`

disposes WebGL resources that are connected to this geometry

#### Returns

`void`

#### Inherited from

MeshGeometry.dispose

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14324

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

node_modules/pixi.js/pixi.js.d.ts:14291

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

node_modules/pixi.js/pixi.js.d.ts:14298

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

node_modules/pixi.js/pixi.js.d.ts:14313

___

### getTables

▸ **getTables**(): [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Returns

[`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L98)

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

node_modules/pixi.js/pixi.js.d.ts:14320

___

### newTable

▸ **newTable**(`n`, `a0`, `da`): [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `a0` | `number` |
| `da` | `number` |

#### Returns

[`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L118)

___

### newTables

▸ **newTables**(`n`): [`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`DBaseMeshGeometryTable`](../interfaces/DBaseMeshGeometryTable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-mesh-geometry.ts#L107)

___

### merge

▸ **merge**(`geometries`): `Geometry`

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

node_modules/pixi.js/pixi.js.d.ts:3115
