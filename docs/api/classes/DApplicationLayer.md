[Winter Cardinal UI - v0.457.0](../index.md) / DApplicationLayer

# Class: DApplicationLayer

## Hierarchy

- `Application`

  ↳ **`DApplicationLayer`**

## Implements

- [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

## Table of contents

### Constructors

- [constructor](DApplicationLayer.md#constructor)

### Properties

- [\_dynamicFontAtlases](DApplicationLayer.md#_dynamicfontatlases)
- [\_elementContainer](DApplicationLayer.md#_elementcontainer)
- [\_isLocked](DApplicationLayer.md#_islocked)
- [\_isOverlay](DApplicationLayer.md#_isoverlay)
- [\_isVisible](DApplicationLayer.md#_isvisible)
- [\_options](DApplicationLayer.md#_options)
- [\_padding](DApplicationLayer.md#_padding)
- [\_reflowLimit](DApplicationLayer.md#_reflowlimit)
- [\_renderBound](DApplicationLayer.md#_renderbound)
- [\_renderId](DApplicationLayer.md#_renderid)
- [\_rootElement](DApplicationLayer.md#_rootelement)
- [application](DApplicationLayer.md#application)
- [loader](DApplicationLayer.md#loader)
- [renderer](DApplicationLayer.md#renderer)
- [resizeTo](DApplicationLayer.md#resizeto)
- [screen](DApplicationLayer.md#screen)
- [stage](DApplicationLayer.md#stage)
- [ticker](DApplicationLayer.md#ticker)
- [view](DApplicationLayer.md#view)

### Accessors

- [height](DApplicationLayer.md#height)
- [padding](DApplicationLayer.md#padding)
- [width](DApplicationLayer.md#width)

### Methods

- [destroy](DApplicationLayer.md#destroy)
- [getDynamicFontAtlases](DApplicationLayer.md#getdynamicfontatlases)
- [getElementContainer](DApplicationLayer.md#getelementcontainer)
- [getFocusController](DApplicationLayer.md#getfocuscontroller)
- [getRootElement](DApplicationLayer.md#getrootelement)
- [initDoubleClickHandling](DApplicationLayer.md#initdoubleclickhandling)
- [initFocusHandling](DApplicationLayer.md#initfocushandling)
- [initResizeHandling](DApplicationLayer.md#initresizehandling)
- [initRootElement](DApplicationLayer.md#initrootelement)
- [initStage](DApplicationLayer.md#initstage)
- [initView](DApplicationLayer.md#initview)
- [initWheelHandling](DApplicationLayer.md#initwheelhandling)
- [lock](DApplicationLayer.md#lock)
- [newElementContainer](DApplicationLayer.md#newelementcontainer)
- [onResize](DApplicationLayer.md#onresize)
- [onStageDirty](DApplicationLayer.md#onstagedirty)
- [queueResize](DApplicationLayer.md#queueresize)
- [reflow](DApplicationLayer.md#reflow)
- [render](DApplicationLayer.md#render)
- [resize](DApplicationLayer.md#resize)
- [start](DApplicationLayer.md#start)
- [stop](DApplicationLayer.md#stop)
- [unlock](DApplicationLayer.md#unlock)
- [update](DApplicationLayer.md#update)
- [registerPlugin](DApplicationLayer.md#registerplugin)

## Constructors

### constructor

• **new DApplicationLayer**(`application`, `options`): [`DApplicationLayer`](DApplicationLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `application` | [`DApplicationLike`](../interfaces/DApplicationLike.md) |
| `options` | [`DApplicationLayerOptions`](DApplicationLayerOptions.md) |

#### Returns

[`DApplicationLayer`](DApplicationLayer.md)

#### Overrides

Application.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L49)

## Properties

### \_dynamicFontAtlases

• `Protected` **\_dynamicFontAtlases**: ``null`` \| [`DynamicFontAtlases`](DynamicFontAtlases.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L44)

___

### \_elementContainer

• `Protected` **\_elementContainer**: `HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L42)

___

### \_isLocked

• `Protected` **\_isLocked**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L38)

___

### \_isOverlay

• `Protected` **\_isOverlay**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L39)

___

### \_isVisible

• `Protected` **\_isVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L45)

___

### \_options

• `Protected` **\_options**: [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L35)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L43)

___

### \_reflowLimit

• `Protected` **\_reflowLimit**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L40)

___

### \_renderBound

• `Protected` **\_renderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L37)

___

### \_renderId

• `Protected` **\_renderId**: ``null`` \| `number` = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L36)

___

### \_rootElement

• `Protected` **\_rootElement**: `HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L41)

___

### application

• `Readonly` **application**: [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[application](../interfaces/DApplicationLayerLike.md#application)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L47)

___

### loader

• `Readonly` **loader**: `Loader`

Loader instance to help with asset loading.

**`Name`**

PIXI.Application#loader

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[loader](../interfaces/DApplicationLayerLike.md#loader)

#### Inherited from

Application.loader

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1064

___

### renderer

• **renderer**: `Renderer`

WebGL renderer if available, otherwise CanvasRenderer.

**`Member`**

PIXI.Application#renderer

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[renderer](../interfaces/DApplicationLayerLike.md#renderer)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[resizeTo](../interfaces/DApplicationLayerLike.md#resizeto)

#### Inherited from

Application.resizeTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1043

___

### screen

• `Readonly` **screen**: `Rectangle`

Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.

**`Member`**

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[screen](../interfaces/DApplicationLayerLike.md#screen)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[stage](../interfaces/DApplicationLayerLike.md#stage)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[ticker](../interfaces/DApplicationLayerLike.md#ticker)

#### Inherited from

Application.ticker

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1085

___

### view

• `Readonly` **view**: `HTMLCanvasElement`

Reference to the renderer's canvas element.

**`Member`**

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[view](../interfaces/DApplicationLayerLike.md#view)

#### Inherited from

Application.view

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1012

## Accessors

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[height](../interfaces/DApplicationLayerLike.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:317](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L317)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[padding](../interfaces/DApplicationLayerLike.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:321](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L321)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[width](../interfaces/DApplicationLayerLike.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:313](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L313)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[destroy](../interfaces/DApplicationLayerLike.md#destroy)

#### Inherited from

Application.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1031

___

### getDynamicFontAtlases

▸ **getDynamicFontAtlases**(): [`DynamicFontAtlases`](DynamicFontAtlases.md)

#### Returns

[`DynamicFontAtlases`](DynamicFontAtlases.md)

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[getDynamicFontAtlases](../interfaces/DApplicationLayerLike.md#getdynamicfontatlases)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L357)

___

### getElementContainer

▸ **getElementContainer**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[getElementContainer](../interfaces/DApplicationLayerLike.md#getelementcontainer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:353](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L353)

___

### getFocusController

▸ **getFocusController**(): [`DControllerFocus`](../interfaces/DControllerFocus.md)

#### Returns

[`DControllerFocus`](../interfaces/DControllerFocus.md)

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[getFocusController](../interfaces/DApplicationLayerLike.md#getfocuscontroller)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L345)

___

### getRootElement

▸ **getRootElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[getRootElement](../interfaces/DApplicationLayerLike.md#getrootelement)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:349](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L349)

___

### initDoubleClickHandling

▸ **initDoubleClickHandling**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L241)

___

### initFocusHandling

▸ **initFocusHandling**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L153)

___

### initResizeHandling

▸ **initResizeHandling**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L170)

___

### initRootElement

▸ **initRootElement**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L113)

___

### initStage

▸ **initStage**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L88)

___

### initView

▸ **initView**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L95)

___

### initWheelHandling

▸ **initWheelHandling**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L218)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[lock](../interfaces/DApplicationLayerLike.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L260)

___

### newElementContainer

▸ **newElementContainer**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L78)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L187)

___

### onStageDirty

▸ **onStageDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L274)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[queueResize](../interfaces/DApplicationLayerLike.md#queueresize)

#### Inherited from

Application.queueResize

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1050

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[reflow](../interfaces/DApplicationLayerLike.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:325](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L325)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[render](../interfaces/DApplicationLayerLike.md#render)

#### Overrides

Application.render

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L295)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[resize](../interfaces/DApplicationLayerLike.md#resize)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[start](../interfaces/DApplicationLayerLike.md#start)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[stop](../interfaces/DApplicationLayerLike.md#stop)

#### Inherited from

Application.stop

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1070

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[unlock](../interfaces/DApplicationLayerLike.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L264)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[update](../interfaces/DApplicationLayerLike.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L268)

___

### registerPlugin

▸ **registerPlugin**(`plugin`): `void`

Register a middleware plugin for the application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plugin` | `Plugin` | Plugin being installed |

#### Returns

`void`

**`Static`**

#### Inherited from

Application.registerPlugin

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1002
