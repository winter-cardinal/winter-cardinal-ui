[Winter Cardinal UI - v0.374.0](../index.md) / EShapeRenderer

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

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L240)

## Properties

### \_bufferSizeMax

• `Protected` **\_bufferSizeMax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L238)

___

### \_iterator

• `Protected` **\_iterator**: [`EShapeRendererIterator`](EShapeRendererIterator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L237)

___

### \_shader

• `Protected` **\_shader**: ``null`` \| `Shader`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L236)

___

### renderer

• **renderer**: `Renderer`

The renderer this manager works for.

**`Member`**

PIXI.ObjectRenderer#renderer

#### Inherited from

ObjectRenderer.renderer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:2422

___

### SHADER

▪ `Static` **SHADER**: ``null`` \| `Shader` = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L234)

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

node_modules/pixi.js/pixi.js.d.ts:2432

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

node_modules/pixi.js/pixi.js.d.ts:2427

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

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L249)

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

node_modules/pixi.js/pixi.js.d.ts:2451

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

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L355)

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

node_modules/pixi.js/pixi.js.d.ts:2439

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

node_modules/pixi.js/pixi.js.d.ts:2444

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

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L258)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L295)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:408](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L408)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L314)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts:337](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-renderer.ts#L337)
