[Winter Cardinal UI - v0.414.0](../index.md) / DDynamicTextGeometry

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
- [scale](DDynamicTextGeometry.md#scale)
- [scaled](DDynamicTextGeometry.md#scaled)
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

• **new DDynamicTextGeometry**(): [`DDynamicTextGeometry`](DDynamicTextGeometry.md)

#### Returns

[`DDynamicTextGeometry`](DDynamicTextGeometry.md)

#### Overrides

MeshGeometry.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L28)

## Properties

### clipped

• **clipped**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L26)

___

### glVertexArrayObjects

• `Protected` **glVertexArrayObjects**: `any`

A map of renderer IDs to webgl VAOs

#### Inherited from

MeshGeometry.glVertexArrayObjects

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14256

___

### height

• **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L23)

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

### scale

• **scale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L24)

___

### scaled

• **scaled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L25)

___

### width

• **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L22)

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

### update

▸ **update**(`text`, `atlas`, `modifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `atlas` | ``null`` \| [`DynamicFontAtlas`](DynamicFontAtlas.md) |
| `modifier` | [`DDynamicTextGeometryModifier`](../interfaces/DDynamicTextGeometryModifier.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L37)

___

### writeCharacter

▸ **writeCharacter**(`vertices`, `uvs`, `indices`, `index`, `x`, `y`, `scale`, `character`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertices` | `Float32Array` |
| `uvs` | `Float32Array` |
| `indices` | `Uint16Array` |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `scale` | `number` |
| `character` | [`DynamicFontAtlasCharacter`](DynamicFontAtlasCharacter.md) |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L99)

___

### writeCharacterEmpty

▸ **writeCharacterEmpty**(`vertices`, `uvs`, `indices`, `index`): `void`

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-geometry.ts#L155)

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
