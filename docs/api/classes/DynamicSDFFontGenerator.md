[Winter Cardinal UI - v0.199.0](../index.md) / DynamicSDFFontGenerator

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

• **new DynamicSDFFontGenerator**()

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L90)

## Properties

### \_canvas

• `Protected` **\_canvas**: ``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L76)

___

### \_gl

• `Protected` **\_gl**: ``null`` \| `WebGLRenderingContext`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L80)

___

### \_onLostBound

• `Protected` **\_onLostBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L77)

___

### \_onRestoreBound

• `Protected` **\_onRestoreBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L78)

___

### \_onUnloadBound

• `Protected` **\_onUnloadBound**: `EventListener`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L79)

___

### \_samplerUniform

• `Protected` **\_samplerUniform**: ``null`` \| `WebGLUniformLocation`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L85)

___

### \_shaderProgram

• `Protected` **\_shaderProgram**: ``null`` \| `WebGLProgram`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L82)

___

### \_sizeUniform

• `Protected` **\_sizeUniform**: ``null`` \| `WebGLUniformLocation`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L86)

___

### \_texture

• `Protected` **\_texture**: ``null`` \| `WebGLTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L81)

___

### \_textureCoordAttribute

• `Protected` **\_textureCoordAttribute**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L84)

___

### \_uvb

• `Protected` **\_uvb**: ``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L88)

___

### \_vb

• `Protected` **\_vb**: ``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L87)

___

### \_vertexPositionAttribute

• `Protected` **\_vertexPositionAttribute**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L83)

___

### \_INSTANCE

▪ `Static` `Protected` **\_INSTANCE**: ``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L74)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L375)

___

### destroyShaders

▸ **destroyShaders**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L215)

___

### destroyTexture

▸ **destroyTexture**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L259)

___

### destroyUvBuffer

▸ **destroyUvBuffer**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L307)

___

### destroyVertexBuffer

▸ **destroyVertexBuffer**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L283)

___

### getCanvas

▸ **getCanvas**(): ``null`` \| `HTMLCanvasElement`

#### Returns

``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L147)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L151)

___

### init

▸ **init**(): [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Returns

[`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L118)

___

### makeShaders

▸ **makeShaders**(): ``null`` \| `WebGLShader`

#### Returns

``null`` \| `WebGLShader`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L167)

___

### makeUvBuffer

▸ **makeUvBuffer**(): ``null`` \| `WebGLBuffer`

#### Returns

``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:293](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L293)

___

### makeVertexBuffer

▸ **makeVertexBuffer**(): ``null`` \| `WebGLBuffer`

#### Returns

``null`` \| `WebGLBuffer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:269](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L269)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L360)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:317](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L317)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L143)

___

### updateTexture

▸ **updateTexture**(`source`): ``null`` \| `WebGLTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `TexImageSource` |

#### Returns

``null`` \| `WebGLTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L227)

___

### getInstance

▸ `Static` **getInstance**(): [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Returns

[`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts:398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-generator.ts#L398)
