[Winter Cardinal UI - v0.407.0](../index.md) / EShapeRenderer

# Class: EShapeRenderer

## Hierarchy

- `ObjectRenderer`

  ↳ **`EShapeRenderer`**

## Table of contents

### Constructors

- [constructor](EShapeRenderer.md#constructor)

### Properties

- [\_bufferSizeMax](EShapeRenderer.md#_buffersizemax)
- [\_iterator](EShapeRenderer.md#_iterator)
- [\_shader](EShapeRenderer.md#_shader)
- [renderer](EShapeRenderer.md#renderer)
- [SHADER](EShapeRenderer.md#shader)

### Methods

- [destroy](EShapeRenderer.md#destroy)
- [flush](EShapeRenderer.md#flush)
- [getBufferSizeMax](EShapeRenderer.md#getbuffersizemax)
- [render](EShapeRenderer.md#render)
- [render\_](EShapeRenderer.md#render_)
- [start](EShapeRenderer.md#start)
- [stop](EShapeRenderer.md#stop)
- [updateAtlas](EShapeRenderer.md#updateatlas)
- [updateAtlases](EShapeRenderer.md#updateatlases)
- [updateBuffers](EShapeRenderer.md#updatebuffers)
- [updateFontAtlas](EShapeRenderer.md#updatefontatlas)
- [updateFontAtlases](EShapeRenderer.md#updatefontatlases)

## Constructors

### constructor

• **new EShapeRenderer**(`renderer`): [`EShapeRenderer`](EShapeRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

[`EShapeRenderer`](EShapeRenderer.md)

#### Overrides

ObjectRenderer.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L250)

## Properties

### \_bufferSizeMax

• `Protected` **\_bufferSizeMax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L248)

___

### \_iterator

• `Protected` **\_iterator**: [`EShapeRendererIterator`](EShapeRendererIterator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L247)

___

### \_shader

• `Protected` **\_shader**: ``null`` \| `Shader`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L246)

___

### renderer

• **renderer**: `Renderer`

The renderer this manager works for.

**`Member`**

PIXI.ObjectRenderer#renderer

#### Inherited from

ObjectRenderer.renderer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:2448

___

### SHADER

▪ `Static` **SHADER**: ``null`` \| `Shader` = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L244)

## Methods

### destroy

▸ **destroy**(): `void`

Generic destruction method that frees all resources. This
should be called by subclasses.

#### Returns

`void`

#### Inherited from

ObjectRenderer.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:2458

___

### flush

▸ **flush**(): `void`

Stub method that should be used to empty the current
batch by rendering objects now.

#### Returns

`void`

#### Inherited from

ObjectRenderer.flush

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:2453

___

### getBufferSizeMax

▸ **getBufferSizeMax**(`renderer`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L259)

___

### render

▸ **render**(`object`): `void`

Keeps the object to render. It doesn't have to be
rendered immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `DisplayObject` | The object to render. |

#### Returns

`void`

#### Inherited from

ObjectRenderer.render

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:2477

___

### render\_

▸ **render_**(`container`, `shape`, `shapes`, `isDirty`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`EShapeContainer`](EShapeContainer.md) |
| `shape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `isDirty` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L366)

___

### start

▸ **start**(): `void`

Stub method that initializes any state required before
rendering starts. It is different from the `prerender`
signal, which occurs every frame, in that it is called
whenever an object requests _this_ renderer specifically.

#### Returns

`void`

#### Inherited from

ObjectRenderer.start

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:2465

___

### stop

▸ **stop**(): `void`

Stops the renderer. It should free up any state and
become dormant.

#### Returns

`void`

#### Inherited from

ObjectRenderer.stop

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:2470

___

### updateAtlas

▸ **updateAtlas**(`shape`, `atlas`, `fontAtlases`, `defaultTexture`, `baseTexture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `atlas` | [`DynamicAtlas`](DynamicAtlas.md) |
| `fontAtlases` | [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md) |
| `defaultTexture` | `Texture` |
| `baseTexture` | `BaseTexture` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L268)

___

### updateAtlases

▸ **updateAtlases**(`shapes`, `atlas`, `fontAtlases`, `defaultTexture`, `baseTexture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `atlas` | [`DynamicAtlas`](DynamicAtlas.md) |
| `fontAtlases` | [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md) |
| `defaultTexture` | `Texture` |
| `baseTexture` | `BaseTexture` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L306)

___

### updateBuffers

▸ **updateBuffers**(`shape`, `shapes`, `buffers`, `renderer`, `antialiasWeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `buffers` | [`EShapeBuffer`](EShapeBuffer.md)[] |
| `renderer` | `Renderer` |
| `antialiasWeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:419](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L419)

___

### updateFontAtlas

▸ **updateFontAtlas**(`shape`, `atlas`, `fontAtlases`, `defaultTexture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `atlas` | [`DynamicAtlas`](DynamicAtlas.md) |
| `fontAtlases` | [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md) |
| `defaultTexture` | `Texture` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:325](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L325)

___

### updateFontAtlases

▸ **updateFontAtlases**(`shapes`, `atlas`, `fontAtlases`, `defaultTexture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `atlas` | [`DynamicAtlas`](DynamicAtlas.md) |
| `fontAtlases` | [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md) |
| `defaultTexture` | `Texture` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:348](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L348)
