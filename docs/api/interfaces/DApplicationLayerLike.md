[Winter Cardinal UI - v0.457.0](../index.md) / DApplicationLayerLike

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
- [queueResize](DApplicationLayerLike.md#queueresize)
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

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L8)

___

### height

• `Readonly` **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L10)

___

### loader

• `Readonly` **loader**: `Loader`

Loader instance to help with asset loading.

**`Name`**

PIXI.Application#loader

#### Inherited from

Application.loader

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1064

___

### padding

• `Readonly` **padding**: [`DPadding`](DPadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L11)

___

### renderer

• **renderer**: `Renderer`

WebGL renderer if available, otherwise CanvasRenderer.

**`Member`**

PIXI.Application#renderer

#### Inherited from

Application.renderer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:991

___

### resizeTo

• **resizeTo**: `HTMLElement` \| `Window`

The HTML element or window to automatically resize the
renderer's view element to match width and height.

**`Name`**

resizeTo

**`Memberof`**

PIXI.Application#

#### Inherited from

Application.resizeTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1043

___

### screen

• `Readonly` **screen**: `Rectangle`

Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.

**`Member`**

#### Inherited from

Application.screen

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1018

___

### stage

• **stage**: `Container`

The root display container that's rendered.

**`Member`**

PIXI.Application#stage

#### Inherited from

Application.stage

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:996

___

### ticker

• **ticker**: `Ticker`

Ticker for doing render updates.

**`Name`**

ticker

**`Memberof`**

PIXI.Application#

**`Default`**

```ts
PIXI.Ticker.shared
```

#### Inherited from

Application.ticker

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1085

___

### view

• `Readonly` **view**: `HTMLCanvasElement`

Reference to the renderer's canvas element.

**`Member`**

#### Inherited from

Application.view

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1012

___

### width

• `Readonly` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L9)

## Methods

### destroy

▸ **destroy**(`removeView?`, `stageOptions?`): `void`

Destroy and don't use after this.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `removeView?` | `boolean` | Automatically remove canvas from DOM. |
| `stageOptions?` | `Object` | Options parameter. A boolean will act as if all options have been set to that value |
| `stageOptions.baseTexture?` | `boolean` | Only used for child Sprites if stageOptions.children is set to true. Should it destroy the base texture of the child sprite |
| `stageOptions.children?` | `boolean` | if set to true, all the children will have their destroy method called as well. 'stageOptions' will be passed on to those calls. |
| `stageOptions.texture?` | `boolean` | Only used for child Sprites if stageOptions.children is set to true. Should it destroy the texture of the child sprite |

#### Returns

`void`

#### Inherited from

Application.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1031

___

### getDynamicFontAtlases

▸ **getDynamicFontAtlases**(): [`DynamicFontAtlases`](../classes/DynamicFontAtlases.md)

#### Returns

[`DynamicFontAtlases`](../classes/DynamicFontAtlases.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L21)

___

### getElementContainer

▸ **getElementContainer**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L23)

___

### getFocusController

▸ **getFocusController**(): [`DControllerFocus`](DControllerFocus.md)

#### Returns

[`DControllerFocus`](DControllerFocus.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L20)

___

### getRootElement

▸ **getRootElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L22)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L14)

___

### queueResize

▸ **queueResize**(): `void`

Resize is throttled, so it's
safe to call this multiple times per frame and it'll
only be called once.

#### Returns

`void`

**`Method`**

PIXI.Application#queueResize

#### Inherited from

Application.queueResize

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1050

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L18)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Overrides

Application.render

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L17)

___

### resize

▸ **resize**(): `void`

Execute an immediate resize on the renderer, this is not
throttled and can be expensive to call many times in a row.
Will resize only if `resizeTo` property is set.

#### Returns

`void`

**`Method`**

PIXI.Application#resize

#### Inherited from

Application.resize

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1057

___

### start

▸ **start**(): `void`

Convenience method for starting the render.

#### Returns

`void`

**`Method`**

PIXI.Application#start

#### Inherited from

Application.start

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1076

___

### stop

▸ **stop**(): `void`

Convenience method for stopping the render.

#### Returns

`void`

**`Method`**

PIXI.Application#stop

#### Inherited from

Application.stop

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1070

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L13)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-like.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer-like.ts#L16)
