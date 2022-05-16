[Winter Cardinal UI - v0.167.0](../index.md) / DApplicationLayerLike

# Interface: DApplicationLayerLike

## Hierarchy

- `Application`

  ↳ **`DApplicationLayerLike`**

## Implemented by

- [`DApplicationLayer`](../classes/DApplicationLayer.md)

## Table of contents

### Properties

- [application](DApplicationLayerLike.md#application)
- [height](DApplicationLayerLike.md#height)
- [loader](DApplicationLayerLike.md#loader)
- [padding](DApplicationLayerLike.md#padding)
- [renderer](DApplicationLayerLike.md#renderer)
- [resizeTo](DApplicationLayerLike.md#resizeto)
- [screen](DApplicationLayerLike.md#screen)
- [stage](DApplicationLayerLike.md#stage)
- [ticker](DApplicationLayerLike.md#ticker)
- [view](DApplicationLayerLike.md#view)
- [width](DApplicationLayerLike.md#width)

### Methods

- [destroy](DApplicationLayerLike.md#destroy)
- [getDynamicFontAtlases](DApplicationLayerLike.md#getdynamicfontatlases)
- [getElementContainer](DApplicationLayerLike.md#getelementcontainer)
- [getFocusController](DApplicationLayerLike.md#getfocuscontroller)
- [getRootElement](DApplicationLayerLike.md#getrootelement)
- [lock](DApplicationLayerLike.md#lock)
- [reflow](DApplicationLayerLike.md#reflow)
- [render](DApplicationLayerLike.md#render)
- [resize](DApplicationLayerLike.md#resize)
- [start](DApplicationLayerLike.md#start)
- [stop](DApplicationLayerLike.md#stop)
- [unlock](DApplicationLayerLike.md#unlock)
- [update](DApplicationLayerLike.md#update)

## Properties

### application

• `Readonly` **application**: [`DApplicationLike`](DApplicationLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L8)

___

### height

• `Readonly` **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L10)

___

### loader

• `Readonly` **loader**: `Loader`

Loader instance to help with asset loading.

**`name`** PIXI.Application#loader

**`readonly`**

#### Inherited from

Application.loader

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1067

___

### padding

• `Readonly` **padding**: [`DPadding`](DPadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L11)

___

### renderer

• **renderer**: `Renderer`

WebGL renderer if available, otherwise CanvasRenderer.

**`member`** {PIXI.Renderer|PIXI.CanvasRenderer} PIXI.Application#renderer

#### Inherited from

Application.renderer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1003

___

### resizeTo

• **resizeTo**: `HTMLElement` \| `Window`

The element or window to resize the application to.

**`name`** resizeTo

**`memberof`** PIXI.Application#

#### Inherited from

Application.resizeTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1054

___

### screen

• `Readonly` **screen**: `Rectangle`

Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.

**`member`** {PIXI.Rectangle}

**`readonly`**

#### Inherited from

Application.screen

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1030

___

### stage

• **stage**: `Container`

The root display container that's rendered.

**`member`** {PIXI.Container} PIXI.Application#stage

#### Inherited from

Application.stage

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1008

___

### ticker

• **ticker**: `Ticker`

Ticker for doing render updates.

**`name`** ticker

**`memberof`** PIXI.Application#

**`default`** PIXI.Ticker.shared

#### Inherited from

Application.ticker

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1088

___

### view

• `Readonly` **view**: `HTMLCanvasElement`

Reference to the renderer's canvas element.

**`member`** {HTMLCanvasElement}

**`readonly`**

#### Inherited from

Application.view

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1024

___

### width

• `Readonly` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L9)

## Methods

### destroy

▸ **destroy**(`removeView?`, `stageOptions?`): `void`

Destroy and don't use after this.

#### Parameters

| Name | Type |
| :------ | :------ |
| `removeView?` | `boolean` |
| `stageOptions?` | `Object` |
| `stageOptions.baseTexture?` | `boolean` |
| `stageOptions.children?` | `boolean` |
| `stageOptions.texture?` | `boolean` |

#### Returns

`void`

#### Inherited from

Application.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1043

___

### getDynamicFontAtlases

▸ **getDynamicFontAtlases**(): [`DynamicFontAtlases`](../classes/DynamicFontAtlases.md)

#### Returns

[`DynamicFontAtlases`](../classes/DynamicFontAtlases.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L21)

___

### getElementContainer

▸ **getElementContainer**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L23)

___

### getFocusController

▸ **getFocusController**(): [`DControllerFocus`](DControllerFocus.md)

#### Returns

[`DControllerFocus`](DControllerFocus.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L20)

___

### getRootElement

▸ **getRootElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L22)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L14)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L18)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Overrides

Application.render

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L17)

___

### resize

▸ **resize**(): `void`

If `resizeTo` is set, calling this function
will resize to the width and height of that element.

**`method`** PIXI.Application#resize

#### Returns

`void`

#### Inherited from

Application.resize

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1060

___

### start

▸ **start**(): `void`

Convenience method for starting the render.

**`method`** PIXI.Application#start

#### Returns

`void`

#### Inherited from

Application.start

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1079

___

### stop

▸ **stop**(): `void`

Convenience method for stopping the render.

**`method`** PIXI.Application#stop

#### Returns

`void`

#### Inherited from

Application.stop

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1073

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L13)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L16)
