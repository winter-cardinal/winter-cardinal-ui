[Winter Cardinal UI - v0.442.0](../index.md) / DynamicSDFFontGenerator

# Class: DynamicSDFFontGenerator

## Table of contents

### Constructors

- [constructor](DynamicSDFFontGenerator.md#constructor)

### Properties

- [\_canvas](DynamicSDFFontGenerator.md#_canvas)
- [\_gl](DynamicSDFFontGenerator.md#_gl)
- [\_onLostBound](DynamicSDFFontGenerator.md#_onlostbound)
- [\_onRestoreBound](DynamicSDFFontGenerator.md#_onrestorebound)
- [\_onUnloadBound](DynamicSDFFontGenerator.md#_onunloadbound)
- [\_samplerUniform](DynamicSDFFontGenerator.md#_sampleruniform)
- [\_shaderProgram](DynamicSDFFontGenerator.md#_shaderprogram)
- [\_sizeUniform](DynamicSDFFontGenerator.md#_sizeuniform)
- [\_texture](DynamicSDFFontGenerator.md#_texture)
- [\_textureCoordAttribute](DynamicSDFFontGenerator.md#_texturecoordattribute)
- [\_uvb](DynamicSDFFontGenerator.md#_uvb)
- [\_vb](DynamicSDFFontGenerator.md#_vb)
- [\_vertexPositionAttribute](DynamicSDFFontGenerator.md#_vertexpositionattribute)
- [\_INSTANCE](DynamicSDFFontGenerator.md#_instance)

### Methods

- [destroy](DynamicSDFFontGenerator.md#destroy)
- [destroyShaders](DynamicSDFFontGenerator.md#destroyshaders)
- [destroyTexture](DynamicSDFFontGenerator.md#destroytexture)
- [destroyUvBuffer](DynamicSDFFontGenerator.md#destroyuvbuffer)
- [destroyVertexBuffer](DynamicSDFFontGenerator.md#destroyvertexbuffer)
- [getCanvas](DynamicSDFFontGenerator.md#getcanvas)
- [getShader](DynamicSDFFontGenerator.md#getshader)
- [init](DynamicSDFFontGenerator.md#init)
- [makeShaders](DynamicSDFFontGenerator.md#makeshaders)
- [makeUvBuffer](DynamicSDFFontGenerator.md#makeuvbuffer)
- [makeVertexBuffer](DynamicSDFFontGenerator.md#makevertexbuffer)
- [read](DynamicSDFFontGenerator.md#read)
- [render](DynamicSDFFontGenerator.md#render)
- [restore](DynamicSDFFontGenerator.md#restore)
- [updateTexture](DynamicSDFFontGenerator.md#updatetexture)
- [getInstance](DynamicSDFFontGenerator.md#getinstance)

## Constructors

### constructor

• **new DynamicSDFFontGenerator**(): [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Returns

[`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L121)

## Properties

### \_canvas

• `Protected` **\_canvas**: ``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L107)

___

### \_gl

• `Protected` **\_gl**: ``null`` \| `WebGLRenderingContext`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L111)

___

### \_onLostBound

• `Protected` **\_onLostBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L108)

___

### \_onRestoreBound

• `Protected` **\_onRestoreBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L109)

___

### \_onUnloadBound

• `Protected` **\_onUnloadBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L110)

___

### \_samplerUniform

• `Protected` **\_samplerUniform**: ``null`` \| `WebGLUniformLocation`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L116)

___

### \_shaderProgram

• `Protected` **\_shaderProgram**: ``null`` \| `WebGLProgram`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L113)

___

### \_sizeUniform

• `Protected` **\_sizeUniform**: ``null`` \| `WebGLUniformLocation`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L117)

___

### \_texture

• `Protected` **\_texture**: ``null`` \| `WebGLTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L112)

___

### \_textureCoordAttribute

• `Protected` **\_textureCoordAttribute**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L115)

___

### \_uvb

• `Protected` **\_uvb**: ``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L119)

___

### \_vb

• `Protected` **\_vb**: ``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L118)

___

### \_vertexPositionAttribute

• `Protected` **\_vertexPositionAttribute**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L114)

___

### \_INSTANCE

▪ `Static` `Protected` **\_INSTANCE**: ``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L105)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L398)

___

### destroyShaders

▸ **destroyShaders**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L240)

___

### destroyTexture

▸ **destroyTexture**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L282)

___

### destroyUvBuffer

▸ **destroyUvBuffer**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L330)

___

### destroyVertexBuffer

▸ **destroyVertexBuffer**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L306)

___

### getCanvas

▸ **getCanvas**(): ``null`` \| `HTMLCanvasElement`

#### Returns

``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L178)

___

### getShader

▸ **getShader**(`gl`, `code`, `type`): ``null`` \| `WebGLShader`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGLRenderingContext` |
| `code` | `string` |
| `type` | `boolean` |

#### Returns

``null`` \| `WebGLShader`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L182)

___

### init

▸ **init**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L149)

___

### makeShaders

▸ **makeShaders**(): ``null`` \| `WebGLShader`

#### Returns

``null`` \| `WebGLShader`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L198)

___

### makeUvBuffer

▸ **makeUvBuffer**(): ``null`` \| `WebGLBuffer`

#### Returns

``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L316)

___

### makeVertexBuffer

▸ **makeVertexBuffer**(): ``null`` \| `WebGLBuffer`

#### Returns

``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L292)

___

### read

▸ **read**(`copyCanvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `copyCanvas` | `HTMLCanvasElement` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L383)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L340)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L174)

___

### updateTexture

▸ **updateTexture**(`width`, `height`, `source`): ``null`` \| `WebGLTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `source` | `TexImageSource` |

#### Returns

``null`` \| `WebGLTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L252)

___

### getInstance

▸ **getInstance**(): [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Returns

[`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L421)
