[Winter Cardinal UI - v0.374.0](../index.md) / DynamicSDFFontGenerator

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L94)

## Properties

### \_canvas

• `Protected` **\_canvas**: ``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L80)

___

### \_gl

• `Protected` **\_gl**: ``null`` \| `WebGLRenderingContext`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L84)

___

### \_onLostBound

• `Protected` **\_onLostBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L81)

___

### \_onRestoreBound

• `Protected` **\_onRestoreBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L82)

___

### \_onUnloadBound

• `Protected` **\_onUnloadBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L83)

___

### \_samplerUniform

• `Protected` **\_samplerUniform**: ``null`` \| `WebGLUniformLocation`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L89)

___

### \_shaderProgram

• `Protected` **\_shaderProgram**: ``null`` \| `WebGLProgram`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L86)

___

### \_sizeUniform

• `Protected` **\_sizeUniform**: ``null`` \| `WebGLUniformLocation`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L90)

___

### \_texture

• `Protected` **\_texture**: ``null`` \| `WebGLTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L85)

___

### \_textureCoordAttribute

• `Protected` **\_textureCoordAttribute**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L88)

___

### \_uvb

• `Protected` **\_uvb**: ``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L92)

___

### \_vb

• `Protected` **\_vb**: ``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L91)

___

### \_vertexPositionAttribute

• `Protected` **\_vertexPositionAttribute**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L87)

___

### \_INSTANCE

▪ `Static` `Protected` **\_INSTANCE**: ``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L78)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L387)

___

### destroyShaders

▸ **destroyShaders**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L219)

___

### destroyTexture

▸ **destroyTexture**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L271)

___

### destroyUvBuffer

▸ **destroyUvBuffer**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L319)

___

### destroyVertexBuffer

▸ **destroyVertexBuffer**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L295)

___

### getCanvas

▸ **getCanvas**(): ``null`` \| `HTMLCanvasElement`

#### Returns

``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L151)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L155)

___

### init

▸ **init**(): [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Returns

[`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L122)

___

### makeShaders

▸ **makeShaders**(): ``null`` \| `WebGLShader`

#### Returns

``null`` \| `WebGLShader`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L171)

___

### makeUvBuffer

▸ **makeUvBuffer**(): ``null`` \| `WebGLBuffer`

#### Returns

``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L305)

___

### makeVertexBuffer

▸ **makeVertexBuffer**(): ``null`` \| `WebGLBuffer`

#### Returns

``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L281)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L372)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:329](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L329)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L147)

___

### updateTexture

▸ **updateTexture**(`source`): ``null`` \| `WebGLTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `OffscreenCanvas` \| `ImageBitmap` \| `HTMLCanvasElement` \| `HTMLImageElement` \| `HTMLVideoElement` \| `ImageData` |

#### Returns

``null`` \| `WebGLTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L231)

___

### getInstance

▸ **getInstance**(): [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Returns

[`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L410)
