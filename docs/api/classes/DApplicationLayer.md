[Winter Cardinal UI - v0.160.0](../index.md) / DApplicationLayer

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

• **new DApplicationLayer**(`application`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `application` | [`DApplicationLike`](../interfaces/DApplicationLike.md) |
| `options` | [`DApplicationLayerOptions`](DApplicationLayerOptions.md) |

#### Overrides

Application.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L52)

## Properties

### \_dynamicFontAtlases

• `Protected` **\_dynamicFontAtlases**: ``null`` \| [`DynamicFontAtlases`](DynamicFontAtlases.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L47)

___

### \_elementContainer

• `Protected` **\_elementContainer**: `HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L45)

___

### \_isLocked

• `Protected` **\_isLocked**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L41)

___

### \_isOverlay

• `Protected` **\_isOverlay**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L42)

___

### \_isVisible

• `Protected` **\_isVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L48)

___

### \_options

• `Protected` **\_options**: [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L38)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L46)

___

### \_reflowLimit

• `Protected` **\_reflowLimit**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L43)

___

### \_renderBound

• `Protected` **\_renderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L40)

___

### \_renderId

• `Protected` **\_renderId**: ``null`` \| `number` = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L39)

___

### \_rootElement

• `Protected` **\_rootElement**: `HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L44)

___

### application

• `Readonly` **application**: [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[application](../interfaces/DApplicationLayerLike.md#application)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L50)

___

### loader

• `Readonly` **loader**: `Loader`

Loader instance to help with asset loading.

**`name`** PIXI.Application#loader

**`readonly`**

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[loader](../interfaces/DApplicationLayerLike.md#loader)

#### Inherited from

Application.loader

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1067

___

### renderer

• **renderer**: `Renderer`

WebGL renderer if available, otherwise CanvasRenderer.

**`member`** {PIXI.Renderer|PIXI.CanvasRenderer} PIXI.Application#renderer

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[renderer](../interfaces/DApplicationLayerLike.md#renderer)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[resizeTo](../interfaces/DApplicationLayerLike.md#resizeto)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[screen](../interfaces/DApplicationLayerLike.md#screen)

#### Inherited from

Application.screen

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1030

___

### stage

• **stage**: `Container`

The root display container that's rendered.

**`member`** {PIXI.Container} PIXI.Application#stage

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[stage](../interfaces/DApplicationLayerLike.md#stage)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[ticker](../interfaces/DApplicationLayerLike.md#ticker)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[view](../interfaces/DApplicationLayerLike.md#view)

#### Inherited from

Application.view

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1024

## Accessors

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[height](../interfaces/DApplicationLayerLike.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L298)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[padding](../interfaces/DApplicationLayerLike.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:302](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L302)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[width](../interfaces/DApplicationLayerLike.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L294)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[destroy](../interfaces/DApplicationLayerLike.md#destroy)

#### Inherited from

Application.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1043

___

### getDynamicFontAtlases

▸ **getDynamicFontAtlases**(): [`DynamicFontAtlases`](DynamicFontAtlases.md)

#### Returns

[`DynamicFontAtlases`](DynamicFontAtlases.md)

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[getDynamicFontAtlases](../interfaces/DApplicationLayerLike.md#getdynamicfontatlases)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L338)

___

### getElementContainer

▸ **getElementContainer**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[getElementContainer](../interfaces/DApplicationLayerLike.md#getelementcontainer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:334](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L334)

___

### getFocusController

▸ **getFocusController**(): [`DControllerFocus`](../interfaces/DControllerFocus.md)

#### Returns

[`DControllerFocus`](../interfaces/DControllerFocus.md)

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[getFocusController](../interfaces/DApplicationLayerLike.md#getfocuscontroller)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L326)

___

### getRootElement

▸ **getRootElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[getRootElement](../interfaces/DApplicationLayerLike.md#getrootelement)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L330)

___

### initDoubleClickHandling

▸ `Protected` **initDoubleClickHandling**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L222)

___

### initFocusHandling

▸ `Protected` **initFocusHandling**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L156)

___

### initResizeHandling

▸ `Protected` **initResizeHandling**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L173)

___

### initRootElement

▸ `Protected` **initRootElement**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L116)

___

### initStage

▸ `Protected` **initStage**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L91)

___

### initView

▸ `Protected` **initView**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L98)

___

### initWheelHandling

▸ `Protected` **initWheelHandling**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L199)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[lock](../interfaces/DApplicationLayerLike.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L241)

___

### newElementContainer

▸ `Protected` **newElementContainer**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L81)

___

### onResize

▸ `Protected` **onResize**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L181)

___

### onStageDirty

▸ `Protected` **onStageDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L255)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[reflow](../interfaces/DApplicationLayerLike.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L306)

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

[src/main/typescript/wcardinal/ui/d-application-layer.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L276)

___

### resize

▸ **resize**(): `void`

If `resizeTo` is set, calling this function
will resize to the width and height of that element.

**`method`** PIXI.Application#resize

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[resize](../interfaces/DApplicationLayerLike.md#resize)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[start](../interfaces/DApplicationLayerLike.md#start)

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

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[stop](../interfaces/DApplicationLayerLike.md#stop)

#### Inherited from

Application.stop

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1073

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[unlock](../interfaces/DApplicationLayerLike.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:245](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L245)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DApplicationLayerLike](../interfaces/DApplicationLayerLike.md).[update](../interfaces/DApplicationLayerLike.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-application-layer.ts#L249)

___

### registerPlugin

▸ `Static` **registerPlugin**(`plugin`): `void`

Register a middleware plugin for the application

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plugin` | `Plugin` | Plugin being installed |

#### Returns

`void`

#### Inherited from

Application.registerPlugin

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:1014
