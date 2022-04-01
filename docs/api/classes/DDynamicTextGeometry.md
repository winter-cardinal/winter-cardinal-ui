[Winter Cardinal UI - v0.160.0](../index.md) / DDynamicTextGeometry

# Class: DDynamicTextGeometry

## Hierarchy

- `MeshGeometry`

  ↳ **`DDynamicTextGeometry`**

## Table of contents

### Constructors

- [constructor](DDynamicTextGeometry.md#constructor)

### Properties

- [clipped](DDynamicTextGeometry.md#clipped)
- [glVertexArrayObjects](DDynamicTextGeometry.md#glvertexarrayobjects)
- [height](DDynamicTextGeometry.md#height)
- [instanceCount](DDynamicTextGeometry.md#instancecount)
- [refCount](DDynamicTextGeometry.md#refcount)
- [width](DDynamicTextGeometry.md#width)

### Methods

- [addAttribute](DDynamicTextGeometry.md#addattribute)
- [addIndex](DDynamicTextGeometry.md#addindex)
- [clone](DDynamicTextGeometry.md#clone)
- [destroy](DDynamicTextGeometry.md#destroy)
- [dispose](DDynamicTextGeometry.md#dispose)
- [getAttribute](DDynamicTextGeometry.md#getattribute)
- [getBuffer](DDynamicTextGeometry.md#getbuffer)
- [getIndex](DDynamicTextGeometry.md#getindex)
- [interleave](DDynamicTextGeometry.md#interleave)
- [update](DDynamicTextGeometry.md#update)
- [writeCharacter](DDynamicTextGeometry.md#writecharacter)
- [writeCharacterEmpty](DDynamicTextGeometry.md#writecharacterempty)
- [merge](DDynamicTextGeometry.md#merge)

## Constructors

### constructor

• **new DDynamicTextGeometry**()

#### Overrides

MeshGeometry.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L25)

## Properties

### clipped

• **clipped**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L23)

___

### glVertexArrayObjects

• `Protected` **glVertexArrayObjects**: `any`

A map of renderer IDs to webgl VAOs

#### Inherited from

MeshGeometry.glVertexArrayObjects

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13799

___

### height

• **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L22)

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

### width

• **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L21)

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

### update

▸ **update**(`text`, `atlas`, `clipping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `atlas` | ``null`` \| [`DynamicFontAtlas`](DynamicFontAtlas.md) |
| `clipping` | [`DDynamicTextGeometryClipping`](../interfaces/DDynamicTextGeometryClipping.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L32)

___

### writeCharacter

▸ `Protected` **writeCharacter**(`vertices`, `uvs`, `indices`, `index`, `x`, `y`, `character`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertices` | `Float32Array` |
| `uvs` | `Float32Array` |
| `indices` | `Uint16Array` |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `character` | [`DynamicFontAtlasCharacter`](DynamicFontAtlasCharacter.md) |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L89)

___

### writeCharacterEmpty

▸ `Protected` **writeCharacterEmpty**(`vertices`, `uvs`, `indices`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertices` | `Float32Array` |
| `uvs` | `Float32Array` |
| `indices` | `Uint16Array` |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L144)

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
